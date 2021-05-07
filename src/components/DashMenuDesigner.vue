<template>

    <div class="Flex flex-col space-y-4 h-full">
        <div class="px-10 items-center pb-6">
            <img class="w-36" src="../assets/ystudio.png" alt="the studio">
            </div>
        <div class="px-10">
           <router-link to="/dashboard/home" tag="button" active-class="active" class="w-40 inline-flex space-x-1 justify-center rounded-full border border-transparent px-4 py-2 bg-st-gray text-base font-medium text-white hover:bg-yellow-400  focus:outline-none ">
             <span class=""><svg class="w-5 text-white" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,8.931V20a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V8.931a1,1,0,0,0-.441-.828L12,3,4.441,8.1A1,1,0,0,0,4,8.931ZM10,14a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v5H10Z"/></svg></span>
                <span>Home</span>
            </router-link>
        </div>
        <div class="px-10">
            <router-link to="/dashboard/clientlist" tag="button" active-class="active" class="w-40 inline-flex space-x-1 justify-center rounded-full border border-transparent px-4 py-2 bg-st-gray text-base font-medium text-white hover:bg-yellow-400  focus:outline-none ">
                <span>
                    <svg svg class="w-5 text-white" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7,11a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,7,11Zm0,6a5,5,0,0,0-5,5H12A5,5,0,0,0,7,17Zm10-1a2.5,2.5,0,1,0-2.5-2.5A2.5,2.5,0,0,0,17,16Zm0,1a5,5,0,0,0-5,5H22A5,5,0,0,0,17,17ZM14.5,4.5A2.5,2.5,0,1,0,12,7,2.5,2.5,0,0,0,14.5,4.5ZM11.449,13h1.1A4.488,4.488,0,0,1,15.36,9.32a4.936,4.936,0,0,0-6.72,0A4.488,4.488,0,0,1,11.449,13Z"/></svg>
                </span>
                <span>Clients</span>
            </router-link>
        </div>
         <div class="px-10">
            <router-link to="/dashboard/templates" tag="button" active-class="active" class="w-40 inline-flex space-x-1 justify-center rounded-full border border-transparent px-4 py-2 bg-st-gray text-base font-medium text-white hover:bg-yellow-400  focus:outline-none ">
            <span class="">
                <svg class="w-5 text-white" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,20V4A1,1,0,0,1,4,3h7V21H4A1,1,0,0,1,3,20Zm18,0V13H13v8h7A1,1,0,0,0,21,20ZM21,4a1,1,0,0,0-1-1H13v8h8Z"/></svg></span>
                <span>Templates</span>
            </router-link>
        </div>
        <div class="px-10">
            <router-link to="/dashboard/issues" tag="button" active-class="active" class="w-40 inline-flex space-x-1 justify-center rounded-full border border-transparent px-4 py-2 bg-st-gray text-base font-medium text-white hover:bg-yellow-400  focus:outline-none ">
             <span class="">
                    <svg class="w-5 text-white" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,8.087,21,3V21L9,15.913V21H5V15.913a2,2,0,0,1-2-2V10.087a2,2,0,0,1,2-2Z"/></svg>
                </span>
                <span>Issues</span>
            </router-link>
        </div>
        <div class="px-10">
            <router-link to="/dashboard/settings" tag="button" active-class="active" class="w-40 inline-flex space-x-1 justify-center rounded-full border border-transparent px-4 py-2 bg-st-gray text-base font-medium text-white hover:bg-yellow-400  focus:outline-none ">
             <span class="">
                    <svg class="w-5 text-white" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.991,10H19.42a1.039,1.039,0,0,1-.951-.674l-.005-.013a1.04,1.04,0,0,1,.2-1.146l1.11-1.11a1.01,1.01,0,0,0,0-1.428l-1.4-1.4a1.01,1.01,0,0,0-1.428,0l-1.11,1.11a1.04,1.04,0,0,1-1.146.2l-.013,0A1.04,1.04,0,0,1,14,4.579V3.009A1.009,1.009,0,0,0,12.991,2H11.009A1.009,1.009,0,0,0,10,3.009v1.57a1.04,1.04,0,0,1-.674.952l-.013,0a1.04,1.04,0,0,1-1.146-.2l-1.11-1.11a1.01,1.01,0,0,0-1.428,0l-1.4,1.4a1.01,1.01,0,0,0,0,1.428l1.11,1.11a1.04,1.04,0,0,1,.2,1.146l0,.013A1.039,1.039,0,0,1,4.58,10H3.009A1.009,1.009,0,0,0,2,11.009v1.982A1.009,1.009,0,0,0,3.009,14H4.58a1.039,1.039,0,0,1,.951.674l0,.013a1.04,1.04,0,0,1-.2,1.146l-1.11,1.11a1.01,1.01,0,0,0,0,1.428l1.4,1.4a1.01,1.01,0,0,0,1.428,0l1.11-1.11a1.04,1.04,0,0,1,1.146-.2l.013.005A1.039,1.039,0,0,1,10,19.42v1.571A1.009,1.009,0,0,0,11.009,22h1.982A1.009,1.009,0,0,0,14,20.991V19.42a1.039,1.039,0,0,1,.674-.951l.013-.005a1.04,1.04,0,0,1,1.146.2l1.11,1.11a1.01,1.01,0,0,0,1.428,0l1.4-1.4a1.01,1.01,0,0,0,0-1.428l-1.11-1.11a1.04,1.04,0,0,1-.2-1.146l.005-.013A1.039,1.039,0,0,1,19.42,14h1.571A1.009,1.009,0,0,0,22,12.991V11.009A1.009,1.009,0,0,0,20.991,10ZM12,15a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></svg>
                </span>
                <span>Settings</span>
            </router-link>
       
        </div>
        <div class="px-14 pt-32">
            <button @click="logout" class="w-32 inline-flex space-x-1 justify-center border-2 border-solid px-4 py-2 border-st-gray text-base font-medium text-st-gray hover:bg-yellow-400  focus:outline-none "> Log Out </button>
       </div>
    </div>
</template>

<script>
import firebase from 'firebase/app'
// import db from "./firebaseInit"
// var usersCollection = db.collection("Users");
// var issuesCollection  = db.collection("Issues");
// var templateCollection  = db.collection("Templates");

// var projectCollection = db.collection("Projects")

export default {
  methods: {
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Successfully logged out');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
        this.$router.push('/dashboard');
      });
  },
},
  

}
</script>

<style scoped>
button.active{
    background: #FFC600;

}

</style>