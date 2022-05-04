import { defineStore } from "pinia";

export const useQuestionStore = defineStore("questions", {
  state: () => ({
    questions: [
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
    ],
  }),
});
