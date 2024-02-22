import { createStore } from "harlem";

const STATE = {
  user: {},
};

export const { state, getter, mutation, action, ...store } = createStore(
  "user",
  STATE
);

export const registerUser = action("register-user", async (data, mutate) => {
  const response = await fetch(import.meta.env.VITE_API_URL + "/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();

  mutate((state) => {
    state.user = {...user};
  });
});

export const loginUser = action("login-user", async (data, mutate) => {
  const response = await fetch(
    import.meta.env.VITE_API_URL + "/api/users/login",
    {
      method: "POST",
      headers: {
        "cotent-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const user = await response.json();

  mutate((state) => {
    state.user = {...user};
  });
});
