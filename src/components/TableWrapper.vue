<template>
    <table>
        <thead>
        <tr>
            <th v-for="header in this.seriesData.names" :key="header">Name</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in this.seriesData.values" :key="row">
            <td v-for="value in row" :key="value">{{ value }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "TableWrapper",
        prop: {
            seriesData: {
                names: [ "MS", "Apple", "Google" ],
                values: [
                    [ 10, 5, 5],
                    [ 40, 10, 10],
                    [ 30, 30, 30]
                ]
            },
        }
    }
</script>

<style>

</style>