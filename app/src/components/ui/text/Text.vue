<template>
  <div class="text">
    <h3>{{question.text}}</h3>
    <span>
      <input type="text" v-model="userText" v-on:keyup="test"/>
    </span>
    <div class="children"></div>
  </div>
</template>

<script lang="ts" src="./text.ts"/>
<style src="./text.css"/>
