<template>
  <i style="color:#fff;" class="fa fa-lg" :class="`fa-${name} `" aria-hidden="true"></i>
</template>

<script>
import './font-awesome-4.7.0/css/font-awesome.min.css'
export default {
  name: 'sys-icon',
  props: {
    name: {
      type: String,
      required: false,
      default: 'font-awesome'
    }
  }
}
</script>
