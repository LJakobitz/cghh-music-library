<template>
  <panel title="Tab">
    <textarea
      readonly
      multi-line
      v-model="song.tab">
    </textarea>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>

<style lang="css" scoped>
  textarea{
    width: 75%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 40px;
  }
</style>
