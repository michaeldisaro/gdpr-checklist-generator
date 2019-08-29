<template>
  <div class="quiz">
    <h2>Quiz</h2>
    <div class="mt-5">
      <template v-for="q in quiz">
        <Ui v-if="q.dependsOn.length == 0" v-bind:question="q"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts" src="./quiz.ts"/>
<style src="./quiz.css"/>
