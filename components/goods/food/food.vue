<template>
      <cube-scroll-nav
        :side="true"
        :data="maxs"
        @change="changeHandler"
        @sticky-change="stickyChangeHandler"
        >
        <cube-scroll-nav-panel
          v-for="item in maxs"
          :key="item.name"
          :label="item.name"
          :title="item.name">
          <ul>
          <li v-for="food in item.goods">
              <div>
                <img width="157" height="157" :src="food.goods_front_img">
                <h2 class="name">{{food.good}}</h2>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>

</template>

<script>
  import { getMax } from '../../../api/api'

  export default {

    data(){
      return{
        maxs:[],
        scrollOptions:{
          click:false,
          directionLockThreshold:0
        }
      }
    },

    methods:{
      fetch(){
        getMax().then((maxs) =>{
          this.maxs = maxs.data
        })
      },
      changeHandler(label) {
        console.log('changed to:', label)
      },
      stickyChangeHandler(current) {
        console.log('sticky-change', current)
      }
    },
    created(){
        this.fetch();
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
.goods{
  postion:relative;
  text-align: left;
  height:100%
}
. scroll-nav-wrapper{
  position: absolute;
  width: 100%;
  top:0;
  left: 0;
  bottom: 60px;
}
.cube-scroll-nav-bar{
  width: 80px;
  white-space: normal;
  overflow: hidden;
}
.cube-scroll-nav-bar-item{
  display: flex;
  padding: 0 10px;
  align-items: center;
  height: 56px;
  line-height: 16px;
}
.cube-scroll-nav-bar-item.text{
  flex: 1;
  position:relative;
}
.cube-scroll-nav-bar-item.num{
  position:absolute;
}
.cube-scroll-list-wrapper{
  display: flex;
}
.cube-scroll-nav-bar-item_active{
}
.cube-scroll-nav-bar-item.food-item {
  display: flex;
  position:relative;
}
.good-item{
}
.good-item-name{
}
.good-item-img{
 width: 150px;
 height: 150px;
}

</style>

