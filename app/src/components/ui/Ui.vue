<template>
  <div>
    <component :is="type" v-bind:question="question"/>
    <div class="nested">
      <template v-for="q in nested">
        <Ui v-bind:key="q.id" v-bind:question="q"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts" src="./ui.ts"/>
