<template>
  <Questions v-if="!isTheGameOver" @gameIsOver="showResult($event)" />
  <Result :score="score" v-else />
</template>

<script>
import Questions from "@/components/Questions";
import Result from "@/components/Result";
import { ref } from "vue";

export default {
  name: "App",

  setup() {
    const isTheGameOver = ref(false);
    const score = ref(null);

    const showResult = (_score) => {
      score.value = _score;
      isTheGameOver.value = true;
    };

    return {
      score,
      showResult,
      isTheGameOver,
    };
  },

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
