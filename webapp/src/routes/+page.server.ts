import type { Actions } from '@sveltejs/kit';
import { MAIL_USER, MAIL_PASSWORD } from '$env/static/private';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user: MAIL_USER,
		pass: MAIL_PASSWORD
	}
});
interface EmailRequestData {
	email_id: string;
}
export const actions: Actions = {
	registerMail: async (event) => {
		let data: EmailRequestData = Object.fromEntries(await event.request.formData()) as any;

		await transporter.sendMail({
			to: data.email_id,
			subject: 'Welcome to verve!',
			html: `Hello <b>${data.email_id.split('@')[0]}</b>, thank you for registering at <b>Verve</b>!<br><br>
            You'll be notified about new admin posts and statistics now on.`
		});
	}
};
