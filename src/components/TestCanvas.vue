<template>
  <div id="test-canvas" style="overflow: hidden">
    
  <div class="container py-10 ml-60 static max-w-md justify-around items-center">
    
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 595.28 841.89" style="enable-background:new 0 0 595.28 841.89;" xml:space="preserve">
      <g id="Background">
        <rect style="fill:#3A3A3A;" width="595.28" height="841.89"/>
      </g>
      <g id="Line_1">
        <text transform="matrix(1 0 0 1 125.4193 352.0894)" fill="#FFFFFF" style="font-family:'Montserrat-ExtraBold'; font-size:56px;">{{ht_line1}}</text>
        <text transform="matrix(1 0 0 1 149.6187 406.8807)" style="fill:#FFFFFF; font-family:'Montserrat-ExtraBold'; font-size:56px;">{{ht_line2}}</text>
      </g>
    </svg>
    </div>
  </div>

</template>

<script>

export default {
  props:{
    colour: String,
    
  },
  
  data(){
        return{
            
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
