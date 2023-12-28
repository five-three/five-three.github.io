import{_ as e,r as t,o as p,c as i,a as n,d as s,b as l,e as c}from"./app-K9ada_Hb.js";const o="/assets/image-20231118223809672-XZfzmdV6.png",u="/assets/image-20231118223831765-bZZPkTYq.png",r="/assets/image-20231118225058212-qcx7Zorg.png",d="/assets/image-20231121001158472-XjGi5-qM.png",m="/assets/image-20231125210749137-ZrTzS22B.png",v="/assets/image-20231125210834660-av20aAxU.png",k={},b=n("h1",{id:"github博客搭建",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#github博客搭建","aria-hidden":"true"},"#"),s(" Github博客搭建")],-1),g={href:"https://ayusummer.github.io/DailyNotes/NoteTools/VuePress.html",target:"_blank",rel:"noopener noreferrer"},h=c('<p>本博客搭建参考了以上老兄的教程，采用了Vuepress+github page的方式进行搭建</p><p>首先按<strong>用户名.github.io</strong>的命名方式创建github仓库</p><p><img src="'+o+'" alt="image-20231118223809672"></p><p>github就会自动为你创建page博客了</p><p><img src="'+u+`" alt="image-20231118223831765"></p><p>用vscode将仓库拉取到本地</p><p>cmd切换目录到仓库目录</p><p>使用如下命令安装npnm：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm install -g pnpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用如下命令安装vue和VuePress</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pnpm add -D vue @vuepress/client@next
pnpm install -D vuepress@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑package.json,添加以下配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="image-20231118225058212"></p><p>在仓库文件夹下新建.gitignore文件，该文件的目的是使git工具不同步该文件里所列出的文件</p><p>使用以下指令可以简单运行项目：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>pnpm run docs:dev
pnpm run dos:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在docs/.vuepress目录下创建config.js:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// 站点的标题</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;VuePressTest&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 站点的描述</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;This is a blog.&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 站点配置, 设置为 /[仓库名]/</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/VuePressTest/&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果像我这样直接将站点部署到仓库上而非子路径的话，base就不用特别设置，直接&quot;/&quot;就行</p><p>根目录下新建.github/workflows/docs.yml</p><p>填入如下内容：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> docs

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 main 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
  <span class="token comment"># 手动触发部署</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">docs</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 pnpm 版本</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token comment"># 使用 pnpm 安装依赖</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>
          <span class="token comment"># 缓存 pnpm 依赖</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pnpm

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build VuePress site
        <span class="token key atrule">run</span><span class="token punctuation">:</span> pnpm docs<span class="token punctuation">:</span>build

      <span class="token comment"># 查看 workflow 的文档来获取更多信息</span>
      <span class="token comment"># @see https://github.com/crazy-max/ghaction-github-pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> crazy<span class="token punctuation">-</span>max/ghaction<span class="token punctuation">-</span>github<span class="token punctuation">-</span>pages@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 部署到 gh-pages 分支</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># 部署目录为 VuePress 的默认输出目录</span>
          <span class="token key atrule">build_dir</span><span class="token punctuation">:</span> docs/.vuepress/dist
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token comment"># @see https://docs.github.com/cn/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理论上提交并推送修改就会正常了，但是如果你是像我一样直接用vscode从github仓库拉取代码</p><p>可能会导致在actions这步通不过，报错：token未通过之类的，找了很久也没在网上找到解决方案，最后是发现token的默认premissions为只读，去设置页面改成读写权限就好了：</p><p><img src="`+d+'" alt="image-20231121001158472"></p><p>action成功执行完成后，去github的github pages调整设置如下：</p><p><img src="'+m+'" alt="image-20231125210749137"></p><p>保存，等待action执行完成后应该就能访问到个人网站了：</p><p><img src="'+v+'" alt="image-20231125210834660"></p><blockquote><p>Tips：网站主页默认为docs\\index.md，如果没有创建该文件可能会显示404 not found</p></blockquote><p>这样我们的网站雏形就搭建好了！</p><p>网站美化：</p><blockquote><p>[vuepress 网页背景-掘金 (juejin.cn)](https://juejin.cn/s/vuepress 网页背景)</p></blockquote>',34);function y(_,q){const a=t("ExternalLinkIcon");return p(),i("div",null,[b,n("blockquote",null,[n("p",null,[n("a",g,[s("VuePress | DailyNotes (ayusummer.github.io)"),l(a)])])]),h])}const f=e(k,[["render",y],["__file","Github博客搭建.html.vue"]]);export{f as default};
