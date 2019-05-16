<template><div class="markdown-container"><p><img src="http://oq6xfel71.bkt.clouddn.com/17-10-3/77941060.jpg" alt=""></p>
<p>&lt;center&gt; &lt;font size=4&gt;配置不能同步？每次都是最熟悉的陌生人&lt;/font&gt;&lt;/center &gt;</p>
<p>Atom这么多的自定义内容，万一哪天电脑一睡不醒，和自己磨合了很久的自定义内容也就一睡不醒了。本文就来介绍一下如何将Atom的配置同步到Github上。
&lt;!-- more --&gt;</p>
<h4>1、安装sync-settings插件</h4>
<ul>
<li>命令行安装: <code>$ apm install sync-settings</code></li>
<li>设置中心: 搜索<code>sync-settings</code></li>
</ul>
<blockquote>
<p>在通过命令行安装的时候，windows用户需要配置一下环境变量。
将C:\Users\Administrator\AppData\Local\atom\bin放入系统变量的path中。</p>
</blockquote>
<p>打开CMD/bash切换目录到atom的插件目录执行</p>
<pre><code>$ cd ~/.atom/packages
</code></pre>
<p>使用</p>
<pre><code>$ apm install sync-settings
</code></pre>
<p>安静地等它安装完成吧，最好开个代理再安装，不然可能会很慢。</p>
<h4>2、配置插件</h4>
<p>安装完成后，点击插件进入插件配置页面
<img src="http://oq6xfel71.bkt.clouddn.com/17-5-19/81516818-file_1495205135716_3890.png" alt=""></p>
<p>如图所示分别输入Person Access Token和Gist Id(下面勾选的内容是你要同步的内容)</p>
<h5>获取Person Access Token：</h5>
<ol>
<li>登录github，点击头像&gt;Settings，选择侧边栏中的Person Access Token。</li>
<li>配置好后点击创建按钮（由于我已经配置过，所以这里的按钮是update。下面的选项可以按需选择，这次记得要选中gist）</li>
<li>生成的Token序列最好记一下，下次在另一台电脑上获取备份配置的时候需要用到。不记也没关系， 可以重新生成。
<img src="http://oq6xfel71.bkt.clouddn.com/17-5-19/28127175-file_1495205833776_143a1.png" alt=""></li>
<li>创建后会有生成token 序列，将他复制到sync-settings插件设置的Person Access Token输入框中。</li>
</ol>
<h5>获取Gist Id：</h5>
<ol>
<li>在github中创建一个gist，如图所示，点击生成之后将生成的gistId复制到sync-settings插件设置的gist id输入框中。
<img src="http://oq6xfel71.bkt.clouddn.com/17-5-19/66274249-file_1495206602160_ce12.png" alt=""></li>
<li>在另一台电脑上想要获取这个值，只需找到这个gist配置文件，点开后，浏览器地址栏后面的一串值就是gist id。
<img src="http://oq6xfel71.bkt.clouddn.com/17-5-19/50195866-file_1495207478799_16ee5.png" alt=""></li>
</ol>
<h4>3、备份</h4>
<p>打开Atom <code>Ctrl + Shift + P</code> 输入sync，就会出现一下几个选项，选择<code>Backup</code>即开始备份。
<img src="http://oq6xfel71.bkt.clouddn.com/17-5-19/99114845-file_1495207600356_df3.png" alt=""></p>
<ul>
<li>sync-settings:backup 备份设置</li>
<li>sync-settings:restore 复原备份</li>
<li>sync-settings:view-backup 查看备份</li>
<li>sync-settings:check-backup 查看是否是最新的备份</li>
<li>sync-settings:fork fork配置</li>
</ul>
</div></template>