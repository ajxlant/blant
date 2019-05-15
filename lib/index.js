#!/usr/bin/env node
const copy = require('./copy');
const argvs = process.argv().slice(2);
copy(argvs[0], argvs[1], err => {
	if (err) {
		console.log("复制文件失败了");
	} else {
		console.log("复制文件成功");
	}
});
console.log("copy()复制被执行了");