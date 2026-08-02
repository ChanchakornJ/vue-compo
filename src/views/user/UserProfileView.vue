<script setup lang="ts">
import { toRefs } from 'vue'
import type { User } from '@/types'

const props = defineProps<{
  user: User
}>()

const { user } = toRefs(props)
</script>

<template>
  <p><strong>Phone:</strong> {{ user.phone }}</p>

  <p><strong>Address:</strong></p>
  <p>{{ user.address.street }}, {{ user.address.suite }}</p>
  <p>{{ user.address.city }}</p>
  <p>{{ user.address.zipcode }}</p>
</template>