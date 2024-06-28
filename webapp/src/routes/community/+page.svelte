<script lang="ts">
	import statesDistricts from '$lib/statesDistricts';
	import { onMount } from 'svelte';
	import Post from './Post.svelte';
	import { slide } from 'svelte/transition';

	let currentState = 'Karnataka';
	$: districts = statesDistricts[currentState as keyof typeof statesDistricts];
	let currentDistrict = 'Bengaluru';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div class="font-exo2 pt-4">
		<div
			transition:slide={{ duration: 400, axis: 'y', delay: 100 }}
			class="text-2xl bold text-catp-rosewater flex"
		>
			Community Posts
		</div>
		<div class="h-[2px] bg-catp-rosewater my-2"></div>
		<label class="text-catp-lavender bold" for="currentState">State </label>
		<select class="rounded-sm px-2 bg-catp-mauve" id="currentState" bind:value={currentState}>
			{#each Object.entries(statesDistricts) as [state, _]}
				<option>{state}</option>
			{/each}
		</select> <br class="md:hidden" />
		<label class="text-catp-lavender bold" for="currentDistrict">District</label>
		<select class="rounded-sm px-2 bg-catp-mauve" id="currentDistrict" bind:value={currentDistrict}>
			{#each districts as district}
				<option>{district}</option>
			{/each}
		</select>
		<a href="/community/new"
			><button class="bg-green-300 rounded-sm px-2 text-sm w-full md:w-auto"
				>Create a new Post</button
			></a
		>

		<Post></Post>
	</div>
{/if}
