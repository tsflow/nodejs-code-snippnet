new Buffer废弃

#### 创建Buffer对象的两种方法
##### Buffer.alloc
``` javascript
    Buffer.alloc(size[, fill[, encoding]])
```
申请size大小字节的空间，
fill合法值为：
- string 字符串
- buffer 接受另一个buffer对象
- integer  数值
- Uint8Array

encoding为字符编码，默认为utf8，encoding可选值为(字符串编码)
- utf8
- base64
- ascii
- utf16le
- ucs2
- binary
- hex
- latin1

##### Buffer.allocUnsafe(size)
```javascript
Buffer.allocUnsafe(size)
```
创建后的buffer中内容是未知的

##### 计算字节长度
```javascript
    Buffer.byteLength(string[,encoding])
```