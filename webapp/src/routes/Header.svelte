<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	let transition: boolean = false;
	onMount(() => {
		transition = true;
	});
</script>

{#if transition}
	<header class="grid grid-flow-col mb-2 justify-items-center font-exo2">
		<a href="/">
			<div transition:scale={{ duration: 400 }} class="text-4xl text-catp-rosewater drop-shadow-md">
				<i class="bi bi-lightbulb-fill text-yellow-200 text-3xl"></i>&nbsp;verve
			</div>
		</a>
	</header>
{/if}
