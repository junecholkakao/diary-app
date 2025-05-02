<script>
	import '../app.scss'
	import Header from "$lib/components/Header.svelte";
	import { Toaster } from 'svelte-sonner';
</script>

<Header/>
<Toaster/>

<slot/>