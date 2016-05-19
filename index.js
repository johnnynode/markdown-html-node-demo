"use strict";

const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();
const fileName = './WRITE.md';
const template = fs.readFileSync('./template.html','utf8');

fs.watchFile(fileName,{
  interval:500
},(cur,prev) => {
  fs.readFile(fileName,'utf8',(err,data) => {
    if(err) {
      return console.log(err);
    }
    let htmlStr = template.replace('{{content}}',data);
    fs.writeFile('./WRITE.html',htmlStr,'utf8',(err) => {
      if(err){
        return console.log(err);
      }
      console.log('改动，并且同步');
    })
  })
})

console.log('程序正在监听文件的变化');
