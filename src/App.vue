<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {
  addPushNotificationsListeners,
  registerNotifications,
} from 'src/utils/push-notifications';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import type { BundleInfo } from '@capgo/capacitor-updater';
import { App } from '@capacitor/app';

CapacitorUpdater.notifyAppReady();

let data: BundleInfo | null = null;

App.addListener('appStateChange', async (state: any) => {
  if (state.isActive) {
    data = await CapacitorUpdater.download({
      url: 'https://github.com/syntax-dot/capacitor-quasar/releases/download/v3/dist.zip',
      version: 'v3',
    })
  }
  if (!state.isActive && data) {
    try {
      await CapacitorUpdater.set({ id: data.id });
    } catch (err) {
      console.log(err);
    }
  }
});

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
