<template>
  <div id="test-canvas" style="overflow: hidden">
    
  <div class="container py-10 ml-60 static max-w-md justify-around items-center">
    <svgCanvas/>
    
    </div>
  </div>

</template>

<script>
import svgCanvas from '../assets/test01-01.svg'
export default {
  props:{
    colour: String,
    
  },
  
  data(){
        return{
            
            
        }
    },
    components:{
      svgCanvas,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
