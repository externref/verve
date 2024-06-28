import type { Pool } from 'pg';
import type { Post, PostRecievePayload, User, UserRecievePayload } from '$lib/interfaces';
import { Snowflake } from '@theinternetfolks/snowflake';
import shajs from 'sha.js';

export default class DatabaseHandler {
	pool: Pool;
	constructor(pool: Pool) {
		this.pool = pool;
	}

	snowflake() {
		return BigInt(Snowflake.generate());
	}

	async addUser(_data: FormData): Promise<User> {
		let data: UserRecievePayload = Object.fromEntries(
			_data.entries()
		) as unknown as UserRecievePayload;
		let userRes = await this.pool.query<User>(
			`INSERT INTO verve_users VALUES ( $1, $2, $3, $4, CURRENT_TIMESTAMP, NULL, NULL, $5 ) RETURNING *`,
			[
				this.snowflake(),
				data.name,
				data.state,
				data.yearOfBirth,
				shajs('sha256').update(data.password).digest('hex')
			]
		);
		return userRes.rows[0];
	}

	async addPost(data: PostRecievePayload): Promise<Post> {
		let id = this.snowflake();
		let userRes = await this.pool.query<User>(
			`UPDATE users SET lastPostAt=CURRENT_TIMESTAMP AND lastPostId=$2 WHERE id=$3 RETURNING *`,
			[id, data.authorId]
		);
		let authorData = userRes.rows[0];
		let res = await this.pool.query<Post>(
			`INSERT INTO posts VALUES ( $1, $2, $3, $4, $5, $6, $7, CURRENT_TIMESTAMP, 0, TRUE ) RETURNING *`,
			[
				id,
				data.authorId,
				authorData.name,
				authorData.state,
				data.district,
				data.title,
				data.content
			]
		);
		return res.rows[0];
	}
}
