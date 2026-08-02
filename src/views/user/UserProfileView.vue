<script setup lang="ts">
import { toRefs } from 'vue'
import type { User } from '@/types'
import { useMessageStore } from '@/stores/message';
import { useRouter } from 'vue-router';
const store = useMessageStore()
const router = useRouter()


const props = defineProps<{
  user: User
}>()

const { user } = toRefs(props)
const edit = () =>{
    store.updateMessage(`Updating in progress`)
    setTimeout(() => {
        store.resetMessage()
    }, 5000)
    router.push({name: 'user-view'})
}
</script>

<template>
  <p><strong>Phone:</strong> {{ user.phone }}</p>

  <p><strong>Address:</strong></p>
  <p>{{ user.address.street }}, {{ user.address.suite }}</p>
  <p>{{ user.address.city }}</p>
  <p>{{ user.address.zipcode }}</p>
  <button @click="edit">Edit</button>
</template>