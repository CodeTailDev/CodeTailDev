<script setup>
import Header from "@/components/Router/Header.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconQQ from "@/components/icons/IconQQ.vue";


</script>

<template>
  <div style="height: 100vh; background-color: var(--container--color)">
    <Header/>
    <div id="AboutPage">
      <h1>About Us</h1>
      <div style="max-width: 100%; text-align: left; font-size: large">
        <span>I'm just a small "Furry" from Chongqing, tinkering with Vue by myself. So I can't come up with any business ideas. Also, I belong to the type of "artistic cells" with a percentage of 0%, so my UI design is as terrible as "sh*t."</span>
      </div>
      <div style="max-width: 100%; text-align: left; font-size: medium">
        <span>只是一个重庆的小兽兽，自个儿搓Vue而已，所以想不出来什么业务，而且我属于那种 艺术细胞 => 0%，所以UI设计的依托使UwU</span>
      </div>

      <hr>

      <h1>Contact Us</h1>
      <div style="font-size: 30px; display: flex; justify-content: center">
        <div>
          <a href="https://www.github.com/CodeTailDev">
            <IconGithub style="display: inline-flex"/>
            <span>
              Github
            </span>
          </a>
        </div>
        <div>
          <a href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=dDpWCkhQyTElYSQSVdTGuPCIemQriF-A&authKey=o%2FwVDS6xzj5mbWbbcempCPA1gqDMKlWhfr8Osmb74BoUy2iAlNx%2BDd8kP2BbR830&noverify=0&group_code=907109574">
            <IconQQ style="display: inline-flex;"/>
            <span>
            QQ
          </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>