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
      <Picture slot="1" image-source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvc_dOBSb6OMltOhGtqUJ0FE1thmRVJf56g&usqp=CAU" image-height="225"/>
      <TextEntry slot="2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate faucibus nibh eget pulvinar. Fusce faucibus turpis ut molestie vestibulum. Sed et fringilla massa. Etiam nec sem rutrum, fermentum lectus quis, consectetur eros. Proin quis fringilla odio. Ut in velit a nunc mollis sodales. Sed vitae accumsan ligula. Etiam ac tincidunt nulla, nec mattis urna. Suspendisse nec cursus magna, luctus vestibulum ex. Donec luctus tellus vel dui lacinia, non dictum nulla dictum. Aliquam faucibus ligula id orci posuere malesuada. Ut nec est in leo pellentesque dapibus. Phasellus ipsum velit, posuere quis ex ut, laoreet ullamcorper mauris. Donec in viverra dui.
        Phasellus id gravidLorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate faucibus nibh eget pulvinar. Fusce faucibus turpis ut molestie vestibulum. Sed et fringilla massa. Etiam nec sem rutrum, fermentum lectus quis, consectetur eros. Proin quis fringilla odio. Ut in velit a nunc mollis sodales. Sed vitae accumsan ligula. Etiam ac tincidunt nulla, nec mattis urna. Suspendisse nec cursus magna, luctus vestibulum ex. Donec luctus tellus vel dui lacinia, non dictum nulla dictum. Aliquam faucibus ligula id orci posuere malesuada. Ut nec est in leo pellentesque dapibus. Phasellus ipsum velit, posuere quis ex ut, laoreet ullamcorper mauris. Donec in viverra dui.
        Phasellus id gravida lacus. Proin ultrices finibus suscipit. Sed vel magna et quam rutrum tristique. Sed maximus iaculis nisl sit amet dignissim. In commodo pharetra sapien, id fringilla ex commodo eget. Vivamus aliquam augue sed fringilla dignissim. Nam at justo gravida, suscipit dui eu, vestibulum sem. Curabitur hendrerit mi nisl, tristique lacinia lectus laoreet nec. Sed tincidunt auctor dolor eu porta. Fusce ullamcorper a odio consequat pretium. Morbi nec arcu eu orci facilisis faucibus. Vivamus nec quam eros. Vivamus suscipit elementum elit et vestibulum. Aliquam eget mauris facilisis libero vestibulum tincidunt. Cras tincidunt nisl imperdiet urna tempus congue. Nulla ultricies erat lectus, vel malesuada odio tempus vel.
      </TextEntry>
      <Blank slot="3" class="pink accent-1"/>
      <Picture slot="6" image-source="https://cdn.mos.cms.futurecdn.net/M7fDTpDnJcZ4dt3myngzxi-1200-80.jpg"/>
      <TableWrapper slot="5" :table-data="{
                                            'headers':
                                              ['col1','col2','col3','col4'],
                                            'data':
                                              [['1','2','3','4'],
                                              ['5','6','7','8'],
                                              ['1','2','3','4'],
                                              ['5','6','7','8'],
                                              ['1','2','3','4'],
                                              ['5','6','7','8'],
                                              ['5','6','7','8'],
                                              ['1','2','3','4'],
                                              ['5','6','7','8'],
                                              ['1','2','3','4'],
                                              ['5','6','7','8'],
                                              ['1','2','3','4'],
                                              ['5','6','7','8'],
                                              ['1','2','3','4'],
                                              ['5','6','7','8']]
      }"/>
      <BarGraph slot="4" :chart-data="[
                ['Year', 'Sales', 'Expenses', 'Profit'],
                ['2014', 1000, 400, 200],
                ['2015', 1170, 460, 250],
                ['2016', 660, 1120, 300],
                ['2017', 125, 540, 350],
            ]"/>    </DefaultLayout>
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
