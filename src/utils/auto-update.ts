import { CapacitorUpdater } from '@capgo/capacitor-updater';
import type { BundleInfo } from '@capgo/capacitor-updater';
import { SplashScreen } from '@capacitor/splash-screen';
import { App } from '@capacitor/app';

CapacitorUpdater.notifyAppReady();

let data: BundleInfo | null = null;

App.addListener('appStateChange', async (state: any) => {
  if (state.isActive) {
    const latest = await CapacitorUpdater.getLatest();
    console.log('latest', latest);
    if (latest.url) {
      data = await CapacitorUpdater.download({
        url: latest.url,
        version: latest.version,
      });
      console.log('download', data);
    }
  }
  if (!state.isActive && data) {
    SplashScreen.show();
    try {
      await CapacitorUpdater.set({ id: data.id });
    } catch (err) {
      console.log(err);
      SplashScreen.hide(); // in case the set fail, otherwise the new app will have to hide it
    }
  }
});
