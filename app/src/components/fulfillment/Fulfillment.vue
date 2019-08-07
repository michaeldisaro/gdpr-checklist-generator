<template>
  <li class="fulfillment" v-bind:data-question="data.question"
      v-bind:data-dependencies="data.dependsOn">
    {{text}}
  </li>
</template>

<script lang="ts" src="./fulfillment.ts"/>
<style src="./fulfillment.css"/>
