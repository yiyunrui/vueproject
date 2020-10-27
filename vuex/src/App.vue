<template>
  <div id="app">
      <pageone></pageone>
      <pagetwo></pagetwo>
    
  </div>
</template>

<script>
import pageone from './components/Pageone'
import pagetwo from './components/Pagetwo'
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
      pageone,
      pagetwo
  }
}
</script>

<style>

</style>
