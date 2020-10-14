<template>
  <div class="sys-container-full-bs">
    <div v-if="$slots.header" class="sys-container-full-bs__header" ref="header">
      <slot name="header"/>
    </div>
    <div class="sys-container-full-bs__body" ref="wrapper">
      <div class="sys-container-full-bs__body-wrapper-inner">
        <slot/>
      </div>
    </div>
    <div v-if="$slots.footer" class="sys-container-full-bs__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import bs from './mixins/bs'
export default {
  name: 'container-card-bs',
  mixins: [
    bs
  ]
}
</script>
