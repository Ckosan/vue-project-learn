<template>
  <div id="app">
    <!--    <div>-->
    <!--      <Farther></Farther>-->
    <!--    </div>-->
    <!--      <ChildOne></ChildOne>-->
    <!--      <router-view></router-view>-->
    <br>
    <ul>
      <li>
        <router-link to="/">Hello</router-link>
      </li>
      <li>
        <router-link to="/hello">HelloWorld</router-link>
      </li>
      <li>
        <router-link to="/farther">farther</router-link>
      </li>
    </ul>
    <router-view></router-view>

  </div>
</template>

<script>
// import Farther from "@/components/Farther"
// import ChildOne from "@/components/ChildOne";

export default {
  name: 'App',
  components: {
    // Farther,
    // ChildOne
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
