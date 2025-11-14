<template>
  <div>
    <NavigationBar />
    <HeroSection />
    <MapSection />
    <PhoneSection/>
    <ToolUsedSection/>
    <DownloadappSection/>
    <FooterSection/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
import MapSection from './components/MapSection.vue'  
import PhoneSection from './components/phoneSection.vue'  
import ToolUsedSection from './components/ToolUsedSection.vue'
import DownloadappSection from './components/DownloadappSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  components: { 
    NavigationBar,
    HeroSection,
    MapSection,
    PhoneSection,
    ToolUsedSection,
    DownloadappSection,
    FooterSection
  }
}
</script>