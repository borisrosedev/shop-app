import { defineStore } from "pinia";
import { ref, reactive, watch, onMounted, computed } from "vue";
import { UserService } from "../services/user.service";

export const useUserStore = defineStore("user", () => {
  onMounted(() => {
    console.log("user store has mounted");
  });

  const users = ref([]);

  const usersGetter = computed(() => users.value);

  watch(users, (val) => {
    console.log("users value has just changed", val);
  });

  const getUsers = async () => {
    users.value = await UserService.getUsers();
  };

  return {
    getUsers,
    usersGetter,
  };
});
