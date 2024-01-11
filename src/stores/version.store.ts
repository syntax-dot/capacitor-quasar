import { defineStore } from 'pinia';
import { getColorByVersion } from 'src/utils/get-color-by-version';

interface VersionState {
  version: number;
  token: string | null;
  color: string;
}

export const useAppInfoStore = defineStore('app-info', {
  state: (): VersionState => ({
    version: 0,
    token: null,
    color: '#003FFF4D',
  }),

  getters: {
    doubleCount(state) {
      return state.version * 2;
    },
  },

  actions: {
    incrementVersion() {
      this.version++;
      this.color = getColorByVersion(this.version);
    },

    setToken(newToken: string) {
      this.token = newToken;
    },
  },
});
