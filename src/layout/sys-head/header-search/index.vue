<template>
  <li @click="handleClick">
    <sys-icon name="search" style="font-size: 18px;"/>
  </li>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
