<template>
	<div class="tab">
   <cube-tab-bar
    :showSlider=true
    :useTransiton=false
    v-model="selectedLabel"
    :data="tabs"
    ref="tabBar"
   >
   </cube-tab-bar>
   <div class="slide-wrapper">
     <cube-slide
      :loop=false
      :auto-play=false
      :show-dots=false
      :initial-index="index"
      ref="slide"
      @change="onChange"
      :options="slideOptions"
      >
     <cube-slide-item v-for="(tab,index) in tabs" :key="index">
        <component ref="component" :is="tab.component" :data="tab.data"></component>
     </cube-slide-item>
     </cube-slide>
   </div>
  </div>
</template>

<script>


  export default {
    name: 'tab',
    props: {
      tabs: {
        type: Array,
        default () {
          return []
        }
      },
      initialIndex: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        index: this.initialIndex,
        slideOptions: {
          listenScroll: true,
          proberTpye: 5,
          directionLockThreshold: 0
        }
      }
    },
    computed: {
      selectedLabel: {
        get () {
          return this.tabs[this.index].label
        },
        set (newVal) {
          this.index = this.tabs.findIndex((value) => {
            return value.label === newVal
          })
        }
      }
    },
    mounted(){
      this.onChange(this.index)
    },
    methods: {
      onChange (current) {
        this.index = current
        const component = this.$refs.component[current]
        component.fetch && component.fetch
        // const component =
      },

    }
  }
</script>

<style lang="stylus" scoped>
.tab{
  font-size: 14px;
  width: 100%;
}

</style>
