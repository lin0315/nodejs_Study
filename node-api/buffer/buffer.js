// 创建一个长度为 10 且用零填充的 Buffer
const buf1 = Buffer.alloc(10);
console.log(buf1);

// 创建一个长度为10 且用0x1 填充的 Buffer
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);
// 创建一个长度为10 且未初始化的Buffer
// 这个方法比调用 Buffer.alloc() 更快
// 但返回的Buffer 实例可能包含旧数据
// 因此需要使用 fill() 或 write() 重写
const buf3 = Buffer.allocUnsafe(10);
console.log("buf3", buf3);

// 创建一个包含 [0x1, 0x2, 0x3]的 Buffer
const buf4 = Buffer.from([1, 2, 3]);
console.log("buf4", buf4);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5 = Buffer.from("test");
console.log(buf5);

// 特殊的编码
// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer
const buf6 = Buffer.from("test", "latin1");
console.log("buf6", buf6);
