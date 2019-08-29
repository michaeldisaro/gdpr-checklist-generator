<template>
  <div class="radio">
    <v-row align="center">
      {{question.text}}
      <v-radio-group class="shrink ml-2 ml-5" v-model="selected" v-on:change="test">
        <template v-for="answer in question.answers">
          <v-radio
            v-bind:key="uiId+'-'+answer.id"
            v-bind:name="uiId"
            v-bind:label="answer.text"
            v-bind:value="question.answers.indexOf(answer)"
          />
        </template>
      </v-radio-group>
    </v-row>
  </div>
</template>

<script lang="ts" src="./radio.ts"/>
<style src="./radio.css"/>
