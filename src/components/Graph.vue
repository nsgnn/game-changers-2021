<template>
    <graph-bar
            :width="600"
            :height="400"
            :axis-min="0"
            :axis-max="50"
            :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
            :values="this.seriesData.values">
        <note :text="'Bar Chart'"></note>
        <tooltip :names="this.seriesData.names" :position="'left'"></tooltip>
        <legends :names="this.seriesData.names" :filter="true"></legends>
    </graph-bar>
</template>

<script>
    export default {
        name: "Graph",
        prop: {
            seriesData: {
                names: [ "MS", "Apple", "Google" ],
                values: [
                    [ 10, 5, 5, 5 ],
                    [ 40, 10, 10, 10 ],
                    [ 30, 30, 30, 30 ]
                ]
            },
        }
    }
</script>

<style>

</style>