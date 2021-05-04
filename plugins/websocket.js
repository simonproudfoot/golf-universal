import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

const server = window.location.hostname.match(/[a-z]/i) ? 'wss://socket-mother.herokuapp.com/totem' : 'ws://192.168.0.12:3001/totem'

Vue.use(VueNativeSock, server) // local
//Vue.use(VueNativeSock, 'wss://socket-mother.herokuapp.com/totem') // online

