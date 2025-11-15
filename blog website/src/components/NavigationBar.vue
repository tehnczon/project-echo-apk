<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <!-- Main Navigation -->
    <nav class="transition-all duration-300" :class="scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-gray-900/80 backdrop-blur-md'">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a href="#hero" class="flex items-center gap-3 group">
            <div class="relative">
              <img src="/images/logo.png" alt="Project ECHO Logo" class="w-12 h-12 object-contain transform group-hover:scale-110 transition-transform duration-300" />
              <div class="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
            <div class="flex flex-col leading-none">
              <span class="font-black text-lg tracking-tight" :class="scrolled ? 'text-gray-900' : 'text-white'">PROJECT ECHO</span>
              <span class="text-xs font-medium" :class="scrolled ? 'text-blue-500' : 'text-blue-300'">Health Outreach</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center gap-1">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href" 
              class="relative px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 group"
              :class="scrolled ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' : 'text-white hover:bg-white/10'"
            >
              {{ item.name }}
              <span class="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>

          <!-- Desktop Actions -->
          <div class="hidden lg:flex items-center gap-3">
            <a href="https://github.com/tehnczon/project-echo-apk/releases/download/v1.0/base.apk" class="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              Download
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 rounded-lg transition-colors duration-300"
            :class="scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div class="px-6 py-6 space-y-2">
            <a 
              v-for="item in navItems" 
              :key="item.name"
              :href="item.href"
              @click="mobileMenuOpen = false"
              class="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-all duration-300 group"
            >
              <span>{{ item.name }}</span>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'NavigationBar',
  setup() {
    const scrolled = ref(false)
    const mobileMenuOpen = ref(false)

    // Nav items now map to your sections
    const navItems = [
      { name: 'Home', href: '#hero' },
      { name: 'Problem', href: '#map' },
      { name: 'Solution', href: '#phone' },
      { name: 'Tech Stack', href: '#tools' },
      { name: 'Feedbacks', href: '#comments' },
      { name: 'Footer', href: '#footer' }
    ]

    const handleScroll = () => {
      scrolled.value = window.scrollY > 20
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      scrolled,
      mobileMenuOpen,
      navItems
    }
  }
}
</script>