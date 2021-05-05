<template>
<div id="app">
    <div @click="test" class="text-white testTimer"><small> {{$store.state.time}} seconds until next show</small>
    </div>
    <Nuxt />
</div>
</template>

<script>
export default {
    data: function () {
        return {
            ready: false
        }
    },
    computed: {
        routes() { return this.$router.getRoutes() }
    },
    watch: {
        '$store.state.time'(val) {

            if (val <= 0) {
                this.reset()
            }
        }
    },
    methods: {
        test() {
            //   this.$socket.send('resetTimer');
            this.$socket.send('start');
        },
        goHome() {
            this.$store.commit('resetAll')
            this.$gsap.to('.mainSlider', { autoAlpha: 0, duration: 0.4 })
            this.$gsap.to('.mainHead h1', { y: -100, autoAlpha: 0, stagger: 0.2, ease: 'power2.inOut' })
            this.$gsap.to('.mainHead', { y: -100, autoAlpha: 0, duration: 0.6, delay: 0.5, ease: 'power2.inOut' })
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
    mounted() {
        console.log('Its all working, but if the timers going too fast it seems to miss the video trigger')
        this.$nuxt.$on('reset', (end) => {
            this.reset(end)
        })
        if (this.ready === false) {
            this.$socket.onopen = (event) => {
                console.log('connected to server:', event)
                this.$socket.send('start');
            }

            this.$socket.onmessage = (event) => {
                this.$store.commit('setTime', Number(event.data))
                // end

                if (Number(event.data) <= 0) {
                    this.reset()
                }
            };
            this.ready = true
        }

    },

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
