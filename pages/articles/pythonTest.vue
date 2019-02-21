<template><div class="markdown-container"><h1>基础</h1>
<ol>
<li>每一行都是一个语句，当语句以冒号:结尾时，缩进的语句视为代码块
<ul>
<li>缩进有利有弊。好处是强迫你写出格式化的代码，但没有规定缩进是几个空格还是Tab。按照约定俗成的管理，应该始终坚持使用<strong>4个空格</strong>的缩进。</li>
<li>缩进的另一个好处是强迫你写出缩进较少的代码，你会倾向于把一段很长的代码拆分成若干函数，从而得到缩进较少的代码。</li>
<li>Python程序是<strong>大小写敏感</strong>的</li>
</ul>
</li>
</ol>
<h2>数据类型和变量</h2>
<p>在Python中，能够直接处理的数据类型有以下几种（整数，浮点数，字符串)</p>
<ol>
<li>整数
<ul>
<li>Python可以处理任意大小的整数</li>
<li>十六进制用0x前缀和0-9，a-f表示（<code>0xff00</code> <code>0xa5b4c3d2</code>）</li>
<li>==整数运算永远是精确的==</li>
</ul>
</li>
<li>浮点数
<ul>
<li>对于很大或很小的浮点数，就必须用科学计数法表示，把10用e替代。1.23x10&lt;sup&gt;9&lt;/sup&gt;就是<code>1.23e9</code>或者<code>12.3e8</code></li>
</ul>
</li>
<li>字符串
<ul>
<li>
<p>可以用转义字符\来标识<code>'</code>或者<code>&quot;</code></p>
<pre class="hljs"><code>'I\'m \&quot;OK\&quot;!'
</code></pre>
</li>
<li>
<p>r''表示''内部的字符串默认不转义</p>
<pre class="hljs"><code>&gt;&gt;&gt; print('\\\t\\')
\       \
&gt;&gt;&gt; print(r'\\\t\\')
\\\t\\
</code></pre>
</li>
<li>
<p>用'''...'''的格式表示多行内容(注意...是提示符，不是代码的一部分)</p>
<pre class="hljs"><code>&gt;&gt;&gt; print('''line1
... line2
... line3''')
line1
line2
line3
</code></pre>
</li>
</ul>
</li>
<li>布尔值
<ul>
<li>布尔值可以用<code>and</code>、<code>or</code>和<code>not</code>运算</li>
</ul>
</li>
<li>空值</li>
</ol>
<ul>
<li>空值是Python里一个特殊的值，用<code>None</code>表示</li>
</ul>
<ol start="6">
<li>变量
<ul>
<li>python是动态类型语言，同一个变量可以反复赋值，而且可以是不同类型的变量。</li>
<li>创建变量时 python 解析器干了两件事情
<ul>
<li>在内存中创建了一个<code>'ABC'</code>的字符串</li>
<li>在内存中创建了一个名为<code>a</code>的变量，并把它指向<code>'ABC'</code></li>
</ul>
</li>
</ul>
</li>
<li>常量</li>
</ol>
<h2>字符串和编码</h2>
<ol>
<li>
<p>在最新的Python 3版本中，字符串是以Unicode编码的，也就是说，Python的字符串支持多语言</p>
</li>
<li>
<p>对于<strong>单个字符</strong>的编码，Python提供了ord()函数获取字符的整数表示，chr()函数把编码转换为对应的字符：</p>
<pre class="hljs"><code>&gt;&gt;&gt; ord('A')
65
&gt;&gt;&gt; ord('中')
20013
&gt;&gt;&gt; chr(66)
'B'
&gt;&gt;&gt; chr(25991)
'文
</code></pre>
</li>
<li>
<p>由于Python的字符串类型是str，在内存中以Unicode表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要把str变为以字节为单位的bytes。</p>
</li>
<li>
<p>以Unicode表示的str通过<code>encode()</code>方法可以编码为指定的bytes，<code>decode()</code>把<code>bytes</code>变成<code>str</code></p>
<pre class="hljs"><code><span class="hljs-comment"># encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-string">'ABC'</span>.encode(<span class="hljs-string">'ascii'</span>)
<span class="hljs-string">b'ABC'</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-string">'中文'</span>.encode(<span class="hljs-string">'utf-8'</span>)
<span class="hljs-string">b'\xe4\xb8\xad\xe6\x96\x87'</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-string">'中文'</span>.encode(<span class="hljs-string">'ascii'</span>)
Traceback (most recent call last):
  File <span class="hljs-string">"&lt;stdin&gt;"</span>, line <span class="hljs-number">1</span>, <span class="hljs-keyword">in</span> &lt;module&gt;
