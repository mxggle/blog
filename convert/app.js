var fs = require('fs');
var path  = require('path');
var directory = path.join(__dirname, '../markdown/');
var md = require('markdown-it')();


fs.readdirSync(directory).forEach(function(file){
    var fullpath = path.join(directory, file);
    var stat = fs.statSync(fullpath);
    console.log(stat)
    var extname = path.extname(file)
    var filename = path.basename(fullpath,extname);
    fileContent = fs.readFileSync(fullpath, 'utf8');
    fileContent = md.render(fileContent) 
    var result = '<template><div>' + fileContent+ '</div></template>'
    
    fs.writeFileSync(path.join(__dirname, '../pages/articles/' + filename + '.vue'),result);
})