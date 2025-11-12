<template>
  <section class="relative bg-gray-50 px-8 py-12 overflow-hidden min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <h2 class="text-5xl font-black text-blue-600 mb-8">
        The Technology Behind Echo
      </h2>

      <!-- Description -->
      <p class="text-gray-800 text-base leading-relaxed mb-2 max-w-4xl">
        To build a tool that is secure, reliable, and accessible, we used a stack of modern, powerful technologies. Our approach was guided by an Agile methodology, allowing us to build and test features quickly with a focus on user needs.
      </p>

      <p class="text-gray-800 text-base mb-8">
        Here are the core components that power <span class="italic">Project Echo</span>:
      </p>

      <!-- Technology Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <!-- Flutter Card -->
        <div class="bg-white border-4 border-gray-900 rounded-3xl p-8">
          <img 
            src="/images/flutter-logo.png" 
            alt="Flutter Logo"
              className="w-full max-w-md h-auto"
          />
          <h3 class="text-2xl font-bold text-gray-800 mb-4">
            Mobile App Framework
          </h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Flutter We chose Google's Flutter framework to build the mobile application. This allows us to maintain a single codebase that compiles natively for both Android and iOS. This ensures a consistent, high-performance experience for all users, regardless of their device.
          </p>
        </div>

        <!-- Dart Card -->
        <div class="bg-white border-4 border-gray-900 rounded-3xl p-8">
          <img 
            src="/images/dart-logo.png" 
            alt="Dart Logo"
              className="w-full max-w-md h-auto"
          />
          <h3 class="text-2xl font-bold text-gray-800 mb-4">
            Programming Language
          </h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Dart Flutter uses the Dart language, which is optimized for building fast, responsive user interfaces. This speed is critical for creating a smooth and non-frustrating experience for users.
          </p>
        </div>

        <!-- Firebase Card -->
        <div class="bg-white border-4 border-gray-900 rounded-3xl p-8">
          <img 
            src="/images/firebase-logo.png" 
            alt="Firebase Logo"
              className="w-full max-w-md h-auto"
          />
          <h3 class="text-2xl font-bold text-gray-800 mb-4">
            Backend & Database
          </h3>
          <p class="text-gray-700 text-sm leading-relaxed">
            Google Firebase Security and privacy are not optional. We built our entire backend on Google's Firebase platform, which provides a robust, scalable, and secure infrastructure.
          </p>
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