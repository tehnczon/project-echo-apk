<template>
  <section class="relative bg-gray-50 px-8 py-12 overflow-hidden min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-4xl font-black text-blue-600 text-center mb-12">
       Get Project ECHO
      </h2>

      <!-- Brochure Images -->
      <div class="space-y-8">
        <!-- Front/Outside of Brochure -->
        <div class="w-full">
          <img 
            src="/images/brochure-outside.png" 
            alt="Project ECHO Brochure - Outside"
            class="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        <!-- Inside of Brochure -->
        <div class="w-full">
          <img 
            src="/images/brochure-inside.png" 
            alt="Project ECHO Brochure - Inside"
            class="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BrochureSection',
}
</script>