UnicodeEncodeError: <span class="hljs-string">'ascii'</span> codec can<span class="hljs-string">'t encode characters in position 0-1: ordinal not in range(128)

# decode
&gt;&gt;&gt; b'</span>\xe4\xb8\xad\xf<span class="hljs-string">f'.decode('</span>utf<span class="hljs-number">-8</span><span class="hljs-string">')
Traceback (most recent call last):
  ...
UnicodeDecodeError: '</span>utf<span class="hljs-number">-8</span><span class="hljs-string">' codec can'</span>t decode byte <span class="hljs-number">0xff</span> <span class="hljs-keyword">in</span> position <span class="hljs-number">3</span>: invalid start byte

<span class="hljs-comment"># 可以传入errors='ignore'忽略错误的字节</span>
<span class="hljs-string">b'\xe4\xb8\xad\xff'</span>.decode(<span class="hljs-string">'utf-8'</span>, errors=<span class="hljs-string">'ignore'</span>)
</code></pre>
</li>
<li>
<p>在bytes中，无法显示为ASCII字符的字节，用<code>\x##</code>显示</p>
</li>
<li>
<p><code>len()</code>计算<code>str</code>包含多少个字符，计算<code>bytes</code>包含多少字节数</p>
<pre><code> ```
 # 计算 str
 &gt;&gt;&gt; len('ABC')
 3
 &gt;&gt;&gt; len('中文')
 2
 
 # 计算 bytes
 &gt;&gt;&gt; len(b'ABC')
 3
 &gt;&gt;&gt; len(b'\xe4\xb8\xad\xe6\x96\x87')
 6
 &gt;&gt;&gt; len('中文'.encode('utf-8'))
 6
 ```
</code></pre>
</li>
<li>
<p>为了让python解释器按照UTF-8读取</p>
<ul>
<li>
<p>第一行注释是为了告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释；</p>
</li>
<li>
<p>第二行注释是为了告诉Python解释器，按照UTF-8编码读取源代码，否则，你在源代码中写的中文输出可能会有乱码。</p>
</li>
<li>
<p>申明了UTF-8编码并不意味着你的.py文件就是UTF-8编码的，必须并且要确保文本编辑器正在使用UTF-8 without BOM编码：</p>
<pre class="hljs"><code><span class="hljs-comment">#!/usr/bin/env python3</span>
<span class="hljs-comment"># -*- coding: utf-8 -*-</span>
</code></pre>
</li>
</ul>
</li>
</ol>
<p>8.格式化字符串</p>
<ul>
<li>
<p><code>%</code>运算符格式化字符串.</p>
<ul>
<li>
<p>有几个<code>%?</code>占位符，后面就跟几个变量或者值，顺序对应。</p>
</li>
<li>
<p>如果只有一个%?，括号可以省略。</p>
</li>
<li>
<p>用%%来表示一个%</p>
</li>
<li>
<p>格式化整数和浮点数还可以指定是否补0和整数与小数的位数</p>
<table>
<thead>
<tr>
<th>符</th>
<th>替换内容</th>
</tr>
</thead>
<tbody>
<tr>
<td>d</td>
<td>整数</td>
</tr>
<tr>
<td>f</td>
<td>浮点数</td>
</tr>
<tr>
<td>s</td>
<td>字符串(永远起作用，它会把任何数据类型转换为字符串)</td>
</tr>
<tr>
<td>x</td>
<td>十六进制整数</td>
</tr>
</tbody>
</table>
<pre class="hljs"><code> print('%2d-%02d' % (3, 1)) # 3-01
 print('%.2f' % 3.1415926) # 3.14			```
 
