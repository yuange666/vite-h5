<template>
  <router-view v-slot="{ Component }">
    <transition>
      <!-- <keep-alive> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </transition>
  </router-view>
</template>

<script setup>
import getBrowserInterfaceSize from "@/hooks/useGetPageInfo";
getBrowserInterfaceSize();

//像素放缩
function initViewport() {
  const width = 375; // 设计稿宽度
  const scale = window.innerWidth / width;
  // console.log('scale', scale)
  let meta = document.querySelector("meta[name=viewport]");
  let content = `width=${width}, initial-scale=${scale}, user-scalable=no`;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}
initViewport();

//禁止缩放屏幕
var lastTouchEnd = 0;
document.documentElement.addEventListener(
  "touchend",
  function (event) {
    var now = Date.now();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);
</script>

<style scoped></style>
