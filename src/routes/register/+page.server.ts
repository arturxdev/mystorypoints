import type { Action, Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	console.log(url.searchParams.get('userId'));
	console.log(url.searchParams.get('months'));
	return { test: 'hola' };
};

const tasks: Action = async ({ request }) => {
	const data = await request.formData();
	const userId = data.get('userId');
	const months = data.get('months');
	console.log(userId, months);

	return { status: true };
};

export const actions: Actions = { tasks };
