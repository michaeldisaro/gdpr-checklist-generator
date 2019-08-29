<template>
  <div class="radio">
    <h3>{{question.text}}</h3>
    <v-radio-group v-model="selected" v-on:change="test">
      <template v-for="answer in question.answers">
        <v-radio
          v-bind:key="uiId+'-'+answer.id"
          v-bind:name="uiId"
          v-bind:label="answer.text"
          v-bind:value="question.answers.indexOf(answer)"
          />
      </template>
    </v-radio-group>
  </div>
</template>

<script lang="ts" src="./radio.ts"/>
<style src="./radio.css"/>
