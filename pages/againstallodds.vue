<template>
<!--This is the temporary replacement for against all odds -->
<div class="home">
    <main class="videoMode" v-if="$store.getters.videoMode">
        <video v-gsap.fromTo="[{autoAlpha: 0}, {autoAlpha: 1, delay: 1, duration: 1}]" class="video" autoplay muted>
            <source :src="require('@/assets/video/holdingVideos/'+videoUrl)" type="video/mp4">
        </video>
    </main>
    <main v-else>
        <!-- <span v-show="$store.state.view == 'main'" class="gradientOverlay" style="height: 1200px"></span> -->
     
        <video ref="attractor" v-if="$store.state.view == 'main'" autoplay muted loop class="video" style="position: absolute; top: 0;">
            <source :src="require('@/assets/video/'+attractorVideo)" type="video/mp4">
        </video>
        <interactive :primaryColour="pColor" />
        <!-- <bottom :primaryColour="pColor" /> -->
    </main>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            pColor: '#6dd6c4',
            videoUrl: 'TotemG.mp4',
            attractorVideo: 'against_all_odds.mp4'
        }
    },
}
</script>
