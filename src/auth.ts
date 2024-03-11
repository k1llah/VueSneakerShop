import { ref } from "vue";
import { useAuthStore } from './stores/authData';
const isAuthenticated = ref(false);
const currentUser = ref<{ id: string; uuid: string } | null>(null);
const authStore = useAuthStore()
const checkAuth = () => {
  const id = authStore.id
  const uuid = authStore.uuid
  const role = authStore.role
  const prevId = ref();
  const prevUuid = ref("");
  const prevRole = ref("");
  if (id && uuid && role) {
    isAuthenticated.value = true;
    currentUser.value = { id, uuid };
  } else {
    isAuthenticated.value = false;
    currentUser.value = null;
  }
};
const checkRole = () => {
  if ("") {
  }
};
const logOut = () => {
  authStore.id = ''
  authStore.uuid = ''
  authStore.role = ''

  isAuthenticated.value = false;
  currentUser.value = null;
};

export { isAuthenticated, currentUser, checkAuth, logOut };
