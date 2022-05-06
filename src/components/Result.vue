<template>
  <div class="result" :class="finalResult.passed ? 'passed' : 'failed'">
    <div class="title">{{ finalResult.res.title }}</div>
    <div class="desc">{{ finalResult.res.desc }}</div>
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
      _score.value > 66
        ? {
            passed: true,
            res: results[0],
          }
        : {
            passed: false,
            res: results[1],
          }
    );

    return {
      finalResult,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.failed {
  color: red;
}

.passed {
  color: green;
}
</style>
