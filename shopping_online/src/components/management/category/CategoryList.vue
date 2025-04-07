<template>
  <div class="container-main">
    <div class="container-main__header">
      <div class="header__title">
        <span class="title-card">Condition</span>
      </div>
      <el-card>
        <el-row class="item-row row__first" :gutter="20">
          <el-col :span="8">
            <div class="item__title"><span>Category Code</span></div>
            <div class="item__element" style="width: 90%">
              <el-input v-model="value1" placeholder="Please input" />
              <el-button style="margin-left: 15px" type="primary" :icon="Search"
                >Refer</el-button
              >
            </div>
          </el-col>
        </el-row>
        <el-row class="item-row row__last">
          <el-col span="4"
            ><el-button type="primary" plain :icon="Search"
              >Search</el-button
            ></el-col
          >
        </el-row>
      </el-card>
    </div>

    <div class="container-main__content">
      <div class="header__title">
        <span class="title-card">Table</span>
      </div>
      <el-card>
        <el-row class="item-row row__first">
          <el-col :span="4" style="align-items: flex-start; display: flex">
            <el-radio-group v-model="valueSwitch">
              <el-radio-button value="1">By Massive</el-radio-button>
              <el-radio-button value="2">By Quantity</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-table
          :data="tableData"
          style="width: 100%; cursor: pointer"
          @row-click="handleRowClick"
        >
          <el-table-column label="Image" width="120px">
            <el-icon size="25"><UserFilled /></el-icon>
          </el-table-column>
          <el-table-column prop="categoryCode" label="Code" width="120px" />
          <el-table-column prop="categoryName" label="Name" width="250px" />
          <el-table-column
            prop="mass1"
            label="Mass1"
            width="100px"
            v-if="valueSwitch == '1'"
          />
          <el-table-column
            prop="mass2"
            label="Mass2"
            width="100px"
            v-if="valueSwitch == '1'"
          />
          <el-table-column
            label="Mass3"
            width="100px"
            v-if="valueSwitch == '1'"
          >
            <template #default="scoped">
              <span>{{ scoped.row.mass3 }} {{ scoped.row.mass3Unit }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="quantity1"
            label="Quantity1"
            width="100px"
            v-if="valueSwitch == '2'"
          />
          <el-table-column
            prop="quantity2"
            label="Quantity2"
            width="100px"
            v-if="valueSwitch == '2'"
          />
          <el-table-column
            prop="quantity3"
            label="Quantity3"
            width="100px"
            v-if="valueSwitch == '2'"
          />
          <el-table-column prop="height" label="Height" width="100px" />
          <el-table-column prop="width" label="Width" width="100px" />
          <el-table-column prop="length" label="Length" width="100px" />
          <el-table-column prop="description" label="Description" />
        </el-table>
        <div class="card__pagination">
          <el-pagination
            size="small"
            background
            layout="prev, pager, next"
            :total="200"
            class="mt-4"
          />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineProps } from "vue";
import { Search } from "@element-plus/icons-vue";
import Category from "@/models/Category";
import { useRouter } from "vue-router";
import { BreadCrumb } from "@/utils/menu";

const props = defineProps({
  items: {
    type: Array,
  },
});
const value1 = ref("");
const valueSwitch = ref("1");
const router = useRouter();
const emit = defineEmits(["childEvent"]);

const tableData: Category[] = [
  {
    categoryCode: "RAM_I",
    categoryName: "Ram Tom Binh Dinh - Loai I",
    urlImage: "No. 189, Grove St, Los Angeles",
    description:
      "Vue then ignores the extra children passed to the default slot, as it's not allowed to have both named slots and unnamed children at the same time",
    mass1Unit: "",
    mass2Unit: "",
    mass3Unit: "gram",
    mass1: 0,
    mass2: 0,
    mass3: 500,
    quantity1: "",
    quantity2: "",
    quantity3: "Khay",
    height: 2,
    width: 5,
    length: 10,
    id: 0,
  },
  {
    categoryCode: "RAM_I",
    categoryName: "Ram Tom Binh Dinh - Loai I",
    urlImage: "No. 189, Grove St, Los Angeles",
    description:
      "Vue then ignores the extra children passed to the default slot, as it's not allowed to have both named slots and unnamed children at the same time",
    mass1Unit: "",
    mass2Unit: "",
    mass3Unit: "gram",
    mass1: 0,
    mass2: 0,
    mass3: 500,
    quantity1: "",
    quantity2: "",
    quantity3: "Khay",
    height: 2,
    width: 5,
    length: 10,
    id: 1,
  },
  {
    categoryCode: "RAM_I",
    categoryName: "Ram Tom Binh Dinh - Loai I",
    urlImage: "No. 189, Grove St, Los Angeles",
    description:
      "Vue then ignores the extra children passed to the default slot, as it's not allowed to have both named slots and unnamed children at the same time",
    mass1Unit: "",
    mass2Unit: "",
    mass3Unit: "gram",
    mass1: 0,
    mass2: 0,
    mass3: 500,
    quantity1: "",
    quantity2: "",
    quantity3: "Khay",
    height: 2,
    width: 5,
    length: 10,
    id: 2,
  },
];

const handleRowClick = (row: Category) => {
  var obj: BreadCrumb = { title: "Create Category", path: "/" };
  emit("childEvent", obj);
  router.push({ name: "category-detail", params: { id: row.id } });
};
</script>

<style lang="css" scoped>
.container-main__header {
  position: relative;
}

.header__title {
  position: absolute;
  left: 20px;
  top: -20px;
  width: 97%;
  height: 80px;
  background-color: #424242;
  border-radius: 0.8rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
