<template>
  <sys-container type="ghost">
    <template slot="header">Header</template>
    <div class="sys-pt sys-pb">
      <el-card shadow="never" class="sys-card" style="width: 400px;">
        <sys-demo-article/>
      </el-card>
    </div>
    <template slot="footer">Footer</template>
  </sys-container>
</template>

<script>
import sysDemoArticle from './components/sys-demo-article'
export default {
  components: {
    'sys-demo-article': sysDemoArticle
  }
}
</script>
