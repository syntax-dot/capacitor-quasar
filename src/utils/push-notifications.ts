import { PushNotifications } from "@capacitor/push-notifications";
import { useAppInfoStore } from "stores/version.store";
import { QVueGlobals } from "quasar";
import { Notify } from 'quasar'

export async function addPushNotificationsListeners(quasar?: QVueGlobals) {
  const { setToken, incrementVersion } = useAppInfoStore()

  await PushNotifications.addListener('registration', token => {
    console.info('Registration token: ', token.value);
    if (token.value) {
      setToken(token.value)
    }
  });

  await PushNotifications.addListener('registrationError', err => {
    console.error('Registration error: ', err.error);
  });

  await PushNotifications.addListener('pushNotificationReceived', notification => {
    console.log('Push notification received: ', notification);
    Notify.create({
      message: notification?.title ?? 'New notification',
      caption: notification?.body,
      color: 'secondary',
      position: 'top-right',
    })
    incrementVersion()
  });

  await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
    console.log('Push notification action performed', notification.actionId, notification.inputValue);
  });
}

export async function registerNotifications() {
  let permStatus = await PushNotifications.checkPermissions();

  if (permStatus.receive === 'prompt') {
    permStatus = await PushNotifications.requestPermissions();
  }

  if (permStatus.receive !== 'granted') {
    throw new Error('User denied permissions!');
  }

  await PushNotifications.register();
}
