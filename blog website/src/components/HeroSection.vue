<template>
  <section class="relative bg-gray-50 px-8 py-12 overflow-hidden min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto w-full">
      <!-- Header -->
      <div class="flex items-center gap-2 mb-16">
        <!-- Logo -->
        <img src="/images/logo.png" alt="Project Echo Logo" class="w-20 h-20 object-contain" />
        <!-- Text -->
        <div class="flex flex-col leading-none">
          <span class="text-gray-800 font-bold text-lg tracking-tight">PROJECT ECHO</span>
          <span class="text-blue-400 text-xs">Enabling Confidential Health Outreach</span>
        </div>
      </div>

      <!-- Main Content with Ribbon -->
      <div class="relative">
        <!-- Ribbon -->
        <!-- <img 
          src="/images/hero-ribbon.png"
          alt="HIV Awareness Ribbon"
          class="absolute -top-[330px] w-[1200px] h-auto opacity-100 pointer-events-none z-10"
        /> -->

        <!-- Content -->
        <div class="relative z-20 max-w-4xl">
          <h1 class="text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">
            <span class="text-blue-500">PROJECT ECHO: BRIDGING THE<br>GAP IN PHILIPPINE </span>
            <span class="text-red-600">HIV </span>
            <span class="text-blue-500">CARE</span>
          </h1>

          <p class="text-blue-400 text-lg mb-12 max-w-2xl leading-relaxed">
            A secure and anonymous digital registry to combat stigma, track adherence, and reconnect patients to care.
          </p>
        </div>

        <!-- Button below content -->
        <div class="relative z-20 mt-12">
          <button class="bg-red-600 text-white px-10 py-4 rounded-full text-base font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl">
            Learn More About Our Mission
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
