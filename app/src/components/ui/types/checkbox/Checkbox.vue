<template>
  <div class="checkbox">
    <v-row align="center">
      <v-col cols="8">{{question.text}}</v-col>
      <v-col cols="8">
        <v-switch class="shrink" v-model="checked" v-on:change="test"></v-switch>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./checkbox.ts"/>
<style src="./checkbox.css"/>
