<template>
   <div>
    <!--Issues -->
  
  <h1 class=" text-st-gray text-2xl pb-3">Current Issues</h1>
  <div class="flex flex-row flex-nowrap space-x-12 text-center">

    <div class="w-36"> 
      <span class="justify-center">
        <img alt="Placeholder" class="rounded-lg mx-auto border-st-gray border-2 w-24 h-24" src="https://picsum.photos/600/400/?random">
      </span>
      <span class="">
        <p class="truncate pt-2">Template Name</p>
        <p class="text-sm text-gray-700 text-opacity-50 truncate">Client Name</p>
      </span>
    </div>

    <!-- item 2 -->
      <div class="w-36 center"> 
      <span class="self-center">
        <img alt="Placeholder" class="rounded-lg mx-auto border-st-gray border-2 w-24 h-24" src="https://picsum.photos/600/400/?random">
      </span>
      <span>
        <p class="truncate pt-2">Template 04 way too long</p>
        <p class="text-sm text-gray-700 text-opacity-50 truncate">Client Name</p>
      </span>
    </div>
    
    

  </div>

  
        <!-- All Templates -->
<h1 class=" text-st-gray text-2xl pt-5 pb-3">Recently Edited Projects</h1>
<div class="flex flex-row flex-nowrap space-x-10 text-center">

    <div class="w-36"> 
      <span class="justify-center">
        <img alt="Placeholder" class="rounded-lg mx-auto border-st-gray border-2 w-28 h-28" src="https://picsum.photos/600/400/?random">
      </span>
      <span >
        <p class="truncate pt-2">Project Name</p>
        <p class="text-sm text-gray-700 text-opacity-50 truncate">Client Name</p>
      </span>
    </div>

    <!-- item 2 -->
    <router-link to="/studio" tag="button" active-class="active">
      <div class="w-36 center"> 
      <span class="self-center">
        <img alt="Placeholder" class="rounded-lg mx-auto border-st-gray border-2 w-28 h-28" src="https://picsum.photos/600/400/?random">
      </span>
      <span>
        <p class="truncate pt-2">{{userID}}</p>
        <p class="text-sm text-gray-700 text-opacity-50 truncate">Client Name</p>
      </span>
    </div>
    </router-link>
    

  </div>
  
</div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import db from "./firebaseInit"

 // eslint-disable-next-line no-unused-vars
var usersCollection = db.collection("Users");
// eslint-disable-next-line no-unused-vars
var projectCollection = db.collection("Projects");
export default {
   
  data() {
    return{
      userID:'',
      userName:'',
      projectName:'',
      templateName:'',
      svgCanvas:'',
      projects:[],
      userIn: '',
    }
    
  },
  methods:{
    openProject(){
      const userIn = firebase.auth().currentUser.uid;
      this.userIn = userIn;
    },
    getProject(){
projectCollection.get().then((querySnapshot) => {
      
      querySnapshot.forEach((doc) => {
        if (doc.data().user == this.userIn){
        const data = {
          
            'name': doc.data().Name,
            'email': doc.data().email,
            'projects': (doc.data().Projects).toString()

          }
          console.log(data)
          this.projects.push(data)
        }
        
      })
    })
    }
    
  },

  created () {
    this.openProject();
    this.getProject();
      
    }
}
</script>