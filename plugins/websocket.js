import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

//Vue.use(VueNativeSock, 'ws://192.168.1.233:3001')
Vue.use(VueNativeSock, 'wss://socket-mother.herokuapp.com/totem')
