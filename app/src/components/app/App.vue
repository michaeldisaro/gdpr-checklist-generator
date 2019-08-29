<template>
  <v-app id="app" style="background-color:#003399">
    <v-app-bar class="pa-1" style="background-color:#003399" height="72px" fixed>
      <v-img src="/logo.png" class="mr-5" max-width="64px" max-height="64px" contain/>
      <h1>Easy GDPR Checklist</h1>
    </v-app-bar>
    <v-content class="mt-12 pa-10">
      <Quiz/>
      <Checklist/>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./app.ts"/>
<style src="./app.css"/>
