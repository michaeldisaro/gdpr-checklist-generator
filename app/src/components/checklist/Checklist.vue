<template>
  <div class="checklist">
    <h2>Checklist</h2>
    <ul class="fulfillments">
      <li v-bind:key="fulfillment.id" v-for="fulfillment in getFf">{{fulfillment.text}}</li>
    </ul>
  </div>
</template>

<script lang="ts" src="./checklist.ts"/>
<style src="./checklist.css"/>
