<script>
    import MainInfo from "$lib/components/MainInfo.svelte";
	import InfoCover from "$lib/components/InfoCover.svelte";
	import InfoParagraph from "$lib/components/InfoParagraph.svelte";
    import Icon from '@iconify/svelte';
	import WebInfo from "$lib/components/WebInfo.svelte";
	import BackendInfo from "$lib/components/BackendInfo.svelte";
</script>

<svelte:head>
    <title>Relative's website</title>
</svelte:head>

<div class="px-5 mt-10">
    <h1 class="text-center text-6xl w-full font-bold flex gap-5 justify-center items-center">
        <img alt="hand" class="w-14 h-14" src="/waving-hand.png" />
        Welcome
    </h1>
    <h2 class="text-center text-4xl mt-4">to yet another personal website.</h2>
    <h3 class="text-center mt-4 opacity-50">Do I need to say more?..</h3>
</div>

<MainInfo />

<WebInfo />

<BackendInfo />

<div class="mt-10"></div>

<div class="text-center opacity-50 px-5">
    Website made by myself and powered by SvelteKit.
</div>

<div class="text-center opacity-50 px-5">
    No UI kits were used.
</div>

<div class="mt-10"></div>