import useUserAgent from '@/store/modules/userAgent';

function getBrowserInterfaceSize() {
  var pageWidth = window.innerWidth;
  var pageHeight = window.innerHeight;

  const userAgentStore = useUserAgent();

  if (typeof pageWidth != 'number') {
    //在标准模式下面
    if (document.compatMode == 'CSS1Compat') {
      pageWidth = document.documentElement.clientWidth;
      pageHeight = document.documentElement.clientHeight;
    } else {
      pageWidth = document.body.clientWidth;
      pageHeight = window.body.clientHeight;
    }
  }

  userAgentStore.pageHeight = pageHeight;
  userAgentStore.pageWidth = pageWidth;

  return {
    pageWidth: pageWidth,
    pageHeight: pageHeight,
  };
}

export default getBrowserInterfaceSize;
