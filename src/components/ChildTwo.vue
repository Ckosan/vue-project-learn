<template>
  <div>
    <div id="title">我是二儿子</div>
    <div>
      我给爸爸带的话是：{{ msg }}
    </div>
    <button @click="toParent">二儿子给爸爸传话</button>
    <br>
    <br>
    <br>
    我给老大说话是:<input type="text" v-model="dg">
    <br>
    <button @click="toDg">给大哥说话</button>
  </div>
</template>

<script>
export default {
  name: "ChildTwo",
  data() {
    return {
      msg: "粑粑你好棒",
      dg: "大哥 ，你可以的"
    }
  },
  methods: {
    //子组件给父组件传值，用this.$emit('toParent1',this.msg)的方式传值    定义一个事件toParent1  在父组件里面 监听toParent1事件
    toParent() {
      this.$emit('toParent1', this.msg)
    },
    toDg() {
      //使用main.js 里面定义的中间变量bus 来兄弟组件传值
      this.bus.$emit('2dg', this.dg)
    }
  }
}
</script>

<style scoped>

</style>