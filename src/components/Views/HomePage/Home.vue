<template>
  <div class="HPP">
    <Header />
    <div id="HomePage">
      <h1>Hello Guys!</h1>
      <div style="max-width: 100%; text-align: left; font-size: large">
        <span>The current project has not yet clearly defined its business requirements, and the UI interface lacks a clear design direction. The main challenge lies in the undefined business requirements, which have led to confusion in page design. As a result, the project may appear rudimentary at this stage.</span>
      </div>
      <div style="max-width: 100%; text-align: left; font-size: large">
        <span>当前项目尚未明确定义其业务需求，且UI界面缺乏明确的设计方向。主要挑战在于业务需求未被明确定义，这导致了在页面设计方面的困惑，因此项目展示在此阶段可能显得简陋不堪。</span>
      </div>
    </div>

  </div>
</template>

<script setup>
import Header from '@/components/Router/Header.vue'
// import "@/style.css"
// import axios from "axios";
//
// axios.get('https://api.forcecat.site/api/hello').then((res) => {
//   console.log(res)
// })

// const HPElem = document.getElementById("HomePage")
//
// const AList = [
//   [
//     "0",
//     "BiliBili",
//     "https://www.bilibili.com"
//   ],
//   [
//     "1",
//     "Twitter",
//     "https://twitter.com"
//   ]
// ]
//
// for (let i = 0, len = AList.length; i < len; i++) {
//     console.log(AList[i][1], AList[i][2])
// }
//


</script>

<style scoped>

.HPP {
  height: 100vh;
  background-color: var(--container--color);
}

</style>