<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '@/types'
import UserService from '@/services/UserService'
import { useRouter } from 'vue-router'

const user = ref<User | null>(null)

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const router = useRouter()

onMounted(() => {
  UserService.getUser(Number(props.id))
    .then((response) => {
      user.value = response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404-resource-view',
          params: { resource: 'user' }
        })
      } else {
        router.push({
          name: 'network-error-view'
        })
      }
    })
})
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