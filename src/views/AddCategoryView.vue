<template>
  <div class="box mt-4">
    <div class="box-header d-flex justify-between align-items-center pa-4">
      <div class="title-page">Add Manage Categories</div>
    </div>
    <a-divider class="ma-0" />
    <a-form autocomplete="off" class="mx-4">
      <a-row class="mt-3">
        <a-col :span="8"> Category Name: </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-input />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8"> Select Image: </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-upload
              v-model:file-list="fileList"
              name="avatar"
              list-type="picture-card"
              class="avatar-uploader"
              :show-upload-list="false"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :before-upload="beforeUpload"
              @change="handleChange"
            >
              <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
              <div v-else>
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
                <div class="ant-upload-text">Upload</div>
              </div>
            </a-upload>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :offset="8">
          <a-form-item>
            <a-button type="primary" danger html-type="submit">Save</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script>
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { defineComponent, ref } from "vue";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined,
  },
  setup() {
    const fileList = ref([]);
    const loading = ref(false);
    const imageUrl = ref("");
    const handleChange = (info) => {
      console.log("info", info);
      if (info.file.status === "uploading") {
        loading.value = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (base64Url) => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }
      if (info.file.status === "error") {
        loading.value = false;
        message.error("upload error");
      }
    };
    const beforeUpload = (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 5;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    };
    return {
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload,
    };
  },
});
</script>
<style lang="scss" scoped>
.item {
  width: 100%;
  position: relative;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.24);
  .btn-delete {
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
  .item-header {
    position: absolute;
    bottom: 55px;
    left: 10px;
    color: white;
    text-shadow: 0 2px 10px black;
  }
}
</style>
