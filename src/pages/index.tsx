"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Table from "./table";

async function getData(userId: string | null) {
  const data = await axios.get("/api/hello?userId=" + userId);
  return data;
}
async function getUser(userId: string | null) {
  const data = await axios.get("/api/user?userId=" + userId);
  return data;
}

export default function Home() {
  const onOptionChange = (e: any) => {
    setMonths(e.target.value);
  };
  const [data, setData] = useState<any>({ status: false });
  const [user, setUser] = useState<any>({ status: false });
  const [months, setMonths] = useState<number>(1);
  const [userId, setUserId] = useState<string>("");
  const searchParams = useSearchParams();
  const userIdQuery = searchParams.get("userId");
  useEffect(() => {
    if (userIdQuery) {
      setUserId(userIdQuery);
      console.log("userIdQuery", userIdQuery);
      getData(userIdQuery).then((res) => setData(res.data));
      getUser(userIdQuery).then((res) => setUser(res.data));
    }
  }, [userIdQuery]);
  return (
    <main>
      <header className="w-full bg-indigo-500 py-3 px-5 text-white flex items-center justify-between">
        <span className="text-xl font-bold">My story points</span>
        <div className="tooltips">
          <button className="btn-primary flex items-center">
            <img
              className="mr-1 inline-block"
              alt="icon"
              src="/icons/file-copy-line.svg"
              width="20px"
            />
            <span>Copiar link</span>
          </button>
        </div>
      </header>
      <div className="w-5/6 mx-auto mt-10">
        <div className="w-2/4 m-auto">
          <img src="/logo-full.png" alt="logo" />
        </div>
        <p className="mt-5 text-xl text-center mb-20 font-semibold text-gray-600">
          Visualiza tus story points de una manera fácil para saber tu
          rendimiento
        </p>
      </div>
      <div className="w-5/6 mx-auto mt-2">
        <form action="?/tasks" method="POST">
          <div className="w-full">
            <span>Usuario a buscar</span>
            <input
              className="px-3 py-2 mb-4 w-full border border-gray-300 rounded-md focus:border-rose-500"
              value={userId}
              name="userId"
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Jira userId a buscar"
            />
          </div>
          <div className="block self-center mb-4">
            <label className="mr-1">1M</label>
            <input
              type="radio"
              name="months"
              value="1"
              onChange={onOptionChange}
              required
            />
            <label className="ml-2 mr-1">2M</label>
            <input
              type="radio"
              name="months"
              value="2"
              onChange={onOptionChange}
              required
            />
            <label className="ml-2 mr-1">3M</label>
            <input
              type="radio"
              name="months"
              value="3"
              onChange={onOptionChange}
              required
            />
          </div>
          <button className="btn-primary flex items-center" type="submit">
            <img
              className="mr-1 inline-block"
              src="/icons/search-line.svg"
              alt="icon"
              width="20px"
            />
            <span>Buscar</span>
          </button>
        </form>
      </div>
      {user.status && data.status ? (
        <Table
          data={data.data}
          user={{
            img: user.data.avatarUrls["32x32"],
            name: user.data.displayName,
          }}
        />
      ) : (
        <div className="w-5/6 mx-auto mt-10 text-center">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </main>
  );
}
