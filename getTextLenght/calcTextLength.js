// 通过charCodeAt判断字符编码
// 通过charCodeAt获取指定位置字符的Unicode编码，返回的值对应ASCII码表对应的值，0-127包含了常用的英文、数字、符号等，这些都是占一个字节长度的字符，而大于127的为占两个字节长度的字符。
function calcTextLength(text) {
  let realLength = 0;
  for (let i = 0; i < text.length; i++) {
      charCode = text.charCodeAt(i);
      if (charCode >= 0 && charCode <= 128) {
          realLength += 1;
      } else {
          realLength += 2;
      }
  }
  return realLength;
}

const textWidth1 = calcTextLength('通过charCodeAt获取指定位置字符的Unicode编码，返回的值对应ASCII码表对应的值，0-127包含了常用的英文、数字、符号等，这些都是占一个字节长度的字符，而大于127的为占两个字节长度的字符。')
console.log(textWidth1);

// 采取将双字节字符替换成“aa”的做法，取长度
function getTextWidth(text) {
  return text.replace(/[^\x00-\xff]/g,"aa").length;
};

const textWidth2 = getTextWidth('通过charCodeAt获取指定位置字符的Unicode编码，返回的值对应ASCII码表对应的值，0-127包含了常用的英文、数字、符号等，这些都是占一个字节长度的字符')
console.log(textWidth2);
