import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

//Vue.use(VueNativeSock, 'ws://192.168.0.12:3001/totem')
Vue.use(VueNativeSock, 'ws://socket-mother.herokuapp.com/totem')
