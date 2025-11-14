<template>
  <section class="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 px-6 lg:px-8 py-20 overflow-hidden min-h-screen flex items-center">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <div class="max-w-7xl mx-auto w-full relative z-10">
      <!-- Header -->
      <div class="flex items-center gap-3 mb-20 animate-fade-in-down">
        <img src="/images/logo.png" alt="Project Echo Logo" class="w-16 h-16 lg:w-20 lg:h-20 object-contain drop-shadow-lg" />
        <div class="flex flex-col leading-none">
          <span class="text-gray-900 font-black text-xl tracking-tight">PROJECT ECHO</span>
          <span class="text-blue-500 text-sm font-medium">Enabling Confidential Health Outreach</span>
        </div>
      </div>

      <!-- Main Content -->
      <div class="max-w-5xl animate-fade-in-up">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
          <span class="text-gray-900">PROJECT ECHO:</span><br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">BRIDGING THE GAP</span><br>
          <span class="text-gray-900">IN PHILIPPINE </span>
          <span class="text-red-600">HIV </span>
          <span class="text-gray-900">CARE</span>
        </h1>

        <p class="text-gray-600 text-lg lg:text-xl mb-10 max-w-3xl leading-relaxed font-medium">
          A secure and anonymous digital registry to combat stigma, track adherence, and reconnect patients to care.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <button class="group bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full text-base font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Learn More About Our Mission
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </button>
          <button class="bg-white text-gray-900 px-8 py-4 rounded-full text-base font-bold hover:shadow-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-300">
            Download App
          </button>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 animate-fade-in">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all">
          <div class="text-4xl font-black text-blue-600 mb-2">100%</div>
          <div class="text-gray-700 font-semibold">Anonymous & Secure</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all">
          <div class="text-4xl font-black text-blue-600 mb-2">learn</div>
          <div class="text-gray-700 font-semibold">Access</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all">
          <div class="text-4xl font-black text-blue-600 mb-2">Free</div>
          <div class="text-gray-700 font-semibold">For Everyone</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(50px, 50px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.6s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out 0.2s both;
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out 0.4s both;
}
</style>