<template>
  <div class="container-main">
    <div class="container-main__header">
      <div class="header__title">
        <span class="title-card">Condition</span>
      </div>
      <el-card>
        <el-row class="item-row row__first" :gutter="20">
          <el-col :span="8">
            <div class="item__title"><span>Provider</span></div>
            <div class="item__element" style="width: 90%">
              <el-select v-model="value4" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="item__title"><span>Category</span></div>
            <div class="item__element" style="width: 90%">
              <el-select v-model="value4" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="item__title"><span>Status</span></div>
            <div class="item__element" style="width: 90%">
              <el-select v-model="value4" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </el-col>
        </el-row>
        <el-row class="item-row">
          <el-col :span="12">
            <div class="item__title"><span>Date</span></div>
            <div class="item__element" style="width: 90%">
              <el-date-picker
                v-model="value1"
                type="date"
                :default-value="new Date(2025, 2, 20)"
              />
              <span class="item__title"> ~ </span>
              <el-date-picker
                v-model="value1"
                type="date"
                :default-value="new Date(2025, 2, 20)"
              />
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
        <el-table
          :data="tableData"
          :default-sort="{ prop: 'date', order: 'descending' }"
          style="width: 100%; cursor: pointer"
          class="row__first"
        >
          <el-table-column prop="date" label="Date" sortable width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column
            prop="address"
            label="Address"
            :formatter="formatter"
          />
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
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import type { TableColumnCtx } from "element-plus";

const value1 = ref("");
const value4 = ref();
const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
];

interface User {
  date: string;
  name: string;
  address: string;
}

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address;
};

const tableData: User[] = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Dumm",
    address: "No. 189, Grove St, Los Angeles",
  },
];
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
