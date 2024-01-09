import { defineStore } from 'pinia';

interface VersionState {
  version: number,
  token: string | null,
}

export const useAppInfoStore = defineStore('app-info', {
  state: (): VersionState => ({
    version: 0,
    token: null
  }),

  getters: {
    doubleCount (state) {
      return state.version * 2;
    }
  },

  actions: {
    incrementVersion () {
      this.version++;
    },

    setToken (newToken: string) {
      this.token = newToken;
    }
  }
});
