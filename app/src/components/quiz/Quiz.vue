<template>
  <div class="quiz">
    <h2>Quiz</h2>
    <div class="">
      <template v-for="q in quiz">
        <Ui v-if="q.dependsOn.length === 0" v-bind:question="q" v-bind:key="q.id"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts" src="./quiz.ts"/>
<style src="./quiz.css"/>
