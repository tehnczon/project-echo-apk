<template>
  <div>
    <HeroSection />
    <MapSection />
    <PhoneSection/>
    <ToolUsedSection/>
    <BrochureSection/>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import MapSection from './components/MapSection.vue'  
import PhoneSection from './components/phoneSection.vue'  
import ToolUsedSection from './components/ToolUsedSection.vue'
import BrochureSection from './components/BrochureSection.vue'



export default {
  components: { 
    HeroSection,
    MapSection,
    PhoneSection,
    ToolUsedSection,
    BrochureSection
  }
}
</script>
