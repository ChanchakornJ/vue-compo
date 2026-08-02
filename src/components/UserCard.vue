<script setup lang="ts">
import type { User } from '@/types'

defineProps<{
  user: User
}>()
</script>

<template>
     <RouterLink class="user-link" :to="{ name: 'user-profile-view', params: {id: user.id}}">
  <div class="user-card">
    <h2>{{ user.name }}</h2>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <p><strong>Company:</strong> {{ user.company.name }}</p>
  </div>
  </RouterLink>
</template>

<style scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 300px;
  padding: 20px;
  margin-bottom: 18px;

  border: 1px solid #39495c;
  border-radius: 8px;
  box-sizing: border-box;

  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.user-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
}

.user-card h2 {
  margin: 0 0 12px;
  font-size: 20px;
}

.user-card p {
  margin: 4px 0;
  word-break: break-word;
}
.user-link{
  text-decoration: none;
  color: #2c3e50
}
</style>