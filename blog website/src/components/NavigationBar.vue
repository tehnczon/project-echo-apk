<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <!-- Top Banner (Optional) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <div v-if="showBanner" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-6">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-3 flex-1">
            <span class="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <p class="text-sm font-medium">
              🎉 Project ECHO is now available! Download today for free, anonymous HIV care support.
            </p>
          </div>
          <button @click="showBanner = false" class="flex-shrink-0 p-1 hover:bg-white/10 rounded-lg transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <!-- Main Navigation -->
    <nav class="transition-all duration-300" :class="scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a href="#" class="flex items-center gap-3 group">
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
            <!-- Search Button -->
            <button 
              @click="showSearch = !showSearch"
              class="p-2.5 rounded-lg transition-all duration-300"
              :class="scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </button>

            <!-- Language Selector -->
            <select 
              class="px-3 py-2 rounded-lg font-medium text-sm border-0 focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
              :class="scrolled ? 'bg-gray-100 text-gray-700' : 'bg-white/10 text-white'"
            >
              <option value="en">EN</option>
              <option value="fil">FIL</option>
            </select>

            <!-- Login Button -->
            <button class="px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300" :class="scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'">
              Login
            </button>

            <!-- Download Button -->
            <button class="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
              Download
            </button>
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

        <!-- Search Bar (Desktop) -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="showSearch" class="hidden lg:block pb-6">
            <div class="relative max-w-2xl mx-auto">
              <input 
                type="text" 
                placeholder="Search for HIV information, testing centers, resources..."
                class="w-full px-6 py-4 pl-12 bg-white rounded-2xl shadow-xl border-2 border-gray-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                v-model="searchQuery"
              />
              <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </transition>
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
            <!-- Search (Mobile) -->
            <div class="mb-4">
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Search..."
                  class="w-full px-4 py-3 pl-11 bg-gray-50 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  v-model="searchQuery"
                />
                <svg class="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
            </div>

            <!-- Navigation Links -->
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
            
            <div class="pt-4 space-y-3 border-t border-gray-100 mt-4">
              <!-- Language Selector Mobile -->
              <select class="w-full px-4 py-3 bg-gray-50 rounded-xl font-medium text-gray-700 border border-gray-200 focus:ring-2 focus:ring-blue-500 cursor-pointer">
                <option value="en">English</option>
                <option value="fil">Filipino</option>
              </select>

              <button class="w-full px-6 py-3 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 border-2 border-gray-200">
                Login
              </button>
              <button class="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
                Download App
              </button>
            </div>
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
    const showBanner = ref(true)
    const showSearch = ref(false)
    const searchQuery = ref('')

    const navItems = [
      { name: 'Home', href: '#' },
      { name: 'About', href: '#about' },
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Resources', href: '#resources' },
      { name: 'Contact', href: '#contact' }
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
      showBanner,
      showSearch,
      searchQuery,
      navItems
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Custom select styling */
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1.25em;
  padding-right: 2.5rem;
}
</style>