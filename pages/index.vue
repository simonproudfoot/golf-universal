<template>
<div id="app">
    <h1 style="color: #fff">{{ received }}</h1>
    <button @click="stop()">send</button>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            received: 0,
            socket: null
        }
    },

    methods: {
        stop() {
            this.$socket.send('reset');
        }
    },
    mounted() {

        // Create a socket instance
        // Open the socket
        this.$socket.onopen = (event) => {

            // Send an initial message
            this.$socket.send('I am the client and I\'m listening!');

            // Listen for messages
            this.$socket.onmessage = (event) => {
                console.log('Client received a message', event);
                this.received++
            };

            // Listen for socket closes
            this.$socket.onclose = (event) => {
                console.log('Client notified socket has closed', event);
            };

        };

        console.log('sending')
        //   this.$socket.send('message', 'hello');
    },

}
</script>

<style>
#app {
    background: blue;
}
</style>
