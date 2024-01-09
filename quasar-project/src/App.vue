<template>
  <router-view />
</template>

<script setup lang="ts">
import { CapacitorUpdater } from '@capgo/capacitor-updater'
import { onMounted } from "vue";
import { addPushNotificationsListeners, registerNotifications } from "src/utils/push-notifications";


onMounted(async () => {
  await addPushNotificationsListeners()
  await registerNotifications()
  await CapacitorUpdater.notifyAppReady()
})
</script>
