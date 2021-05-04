import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
console.log('Running version:'+process.env.version)
if (process.env.version == 'local') {
    Vue.use(VueNativeSock, 'ws://192.168.0.12:3001/totem')
}
else {
    Vue.use(VueNativeSock, 'wss://socket-mother.herokuapp.com/totem')
}

