<template>
	<div class="goods">
	  <div class="menu-wrapper">
      <ul>
        <li class="menu-item" v-for="item in Maxs">
          <span class="text">
            <span >{{item.name}}</span>
          </span>
        </li>
      </ul>
      </div>
            <div class="maxs-wrapper">
        <li class="maxs-item" v-for="item in Maxs">
          <h1 class="good-title">{{item.name}}</h1>
          <ul>
            <li v-for="good in item.goods" class="good-item" ref="wrapper">
            <div>
            <img class="good-img" :src="good.goods_front_img" alt="">
            </div>
            <div>
            <p class="good-name">{{good.good}}</p>
            </div>
            </li>
          </ul>
        </li>
    </div>
 </div>
</template>

<script>
  import { getMax } from '../../../api/api'
  import BScorll from 'better-scroll'

  export default {
      data(){
        return {
             Maxs:[],
        }
      },
      methods:{
         _getMax(){
            getMax().then((Maxs) =>{
              this.Maxs = Maxs.data
            })
         },
      },
      mounted(){
        this.$nextTick(() => {
        this.scroll = new BScorll(this.$refs.wrapper, {})
      })
      },
      created(){
        this._getMax();
      }
  }

</script>

<style scoped>
  .goods{
    display: flex;
    width: 95%;
  }
  .menu-wrapper{
    flex:0 0 80px;
    background-color: #f3f5f7;
    width: 80px;
  }
  .menu-item{
    display: table;
    height: 54px;
    line-height: 15px;
  }
  .maxs-wrapper{
    flex:1;
  }
  .good-item{
    display: flex;
  }
  .good-title{
    height: 26px;
    padding: 14px;
    font-size: 26px;
  }
  .good-name{
    font-size: 22px;
    padding: 5px;
  }
  .good-img{
    padding: 5px;
    width: 100px;
    height: 100px;
  }
</style>
