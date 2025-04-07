<template>
  <div class="container-menu">
    <div
      class="container__icon"
      :class="{ container__icon_active: active == true }"
    >
      <slot></slot>
    </div>
    <span
      class="container__title"
      :class="{ container__icon_active: active == true }"
      :style="{ flex: hasChild == 0 ? 5 : 4 }"
      >{{ title }}</span
    >
    <div
      class="container__arrow"
      :class="{ container__arrow_active: active == true }"
      v-if="hasChild > 0"
    >
      <el-icon v-if="showChild"><ArrowDownBold /></el-icon>
      <el-icon v-else><ArrowUpBold /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  hasChild: {
    type: Number,
    required: true,
  },
  showChild: {
    type: Boolean,
  },
});
</script>

<style lang="css" scoped>
.container-menu {
  display: flex;
  flex-direction: row;
  color: rgb(96 125 139);
}
.container__icon {
  margin-left: 5px;
  flex: 1;
  display: flex;
  justify-items: flex-start;
}

.container__icon_active {
  color: #ffffff;
}

.container__title {
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.container__title_active {
  color: #ffffff;
}

.container__arrow {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  margin-right: 5px;
}

.container__arrow_active {
  color: #ffffff;
}
</style>
