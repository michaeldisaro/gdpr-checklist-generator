<template>
  <div class="text">
    <v-row align="center">
      <v-col cols="8">{{question.text}}</v-col>
      <v-col cols="8">
        <span class="shrink">
          <v-text-field class="text-form" v-model="userText" v-on:keyup="test"/>
        </span>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./text.ts"/>
<style src="./text.css"/>
