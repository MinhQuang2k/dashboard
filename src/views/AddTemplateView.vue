<template>
  <div class="box mt-4">
    <div class="box-header d-flex flex-column pa-4">
      <div class="title-page">Add Video Templates</div>
      <div class="mt-2 font-weight-bold" style="font-size: 12px">
        Note: Title & Zip file Name should be same.
      </div>
    </div>
    <a-divider class="ma-0" />
    <a-form autocomplete="off" class="mx-4">
      <a-row class="mt-3">
        <a-col :span="8"> User Name: </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-input placeholder="Uploaded by" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8"> Category: </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-select style="width: 100%"></a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8"> Total Image In templates (Count): </a-col>
        <a-col :span="8">
          <a-form-item>
            <a-input placeholder="Total Images" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">Video:</a-col>
        <a-col :span="8">
          <a-form-item>
            <a-input type="file" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">Zip:</a-col>
        <a-col :span="8">
          <a-form-item>
            <a-input type="file" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">Thumb:</a-col>
        <a-col :span="8">
          <a-form-item>
            <a-input type="file" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="8">Template JSON:</a-col>
        <a-col :span="8">
          <a-form-item>
            <a-input type="file" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col :offset="8">
          <a-form-item>
            <a-button type="primary" danger html-type="submit">Upload</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
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
