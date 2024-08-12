<script lang="ts">
    import Icon from "@iconify/svelte";

    export let icon: string;
</script>

<div class="absolute right-10 top-0 bottom-0 h-full 
opacity-5
flex items-center 
pointer-events-none">
    <Icon 
    class="opacity-50"
    font-size="80pt"
    { icon } />
</div>