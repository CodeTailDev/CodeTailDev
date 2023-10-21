<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class='scroll-header'>
    <nav class='nav'>
      <nav class='logo'>
        <img src='../favicon.png' class="" alt="logo" />
        <a href='https://www.codetail.net'>CodeTail</a>
      </nav>
      <ul class='ul'>
        <li>
          <RouterLink to="/home">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/info">Information</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <div style="height: 50px;"></div>
</template>

<style scoped>
.scroll-header {
  --scroll-height:50px;
  --scroll-ul-width: 350px;
  background-color: #DCE2F1;
  box-shadow: 0 -1px 15px rgba(0,0,0, .15);
  position:fixed;
  top: 0;
  width: 100%;
  z-index: 5;
}

.nav{
  height: var(--scroll-height);
  padding: 5px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.scroll-header>.nav>.logo{
  height: var(--scroll-height);
  display:flex;
  align-items:center;

  flex-direction: row;
  justify-content: flex-start;
  left: 72px;
}

.scroll-header>.nav>.logo a{
  color: black;
  text-decoration: none;
  font-family: Inter;
  font-size: 32px;
  font-weight: 400;
}

.scroll-header>.nav>.ul{
  height: var(--scroll-height);
  width: var(--scroll-ul-width);
  display: flex;
  font-family: Inter;
  text-align:center;
  align-items:center;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding-inline-start: 0;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between
}

.scroll-header>.nav>.ul li{
  display:flex;
  text-align: center;
  margin: 10px 10px;
}

.scroll-header>.nav>ul>li a{
  font-size: large;
  text-decoration: none;
  color: black;
}

.scroll-header>.nav>.logo> img{
  width: 50px;
  margin: 0 5px;
}
</style>