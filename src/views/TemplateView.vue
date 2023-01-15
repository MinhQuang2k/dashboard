<template>
  <div class="box mt-4">
    <div class="box-header d-flex justify-between align-items-center pa-4">
      <div class="title-page">Manage Video Template</div>
      <router-link to="/template/add">
        <a-button type="primary" danger>Add Video Template</a-button>
      </router-link>
    </div>
    <a-divider class="ma-0" />
    <div class="list-image py-4 px-4">
      <div
        v-for="item in [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ]"
        :key="item"
        class="item"
      >
        <a-image
          :width="'100%'"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div
          class="item-header d-flex align-items-center pl-3 font-weight-bold"
        >
          SHIP
        </div>
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
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  .btn-delete {
    position: absolute;
    bottom: 12px;
    left: 12px;
  }
  .item-header {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 40px;
    color: white;
    background: rgba(0, 0, 0, 0.6);
  }
}
</style>
