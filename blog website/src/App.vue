<template>
  <div>

    <NavigationBar />

    <div id="hero">
      <HeroSection />
    </div>

    <div id="map">
      <MapSection />
    </div>

    <div id="phone">
      <PhoneSection />
    </div>

    <div id="tools">
      <ToolUsedSection />
    </div>

    <div id="download">
      <DownloadappSection />
    </div>

    <div id="comments">
      <CommentsSection />
    </div>

    <div id="footer">
      <FooterSection />
    </div>

  </div>
</template>


<script>
import NavigationBar from './components/NavigationBar.vue'
import HeroSection from './components/HeroSection.vue'
import MapSection from './components/MapSection.vue'  
import PhoneSection from './components/phoneSection.vue'  
import ToolUsedSection from './components/ToolUsedSection.vue'
import DownloadappSection from './components/DownloadappSection.vue'
import CommentsSection from './components/CommentsSection.vue'

import FooterSection from './components/FooterSection.vue'

export default {
  components: { 
    NavigationBar,
    HeroSection,
    MapSection,
    PhoneSection,
    ToolUsedSection,
    DownloadappSection,
    CommentsSection,
    FooterSection
  }
}
</script>