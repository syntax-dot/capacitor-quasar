<template>
  <router-view />
</template>

<script setup lang="ts">
import { CapacitorUpdater } from '@capgo/capacitor-updater'
import { App } from '@capacitor/app'
import { onMounted } from "vue";
import { addPushNotificationsListeners, registerNotifications } from "src/utils/push-notifications";
import type { BundleInfo } from '@capgo/capacitor-updater'

async function autoUpdate() {
  CapacitorUpdater.notifyAppReady()

  let data: BundleInfo | null = null

  App.addListener('appStateChange', async (state: any) => {
    if (state.isActive) {
      const latest = await CapacitorUpdater.getLatest()
      console.log('latest', latest)
      if (latest.url) {
        data = await CapacitorUpdater.download({
          url: latest.url,
          version: latest.version,
        })
        console.log('download', data)
      }
    }
    if (!state.isActive && data) {
      try {
        await CapacitorUpdater.set({ id: data.id })
      }
      catch (err) {
        console.log(err)
      }
    }
  })
}


onMounted(async () => {
  await addPushNotificationsListeners()
  await registerNotifications()
  await autoUpdate()
})
</script>
