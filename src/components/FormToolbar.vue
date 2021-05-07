<template>
<div class="h-screen w-screen grid grid-flow-col">
<div class="h-screen w-60">
	
	<!-- container -->
	
	<aside
		class="flex flex-col items-center bg-st-gray text-white shadow h-full w-60 overflow-y-auto">
		<!-- Side Nav Bar-->

		<div class="h-16 flex justify-center items-center w-full">
			<!-- Back Section -->
			<router-link to="/home" tag="button" active-class="active" class="flex flex-row space-x-3">
                <span>
				<svg 
                class="h-6 w-6 mx-auto"
                width="24"
				height="24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24">
                <path d="M1.293,12.707a1,1,0,0,1,0-1.414l6-6A1,1,0,0,1,8.707,6.707L4.414,11H22a1,1,0,0,1,0,2H4.414l4.293,4.293a1,1,0,0,1-1.414,1.414Z"/>
                </svg></span>
				<span>Back to Home</span>
            </router-link>
		</div>
		

		<form>
			<h1 class="text-white px-4 text">Heading</h1>
			<div class="px-4 pt-6 grid grid-cols-5 gap-5">
			<div class="col-span-5 xs:col-span-5">
				<label for="text_title" class="block text-sm font-medium text-white ">Heading Text</label>
                <input type="text" name="text_title" id="text_title" class="mt-1 text-st-gray focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
			
			<div class="col-span-2 sm:col-span-2 mt-2">
				<label for="fontpicker" class="block text-sm font-medium text-white">Text Size</label>
				<select name="ht-size" id="ht-size" class="appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-st-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option v-for="htsize in ht_size" v-bind:key="htsize">{{htsize}}</option>
				</select>
			</div>
			<div class="col-span-3 sm:col-span-3 mt-2">
				<div class="form__label">
					<label for="fontpicker" class="block text-sm font-medium text-white">Text Colour</label>
					</div>
				<div class="form__input">
					<v-swatches
					v-model="ht_color"
					show-fallback
					popover-x="left"
					></v-swatches>
				</div>
			</div>

			<div class="col-span-2 sm:col-span-2 mt-2">
				<div class="form__label">
					<label for="fontpicker" class="block text-sm font-medium text-white">Background Colour</label>
					</div>
				<div class="form__input">
					<v-swatches
					v-model="bg_colour"
					show-fallback
					popover-x="left"
					></v-swatches>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-2 mt-2">
				<div class="form__label">
					<label for="fontpicker" class="block text-sm font-medium text-white">Line 2 Colour</label>
					</div>
				<div class="form__input">
					<v-swatches
					v-model="ht2_colour"
					show-fallback
					popover-x="left"
					></v-swatches>
				</div>
			</div>

			<div class="col-span-5 sm:col-span-5 mt-2">
                <label for="font-name" class="block text-sm font-medium text-white">Font Name</label>
                <select id="font-name" name="font-name" class="appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-st-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option v-for="fontname in fontlist" v-bind:key="fontname.family">{{fontname.family}}</option>
                </select>
            </div>

			<div class="col-span-5 sm:col-span-5 mt-2">
                <label for="font-var" class="block text-sm font-medium text-white">Font Style</label>
                <select id="font-var" name="font-var" class="appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-st-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option v-for="hstyle in fstyle" v-bind:key="hstyle">{{hstyle}}</option>
                </select>
            </div>
			</div>
		</form>

		<div class="mt-auto h-16 flex items-center w-full">
			<!-- Action Section -->
			<button
				class="h-16 mx-auto flex justify-center items-center space-x-3
				w-full focus:text-orange-500 hover:bg-yellow-600 focus:outline-none">
				<svg
					class="h-5 w-5"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
					<polyline points="16 17 21 12 16 7"></polyline>
					<line x1="21" y1="12" x2="9" y2="12"></line>
				</svg>
				<span>Log Out</span>

			</button>
		</div>

	</aside>
	</div>

	
		<div class="container max-w-md pt-10 mx-auto overflow-hidden">
			<TestCanvas/>
	</div>
  
</div>

</template>

<script>
import VSwatches from 'vue-swatches'
import axios from 'axios';
export default {

components: { VSwatches },
props: ['ht_colour','ht_text','hfont_style','hfont_size'],
data() {
	return {
		ht_size:['14','16','18','20','24',"28","30"],
		ht_color: '#ffffff',
		bg_colour: '#3a3a3a',
		ht2_colour: '#ffc600',
		fontlist: null,
        line2:'',
		fstyle:["Extra Light","Light","Regular","Bold","ExtraBold","Black"]
	}
	
},

mounted: function() {
	axios.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAGGVuBRYRaEP9WqZXj_KZwF5lqWejzNv0')
		.then(response => this.fontlist = response.data.items)
		
	},

}

</script>

<style scoped>
button.active{
    color: #FFC600;

}
a:visited{
    color:white

}
</style>