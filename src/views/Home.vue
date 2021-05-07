<template>
  <div  class="login bg-st-yellow height h-screen overflow-y-hidden">
    <Login/>
  </div>
</template>

<script>
// @ is an alias to /src

import Login from '@/components/login.vue';

export default {
  
  components: {
    Login
   
  }
}
</script>
<style scoped>
.body{
  background-color: #FFC600;
}
</style>