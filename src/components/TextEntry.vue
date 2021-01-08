<template>
    <div class="no-grow">
        <slot class="text-entry"></slot>
    </div>
</template>

<script>
    export default {
        name: "TextEntry",
    }
</script>

<style>
    .text-entry{
        font-size: x-large;
    }

    .no-grow{
        overflow-y: auto;
        height: 44vh !important;
    }
</style>