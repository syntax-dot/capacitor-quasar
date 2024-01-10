<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { addPushNotificationsListeners, registerNotifications } from "src/utils/push-notifications";

onMounted(async () => {
  await addPushNotificationsListeners()
  await registerNotifications()
})
</script>