</code></pre>
</li>
</ul>
</li>
<li>
<p>字符串的format()方法格式化字符串</p>
<pre class="hljs"><code>&gt;&gt;&gt; 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
'Hello, 小明, 成绩提升了 17.1%'
</code></pre>
</li>
</ul>
<h2>list和tuple</h2>
<ol>
<li>
<p>list是一种有序的集合，可以随时添加和删除其中的元素</p>
<ul>
<li>
<p><code>len()</code>函数获得list元素的个数</p>
<pre class="hljs"><code>&gt;&gt;&gt; classmates = ['Michael', 'Bob', 'Tracy']
&gt;&gt;&gt; classmates
['Michael', 'Bob', 'Tracy']
&gt;&gt;&gt; len(classmates)
3
</code></pre>
</li>
<li>
<p>索引访问 <code>classmates = ['Michael', 'Bob', 'Tracy']</code></p>
</li>
<li>
<p>正整数索引表示从左到右</p>
<pre><code> ```
 &gt;&gt;&gt; classmates[0]
 'Michael'
 &gt;&gt;&gt; classmates[1]
 'Bob'
 &gt;&gt;&gt; classmates[3]
 Traceback (most recent call last):
   File &quot;&lt;stdin&gt;&quot;, line 1, in &lt;module&gt;
 IndexError: list index out of range
 ```
</code></pre>
</li>
<li>
<p>负整数索引表示从右到左</p>
<pre><code> ```
 &gt;&gt;&gt; classmates[-1]
 'Tracy'
 &gt;&gt;&gt; classmates[-2]
 'Bob'
 &gt;&gt;&gt; classmates[-3]
 'Michael'
 ```
</code></pre>
</li>
<li>
<p><code>append()</code>追加元素</p>
<pre class="hljs"><code>&gt;&gt;&gt; classmates.append('Adam')
&gt;&gt;&gt; classmates
['Michael', 'Bob', 'Tracy', 'Adam']
</code></pre>
</li>
<li>
<p><code>insert()</code>指定位置插入元素</p>
<pre class="hljs"><code>&gt;&gt;&gt; classmates.insert(1, 'Jack')
&gt;&gt;&gt; classmates
['Michael', 'Jack', 'Bob', 'Tracy', 'Adam']
</code></pre>
</li>
<li>
<p><code>pop()</code>删除list末尾元素，<code>pop(i)</code>删除指定索引元素(返回被删除元素)</p>
<pre class="hljs"><code>&gt;&gt;&gt; classmates.pop()
'Adam'
&gt;&gt;&gt; classmates
['Michael', 'Jack', 'Bob', 'Tracy']

&gt;&gt;&gt; classmates.pop(1)
'Jack'
&gt;&gt;&gt; classmates
['Michael', 'Bob', 'Tracy']
</code></pre>
</li>
</ul>
</li>
<li>
<p>tuple是另一种有序列表叫元组</p>
<pre class="hljs"><code>&gt;&gt;&gt; classmates = ('Michael', 'Bob', 'Tracy')
</code></pre>
<ul>
<li>
<p>只有1个元素的tuple定义时必须加一个逗号<code>,</code>，来消除歧义</p>
<pre class="hljs"><code>&gt;&gt;&gt; t = (1,)
&gt;&gt;&gt; t
(1,)
</code></pre>
</li>
</ul>
</li>
</ol>
<h2>条件判断</h2>
<pre class="hljs"><code># 列1
age = 20
if age &gt;= 6:
    print('teenager')
elif age &gt;= 18:
    print('adult')
else:
    print('kid')
# 结果为 adult

# 列2
s = input('birth: ')
birth = int(s)
if birth &lt; 2000:
    print('00前')
