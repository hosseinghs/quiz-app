<template>
  <div class="ctr">
    <div class="questions-ctr">
      <div class="progress">
        <div class="bar"></div>
        <div class="status"></div>
      </div>
    </div>
    <div class="single-question">
      <div class="question">{{ currentQuestion.q }}</div>
      <div class="answers">
        <div
          v-for="(answer, i) in currentQuestion.answers"
          :key="i"
          class="answer"
          @click.stop="submitAnswer(answer)"
        >
          {{ answer.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, context) {
    function submitAnswer(answer) {
      if (!answer) return;
      context.emit("submitAnswer", answer);
    }

    return {
      submitAnswer,
    };
  },
  props: ["questions", "currentQuestion"],
};
</script>

<style scoped>
.question {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
}

.answers > .answer {
  font-size: 16px;
  font-weight: 500;
  padding: 1rem;
  margin: 0.25rem 0;
  border-radius: 8px;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: all 0.1s;
}

.answers > .answer:hover {
  color: #fff;
  background-color: gray;
}
</style>
