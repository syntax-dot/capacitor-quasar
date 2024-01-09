import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'quasar-project',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    CapacitorUpdater : {
      autoUpdate: false,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
