<template>
  <div class="progress-bar">
    <div class="progress">
      {{ AnsweredQuestionsCount }} questions of out {{ questionsCount }}
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

<style>
.progress-bar {
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: ghostwhite;
}
</style>
