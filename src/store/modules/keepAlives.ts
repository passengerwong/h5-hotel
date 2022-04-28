interface State {
  cachePages: string[];
}

export default {
  state: {
    cachePages: [],
  },
  mutation: {
    addPage(state: State, pageName: string) {
      if (!pageName || !state.cachePages.includes(pageName)) return;
      state.cachePages.push(pageName);
    },
    removePage(state: State, pageName: string) {
      // 删除缓存页面记录
      if (!pageName) return;
      const newPages = state.cachePages.filter((v) => v !== pageName);
      state.cachePages = newPages;
    },
    cleanCachePages(state: State) {
      state.cachePages = [];
    },
  },
};
