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

export default {
  setup() {
    const questions = [
      {
        q: "What is 2 + 2 ?",
        answers: [
          {
            text: "4",
            isCorrect: true,
          },
          {
            text: "7",
            isCorrect: false,
          },
          {
            text: "3",
            isCorrect: false,
          },
          {
            text: "8",
            isCorrect: false,
          },
        ],
      },
      {
        q: "Which one is better ?",
        answers: [
          {
            text: "Angular",
            isCorrect: false,
          },
          {
            text: "Vue",
            isCorrect: true,
          },

          {
            text: "React",
            isCorrect: false,
          },
          {
            text: "Svelte",
            isCorrect: false,
          },
        ],
      },
      {
        q: "Which one is using js ?",
        answers: [
          {
            text: ".net",
            isCorrect: false,
          },
          {
            text: "golang",
            isCorrect: false,
          },
          {
            text: "nodeJS",
            isCorrect: true,
          },
          {
            text: "php",
            isCorrect: false,
          },
        ],
      },
    ];
    const userAnswers = [];
    const index = ref(0);
    
    const currentQuestion = computed(() => {
      return questions[index.value];
    });

    const submitAnswer = (answer) => {
      index.value++;
      userAnswers.push(answer);
    };

    return {
      index,
      currentQuestion,
      submitAnswer,
    };
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
