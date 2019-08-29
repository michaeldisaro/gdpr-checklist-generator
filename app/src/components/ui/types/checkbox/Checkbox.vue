<template>
  <div class="radio">
    <h3>{{question.text}}</h3>
    <v-switch v-model="checked" v-on:change="test"></v-switch>
  </div>
</template>

<script lang="ts" src="./checkbox.ts"/>
<style src="./checkbox.css"/>
