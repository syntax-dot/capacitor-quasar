<template>
  <q-page class="column q-px-lg q-py-sm">
    <q-input class="text-bold q-py-sm" v-model="$state.token" dense outlined readonly autogrow >
      <template v-slot:append>
        <q-btn round dense flat :icon="isCopied ? 'done' : 'content_copy'" @click="onCopy" >
          <q-tooltip>{{ isCopied ? 'Token copied' : 'Copy token' }}</q-tooltip>
        </q-btn>
      </template>
    </q-input>
    <q-btn label="register" @click="incrementVersion" />
  </q-page>
</template>

<script setup lang="ts">
import { useAppInfoStore } from "stores/version.store";
import { ref } from "vue";

const { incrementVersion, $state } = useAppInfoStore()
const isCopied = ref(false)

function onCopy() {
  // fixme
  if (!$state?.token) return
  const textField = document.createElement('textarea')
  textField.innerText = $state.token
  document.body.appendChild(textField)
  textField.select()
  textField.setSelectionRange(0, 99999)
  document.execCommand('copy')
  document.body.removeChild(textField)

  isCopied.value = true
}
</script>
