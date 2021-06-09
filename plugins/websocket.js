import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
// Vue.use(VueNativeSock, 'ws://192.168.1.233:3001') // over local IP
// Vue.use(VueNativeSock, 'wss://socket-mother.herokuapp.com') // online
Vue.use(VueNativeSock, 'ws://0.0.0.0:3001') // localhost 
//Vue.use(VueNativeSock, 'ws://192.168.0.10:8080') // on site  

// comment out where needed


