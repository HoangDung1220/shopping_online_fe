<template>
  <div class="container-main">
    <div class="container-main__header">
      <div class="header__title">
        <span class="title-card">Information of Category</span>
      </div>
      <el-card>
        <el-row class="item-row row__first" :gutter="20">
          <el-col :span="8">
            <div class="item__title"><span>Category Code</span></div>
            <div class="item__element" style="width: 85%">
              <el-input v-model="value1" placeholder="Please input" />
              <el-button style="margin-left: 15px" type="primary" :icon="Search"
                >Refer</el-button
              >
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item__title"><span>Category Name</span></div>
            <div class="item__element" style="width: 70%">
              <el-input v-model="value1" placeholder="Please input" />
            </div>
          </el-col>
        </el-row>
        <el-row class="item-row" :gutter="20">
          <el-col :span="8">
            <div class="item__title"><span>Quantity1</span></div>
            <div class="item__element" style="width: 50%">
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
            <div class="item__title"><span>Quantity2</span></div>
            <div class="item__element" style="width: 50%">
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
            <div class="item__title"><span>Quantity3</span></div>
            <div class="item__element" style="width: 50%">
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
        <el-row class="item-row" :gutter="20">
          <el-col :span="8">
            <div class="item__title"><span>Mass1</span></div>
            <div class="item__element" style="width: 50%">
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
            <div class="item__title"><span>Mass2</span></div>
            <div class="item__element" style="width: 50%">
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
            <div class="item__title"><span>Mass3</span></div>
            <div class="item__element" style="width: 50%">
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
        <el-row class="item-row" :gutter="20">
          <el-col :span="8">
            <div class="item__title"><span>Height</span></div>
            <div class="item__element" style="width: 56%">
              <el-input v-model="value1" placeholder="Please input" />
              <span class="item__title">cm</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item__title"><span>Length</span></div>
            <div class="item__element" style="width: 56%">
              <el-input v-model="value1" placeholder="Please input" />
              <span class="item__title">cm</span>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item__title"><span>Width</span></div>
            <div class="item__element" style="width: 56%">
              <el-input v-model="value1" placeholder="Please input" />
              <span class="item__title">cm</span>
            </div>
          </el-col>
        </el-row>
        <el-row class="item-row">
          <el-col :span="12">
            <div class="item__title"><span>Image</span></div>
            <div class="item__element">
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </div>
          </el-col>
        </el-row>
        <el-row class="item-row">
          <el-col :span="12">
            <div class="item__title"><span>Description</span></div>
            <div class="item__element">
              <el-input
                v-model="value1"
                :autosize="{ minRows: 4, maxRows: 6 }"
                type="textarea"
                placeholder="Please input"
              />
            </div>
          </el-col>
        </el-row>

        <el-row class="item-row row__last" :gutter="20">
          <el-col :span="16" style="display: flex; justify-content: flex-start"
            ><el-button type="primary" :icon="Plus">Insert</el-button>
            <el-button type="primary" :icon="Edit">Update</el-button>
            <el-button type="primary" :icon="Refresh">Clear</el-button>
            <el-button type="danger" :icon="Delete">Delete</el-button>
          </el-col>
          <el-col :span="8" style="display: flex; justify-content: flex-end"
            ><el-button type="info" :icon="Back" size="large"
              >Back</el-button
            ></el-col
          >
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Delete,
  Download,
  Plus,
  ZoomIn,
  Edit,
  Refresh,
  Search,
  Back,
} from "@element-plus/icons-vue";
import type { UploadFile } from "element-plus";
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

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
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
