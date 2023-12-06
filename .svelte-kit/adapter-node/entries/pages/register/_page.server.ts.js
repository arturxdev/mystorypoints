const load = async ({ url }) => {
  console.log(url.searchParams.get("userId"));
  console.log(url.searchParams.get("months"));
  return { test: "hola" };
};
const tasks = async ({ request }) => {
  const data = await request.formData();
  const userId = data.get("userId");
  const months = data.get("months");
  console.log(userId, months);
  return { status: true };
};
const actions = { tasks };
export {
  actions,
  load
};
