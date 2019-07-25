<template>
  <div class="radio">
    <h3>{{question.text}}</h3>
    <span v-bind:key="answer.id" v-for="answer in answers">
      <input type="radio" v-bind:name="question.id" v-bind:value="answer.id" v-model="selected" v-on:change="test">
      <label>{{answer.text}}</label>
    </span>
  </div>
</template>

<script lang="ts" src="./radio.ts"/>
<style src="./radio.css"/>
