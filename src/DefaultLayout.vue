<template>
    <div class="layout" :class="gridSizeClass">
        <slot class="fixed-size" name="1"></slot>
        <slot class="fixed-size" name="2"></slot>
        <slot class="fixed-size" name="3"></slot>
        <slot class="fixed-size" name="4"></slot>
        <slot class="fixed-size" name="5"></slot>
        <slot class="fixed-size" name="6"></slot>
    </div>
</template>
<script>
    export default {
        name: 'DefaultLayout',
        props: {
            gridSize:{
                type: Number,
                required: false,
                default: 3
            }
        },
        computed: {
            gridSizeClass(){
                switch (this.gridSize) {
                    case 1:
                        return 'one-across';
                    case 2:
                        return 'two-across';
                    default:
                    case 3:
                        return 'three-across';
                    case 4:
                        return 'four-across';
                }
            }
        }
    }
</script>
<style>
    .layout {
        padding: 1rem;
        display: grid;
        grid-gap: 1rem;

        height: calc(100vh - 64px);
        width: 100vw;
    }

    .layout>div{
        height: 45vh;
        overflow-y: auto;
        width: 100%;
        align-content: center;
        justify-content: center;
    }

    .one-across{
        grid-template-columns: repeat(auto-fill, 1fr);
    }

    .two-across{
        grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    }

    .three-across {
        grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    }

    .four-across{
        grid-template-columns: repeat(auto-fill, minmax(24%, 1fr));
    }

</style>