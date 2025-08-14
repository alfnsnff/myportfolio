import { defineNuxtPlugin } from 'nuxt/app'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    gsap.config({ force3D: true, nullTargetWarn: false })
    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load'
    })
  }
})