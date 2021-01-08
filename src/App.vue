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
    <DefaultLayout :grid-size="3">
    <!--TODO: Add as many modules as you want here!-->
    </DefaultLayout>
  </div>
</template>

<script>
  /* eslint-disable vue/no-unused-components */

  import DefaultLayout from "@/view/page/DefaultLayout";
  import Picture from "@/view/components/Picture";
  import BarGraph from "@/view/components/BarGraph";
  import TableWrapper from "@/view/components/TableWrapper";
  import TextEntry from "@/view/components/TextEntry";
  import Blank from "@/view/components/Blank";

  export default {
  name: 'App',
  components: {
    TextEntry,
    TableWrapper,
    DefaultLayout,
    Picture,
    BarGraph,
    Blank
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
  #app{
    overflow-x: hidden;
  }
</style>
