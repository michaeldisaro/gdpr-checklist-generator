<template>
  <div class="radio">
    <v-row align="center">
      <v-col cols="10">{{question.text}}</v-col>
      <v-col cols="2"><v-switch class="shrink ml-2 mt-6" v-model="checked" v-on:change="test"></v-switch></v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./checkbox.ts"/>
<style src="./checkbox.css"/>
