<template>
  <div class="tab-container">
    <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert :closable="false" style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success" />
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key" :count="item.count">
        <template #label>
          <span class="custom-tabs-label">
            <span>{{ item.label }}</span>
            <span :class="`label__count ${item.key === 'Actions' && 'label__count--prm'}`">{{ item.count }}</span>
          </span>
        </template>
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabPane from './components/TabPane'

export default {
  name: 'Tab',
  components: { TabPane },
  data() {
    return {
      tabMapOptions: [
        { label: 'Все', key: 'All', count: 43 },
        { label: 'Требуют действий', key: 'Actions', count: 5 },
        { label: 'Ожидают поставки', key: 'Waiting', count: 10 },
        { label: 'Готовы к отгрузкe', key: 'Ready', count: 28 }
      ],
      activeName: 'All',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
  .label__count {
    background-color: grey;
    color: #fff;
    margin-left: 10px;
    padding: 2px 10px;
  }

   .label__count--prm {
    background-color: red;
   }
</style>
