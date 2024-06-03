<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {
  addPushNotificationsListeners,
  registerNotifications,
} from './utils/push-notifications';

// CapacitorUpdater.notifyAppReady();

const currentTheme = localStorage.getItem('theme');

onMounted(async () => {
  await addPushNotificationsListeners();
  await registerNotifications();
});
</script>

<style lang="scss">
.q-notification {
  width: 100%;
}
</style>
