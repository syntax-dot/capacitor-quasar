import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'quasar-project',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    // SplashScreen: {
    //   launchShowDuration: 3000,
    //   launchAutoHide: false,
    //   launchFadeOutDuration: 3000,
    //   backgroundColor: "#111111",
    //   androidSplashResourceName: "favicon_240dp",
    //   androidScaleType: "CENTER_CROP",
    //   showSpinner: true,
    //   androidSpinnerStyle: "large",
    //   iosSpinnerStyle: "small",
    //   spinnerColor: "#999999",
    //   splashFullScreen: true,
    //   splashImmersive: true,
    //   layoutName: "launch_screen",
    //   useDialog: true,
    // },
    CapacitorUpdater: {
      autoUpdate: true,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
};

export default config;
