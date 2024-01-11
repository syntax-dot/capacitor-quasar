<template>
  <q-page class="full-height column justify-center q-px-lg q-py-sm">
    <div v-text="'Версия от 11.01.24'" />
    <q-input
      v-if="$state?.token"
      class="text-bold q-py-sm"
      v-model="$state.token"
      dense
      outlined
      readonly
      autogrow
    >
      <template v-slot:append>
        <q-btn
          round
          dense
          flat
          :icon="isCopied ? 'done' : 'content_copy'"
          @click="onCopy"
        >
          <q-tooltip>{{ isCopied ? 'Token copied' : 'Copy token' }}</q-tooltip>
        </q-btn>
      </template>
    </q-input>
    <q-btn
      label="Check update"
      @click="onCheckUpdate"
      :style="{ backgroundColor: $state.color }"
      :loading="isLoading"
    >
      <q-tooltip v-if="lastVersionInfo">{{ `version: ${lastVersionInfo.version}, last-update: ${lastVersionInfo.date} (UTC)` }}</q-tooltip>
    </q-btn>
  </q-page>
</template>

<script setup lang="ts">
import { useAppInfoStore } from 'stores/version.store';
import {onMounted, ref} from 'vue';
import { CapacitorUpdater } from "@capgo/capacitor-updater";
import { SplashScreen } from '@capacitor/splash-screen'

const { incrementVersion, $state } = useAppInfoStore();
const isCopied = ref(false);
const isLoading = ref(false);
const lastVersionInfo = ref<{version: string, date: string} | null>(null);

function onCopy() {
  // fixme
  if (!$state?.token) return;
  const textField = document.createElement('textarea');
  textField.innerText = $state.token;
  document.body.appendChild(textField);
  textField.select();
  textField.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(textField);

  isCopied.value = true;
}

async function onCheckUpdate () {
  isLoading.value = true
  try {
    const data = await CapacitorUpdater.download({
      url: 'https://github.com/syntax-dot/capacitor-quasar/releases/download/v3/dist.zip',
      version: 'v3',
    })
    if (data) {
      SplashScreen.show()
      try {
        await CapacitorUpdater.set({ id: data.id });
      } catch (err) {
        SplashScreen.hide()
        console.log(err);
      }
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  const data = await CapacitorUpdater.download({
    url: 'https://github.com/syntax-dot/capacitor-quasar/releases/download/v3/dist.zip',
    version: 'v3',
  })

  const { version, downloaded } = data || {}
  const date = new Date(downloaded);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formattedDate = date.toLocaleString("ru-RU", options);
  lastVersionInfo.value = { version, date: formattedDate }
  console.log('onMounted', data)
})
</script>
