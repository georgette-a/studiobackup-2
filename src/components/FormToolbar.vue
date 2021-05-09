<template>
<div class="h-screen w-screen grid grid-flow-col">
<div class="h-screen w-60">
	
	<!-- container -->
	
	<aside
		class="flex flex-col items-center bg-st-gray text-white shadow h-full w-80 overflow-y-auto">
		<!-- Side Nav Bar-->

		<div class="h-16 flex justify-left items-left pl-2 py-6 w-full">
			<!-- Back Section -->
			<router-link to="/dashboard/home" tag="button" active-class="active" class="flex flex-row space-x-3">
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
		

		<form @submit.prevent="updateValues">
			<h1 class="text-white px-4 text">Edit Text</h1>
			<div class="px-4 pt-6 grid grid-cols-5 gap-5">
			<div class="col-span-3 xs:col-span-3">
				<label for="text_title" class="block text-sm font-medium text-white ">Heading Text</label>
                <input type="text" v-model="Line_1" name="text_title" id="text_title"  class="mt-1 text-st-gray focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
			
			<div class="col-span-2 sm:col-span-2">
				<label for="fontpicker" class="block text-sm font-medium text-white">Text Size</label>
				<select name="ht-size" id="ht-size" class="appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-st-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option v-for="htsize in ht_size" v-bind:key="htsize">{{htsize}}</option>
				</select>
			</div>
			<div class="col-span-3 xs:col-span-3">
				<label for="text_body" class="block text-sm font-medium text-white ">Body Text</label>
                <input type="text" v-model="Line_2" name="text_bofy" id="text_body"  class="mt-1 text-st-gray focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            </div>
			
			<div class="col-span-2 sm:col-span-2">
				<label for="fontpickers" class="block text-sm font-medium text-white">Text Size</label>
				<select name="ht-sized" id="ht-sized" class="appearance-none mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm text-st-gray focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
					<option></option>
				</select>
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
			<div>
				<button type="submit" @click="updateLine_1" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-st-gray bg-st-yellow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Update</button>
			</div>
			<div>
				<button type="button" @click="downloadFile" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-st-gray bg-st-yellow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ml-20 focus:ring-indigo-500">download</button>
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

	
		<div class="container static max-w-md pt-10  overflow-hidden">
			<!-- <testOne :heading="Line_1" body="hello"/> -->
			<div v-html="svgString"></div>
	</div>
  
</div>

</template>

<script>
// import firebase from 'firebase/app'
// import 'firebase/auth'
// import db from "./firebaseInit"
// var projectCollection = db.collection("Projects");

// import testOne from './svgCanvas.vue';
import axios from 'axios';
import { FileSaver } from 'file-saver'
export default {

components:{
	// testOne,
},

data() {
	return {
		svgString:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><g id="Background"><rect width="1920" height="1080" fill="#fdc506"/></g><g id="Heading"><text transform="translate(207.12 226.24)" font-size="72" fill="#1d1d1b" font-family="Montserrat-ExtraBold, Montserrat" font-weight="800">{{HEADING}}</text><text transform="translate(212.16 407.08)" font-size="72" fill="#1d1d1b" font-family="Montserrat-SemiBold, Montserrat" font-weight="600">{{Body}}</text></g></svg>',
		ht_size:['14','16','18','20','24',"28","30"],
		ht_color: '#ffffff',
		bg_colour: '#3a3a3a',
		ht2_colour: '#ffc600',
		fontlist: null,
        Line_2:'',
		Line_1:'',
		
		
		fstyle:["Extra Light","Light","Regular","Bold","ExtraBold","Black"]
	}
	
},
	computed:{
		updateLine1: function(){
			return this.Line_1;}

	},
	methods:{
		updateLine_1(){
			
			console.log(this.Line_1);
			this.svgProcessing(this.svgString);
			return this.updateLine1;
		},

		svgProcessing(string){
			var regexp = /\{{(.*?)\}}/g;
			var text = string.match(regexp);


			if (text && text.length > 0){
			
				const t1= this.Line_1;
				const t2=this.Line_2;
				const t3='text3';
				const t4='t4';
				const t5='t5';
				const arr = [t1,t2,t3,t4,t5];
				var len = text.length;
				
				for (var i = 0; i < len; ){
				text = string.match(regexp);
				string = string.replace(text[0],arr[i]);
				i++
				
				console.log(string);
				

				
				
				}
				this.svgString = string;
				this.$store.svgString = this.svgString;
				return string;

			} else {
				console.log('No Match')
			}

		},
		downloadFunction(svgFile){
			
			const blob = new Blob([svgFile], {type: 'image/svg+xml'});
			const url = URL.createObjectURL(blob);
			const image = document.createElement('img');
			image.addEventListener('load', () => URL.revokeObjectURL(url), {once: true});
			image.src = url;
			FileSaver.saveAs(url,"image.jpg")

		},
		downloadFile(){
			this.downloadFunction(this.svgString);
		},

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