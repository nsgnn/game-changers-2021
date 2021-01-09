<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue">
        <a class="brand-logo  center no-select">{{ this.pageName }}</a>
        <ul class="right hide-on-med-and-down">
          <li class="waves-effect waves-light"><a onclick="location.reload()"><i class="material-icons no-select">refresh</i></a></li>
        </ul>
      </div>
    </nav>
    <DefaultLayout :grid-size="2">
      
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
  data: function (){
    return {
      dogAPIKey: '06a42eea-e1d4-4b40-946d-fb2464169421',
      currentDogInfo: {"breeds":[{"weight":{"imperial":"45 - 55","metric":"20 - 25"},"height":{"imperial":"20 - 22","metric":"51 - 56"},"id":32,"name":"","bred_for":"Sheep herding","breed_group":"Herding","life_span":"12 - 14 years","temperament":"Self-confidence, Hardy, Lively, Alert, Intelligent, Active","reference_image_id":"A09F4c1qP"}],"id":"I3E0R2tuV","url":"","width":1080,"height":1080},
      pageName: '',
    }
  },
  async mounted() {
    await this.getRandomDogInfo();
    this.updatePageInfo();
  },
  methods:{
    async getFromURL(url, key) {
      return axios.get(url, {headers: {'X-api-key': key}});
    },
    async getRandomDogInfo(){
      await this.getFromURL("https://api.thedogapi.com/v1/images/search", this.dogAPIKey)
          .then((response) => this.currentDogInfo = response.data[0]);
    },
    updatePageInfo(){
      this.pageName = this.currentDogInfo.breeds[0].name!== undefined? this.currentDogInfo.breeds[0].name : 'Dog Info';
      // this.
    }
  },
  computed:{
    dogDescription: function() {
      return `The dog shown is a ${this.currentDogInfo.breeds[0].name}. People love these dogs, because they are ${this.currentDogInfo.breeds[0].temperament.toLowerCase()}. They usually live ${this.currentDogInfo.breeds[0].life_span} years.`;
    },
    dogPicURL: function (){
      return this.currentDogInfo['url']!=null? this.currentDogInfo['url'] : '';
    }
  }
}
</script>

<style>
#app{
  overflow-x: hidden;
}
</style>
