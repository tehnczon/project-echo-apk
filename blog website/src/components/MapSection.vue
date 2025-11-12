<template>
  <section class="relative bg-gray-50 px-8 py-12 overflow-hidden min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-5xl font-black text-red-600 text-center mb-16">
        The Problem
      </h2>

      <!-- Content Grid -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Left Side - Philippines Map -->
        <div className="flex justify-center lg:justify-start">
            <img 
              src="/images/philippines-map.png" 
              alt="Philippines Map showing HIV epidemic"
              className="w-full max-w-md h-auto"
            />
          </div>

        <!-- Right Side - Problem Points -->
        <div class="space-y-8 flex-1">
          <!-- Problem 1 -->
          <div>
            <h3 class="text-2xl font-black text-gray-900 mb-3">
              Why Is <span class="text-red-600">HIV</span> Care Still So Difficult?
            </h3>
            <p class="text-gray-700 text-base leading-relaxed mb-4">
              The Philippines has the fastest-growing HIV epidemic in the Asia-Pacific. We have free treatment and services, but two major gaps are stopping people from getting help:
            </p>
          </div>

          <!-- Problem 2 -->
          <div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">
              The Fear Is Real
            </h4>
            <p class="text-gray-700 text-base leading-relaxed">
              The biggest barrier isn't just the virus <span class="font-bold">it's fear</span>. 
              Fear of being seen at a clinic. Fear of your data leaking. Fear of judgment. This stigma stops 
              people from getting the life-saving support they deserve.
            </p>
          </div>

          <!-- Problem 3 -->
          <div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">
              It's Easy to Get Lost in the Noise
            </h4>
            <p class="text-gray-700 text-base leading-relaxed">
              There's a crisis of <span class="font-bold">misinformation</span>. People, 
              especially the youth, are facing "knowledge gaps" and "dangerous misconceptions" about 
              HIV. Many don't know that treatment (ART) exists or how the virus is actually transmitted. 
              This lack of proper, verified information fuels stigma and risky behavior.
            </p>
          </div>

          <!-- Problem 4 -->
          <div>
            <h4 class="text-xl font-bold text-gray-900 mb-2">
              It's Easy to Fall Through the Cracks
            </h4>
            <p class="text-gray-700 text-base leading-relaxed">
              When someone does start treatment, it's easy to get lost. The hubs current systems can't 
              track when a patient stops taking their medication. They're "Lost to Follow Up" (LTFU), 
              and the hubs have no way to reach out and help.
            </p>
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