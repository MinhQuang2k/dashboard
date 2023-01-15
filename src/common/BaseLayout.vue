<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <div
          class="box-logo"
          :class="collapsed ? 'box-logo-small' : 'box-logo-big'"
        >
          Video
        </div>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="template">
          <router-link to="/template">
            <file-image-outlined />
            <span>Template</span></router-link
          >
        </a-menu-item>
        <a-menu-item key="category">
          <router-link to="/category">
            <apartment-outlined /> <span>Category</span></router-link
          >
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="pa-0 px-4 layout-header">
        <div>
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
        </div>
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click.prevent>
            <a-avatar style="background-color: #f56a00">{{
              getNameAvatar(auth)
            }}</a-avatar>
          </a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
                <a @click="logOut()" class="text-logout">Logout</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content class="px-4 py-1 layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  FileImageOutlined,
  ApartmentOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, onMounted, ref } from "vue";
import { USER_INFO } from "@/const/context";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
export default defineComponent({
  components: {
    ApartmentOutlined,
    FileImageOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  data() {
    const router = useRouter();
    const route = useRoute();
    const collapsed = ref(false);
    const selectedKeys = ref([]);
    const auth = ref({});
    onMounted(() => {
      auth.value = JSON.parse(localStorage.getItem(USER_INFO));
      setselectedKeys();
    });

    const setselectedKeys = () => {
      let listRouter = ["template", "category"];
      for (let item of listRouter) {
        if (route?.path.includes(item)) {
          selectedKeys.value = [item];
          return;
        }
      }
      selectedKeys.value = ["template"];
    };

    const getNameAvatar = (data) => {
      if (data?.username) {
        return data.username.split("")[0].toUpperCase();
      }
      return;
    };

    const logOut = () => {
      localStorage.removeItem(USER_INFO);
      router.push({
        name: "login",
      });
    };

    return {
      collapsed,
      selectedKeys,
      auth,
      getNameAvatar,
      logOut,
    };
  },
});
</script>
<style lang="scss">
.layout-content {
  height: calc(100vh - 64px);
  overflow: auto;
}
.layout-header {
  background: #fff !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}
.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
}

.box-logo {
  color: white;
  border: 2px solid white;
  font-size: 23px;
  text-align: center;
  font-weight: 700;
}
.box-logo-small {
  padding: 0px 5px;
  transition: all 0.2s;
}
.box-logo-big {
  padding: 0px 44px;
  transition: all 0.2s;
}
.trigger {
  font-size: 20px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}
.text-logout {
  color: var(--pink) !important;
}

.ant-layout-sider {
  background: var(--indigo) !important;
}
.ant-menu.ant-menu-dark,
.ant-menu-dark .ant-menu-sub,
.ant-menu.ant-menu-dark .ant-menu-sub {
  background: var(--indigo) !important;
}
.ant-menu-item-selected {
  background: var(--pink) !important;
}
.ant-menu-title-content a {
  color: whitesmoke !important;
}
.ant-menu-inline .ant-menu-item {
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}
.ant-menu-inline .ant-menu-item:not(:last-child) {
  margin-top: 0px !important;
}
.ant-menu-inline > .ant-menu-item {
  height: 50px;
  line-height: 50px;
}
</style>
