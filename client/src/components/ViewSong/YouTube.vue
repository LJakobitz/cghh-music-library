<template>
  <panel title="YouTube Video">
    <iframe
      width="100%"
      height="400"
      :src="'https://www.youtube-nocookie.com/embed/' + youtubeID"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'youtubeID'
  ],
  components: {
    Panel
  }
}
</script>

<style lang="css" scoped>
</style>
