<template><div class="markdown-container"><p>只停留在会用的层面，这比纯理论来的更可怕
最近在阅读underscore.js的源码，过程中，发现有必要好好学习一下javascript原型链的知识。参考了不少的博客，也翻阅了《javascript高级程序设计》。由于原型链这块确实有点绕，怕自己过段时间忘了，所以趁热打铁做一下总结。</p>
<p>本文从“对象”和“函数”切入：</p>
<ol>
<li>一切（引用类型）都是对象，对象是属性的集合
这句话不用想太多，直接上例子。</li>
</ol>
<pre class="hljs"><code><span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> x);<span class="hljs-comment">// undefined</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> <span class="hljs-number">10</span>);   <span class="hljs-comment">// number</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> <span class="hljs-string">'abc'</span>); <span class="hljs-comment">// string</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> <span class="hljs-literal">true</span>);  <span class="hljs-comment">// boolean</span>

<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{});  <span class="hljs-comment">//function</span>

<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> [<span class="hljs-number">1</span>, <span class="hljs-string">'a'</span>, <span class="hljs-literal">true</span>]);  <span class="hljs-comment">//object</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> { <span class="hljs-attr">a</span>: <span class="hljs-number">10</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">20</span> });  <span class="hljs-comment">//object</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> <span class="hljs-literal">null</span>);  <span class="hljs-comment">//object</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Number</span>(<span class="hljs-number">10</span>));  <span class="hljs-comment">//object'</span>
</code></pre>
<p>可以看到数组，对象，null，以及用new Number()构造出来的内容使用 typeof操作符返回的值都是Object。放下基本类型不管，这里有一个特殊的返回值function ，那么问题来了，function 到底是啥呢，是不是对象呢。</p>
<ol start="2">
<li>函数是一种对象</li>
</ol>
<pre class="hljs"><code><span class="hljs-keyword">var</span> fn = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{ };
<span class="hljs-built_in">console</span>.log(fn <span class="hljs-keyword">instanceof</span> <span class="hljs-built_in">Object</span>);  <span class="hljs-comment">// true</span>
</code></pre>
<p>从上例可以看到，使用instanceof运算符 得到函数fn和Object之间存在关系。 借用MDN上对instanceof运算符的解释：</p>
<p>instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。</p>
<p>可以进一步确定，函数fn是对象的一种形式。如果觉得这句话莫名其妙。那么记住下面这句话：</p>
<p>函数是一种对象，但是函数却不像数组一样——你可以说数组是对象的一种，因为数组就像是对象的一个子集一样。但是函数与对象之间，却不仅仅是一种包含和被包含的关系，函数和对象之间的关系比较复杂，甚至有一点鸡生蛋蛋生鸡的逻辑。</p>
<p>举个例子加强印象：</p>
<pre class="hljs"><code><span class="hljs-keyword">var</span> fn = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{ 
    alert(<span class="hljs-string">'我是一个函数'</span>)	
};
fn.a = <span class="hljs-number">10</span>;
fn.b = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>];
fn.c = {
    <span class="hljs-attr">name</span>:<span class="hljs-string">'对象'</span>，
    value:<span class="hljs-string">'函数下的对象'</span>
}
fn.d = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{
    alert(<span class="hljs-string">'我是函数下的函数'</span>)
}
</code></pre>
<p>上例中，函数fn就被当做对象被赋值了一些属性。fn是一个属性的集合。</p>
<ol start="3">
<li>对象都是通过函数创建的
<code>var obj = new Object();</code>
这种创建对象的方式肯定见过。包括数组也是如此。</li>
</ol>
<p><code>var arr = new Array();</code>
其实可以通过 typeof操作符来说明问题。</p>
<pre class="hljs"><code><span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> (<span class="hljs-built_in">Object</span>));  <span class="hljs-comment">// function</span>
<span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">typeof</span> (<span class="hljs-built_in">Array</span>));  <span class="hljs-comment">// function</span>
</code></pre>
<p>可以看出Object和Array都是函数，而上面的对象obj和数组arr分别被这两个函数创建。</p>
<p>再来一个例子。</p>
<pre class="hljs"><code><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params"></span>)</span>{
    <span class="hljs-keyword">this</span>.name = <span class="hljs-string">'muggle'</span>,
    <span class="hljs-keyword">this</span>.job = <span class="hljs-string">'FE'</span>
    <span class="hljs-keyword">this</span>.age = <span class="hljs-number">18</span>
}
<span class="hljs-keyword">var</span> person1 = <span class="hljs-keyword">new</span> Fn();<span class="hljs-comment">//{name: "muggle", job: "FE", age: 18}</span>
</code></pre>
<ol start="4">
<li>慢慢体会
总结一下2、3两点：函数是对象的一种，对象都是通过函数创建的。。。呃。。。什么鬼？</li>
</ol>
<p>直接上图：</p>
<p>结合一下几句话：</p>
<p>每个对象都有一个__proto__属性（隐式原型），指向创建该对象的函数的prototype
每个函数都有一个属性叫做prototype。
Object.prototype确实一个特例——它的__proto__指向的是null
Function也是一个函数，函数是一种对象，也有__proto__属性。既然是函数，那么它一定是被Function创建。所以——Function是被自身创建的。所以它的__proto__指向了自身的Prototype
调用构造函数创建实例会经历一下4个步骤：
创建一个新对象
将构造函数的作用域赋给新对象（因此this就指向了这个对象）
执行构造函数中的代码（为这个新对象添加属性）
返回新对象
接来下就可以顺着这张图的每一条线慢慢体会了。</p>
<p>原型链的知识还是挺多的，即使理解了一些原理，但是想要完全掌握它还是需要在接下来的工作学习中慢慢体会。很多原理性的东西要结合了实际才会有味道。毕竟我不是理论科学家，不想纯研究理论。我也不想当无脑码农，只停留在会用的层面，这比纯理论来的更可怕。</p>
<p>主要参考：</p>
<p>http://www.cnblogs.com/wangfupeng1988/p/3977924.html https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</p>
</div></template>