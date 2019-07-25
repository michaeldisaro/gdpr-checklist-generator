<template>
  <div class="radio">
    <h3>{{getQuestionText(question)}}</h3>
    <span v-bind:key="answer.id" v-for="answer in answers">
      <input type="radio" v-bind:name="question" v-bind:value="answer.id">
      <label>{{getAnswerText(answer.id)}}</label>
    </span>
  </div>
</template>

<script lang="ts" src="./radio.ts"/>
<style src="./radio.css"/>
