<template>
  <div>
    <ProgressBar
      :questions-count="questions.length"
      :Answered-questions-count="answeredQuestions"
    />
    <Transition name="fade" duration="300" mode="out-in">
      <Questions
        v-if="!isTheGameOver"
        :questions="questions"
        :current-question="currentQuestion"
        @submitAnswer="submitAnswer($event)"
      />
      <Result v-else :score="score" />
    </Transition>
  </div>
</template>

<script>
import Questions from "@/components/Questions";
import Result from "@/components/Result";
import { ref, computed } from "vue";
import { useQuestionStore } from "@/store/questions";
import ProgressBar from "./components/ProgressBar.vue";

export default {
  name: "App",

  setup() {
    const answeredQuestions = ref(0);
    const numberOfCorrectAnswers = ref(0);
    const isTheGameOver = ref(false);
    const score = ref(null);
    const store = useQuestionStore();
    const questions = store.questions;
    const index = ref(0);

    const currentQuestion = computed(() => {
      return questions[index.value];
    });

    const submitAnswer = (answer) => {
      ++answeredQuestions.value;
      checkCorrectAnswer(answer);
      if (questions.length === answeredQuestions.value) endGame();
      else index.value++;
    };

    const checkCorrectAnswer = (answer) => {
      if (!answer) return;
      answer.isCorrect && ++numberOfCorrectAnswers.value;
    };

    const endGame = () => {
      const score = (numberOfCorrectAnswers.value / questions.length) * 100;
      showResult(score.toFixed());
    };

    const showResult = (_score) => {
      score.value = _score;
      isTheGameOver.value = true;
    };
    return {
      questions,
      currentQuestion,
      score,
      showResult,
      submitAnswer,
      isTheGameOver,
      answeredQuestions,
    };
  },

  components: {
    Questions,
    Result,
    ProgressBar,
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
