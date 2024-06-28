export interface Post {
	id: bigint;
	authorId: bigint;
	authorName: string;
	state: string;
	district: string;
	title: string;
	content: string;
	createdAt: Date;
	upvotes: number;
	resolved: boolean;
}

export interface User {
	id: bigint;
	name: string;
	state: string;
	yearOfBirth: number;
	createdAt: Date;
	lastPostAt: Date;
	lastPostId: bigint;
	password: string;
}

export interface PostRecievePayload {
	authorId: bigint;
	district: string;
	title: string;
	content: string;
}

export interface UserRecievePayload {
	name: string;
	state: string;
	yearOfBirth: number;
	password: string;
}
