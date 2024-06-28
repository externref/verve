<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { Cursor } from 'curseur';
</script>

<Cursor color="#86EFAC" mixBlendMode="exclusion" />
<div class="m-4">
	<Header></Header>
	<slot></slot>
	<Footer></Footer>
</div>
