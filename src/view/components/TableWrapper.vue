<template>
    <div class="no-grow">
        <table class="striped responsive-table centered">
            <thead>
            <tr>
                <th v-for="(header, index) in this.tableData.headers" :key="index">{{ header }}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, index) in this.tableData.data" :key="index">
                <td v-for="(value, index) in row" :key="index">{{ value }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TableWrapper",
        props: {
            tableData: {
                headers: Array,
                data: Array
            }
        }
    }
</script>

<style>
    .no-grow{
        overflow-y: scroll;
        height: 44vh !important;
    }

    thead th{
        background: #cccccc;
    }
    tbody{
        overflow: scroll;
    }
</style>