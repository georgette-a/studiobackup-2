<template>
  <div>
    <div class="static">
      <Nav2/>
    </div>
  
    <div class="absolute">
      <FTB/>
    </div>
    
   <!-- <div class="py-10 ml-60 static overflow-hidden">
     <TestCanvas/>
    </div> -->
    <router-view/>
    
  </div>
</template>
<script>

import FTB from '@/components/FormToolbar.vue'
import Nav2 from '@/components/Nav2.vue'
//import TestCanvas from '../components/TestCanvas.vue'
export default {
  name: 'Studio',
  components: {
   FTB, Nav2,
 
  }
  
}
</script>