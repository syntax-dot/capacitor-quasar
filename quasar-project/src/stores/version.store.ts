import { defineStore } from 'pinia';

interface VersionState {
  version: number
}

export const useVersionStore = defineStore('version', {
  state: (): VersionState => ({
    version: 0
  }),

  getters: {
    doubleCount (state) {
      return state.version * 2;
    }
  },

  actions: {
    incrementVersion () {
      this.version++;
    }
  }
});
