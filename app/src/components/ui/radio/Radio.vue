<template>
  <div class="radio">
    <h3>{{question.text}}</h3>
    <span v-bind:key="question.id +'-' +answer.id" v-for="answer in question.answers">
      <input type="radio"
             v-bind:name="question.id +'-'+ answer.id"
             v-bind:value="question.answers.indexOf(answer)"
             v-model="selected"
             v-on:change="test">
      <label>{{answer.text}}</label>
    </span>
    <div class="children"></div>
  </div>
</template>

<script lang="ts" src="./radio.ts"/>
<style src="./radio.css"/>
