<template>
  <div class="result">
    <div class="title">{{ finalResult.title }}</div>
    <div class="desc">{{ finalResult.desc }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    score: {
      type: String,
      default: "0",
    },
  },

  setup(props) {
    const results = [
      {
        title: "congrats!!",
        desc: "Your studies have finally paid off!",
      },
      {
        title: "ops!!",
        desc: "No Problem, learn from today, try again tomorrow!",
      },
    ];
    const _score = computed(() => props.score);

    const finalResult = computed(() =>
      _score.value > 66 ? results[0] : results[1]
    );

    return {
      finalResult,
    };
  },
};
</script>

<style></style>
