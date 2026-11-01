chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;
  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const root = document.documentElement;
      const enabled = !root.classList.contains("rtl-everywhere");
      root.classList.toggle("rtl-everywhere", enabled);
      root.setAttribute("dir", enabled ? "rtl" : "ltr");
      localStorage.setItem("rtl-everywhere-enabled", String(enabled));
    }
  });
});
