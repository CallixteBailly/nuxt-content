<template>
    <p>
      Hello {{ name }} 🙂!
    </p>
  </template>
  
  <script setup>
  defineProps({
    name: {
      type: String,
      default: 'Jean'
    }
  })
  </script>
  