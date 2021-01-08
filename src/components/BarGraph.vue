<template>
    <GChart
            class="graph"
            type="ColumnChart"
            :data="chartData"
    />
</template>

<script>
    import { GChart } from 'vue-google-charts'
    export default {
        name: "BarGraph",
        components: {
            GChart
        },
        props: {
            chartData: Array,
        },
    }
</script>

<style>
.graph{
    overflow: hidden !important;
}
</style>