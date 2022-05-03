<template>
  <Questions />
  <Result />
</template>

<script>
import Questions from "@/components/Questions";
import Result from "@/components/Result";

export default {
  name: "App",

  components: {
    Questions,
    Result,
  },
};
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
