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
} from 'src/utils/push-notifications';
import { CapacitorUpdater } from '@capgo/capacitor-updater';

CapacitorUpdater.notifyAppReady();

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
