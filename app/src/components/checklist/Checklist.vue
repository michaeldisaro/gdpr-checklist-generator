<template>
  <div class="checklist">
    <h2>Report</h2>
    <div class="mt-5">
    <ul class="fulfillments">
      <li v-bind:key="fulfillment.id" v-for="fulfillment in fulfillments" class="mb-5">{{fulfillment.text}}</li>
    </ul>
    </div>
  </div>
</template>

<script lang="ts" src="./checklist.ts"/>
<style src="./checklist.css"/>
