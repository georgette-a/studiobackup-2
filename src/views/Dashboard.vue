<template>
 <div>
    
    <div class="flex flex-row space-x-10 pt-20">
    <span><DesDash/></span>
    <span><router-view/></span>
    </div>
     
  </div>
</template>

<script>
// @ is an alias to /src
import DesDash from '@/components/DashMenuDesigner.vue'



export default {
  name: 'Home',
  components: {
    DesDash
  }
}
</script>