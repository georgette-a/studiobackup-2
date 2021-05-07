<template>

<div class="static ...">
  <!-- Static parent -->
  <div class="static ..."><Nav2/></div>
  <!-- Static parent -->
  <div class="absolute ... h-full"><form-toolbar></form-toolbar></div>
  <div class="inline gap-0"><Nav3/></div>
</div>
</template>

<script>
import Nav2 from './Nav2'
import Nav3 from './Nav3'

import FormToolbar from './FormToolbar.vue'
export default {
  
  name: 'App',
  components: { Nav2, Nav3,FormToolbar,}

}
</script>

<style>

</style>