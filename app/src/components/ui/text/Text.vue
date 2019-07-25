<template>
  <div class="text">
    <h3>{{question.text}}</h3>
    <span v-bind:key="answer.id" v-for="answer in answers">
      <input type="text" v-model="userText" v-on:keyup="test"/>
    </span>
  </div>
</template>

<script lang="ts" src="./text.ts"/>
<style src="./text.css"/>
