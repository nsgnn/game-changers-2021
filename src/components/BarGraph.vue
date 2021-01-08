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
            // Array will be automatically processed with visualization.arrayToDataTable function
            chartData: Array,
        },
    }
</script>

<style>
.graph{
    height: 100%;
    width: 100%;
}
</style>