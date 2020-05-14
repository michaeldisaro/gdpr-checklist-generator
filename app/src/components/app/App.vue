<template>
  <v-app id="app">
    <v-app-bar height="116px" fixed>
      <v-img src="logo.png"
             class="logo"
             max-width="64px"
             max-height="64px"
             contain/>
      <h1>GDPR Checklist</h1>
    </v-app-bar>
    <v-content>
      <v-row>
        <v-col cols="5"><Quiz/></v-col>
      </v-row>
      <Checklist/>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./app.ts"/>
<style src="./app.css"/>
