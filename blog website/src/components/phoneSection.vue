<template>
  <section class="relative bg-gray-50 px-8 py-12 overflow-hidden min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-5xl font-black text-blue-500 text-center mb-16">
        Our Solution
      </h2>

      <!-- Content Grid -->
      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <!-- Left Side - Phone Screenshot -->
        <div class="flex-shrink-0">
          <img 
            src="/images/app-screenshot.png" 
            alt="Project ECHO App Screenshot"
              className="w-full max-w-md h-auto"
          />
        </div>

        <!-- Right Side - Solution Content -->
        <div class="flex-1 space-y-6">
          <!-- Main Heading -->
          <div>
            <h3 class="text-3xl font-black text-blue-600 mb-2">
              MEET PROJECT ECHO
            </h3>
            <p class="text-blue-400 text-lg font-semibold mb-4">
              Your Private Digital Sanctuary
            </p>
            <p class="text-gray-700 text-base italic mb-4">
              We knew we couldn't just build another app. We had to build a sanctuary.
            </p>
            <p class="text-gray-800 text-base leading-relaxed mb-4">
              So, we (a team of IT students from Assumption College of Davao ) partnered with amazing local health hubs to build Project ECHO. It's a free, 100% anonymous, and secure platform that re-imagines what HIV care can feel like.
            </p>
            <p class="text-gray-800 text-base font-semibold mb-6">
              We envisioned a space for everyone:
            </p>
          </div>

          <!-- Bullet Points -->
          <ul class="space-y-4">
            <!-- Point 1 -->
            <li class="text-gray-800 text-base">
              <span class="font-bold">• For People Living with HIV (PLHIV):</span> This is your private partner. A secure tool that empowers you, helps you track your medication, and connects you to support—all without ever asking for your name. You are in complete control.
            </li>

            <!-- Point 2 -->
            <li class="text-gray-800 text-base">
              <span class="font-bold">• For the Curious & Info Seekers:</span> This is your judgment-free zone. Get verified facts, find out where to get tested, and learn about HIV. No prying eyes, no stigma. Just the answers you need, when you need them.
            </li>

            <!-- Point 3 -->
            <li class="text-gray-800 text-base">
              <span class="font-bold">• For our Health Partners & Hubs:</span> This is your new lifeline. It's the smart tool you've needed to finally bridge the gap. ECHO gives you a way to find and re-engage your patients using only their anonymous code, helping you save lives while respecting their privacy
            </li>
          </ul>
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