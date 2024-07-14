<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mounted = false;
	onMount(() => {
		mounted = true;
	});
</script>

{#if mounted}
	<div>
		<div class="text-catp-rosewater font-segoe mt-5 align-middle">
			<div transition:fade={{ duration: 300 }} class="md:flex">
				<img class="md:w-[28%]" src="/solar_panels.png" alt="solar panel logo" />
				<div class="text-2xl md:pt-24 md:ml-5 font-semibold">
					One place for <span class="text-green-300">Clean and Affordable energy</span> awareness.
					<p class="text-base mt-3 font-normal">
						Verve is a platform to spread awareness about clean and renewable energy resouces like
						Solar energy and Wind energy through statistics and providing a community base to share
						ideas and news related to the domain.
					</p>
					<a href="/community">
						<button
							class="text-sm md:text-lg font-semibold bg-green-400 text-catp-mantle rounded px-2 mt-2 mr-2"
							><i class="bi bi-person-raised-hand"></i> Community</button
						></a
					><a href="/stats">
						<button
							class="text-sm md:text-lg font-semibold bg-green-400 text-catp-mantle rounded px-2 mt-2"
							><i class="bi bi-bar-chart-line-fill"></i> Stats</button
						>
					</a><a
						href="https://docs.google.com/forms/d/e/1FAIpQLScwpHeIiHmgKx1P1qk9VlpuKGQeQC34eBLoy0lz18wULN6Mlw/viewform?usp=sf_link"
					>
						<button
							class="text-sm md:text-lg font-semibold bg-green-400 text-catp-mantle rounded px-2 mt-2"
							><i class="bi bi-pencil-square"></i> Contribute</button
						>
					</a>
					<br class="hidden md:block" />
					<a href="/start">
						<button class="text-sm md:text-lg bg-catp-lavender px-2 mt-2 rounded text-catp-crust"
							><i class="bi bi-box-arrow-up-right"></i> Start your Green journey now!</button
						>
					</a>
				</div>
				<br />
			</div>
		</div>

		<div
			class="text-catp-rosewater mt-8"
			transition:fade={{
				duration: 600,
				delay: 200
			}}
		>
			<div
				class="text-3xl md:before:text-4xl font-semibold md:text-right md:pr-5 text-catp-lavender mb-2"
			>
				Why is <span class="text-green-300">Green energy</span> needed ?
			</div>
			<div class="md:flex">
				<div class="md:p-5">
					Transitioning to green and renewable energy is essential for a sustainable future. Fossil
					fuels like coal and oil release greenhouse gases, contributing to climate change and
					pollution, which harm the environment and human health. Renewable energy sources such as
					wind, solar, and hydro produce little to no emissions, reducing our carbon footprint and
					improving air and water quality. They also enhance energy security by diversifying the
					energy supply and reducing dependence on imports. Economically, the renewable sector
					creates jobs and offers long-term cost savings. Embracing renewable energy is crucial for
					protecting the planet, ensuring public health, and fostering sustainable development for
					future generations.
				</div>
				<img src="/why_green.png" alt="_" class="hidden lg:block w-[250px]" />
			</div>
			<div class="text-3xl mt-10 md:before:text-4xl font-semibold md:pl-5 text-catp-lavender mb-2">
				Generation of <span class="text-green-300">Green energy</span>
			</div>
			<div class="md:flex">
				<!-- <img
					alt="generation"
					class="md:w-[400px] md:h-[220px] mt-5 md:mt-20 md:ml-5 md:mb-5 rounded-sm inline-block align-middle"
					src="/solar_energy_generation.jpeg"
				/> -->
				<div class="md:p-3">
					<b>Solar Power:</b> Solar panels (photovoltaic cells) convert sunlight directly into
					electricity. Solar thermal systems use sunlight to heat water or other fluids, which can
					then be used to produce steam that drives turbines to generate electricity.
					<br />
					<b>Wind Power:</b> Wind turbines convert the kinetic energy of wind into mechanical power,
					which can then be converted into electricity. Wind farms can be located onshore or
					offshore.
					<br />
					<b>Hydropower:</b> This involves capturing the energy of flowing water, typically from
					rivers or dams, to generate electricity. Water turbines convert the kinetic energy of
					flowing or falling water into mechanical energy, which is then transformed into electrical
					energy.
					<br />
					<b>Biomass Energy:</b> Organic materials such as wood, agricultural residues, and animal
					waste are burned or decomposed to produce heat, which can be used to generate electricity
					or provide heating. Biomass can also be converted into biofuels like ethanol and
					biodiesel.
					<br />
					<b>Geothermal Energy:</b> This harnesses heat from beneath the Earth's surface to generate
					electricity or provide direct heating. Geothermal power plants use steam produced from hot
					water reservoirs below the Earth's surface to drive turbines connected to electricity
					generators.
					<br />
					<b>Tidal and Wave Energy:</b> These methods utilize the energy from ocean tides and waves.
					Tidal power plants capture the energy from the rise and fall of tides, while wave energy converters
					capture energy from the surface motion of the ocean.
				</div>
			</div>
		</div>
		<div class="md:m-4 text-catp-flamingo">
			<div class="text-3xl md:text-right font-semibold text-green-300 my-3">Recieve Updates</div>
			Stay updated with the latest happenings and statistics around the country. We will be mailing any
			updates related to features on the websites and posts related to your interests on your mail!
			<form method="POST">
				<input
					type="email"
					name="email_id"
					id="email_id"
					class="px-2 py-1 rounded-md outline-none text-black"
				/>
				<button
					formaction="?/registerMail"
					type="submit"
					class="text-lg font-semibold bg-green-400 text-catp-mantle rounded px-2 mt-2 mr-2"
					>Register</button
				>
			</form>
		</div>
	</div>
{/if}
