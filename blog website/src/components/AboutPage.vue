<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 lg:px-8 py-24 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div class="max-w-4xl mx-auto text-center relative z-10">
        <div class="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
          <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
          </svg>
          <span class="text-blue-700 font-semibold text-sm">About Project ECHO</span>
        </div>
        
        <h1 class="text-5xl lg:text-6xl font-black text-gray-900 mb-6">
          Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Story</span>
        </h1>
        
        <p class="text-xl text-gray-600 leading-relaxed">
          A student-led initiative transforming HIV care in the Philippines through innovation, compassion, and technology
        </p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="px-6 lg:px-8 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-black text-gray-900 mb-6">
              Our <span class="text-blue-600">Mission</span>
            </h2>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Project ECHO was born from a simple observation: despite having free HIV treatment and services, too many Filipinos are still falling through the cracks.
              </p>
              <p>
                We're a team of passionate IT students from <span class="font-semibold text-blue-600">Assumption College of Davao</span> who saw a problem and decided to build a solution. Not just any solution—but one that respects privacy, fights stigma, and reconnects people to life-saving care.
              </p>
              <p>
                Our mission is to bridge the gap between patients and healthcare through technology that is <span class="font-semibold">anonymous, secure, and accessible to everyone</span>.
              </p>
            </div>
          </div>
          
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
            <div class="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-4xl font-black text-blue-600 mb-2">100%</div>
                  <div class="text-gray-600 font-semibold">Anonymous</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-black text-purple-600 mb-2">Learn</div>
                  <div class="text-gray-600 font-semibold">Available</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-black text-green-600 mb-2">Free</div>
                  <div class="text-gray-600 font-semibold">Forever</div>
                </div>
                <div class="text-center">
                  <div class="text-4xl font-black text-red-600 mb-2">0</div>
                  <div class="text-gray-600 font-semibold">Stigma</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-gray-50 px-6 lg:px-8 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-black text-gray-900 mb-4">
            Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Values</span>
          </h2>
          <p class="text-gray-600 text-lg">The principles that guide everything we do</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Privacy -->
          <div class="bg-white rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Privacy First</h3>
            <p class="text-gray-600 leading-relaxed">
              Your identity is yours alone. We never ask for names, and all data is encrypted and anonymized.
            </p>
          </div>

          <!-- Compassion -->
          <div class="bg-white rounded-2xl p-8 border-2 border-purple-100 hover:border-purple-400 hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Compassion</h3>
            <p class="text-gray-600 leading-relaxed">
              Every user deserves respect, dignity, and support. We build with empathy at the core.
            </p>
          </div>

          <!-- Innovation -->
          <div class="bg-white rounded-2xl p-8 border-2 border-green-100 hover:border-green-400 hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p class="text-gray-600 leading-relaxed">
              We leverage cutting-edge technology to solve real-world problems in healthcare.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="px-6 lg:px-8 py-20">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-black text-gray-900 mb-4">
            Meet the <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Team</span>
          </h2>
          <p class="text-gray-600 text-lg">Students making a difference</p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <div class="text-center max-w-3xl mx-auto">
            <div class="flex justify-center mb-8">
              <div class="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">IT Students, Change Makers</h3>
            <p class="text-gray-700 text-lg leading-relaxed mb-6">
              We're a dedicated team of Information Technology students from Assumption College of Davao who believe technology can change lives. What started as a class project has evolved into a mission to transform HIV care in the Philippines.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <span class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border border-gray-200">Developers</span>
              <span class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border border-gray-200">Designers</span>
              <span class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border border-gray-200">Researchers</span>
              <span class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700 border border-gray-200">Advocates</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 px-6 lg:px-8 py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl lg:text-5xl font-black text-white mb-6">
          Join Us in Making a Difference
        </h2>
        <p class="text-blue-100 text-lg mb-8 leading-relaxed">
          Whether you're a healthcare provider, student, or someone who wants to help, there's a place for you in our mission.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Partner With Us
          </button>
          <button class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

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
</style>