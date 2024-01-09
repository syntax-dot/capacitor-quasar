<template>
  <q-page class="row items-center justify-evenly">
    <q-btn label="register" @click="incrementVersion" />
  </q-page>
</template>

<script setup lang="ts">
import { useVersionStore } from "stores/version.store";

const { incrementVersion } = useVersionStore()
</script>
