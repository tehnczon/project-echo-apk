<template>
  <section class="relative min-h-screen flex items-center overflow-hidden px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div class="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
      <div class="absolute bottom-20 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
    </div>

    <!-- Decorative Grid Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>

    <div class="max-w-7xl mx-auto relative z-10 w-full">
      <!-- Title with Modern Badge -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <span class="px-6 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold rounded-full shadow-lg">
            THE CHALLENGE
          </span>
        </div>
        <h2 class="text-7xl font-black text-gray-900 mb-4 tracking-tight">
          The <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Problem</span>
        </h2>
        <div class="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Left - Map with Modern Card -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-200/50">
            <div class="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
            <div class="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full"></div>
            <img 
              src="/images/philippines-map.png" 
              alt="Philippines Map showing HIV epidemic"
              class="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <!-- Right - Problem Cards -->
        <div class="space-y-6">
          <!-- Main Problem -->
          <div class="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 class="text-3xl font-black text-gray-900 mb-4">
              Why Is <span class="text-red-600">HIV</span> Care Still So Difficult?
            </h3>
            <p class="text-gray-700 text-lg leading-relaxed">
              The Philippines has the fastest-growing HIV epidemic in the Asia-Pacific. We have free treatment and services, but three major gaps are stopping people from getting help:
            </p>
          </div>

          <!-- Fear Card -->
          <div class="group relative bg-gradient-to-br from-red-50 to-red-100/50 rounded-3xl p-8 shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-gray-900 mb-3">
                  The Fear Is Real
                </h4>
                <p class="text-gray-700 leading-relaxed">
                  The biggest barrier isn't just the virus — <span class="font-bold text-red-600">it's fear</span>. 
                  Fear of being seen at a clinic. Fear of your data leaking. Fear of judgment. This stigma stops 
                  people from getting the life-saving support they deserve.
                </p>
              </div>
            </div>
          </div>

          <!-- Misinformation Card -->
          <div class="group relative bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-3xl p-8 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-gray-900 mb-3">
                  Lost in the Noise
                </h4>
                <p class="text-gray-700 leading-relaxed">
                  There's a crisis of <span class="font-bold text-orange-600">misinformation</span>. People, 
                  especially the youth, face dangerous misconceptions about 
                  HIV. Many don't know that treatment exists or how the virus is transmitted. 
                  This fuels stigma and risky behavior.
                </p>
              </div>
            </div>
          </div>

          <!-- Lost Patients Card -->
          <div class="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-3xl p-8 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-2xl font-bold text-gray-900 mb-3">
                  Falling Through the Cracks
                </h4>
                <p class="text-gray-700 leading-relaxed">
                  When someone starts treatment, it's easy to get lost. Current systems can't 
                  track when a patient stops medication. They're "Lost to Follow Up" (LTFU), 
                  and hubs have no way to reach out and help.
                </p>
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
  name: 'ProblemSection',
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