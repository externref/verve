<script lang="ts">
	import statesDistricts from '$lib/statesDistricts';
	let state: string;
	let login = false;
	$: btn_enable = (statesDistricts[state as keyof typeof statesDistricts] ? false : true) || false;
</script>

<div class="flex">
	<div class="mx-auto md:mt-32 bg-catp-overlay0 p-4 rounded-md font-exo2 w-full md:w-auto">
		<div class=" grid grid-flow-col gap-1 text-lg">
			<button
				on:click={() => {
					login = true;
				}}
				class="rounded-l-md {login ? `bg-green-300` : `bg-catp-rosewater`} px-2">Log In</button
			>
			<button
				on:click={() => {
					login = false;
				}}
				class="rounded-r-md {login ? `bg-catp-rosewater` : `bg-green-300`} px-2">SignUp</button
			>
		</div>
		<hr class="my-2" />
		{#if !login}
			<form method="post" action="/api/users">
				<div class="flex flex-col">
					<label for="name">Username: </label>
					<input
						class="rounded px-2 bg-pink-50 outline-none"
						type="text"
						name="name"
						id="name"
						required={true}
					/>
					<label for="state">State: </label>
					<select
						class="rounded px-2 bg-pink-50 outline-none p-1"
						required={true}
						name="state"
						id="state"
						bind:value={state}
					>
						<option selected={true} disabled={true}>select your state</option>
						{#each Object.entries(statesDistricts) as [state, _]}
							<option> {state}</option>
						{/each}
					</select>
					<label for="yob">Year of Birth</label>
					<input
						class="rounded px-2 bg-pink-50 outline-none"
						type="number"
						min="1950"
						max="2024"
						name="yearOfBirth"
						id="yob"
						required={true}
					/>
					<label for="password">Password: </label>
					<input
						class="rounded px-2 bg-pink-50 outline-none"
						minlength="8"
						type="password"
						name="password"
						id="password"
						required={true}
					/>
				</div>
				<hr class="my-2" />
				<div>
					<button
						class="bg-green-400 rounded-md text-center hover:bg-green-500 text-white w-full px-2 py-1 {btn_enable
							? `disabled`
							: ``}"
						type="submit">Create Account</button
					>
				</div>
			</form>
		{/if}
	</div>
</div>
