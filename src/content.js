(() => {
  const rtl = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  const selectors = [
    '#description-val',
    '#descriptionmodule',
    '.description .user-content-block',
    '.action-body',
    '.comment-body',
    '.issue-data-block.comment',
    '[id^="comment-body"]'
  ];
  const update = () => {
    document.querySelectorAll(selectors.join(',')).forEach((el) => {
      const hasRtl = rtl.test(el.textContent || '');
      el.classList.toggle('jira-rtl-text', hasRtl);
    });
  };
  update();
  new MutationObserver(update).observe(document.body, { childList: true, subtree: true, characterData: true });
})();
