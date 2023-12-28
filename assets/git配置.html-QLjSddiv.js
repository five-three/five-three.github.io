import{_ as e,o as t,c as i,e as n}from"./app-K9ada_Hb.js";const a={},s=n(`<h1 id="git配置" tabindex="-1"><a class="header-anchor" href="#git配置" aria-hidden="true">#</a> git配置</h1><p>设置代理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//http || https
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看代理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --get http.proxy
git config --global --get https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>取消代理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --unset http.proxy
git config --global --unset https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[s];function d(r,c){return t(),i("div",null,l)}const g=e(a,[["render",d],["__file","git配置.html.vue"]]);export{g as default};