else:
    print('00后')
int(s)
</code></pre>
<h2>循环</h2>
<ol>
<li>
<p><code>for...in</code> 循环</p>
<pre class="hljs"><code>names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
</code></pre>
</li>
<li>
<p><code>while</code> 循环</p>
<pre class="hljs"><code>sum = 0
n = 99
while n &gt; 0:
    sum = sum + n
    n = n - 2
print(sum)

</code></pre>
</li>
</ol>
<p><code>break</code>语句可以在循环过程中直接退出循环，而<code>continue</code>语句可以提前结束本轮循环，并直接开始下一轮循环。这两个语句通常都必须配合if语句使用</p>
<p>不要滥用<code>break</code>和<code>continue</code>语句。break和continue会造成代码执行逻辑分叉过多，容易出错。大多数循环并不需要用到<code>break</code>和<code>continue</code>语句</p>
<h2><code>dict</code>和<code>set</code></h2>
<ol>
<li>
<p>dict</p>
<ol>
<li>
<p>Python内置了字典：dict的支持,使用键-值（key-value）存储，具有极快的查找速度</p>
<pre class="hljs"><code>&gt;&gt;&gt; d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
&gt;&gt;&gt; d['Michael']
95

# 多次对一个key放入value，后面的值会把前面的值冲掉
&gt;&gt;&gt; d['Jack'] = 90
&gt;&gt;&gt; d['Jack']
90
&gt;&gt;&gt; d['Jack'] = 88
&gt;&gt;&gt; d['Jack']
88
</code></pre>
</li>
<li>
<p>如果key不存在，dict就会报错,避免key不存在的错误的两种方法：</p>
<ul>
<li>
<p>通过<code>in</code>判断</p>
<pre class="hljs"><code>&gt;&gt;&gt; 'Thomas' in d
False
</code></pre>
</li>
<li>
<p>通过dict提供的get()方法，如果key不存在，可以返回None，或者自己指定的value：</p>
<pre class="hljs"><code>&gt;&gt;&gt; d.get('Thomas')
&gt;&gt;&gt; d.get('Thomas', -1)
-1
</code></pre>
<p>注意：返回None的时候Python的交互环境不显示结果。</p>
</li>
</ul>
</li>
<li>
<p>删除元素</p>
<pre class="hljs"><code>&gt;&gt;&gt; d.pop('Bob')
75
&gt;&gt;&gt; d
{'Michael': 95, 'Tracy': 85}
</code></pre>
</li>
<li>
<p>对比<code>list</code></p>
<table>
<thead>
<tr>
<th>list</th>
<th style="text-align:right">dict</th>
</tr>
</thead>
<tbody>
<tr>
<td>查找和插入的时间随着元素的增加而增加</td>
<td style="text-align:right">查找和插入的速度极快，不会随着key的增加而变慢</td>
</tr>
<tr>
<td>需要占用大量的内存，内存浪费多</td>
<td style="text-align:right">占用空间小，浪费内存很少</td>
</tr>
</tbody>
</table>
</li>
</ol>
<p>所以，dict是用空间来换取时间的一种方法。</p>
</li>
<li>
<p>set
set和dict类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在set中，没有重复的key</p>
</li>
</ol>
<ul>
<li>
<p>要创建一个set，需要提供一个list作为输入集合：</p>
<pre class="hljs"><code>&gt;&gt;&gt; s = set([1, 1, 2, 2, 3, 3])
&gt;&gt;&gt; s
{1, 2, 3}
</code></pre>
</li>
<li>
<p><code>add(key)</code> 添加元素，<code>remove(key)</code>删除元素</p>
</li>
<li>
<p>set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作：</p>
<pre><code> ```
 &gt;&gt;&gt; s1 = set([1, 2, 3])
 &gt;&gt;&gt; s2 = set([2, 3, 4])
 &gt;&gt;&gt; s1 &amp; s2
 {2, 3}
 &gt;&gt;&gt; s1 | s2
 {1, 2, 3, 4}
 ```
