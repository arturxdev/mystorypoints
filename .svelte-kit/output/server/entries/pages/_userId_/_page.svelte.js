import { c as create_ssr_component, f as add_attribute, e as escape, d as each } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let payload = { sucess: false };
  if (data && data.tasks.success) {
    payload = { ...data };
  }
  let userId = payload.userId;
  let months = payload.months;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<header class="w-full bg-indigo-500 py-3 px-5 text-white flex items-center justify-between" data-svelte-h="svelte-r93zc6"><span class="text-xl font-bold">My story points</span> <div class="tooltips"><button class="btn-primary flex items-center"> <img class="mr-1 inline-block" alt="icon" src="/icons/file-copy-line.svg" width="20px"> <span>Copiar link</span></button></div></header> <div class="w-5/6 mx-auto mt-10" data-svelte-h="svelte-xwxakg"><div class="w-2/4 m-auto"><img src="/logo-full.png" alt="logo"></div> <p class="mt-5 text-xl text-center mb-20 font-semibold text-gray-600">Visualiza tus story points de una manera fácil para saber tu rendimiento</p></div> <div class="w-5/6 mx-auto mt-2"><form action="?/tasks" method="POST"><div class="w-full"><span data-svelte-h="svelte-1q5xqz3">Usuario a buscar</span> <input class="px-3 py-2 mb-4 w-full border border-gray-300 rounded-md focus:border-rose-500" name="userId" placeholder="Jira userId a buscar"${add_attribute("value", userId, 0)}></div> <div class="block self-center mb-4"><label class="mr-1" data-svelte-h="svelte-1ov3uqq">1M</label> <input type="radio" name="months" value="1" required="required"${"1" === months ? add_attribute("checked", true, 1) : ""}> <label class="ml-2 mr-1" data-svelte-h="svelte-ye9sbz">2M</label> <input type="radio" name="months" value="2" required="required"${"2" === months ? add_attribute("checked", true, 1) : ""}> <label class="ml-2 mr-1" data-svelte-h="svelte-1kv56ug">3M</label> <input type="radio" name="months" value="3" required="required"${"3" === months ? add_attribute("checked", true, 1) : ""}></div> <button class="btn-primary flex items-center" type="submit" data-svelte-h="svelte-3djksu"><img class="mr-1 inline-block" src="/icons/search-line.svg" alt="icon" width="20px"> <span>Buscar</span></button></form> ${payload.tasks.success ? `<div class="flex rounded-md justify-between px-5 py-5 bg-indigo-50 my-10"><div><p class="mt-2"><span class="font-medium" data-svelte-h="svelte-1xdmhi5">Semana actual: </span><span class="text-indigo-500">${escape(payload.tasks.actual)}</span></p> <p><span class="font-medium" data-svelte-h="svelte-wkzxrd">Tareas sin clasificar: </span><span class="text-indigo-500">${escape(payload.tasks.unclasificated.length)}</span></p></div> <div class="self-center" data-svelte-h="svelte-dk1d7a"><button disabled class="btn-primary flex items-center" onclick="location.reload()"><img class="mr-1 inline-block" src="/icons/loop-left-line.svg" width="20px"><span>Actualizar(deshabilitado)</span></button></div></div> <div class="flex justify-start mt-2 flex-wrap">${each(payload.tasks.unclasificated, (task) => {
    return `<div class="inline-block tag-danger tooltip"><span class="tooltiptext">${escape(task.summary)}</span> <a href="${"https://koibanx.atlassian.net/browse/" + escape(task.key, true)}" target="_blank_"><p><span class="font-semibold">${escape(task.key)}</span></p> <p><span>${escape(task.issueType)}</span> <span${add_attribute("class", task.endDate ? "" : "text-red-500", 0)}>endDate</span> <span${add_attribute("class", task.endDate ? "" : "text-red-500", 0)}>storyPoints</span> </p></a> </div>`;
  })}</div> <div class="mx-auto w-full flex justify-center my-10"><table class="w-full"><thead data-svelte-h="svelte-n2wkii"><tr><th>Semana</th> <th>Fecha Inicio</th> <th>Fecha Final</th> <th>Story points</th> <th>Issues</th></tr></thead> <tbody>${each(Object.entries(payload.tasks.cal), ([key, week]) => {
    return `<tr${add_attribute(
      "class",
      week.week === payload.tasks.actual ? "!bg-indigo-100" : "",
      0
    )}><td class="text-center">${escape(key)}</td> <td class="text-center">${escape(week.start)}</td> <td class="text-center">${escape(week.end)}</td> <td class="text-center">${escape(week.total)}</td> <td>${each(week.issues, (issue) => {
      return `<div class="inline-block tooltip"><span class="tooltiptext">${escape(issue.summary)}</span> <a${add_attribute(
        "class",
        issue.resolution === "Done" || issue.resolution === "Finalizado" ? "tooltip tag-success" : "tooltip tag-warning",
        0
      )}><p><span class="font-semibold">${escape(issue.key)}</span> <span>${escape(issue.storyPoint)}</span> </p></a> </div>`;
    })}</td> </tr>`;
  })}</tbody></table></div>` : ``}</div>`;
});
export {
  Page as default
};
