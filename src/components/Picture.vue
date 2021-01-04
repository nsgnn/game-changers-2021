<template>
    <img :src="imageSource" :alt="description">
</template>

<script>
    export default {
        name: "Picture",
        props: {
            imageSource: String,
            description: String
        }
    }
</script>

<style>

</style>