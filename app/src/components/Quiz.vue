<template>
  <div class="quiz">
    <Radio v-bind:question="questionId" v-bind:answers="answers"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import * as quiz from '../data/quiz.json';
import Radio from './ui/radio/Radio.vue';

@Component({
  components: {
    Radio,
  },
})
export default class Quiz extends Vue {
    questionId: number = quiz[0].question;

    answers: object[] = quiz[0].answer.answers;
}
</script>
