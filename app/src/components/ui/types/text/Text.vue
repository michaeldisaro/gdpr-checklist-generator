<template>
  <div class="text">
    <v-row align="center">
      <v-col cols="10">{{question.text}}</v-col>
      <v-col cols="2">
        <span class="shrink ml-2 mt-0">
          <v-text-field v-model="userText" v-on:keyup="test"/>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./text.ts"/>
<style src="./text.css"/>
