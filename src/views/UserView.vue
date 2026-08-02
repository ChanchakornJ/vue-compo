<script setup lang="ts">
import type { User } from '@/types'
import UserCard from '@/components/UserCard.vue'
import {ref, onMounted} from 'vue'

import UserService from '@/services/UserService'
const users = ref<User[] | null>(null)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
})


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
      <h1>Users</h1>
       <div class="events">
    <UserCard v-for="user in users" :key="user.id" :user="user"/>
   
  <!-- <div class="pagination">
    <RouterLink
    id="page-prev"
    :to="{name: 'event-list-view', query: {page: page - 1, limit: perPage  } }"
    rel="prev"
    v-if="page != 1">&#60; Prev Page</RouterLink>
  

  <RouterLink 
  id="page-next"
  :to="{ name: 'event-list-view', query: { page: page + 1, limit: perPage } }" 
  rel="next" 
  v-if="hasNextPage" >
    Next Page &#62;
  </RouterLink>
  </div> -->
  </div>


</template>

<style scoped>
.events {
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
</style>
