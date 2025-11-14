<template>
  <section class="relative min-h-screen flex items-center overflow-hidden px-6 py-20 bg-gradient-to-br from-white via-blue-50 to-white">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
    </div>

    <!-- Decorative Grid Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>

    <div class="max-w-7xl mx-auto relative z-10 w-full">
      <!-- Title with Modern Badge -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <span class="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
            INNOVATION
          </span>
        </div>
        <h2 class="text-7xl font-black text-gray-900 mb-4 tracking-tight">
          Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Solution</span>
        </h2>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left - Phone Screenshot with Modern Card -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200/50">
            <div class="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
            <div class="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"></div>
            <img 
              src="/images/app-screenshot.png" 
              alt="Project ECHO App Screenshot"
              class="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <!-- Right - Solution Content -->
        <div class="space-y-6">
          <!-- Header Card -->
          <div class="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white transform hover:-translate-y-1 transition-all duration-300">
            <h3 class="text-4xl font-black mb-2">
              MEET PROJECT ECHO
            </h3>
            <p class="text-blue-100 text-xl font-semibold mb-4">
              Your Private Digital Sanctuary
            </p>
            <div class="h-1 w-16 bg-white/50 rounded-full mb-4"></div>
            <p class="text-white/90 italic mb-4 text-lg">
              We knew we couldn't just build another app. We had to build a sanctuary.
            </p>
          </div>

          <!-- Description Card -->
          <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <p class="text-gray-700 text-lg leading-relaxed mb-4">
              We (a team of IT students from Assumption College of Davao) partnered with local health hubs to build Project ECHO. It's a <span class="font-bold text-blue-600">free, 100% anonymous, and secure</span> platform that re-imagines what HIV care can feel like.
            </p>
            <div class="inline-block px-4 py-2 bg-blue-50 rounded-xl">
              <p class="text-blue-900 font-bold">
                A space for everyone:
              </p>
            </div>
          </div>

          <!-- Feature Cards -->
          <div class="space-y-4">
            <!-- PLHIV Card -->
            <div class="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="relative flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 leading-relaxed">
                    <span class="font-bold text-blue-600">For People Living with HIV (PLHIV):</span> This is your private partner. A secure tool that empowers you, helps you track your medication, and connects you to support—all without ever asking for your name. You are in complete control.
                  </p>
                </div>
              </div>
            </div>

            <!-- Info Seekers Card -->
            <div class="group relative bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 shadow-lg border border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="relative flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 leading-relaxed">
                    <span class="font-bold text-indigo-600">For the Curious & Info Seekers:</span> This is your judgment-free zone. Get verified facts, find out where to get tested, and learn about HIV. No prying eyes, no stigma. Just the answers you need, when you need them.
                  </p>
                </div>
              </div>
            </div>

            <!-- Health Partners Card -->
            <div class="group relative bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-2xl p-6 shadow-lg border border-cyan-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div class="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="relative flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-gray-800 leading-relaxed">
                    <span class="font-bold text-cyan-600">For our Health Partners & Hubs:</span> This is your new lifeline. The smart tool you've needed to finally bridge the gap. ECHO gives you a way to find and re-engage your patients using only their anonymous code, helping you save lives while respecting their privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolutionSection',
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