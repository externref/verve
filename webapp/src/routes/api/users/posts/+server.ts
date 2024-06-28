import { json, type RequestHandler } from '@sveltejs/kit';
import type { PostRecievePayload } from '$lib/interfaces';

export const GET: RequestHandler = async ({ request }) => {
	let data: PostRecievePayload = await request.json();
	return json({});
};
