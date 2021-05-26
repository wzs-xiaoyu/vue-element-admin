import Store from "@common/js/Store.js";
export const { mapActions, mapGetters, mapMutations, mapState } = new Store({
  namespaced: true,
  state: {
    navmode: "asideMenu", //导航模式
    fixedHead: false, //固定头部
  },
  mutations: {
    changeNavMode: (state, navmode) => {
      state.navmode = navmode;
    },
    setFixedHead: (state, fixedHead) => {
      state.fixedHead = fixedHead;
    },
  },
  getters: {
    getNavMode: (state) => state.navmode,
    getFixedHead: (state) => state.fixedHead,
  },
  actions: {},
});
