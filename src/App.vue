<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a class="brand-logo center no-select">{{ this.pageName }}</a>
        <ul class="right hide-on-med-and-down">
          <li class="waves-effect waves-light"><a onclick="location.reload()"><i class="material-icons no-select">refresh</i></a></li>
        </ul>
      </div>
    </nav>
    <DefaultLayout :grid-size="3">
      <Picture slot="1" :image-source="dogPicURL" description=""/>
      <TextEntry class="blue" slot="2"> This is a dog.</TextEntry>
      <TextEntry class="blue" slot="3"> This is a dog.</TextEntry>
      <TextEntry class="blue" slot="4"> This is a dog.</TextEntry>
      <TextEntry class="blue" slot="5"> This is a dog.</TextEntry>
      <TextEntry class="blue" slot="6"> This is a dog.</TextEntry>
    </DefaultLayout>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
const axios = require('axios');
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
  data: function (){
    return {
      dogAPIKey: '06a42eea-e1d4-4b40-946d-fb2464169421',
      dogPicURL: null

    }
  },
  async mounted() {
    this.randomDogPicture();
  },
  methods:{
    async getFromURL(url, key) {
      return axios.get(url, {headers: {'X-api-key': key}});
    },
    async randomDogPicture(){
      await this.getFromURL("https://api.thedogapi.com/v1/images/search", this.dogAPIKey)
          .then((response) => this.dogPicURL = response.data[0].url);
    }
  }
}
</script>

<style>
#app{
  overflow-x: hidden;
}
</style>
