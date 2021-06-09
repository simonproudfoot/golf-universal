<template>
<div class="home">
    <main class="videoMode" v-if="$store.getters.videoMode">
        <video @ended="$nuxt.$emit('reset', true)" v-gsap.fromTo="[{autoAlpha: 0}, {autoAlpha: 1, delay: 1, duration: 1}]" class="video" autoplay muted>
            <source :src="require('@/assets/video/holdingVideos/'+videoUrl)" type="video/mp4">
        </video>
    </main>
    <main v-else>
        <span v-show="$store.state.view == 'main'" class="gradientOverlay" style="height: 1200px"></span>
        <heading class="mainHead" :titleA="'FOLLOW'" :titleB="'THE ONE'" :primaryColour="pColor"></heading>
        <!-- <button class="white-text jump" @click="$nuxt.$emit('reset')">
                <h1>Skip tp video</h1>
            </button> -->
        <video ref="attractor" v-if="$store.state.view == 'main'" autoplay muted loop class="video" style="position: absolute; top: 450px;">
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
            pColor: '#ebe64f',
            videoUrl: 'TotemE.mp4',
            attractorVideo: 'Totem-4_attractor.mp4'
        }
    },
}
</script>
