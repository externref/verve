<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div transition:fade={{ duration: 500 }} class="text-catp-flamingo">
		<div class="text-2xl font-semibold my-2">
			<span>Statistics related to</span> <span class="text-green-300">Green energy</span>
			<span>in India</span>
		</div>
		<p class="font-semibold text-xl">
			Renewable energy sources have a combined installed capacity of 150+ GW.
		</p>
		As of May 2024, Renewable energy sources, including large hydropower, have a combined installed capacity
		of 193.57 GW.
		<br /><br />
		<b>The following is the installed capacity for Renewables:</b>
		<ul class="list-disc list-outside pl-[revert]">
			<li>Wind power: 46.42 GW</li>
			<li>Solar Power: 84.27 GW</li>
			<li>Biomass/Co-generation: 10.35 GW</li>
			<li>Small Hydro Power: 5 GW</li>
			<li>Waste To Energy: 0.59 GW</li>
			<li>Large Hydro: 46.92 GW</li>
		</ul>
	</div>
	<div class="mt-5 text-catp-flamingo">
		<div class="font-semibold text-2xl my-3">
			Statewise Generation and Consumption of Energy in India
		</div>
		<img
			class="md:w-[450px] rounded-sm self-center"
			src="/gen_con.png"
			alt="generation consuption"
		/>
	</div>
{/if}
