import { PushNotifications } from '@capacitor/push-notifications';

PushNotifications.addListener('registration', token => {
  console.info('Registration token:', token.value);
});
