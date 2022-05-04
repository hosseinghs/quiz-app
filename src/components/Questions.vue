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
import { ref, computed } from "vue";
import { useQuestionStore } from "@/store/questions";

export default {
  setup(_, context) {
    const store = useQuestionStore();
    const questions = store.questions;
    const userAnswers = [];
    const index = ref(0);
    const numberOfCorrectAnswers = ref(0);

    const currentQuestion = computed(() => {
      return questions[index.value];
    });

    const submitAnswer = (answer) => {
      userAnswers.push(answer);
      checkCorrectAnswer(answer);
      if (questions.length === userAnswers.length) endGame();
      else index.value++;
    };

    const checkCorrectAnswer = (answer) => {
      if (!answer) return;
      answer.isCorrect && ++numberOfCorrectAnswers.value;
    };

    const endGame = () => {
      const score = (numberOfCorrectAnswers.value / questions.length) * 100;
      context.emit("gameIsOver", score.toFixed());
    };

    return { index, currentQuestion, submitAnswer };
  },
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
