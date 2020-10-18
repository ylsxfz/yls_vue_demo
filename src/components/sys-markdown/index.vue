<template>
  <div class="component-markdown">
    <div class="spin-group" v-if="!markedHTML">
      <div>正在加载</div>
    </div>
    <div class="markdown-body" v-html="markedHTML"></div>
  </div>
</template>

<script>
import marked from 'marked'
import highlight from 'highlight.js'
import 'github-markdown-css'
export default {
  name: 'sys-markdown',
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
    source: {
      type: String,
      required: false,
      default: ''
    },
    highlight: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data () {
    return {
      getReadmePublicPath: '',
      markedHTML: ''
    }
  },
  mounted () {
    if (this.url) {
      this.initWithUrl()
    } else if (this.source) {
      this.initWithMd()
    } else {
      //console.log('not mounted init')
    }
  },
  methods: {
    // 使用 md 初始化
    initWithMd () {
      this.markedHTML = this.marked(this.source)
    },
    // 使用 url 初始化
    async initWithUrl () {
      this.markedHTML = await this.getReadme(this.url)
    },
    // 从 url 加载原始数据
    async getReadme (url) {
      const data = await this.$api.FILE_GET(url)
      return this.marked(data)
    },
    marked (data) {
      const renderer = new marked.Renderer()
      return marked(data, {
        ...this.highlight ? { highlight: (code) => highlight.highlightAuto(code).value } : {},
        renderer
      })
    }
  }
}
</script>

<style lang="scss">
.component-markdown {
  .spin-group {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // color: $color-primary;
    color: red;
  }
}
</style>
