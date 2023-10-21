<template>
  <div style="height: 100vh; background-color: #2c3e50">
    <Header />
    <div id="HomePage"></div>
  </div>
</template>

<script setup>
import Header from '@/components/Router/Header.vue'
// import axios from "axios";
//
// axios.get('http://bilibili.com').then((res) => {
//   console.log(res)
// })

const HPElem = document.getElementById("HomePage")

const AList = [
  [
    "0",
    "BiliBili",
    "https://www.bilibili.com"
  ],
  [
    "1",
    "Twitter",
    "https://twitter.com"
  ]
]

for (var i = 0, len = AList.length; i < len; i++) {
    console.log(AList[i][1], AList[i][2])
}


</script>

<style scoped></style>