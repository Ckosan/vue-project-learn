<template>
  <div>
    <div>我是爸爸</div>
    <div>发送给大儿子的信息是：{{ msg1 }}</div>
    <br>
    <!--    父子组件：所谓的父子组件，及子组件ChildOne嵌套在父组件里面-->
    <!--   给子组件传一个msg1，用 :msggggg 来接受，那么子组件里面就需要msggggg来接受，及在子组件里面定义一个msggggg接受 -->
    <div>
      <div id="child1">
        <ChildOne :msggggg="msg1"/>
      </div>
    </div>
    <br>
    <br>
    <br>

    <div>我接收到二儿子说的话是：{{ childTwo }}</div>
    <br>
    <br>
    <br>
    <div>
      <!--      用子组件定义的方法 @toParent接受消息-->
      <ChildTwo @toParent1="getMsg"></ChildTwo>
    </div>
  </div>
</template>

<script>
import ChildOne from "./ChildOne"
import ChildTwo from "@/components/ChildTwo";

export default {
  name: "Farther",
  components: {
    ChildOne,
    ChildTwo
  },
  data() {
    return {
      msg1: "爸爸给大儿子说的话",
      childTwo: ""
    }
  },
  methods: {
    //接受消息
    getMsg(msg) {
      this.childTwo = msg
    }
  }
}
</script>

<style scoped>

</style>