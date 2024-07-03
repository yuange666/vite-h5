//网络请求的baseUrl
export const baseUrl='./api';

//参数：arraybuffer：二进制流;filename:下载后的文件名
export const downloadFile = function (arraybuffer, filename) {
    if(new Uint8Array(arraybuffer)[0]===123){
      message.error('导出数据为空')
      return
    }
    let blob = new Blob([arraybuffer], {
      type: 'application/octet-stream', // 下载的文件类型格式（二进制流，不知道下载文件类型可以设置为这个）, 具体请查看HTTP Content-type 对照表
    });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.setAttribute('download', filename); // 设置下载的文件名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); //下载完成移除dom元素
    URL.revokeObjectURL(url); //释放掉blob对象
  };