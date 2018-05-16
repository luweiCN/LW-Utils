// 使用localstorage对搜索历史进行操作
export default {
  /**
   * 添加关键词，若关键词已经存在则把关键词移到第一个
   * @param {*} keyword 关键词
   */
  setHistoryItems(keyword) {
    keyword = keyword.trim();
    let { historyItems } = localStorage;
    if (historyItems === undefined) {
      localStorage.historyItems = keyword;
    } else {
      const onlyItem = historyItems.split('|').filter(e => e !== keyword);
      if (onlyItem.length > 0) historyItems = keyword + '|' + onlyItem.join('|');
      localStorage.historyItems = historyItems;
    }
  },
  /**
   * 清空搜索历史
   */
  clearHistory() {
    localStorage.removeItem('historyItems');
  },
  /**
   *  删除单个关键词
   * @param {*} keyword 关键词
   */
  deleteHistory(keyword) {
    let { historyItems } = localStorage;
    if (historyItems !== undefined) {
      return historyItems.split('|').filter(e => e !== keyword.trim());
    }
  },
  /**
   * 获取搜索历史，返回一个数据，即使搜素历史为空
   */
  getHistory() {
    let { historyItems } = localStorage;
    if (historyItems === undefined) {
      return [];
    } else {
      return historyItems.split('|');
    }
  }
};
