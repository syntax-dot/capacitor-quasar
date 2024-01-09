<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="register" @click="onRegister" />
  </q-page>
</template>

<script setup lang="ts">
import { PushNotifications } from "@capacitor/push-notifications";

async function onRegister() {
  await PushNotifications.register()
}
</script>
