export const createTabs = (url: string) => {
  void chrome.tabs.create({ url })
}
