// https://www.humanbenchmark.com/tests/reactiontime/
const element = document.querySelector('.hero .test-wrapper.ng-scope>div');
let blnObserve = true;
const mouseDownEvent = document.createEvent('MouseEvent');
mouseDownEvent.initEvent('mousedown', true, true);
const oberserver = new MutationObserver((mutations) => {
  mutations.every((mutation) => {
    if (mutation.target.className.indexOf('view-go') > -1 && blnObserve) {
      element.dispatchEvent(mouseDownEvent);
      blnObserve = false;
      return false;
    }
    return true;
  });
});
const config = { attributes: true, attributeFilter: ['class'] };
oberserver.observe(ele, config);
