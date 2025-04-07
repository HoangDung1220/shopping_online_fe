<template>
  <div class="container">
    <div class="menu">
      <div
        class="menu-item"
        v-for="(item, index) in menus"
        :key="index"
        :class="{ active: idxSelected == concatStrings(index, 0) }"
        @click="changeMenuOption(index, 0)"
      >
        <MenuItemComponent
          :title="item.title"
          :active="idxSelected == concatStrings(index, 0)"
          :hasChild="item.childrens.length"
          :showChild="item.showChild"
        >
          <component :is="item.component" :size="item.size">
            <component :is="item.icon" />
          </component>
        </MenuItemComponent>
        <div v-if="item.showChild" style="margin-top: 10px; margin-left: 20px">
          <div
            class="menu-item"
            v-for="(child, indexChild) in item.childrens"
            :key="indexChild"
            :class="{
              active: idxSelected == concatStrings(index, indexChild + 1),
            }"
            @click.stop="changeMenuOption(index, indexChild + 1)"
          >
            <MenuItemComponent
              :title="child.title"
              :active="idxSelected == concatStrings(index, indexChild + 1)"
              :hasChild="0"
            >
            </MenuItemComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItemComponent from "@/components/MenuItemComponent.vue";
import { ElIcon } from "element-plus";
import {
  House,
  ShoppingCart,
  Monitor,
  Sell,
  Refrigerator,
  Collection,
} from "@element-plus/icons-vue";

import { ref, defineEmits } from "vue";

const emit = defineEmits(["goToView"]);

const menus = ref([
  {
    component: ElIcon,
    icon: House,
    size: 25,
    title: "Dashboard",
    showChild: false,
    childrens: [],
  },
  {
    component: ElIcon,
    icon: ShoppingCart,
    size: 25,
    title: "Intented Import",
    showChild: false,
    childrens: [
      { title: "Request Import" },
      { title: "Decide Import" },
      { title: "History Import" },
      { title: "Invoice Import" },
    ],
  },
  {
    component: ElIcon,
    icon: Monitor,
    size: 25,
    title: "Import",
    showChild: false,
    childrens: [
      { title: "Handle Import" },
      { title: "Error Goods List" },
      { title: "Import Goods List" },
    ],
  },
  {
    component: ElIcon,
    icon: Sell,
    size: 25,
    title: "Intented Export",
    showChild: false,
    childrens: [
      { title: "Purchase Order List" },
      { title: "Create Purchase Order" },
    ],
  },
  {
    component: ElIcon,
    icon: Refrigerator,
    size: 25,
    title: "Inventory",
    showChild: false,
    childrens: [{ title: "Inventory List" }, { title: "Create Request" }],
  },
  {
    component: ElIcon,
    icon: Collection,
    size: 25,
    title: "Management",
    showChild: false,
    childrens: [
      { title: "Goods" },
      { title: "Providers" },
      { title: "Category" },
      { title: "Voucher" },
      { title: "Storage" },
    ],
  },
]);

var idxSelected = ref("😳");

const changeMenuOption = (idx: number, idxChild: number) => {
  if (idxChild == 0 && menus.value[idx].childrens.length > 0) {
    menus.value[idx].showChild = !menus.value[idx].showChild;
  } else {
    idxSelected.value = concatStrings(idx, idxChild);
    emit("goToView", idxSelected.value);
  }
};

const concatStrings = (val1: number, val2: number): string => val1 + "_" + val2;
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.container .menu {
  margin-top: 30px;
  margin-left: 20px;
}

.menu-item {
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-right: 20px;
  margin-top: 5px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: #eceff180;
  border-radius: 0.5rem;
}

.active {
  background-color: #43a047 !important;
  border-radius: 0.5rem;
  color: #ffffff !important;
}
</style>
