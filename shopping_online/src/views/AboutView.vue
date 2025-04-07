<template>
  <div class="common-layout fullscreen-div">
    <el-container>
      <el-aside width="18vw" class="menu-custom"
        ><MenuComponent @goToView="goToView" />
      </el-aside>
      <el-container>
        <el-main class="main-content">
          <HeaderComponent :items="items" />
          <RouterView v-slot="{ Component }">
            <component
              :is="Component"
              @childEvent="handleChildEvent"
              :items="items"
            />
          </RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MenuComponent from "@/components/MenuComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { BreadCrumb, Menu } from "../utils/menu";
const router = useRouter();

const items = ref<BreadCrumb[]>([{ title: "Dashboard", path: "/" }]);

const goToView = (idxSelected: string) => {
  items.value = Menu.getBreadCrumb(idxSelected);
  Menu.goToView(idxSelected, router);
};

const handleChildEvent = (data: BreadCrumb) => {
  items.value.push(data);
};
</script>

<style lang="css" scoped>
.fullscreen-div {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #eceff180;
  overflow: auto;
}

.header-custom {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border-bottom: 2px solid #e0e0e0;
  border-radius: 5px;
  width: 99vw;
}

.menu-custom {
  background-color: #fff;
  height: 95vh;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid rgb(207 216 220);
  margin: 10px;
  border-radius: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
}

.main-content {
  margin-left: calc(18vw + 20px);
}
</style>
