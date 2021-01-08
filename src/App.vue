<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a class="brand-logo center no-select">{{ this.pageName }}</a>
        <ul class="right hide-on-med-and-down">
          <li><a onclick="location.reload()"><i class="material-icons no-select">refresh</i></a></li>
        </ul>
      </div>
    </nav>
    <layout :grid-size="3">
      <Picture slot="1" image-source="https://i.pinimg.com/originals/54/cf/b7/54cfb760a96b8139cd8b6134acc73050.gif"/>
      <div slot="2" class="orange">test4</div>
      <div slot="3" class="yellow">test3</div>
      <Picture slot="4" image-source="https://media.tenor.com/images/1bc54d8e78d4e1ea0171bfdd5174c7be/tenor.gif"/>
      <div slot="5" class="green">test1</div>
      <Graph slot="6" :axisMin="0" :axisMax="100"/>
    </layout>
  </div>
</template>

<script>
  import Layout from "@/Layout";
  import Picture from "@/components/Picture";
  import Graph from "@/components/Graph";

  export default {
  name: 'App',
  components: {
    Layout,
    Picture,
    Graph
  },
  props:{
    pageName: {
      type: String,
      default: "Page Name"
    }
  },
}
</script>

<style>



</style>
