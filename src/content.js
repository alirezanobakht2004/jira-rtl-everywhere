(() => {
  const rtl = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/;
  const selectors = [
    '#description-val',
    '.description .user-content-block',
    '.action-body',
    '.comment-body',
    '.issue-data-block.comment',
    '[id^="comment-body"]'
  ];
  let timer;
  const update = () => {
    timer = undefined;
    document.querySelectorAll(selectors.join(',')).forEach((el) => {
      el.classList.toggle('jira-rtl-text', rtl.test(el.textContent || ''));
    });
  };
  const schedule = () => {
    if (!timer) timer = setTimeout(update, 80);
  };
  update();
  new MutationObserver(schedule).observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
})();
