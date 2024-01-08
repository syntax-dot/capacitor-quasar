<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="register" @click="onRegister"></q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { PushNotifications } from "@capacitor/push-notifications";

async function onRegister() {
  // const res = await fetch('https://fcm.googleapis.com/fcm/send')
  // console.log('res', res)
  // await PushNotifications.requestPermissions()
  await PushNotifications.register()
}
</script>
