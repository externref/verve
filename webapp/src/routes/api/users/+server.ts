import type { UserRecievePayload } from '$lib/interfaces';
import { database } from '$lib/server';
import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	let newUser = await database.addUser((await request.formData()) as unknown as UserRecievePayload);
	return json(newUser);
};
