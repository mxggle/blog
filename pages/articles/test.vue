<template><div class="markdown-container"><h1>biaoti</h1>
<pre class="hljs"><code>  <span class="hljs-keyword">var</span> directory = path.join(__dirname, <span class="hljs-string">'../markdown/'</span>);
  <span class="hljs-keyword">var</span> md = <span class="hljs-built_in">require</span>(<span class="hljs-string">'markdown-it'</span>)({
     <span class="hljs-attr">highlight</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">str, lang</span>) </span>{
        <span class="hljs-keyword">if</span> (lang &amp;&amp; hljs.getLanguage(lang)) {
              <span class="hljs-keyword">try</span> {
                 <span class="hljs-keyword">return</span> <span class="hljs-string">'&lt;pre class="hljs"&gt;&lt;code&gt;'</span> +
                          hljs.highlight(lang, str, <span class="hljs-literal">true</span>).value +
                          <span class="hljs-string">'&lt;/code&gt;&lt;/pre&gt;'</span>;
              } <span class="hljs-keyword">catch</span> (__) {}
              }

        <span class="hljs-keyword">return</span> <span class="hljs-string">'&lt;pre class="hljs"&gt;&lt;code&gt;'</span> + md.utils.escapeHtml(str) + <span class="hljs-string">'&lt;/code&gt;&lt;/pre&gt;'</span>;
     }
  });
</code></pre>
<p>这是真稳<strong>部分呢</strong></p>
</div></template>