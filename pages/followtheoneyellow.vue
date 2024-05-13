<template>
<div class="home">
    <main class="videoMode" v-if="$store.getters.videoMode">
        <video v-gsap.fromTo="[{autoAlpha: 0}, {autoAlpha: 1, delay: 1, duration: 1}]" class="video" autoplay muted>
            <source :src="require('@/assets/video/holdingVideos/'+videoUrl)" type="video/mp4">
        </video>
    </main>
    <main v-else>
        <span v-show="$store.state.view == 'main'" class="gradientOverlay" style="height: 1200px"></span>
        <heading class="mainHead" :titleA="'FOLLOW'" :titleB="'THE ONE'" :primaryColour="pColor"></heading>
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
            videoUrl: 'TotemD.mp4',
            attractorVideo: 'follow_the_one_yellow.mp4'
        }
    },
}
</script>
