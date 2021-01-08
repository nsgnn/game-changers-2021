<template>
    <img :src="imageSource" :alt="description" class="img-class" :height="this.imageHeight">
</template>

<script>
    export default {
        name: "Picture",
        props: {
            imageSource: String,
            description:{
                type: String,
                required: false,
                default: ''
            },
            imageHeight: {
                type: Number,
                required: false,
                default: 250
            }
        }
    }
</script>

<style>

    .img-class{
        justify-self: center;
        align-self: center;
        box-shadow: 3px 3px 5px 6px #cccccc;
    }

</style>