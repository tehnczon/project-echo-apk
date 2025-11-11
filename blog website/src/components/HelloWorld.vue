<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-white">
      <div class="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-70"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="flex items-center justify-between flex-wrap gap-8">
          <div class="flex-1 min-w-[300px]">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <span class="text-white font-bold text-xl">P</span>
              </div>
              <span class="text-gray-600 font-semibold">PROJECT ECHO</span>
            </div>
            
            <h1 class="text-5xl font-bold mb-6">
              <span class="text-blue-600">PROJECT ECHO: BRIDGING THE</span>
              <br />
              <span class="text-blue-600">GAP IN PHILIPPINE </span>
              <span class="text-red-600">HIV CARE</span>
            </h1>
            
            <p class="text-xl text-gray-600 mb-8 max-w-2xl">
              A secure and anonymous digital registry to combat stigma, track adherence, and reconnect patients to care.
            </p>
            
            <button class="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
              Learn More About Our Mission
            </button>
          </div>
          
          <div class="flex-1 flex justify-end min-w-[300px]">
            <!-- Replace this with your actual image -->
            <img src="../assets/images/hero-ribbon.png" alt="HIV Awareness Ribbon" class="w-64 h-64 object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- The Problem Section -->
    <section class="py-20 bg-gradient-to-b from-white to-red-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-start gap-12 flex-wrap">
          <div class="flex-1 min-w-[300px]">
            <!-- Replace this with your Philippines map image -->
            <img src="../assets/images/philippines-map.png" alt="Philippines Map" class="w-full max-w-md mx-auto" />
          </div>
          
          <div class="flex-1 min-w-[300px]">
            <h2 class="text-5xl font-bold text-red-600 mb-8">The Problem</h2>
            
            <div class="space-y-8">
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  Why Is <span class="text-red-600">HIV</span> Care Still So Difficult?
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  The Philippines has the fastest-growing HIV epidemic in the Asia-Pacific. We have free treatment and services, but two major problems are stopping people from getting help.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-600">
                <h4 class="text-xl font-bold text-gray-900 mb-3">The Fear is Real</h4>
                <p class="text-gray-700">
                  The biggest barrier? It's not just the virus it's <strong>fear</strong>. Fear of being seen at a clinic. Fear of your data leaking. Fear of judgment. This stigma stops people from getting the life-saving support they deserve.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3">It's Easy to Get Lost in the Noise</h4>
                <p class="text-gray-700">
                  There's a crisis of <strong>misinformation</strong>. People, especially the youth, are facing "knowledge gaps" and "dangerous misconceptions" about HIV. Many don't know that treatment (ART) exists or how the virus is actually transmitted. This lack of proper, verified information fuels stigma and risky behavior.
                </p>
              </div>
              
              <div class="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-500">
                <h4 class="text-xl font-bold text-gray-900 mb-3">It's Easy to Fall Through the Cracks</h4>
                <p class="text-gray-700">
                  When someone does start treatment, it's easy to get lost. The hubs current systems can't track when a patient stops taking their medication. They're "Lost to Follow Up" (LTFU), and the hubs have no way to reach out and help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section class="py-20 bg-gradient-to-b from-red-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl font-bold text-blue-600 mb-12 text-center">Our Solution</h2>
        
        <div class="flex items-start gap-12 mb-12 flex-wrap">
          <div class="flex-1 flex justify-center min-w-[300px]">
            <!-- Replace this with your app screenshot -->
            <img src="../assets/images/app-screenshot.png" alt="Project ECHO App Interface" class="w-80 rounded-3xl shadow-2xl" />
          </div>
          
          <div class="flex-1 min-w-[300px]">
            <div class="bg-white p-8 rounded-2xl shadow-lg mb-6">
              <h3 class="text-3xl font-bold text-blue-600 mb-4">MEET PROJECT ECHO</h3>
              <p class="text-xl text-gray-600 mb-6 italic">Your Private Digital Sanctuary</p>
              
              <p class="text-gray-700 mb-6">
                We knew we couldn't just build another app. We had to build a <strong>sanctuary</strong>.
              </p>
              
              <p class="text-gray-700 mb-8">
                So, we (a team of IT students from Assumption College of Davao) partnered with amazing local health hubs to build Project ECHO. It's a free, 100% anonymous, and secure platform that re-imagines what HIV care can feel like.
              </p>
              
              <h4 class="text-xl font-bold text-gray-900 mb-3">We envisioned a space for everyone:</h4>
            </div>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-2xl shadow-lg">
                <h5 class="text-xl font-bold mb-3">• For People Living with HIV (PLHIV):</h5>
                <p>
                  This is your private partner. A secure tool that empowers you, helps you track your medication, and connects you to support—all without asking for your name. You are in complete control.
                </p>
              </div>
              
              <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-lg">
                <h5 class="text-xl font-bold mb-3">• For the Curious & Info Seekers:</h5>
                <p>
                  This is your judgment-free zone. Get verified facts, find out where to get tested, and learn about HIV. No stigma. Just the answers you need, when you need them.
                </p>
              </div>
              
              <div class="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-2xl shadow-lg">
                <h5 class="text-xl font-bold mb-3">• For our Health Partners & Hubs:</h5>
                <p>
                  This is your new lifeline. It's the smart tool you've needed to finally bridge the gap. ECHO gives you a way to find and re-engage your patients using only their anonymous code, helping you save lives while respecting their privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section class="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl font-bold text-blue-600 mb-8">The Technology Behind Echo</h2>
        
        <p class="text-xl text-gray-700 mb-12 max-w-4xl">
          To build a tool that is secure, reliable, and accessible, we used a stack of modern, powerful technologies. Our approach was guided by an Agile methodology, allowing us to build and test features quickly with a focus on user needs.
        </p>
        
        <p class="text-lg text-gray-600 mb-12">
          Here are the core components that power <em>Project Echo</em>:
        </p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
            <!-- Replace with Flutter logo image -->
            <img src="../assets/images/flutter-logo.png" alt="Flutter" class="h-12 mb-4" />
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Flutter</h3>
            <p class="text-sm text-gray-600 font-semibold mb-4">Mobile App Framework</p>
            <p class="text-gray-700">
              Flutter We chose Google's Flutter framework to build the mobile application. This allows us to maintain a single codebase that compiles natively for both Android and iOS. This ensures a consistent, high-performance experience for all users, regardless of their device.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
            <!-- Replace with Dart logo image -->
            <img src="../assets/images/dart-logo.png" alt="Dart" class="h-12 mb-4" />
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Dart</h3>
            <p class="text-sm text-gray-600 font-semibold mb-4">Programming Language</p>
            <p class="text-gray-700">
              Dart Flutter uses the Dart language, which is optimized for building fast, responsive user interfaces. This speed is critical for creating a smooth and non-frustrating experience for users.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500">
            <!-- Replace with Firebase logo image -->
            <img src="../assets/images/firebase-logo.png" alt="Firebase" class="h-12 mb-4" />
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Firebase</h3>
            <p class="text-sm text-gray-600 font-semibold mb-4">Backend & Database</p>
            <p class="text-gray-700">
              Google Firebase Security and privacy are not optional. We built our entire backend on Google's Firebase platform, which provides a robust, scalable, and secure infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="py-20 bg-gradient-to-b from-white to-blue-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-12 flex-wrap">
          <div class="flex-1 min-w-[300px]">
            <h2 class="text-5xl font-bold text-blue-600 mb-6">Get Project Echo!</h2>
            
            <p class="text-xl text-gray-700 mb-8 max-w-xl">
              Join our mission to bridge the gap in Philippine HIV care. By downloading Project Echo, you are taking a step towards ending stigma and empowering individuals with the information and support they need.
            </p>
            
            <button @click="handleDownload" class="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
              Download Now
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div class="flex-1 flex justify-center min-w-[300px]">
            <!-- Replace this with your QR code and phone mockup image -->
            <img src="../assets/images/qr-mockup.png" alt="Download Project ECHO" class="w-80 drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap gap-8">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-3">
              <span class="text-white font-bold text-xl">P</span>
            </div>
            <div>
              <div class="font-bold text-lg">PROJECT ECHO</div>
              <div class="text-gray-400 text-sm">Bridging the Gap in Philippine HIV Care</div>
            </div>
          </div>
          
          <div class="text-right">
            <p class="text-gray-400">© 2024 Project Echo. All rights reserved.</p>
            <p class="text-gray-500 text-sm">Built with ❤️ by IT Students from Assumption College of Davao</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const handleDownload = () => {
  // Add your download link here
  window.open('YOUR_DOWNLOAD_LINK_HERE', '_blank');
};
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>