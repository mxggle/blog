var fs = require('fs');
var fm = require('front-matter');
var path  = require('path');
var hljs = require('highlight.js'); // https://highlightjs.org/
var directory = path.join(__dirname, './markdown/');
var md = require('markdown-it')({
    highlight: function (str, lang) {
		// code 中加入 v-pre 指令忽略代码片段中的mustache 语法等
		// https://cn.vuejs.org/v2/api/#v-pre
		if (lang && hljs.getLanguage(lang)) {
			try {
				return '<pre class="hljs"><code v-pre>' +
					hljs.highlight(lang, str, true).value +
					'</code></pre>';
				} catch (__) {}
			}
		return '<pre class="hljs"><code v-pre>' + md.utils.escapeHtml(str) + '</code></pre>';
	}
});
var attrList = [];

deleteFile(path.join(__dirname, './pages/articles/'))

fs.readdirSync(directory).forEach(function(file){
	var sourcePath = path.join(directory, file);
	// var stat = fs.statSync(sourcePath);
	var extname = path.extname(file)
	
	if(extname === '.md'){
		var filename = path.basename(sourcePath,extname);
		var data = fs.readFileSync(sourcePath, 'utf8');
	
		var afterFm = fm(data);
		var attributes = afterFm.attributes;
		attributes.title = filename;
		attrList.push(attributes)
		var body = md.render(afterFm.body);
		
		var result = '<template><div class="markdown-container">'+body+'</div></template>';
	
		fs.writeFileSync(path.join(__dirname,'./api/attributes.json'),JSON.stringify(attrList));
		fs.writeFileSync(path.join(__dirname, './pages/articles/' + filename + '.vue'),result);
	}
})

/**
 * 删除文件功能
 * @param  {String} url  文件路径，绝对路径
 * @param  {deleteCurrent} Boolean  是否删除当前文件夹
 * @return {Null}   
 */
function deleteFile(url,deleteCurrent){
	var _deleteCurrent = deleteCurrent || false;
	var files = [];
			
	if( fs.existsSync(url) ) {  //判断给定的路径是否存在
					
		files = fs.readdirSync(url);   //返回文件和子目录的数组
		files.forEach(function(file,index){
			var curPath = path.join(url,file);
					
			if(fs.statSync(curPath).isDirectory()) { //同步读取文件夹文件，如果是文件夹，则函数回调
				deleteDir(curPath);
			} else {    
				fs.unlinkSync(curPath);    //是指定文件，则删除
			}
					
		});
				
		_deleteCurrent && fs.rmdirSync(url); //清除文件夹
	}else{
		console.log("给定的路径不存在！");
	}

}