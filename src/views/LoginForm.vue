<template>
  <a-row justify="center">
    <a-col :span="5" class="auth">
      <h1 class="text-center">Login</h1>
      <a-form :model="formState" name="login" @finish="onFinish" class="mt-4">
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="Username">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            placeholder="Password"
            v-model:value="formState.password"
          >
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button
            class="mt-2 radius-button"
            type="primary"
            html-type="submit"
            block
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>
<script>
import { defineComponent, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { USER_INFO } from "@/const/context";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const router = useRouter();
    const formState = ref({
      username: "",
      password: "",
    });
    const onFinish = (values) => {
      console.log("Success:", values);
      localStorage.setItem(
        USER_INFO,
        JSON.stringify({
          username: "quang",
          token: "123",
        })
      );
      router.push({
        name: "category",
      });
    };
    return {
      formState,
      onFinish,
    };
  },
});
</script>

<style lang="scss" scoped>
.radius-button {
  :deep .ant-btn.ant-btn-primary {
    border-radius: 20px;
  }
}
</style>
