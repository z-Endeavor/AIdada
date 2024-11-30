<template>
  <div id="globalHeader">
    <a-row align="center" :wrap="false">
      <a-col flex="auto">
        <a-menu mode="horizontal"
          ><a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/logo.png" />
              <div class="title">AIdada</div>
            </div>
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col flex="100px">
        <div>
          <a-button type="primary" href="/user/login">登录</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
