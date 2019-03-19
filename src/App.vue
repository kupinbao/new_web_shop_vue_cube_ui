<template>
  <div id="app">
      <tab :tabs="tabs"></tab>
  </div>
</template>
<script>
import qs from 'querystring'
import tab from '../src/components/header/tab'
// import allGoods from '../src/components/goods/goods'
import goodsFood from '../src/components/goods/food/food'
// import goodsCook from '../src/components/goods/cook/cook'
// import goodsSmoke from '../src/components/goods/smoke/smoke'
// import goodsEveryday from '../src/components/goods/everyday/everyday'

export default {
    data(){
      return{
        seller:{
        }
      }
    },
    computed:{
      tabs(){
        return [
          {
            label: '热销',
            component: goodsFood,
            data: {
              seller: this.seller
            }
          },
          {
            label: '饮料副食',
            component: goodsFood,
            data: {
              seller: this.seller
            }
          },
          {
            label: '粮油生鲜',
            component: goodsFood,
            data: {
              seller: this.seller
            }
          },
          {
            label: '日用',
            component: goodsFood,
            data: {
              seller: this.seller
            }
          },
          {
            label: '烟酒',
            component: goodsFood,
            data: {
              seller: this.seller
            }
          },
        ]
      }
    },
    components:{
      tab
    }
  }

</script>
<style lang="stylus">
</style>

