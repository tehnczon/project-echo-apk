<template>
  <section class="relative min-h-screen flex items-center overflow-hidden px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-20 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div class="absolute bottom-40 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 right-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
    </div>

    <!-- Decorative Grid Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>

    <div class="max-w-7xl mx-auto relative z-10 w-full">
      <!-- Title with Modern Badge -->
      <div class="mb-16">
        <div class="inline-block mb-6">
          <span class="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
            TECHNOLOGY STACK
          </span>
        </div>
        <h2 class="text-6xl font-black text-gray-900 mb-6 tracking-tight">
          The Technology Behind <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Echo</span>
        </h2>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8"></div>

        <!-- Description Cards -->
        <div class="grid md:grid-cols-2 gap-6 max-w-5xl">
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <p class="text-gray-700 leading-relaxed">
              To build a tool that is <span class="font-bold text-blue-600">secure, reliable, and accessible</span>, we used a stack of modern, powerful technologies.
            </p>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100">
            <p class="text-gray-700 leading-relaxed">
              Our approach was guided by an <span class="font-bold text-indigo-600">Agile methodology</span>, allowing us to build and test features quickly with a focus on user needs.
            </p>
          </div>
        </div>
      </div>

      <!-- Technology Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Flutter Card -->
        <div class="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
          <div class="relative">
            <!-- Icon Container -->
            <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            
            <div class="mb-4">
              <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full mb-3">
                CROSS-PLATFORM
              </span>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Mobile App Framework
              </h3>
              <div class="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4"></div>
            </div>
            
            <p class="text-gray-600 leading-relaxed mb-4">
              We chose Google's <span class="font-semibold text-blue-600">Flutter</span> framework to build the mobile application. This allows us to maintain a single codebase that compiles natively for both Android and iOS.
            </p>
            
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>High Performance UI</span>
            </div>
          </div>
        </div>

        <!-- Dart Card -->
        <div class="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
          <div class="relative">
            <!-- Icon Container -->
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            
            <div class="mb-4">
              <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full mb-3">
                OPTIMIZED
              </span>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Programming Language
              </h3>
              <div class="h-1 w-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-4"></div>
            </div>
            
            <p class="text-gray-600 leading-relaxed mb-4">
              Flutter uses the <span class="font-semibold text-indigo-600">Dart</span> language, which is optimized for building fast, responsive user interfaces. This speed is critical for creating a smooth and non-frustrating experience for users.
            </p>
            
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span>Fast & Responsive</span>
            </div>
          </div>
        </div>

        <!-- Firebase Card -->
        <div class="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
          <div class="relative">
            <!-- Icon Container -->
            <div class="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            
            <div class="mb-4">
              <span class="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full mb-3">
                SECURE & SCALABLE
              </span>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                Backend & Database
              </h3>
              <div class="h-1 w-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full mb-4"></div>
            </div>
            
            <p class="text-gray-600 leading-relaxed mb-4">
              Security and privacy are not optional. We built our entire backend on Google's <span class="font-semibold text-cyan-600">Firebase</span> platform, which provides a robust, scalable, and secure infrastructure.
            </p>
            
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Enterprise-Grade Security</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Feature Banner -->
      <div class="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white">
        <div class="flex items-center justify-between flex-wrap gap-6">
          <div>
            <h3 class="text-2xl font-bold mb-2">Built with Modern Standards</h3>
            <p class="text-blue-100">Ensuring the highest quality and performance for our users</p>
          </div>
          <div class="flex gap-4">
           
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnologySection',
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-30px) translateX(-10px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(15px);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 10s ease-in-out infinite;
  animation-delay: 1s;
}

.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
  animation-delay: 2s;
}
</style>