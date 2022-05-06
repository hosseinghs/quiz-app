<template>
  <div class="progress-bar">
    <div class="progress">
      {{}} questions of out {{}}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "ProgressBarComponent",
  props: ["questionsCount", "AnsweredQuestionsCount"],
  setup(props) {
    const progressWidth = computed(
      () => (props.AnsweredQuestionsCount / props.questionsCount) * 100
    );

    return {
      progressWidth,
    };
  },
};
</script>

<style></style>
