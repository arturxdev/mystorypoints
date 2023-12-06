import { c as create_ssr_component } from "../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${slots.default ? slots.default({}) : ``} <p class="text-center my-5" data-svelte-h="svelte-b40q0n">Hecho con ❤️ por @arturoxdev</p>`;
});
export {
  Layout as default
};
