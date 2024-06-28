<script lang="ts">
	import type { Post } from '$lib/interfaces';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let mounted = false;
	let postData: Post = {
		id: 13204802385038505830n,
		authorId: 13204802385038505830n,
		authorName: 'random',
		title: 'This is a preview',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus similique, architecto tempore voluptate quasi consequuntur accusantium pariatur suscipit aperiam fugit natus tenetur est, qui asperiores? Officiis, quasi at. Sequi.',
		state: 'Karnataka',
		district: 'Bengaluru',
		createdAt: new Date(),
		upvotes: 100,
		resolved: true
	};

	let url = `/posts/${[postData.authorId]}/${postData.id}`;

	onMount(() => {
		mounted = true;
	});
	function copy() {
		navigator.clipboard.writeText(`${window.location.toString()}${url}`);
	}
</script>

{#if mounted}
	<div
		transition:fade={{ duration: 500 }}
		class="border rounded-md p-3 hover:p-4 m-1 hover:m-0 text-catp-flamingo"
	>
		<div class="text-lg">
			<a href={url}>{postData.title}</a>
			<button on:click={copy} class="float-right"><i class="bi bi-share-fill"></i></button>
		</div>
		<hr class="my-1" />
		<p class="text-xs text-gray-400">
			by: {postData.authorName} <b>|</b> created on: {postData.createdAt.toLocaleDateString()}
		</p>
		<p class="text-xs text-gray-400">
			state: {postData.state} <b>|</b> district: {postData.district}
		</p>
		<p class="mt-2">{postData.content.substring(0, 500)}.....</p>
	</div>
{/if}
