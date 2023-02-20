import useUserStore from '@/store/useUserStore';

export default function useLogout() {
  const userStore = useUserStore();

  return function logout() {
    userStore.$reset();
    localStorage.removeItem('accessToken');
  };
}
