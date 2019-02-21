---
description: muggle
date: 2019-02-21 14:09

---

# biaoti
 ```javascript
   var directory = path.join(__dirname, '../markdown/');
   var md = require('markdown-it')({
      highlight: function (str, lang) {
         if (lang && hljs.getLanguage(lang)) {
               try {
                  return '<pre class="hljs"><code>' +
                           hljs.highlight(lang, str, true).value +
                           '</code></pre>';
               } catch (__) {}
               }

         return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
   });
 ```

 这是真稳**部分呢**