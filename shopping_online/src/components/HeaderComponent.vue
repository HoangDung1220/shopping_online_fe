<template>
  <div class="container-header">
    <div class="header__breadcrumb">
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in items" :key="index">
          {{ displayTitle(item) }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="header__extension">
      <div class="extension__info">Hi, Hoang Dung</div>
      <div class="extension__bell">
        <el-icon size="20"
          ><BellFilled /><span class="bell__notification-dot"></span
        ></el-icon>
      </div>
      <div class="extension__setting">
        <el-icon size="20"><Tools /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import { defineProps } from "vue";

interface BreadCrumb {
  title: string;
  path: string;
}

const props = defineProps({
  items: {
    type: Array,
  },
});

function displayTitle(item: unknown): string {
  if (isBreadCrumb(item)) {
    return item.title;
  }
  return "";
}

function isBreadCrumb(item: unknown): item is BreadCrumb {
  return (
    typeof item === "object" &&
    item !== null &&
    "title" in item &&
    "path" in item
  );
}
</script>

<style lang="css">
.container-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
}

.header__breadcrumb {
  flex: 2;
}

.header__extension {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.extension__info {
  flex: 10;
  justify-content: flex-end;
  display: flex;
  color: rgb(96 125 139);
  font-weight: 900;
  font-size: 13px;
  margin-right: 10px;
  margin-bottom: 4px;
}

.extension__bell {
  cursor: pointer;
  flex: 1;
  position: relative;
}

.bell__notification-dot {
  position: absolute;
  top: 0px;
  right: 1px;
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
}

.extension__setting {
  cursor: pointer;
  flex: 1;
}
</style>
