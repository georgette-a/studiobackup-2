<template>

<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><Nav2/></div>
  <!-- Static parent -->
  <div class="absolute ..."><FormToolbar/></div>
  <div class="inline gap-0"><Nav3/></div>
</div>
</template>

<script>
import Nav2 from './Nav2'
import Nav3 from './Nav3'
import FormToolbar from './FormToolbar'
export default {
  
  name: 'App',
  components: { Nav2,FormToolbar, Nav3}

}
</script>

<style>

</style>