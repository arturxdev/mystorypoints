// @ts-nocheck
import type { Action, Actions, PageServerLoad } from './$types';
import { getTasks } from '$lib';
import { fail } from '@sveltejs/kit';

export const load = async ({ url }: Parameters<PageServerLoad>[0]) => {
	console.log('hola');
	const fetchTasks = async () => {
		const months = url.searchParams.get('months');
		const userId = url.searchParams.get('userId');
		console.log(months, userId, 'hola');
		return getTasks(months, userId);
	};
	return { tasks: fetchTasks() };
};

const tasks: Action = async ({ request }) => {
	const data = await request.formData();
	const months = data.get('months');
	const userId = data.get('userId');
	if (typeof months !== 'string' || typeof userId !== 'string' || !months || !userId) {
		return fail(400, { invalid: true });
	}
	return getTasks(months, userId);
};

export const actions = { tasks };
;null as any as Actions;