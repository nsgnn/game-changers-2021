<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue-grey">
        <a class="brand-logo center">{{this.pageName}}</a>
        <ul class="right hide-on-med-and-down">
          <li><a onclick="location.reload()"><i class="material-icons">refresh</i></a></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="red">test5</div>
      <div class="orange">test4</div>
      <div class="yellow">test3</div>
      <div class="green">test2</div>
      <div class="blue">test1</div>
      <div class="indigo">test0</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  props:{
    pageName: {
      type: String,
      default: "Page Name"
    }
  }
}
</script>

<style>

</style>
