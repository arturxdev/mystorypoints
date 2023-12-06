// @ts-nocheck
import type { Action, Actions, PageServerLoad } from './$types';
import { getTasks } from '$lib';
import { fail, redirect } from '@sveltejs/kit';

let info = {};
export const load = async ({ url, params }: Parameters<PageServerLoad>[0]) => {
	const months = url.searchParams.get('months');
	const fetchTasks = async () => {
		return getTasks(months, params.userId);
	};
	info = { tasks: fetchTasks(), userId: params.userId, months };
	return info;
};

const tasks: Action = async ({ request }) => {
	const data = await request.formData();
	const months = data.get('months');
	const userId = data.get('userId');
	console.log(months, userId);
	if (typeof months !== 'string' || typeof userId !== 'string' || !months || !userId) {
		return fail(400, { invalid: true });
	}
	throw redirect(301, `/${userId}?months=${months}`);
};

export const actions = { tasks };
;null as any as Actions;