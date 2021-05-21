/**
 *watermark指令
 *解决:给页面生成水印
 *基本原理:给选择器添加背景图片
 *用法: v-watermark=" {options}”
 *option:
 *@param {string} text 水印文字
 *@param {string} width 宽度
 *@param {string} textColor 文字颜色
 **/

export default (Vue) => {
  Vue.directive("watermark", (el, binding) => {
    function addwaterMarker(str, parentNode, font, textColor) {
      var can = document.createElement("canvas");
      parentNode.appendChild(can);
      can.width = 150;
      can.height = 150;
      can.style.display = "none";
      var cans = can.getContext("2d");
      // cans.rotate( -20 * Math.PI / 180)
      cans.rotate((-45 * Math.PI) / 180);
      cans.font = font || "20px Arial";
      cans.fillStyle = textColor || "rgba(153,153,153,0.2)";
      // cans.textAlign = 'center'
      // cans.textBaseline = 'MiddLe'
      // cans.fillText(str, can.width / 3, can. height / 2)
      cans.fillText(str, -70, 90, 135);
      parentNode.style.backgroundImage = "url(" + can.toDataURL("image.png") + ")";
    }
    addwaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor);
  });
};
