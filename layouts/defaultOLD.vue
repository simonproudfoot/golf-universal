<template>
<div id="app" @contextmenu.prevent="">
    <!-- <div @click="goHome" class="text-white testTimer"><small> {{$store.state.time}} seconds until next show</small>
    </div> -->
    <Nuxt />
    <v-idle v-if="!$store.getters.videoMode" style="display:none" :duration="300" :loop="true" @idle="goHome" />
  <button @click="vTest">Run video</button>

</div>
</template>

<script>
export default {
    data: function () {
        return {
            ready: false,
            mainVideoPlaying: false
        }
    },
    computed: {
        routes() { return this.$router.getRoutes() }
    },
    methods: {
        vTest(){
            window.open('localexplorer:C:/scripts/totems.vbs', '_self')
        },
        test() {
            this.$socket.send('start');
        },
        goHome() {
            if (!this.$store.getters.videoMode) {
                this.$store.commit('resetAll')
            }
        },
        reset(end) {
            this.$store.commit('resetAll')
            this.$gsap.to('.mainSlider', { autoAlpha: 0, duration: 0.4 })
            this.$gsap.to('.mainHead h1', { y: -100, autoAlpha: 0, stagger: 0.2, ease: 'power2.inOut' })
            this.$gsap.to('.mainHead', { y: -100, autoAlpha: 0, duration: 0.6, delay: 0.5, ease: 'power2.inOut' })
            setTimeout(() => {
                var v = this.$store.getters.videoMode ? false : true
                this.$store.commit('setVideoMode', v)
                if (end) {
                    this.$store.commit('setTime', 10000)
                    this.$socket.send('start');
                }
            }, 1000);
        },
    },
    watch: {
        '$store.getters.time'(val) {
            console.log(val)
            if (val == 1) {
                window.open('localexplorer:C:/scripts/totems.vbs', '_self')
                this.reset()
                setTimeout(() => {
                    this.reset(true)
                }, 5 * 60 * 1000);
            }
        },
    },

    mounted() {

        this.$socket.send('start');
        this.$nuxt.$on('reset', (end) => {
            this.reset(end)
        })
        this.$nextTick(() => {

            this.$socket.onopen = (event) => {
                console.log('connected to server:', event)
                this.$socket.send('start');
            }

            this.$socket.onmessage = (event) => {
                if (!this.$store.getters.videoMode) {
                    this.$store.commit('setTime', Number(event.data))
                }
                if (event.data === 'reset') {
                    //    this.reset()
                    //    console.log('received order to reset')
                }
            };

            this.ready = true
        })

    }
}
</script>

<style lang="scss">
.testTimer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    z-index: 9999;
    background-color: $darkBlue;
}
</style>
