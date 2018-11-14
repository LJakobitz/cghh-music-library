<template>
  <panel title="Lyrics">
    <textarea
      readonly
      multi-line
      v-model="song.lyrics">
    </textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
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
