<script setup lang="ts">
import type { User } from '@/types'
import UserCard from '@/components/UserCard.vue'
import {ref, onMounted} from 'vue'
import { useMessageStore} from '@/stores/message'
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const { message } = storeToRefs(store)

import UserService from '@/services/UserService'
const users = ref<User[] | null>(null)




onMounted(() =>{

    UserService.getUsers()
    .then((response) =>{
    console.log(response.data)
      users.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
  })
   

</script>

<template>
    <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Users</h1>
       <div class="users">
    <UserCard v-for="user in users" :key="user.id" :user="user"/>
   

  </div>


</template>

<style scoped>
.users {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
display: flex;
width: 290px;
}
.pagination a {
flex: 1;
text-decoration: none;
color: #2c3e50;
}

#page-prev {
text-align: left;
}

#page-next {
text-align: right;
}
@keyframes yellowFade{
  from{
    background-color: yellow;
  }
  to{
    background-color: transparent;
  }
}
#flashMessage{
  animation: yellowFade 5s ease-in-out;
}
</style>
