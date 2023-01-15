<template>
  <div class="box mt-4">
    <div class="box-header d-flex justify-between align-items-center pa-4">
      <div class="title-page">Manage Categories</div>
      <div>
        <a-input-search
          v-model:value="value"
          placeholder="Search..."
          style="width: 200px"
          class="mr-3"
        />
        <router-link to="/category/add">
          <a-button type="primary" danger>Add Category</a-button>
        </router-link>
      </div>
    </div>
    <a-divider class="ma-0" />
    <div class="list-image py-4 px-4">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7]" :key="item" class="item">
        <a-image
          :width="'100%'"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div class="item-header font-weight-bold">SHIP</div>
        <a-button class="btn-delete" shape="circle" danger size="large"
          ><template #icon><DeleteFilled /></template
        ></a-button>
      </div>
    </div>
  </div>
</template>
<script>
import { DeleteFilled } from "@ant-design/icons-vue";
export default {
  components: {
    DeleteFilled,
  },
};
</script>
<style lang="scss" scoped>
.item {
  width: 100%;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
