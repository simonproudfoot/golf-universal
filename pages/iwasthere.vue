<template>
<div class="home">
    <main class="videoMode" v-if="$store.getters.videoMode">
        <video @ended="$nuxt.$emit('reset', true)" v-gsap.fromTo="[{autoAlpha: 0}, {autoAlpha: 1, delay: 1, duration: 1}]" class="video" autoplay muted>
            <source :src="require('@/assets/video/'+videoUrl)" type="video/mp4">
        </video>
    </main>
    <main v-else>
        <span v-show="$store.state.view == 'main'" class="gradientOverlay" style="height: 1200px"></span>
        <heading class="mainHead" :titleA="'I WAS'" :titleB="'THERE'" :primaryColour="pColor"></heading>
       
        <!-- <transition name="fade-out">
            <slider class="mainSlider" v-if="$store.state.view == 'main'" :images="['Iwasthere1.jpg', 'Iwasthere2.jpg', 'Iwasthere3.jpg']" />
        </transition> -->

        <video v-if="$store.state.view == 'main'" class="video" loop autoplay muted style="position: absolute; top: 450px;">
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
            videoUrl: 'demo.mp4',
            attractorVideo: 'iwasthere_attractor.mp4'
        }
    },
}
</script>

