<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { toRefs } from 'vue'
import type { User, Post } from '@/types'
import UserService from '@/services/UserService'

const props = defineProps<{
  user: User
}>()

const { user } = toRefs(props)

const posts = ref<Post[]>([])

onMounted(async () => {
  const response = await UserService.getPosts(user.value.id)
  posts.value = response.data
})
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>