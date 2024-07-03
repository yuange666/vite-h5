import { defineStore } from 'pinia';

const useUserAgent = defineStore('user', {
  state: () => ({
    pageWidth: 0,
    pageHeight: 0,
  }),
  actions: {},
});

export default useUserAgent;