</code></pre>
</li>
</ul>
<h1>函数</h1>
<h2>调用函数</h2>
<ol>
<li>
<p><a href="http://docs.python.org/3/library/functions.html#abs">python内置函数</a></p>
</li>
<li>
<p>交互式命令行通过<code>help(abs)</code>查看<code>abs</code>函数的帮助信息</p>
</li>
<li>
<p>报错情况</p>
<ul>
<li>调用函数的时候，如果传入的参数数量不对，会报<code>TypeError</code>的错误</li>
<li>但参数类型不能被函数所接受，报<code>TypeError</code>的错误</li>
</ul>
</li>
<li>
<p>函数名其实就是指向一个函数对象的引用</p>
<pre class="hljs"><code>&gt;&gt;&gt; a = abs # 变量a指向abs函数
&gt;&gt;&gt; a(-1) # 所以也可以通过a调用abs函数
1
</code></pre>
</li>
</ol>
<h2>定义函数</h2>
<ol>
<li>
<p>使用<code>def</code>语句定义</p>
<pre class="hljs"><code>def my_abs(x):
    if x &gt;= 0:
        return x
    else:
        return -x
</code></pre>
</li>
<li>
<p>如果没有<code>return</code>语句，函数执行完毕后也会返回结果，只是结果为<code>None</code>。<code>return None</code>可以简写为<code>return</code>。</p>
</li>
<li>
<p>如果想定义一个什么事也不做的空函数，可以用<code>pass</code>语句</p>
<pre class="hljs"><code>def nop():
pass
</code></pre>
</li>
<li>
<p>函数可以同时返回多个值，但其实就是一个<code>tuple</code></p>
</li>
</ol>
<h2>函数参数</h2>
<ol>
<li>
<p>默认参数</p>
<pre class="hljs"><code>def power(x, n=2):
    s = 1
    while n &gt; 0:
        n = n - 1
        s = s * x
    return s
</code></pre>
</li>
</ol>
<p>定义默认参数要牢记一点：默认参数必须指向不变对象！</p>
<pre><code>```
def add_end(L=[]):
	L.append('END')
	return L
	
&gt;&gt;&gt; add_end()
['END']
&gt;&gt;&gt; add_end()
['END','END']

def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L
```
</code></pre>
<ol start="2">
<li>
<p>可变参数(就是传入的参数个数是可变的)</p>
<pre class="hljs"><code>def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
# Python允许你在list或tuple前面加一个*号，把list或tuple的元素变成可变参数传进去
&gt;&gt;&gt; nums = [1, 2, 3]
&gt;&gt;&gt; calc(*nums)
14
</code></pre>
</li>
<li>
<p>关键字参数（关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个<code>dict</code>）</p>
<pre class="hljs"><code>def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)
    
&gt;&gt;&gt; person('Michael', 30)
name: Michael age: 30 other: {}

&gt;&gt;&gt; person('Bob', 35, city='Beijing')
name: Bob age: 35 other: {'city': 'Beijing'}
&gt;&gt;&gt; person('Adam', 45, gender='M', job='Engineer')
name: Adam age: 45 other: {'gender': 'M', 'job': 'Engineer'}


&gt;&gt;&gt; extra = {'city': 'Beijing', 'job': 'Engineer'}
&gt;&gt;&gt; person('Jack', 24, **extra)
name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}

</code></pre>
<p><code>**extra</code>表示把<code>extra</code>这个<code>dict</code>的所有<code>key-value</code>用关键字参数传入到函数的<code>**kw</code>参数，<code>kw</code>将获得一个<code>dict</code>，注意<code>kw</code>获得的<code>dict</code>是<code>extra</code>的一份拷贝，对kw的改动不会影响到函数外的<code>extra</code></p>
</li>
<li>
<p>命名关键字参数</p>
<pre class="hljs"><code>def person(name, age, *, city, job):
    print(name, age, city, job)
</code></pre>
</li>
</ol>
</div></template>