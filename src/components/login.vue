<template>
  <div>
    <Nav1/>
  <div class="grid md:grid-cols-2 grid-cols-1 px-10 py-10 justify-around items-center">
    <div class="flex flex-wrap flex-col py-20 lg:text-6xl md:text-5xl text-gray font-extrabold text-5xl text-right justify-self-start md:justify-items-center">
    <h1>welcome to <br><span class="text-white">the studio!</span></h1>
    </div>
    <div class="flex flex-wrap flex-col py-20 justify-around items-center font-medium text-left text-gray">
    <form @submit.prevent="login" class="flex flex-col flex-wrap">
      <h1 class="font-extrabold text-3xl">log in.</h1>

      <label class="pt-8 pb-2"> email address </label>
      <input class="border-2 border-solid border-gray bg-transparent w-80 h-8 p-4 placeholder-gray placeholder-opacity-50" type="email" placeholder="email address" required v-model="email">
      
      <label class="pt-3 pb-2"> password </label>
      <input class="border-2 border-solid border-st-gray bg-transparent w-80 h-8 p-4 placeholder-gray placeholder-opacity-50" type="password" placeholder="password"  required  v-model="password">
      <a class="mx-auto pt-3">Forgot Password</a>
      <button type="submit" class=" bg-st-gray w-40 my-8 mx-20 text-white font-semibold h-14" >log in</button>
  </form>
  <!-- <h1>{{password}}, {{email}}</h1> -->
  </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import Nav1 from './Nav1' 
import db from "./firebaseInit"
const auth = firebase.auth();
 // eslint-disable-next-line no-unused-vars
var usersCollection = db.collection("Users");
export default {
  name: 'App',
  components: { Nav1 },
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods: {
      login() {
        var email = this.email;
        var password = this.password
        
        auth.signInWithEmailAndPassword(email, password)
            .then(cred => {
              console.log(cred.user)
              this.$router.push('/dashboard')
        
            }).catch(error => {alert(error.Message)})
        
      },
    

      }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>