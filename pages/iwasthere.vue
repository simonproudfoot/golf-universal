<template>
<div class="home">

    <main class="videoMode" v-if="$store.getters.videoMode">
        <video @ended="$nuxt.$emit('reset', true)" v-gsap.fromTo="[{autoAlpha: 0}, {autoAlpha: 1, delay: 1, duration: 1}]" class="video" autoplay muted>
            <source :src="require('@/assets/video/holdingVideos/'+videoUrl)" type="video/mp4">
        </video>
    </main>
    <main v-else>
        <span v-show="$store.state.view == 'main'" class="gradientOverlay" style="height: 1200px"></span>
        <heading class="mainHead" :titleA="'I WAS'" :titleB="'THERE'" :primaryColour="pColor"></heading>

        <!-- <transition name="fade-out">
            <slider class="mainSlider" v-if="$store.state.view == 'main'" :images="['Iwasthere1.jpg', 'Iwasthere2.jpg', 'Iwasthere3.jpg']" />
        </transition> -->

        <video ref="attractor" v-if="$store.state.view == 'main'"  autoplay muted loop class="video" style="position: absolute; top: 450px;">
            <source :src="require('@/assets/video/'+attractorVideo)" type="video/mp4">
        </video>

        <interactive :primaryColour="pColor" />
        <bottom :primaryColour="pColor" />
    </main>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            pColor: '#77cae7',
            videoUrl: 'TotemF.mp4',
            attractorVideo: 'Totem-1_attractor.mp4'
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.$refs.attractor.muted = true
            setTimeout(() => {
                this.$refs.attractor.play()
            }, 100);
        })

    },
    methods: {
        playme() {

            this.$refs.attractor.play()

        }
    },
}
</script>
