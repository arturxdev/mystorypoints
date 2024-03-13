"use client";
import Image from "next/image";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
export default function Table({ data, user = {} }: { data: any; user: any }) {
  const router = useRouter();
  const [issueType, setIssueType] = useState<string[]>([]);
  const [unclasificated, setUnclasificated] = useState<any[]>([]);
  const handleRefresh = () => {
    router.reload();
  };
  function checkboxHandler(e: any) {
    let isSelected = e.target.checked;
    let value = e.target.value;
    if (isSelected) {
      setIssueType([...issueType, value]);
    } else {
      setIssueType((prevData) => {
        return prevData.filter((id) => {
          return id !== value;
        });
      });
    }
  }
  useEffect(() => {
    if (data) {
      setUnclasificated(
        data?.unclasificated.filter((task: any) =>
          issueType.includes(task.issueType),
        ),
      );
    }
  }, [issueType, data]);
  useEffect(() => {
    if (data) {
      setIssueType(data.issueTypes);
      setUnclasificated(data.unclasificated);
    }
  }, [data]);
  return (
    <>
      <div className="w-5/6 mx-auto mt-2">
        <div className="flex rounded-md justify-between px-5 py-5 bg-indigo-50 my-10">
          <div>
            <p className="mt-2">
              <Image
                width="32"
                height="32"
                className="rounded-full"
                src={user.img}
                alt="avatar img"
              />
            </p>
            <p className="mt-2">
              <span className="font-medium">Usuario: </span>
              <span className="text-indigo-500">{user.name}</span>
            </p>
            <p>
              <span className="font-medium">Semana actual: </span>
              <span className="text-indigo-500">{data?.actual}</span>
            </p>
            <p>
              <span className="font-medium">Tareas sin clasificar: </span>
              <span className="text-indigo-500">
                {data?.unclasificated.length}
              </span>
            </p>
          </div>
          <div className="self-center">
            <button
              className="btn-primary flex items-center"
              onClick={handleRefresh}
            >
              <Image
                className="mr-1 inline-block"
                src="/icons/loop-left-line.svg"
                width="20"
                height="20"
                alt="icon"
              />
              <span>Actualizar</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto mt-2">
        <p>Tipos de tareas</p>
        {data?.issueTypes.map((item: any, index: any) => (
          <label className="mr-2" key={index}>
            <input
              className="mr-1"
              type="checkbox"
              checked={issueType.includes(item)}
              onChange={checkboxHandler}
              value={item}
            />
            {item}
          </label>
        ))}
        <div className="flex justify-start mt-2 flex-wrap">
          {unclasificated.map((task: any, index: any) => (
            <div className="inline-block tag-danger tooltip" key={index}>
              <span className="tooltiptext">{task.summary}</span>
              <a
                href={`https://koibanx.atlassian.net/browse/${task.key}`}
                target="_blank_"
              >
                <p>
                  <span className="font-semibold">{task.key}</span>
                </p>
                <p>
                  <span className="mr-1">{task.issueType}</span>
                  <span className={task.endDate ? "" : "text-red-500"}>
                    endDate{" "}
                  </span>
                  <span className={task.endDate ? "" : "text-red-500"}>
                    storyPoints
                  </span>
                </p>
              </a>
            </div>
          ))}
        </div>
        <div className="mx-auto w-full flex justify-center my-10">
          <table className="w-full">
            <thead>
              <tr>
                <th>Semana</th>
                <th>Fecha Inicio</th>
                <th>Fecha Final</th>
                <th>Story points</th>
                <th>Issues</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                Object.entries(data?.cal).map((key, index) => (
                  <tr
                    key={index}
                    className={
                      data?.cal[key[0]].week === data.actual
                        ? "!bg-indigo-100"
                        : ""
                    }
                  >
                    <td className="text-center">{data.cal[key[0]].week}</td>
                    <td className="text-center">{data.cal[key[0]].start}</td>
                    <td className="text-center">{data.cal[key[0]].end}</td>
                    <td className="text-center">{data.cal[key[0]].total}</td>
                    <td>
                      {data.cal[key[0]].issues.map((issue: any, index: any) => (
                        <div className="inline-block tooltip" key={index}>
                          <span className="tooltiptext">{issue.summary} </span>
                          <a
                            target="_blank_"
                            href={`https://koibanx.atlassian.net/browse/${issue.key}`}
                            className={
                              issue.resolution === "Done" ||
                                issue.resolution === "Finalizada" ||
                                issue.resolution === "Finalizado"
                                ? "tooltip tag-success"
                                : "tooltip tag-warning"
                            }
                          >
                            <p>
                              <span className="font-semibold">{issue.key}</span>
                              <span> {issue.storyPoint}</span>
                            </p>
                          </a>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
