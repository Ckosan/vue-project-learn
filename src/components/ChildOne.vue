<template>
  <div>
    <div id="title">我是大儿子</div>
    <div>我接受到爸爸的话是：{{ msggggg }}</div>

    <br>
    <br>

    <div>我收到二弟给我的赞美:{{ from2d }}</div>
  </div>
</template>

<script>
export default {
  name: "ChildOne",
  //定义msg接受父组件传递来过的值
  props: {
    msggggg: {
      type: String
    }
  },
  data() {
    return {
      from2d: ""
    }
  },
  beforeCreate() {
    //使用main.js 里面定义的中间变量bus 来监听兄弟组件传递的事件
    this.bus.$on("2dg", msg => {
      this.from2d = msg
    })
  }

}
</script>

<style scoped>

</style>