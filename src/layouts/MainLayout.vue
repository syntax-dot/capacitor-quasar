<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :style="{ backgroundColor: $state.color }">
      <q-toolbar>
        <q-toolbar-title>
          <div v-text="`Current version: ${$state?.version}`" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAppInfoStore } from 'stores/version.store';

const { $state } = useAppInfoStore();
</script>
