// const fs = require('fs')
// const path = require('path')
// const hash = require('hash-sum')
// const LRU = require('lru-cache')
// const hljs = require('highlight.js')

// // markdown-it 插件
// const emoji = require('markdown-it-emoji')
// const anchor = require('markdown-it-anchor')
// const toc = require('markdown-it-table-of-contents')
var loaderUtils = require("loader-utils");

var md = require('markdown-it')({
  html: true,
});
// 自定义块

module.exports = function (src) {
  // console.log(src)
  let result = md.render(src);
  const { containerClass } = loaderUtils.getOptions(this);
  
  const res = (
    `<template>\n` +
    `<div class='markdown-container ${containerClass}'>${result}</div>\n` +
    `</template>\n`
  )
  return res
}