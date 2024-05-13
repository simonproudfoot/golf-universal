<template>
<div id="app" @contextmenu.prevent="">
    <div id="app" :class="!devMode ? 'app-live' : null">
        <Nuxt />
        <v-idle v-if="!$store.getters.videoMode" style="display: none" :duration="100" :loop="true" @idle="goHome" />
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            devMode: true, // use true on local computer
            ready: false,
            mainVideoPlaying: false,
        };
    },
    computed: {
        routes() {
            return this.$router.getRoutes();
        },
    },
    methods: {
        goHome() {
            if (!this.$store.getters.videoMode) {
                this.$store.commit("resetAll");
            }
        },
        reset(end) {
            this.$store.commit("resetAll");
            this.$gsap.to(".mainSlider", { autoAlpha: 0, duration: 0.4 });
            this.$gsap.to(".mainHead h1", {
                y: -100,
                autoAlpha: 0,
                stagger: 0.2,
                ease: "power2.inOut",
            });
            this.$gsap.to(".mainHead", {
                y: -100,
                autoAlpha: 0,
                duration: 0.6,
                delay: 0.5,
                ease: "power2.inOut",
            });
            setTimeout(() => {
                if (end) {
                    this.$store.commit("setVideoMode", false);
                    this.$store.commit("setTime", null);
                    this.$socket.send("start");
                } else {
                    this.$store.commit("setVideoMode", true);
                }
            }, 1000);
        },
    },
    watch: {
        "$store.getters.time"(val) {
            var videoTime = 5;
            if (val === 0) {
                this.reset();
                setTimeout(() => {
                    this.reset(true);
                    //  }, 27000)
                }, videoTime * 60 * 1000);
            }
        },
    },
    mounted() {

        if (!this.devMode) {
            document.body.style.overflow = 'hidden'
            this.$socket.send("start");
            this.$nextTick(() => {
                this.$socket.onopen = (event) => {
                    console.log("connected to server:", event);
                    this.$socket.send("start");
                };
                this.$socket.onmessage = (event) => {
                    if (!this.$store.getters.videoMode) {
                        this.$store.commit("setTime", Number(event.data));
                    }

                    if (event.data === "reset") {
                        this.reset();
                    }
                };

                this.ready = true;
            });
        } else {
            this.ready = true
        }
    },
};
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
