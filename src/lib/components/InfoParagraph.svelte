<script lang="ts">
    import Icon from "@iconify/svelte";

    export let icon: string;
</script>

<p class="mt-2 flex items-center">
    <span class="ms-1 me-4">
        <Icon { icon } />
    </span>
    <span>
        <slot />
    </span>
</p>