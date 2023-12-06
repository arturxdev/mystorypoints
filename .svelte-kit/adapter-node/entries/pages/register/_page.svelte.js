import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  console.log(data, "hola");
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-issj3d">Register</h1> <form action="?/register" method="POST"><div data-svelte-h="svelte-1b6wwbm"><label for="username">Username</label> <input id="username" name="username" type="text" required></div> <div data-svelte-h="svelte-smpchs"><label for="password">Password</label> <input id="password" name="password" type="password" required></div> ${form?.user ? `<p class="error" data-svelte-h="svelte-1v0k1r2">Username is taken.</p>` : ``} <button type="submit" data-svelte-h="svelte-1s7k2qu">Register</button></form>`;
});
export {
  Page as default
};
