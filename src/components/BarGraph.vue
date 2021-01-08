<template>
    <GChart
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
        prop: {

        },
        data: function() {
            return {
                // Array will be automatically processed with visualization.arrayToDataTable function
                chartData: [
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                ],
            }
        }
    }
</script>

<style>

</style>