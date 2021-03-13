import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDgjzfQyKyCdbw_rR1eInainf3EW2tpo1w",
  authDomain: "calendarapp-f45ab.firebaseapp.com",
  databaseURL: "https://calendarapp-f45ab-default-rtdb.firebaseio.com",
  projectId: "calendarapp-f45ab",
  storageBucket: "calendarapp-f45ab.appspot.com",
  messagingSenderId: "447076897501",
  appId: "1:447076897501:web:ade3af59db819af3138134",
  measurementId: "G-DSLR4ELNXK"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
