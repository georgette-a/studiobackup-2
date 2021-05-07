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

              <div class="col-span-6 sm:col-span-3">
                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" v-model="email" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="status" class="block text-sm font-medium text-gray-700">Subscription</label>
                <select id="status" name="status" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Pending</option>
                  <option>Active</option>
                 
                </select>
              </div>

             

             
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button @click="addClient" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-st-yellow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
        </form>
      

</div>
</template>
<script>
import firebase from 'firebase/app'
// import db from "./firebaseInit"
const auth = firebase.auth();
// var usersCollection = db.collection("Users");
export default {
  data(){
    return {
      email: '',
      password: '',
      fName: '',
      lName:'',
    }
  },
  methods:{

    addClient(){
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(ScopedCredential => {
          console.log(ScopedCredential)
    
        });
    }

    

  
  }
}
</script>
