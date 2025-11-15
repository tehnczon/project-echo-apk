<template>
  <section class="relative min-h-screen flex items-center overflow-hidden px-6 py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-40">
      <div class="absolute top-32 left-16 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
      <div class="absolute bottom-32 right-16 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl animate-float-delayed"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-float-slow"></div>
    </div>

    <!-- Decorative Grid Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>

    <div class="max-w-7xl mx-auto relative z-10 w-full">
      <!-- Title Section -->
      <div class="text-center mb-20">
        <div class="inline-block mb-6">
          <span class="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg">
            DOWNLOAD NOW
          </span>
        </div>
        <h2 class="text-7xl font-black text-gray-900 mb-4 tracking-tight">
          Get Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">ECHO</span>
        </h2>
        <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
        <p class="text-gray-600 text-xl max-w-2xl mx-auto">
          Start your journey to better HIV care today. Download the app and take control of your health in complete privacy.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-center mb-12">
        <!-- Left - QR Code Card -->
        <div class="relative group">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div class="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 transform hover:scale-105 transition-all duration-500">
            <div class="absolute top-6 right-6 flex gap-2">
              <div class="w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
            
            <!-- QR Code Container -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-6">
              <img 
                src="/images/Qr.png" 
                alt="Project ECHO Download QR Code"
                class="w-full h-auto rounded-xl"
              />
            </div>

            <!-- Instructions -->
            <div class="text-center">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                Scan to Download
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Use your phone's camera to scan the QR code and get instant access to Project ECHO
              </p>
            </div>
          </div>
        </div>

        <!-- Right - Feature Cards -->
        <div class="space-y-6">
          <!-- Free Card -->
          <div class="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">
                  100% Free Forever
                </h4>
                <p class="text-gray-700">
                  No hidden costs, no subscriptions. Project ECHO is completely free for everyone.
                </p>
              </div>
            </div>
          </div>

          <!-- Anonymous Card -->
          <div class="group relative bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-6 shadow-lg border border-indigo-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">
                  Completely Anonymous
                </h4>
                <p class="text-gray-700">
                  Your privacy is our priority. No names, no personal data required. Ever.
                </p>
              </div>
            </div>
          </div>

          <!-- Secure Card -->
          <div class="group relative bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-2xl p-6 shadow-lg border border-cyan-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">
                  Secure & Encrypted
                </h4>
                <p class="text-gray-700">
                  Bank-level security protects your information. Built on Google Firebase.
                </p>
              </div>
            </div>
          </div>

          <!-- Available Card -->
          <div class="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-6 shadow-lg border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div class="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-900 mb-2">
                  Android Ready
                </h4>
                <p class="text-gray-700">
                  Works seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <!-- Footer Text -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 text-lg">
          Join taking control of their HIV care journey
        </p>
        <p class="text-gray-500 text-sm mt-2">
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BrochureSection',
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