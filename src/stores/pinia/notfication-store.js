import { defineStore } from "pinia";
import { onMounted, reactive } from "vue";

const useNotificationStore = defineStore("notfication", () => {
  onMounted(() => {
    console.log("Notification Store has mounted");
  });

  const state = reactive({
    currentNotification: {
      content: "",
      type: "",
    },
    previousNotifications: [],
  });

  watch(state, (val) => {
    console.log("state from notification store has changed", val);
  });

  const setCurrentNotification = (data) => {
    resetCurrentNotification();
    state.currentNotification.content = data.content;
    state.currentNotification.type = data.type;
  };

  const resetCurrentNotification = () => {
    if(state.currentNotification.content.length){
        state.previousNotifications.push({ ...state.currentNotification });
    }
    state.currentNotification.content = "";
    state.currentNotification.type = "";
  };

  return {
    notificationState: state,
    resetCurrentNotification,
    setCurrentNotification,
  };
});
