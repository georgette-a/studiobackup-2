<template>
    <div>

<h1 class=" text-st-gray text-2xl pb-3">Settings</h1>
<h3 class=" text-st-gray text-xl pb-3">Add User</h3>
        <form action="" @submit.prevent="addClient">
          <div class="overflow-hidden sm:rounded-md">
          <div class="px-4 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first_name" id="first_name" v-model="fName" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last_name" id="last_name" v-model="lName" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-12 sm:col-span-6">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" v-model="email" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              
             

      
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button @click="addClient()" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-st-yellow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
        </form>
      

</div>
</template>
<script>
import firebase from 'firebase/app'
// import createUserApp from "./firebaseInit2"
import db from './firebaseInit'
var usersCollection = db.collection("Users");
export default {
  data(){
    return {
      email: '',
      password: 'default-password',
      fName: '',
      lName:'',
    }
  },
  methods:{

    addClient(){
      // alert('kkkk')
      // alert(this.email)
      var email = this.email;
      var name = this.fName+" "+this.lName;
       firebase.auth().createUserWithEmailAndPassword(email, '$tr0nGP@ssw0rd')
           .then(function () {

              // alert('ppppp')
              firebase.auth().signInWithEmailAndPassword(email, '$tr0nGP@ssw0rd')
                  .then(function () {
                    // alert('iiiiii')

                    ///enclose this part in the login function
                    const uid = firebase.auth().currentUser.uid;
                    console.log(name, uid)
                    usersCollection.doc(uid).set({
                          Name: name,
                          Email: email,
                        }).then(function (){
                          console.log('Written')
                        })
                  })
                  .catch(function () {
                    // console.log(error)
                    // alert(error)
                  });
          })
           .catch(function () {
            //  alert(error)
           });

    }

    

    

  
  
  }
}
</script>
