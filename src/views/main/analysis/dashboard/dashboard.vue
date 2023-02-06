<template>
  <div class="dashboard">
    <!-- 1.顶部数据的展示 -->
    <el-row :gutter="10">
      <template v-for="item in analysisStore.amountData" :key="item.amount">
        <el-col :span="6">
          <CardCount v-bind="item"></CardCount>
        </el-col>
      </template>
    </el-row>
    <!-- 2.中间的图标 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <CardChart header="分类商品数量(饼图)">
          <pie-echart :pie-data="showGoodsCategoryCount" />
        </CardChart>
      </el-col>
      <el-col :span="8">
        <CardChart header="不同城市商品销量">
          <map-echart :map-data="showGoodsAddressSale" />
        </CardChart>
      </el-col>
      <el-col :span="8">
        <CardChart header="分类商品数量(玫瑰图)">
          <rose-echart :rose-data="showGoodsCategoryCount" />
        </CardChart>
      </el-col>
    </el-row>
    <!-- 3.底部的图标 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <CardChart header="分类商品的销量">
          <line-echart
            :labels="showGoodsCategorySale.labels"
            :values="showGoodsCategorySale.values"
          />
        </CardChart>
      </el-col>
      <el-col :span="12">
        <CardChart header="分类商品的收藏">
          <bar-echart
            :labels="showGoodsCategoryFavor.labels"
            :values="showGoodsCategoryFavor.values"
          />
        </CardChart>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts" name="dashboard">
import useAnalysisStore from '@/stores/main/analysis/dashboard'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const analysisStore = useAnalysisStore()
analysisStore.fetchDashboardDataAction()

const {
  goodsCategoryCount,
  goodsCategorySale,
  goodsCategoryFavor,
  goodsAddressSale
} = storeToRefs(analysisStore)
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsCount)
  return { labels, values }
})
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style scoped lang="less">
.dashboard {
  .el-row {
    margin-bottom: 20px;
  }
}
</style>
