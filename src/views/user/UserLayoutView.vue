<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const store = useUserStore()
const {user} = storeToRefs(store)

</script>

<template>
  <div v-if="user">
    <h1>{{ user.name }}</h1>

    <nav>
      <RouterLink
        :to="{ name: 'user-profile-view', params: { id: user.id } }">
        Profile
      </RouterLink>
      |

      <RouterLink
        :to="{ name: 'user-post-view', params: { id: user.id } }">
        Posts
      </RouterLink>
    </nav>

    <RouterView :user="user" />
  </div>
</template>