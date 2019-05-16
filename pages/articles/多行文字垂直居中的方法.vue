<template><div class="markdown-container"><p><img src="http://oq6xfel71.bkt.clouddn.com/17-10-3/99153120.jpg" alt=""></p>
<p>单行文字在容器内垂直居中很简单，只要加一个line-height就可以轻松解决。但想要让多行文字垂直居中，使用line-height就很尴尬了。本文介绍如何使用display：table的方法实现文字的多行居中。</p>
<p><strong>HTML代码：</strong></p>
<pre class="hljs"><code v-pre>&lt;div class=&quot;box&quot;&gt;
	&lt;p class=&quot;text&quot;&gt;第一行文字&lt;br&gt;第二行文字&lt;br&gt;第三行文字&lt;/p&gt;
&lt;/div&gt;

</code></pre>
<p><strong>CSS代码：</strong></p>
<pre class="hljs"><code v-pre>*{margin: 0;padding: 0;color: #fff;}
.box{
	display: table;
	background-color: #105B63;
	margin: 100px auto;
	width: 500px;
	height: 500px;
	text-align: center;
	border:1px #000 solid;
}
.text{
	display: table-cell;
	vertical-align: middle;
}
</code></pre>
<p>如下图所示实现了文字的垂直居中。
<img src="http://oq6xfel71.bkt.clouddn.com/17-6-1/80320078.jpg" alt=""></p>
<p>但是在ie7中打开发现并没有生效
<img src="http://oq6xfel71.bkt.clouddn.com/17-6-1/3128923.jpg" alt="">
解决此兼容问题的方法，只能在ie浏览其中使用定位的方法。</p>
<p><strong>HTML代码：</strong></p>
<pre class="hljs"><code v-pre>&lt;div class=&quot;box&quot;&gt;
	&lt;div class=&quot;inner-box&quot;&gt;
		&lt;p class=&quot;text&quot;&gt;第一行文字&lt;br&gt;第二行文字&lt;br&gt;第三行文字&lt;/p&gt;
	&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p><strong>CSS代码：</strong></p>
<pre class="hljs"><code v-pre>*{margin: 0;padding: 0;color: #fff;}
.box{
	position:relative;
	display: table;
	background-color: #105B63;
	margin: 100px auto;
	width: 500px;
	height: 500px;
	text-align: center;
	border:1px #000 solid;
}
.inner-box{
	display: table-cell;
	vertical-align: middle;
	*position: absolute;
	*width: 100%;
	*top: 50%;
	*left: 0;
}
.inner-box p{
	*position: relative;
	*top:-50%;
}
</code></pre>
</div></template>