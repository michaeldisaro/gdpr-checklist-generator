<template>
  <div>
    <component :is="type" v-bind:id="uiId" v-bind:question="question"
               v-bind:nested="nested" v-bind:fulfillments="fulfillments"/>
    <div class="nested">
      <template v-for="q in nested">
        <Ui v-bind:question="q"/>
      </template>
    </div>
  </div>
</template>

<script lang="ts" src="./ui.ts"/>
