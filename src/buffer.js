const buffer1 = Buffer.alloc(15);

// 申请指定大小的buffer，多余的内容将截断
// fill string
const buffer2 =Buffer.alloc(5, 'bugffer test');
// fill integer
const buffer3 =Buffer.alloc(5, 122);
// fill  buffer
const buffer4 =Buffer.alloc(5, Buffer.from('buffer test'));
// 使用base64编码
const buffer5 =Buffer.alloc(10, 'bugffer test', 'base64');
// 使用hex编码
const buffer6 =Buffer.alloc(10, Buffer.from('buffer test'), 'hex');
console.log('buffer1', buffer1);
console.log('buffer2', buffer2);
console.log('buffer3', buffer3);
console.log('buffer4', buffer4);
console.log('buffer5', buffer5);
console.log('buffer6', buffer6);

// Buffer.allocUnsafe(size)
const buffer7 =Buffer.allocUnsafe(10);
console.log('buffer7', buffer7);
// Buffer.byteLength(string[,encoding])
const len1 =Buffer.byteLength('test test', 'base64');
console.log('len1', len1);