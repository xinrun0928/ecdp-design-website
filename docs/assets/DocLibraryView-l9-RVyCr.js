import{G as h,j as M,L as o,M as a,P as c,a0 as l,W as q,v as S,F as D,ae as w,S as L,R as Q,O as N,Y as j,$ as T,Z as x,aB as v,aA as B,l as H,n as F,e as G,_ as f,ac as W,c as I,az as Z}from"./vue-vendor-CkCmkeKr.js";import{b as V,t as K,al as tt,aL as et,n as X,e as dt,aM as ot,aN as nt,an as ct,k as at,l as U,q as z,j as Y,a as st,x as rt,h as lt,r as it}from"./element-plus-Bv9swNX-.js";import{_ as P,e as J,f as pt,g as ut,h as gt,d as ht}from"./index-BcPEOHrS.js";import"./echarts-D5HcNVqP.js";const bt={class:"doc-directory"},vt={class:"doc-directory__head"},mt={class:"doc-directory__body"},yt=["onClick"],St={class:"group-name"},qt={class:"group-count"},Tt=["onClick"],_t={class:"item-title"},Et={key:0,class:"doc-directory__empty"},Rt=h({__name:"DocDirectory",props:{groups:{},activeDocId:{default:void 0}},emits:["select"],setup(n,{emit:s}){const t=n,k=s,m=M(new Set(t.groups.map(b=>b.id)));function R(b){const p=new Set(m.value);p.has(b)?p.delete(b):p.add(b),m.value=p}return(b,p)=>{const _=V;return o(),a("aside",bt,[c("div",vt,[l(_,{size:15},{default:q(()=>[l(S(K))]),_:1}),p[0]||(p[0]=c("span",null,"文档目录",-1))]),c("div",mt,[(o(!0),a(D,null,w(n.groups,u=>(o(),a("div",{key:u.id,class:"doc-directory__group"},[c("button",{class:"doc-directory__group-row",onClick:y=>R(u.id)},[l(_,{class:L(["group-caret",{"is-open":m.value.has(u.id)}]),size:12},{default:q(()=>[l(S(tt))]),_:1},8,["class"]),c("span",{class:"group-icon",style:Q({background:u.color})},[l(_,{size:12},{default:q(()=>[(o(),N(j(u.icon)))]),_:2},1024)],4),c("span",St,T(u.name),1),c("span",qt,T(u.docs.length),1)],8,yt),m.value.has(u.id)?(o(!0),a(D,{key:0},w(u.docs,y=>(o(),a("button",{key:y.id,class:L(["doc-directory__item",{"is-active":y.id===n.activeDocId}]),onClick:A=>k("select",y.id)},[p[1]||(p[1]=c("span",{class:"item-dot"},null,-1)),c("span",_t,T(y.title),1),y.id===n.activeDocId?(o(),N(_,{key:0,class:"item-check",size:13},{default:q(()=>[l(S(et))]),_:1})):x("",!0)],10,Tt))),128)):x("",!0)]))),128)),n.groups.length===0?(o(),a("div",Et,"暂无文档")):x("",!0)])])}}}),kt=P(Rt,[["__scopeId","data-v-ba221680"]]),ft={class:"doc-article"},It=h({__name:"FrontendMonorepoDoc",setup(n){return(s,t)=>(o(),a("article",ft,[...t[0]||(t[0]=[v(`<blockquote><p>⚠️ <strong>历史归档</strong>：本篇不再维护；现行规范以 根 AGENTS.md 与各包 README 为准。</p></blockquote><blockquote><p><strong>文档版本</strong>: v1.0　　<strong>更新日期</strong>: 2026-09-26　　<strong>适用范围</strong>: ecdp-design 全体前端开发人员</p></blockquote><p>本文定义 ecdp-design 仓库的工程拓扑、依赖边界、命名与端口规划、命令工作流及协作约束，是前端工程侧的顶层规范。日常编码细则见《Pro 组件体系与页面模板规范》等姊妹篇。</p><h2 id="一仓库拓扑">一、仓库拓扑</h2><p>仓库采用 pnpm workspace 的 monorepo 形态，分为两层：</p><ul><li><strong>应用层 <code>apps/</code></strong>：可独立 dev / build / 部署的子应用，互不依赖</li><li><strong>共享层 <code>packages/</code></strong>：源码级 workspace 包（无构建产物），是跨应用的单一事实源</li></ul><div class="doc-table-wrap"><table><thead><tr><th>应用</th><th>缩写</th><th>端口</th><th>部署路径</th><th>定位</th></tr></thead><tbody><tr><td>portal</td><td>—</td><td>5179</td><td><code>/</code></td><td>统一门户入口 + SSO 签发</td></tr><tr><td>upms-web</td><td>UPMS</td><td>5191</td><td><code>/upms/</code></td><td>运营中心管理平台</td></tr><tr><td>ecdp-web</td><td>ECDP</td><td>5203</td><td><code>/ecdp/</code></td><td>应急指挥调度工程（主力应用）</td></tr><tr><td>rnws-web</td><td>RNWS</td><td>5215</td><td><code>/rnws/</code></td><td>路网监测预警系统</td></tr><tr><td>fhis-web</td><td>FHIS</td><td>5227</td><td><code>/fhis/</code></td><td>汛期公路巡查系统</td></tr><tr><td>playground</td><td>—</td><td>5239</td><td><code>/playground/</code></td><td>共享组件演练场（免登录）</td></tr><tr><td>dcms-web</td><td>DCMS</td><td>5251</td><td><code>/docs/</code></td><td>文档中心（文档站点形态）</td></tr></tbody></table></div><p>共享包共 5 个：<code>share-components</code>（Pro 组件 / 布局 / 展示 / 业务 / workflow / forms / charts）、<code>share-utils</code>（工具 / composables / 路由派生 / 工作流机制层 / 公共类型）、<code>share-enums</code>（跨应用枚举）、<code>share-basic</code>（NotFound + Vite 配置模板 + 主题色中心）、<code>share-mocks</code>（跨应用基础字典）。</p><h2 id="二依赖方向与边界">二、依赖方向与边界</h2><p>依赖方向为单向，<strong>禁止反向</strong>：</p><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>share-components ──→ share-utils
    share-enums      ──→ share-utils
    share-mocks      ──→ share-enums + share-utils
    apps/*           ──→ share-*（按需）
    </code></pre></div><p>工程边界铁律：</p><ol><li><code>share-utils</code> 不得依赖 <code>share-components</code>，不得出现 <code>.vue</code> 组件依赖</li><li>共享包不得依赖 <code>apps/*</code>、业务 Mock、业务类型或 <code>@/</code> 别名</li><li>应用内<strong>禁止创建</strong> <code>src/components/</code>、<code>src/utils/</code> 目录（避免与共享层语义混淆）；应用私有组件放 <code>src/widgets/</code>，业务绑定 composables 放 <code>src/composables/</code></li><li>应用之间禁止互相 import；跨应用复用一律下沉共享包（第二消费方出现时再上收）</li><li>大屏依赖 <code>echarts</code> 由 share-utils 以 peerDependency 声明，含大屏的应用自行声明依赖</li></ol><h2 id="三应用命名与端口规划">三、应用命名与端口规划</h2><ul><li>目录与包名 = 系统全称英文逐词首字母缩写（<strong>4 位</strong>）+ 端后缀：PC Web <code>-web</code>、移动端 <code>-mobile</code>、平台级无端形态不带后缀（portal / playground）</li><li>业务编码与目录命名解耦：后端约定编码（<code>ROAD_NETWORK</code>、<code>flood:</code> 前缀等）不随目录重命名变更</li><li>应用内路由前缀（如 <code>/road/overview</code>）与部署前缀（<code>/rnws/</code>）无关，禁止混淆</li><li>端口规划：<strong>步进 12、PC 用奇数、应用间预留 5+ 间隙</strong>，每个应用的下一偶数预留给移动端（如 5179 / 5180）</li></ul><p>新增应用按「复制最新应用样板 → 改包名 / 端口 / 标题 → 重写业务目录 → 根 package.json 加脚本 → portal 注册入口 → deploy.yml 加构建拷贝」的固定清单执行，详见各应用 README 的「新增应用的步骤」。</p><h2 id="四命令与工作流">四、命令与工作流</h2><div class="doc-table-wrap"><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>pnpm dev:&lt;app&gt;</code></td><td>启动单个应用（<code>dev:all</code> 并行全部）</td></tr><tr><td><code>pnpm build:&lt;app&gt;</code></td><td>生产构建（<code>base</code> 由 <code>VITE_BASE</code> 决定）</td></tr><tr><td><code>pnpm typecheck</code></td><td>全量类型检查（<code>pnpm -r</code>，vue-tsc -b）</td></tr><tr><td><code>pnpm typecheck:ecdp</code></td><td>单应用类型检查</td></tr><tr><td><code>pnpm clean:node-modules</code></td><td>二次确认清理 node_modules（不动 lockfile 与缓存）</td></tr></tbody></table></div><p>两条硬性工作流约定：</p><ol><li><strong><code>build</code> 只转译不校验类型</strong>，禁止用 build 代替 typecheck；交付前必须 <code>pnpm typecheck</code> 全绿</li><li><strong>共享层（packages/）改动后必须跑一次 <code>pnpm typecheck:ecdp</code></strong>——共享包错误会在所有引用它的应用中暴露</li></ol><p>工程工具约束：项目不引入 ESLint / Prettier / husky / lint-staged / commitlint 等格式化与 Git hooks 工具，代码风格靠规范约定与自查（见 §10 检查清单）。</p><h2 id="五提交与协作约束">五、提交与协作约束</h2><ul><li>提交按功能点分批：一个功能点 = 一个提交，禁止混合提交</li><li>Commit Message 遵循 <code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;</code>，scope 优先用应用 / 包名（<code>feat(duty)</code>、<code>feat(utils)</code>），跨域工程改动用 <code>global</code></li><li>AI 协作：修改前必读目标文件；禁止 AI 直接运行 <code>pnpm dev</code>；修改本规范文档时同步更新索引指向</li></ul>`,23)])]))}}),Mt={class:"doc-article"},At=h({__name:"FrontendRouterDoc",setup(n){return(s,t)=>(o(),a("article",Mt,[...t[0]||(t[0]=[v(`<blockquote><p>⚠️ <strong>历史归档</strong>：本篇不再维护；现行规范以 根 AGENTS.md 与各包 README 为准。</p></blockquote><blockquote><p><strong>文档版本</strong>: v1.0　　<strong>更新日期</strong>: 2026-09-26　　<strong>适用范围</strong>: 全部子应用</p></blockquote><p>本文定义各子应用的路由组织、菜单派生、登录守卫与 SSO 桥接规范。核心原则只有一条：<strong>路由是唯一事实源</strong>——菜单、面包屑、标签页全部由路由 meta 派生，禁止任何形式的菜单独立配置文件。</p><h2 id="一路由模式与分层">一、路由模式与分层</h2><ul><li>路由默认 <strong>hash 模式</strong>（<code>VITE_ROUTER_MODE</code> 可切 history），hash 模式在静态部署下免 nginx 回退配置</li><li>每个子系统一个路由文件：<code>src/router/modules/{subsystem}.ts</code>，统一挂 <code>BasicLayout</code>（或应用自有壳）</li><li>路由分层注册，顺序即匹配优先级：</li></ul><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>routes: [...authRoutes, ...extensionRoutes, ...moduleRoutes, ...legacyRoutes, forbiddenRoute, notFoundRoute]
      ↓
    authRoutes      免登录认证页（meta.public: true，如 /login）
    moduleRoutes    八个核心模块（按序引入）
    forbiddenRoute  /403
    notFoundRoute   /:pathMatch(.*)* 404 兜底（@share-basic/NotFound，必须注册在最后）
    </code></pre></div><ul><li>路由 <code>name</code> 用大驼峰（<code>DutySchedule</code>），path 用小写连字符（<code>/modules/duty/schedule</code>）</li><li>文档站点等无侧边栏形态的应用可用自定义壳（如 dcms-web 的 DocLayout），但分层与兜底约定不变</li></ul><h2 id="二菜单由路由-meta-派生">二、菜单由路由 meta 派生</h2><p><code>deriveMenus</code>（share-utils/router-kit）从当前路由树自动生成侧边栏菜单，<strong>不存在、也不允许存在菜单配置文件</strong>。meta 字段定义：</p><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>string</td><td>页面标题（侧边栏 / 标签页 / 面包屑共用）；声明 title 的子路由即菜单项</td></tr><tr><td><code>icon</code></td><td>string</td><td>EP 图标名，经 <code>src/iconMap.ts</code> 白名单按需注册</td></tr><tr><td><code>status</code></td><td><code>&#39;done&#39; | &#39;doing&#39; | &#39;designing&#39; | &#39;todo&#39;</code></td><td>页面开发状态（进度统计用，默认 todo）</td></tr><tr><td><code>group</code></td><td>string</td><td>分组标题：每组首个子路由声明，后续子项延续当前分组</td></tr><tr><td><code>menu</code></td><td><code>false</code></td><td>不出现在侧边栏（仅 URL 直达）</td></tr><tr><td><code>percent</code></td><td>number</td><td>手动完成百分比，覆盖自动统计</td></tr><tr><td><code>subsystem</code></td><td>string</td><td>所属子系统编码（根路由使用）</td></tr></tbody></table></div><p>子系统需要按角色划分多套菜单时，通过 <code>BasicLayout</code> 的 <code>perspectives</code> prop 启用视角切换：不传 = 不显示（向后兼容）；≥2 项 = header 显示视角 tabs，sidebar 按 <code>groups</code> 过滤；同名分组可用可选字段 <code>pathPrefix</code> / <code>excludePathPrefix</code> 按路径前缀区分（如 upms 套餐版 / 全局版）；无 <code>group</code> 的菜单不受视角过滤影响。</p><h2 id="三登录守卫与-sso">三、登录守卫与 SSO</h2><p>全局守卫的标准形态（鉴权开关由 <code>VITE_AUTH_ENABLED</code> 控制）：</p><div class="code-block"><div class="code-head"><span class="code-lang">ts</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-ts">const AUTH_ENABLED = import.meta.env.VITE_AUTH_ENABLED !== &#39;false&#39;
    
    router.beforeEach((to, _from, next) =&gt; {
      if (!AUTH_ENABLED) { next(); return }
      // ① 门户来路：消费 ?from=portal 凭据写入本应用 login_info（必须在 public 检查前）
      if (to.query.from === &#39;portal&#39;) { /* readPortalCredentialFromQuery → setLoginInfo → clearToken → 清 URL */ }
      // ② 公共路由放行
      if (to.matched.some(record =&gt; record.meta.public === true)) { next(); return }
      // ③ SSO 票据桥接：门户已登录且本应用无 token 时自动签发
      if (!auth.getToken() &amp;&amp; getSsoTicket()) auth.setToken(\`sso_\${Date.now()}\`)
      // ④ 仍无 token → 登录页并携带 redirect
      if (!auth.getToken()) { next({ path: &#39;/login&#39;, query: { redirect: to.fullPath } }); return }
      next()
    })
    </code></pre></div><p>SSO 拓扑要点：</p><ul><li>portal 登录成功签发全局票据（localStorage: <code>sso_token</code> / <code>sso_user</code>），子系统守卫检测到票据即免登桥接</li><li><strong>登录态按前缀隔离</strong>：每个应用经 <code>createAuthStorage(prefix)</code> 使用独立前缀（<code>portal_</code> / <code>ecdp_</code> / <code>flood_</code> / <code>road_</code> / <code>upms_</code> / <code>docs_</code>），互不相通</li><li>任一子系统退出时同步 <code>clearSsoTicket()</code> 结束整个门户会话（main.ts <code>provide(SSO_CLEAR_INJECTION_KEY, ...)</code>）</li><li>跨域部署经 URL query 桥接凭据，<strong>真实项目禁止 URL 携带密码</strong>（演示项目本地专用）</li></ul><p><code>VITE_AUTH_ENABLED</code> 约定：development 默认 <code>false</code> 免登录演示；production 默认 <code>true</code>；<code>.env.local</code> 本地覆盖不提交。env 变更后需重启 dev / build。</p><h2 id="四布局选型">四、布局选型</h2><div class="doc-table-wrap"><table><thead><tr><th>布局</th><th>场景</th><th>引入方式</th></tr></thead><tbody><tr><td><code>BasicLayout</code></td><td>子系统通用外壳（AppSidebar + TopNavBar + TagsView），菜单自动派生</td><td>路由模块显式 import</td></tr><tr><td><code>UniversalLayout</code></td><td>顶部导航形态（top-nav / top-nav-left-menu / fullscreen）</td><td>路由模块显式 import</td></tr><tr><td><code>CardLayout</code> / <code>SplitLayout</code> / <code>StatsPanelLayout</code></td><td>页面级插槽布局（单卡片 / 左树右表 / 统计面板）</td><td>全局 kebab-case 标签</td></tr><tr><td><code>FullScreenLayout</code> / <code>ScaleViewport</code></td><td>全屏铺满 / 大屏等比缩放</td><td>全局 kebab-case 标签</td></tr></tbody></table></div><p>文档站点等特殊形态可完全自定义壳组件（参考 dcms-web <code>widgets/doc/</code>），但仍须遵守本文的分层、兜底与守卫约定。</p>`,20)])]))}}),xt={class:"doc-article"},Nt=h({__name:"ProComponentsDoc",setup(n){return(s,t)=>(o(),a("article",xt,[...t[0]||(t[0]=[v('<blockquote><p>⚠️ <strong>历史归档</strong>：本篇不再维护；现行规范以 根 AGENTS.md 与各包 README 为准。</p></blockquote><blockquote><p><strong>文档版本</strong>: v1.0　　<strong>更新日期</strong>: 2026-09-26　　<strong>适用范围</strong>: 全部子应用业务页面</p></blockquote><p>本文定义 Pro 组件体系的使用规则与页面模板选型。目标：同一类交互在全部应用中长一样、写法一样——<strong>看到列表就知道用 pro-table，看到状态就知道是 tagMap</strong>。</p><h2 id="一设计理念">一、设计理念</h2><ul><li>Pro 组件统一位于 <code>packages/share-components/src/el-plus/</code>，经各应用 <code>globalComponents.ts</code> 全局注册：模板<strong>直接用 kebab-case</strong>（<code>&lt;pro-table&gt;</code>），无需 import</li><li>类型与选项接口（<code>ProTableColumn</code> / <code>ProSelectOption</code> 等）从 <code>@share-components</code> 显式导入</li><li><strong>新代码必须使用 Pro 组件替代 Element Plus 原生组件</strong>；未封装的原语（el-form / el-input / el-row / el-col / el-icon / el-steps / el-collapse / el-badge / el-progress / el-avatar / el-divider / el-descriptions）可继续直接使用</li><li>组件数据驱动：<code>pro-select</code> / <code>pro-radio-group</code> / <code>pro-checkbox-group</code> / <code>pro-dropdown</code> 等均以 <code>:options</code> 传入，模板零子节点堆砌</li></ul><h2 id="二组件替代映射强制">二、组件替代映射（强制）</h2><div class="doc-table-wrap"><table><thead><tr><th>场景</th><th>原生（禁止）</th><th>Pro 组件（必须）</th></tr></thead><tbody><tr><td>普通列表 / 树形列表</td><td>el-table（+ tree-props）</td><td><code>&lt;pro-table&gt;</code>（树形加 <code>:tree-props</code> <code>:default-expand-all</code> <code>:show-index=&quot;false&quot;</code> <code>:show-pagination=&quot;false&quot;</code>）</td></tr><tr><td>抽屉 / 对话框</td><td>el-drawer / el-dialog</td><td><code>&lt;pro-drawer :on-confirm&gt;</code> / <code>&lt;pro-dialog&gt;</code></td></tr><tr><td>卡片 / 标签页</td><td>el-card / el-tabs</td><td><code>&lt;pro-card&gt;</code> / <code>&lt;pro-tabs&gt;</code></td></tr><tr><td>下拉 / 单选 / 多选</td><td>el-select / el-radio-group / el-checkbox-group</td><td><code>&lt;pro-select&gt;</code> / <code>&lt;pro-radio-group&gt;</code> / <code>&lt;pro-checkbox-group&gt;</code>（options 驱动）</td></tr><tr><td>数字 / 日期 / 时间 / 上传</td><td>el-input-number 等</td><td><code>&lt;pro-input-number&gt;</code> / <code>&lt;pro-date-picker&gt;</code> / <code>&lt;pro-time-picker&gt;</code> / <code>&lt;pro-upload&gt;</code></td></tr><tr><td>按钮 / 标签 / 链接 / 提示</td><td>el-button / el-tag / el-link / el-tooltip</td><td><code>&lt;pro-button :margin-left&gt;</code> / <code>&lt;pro-tag&gt;</code> / <code>&lt;pro-link&gt;</code> / <code>&lt;pro-tooltip&gt;</code></td></tr><tr><td>下拉菜单 / 空状态 / 时间线 / 穿梭框</td><td>el-dropdown / el-empty / el-timeline / el-transfer</td><td><code>&lt;pro-dropdown :items&gt;</code> / <code>&lt;pro-empty&gt;</code> / <code>&lt;pro-timeline&gt;</code> / <code>&lt;pro-transfer&gt;</code></td></tr><tr><td>搜索栏</td><td>手写 form + 按钮</td><td><code>&lt;pro-search-input&gt;</code> / <code>&lt;pro-search-select&gt;</code> / <code>&lt;pro-search-date-picker&gt;</code>（与表格同卡，无搜索按钮）</td></tr><tr><td>表格操作列</td><td>手写多个 link 按钮</td><td><code>&lt;pro-table-actions :items :row&gt;</code>（数据驱动，items 支持 icon / handler / divided）</td></tr><tr><td>布尔开关</td><td>el-switch</td><td><code>&lt;pro-radio-group&gt;</code>（推荐）或 <code>&lt;pro-switch&gt;</code>（仅表单设计器三面板与属性面板场景）</td></tr></tbody></table></div><h2 id="三页面模板选型">三、页面模板选型</h2><p>页面按信息形态选择既有插槽布局，禁止手写等价结构：</p><div class="doc-table-wrap"><table><thead><tr><th>布局</th><th>场景</th><th>参考样板</th></tr></thead><tbody><tr><td><code>card-layout</code></td><td>单卡片管理页（#search / #actions / #title-extra 插槽 + 表格）</td><td>ecdp <code>dispatch/org/Department.vue</code></td></tr><tr><td><code>split-layout</code></td><td>左树右表（#aside 放 SearchTreePanel + #search + 内容区）</td><td>ecdp <code>dispatch/org/Admin.vue</code></td></tr><tr><td><code>stats-panel-layout</code></td><td>统计面板（#stats 放 stats-cards + #filters + 内容区）</td><td>ecdp <code>resource/warehouse/Warehouse.vue</code></td></tr><tr><td><code>full-screen-layout</code> + <code>scale-viewport</code></td><td>数据可视化大屏</td><td>ecdp 大屏模块</td></tr></tbody></table></div><p>业务公共组件（<code>StatsCards</code> / <code>DetailList</code> / <code>SearchTreePanel</code> / <code>SubSystemPanel</code> / <code>IconPicker</code> / <code>PanelHeader</code> 等）已全局注册，同等场景强制使用，禁止手写 stats-row、detail-item 等等价物。</p><h2 id="四模板与样式细则">四、模板与样式细则</h2><ol><li>全局组件模板必须 kebab-case；PascalCase 仅允许 <code>&lt;script&gt;</code> 内 import 与类型引用；例外：<code>&lt;el-icon&gt;&lt;Plus /&gt;&lt;/el-icon&gt;</code> 内 EP 图标</li><li>导入顺序：Vue 核心 → Element Plus → icons → Mock → composables / utils → 类型 → Pro 组件</li><li>方法用 <code>function</code> 声明（非箭头）、<code>handle</code> 前缀、每个方法上方 JSDoc；代码分区用注释（<code>// ── 响应式状态 ──</code>）</li><li>ProTable 列定义（<code>ProTableColumn[]</code>）<strong>必须单行对象字面量</strong>，禁止多行展开</li><li>样式统一 <code>&lt;style lang=&quot;scss&quot; scoped&gt;</code>；模板中没有对应 class 的样式规则一律删除；禁止内联 style 覆盖组件（大屏动态定位 <code>:style</code> 除外）</li><li>交付前按 AGENTS.md §10.1 三层检查清单（模板层 / 逻辑层 / 工程层）自查</li></ol>',13)])]))}}),Ct={class:"doc-article"},Ot=h({__name:"ListDrawerDoc",setup(n){return(s,t)=>(o(),a("article",Ct,[...t[0]||(t[0]=[v(`<blockquote><p>⚠️ <strong>历史归档</strong>：本篇不再维护；现行规范以 根 AGENTS.md 与各包 README 为准。</p></blockquote><blockquote><p><strong>文档版本</strong>: v1.0　　<strong>更新日期</strong>: 2026-09-26　　<strong>适用范围</strong>: 全部子应用业务页面</p></blockquote><p>本文定义列表分页、抽屉与表单的统一契约。所有管理页面（含树形列表）遵守同一套数据流：<strong>全量数据 → computed 过滤切片 → 声明式渲染</strong>，不出现按页异步取数。</p><h2 id="一列表分页契约">一、列表分页契约</h2><ol><li><strong>禁止按页异步取数</strong>：Mock 数据全量加载（import 数组或 <code>crud.getAll()</code>），由前端本地切片；不得封装 <code>getPage(pageNum, pageSize)</code> 类接口</li><li>ProTable 分页 model 名是 <strong><code>v-model:pageNum</code></strong>（与 prop 同名）；禁止 <code>v-model:current-page</code>（<code>ProPagination</code> 独立使用时才用 currentPage）</li><li><code>pagination.total</code> 由 computed 从 <code>filteredData.length</code> 派生，<strong>禁止在 computed 内赋值</strong>；无需绑定 <code>@page-num-change</code> / <code>@page-size-change</code>——翻页 / 切条数 / 搜索全部由响应式状态自动驱动</li><li>默认每页 20 条；搜索 / 切换筛选回调中手动 <code>pagination.pageNum = 1</code> 重置</li><li>树形列表：<code>row-key</code> + <code>:tree-props</code> + <code>:default-expand-all=&quot;true&quot;</code> + <code>:indent=&quot;24&quot;</code>，并显式 <code>:show-index=&quot;false&quot;</code> / <code>:show-pagination=&quot;false&quot;</code></li><li>表格滚动外层包 <code>.table-wrapper { flex: 1; overflow: auto }</code>；内容溢出用 <code>showOverflowTooltip</code>（可点击文本用普通 span，勿用 el-link，勿设 inline-block，避免破坏省略号）</li></ol><h2 id="二标准驱动-composables">二、标准驱动 composables</h2><div class="doc-table-wrap"><table><thead><tr><th>函数</th><th>职责</th><th>来源</th></tr></thead><tbody><tr><td><code>useMockTablePage&lt;T&gt;</code></td><td>列表过滤 + 前端分页（内置 <code>matchesKeyword</code> + <code>paginate</code>，支持 selectFilters 多维筛选）</td><td><code>@share-utils/composables/useMockTablePage</code></td></tr><tr><td><code>useCrudDrawer&lt;T&gt;</code></td><td>新增/编辑抽屉状态机（defaultFormData 重置、stripAuditFields 回填、校验失败 / onSubmit 返回 false 阻止关闭）</td><td><code>@share-utils/composables/useCrudDrawer</code></td></tr><tr><td><code>confirmDelete</code></td><td>删除二次确认（取消返回 false 不抛错）</td><td><code>@share-utils/utils/confirm</code></td></tr><tr><td><code>useCountdown</code></td><td>验证码 / 重发冷却</td><td><code>@share-utils/composables/useCountdown</code></td></tr></tbody></table></div><p>手写 <code>matchesKeyword</code> / <code>paginate</code> / <code>formRef.validate(...)</code> 均属重复造轮子；<code>formRef.value?.validate()</code> 仅在未接入 <code>useCrudDrawer</code> 的简单场景作为例外路径。</p><h2 id="三操作列与状态列">三、操作列与状态列</h2><ul><li>操作列<strong>必须</strong> <code>&lt;pro-table-actions :items :row&gt;</code>，items 数据驱动；列定义 <code>{ label: &#39;操作&#39;, width: 60, align: &#39;center&#39;, fixed: &#39;right&#39;, slot: &#39;actions&#39; }</code></li><li>菜单顺序规范：<strong>编辑第一</strong>（icon: Edit，无 divided）→ 其他操作按重要性排列 → <strong>删除最后</strong>（icon: Delete，<code>divided: true</code>）</li><li>状态列<strong>必须</strong>声明式写法：<code>cellType: &#39;tag&#39;</code> + <code>tagMap</code>（枚举值 → EP 色）+ <code>tagLabelMap</code>（枚举值 → 文案），禁止手写 <code>statusType()</code> 映射函数 + 模板 el-tag</li><li>列定义核心字段：<code>type / prop / label / slot / width / minWidth / fixed / align / ellipsis / hide / cellType / tagMap / tagLabelMap</code>；<strong>每个列对象必须单行书写</strong></li></ul><h2 id="四抽屉与表单">四、抽屉与表单</h2><ol><li>新增 / 编辑抽屉用 <code>&lt;pro-drawer :on-confirm=&quot;handleSubmit&quot;&gt;</code>；详情抽屉 <code>:hide-footer=&quot;true&quot;</code>；统一 <code>destroy-on-close</code></li><li><strong>抽屉 size 必须带单位字符串</strong>（<code>&#39;500px&#39;</code> / <code>&#39;70%&#39;</code> / <code>&#39;40rem&#39;</code>）——裸数字（<code>0.7</code>）会被 EP <code>addUnit</code> 补成 <code>0.7px</code>，抽屉塌陷只剩遮罩</li><li>表单默认值提取为 <code>defaultFormData</code> 常量，<code>formData</code> 由其初始化；新增时经 <code>openCreate</code> 重置</li><li>编辑回填<strong>只复制业务字段</strong>：<code>openEdit(row)</code> 内部经 <code>stripAuditFields</code> 自动剥离审计四件套，提交 payload 同样不含审计字段</li><li>校验统一走 <code>useCrudDrawer.handleSubmit</code>：内部先执行 rules 校验，失败或 <code>onSubmit</code> 返回 <code>false</code> 均阻止关闭；规则示例：</li></ol><div class="code-block"><div class="code-head"><span class="code-lang">ts</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-ts">const formRules: FormRules = {
      field: [{ required: true, message: &#39;请输入xxx&#39;, trigger: &#39;blur&#39; }],
    }
    </code></pre></div><ol start="6"><li>布尔状态字段禁止原生 <code>el-switch</code>：选项文案明确（启用/停用）→ <code>&lt;pro-radio-group&gt;</code>；确需紧凑开关 → <code>&lt;pro-switch&gt;</code>（仅属性面板场景）</li></ol>`,14)])]))}}),Dt={class:"doc-article"},Lt=h({__name:"MockSqlDoc",setup(n){return(s,t)=>(o(),a("article",Dt,[...t[0]||(t[0]=[v(`<blockquote><p>⚠️ <strong>历史归档</strong>：本篇不再维护；现行规范以 根 AGENTS.md 与各包 README 为准。</p></blockquote><blockquote><p><strong>文档版本</strong>: v1.0　　<strong>更新日期</strong>: 2026-09-26　　<strong>适用范围</strong>: 全部子应用</p></blockquote><p>本文定义前端 Mock 数据的组织方式与表结构 SQL 的处理契约。演示项目没有真实后端，Mock 的质量就是页面质量——<strong>Mock 必须真实到可以当验收数据用</strong>。</p><h2 id="一mock-组织">一、Mock 组织</h2><ul><li>Mock 按子系统划分目录：<code>apps/&lt;app&gt;/src/mock/{module}/</code>；每文件导出 <strong>20-50 条</strong>，数据结构与 TS 类型严格一致</li><li>列表数据<strong>不按页取数</strong>：全量加载（import 数组或 <code>crud.getAll()</code>），由 computed 过滤切片</li><li>业务 Mock API 按消费方放置：多页面共用 → <code>src/mock/{module}/xxxMockApi.ts</code>（内部经 <code>createMockCrud</code> 工厂）；单页面私有也必须归位 mock 目录，<strong>禁止在 .vue 文件内内联大数组</strong></li><li>统计数值优先 computed 从列表数据派生（参考 ecdp <code>dss/basic/BasicManagement.vue</code>）；无法派生的演示指标才放 mock</li><li>跨应用公共 Mock 进 <code>packages/share-mocks</code>（当前仅 region/areaData）；<strong>拿不准时默认留应用内</strong>，第二消费方出现后再上收；确认无跨应用消费方立即下放（如 fhis 路段字典已迁回应用内）</li><li>文档 / 规范类长文本转换为静态 Vue 组件（参考 dcms <code>views/docs/content/</code>），禁止在 .vue / .ts 内粘贴大段字符串，也不再运行时读取 Markdown</li></ul><h2 id="二审计字段契约">二、审计字段契约</h2><p>统一使用 <code>...randomAuditFields()</code> 展开生成，<strong>禁止硬编码</strong>：</p><div class="doc-table-wrap"><table><thead><tr><th>场景</th><th>用法</th></tr></thead><tbody><tr><td>Mock 数据源</td><td>每条数据 <code>...randomAuditFields()</code> 生成 creater / createTime / updater / updateTime</td></tr><tr><td>新增落库</td><td>组装记录时 <code>...randomAuditFields()</code> 模拟服务端生成</td></tr><tr><td>编辑提交 / 回填</td><td>payload <strong>不含审计字段</strong>；编辑回填用 <code>stripAuditFields(row)</code> 只复制业务字段</td></tr></tbody></table></div><p>类型定义：<code>interface XxxData extends AuditFields</code>（审计四件套齐全）或 <code>extends Partial&lt;AuditFields&gt;</code>（允许缺失的场景）。</p><h2 id="三sql-文件规范">三、SQL 文件规范</h2><ul><li>所有表结构 SQL 统一存放在 <code>apps/&lt;app&gt;/src/sql/{module}/</code>，<strong>一表一文件</strong>；字典类主子表可合并</li><li>页面经 <code>import sql from &#39;@/sql/xxx/xxx.sql?raw&#39;</code> 引入，传给 <code>&lt;TableStructureDrawer :sql&gt;</code> 展示</li><li>文件结构固定顺序：</li></ul><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>DROP TABLE → CREATE TABLE → ALTER TABLE ... OWNER（无空行）→ COMMENT ON COLUMN
    → 空行 → CREATE INDEX（多个之间无空行）
    → 空行 → ALTER TABLE ... PRIMARY KEY
    → 空行 → 下一张表
    </code></pre></div><ul><li>文件不含 <code>--</code> 注释行，末尾留一个换行符</li></ul><h2 id="四字段与-insert-处理流程">四、字段与 INSERT 处理流程</h2><p><strong>表字段完善规则</strong>（PM 提出 → FE 执行）：接收 SQL 字段列表 → 排除排查字段（<code>creater_id</code> / <code>updater_id</code> / <code>org_id</code> / <code>org_name</code> / <code>deleted</code> / <code>signature</code> / <code>signature_version</code> / <code>local_signature</code> / <code>local_signature_version</code>）→ 按业务 / 状态 / 审计分类 → 同步更新 <code>src/types/</code> + <code>src/mock/</code> + 页面（表格列 + 表单字段）。</p><p><strong>INSERT 语句作为 Mock 数据源时</strong>：</p><ol><li><strong>排除字段</strong>：直接移除上列排查字段，不进类型、不进 Mock</li><li><strong>分析可空字段</strong>：多条记录中出现 NULL 的字段，类型标记可空（<code>string | null</code>）；类型用 camelCase（<code>log_id</code> → <code>logId</code>），与 SQL snake_case 对应但不直接使用</li><li><strong>压缩 Mock</strong>：每条记录占一行（单行对象字面量）；值为 null / undefined / 空字符串的字段直接不写入；文件头保留 import 与注释</li></ol>`,17)])]))}}),Pt={class:"doc-article"},wt=h({__name:"TypeThemeDoc",setup(n){return(s,t)=>(o(),a("article",Pt,[...t[0]||(t[0]=[v(`<blockquote><p>⚠️ <strong>历史归档</strong>：本篇不再维护；现行规范以 根 AGENTS.md 与各包 README 为准。</p></blockquote><blockquote><p><strong>文档版本</strong>: v1.0　　<strong>更新日期</strong>: 2026-09-26　　<strong>适用范围</strong>: 全部子应用与共享包</p></blockquote><p>本文定义 TypeScript 类型的归属原则与跨应用主题色 / 样式体系。核心思想：<strong>类型跟着消费方走，颜色跟着 share-basic 走</strong>——任何一处类型或颜色都不允许出现&quot;第二事实源&quot;。</p><h2 id="一类型就近原则">一、类型就近原则</h2><ol><li><strong>类型就近</strong>：被某组件独占使用的 <code>interface</code> / <code>type</code> 在该组件 <code>&lt;script lang=&quot;ts&quot;&gt;</code> 块内导出；公共类型（≥2 子系统共用）才上收 <code>packages/share-utils/src/types/</code></li><li><strong>Mock / View 禁止定义业务类型</strong>：<code>src/mock/*.ts</code> 与 <code>src/views/*.vue</code> 内不允许出现业务 type 定义，业务类型一律归位 <code>src/types/{module}/</code></li><li>公共类型引用路径：<code>@share-utils/types/xxx</code> / <code>@share-enums</code>；深路径导入优先（如 <code>@share-utils/types/audit</code>），barrel 仅做聚合备用</li><li>默认值集中在 <code>withDefaults</code> 内，与 prop 定义物理紧贴（一眼看清&quot;有哪些 prop + 各自默认值&quot;）</li><li>共享包内出现 <code>import type</code> 时遵守循环依赖防护：barrel 中多个组件 import 并存时，被引用类型（如 <code>NoticeItem</code> / <code>MobileApp</code>）的定义必须置于 import 链最前方；<code>import type</code> 无运行时值可任意位置，但类型在 import 之后才用到（<code>reactive&lt;NoticeItem[]&gt;</code> 等）时必须先定义</li></ol><h2 id="二公共类型清单">二、公共类型清单</h2><p><code>@share-utils/types</code> 只保留两个最小公共类型，超出部分散落在提供能力的子域模块内（如 <code>FlatTreeNode</code> 在 utils/tree、<code>MenuItem</code> 在 router-kit、<code>WorkflowNode</code> 在 workflow/types）：</p><div class="doc-table-wrap"><table><thead><tr><th>类型</th><th>定义</th><th>用途</th></tr></thead><tbody><tr><td><code>AuditFields</code></td><td><code>{ creater; createTime; updater; updateTime }</code></td><td>审计四件套（缺字段场景 <code>extends Partial&lt;AuditFields&gt;</code>）</td></tr><tr><td><code>OptionItem&lt;T&gt;</code></td><td><code>{ label; value }</code>（T 默认 <code>string | number</code>）</td><td>下拉选项统一结构</td></tr></tbody></table></div><p>历史曾上收但仅单应用消费的类型（<code>HandleStatus</code> / <code>AttachmentItem</code> 等）已迁回应用——<strong>公共类型按消费方数量动态归位，宁缺毋滥</strong>。</p><h2 id="三跨应用主题色体系">三、跨应用主题色体系</h2><p>主题色单点收敛在 <code>packages/share-basic/src/themes/</code>，结构与加载顺序：</p><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>themes/
    ├── brand/        # 一应用一文件：$&lt;app&gt;-primary / 派生色 / 侧栏 token（rnws / upms / ecdp / fhis / portal / playground / dcms）
    ├── common/       # 跨应用通用：$screen-*（大屏）/ $chart-*（图表）/ $z-*（层级）/ $screen-design-height
    ├── _ep-theme.scss   # EP 主题色 SCSS 源（不对外 @forward）
    ├── ep-theme.css     # EP 主题色 :root 注入（应用 main.ts 引入，加载在 EP 样式之后）
    └── _tokens.scss     # barrel：@forward 所有 brand + common
    </code></pre></div><p>使用方式三选一：</p><ol><li><strong>SCSS 变量</strong>（深嵌套样式块）：<code>@use &#39;@share-basic/themes/tokens&#39; as *;</code> 后用 <code>$rnws-primary</code> / <code>$dcms-gradient-header</code></li><li><strong>Tailwind utility</strong>（模板内）：<code>bg-rnws-primary</code> / <code>text-screen-text-primary</code>（经 <code>styles/tailwind.css</code> 的 <code>@theme</code> 暴露）</li><li><strong>EP 主题色</strong>：main.ts 引入 <code>@share-basic/themes/ep-theme.css</code>，<code>:root</code> 级覆盖 EP 默认</li></ol><p>协作约定：</p><ul><li><strong>禁止</strong>在 share-components 或 apps 内重新声明 <code>--el-color-*</code> 覆盖，EP 主色全部走 themes 目录单点</li><li>某应用需要区别于全局主色时，在 <code>ep-theme.css</code> 增加 <code>html[data-app=&#39;&lt;app&gt;&#39;]</code> 作用域块（应用 main.ts 设置 <code>dataset.app</code>），并在 <code>_ep-theme.scss</code> 同步 SCSS 源——先例：dcms 文档中心（翠绿）</li><li>新增通用 token 判定标准：≥2 应用复用 + 不绑业务；单一应用专用一律放应用内 <code>src/styles/</code></li><li>新增应用品牌色：一应用一文件 <code>_\${app}.scss</code>，命名按包名去前缀；主色 + 派生色 + 侧栏 token，并在 themes README 命名表登记</li></ul><h2 id="四样式细则">四、样式细则</h2><ol><li><code>&lt;style lang=&quot;scss&quot; scoped&gt;</code>；不在页面组件中定义全局样式</li><li>优先使用 Pro 组件自带样式与主题 token，减少自定义 CSS；<strong>模板中没有对应 class 时删除该样式规则</strong></li><li>禁止内联 style 覆盖组件（<code>style=&quot;border: none&quot;</code> 等）；例外：大屏页面的动态定位 <code>:style</code> 绑定、属性面板类按数据着色的场景</li><li>状态语义色（成功 / 警告 / 危险）沿用全站统一 tagMap 色板，<strong>不做应用级品牌化</strong>；品牌色只用于品牌识别元素（logo / 头带 / 激活态 / 渐变）</li></ol>`,18)])]))}}),Ft={class:"doc-article"},Ut=h({__name:"ApiDesignDoc",setup(n){return(s,t)=>(o(),a("article",Ft,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-29 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><hr><h2 id="一rest-api-约定">一、REST API 约定</h2><h3 id="11-基本原则">1.1 基本原则</h3><ol><li><strong>禁止路径参数</strong>：禁止使用 <code>/{id}</code> 形式，统一使用查询参数或请求体</li><li><strong>正确的 HTTP 方法</strong>：GET（查询）、POST（新增/分页/列表）、PUT（修改）、DELETE（删除）</li><li><strong>名词表示资源</strong>：URL 使用资源名词，非动词</li></ol><h3 id="12-url-命名规范">1.2 URL 命名规范</h3><div class="doc-table-wrap"><table><thead><tr><th>操作</th><th>HTTP 方法</th><th>URL 模式</th><th>示例</th></tr></thead><tbody><tr><td>根据 ID 查询</td><td>GET</td><td><code>/findById?{key}={value}</code></td><td><code>/system/user/findById?userId=xxx</code></td></tr><tr><td>分页查询</td><td>POST</td><td><code>/page</code></td><td><code>/system/user/page</code></td></tr><tr><td>列表查询</td><td>POST</td><td><code>/list</code></td><td><code>/system/role/list</code></td></tr><tr><td>新增</td><td>POST</td><td><code>/save</code></td><td><code>/system/user/save</code></td></tr><tr><td>修改</td><td>PUT</td><td><code>/update</code></td><td><code>/system/user/update</code></td></tr><tr><td>删除</td><td>DELETE</td><td><code>/delete?{key}={value}</code></td><td><code>/system/user/delete?userId=xxx</code></td></tr><tr><td>修改状态</td><td>PUT</td><td><code>/updateStatus</code></td><td><code>/system/user/updateStatus</code></td></tr></tbody></table></div><h3 id="13-参数传递方式">1.3 参数传递方式</h3><div class="doc-table-wrap"><table><thead><tr><th>场景</th><th>注解</th><th>示例</th></tr></thead><tbody><tr><td>GET 查询</td><td>对象接收（Spring MVC 自动绑定查询参数）</td><td><code>page(SysUserPageRequest request)</code></td></tr><tr><td>POST 新增</td><td><code>@RequestBody</code> + <code>@Valid</code></td><td><code>save(@Valid @RequestBody SysUserRequest request)</code></td></tr><tr><td>PUT 修改</td><td><code>@RequestBody</code> + <code>@Valid</code></td><td><code>update(@Valid @RequestBody SysUserRequest request)</code></td></tr><tr><td>DELETE</td><td><code>@RequestParam</code></td><td><code>delete(@RequestParam Long userId)</code></td></tr></tbody></table></div><blockquote><p><strong>说明</strong>：接口前缀（<code>/backend</code>、<code>/mobile</code>、<code>/screen</code>、<code>/inner</code>）已在<strong>后端仓库</strong>的 AGENTS.md 中定义（本前端仓库未收录），本规范聚焦 URL 命名与参数传递方式。</p></blockquote><h3 id="14-接口前缀规范">1.4 接口前缀规范</h3><p>不同微服务的接口前缀按其定位划分：</p><div class="doc-table-wrap"><table><thead><tr><th>前缀</th><th>端类型</th><th>说明</th></tr></thead><tbody><tr><td><code>/backend</code></td><td>后台管理端</td><td>业务微服务（路段、气象、预警等）使用</td></tr><tr><td><code>/mobile</code></td><td>移动端</td><td>供手机 APP、小程序等移动设备使用</td></tr><tr><td><code>/screen</code></td><td>大屏展示端</td><td>供数据可视化大屏、指挥中心大屏使用</td></tr><tr><td><code>/inner</code></td><td>内部接口</td><td>供微服务间 Feign 调用的内部接口</td></tr></tbody></table></div><blockquote><p><strong>UPMS 服务特殊说明</strong>：<code>ecdp-upms</code> 作为统一权限管理系统，其接口前缀<strong>不使用 <code>/backend</code></strong>，直接以模块路径对外暴露，如 <code>/system/user/page</code>、<code>/system/role/save</code> 等。UPMS 的接口前缀规则已内置在网关路由配置中。</p></blockquote><hr><h2 id="二统一响应格式">二、统一响应格式</h2><h3 id="21-apiresult\\&lt;t\\&gt;-结构">2.1 ApiResult&lt;T&gt; 结构</h3><p>所有接口统一返回 <code>ApiResult&lt;T&gt;</code> 包装格式：</p><div class="code-block"><div class="code-head"><span class="code-lang">json</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-json">// 成功响应
    {
      &quot;code&quot;: 200,
      &quot;message&quot;: &quot;操作成功&quot;,
      &quot;success&quot;: true,
      &quot;data&quot;: { ... },
      &quot;timestamp&quot;: 1713619200000
    }
    
    // 失败响应
    {
      &quot;code&quot;: 500,
      &quot;message&quot;: &quot;该企业下已存在相同角色编码的角色&quot;,
      &quot;success&quot;: false,
      &quot;data&quot;: null,
      &quot;timestamp&quot;: 1713619200000
    }
    
    // 分页响应
    {
      &quot;code&quot;: 200,
      &quot;message&quot;: &quot;&quot;,
      &quot;success&quot;: false,
      &quot;data&quot;: {
        &quot;total&quot;: 100,
        &quot;list&quot;: [...],
        &quot;size&quot;: 10,
        &quot;pages&quot;: 10
      },
      &quot;timestamp&quot;: 1713619200000
    }
    </code></pre></div><h3 id="22-http-状态码含义">2.2 HTTP 状态码含义</h3><div class="doc-table-wrap"><table><thead><tr><th>状态码</th><th>含义</th><th>场景</th></tr></thead><tbody><tr><td>200</td><td>成功</td><td>正常业务处理</td></tr><tr><td>400</td><td>参数错误</td><td>校验失败、格式错误</td></tr><tr><td>401</td><td>未认证</td><td>Token 缺失或无效</td></tr><tr><td>403</td><td>无权限</td><td>Token 有效但无接口访问权限</td></tr><tr><td>404</td><td>资源不存在</td><td>查询的数据不存在</td></tr><tr><td>500</td><td>服务器错误</td><td>系统异常、未捕获的业务异常</td></tr></tbody></table></div><blockquote><p><strong>重要</strong>：<code>ServiceException</code> 返回 HTTP 200，通过 <code>code</code> 字段区分业务错误；其他异常返回对应的 HTTP 状态码。</p></blockquote><h3 id="23-分页响应">2.3 分页响应</h3><p>分页请求统一继承 <code>PageRequest</code>，分页结果使用 <code>PageResult&lt;T&gt;</code>：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// PageRequest — 分页请求基类
    @Data
    @Schema(description = &quot;分页参数对象&quot;)
    public class PageRequest implements Serializable {
        @Schema(description = &quot;当前页码&quot;)
        private Long pageNum = 1L;
    
        @Schema(description = &quot;每页显示记录条数&quot;)
        private Long pageSize = 10L;
    
        @Schema(description = &quot;关键词检索&quot;)
        private String keyword;
    }
    
    // PageResult&lt;T&gt; — 分页响应
    @Data
    @Schema(description = &quot;分页结果&quot;)
    public class PageResult&lt;T&gt; implements Serializable {
        @Serial private static final long serialVersionUID = 1L;
        @Schema(description = &quot;总记录数&quot;) private Long total;
        @Schema(description = &quot;数据列表&quot;) private List&lt;T&gt; list;
        @Schema(description = &quot;每页记录数&quot;) private Long size;
        @Schema(description = &quot;总页数&quot;)   private Long pages;
    }
    </code></pre></div><hr><h2 id="三入参与-swagger-文档三件套">三、入参与 Swagger 文档三件套</h2><h3 id="31-入参对象化">3.1 入参对象化</h3><ol><li><strong>入参对象化</strong>：除固定参数（如 <code>findById</code> 的 ID）允许 <code>@RequestParam</code> 外，<strong>一律</strong>使用 <code>xxxRequest</code> 对象接收，便于后续新增字段且保持接口签名稳定。</li><li><strong>固定参数也必须标注 Swagger 元数据</strong>：使用 <code>@RequestParam</code> 时必须同步声明 <code>@Parameter(description = &quot;...&quot;, required = true)</code>。</li><li><strong>对象参数使用 <code>@ParameterObject</code></strong>：GET 请求使用对象（<code>XxxRequest</code>）接收查询参数时，必须在参数前加 <code>@ParameterObject</code> 注解。</li></ol><h3 id="32-swagger-文档三件套">3.2 Swagger 文档三件套</h3><div class="doc-table-wrap"><table><thead><tr><th>注解</th><th>位置</th><th>作用</th></tr></thead><tbody><tr><td><code>@Operation</code></td><td>Controller 方法</td><td>接口说明，summary 用于菜单/列表标题，description 用于详情描述</td></tr><tr><td><code>@Schema</code></td><td>DTO 类和字段</td><td>字段说明，与 <code>/** */</code> Javadoc 注释保持一致</td></tr><tr><td><code>@ParameterObject</code></td><td>Controller 参数</td><td>GET 请求对象参数展开</td></tr></tbody></table></div><h3 id="33-controller-模板">3.3 Controller 模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Operation(summary = &quot;根据AppID查询App信息&quot;, description = &quot;根据AppID查询App信息（仅返回未停用记录）&quot;)
    @GetMapping(&quot;/findById&quot;)
    public ApiResult&lt;AppInfoResponse&gt; findById(
            @RequestParam(&quot;appId&quot;) @Parameter(description = &quot;AppID&quot;, required = true) Long appId) {
        return ApiResult.success(appInfoService.findById(appId));
    }
    
    @Operation(summary = &quot;分页查询App信息&quot;, description = &quot;支持按名称/状态/时间筛选&quot;)
    @PostMapping(&quot;/page&quot;)
    public ApiResult&lt;PageResult&lt;AppInfoResponse&gt;&gt; page(
            @RequestBody AppInfoPageRequest request) {
        IPage&lt;AppInfoResponse&gt; page = appInfoService.pageEntity(request);
        return ApiResult.success(DataUtil.convert(page));
    }
    </code></pre></div><h3 id="34-实体模板">3.4 实体模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Data
    @Schema(description = &quot;App信息表&quot;)
    public class AppInfoResponse implements Serializable {
    
        @Serial
        private static final long serialVersionUID = 1L;
    
        /** AppID（系统主键） */
        @Schema(description = &quot;AppID（系统主键）&quot;)
        private Long appId;
    
        /** App 名称 */
        @Schema(description = &quot;App 名称&quot;)
        private String appName;
    
        /** 状态（1101正常 1102停用） */
        @Schema(description = &quot;状态（1101正常 1102停用）&quot;)
        private Integer status;
    }
    </code></pre></div><hr><h2 id="四返回值约束">四、返回值约束</h2><h3 id="41-强制禁止">4.1 强制禁止</h3><div class="doc-table-wrap"><table><thead><tr><th>禁止类型</th><th>原因</th></tr></thead><tbody><tr><td><strong>禁止返回 <code>Object</code></strong></td><td>编译期失守，调用方无类型提示</td></tr><tr><td><strong>禁止返回 <code>Map&lt;String, Object&gt;</code></strong></td><td>Swagger 无法生成 schema，前端只能 <code>key.toString()</code> 盲调；前端无法按字段补全；结构随版本漂移</td></tr><tr><td><strong>禁止直接返回 Entity</strong></td><td>原实体含 <code>local_signature</code>/<code>signature</code> 等签名字段，直接返回会泄漏数据完整性信息</td></tr></tbody></table></div><h3 id="42-正例-vs-反例">4.2 正例 vs 反例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ❌ 反例 1：返回 Object（编译期失守）
    public Object findById(Long id) { ... }
    
    // ❌ 反例 2：返回 Map（Swagger 无法生成 schema）
    public Map&lt;String, Object&gt; detail(Long id) { ... }
    
    // ❌ 反例 3：直接返回 @TableName 实体（泄漏签名字段）
    public SysUser detail(Long id) { return userService.getById(id); }
    
    // ✅ 正例：返回 ApiResult&lt;XxxResponse&gt;
    public ApiResult&lt;XxxResponse&gt; findById(XxxQueryRequest request) { ... }
    </code></pre></div><h3 id="43-响应类型只暴露-xxxresponse">4.3 响应类型只暴露 xxxResponse</h3><p>必须基于原实体构造 <code>XxxResponse</code>，按调用方需要筛选字段：</p><ul><li><strong>保留</strong>：业务字段（<code>name</code>、<code>code</code>、<code>status</code> 等）</li><li><strong>过滤</strong>：签名字段（<code>local_signature</code> / <code>signature</code> / <code>signature_version</code> / <code>local_signature_version</code>）</li><li><strong>过滤</strong>：内部状态字段（<code>deleted</code>、<code>create_time</code> 等按业务决定是否对外）</li></ul><hr><h2 id="五参数校验">五、参数校验</h2><h3 id="51-分组校验框架">5.1 分组校验框架</h3><p>项目定义 <code>ValidGroup</code> 分组接口，用于区分新增与编辑场景的校验规则：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">package com.infoview.common.core.util;
    
    /**
     * 校验类型
     */
    public class ValidGroup {
    
        /** 插入组 */
        public static interface Insert {}
    
        /** 编辑组 */
        public static interface Update {}
    }
    </code></pre></div><blockquote><p><code>@NotNull</code>、<code>@NotBlank</code> 等校验注解通过 <code>groups</code> 属性指定所属分组，实现「新增时不校验 ID，编辑时必须校验 ID」的业务需求。</p></blockquote><h3 id="52-@valid-vs-@validated">5.2 @Valid vs @Validated</h3><div class="doc-table-wrap"><table><thead><tr><th>注解</th><th>作用域</th><th>嵌套校验</th><th>适用场景</th></tr></thead><tbody><tr><td><code>@Valid</code></td><td>字段、方法参数</td><td>支持（递归校验嵌套对象）</td><td>推荐用于 <code>@RequestBody</code> 对象</td></tr><tr><td><code>@Validated</code></td><td>类、方法参数</td><td>不支持</td><td>支持分组校验（<code>groups</code> 属性）</td></tr></tbody></table></div><blockquote><p><strong>强制要求</strong>：Controller 层 POST/PUT 请求使用 <code>@Validated</code> + 分组，不使用无分组的 <code>@Valid</code>。</p></blockquote><h3 id="53-request-类分组校验模板">5.3 Request 类分组校验模板</h3><p>使用 <code>@Validated</code> 注解配合校验分组：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Data
    @Schema(description = &quot;角色信息请求&quot;)
    public class SysRoleRequest implements Serializable {
        @Serial private static final long serialVersionUID = 1L;
    
        @Schema(description = &quot;角色ID&quot;)
        @NotNull(message = &quot;角色ID不能为空&quot;, groups = ValidGroup.Update.class)
        private Long roleId;
    
        @Schema(description = &quot;角色名称&quot;)
        @NotBlank(message = &quot;角色名称不能为空&quot;,
                  groups = {ValidGroup.Insert.class, ValidGroup.Update.class})
        @Size(min = 2, max = 50, message = &quot;角色名称长度为2-50个字符&quot;)
        private String name;
    }
    </code></pre></div><h3 id="54-controller-校验模板">5.4 Controller 校验模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 新增
    public ApiResult&lt;Void&gt; save(
            @Validated({ValidGroup.Insert.class}) @RequestBody SysRoleRequest request) { ... }
    
    // 更新
    public ApiResult&lt;Void&gt; update(
            @Validated({ValidGroup.Update.class}) @RequestBody SysRoleRequest request) { ... }
    </code></pre></div><h3 id="55-常用校验注解">5.5 常用校验注解</h3><div class="doc-table-wrap"><table><thead><tr><th>注解</th><th>适用类型</th><th>说明</th></tr></thead><tbody><tr><td><code>@NotBlank</code></td><td>String</td><td>不能为 null 且不能为空</td></tr><tr><td><code>@NotNull</code></td><td>任意类型</td><td>不能为 null</td></tr><tr><td><code>@Size</code></td><td>String/Collection</td><td>长度或大小范围</td></tr><tr><td><code>@Min</code> / <code>@Max</code></td><td>数值类型</td><td>最小值/最大值</td></tr><tr><td><code>@Pattern</code></td><td>String</td><td>正则表达式</td></tr><tr><td><code>@Email</code></td><td>String</td><td>邮箱格式</td></tr></tbody></table></div><hr><h2 id="六openfeign-服务调用">六、OpenFeign 服务调用</h2><h3 id="61-feign-接口规范">6.1 Feign 接口规范</h3><p>Feign 接口必须放置在 <code>ecdp-*-api</code> 模块中，命名格式为 <code>Remote{功能}Service</code>：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@FeignClient(contextId = &quot;remoteFloodOrgMemberService&quot;,
                 value = ServiceNameConstants.FLOOD_INSPECTION_SERVICE)
    public interface RemoteOrgMemberService {
    
        @NoToken
        @GetMapping(&quot;/inner/member/listOrganizations&quot;)
        ApiResult&lt;List&lt;FloodUserOrganizationResponse&gt;&gt; listOrganizations(
                @RequestParam(&quot;userId&quot;) Long userId);
    }
    </code></pre></div><h3 id="62-关键注解">6.2 关键注解</h3><div class="doc-table-wrap"><table><thead><tr><th>注解</th><th>用途</th></tr></thead><tbody><tr><td><code>@NoToken</code></td><td>Feign 调用时不携带用户 Token</td></tr><tr><td><code>@Inner</code></td><td>标记目标接口为内部接口（校验 <code>from=Y</code>）</td></tr><tr><td><code>@CustomEnableFeignClients</code></td><td>自定义 Feign 扫描（替代 <code>@EnableFeignClients</code>）</td></tr></tbody></table></div><h3 id="63-imports-自动注册">6.3 imports 自动注册</h3><p>所有 Feign 接口必须在 <code>META-INF/spring/org.springframework.cloud.openfeign.FeignClient.imports</code> 文件中声明全限定类名，实现自动注册。</p><h3 id="64-内部接口-@inner">6.4 内部接口 @Inner</h3><p>内部接口（Feign 互调）使用 <code>@Inner</code> 注解标记：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Inner
    @GetMapping(&quot;/inner/member/listOrganizations&quot;)
    public ApiResult&lt;List&lt;OrgResponse&gt;&gt; listOrganizations(@RequestParam Long userId) { ... }
    </code></pre></div><hr><h2 id="七api-文档">七、API 文档</h2><h3 id="71-技术栈">7.1 技术栈</h3><ul><li><strong>SpringDoc OpenAPI</strong>: 2.8.14（Swagger 3 / OpenAPI 3）</li><li><strong>Knife4j</strong>: 4.5.0（UI 增强）</li></ul><h3 id="72-启用配置">7.2 启用配置</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@EnableCustomDoc(&quot;duty&quot;)  // 参数为网关聚合文档中的服务标识
    @SpringBootApplication
    public class DutyApplication {
        public static void main(String[] args) {
            SpringApplication.run(DutyApplication.class, args);
        }
    }
    </code></pre></div><h3 id="73-注解使用">7.3 注解使用</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Tag(name = &quot;系统平台账号模块&quot;)
    @SecurityRequirement(name = HttpHeaders.AUTHORIZATION)
    public class SysUserController {
    
        @Operation(summary = &quot;分页查询用户信息&quot;)
        @PostMapping(&quot;/page&quot;)
        public ApiResult&lt;PageResult&lt;SysUserResponse&gt;&gt; page(
                @ParameterObject SysUserPageRequest request) { ... }
    }
    </code></pre></div><h3 id="74-网关聚合">7.4 网关聚合</h3><p>网关通过 Nacos 服务发现自动聚合各服务的 API 文档，统一入口为 <code>http://{网关地址}/doc.html</code>。</p><h3 id="75-生产环境">7.5 生产环境</h3><p>生产环境必须关闭 Swagger：</p><div class="code-block"><div class="code-head"><span class="code-lang">yaml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-yaml">springdoc:
      api-docs:
        enabled: false
      swagger-ui:
        enabled: false
    </code></pre></div><hr><h2 id="八权限字符串">八、权限字符串</h2><h3 id="81-四段式格式">8.1 四段式格式</h3><p>权限字符串采用 <code>{产品}:{模块}:{资源}:{操作}</code> 四段式格式：</p><div class="doc-table-wrap"><table><thead><tr><th>段位</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>第一段</td><td>产品/子系统</td><td><code>umps</code>、<code>flood</code>、<code>duty</code></td></tr><tr><td>第二段</td><td>业务模块</td><td><code>system</code>、<code>org</code>、<code>enterprise</code></td></tr><tr><td>第三段</td><td>资源名称</td><td><code>user</code>、<code>role</code>、<code>menu</code></td></tr><tr><td>第四段</td><td>操作类型</td><td><code>list</code>、<code>query</code>、<code>insert</code>、<code>update</code>、<code>delete</code></td></tr></tbody></table></div><h3 id="82-@haspermission-使用">8.2 @HasPermission 使用</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 单个权限
    @HasPermission(&quot;umps:system:user:insert&quot;)
    public ApiResult&lt;Void&gt; save(...) { ... }
    
    // 多个权限（OR 逻辑：满足任一即可）
    @HasPermission({&quot;umps:system:user:delete&quot;, &quot;umps:system:user:update&quot;})
    public ApiResult&lt;Void&gt; batchDelete(...) { ... }
    </code></pre></div><h3 id="83-校验流程">8.3 校验流程</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>请求 → @HasPermission → @PreAuthorize SpEL
          → PermissionService.hasPermission() (Bean 名 &quot;pms&quot;)
          → SecurityContext 获取当前用户权限列表
          → anyMatch（OR 逻辑）→ 匹配成功/失败
          → 失败抛出 AccessDeniedException → GlobalBizExceptionHandler → 403
    </code></pre></div><blockquote><p><strong>注意</strong>：多权限使用 <strong>OR 逻辑</strong>（<code>anyMatch</code>），即用户拥有任意一个指定权限即可访问。</p></blockquote><hr><h2 id="九controller-依赖注入风格">九、Controller 依赖注入风格</h2><h3 id="91-强制要求">9.1 强制要求</h3><ol><li><strong>优先使用 <code>@RequiredArgsConstructor</code> 全参构造注入</strong>（配合 <code>final</code> 字段）</li><li><strong>非必要不使用 <code>@Autowired</code> 字段注入</strong></li><li><strong>构造器与字段必须 <code>final</code></strong></li></ol><h3 id="92-正例">9.2 正例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Slf4j
    @RestController
    @RequiredArgsConstructor
    @RequestMapping(&quot;/backend/appInfo&quot;)
    public class AppInfoController {
    
        private final IAppInfoService appInfoService;
        private final AppInfoConverter appInfoConverter;
    
        // ...
    }
    </code></pre></div><h3 id="93-设计意图">9.3 设计意图</h3><ul><li><strong>可测试性</strong>：构造注入使 Mock 在 <code>@BeforeEach</code> 即可替换</li><li><strong>不可变性</strong>：<code>final</code> 字段避免运行期被替换导致 NPE</li><li><strong>依赖显式化</strong>：构造器参数列表即&quot;依赖清单&quot;</li></ul><hr><h2 id="十常用字段命名约定">十、常用字段命名约定</h2><p>与数据库设计规范对齐，字段命名、类型、注释模板保持一致：</p><div class="doc-table-wrap"><table><thead><tr><th>数据库字段</th><th>Java 字段</th><th>@Schema 描述模板</th></tr></thead><tbody><tr><td><code>{entity}_id</code></td><td><code>Long entityId</code></td><td><code>xxxID（系统主键）</code></td></tr><tr><td><code>create_time</code></td><td><code>LocalDateTime createTime</code></td><td><code>创建时间</code>，<code>@JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;)</code></td></tr><tr><td><code>update_time</code></td><td><code>LocalDateTime updateTime</code></td><td><code>更新时间</code>，<code>@JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;)</code></td></tr><tr><td><code>deleted</code></td><td><code>Integer deleted</code></td><td><code>逻辑删除标志（0正常 1删除）</code>，<code>@JsonIgnore</code></td></tr><tr><td><code>local_signature</code></td><td><code>String localSignature</code></td><td><code>本地签名（SM2）</code>，<strong>响应实体禁止输出</strong></td></tr><tr><td><code>local_signature_version</code></td><td><code>Integer localSignatureVersion</code></td><td><code>本地签名版本号</code>，<strong>响应实体禁止输出</strong></td></tr><tr><td><code>signature</code></td><td><code>String signature</code></td><td><code>一体化签名</code>，<strong>响应实体禁止输出</strong></td></tr><tr><td><code>signature_version</code></td><td><code>Integer signatureVersion</code></td><td><code>一体化签名版本号</code>，<strong>响应实体禁止输出</strong></td></tr><tr><td><code>creater</code> / <code>updater</code></td><td><code>String creater</code> / <code>updater</code></td><td><code>创建者</code> / <code>更新者</code></td></tr><tr><td><code>org_id</code> / <code>org_name</code></td><td><code>Long orgId</code> / <code>String orgName</code></td><td><code>归属组织ID</code> / <code>归属组织名称</code></td></tr><tr><td><code>status</code></td><td><code>Integer status</code></td><td><code>状态（1101正常 1102停用）</code></td></tr><tr><td><code>display_order</code></td><td><code>Integer displayOrder</code></td><td><code>排序号</code></td></tr><tr><td><code>parent_id</code></td><td><code>Long parentId</code></td><td><code>父级ID（顶级为0）</code></td></tr></tbody></table></div><blockquote><p><strong>重要</strong>：签名字段（<code>local_signature</code> / <code>signature</code> / <code>*_version</code>）<strong>仅在 Entity 中存在</strong>，<strong>禁止</strong>复制到 <code>XxxResponse</code> / <code>XxxRequest</code>。</p></blockquote><h2 id="十一附件-json-字段存储规则">十一、附件 JSON 字段存储规则</h2><h3 id="111-基本原则">11.1 基本原则</h3><p>实体中存储附件信息的 JSON 字段必须遵循统一的格式结构，确保前端解析一致，避免各模块存储格式混乱。</p><h3 id="112-字段结构">11.2 字段结构</h3><div class="code-block"><div class="code-head"><span class="code-lang">json</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-json">[
      {
        &quot;id&quot;: &quot;2082052374653964288&quot;,
        &quot;name&quot;: &quot;1785234932038.jpg&quot;,
        &quot;url&quot;: &quot;2026/07/28/cfadadb3ce9a4272bf8041c3faaa1ea3.jpg&quot;
      }
    ]
    </code></pre></div><h3 id="113-字段说明">11.3 字段说明</h3><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th style="text-align:center;">必填</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>id</code></td><td style="text-align:center;">是</td><td><code>Long</code>（String）</td><td>附件唯一标识，使用雪花算法 ID 生成</td></tr><tr><td><code>name</code></td><td style="text-align:center;">否</td><td><code>String</code></td><td>文件名，用于前端展示</td></tr><tr><td><code>url</code></td><td style="text-align:center;">是</td><td><code>String</code></td><td>文件相对地址，<strong>禁止</strong>存储带域名的完整 URL</td></tr></tbody></table></div><h3 id="114-强制要求">11.4 强制要求</h3><ol><li><strong><code>url</code> 禁止存储完整 URL</strong>：仅存储文件相对路径，如 <code>2026/07/28/cfadadb3ce9a4272bf8041c3faaa1ea3.jpg</code>，禁止出现 <code>http://</code> 或 <code>https://</code> 开头</li><li><strong><code>id</code> 必填</strong>：每个附件必须分配雪花算法 ID，不允许缺失</li><li><strong>JSON 数组格式</strong>：单个附件也必须使用数组包装，<code>[{...}]</code></li><li><strong>无附件时</strong>：返回空数组 <code>[]</code>，而非 <code>null</code> 或字段缺失</li></ol><h3 id="115-存储示例">11.5 存储示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// Entity 字段定义
    @Schema(description = &quot;附件列表&quot;)
    private String attachmentList;  // JSON 字符串存储
    </code></pre></div><h3 id="116-设计意图">11.6 设计意图</h3><ul><li><strong>统一格式</strong>：前端可依赖固定的 JSON 结构进行附件展示和下载</li><li><strong>URL 无域名</strong>：避免环境迁移（域名变更）时附件地址失效；由网关或配置中心统一拼接域名</li><li><strong>雪花 ID</strong>：确保分布式环境下附件 ID 全局唯一，便于日志追溯和数据关联</li></ul><hr><h2 id="十二签名-key-构建规范">十二、签名 Key 构建规范</h2><h3 id="121-核心原则">12.1 核心原则</h3><p>构建实体的签名 <code>signatureKey</code> 时，<strong>严禁在业务调用点直接拼字符串</strong>。必须且只能在 <code>IService</code> 接口中提供专属方法 <code>buildSignatureKey(...)</code>，由实现类覆写，调用方通过 <code>SignatureUtils.sign(entity, buildSignatureKey(...))</code> 使用。</p><h3 id="122-强制要求">12.2 强制要求</h3><div class="doc-table-wrap"><table><thead><tr><th>要求</th><th>说明</th></tr></thead><tbody><tr><td>接口必选</td><td><code>IService</code> 接口中必须声明 <code>buildSignatureKey(...)</code> 方法</td></tr><tr><td>参数要求</td><td><strong>参数为业务关键字段（非 Entity 对象）</strong>，如 <code>buildSignatureKey(String code, String name)</code></td></tr><tr><td>实现必覆写</td><td><code>ServiceImpl</code> 中必须 <code>@Override public</code> 实现该方法，访问权限<strong>必须为 <code>public</code></strong></td></tr><tr><td>分隔符常量</td><td>拼接时<strong>必须</strong>使用 <code>SignatureConstants.SEPARATOR</code>（值为 \`</td></tr><tr><td>零字段保护</td><td>可选业务字段若为 <code>null</code>，需转换为空串 <code>&quot;&quot;</code> 后再拼接</td></tr></tbody></table></div><h3 id="123-代码模板">12.3 代码模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// IService 接口（参数为业务字段，非 Entity）
    /**
     * 构建XXX签名 Key
     * @param code XXX编码
     * @param name XXX名称
     * @return 签名 Key 字符串
     */
    String buildSignatureKey(String code, String name);
    
    // ServiceImpl 实现
    @Override
    public String buildSignatureKey(String code, String name) {
        String c = code != null ? code : &quot;&quot;;
        String n = name != null ? name : &quot;&quot;;
        return c + SignatureConstants.SEPARATOR + n;
    }
    </code></pre></div><h3 id="124-保存/更新时签名">12.4 保存/更新时签名</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Override
    @Transactional(rollbackFor = Exception.class)
    public boolean saveXxx(XxxRequest request) {
        // 校验业务逻辑...
        Xxx entity = new Xxx();
        BeanUtils.copyProperties(request, entity);
        entity.setXxxId(IdGenerator.idKey());
        // 签名（自动设置 localSignature + signature 字段）
        SignatureUtils.sign(entity, buildSignatureKey(request.getCode(), request.getName()));
        return this.save(entity);
    }
    </code></pre></div><blockquote><p><strong>原因</strong>：显式分隔符避免不同字段边界值拼接冲突；键构造逻辑集中在 <code>IService.buildSignatureKey(...)</code>，字段顺序/分隔符调整只改一处；参数为业务字段而非 Entity，确保签名 Key 的构建与业务含义直接对应。</p></blockquote><hr><h2 id="十三设计意图">十三、设计意图</h2><h3 id="解决的问题">解决的问题</h3><p>返参类型混乱（Map/Object）、Swagger schema 失真、前端对接成本高。</p><h3 id="正面收益遵循规范">正面收益（遵循规范）</h3><ul><li><strong>Swagger 自生成 TS/Java</strong>：SpringDoc 自动产出 schema，前端可按类型生成对接代码，无需手动编写</li><li><strong>前端零文档对接</strong>：通过 Swagger UI 直接查看接口定义、参数说明、响应结构，减少沟通成本</li><li><strong>Entity 签名字段不外泄</strong>：<code>XxxResponse</code> 筛选字段后，签名字段（<code>local_signature</code>/<code>signature</code>）不暴露给前端，避免数据篡改风险</li></ul><h3 id="负面代价遵循规范">负面代价（遵循规范）</h3><ul><li>Request/Response 类增多（代码量增加约 10~20%）</li><li>初期需要为每个接口定义 DTO，学习成本略高</li></ul><h3 id="不遵循的后果">不遵循的后果</h3><ul><li><strong>前端盲调</strong>：Swagger schema 失真，前端只能按 Map 处理，无法享受 IDE 自动补全</li><li><strong>数据篡改风险</strong>：Entity 直接返回时，签名字段泄漏，攻击者可仿造任意数据</li><li><strong>接口签名体系失效</strong>：签名字段暴露后，双签名验签机制对外部无效，仅剩内部防护</li></ul><h3 id="适用边界">适用边界</h3><ul><li><strong>必须遵守</strong>：所有对外暴露的 HTTP 接口（Controller 层）</li><li><strong>酌情变通</strong>：内部 Feign 接口在 <code>@Inner</code> 场景下，如确认调用方可信且在同一服务内，可适当简化</li><li><strong>例外</strong>：临时调试接口、历史遗留接口（逐步改造）、文件下载流式响应（使用 OutputStream）</li></ul><hr><blockquote><p><strong>相关规范</strong></p><ul><li><a href="/library/12">数据库设计规范</a> — 字段类型、表命名</li><li><a href="/library/14">数据签名设计规范</a> — 双签名体系说明</li></ul></blockquote>`,146)])]))}}),jt={class:"doc-article"},Bt=h({__name:"ErrorHandlingDoc",setup(n){return(s,t)=>(o(),a("article",jt,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-29 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><hr><h2 id="一全局异常处理器">一、全局异常处理器</h2><h3 id="11-globalbizexceptionhandler">1.1 GlobalBizExceptionHandler</h3><p>全局异常处理器位于 <code>ecdp-common-feign</code>，使用 <code>@RestControllerAdvice</code> 注解：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@RestControllerAdvice
    public class GlobalBizExceptionHandler {
        // ...
    }
    </code></pre></div><h3 id="12-异常类型-→-http-状态码映射表">1.2 异常类型 → HTTP 状态码映射表</h3><div class="doc-table-wrap"><table><thead><tr><th>异常类型</th><th>HTTP 状态码</th><th>说明</th></tr></thead><tbody><tr><td><code>MissingServletRequestParameterException</code></td><td>500</td><td>缺少请求参数</td></tr><tr><td><code>MethodArgumentNotValidException</code></td><td>400</td><td>参数校验失败</td></tr><tr><td><code>BindException</code></td><td>400</td><td>参数绑定失败</td></tr><tr><td><code>MethodArgumentTypeMismatchException</code></td><td>400</td><td>参数类型不匹配</td></tr><tr><td><code>HttpMessageNotReadableException</code></td><td>400</td><td>请求体不可读</td></tr><tr><td><code>BadCredentialsException</code></td><td>401</td><td>认证失败</td></tr><tr><td><code>AccessDeniedException</code></td><td>403</td><td>权限不足</td></tr><tr><td><code>NoResourceFoundException</code></td><td>404</td><td>资源不存在</td></tr><tr><td><code>HttpRequestMethodNotSupportedException</code></td><td>405</td><td>请求方法不支持</td></tr><tr><td><code>ServiceException</code></td><td>200</td><td>业务异常（code 非 200）</td></tr><tr><td><code>IllegalArgumentException</code></td><td>200</td><td>非法参数异常（业务层抛出）</td></tr><tr><td><code>NoHandlerFoundException</code></td><td>500</td><td>请求路径无处理器</td></tr><tr><td><code>Exception</code> / <code>Throwable</code></td><td>500</td><td>未知异常</td></tr></tbody></table></div><h3 id="13-异常处理响应格式">1.3 异常处理响应格式</h3><div class="code-block"><div class="code-head"><span class="code-lang">json</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-json">// 参数校验失败（HTTP 400）
    {
      &quot;code&quot;: 400,
      &quot;message&quot;: &quot;角色名称不能为空&quot;,
      &quot;success&quot;: false,
      &quot;data&quot;: null,
      &quot;timestamp&quot;: 1713619200000
    }
    
    // 业务异常（HTTP 200）
    {
      &quot;code&quot;: 20001,
      &quot;message&quot;: &quot;该企业下已存在相同角色编码的角色&quot;,
      &quot;success&quot;: false,
      &quot;data&quot;: null,
      &quot;timestamp&quot;: 1713619200000
    }
    
    // 系统异常（HTTP 500）
    {
      &quot;code&quot;: 500,
      &quot;message&quot;: &quot;服务器内部错误&quot;,
      &quot;success&quot;: false,
      &quot;data&quot;: null,
      &quot;timestamp&quot;: 1713619200000
    }
    </code></pre></div><h3 id="14-业务异常抛出方式">1.4 业务异常抛出方式</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 使用 ErrorCode 枚举抛出
    throw new ServiceException(FloodInspectionErrorCode.ORG_NOT_FOUND, &quot;组织不存在&quot;);
    
    // 直接抛出（使用默认错误码）
    throw new ServiceException(&quot;参数错误&quot;);
    
    // 带错误码和消息
    throw new ServiceException(ErrorCode.SYSTEM_ERROR, &quot;系统繁忙，请稍后重试&quot;);
    </code></pre></div><hr><h2 id="二错误码体系">二、错误码体系</h2><h3 id="21-错误码格式">2.1 错误码格式</h3><p>项目采用 5 位错误码格式：<strong>服务标识(1位) + 模块标识(2位) + 具体错误码(2位)</strong></p><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>┌─────────────────────────────────┐
    │  服务标识  │  模块标识  │  具体错误码  │
    │   1位     │   2位     │    2位       │
    └─────────────────────────────────┘
    </code></pre></div><h3 id="22-模块错误码范围">2.2 模块错误码范围</h3><div class="doc-table-wrap"><table><thead><tr><th>模块</th><th>错误码接口</th><th>错误码范围</th><th>说明</th></tr></thead><tbody><tr><td>安全/认证</td><td><code>SecurityErrorCode</code></td><td>11001-12706</td><td>认证失败、Token 无效、权限不足等</td></tr><tr><td>防汛检查</td><td><code>FloodInspectionErrorCode</code></td><td>20001-20301</td><td>巡查任务、组织管理等业务错误</td></tr></tbody></table></div><blockquote><p><strong>说明</strong>：其他业务模块（值守、预案、事件、调度、物资、决策支持、数据融合、第三方集成）的错误码待各模块实现后补充。通用错误码通过 <code>ServiceException</code> + HTTP 状态码处理，未单独定义 ErrorCode 枚举。</p></blockquote><h3 id="23-errorcode-接口规范">2.3 ErrorCode 接口规范</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">/**
     * 错误码接口
     */
    public interface ErrorCode {
        /**
         * 获取错误码
         */
        Integer getCode();
    
        /**
         * 获取错误消息
         */
        String getMessage();
    }
    </code></pre></div><h3 id="24-错误码枚举示例">2.4 错误码枚举示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">public enum FloodInspectionErrorCode implements ErrorCode {
    
        ORG_NOT_FOUND(20001, &quot;组织不存在&quot;),
        ORG_DUPLICATE(20002, &quot;组织编码重复&quot;),
        TASK_NOT_FOUND(20101, &quot;巡查任务不存在&quot;),
        SECTION_NOT_FOUND(20201, &quot;路段不存在&quot;),
        PILE_NOT_FOUND(20301, &quot;桩号不存在&quot;);
    
        private final Integer code;
        private final String message;
    
        FloodInspectionErrorCode(Integer code, String message) {
            this.code = code;
            this.message = message;
        }
    
        @Override
        public Integer getCode() {
            return code;
        }
    
        @Override
        public String getMessage() {
            return message;
        }
    }
    </code></pre></div><h3 id="25-securityerrorcode-速查">2.5 SecurityErrorCode 速查</h3><div class="doc-table-wrap"><table><thead><tr><th>错误码</th><th>常量名</th><th>说明</th></tr></thead><tbody><tr><td>11001</td><td><code>AUTH_CREDENTIALS_INVALID</code></td><td>用户名或密码错误</td></tr><tr><td>11002</td><td><code>AUTH_ACCOUNT_DISABLED</code></td><td>账号已停用</td></tr><tr><td>11003</td><td><code>AUTH_ACCOUNT_LOCKED</code></td><td>账号已锁定</td></tr><tr><td>11004</td><td><code>AUTH_ACCOUNT_EXPIRED</code></td><td>账号已过期</td></tr><tr><td>11101</td><td><code>TOKEN_INVALID</code></td><td>Token 无效</td></tr><tr><td>11102</td><td><code>TOKEN_EXPIRED</code></td><td>Token 已过期</td></tr><tr><td>11201</td><td><code>PERMISSION_DENIED</code></td><td>权限不足</td></tr></tbody></table></div><h3 id="26-floodinspectionerrorcode-速查">2.6 FloodInspectionErrorCode 速查</h3><div class="doc-table-wrap"><table><thead><tr><th>错误码</th><th>常量名</th><th>说明</th></tr></thead><tbody><tr><td>20001</td><td><code>ORG_NOT_FOUND</code></td><td>组织不存在</td></tr><tr><td>20002</td><td><code>ORG_DUPLICATE</code></td><td>组织编码重复</td></tr><tr><td>20101</td><td><code>TASK_NOT_FOUND</code></td><td>巡查任务不存在</td></tr><tr><td>20201</td><td><code>SECTION_NOT_FOUND</code></td><td>路段不存在</td></tr><tr><td>20301</td><td><code>PILE_NOT_FOUND</code></td><td>桩号不存在</td></tr></tbody></table></div><hr><h2 id="三服务韧性">三、服务韧性</h2><h3 id="31-sentinel-熔断">3.1 Sentinel 熔断</h3><h4 id="当前状态">当前状态</h4><p><code>ecdp-common-feign</code> 已引入 <code>spring-cloud-starter-alibaba-sentinel</code> 依赖，但当前<strong>未配置 FallbackFactory</strong>。</p><h4 id="熔断降级配置模板">熔断降级配置模板</h4><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@FeignClient(contextId = &quot;remoteXxxService&quot;,
                 value = &quot;ecdp-xxx&quot;,
                 fallbackFactory = RemoteXxxServiceFallbackFactory.class)
    public interface RemoteXxxService { ... }
    
    // FallbackFactory 实现
    @Component
    public class RemoteXxxServiceFallbackFactory
            implements FallbackFactory&lt;RemoteXxxService&gt; {
    
        private static final Logger log = LoggerFactory.getLogger(RemoteXxxServiceFallbackFactory.class);
    
        @Override
        public RemoteXxxService create(Throwable cause) {
            return new RemoteXxxService() {
                @Override
                public ApiResult&lt;XxxResponse&gt; getXxx(Long id) {
                    log.error(&quot;调用 RemoteXxxService 失败，熔断降级&quot;, cause);
                    return ApiResult.fail(&quot;服务暂时不可用，请稍后重试&quot;);
                }
            };
        }
    }
    </code></pre></div><h4 id="sentinel-配置">Sentinel 配置</h4><div class="code-block"><div class="code-head"><span class="code-lang">yaml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-yaml">spring:
      cloud:
        sentinel:
          enabled: true
          transport:
            dashboard: localhost:8080
          filter:
            enabled: true
    </code></pre></div><blockquote><p><strong>重要</strong>：生产环境上线前必须为关键 Feign 调用补充降级逻辑。</p></blockquote><h3 id="32-feign-重试">3.2 Feign 重试</h3><p>通过 <code>application.yml</code> 配置 Feign 重试策略：</p><div class="code-block"><div class="code-head"><span class="code-lang">yaml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-yaml">feign:
      client:
        config:
          default:
            connectTimeout: 5000
            readTimeout: 10000
            retryer: feign.Retryer.Default
    </code></pre></div><h3 id="33-熔断策略说明">3.3 熔断策略说明</h3><div class="doc-table-wrap"><table><thead><tr><th>策略</th><th>说明</th></tr></thead><tbody><tr><td>慢调用比例</td><td>慢调用比例超过阈值时触发熔断</td></tr><tr><td>异常比例</td><td>异常比例超过阈值时触发熔断</td></tr><tr><td>异常数</td><td>异常数量超过阈值时触发熔断</td></tr></tbody></table></div><h3 id="34-当前未启用状态说明">3.4 当前未启用状态说明</h3><p>当前所有 <code>Remote*Service</code> Feign 接口均未配置 <code>fallbackFactory</code>，需在生产环境上线前为关键 Feign 调用补充降级逻辑。</p><hr><h2 id="四事务管理">四、事务管理</h2><h3 id="41-本地事务">4.1 本地事务</h3><p>单服务内多表操作使用 <code>@Transactional</code>：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Transactional(rollbackFor = Exception.class)
    public boolean saveRole(SysRoleRequest request) {
        // 多表操作在同一事务中
        SysRole role = new SysRole();
        role.setRoleId(IdGenerator.idKey());
        role.setName(request.getName());
        role.setCode(request.getCode());
        role.setEntId(request.getEntId());
    
        // 插入角色
        roleMapper.insert(role);
    
        // 插入角色权限关联
        roleMenuMapper.delete(new LambdaQueryWrapper&lt;SysRoleMenu&gt;()
                .eq(SysRoleMenu::getRoleId, role.getRoleId()));
        if (CollectionUtils.isNotEmpty(request.getMenuIds())) {
            List&lt;SysRoleMenu&gt; roleMenus = request.getMenuIds().stream()
                    .map(menuId -&gt; {
                        SysRoleMenu rm = new SysRoleMenu();
                        rm.setRoleMenuId(IdGenerator.idKey());
                        rm.setRoleId(role.getRoleId());
                        rm.setMenuId(menuId);
                        return rm;
                    }).toList();
            roleMenuMapper.insertBatch(roleMenus);
        }
    
        return true;
    }
    </code></pre></div><h3 id="42-事务传播行为">4.2 事务传播行为</h3><div class="doc-table-wrap"><table><thead><tr><th>传播行为</th><th>说明</th></tr></thead><tbody><tr><td><code>REQUIRED</code>（默认）</td><td>如果当前存在事务，则加入该事务；否则创建新事务</td></tr><tr><td><code>REQUIRES_NEW</code></td><td>每次都创建新事务，挂起当前事务</td></tr><tr><td><code>NESTED</code></td><td>如果当前存在事务，则在嵌套事务中执行；否则创建新事务</td></tr></tbody></table></div><h3 id="43-跨服务幂等">4.3 跨服务幂等</h3><p>当前无分布式事务组件，跨服务一致性通过以下方式保证：</p><ul><li><strong>幂等设计</strong>：Redis <code>SETNX</code> + 数据库唯一约束</li><li><strong>最终一致性</strong>：消息队列异步处理 + 补偿机制</li></ul><h3 id="44-最终一致性策略">4.4 最终一致性策略</h3><h4 id="441-消息队列异步处理">4.4.1 消息队列异步处理</h4><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>服务A（本地事务） → 发送消息 → MQ → 服务B消费 → 更新数据
         ↓
      失败回滚本地事务，消息不发送
    </code></pre></div><h4 id="442-补偿机制">4.4.2 补偿机制</h4><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 定时任务扫描未完成的操作，执行补偿
    @XxlJob(&quot;compensationJob&quot;)
    public void compensation() {
        List&lt;PendingOperation&gt; pendingList = pendingMapper.selectUnfinished();
    
        for (PendingOperation pending : pendingList) {
            try {
                // 执行补偿逻辑
                remoteService.process(pending);
                pending.setStatus(2); // 已完成
            } catch (Exception e) {
                pending.setRetryCount(pending.getRetryCount() + 1);
                if (pending.getRetryCount() &gt;= MAX_RETRY) {
                    pending.setStatus(3); // 补偿失败
                }
            }
            pendingMapper.updateById(pending);
        }
    }
    </code></pre></div><h3 id="45-事务注意事项">4.5 事务注意事项</h3><div class="doc-table-wrap"><table><thead><tr><th>注意事项</th><th>说明</th></tr></thead><tbody><tr><td><code>rollbackFor</code></td><td>必须指定 <code>rollbackFor = Exception.class</code>，确保非运行时异常也回滚</td></tr><tr><td>事务范围</td><td>事务边界不宜过大，避免长事务导致数据库连接占用</td></tr><tr><td>避免嵌套</td><td>避免在事务方法中调用远程服务或发送消息</td></tr><tr><td>只读事务</td><td>查询方法可使用 <code>readOnly = true</code> 优化性能</td></tr></tbody></table></div><hr><h2 id="五设计意图">五、设计意图</h2><h3 id="解决的问题">解决的问题</h3><p>异常信息不一致（有的抛 500 有的 code=200）、错误码碎片化。</p><h3 id="正面收益遵循规范">正面收益（遵循规范）</h3><ul><li><strong>前端统一错误处理</strong>：HTTP 状态码 + 业务错误码双层结构，前端可区分「网络错误」和「业务错误」</li><li><strong>错误可归因到模块/子系统</strong>：5 位错误码格式，错误码前缀对应模块，排障时快速定位问题域</li><li><strong>错误可追溯</strong>：结合 <code>@SysLog</code> 操作日志，错误发生时可追溯到具体的操作用户、操作时间</li></ul><h3 id="负面代价遵循规范">负面代价（遵循规范）</h3><ul><li>错误码维护成本（新增错误码需同步文档）</li><li>错误码体系设计需要前期规划</li></ul><h3 id="不遵循的后果">不遵循的后果</h3><ul><li><strong>前端无法区分「网络错误」和「业务错误」</strong>：所有异常都返回 500，前端只能通过 message 文本判断，脆弱且易误判</li><li><strong>生产排障困难</strong>：无错误码体系，排查问题只能通过日志关键字搜索，效率低</li><li><strong>国际化困难</strong>：硬编码错误消息无法支持多语言</li></ul><h3 id="适用边界">适用边界</h3><ul><li><strong>必须遵守</strong>：所有对外暴露的 HTTP 接口必须在 Controller 层处理异常</li><li><strong>酌情变通</strong>：内部服务间调用（Feign）的异常降级可简化处理</li><li><strong>例外</strong>：网关层异常（如 GatewayFilter 异常）由网关统一处理，不走业务服务的异常处理器</li></ul><hr><blockquote><p><strong>相关规范</strong></p><ul><li><a href="/library/11">服务间通信规范</a> — Feign 降级、第三方对接</li><li><a href="/library/7">接口设计规范</a> — 统一响应格式</li></ul></blockquote>`,76)])]))}}),Ht={class:"doc-article"},Gt=h({__name:"LoggingDoc",setup(n){return(s,t)=>(o(),a("article",Ht,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-29 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><hr><h2 id="一@syslog-注解定义">一、@SysLog 注解定义</h2><p><code>@SysLog</code> 注解用于记录操作日志，通过 <strong>四维枚举</strong> 多维刻画操作行为。</p><h3 id="11-注解位置">1.1 注解位置</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>com.infoview.common.log.annotation.SysLog
    </code></pre></div><h3 id="12-注解字段">1.2 注解字段</h3><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>title()</code></td><td><code>String</code></td><td><code>&quot;&quot;</code></td><td>操作标题（日志展示名，建议用动词+名词，如「新增用户」「导出巡查记录」）</td></tr><tr><td><code>subSystem()</code></td><td><code>SubSystemEnum</code></td><td><code>COMMON</code></td><td><strong>子系统标识</strong>（必填，产品维度）</td></tr><tr><td><code>funcType()</code></td><td><code>FuncTypeEnum</code></td><td><code>OTHER</code></td><td><strong>操作类型</strong>（行为维度）</td></tr><tr><td><code>moduleType()</code></td><td><code>ModuleTypeEnum</code></td><td><code>OTHER_TYPE</code></td><td><strong>模块分类</strong>（资源维度）</td></tr><tr><td><code>operatorType()</code></td><td><code>TerminalTypeEnum</code></td><td><code>BACKSTAGE</code></td><td><strong>操作端类型</strong>（访问端维度）</td></tr><tr><td><code>isSaveRequest()</code></td><td><code>boolean</code></td><td><code>true</code></td><td>是否保存请求参数（GET 截取 query string，POST 截取 JSON body）</td></tr><tr><td><code>isSaveResponse()</code></td><td><code>boolean</code></td><td><code>true</code></td><td>是否保存响应数据</td></tr></tbody></table></div><blockquote><p><strong>强制要求</strong>：<code>subSystem()</code> 必须显式指定，禁止依赖默认值。</p></blockquote><hr><h2 id="二四维协同关系">二、四维协同关系</h2><p>四个枚举回答了四个<strong>互相正交</strong>的问题，构成「操作画像」：</p><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>┌──────────────────────────────────────────────────────────────────┐
    │                       操作日志四维画像                              │
    ├──────────────┬──────────────┬─────────────────┬──────────────────┤
    │  产品维度      │  行为维度      │   资源维度        │   访问端维度       │
    │ subSystem     │  funcType     │   moduleType    │   operatorType   │
    ├──────────────┼──────────────┼─────────────────┼──────────────────┤
    │ 应急值守       │ INSERT 新增   │ DUTY_TYPE      │ BACKSTAGE 后台    │
    │ 应急预案       │ UPDATE 修改   │ PLAN_TYPE      │ MOBILE 移动       │
    │ 应急事件       │ DELETE 删除   │ EVENT_TYPE     │ LARGE_SCREEN 大屏 │
    │ 应急调度       │ GRANT 授权   │ DISPATCH_TYPE  │ HARDWARE 硬件     │
    │ 物资管理       │ IMPORT 导入   │ RESOURCE_TYPE  │                  │
    │ 辅助决策       │ EXPORT 导出   │ DSS_TYPE       │                  │
    │ 数据融合       │ UPLOAD 上传   │ FUSION_TYPE    │                  │
    │ 汛期公路巡查系统  │ DOWNLOAD 下载 │ FLOOD_*_TYPE   │                  │
    │ 第三方服务     │ CLEAN 清空   │ THIRD_PARTY_*  │                  │
    │ 后台管理       │ SYNC 同步    │ UPMS_TYPE      │                  │
    │ 公共          │ AUTH 认证    │ OTHER_TYPE     │                  │
    │ 综合展示       │ OTHER 其他   │ AUTH_TYPE      │                  │
    │              │              │ WORKFLOW_TYPE  │                  │
    └──────────────┴──────────────┴─────────────────┴──────────────────┘
    </code></pre></div><h3 id="21-各维度职责">2.1 各维度职责</h3><div class="doc-table-wrap"><table><thead><tr><th>维度</th><th>枚举</th><th>回答的问题</th><th>编码特点</th></tr></thead><tbody><tr><td><strong>产品</strong></td><td><code>SubSystemEnum</code></td><td>在哪个子系统发生？</td><td>code 与 <code>sys_subsystem.subsys_id</code> 一致；附带 <code>prefix</code> 用于 RabbitMQ 路由键统一命名</td></tr><tr><td><strong>行为</strong></td><td><code>FuncTypeEnum</code></td><td>做了什么操作？</td><td>code 0-11（OTHER / AUTH / INSERT / UPDATE / DELETE / GRANT / IMPORT / EXPORT / UPLOAD / DOWNLOAD / CLEAN / SYNC）</td></tr><tr><td><strong>资源</strong></td><td><code>ModuleTypeEnum</code></td><td>操作的是哪个资源？</td><td>code 采用 <strong>「大类 × 100 + 子序号」</strong> 编码（如 <code>11101 = FLOOD_ORG_TYPE</code>，前三位 <code>111</code> 对应 <code>FLOOD_INSPECTION_TYPE</code> 大类）</td></tr><tr><td><strong>端</strong></td><td><code>TerminalTypeEnum</code></td><td>从哪个端发起？</td><td>code 0-3（BACKSTAGE / MOBILE / LARGE_SCREEN / HARDWARE），默认 BACKSTAGE</td></tr></tbody></table></div><hr><h2 id="三subsystemenum-与-moduletypeenum-关系">三、SubSystemEnum 与 ModuleTypeEnum 关系</h2><h3 id="31-两者区别">3.1 两者区别</h3><div class="doc-table-wrap"><table><thead><tr><th>维度</th><th>描述</th><th>粒度</th><th>用途</th></tr></thead><tbody><tr><td><code>SubSystemEnum</code></td><td>宏观业务域</td><td>粗粒度</td><td>跨子系统统计、消息路由、错误码前缀</td></tr><tr><td><code>ModuleTypeEnum</code></td><td>具体功能模块</td><td>细粒度</td><td>模块级精细化审计、聚合统计</td></tr></tbody></table></div><h3 id="32-联动示例">3.2 联动示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 汛期公路巡查系统的巡查任务模块导出操作
    @SysLog(
        title = &quot;导出巡查任务列表&quot;,
        subSystem = SubSystemEnum.FLOOD_INSPECTION,   // ① 宏观子系统
        moduleType = ModuleTypeEnum.FLOOD_TASK_TYPE,  // ② 具体资源模块
        funcType = FuncTypeEnum.EXPORT,               // ③ 行为
        operatorType = TerminalTypeEnum.BACKSTAGE     // ④ 访问端
    )
    </code></pre></div><h3 id="33-subsystemenumprefix-的复用">3.3 SubSystemEnum.prefix 的复用</h3><p><code>SubSystemEnum</code> 同时承担三重职责：</p><ol><li><strong>日志分类</strong>：<code>@SysLog.subSystem</code> 字段</li><li><strong>MQ 路由键命名</strong>：<code>SubSystemEnum.prefix</code> 用于 RabbitMQ 交换机/队列前缀</li><li><strong>错误码前缀</strong>：<code>SubSystemEnum.buildErrorCode()</code> 生成业务异常错误码</li></ol><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 错误码 = 子系统code + 模块基础错误码
    Integer code = SubSystemEnum.FLOOD_INSPECTION.buildErrorCode(20001);
    // 结果：9 + &quot;20001&quot; = &quot;920001&quot;
    </code></pre></div><hr><h2 id="四moduletypeenum-编码规则">四、ModuleTypeEnum 编码规则</h2><h3 id="41-编码公式">4.1 编码公式</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>大类 × 100 + 子序号 = 子模块编码
    </code></pre></div><h3 id="42-编码示例">4.2 编码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>FLOOD_INSPECTION_TYPE = 110
        ↓ × 100
        FLOOD_ORG_TYPE      = 11101  (110 × 100 + 1)
        FLOOD_SYSTEM_TYPE   = 11102  (110 × 100 + 2)
        FLOOD_BASIC_TYPE    = 11103  (110 × 100 + 3)
        ...
        FLOOD_SUMMARY_TYPE  = 11111  (110 × 100 + 11)
    
    THIRD_PARTY_TYPE     = 20
        ↓ × 100
        THIRD_PARTY_SMS_TYPE        = 2001  (20 × 100 + 1)
        THIRD_PARTY_FUSION_COMM_TYPE = 2002  (20 × 100 + 2)
        ...
    </code></pre></div><h3 id="43-编码规则说明">4.3 编码规则说明</h3><div class="doc-table-wrap"><table><thead><tr><th>规则</th><th>说明</th></tr></thead><tbody><tr><td><strong>大类 × 100 + 子序号</strong></td><td>保留 2 位子序号空间，单大类最多支持 100 个子模块</td></tr><tr><td><strong>末位 0 预留</strong></td><td>当前 <code>FLOOD_INSPECTION_TYPE</code> 已用 11 个子模块，预留 89 个位置</td></tr><tr><td><strong>末位 1 个位起</strong></td><td>子序号从 <code>× 01</code> 开始（如 <code>11101</code>），便于按尾数快速识别</td></tr></tbody></table></div><h3 id="44-聚合统计能力">4.4 聚合统计能力</h3><p>层级编码支持多维度聚合统计：</p><ul><li><strong>按大类汇总</strong>：<code>code BETWEEN 11000 AND 11999</code> → FLOOD_INSPECTION 所有模块</li><li><strong>按子模块细化</strong>：<code>code = 11101</code> → FLOOD_ORG_TYPE 单模块</li><li><strong>空间预留</strong>：末位 0 未使用，未来可新增大类</li></ul><hr><h2 id="五写入链路">五、写入链路</h2><h3 id="51-同步写入链路主路径">5.1 同步写入链路（主路径）</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>Controller 方法（标注 @SysLog）
        ↓ LogAspect 切点 @annotation(com.infoview.common.log.annotation.SysLog)
        ↓ 解析注解 4 个枚举值 + HttpServletRequest（IP/UA/Browser/OS/Method/URI）
        ↓ 构造 SysAccessLog（含敏感字段脱敏）
        ↓ RemoteAccessLogService.saveLog(accessLog)   ← Feign 同步调用
        ↓ upms-biz 持久化到 sys_access_log 表
    </code></pre></div><h3 id="52-异步事件链路预留">5.2 异步事件链路（预留）</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>Controller 执行 → @SysLog 切面 → 发布 SysLogEvent
                                          ↓（异步）
                                  SysLogListener → Feign → UPMS → sys_access_log 表
    </code></pre></div><blockquote><p><strong>当前状态</strong>：主路径是 <code>LogAspect</code> 同步调用。<code>SysLogEvent</code> + <code>SysLogListener</code> 已预留为异步方案。</p></blockquote><hr><h2 id="六敏感数据保护">六、敏感数据保护</h2><h3 id="61-logaspect-内置脱敏字段清单">6.1 LogAspect 内置脱敏字段清单</h3><p><code>LogAspect</code> 在记录请求参数和响应数据时，自动对以下敏感字段进行脱敏：</p><div class="doc-table-wrap"><table><thead><tr><th>字段名（忽略大小写）</th><th>脱敏规则</th></tr></thead><tbody><tr><td><code>password</code></td><td>替换为 <code>******</code></td></tr><tr><td><code>pwd</code></td><td>替换为 <code>******</code></td></tr><tr><td><code>oldPwd</code></td><td>替换为 <code>******</code></td></tr><tr><td><code>newPwd</code></td><td>替换为 <code>******</code></td></tr><tr><td><code>token</code></td><td>替换为 <code>******</code></td></tr><tr><td><code>secret</code></td><td>替换为 <code>******</code></td></tr><tr><td><code>loginName</code></td><td>替换为 <code>******</code></td></tr><tr><td><code>phone</code></td><td>部分脱敏（如 <code>176****1234</code>）</td></tr><tr><td><code>email</code></td><td>部分脱敏</td></tr><tr><td><code>idCard</code></td><td>部分脱敏（身份证号）</td></tr><tr><td><code>bankCard</code></td><td>部分脱敏（银行卡号）</td></tr></tbody></table></div><h3 id="62-脱敏方法">6.2 脱敏方法</h3><ul><li><code>desensitizeQueryString</code>：对 GET 请求 query string 脱敏</li><li><code>desensitizeJson</code>：对 POST 请求 JSON body 脱敏</li></ul><h3 id="63-最佳实践">6.3 最佳实践</h3><ol><li><strong>避免传输原始密码</strong>：即使日志会脱敏，仍建议避免在请求体中传输原始密码</li><li><strong>优先使用加密字段</strong>：敏感数据在业务层加密后传输，日志记录加密值</li><li><strong>定期审计日志</strong>：定期检查 <code>sys_access_log</code> 表，确保无敏感信息泄漏</li></ol><hr><h2 id="七典型使用示例">七、典型使用示例</h2><h3 id="71-新增insert">7.1 新增（INSERT）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;新增用户&quot;, subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.INSERT, moduleType = ModuleTypeEnum.UPMS_TYPE)
    @PostMapping(&quot;/save&quot;)
    public ApiResult&lt;Long&gt; save(@RequestBody SysUserSaveRequest request) { ... }
    </code></pre></div><h3 id="72-删除delete">7.2 删除（DELETE）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;批量删除App信息&quot;, subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.DELETE, moduleType = ModuleTypeEnum.UPMS_TYPE)
    @PostMapping(&quot;/batchDelete&quot;)
    public ApiResult&lt;Void&gt; batchDelete(@RequestBody AppInfoBatchRequest request) { ... }
    </code></pre></div><h3 id="73-更新update">7.3 更新（UPDATE）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;修改巡查任务&quot;, subSystem = SubSystemEnum.FLOOD_INSPECTION, funcType = FuncTypeEnum.UPDATE, moduleType = ModuleTypeEnum.FLOOD_TASK_TYPE)
    @PutMapping(&quot;/update&quot;)
    public ApiResult&lt;Void&gt; update(@RequestBody FloodTaskUpdateRequest request) { ... }
    </code></pre></div><h3 id="74-导出export">7.4 导出（EXPORT）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;导出巡查记录&quot;, subSystem = SubSystemEnum.FLOOD_INSPECTION, funcType = FuncTypeEnum.EXPORT, moduleType = ModuleTypeEnum.FLOOD_RECORD_TYPE, operatorType = TerminalTypeEnum.BACKSTAGE)
    @GetMapping(&quot;/export&quot;)
    public void export(FloodRecordQueryRequest request, HttpServletResponse response) { ... }
    </code></pre></div><h3 id="75-下载download">7.5 下载（DOWNLOAD）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;App更新检查&quot;, subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.DOWNLOAD, moduleType = ModuleTypeEnum.UPMS_TYPE)
    @GetMapping(&quot;/download&quot;)
    public void download(AppDownloadRequest request, HttpServletResponse response) { ... }
    </code></pre></div><h3 id="76-导入import">7.6 导入（IMPORT）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;导入物资清单&quot;, subSystem = SubSystemEnum.EMERGENCY_MATERIAL, funcType = FuncTypeEnum.IMPORT, moduleType = ModuleTypeEnum.RESOURCE_TYPE)
    @PostMapping(&quot;/import&quot;)
    public ApiResult&lt;ImportResult&gt; import(@RequestParam MultipartFile file) { ... }
    </code></pre></div><h3 id="77-授权grant">7.7 授权（GRANT）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;分配角色&quot;, subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.GRANT, moduleType = ModuleTypeEnum.UPMS_TYPE)
    @PostMapping(&quot;/grant&quot;)
    public ApiResult&lt;Void&gt; grant(@RequestBody SysUserGrantRequest request) { ... }
    </code></pre></div><h3 id="78-同步sync">7.8 同步（SYNC）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;同步气象数据&quot;, subSystem = SubSystemEnum.DATA_FUSION, funcType = FuncTypeEnum.SYNC, moduleType = ModuleTypeEnum.THIRD_PARTY_HIGHWAY_WEATHER_TYPE)
    @PostMapping(&quot;/sync&quot;)
    public ApiResult&lt;Void&gt; sync() { ... }
    </code></pre></div><h3 id="79-认证auth">7.9 认证（AUTH）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@SysLog(title = &quot;用户登录&quot;, subSystem = SubSystemEnum.COMMON, funcType = FuncTypeEnum.AUTH, moduleType = ModuleTypeEnum.AUTH_TYPE)
    @PostMapping(&quot;/login&quot;)
    public ApiResult&lt;LoginResponse&gt; login(@RequestBody LoginRequest request) { ... }
    </code></pre></div><hr><h2 id="八设计意图">八、设计意图</h2><h3 id="81-解决的问题">8.1 解决的问题</h3><ul><li><strong>操作日志四维枚举混用</strong>：缺少统一规范，导致日志归因困难</li><li><strong>SubSystemEnum 重复定义</strong>：部分模块自行定义子系统枚举，与 <code>SubSystemEnum</code> 不一致</li><li><strong>日志与 MQ 路由键不一致</strong>：两个模块使用不同的命名体系，无法关联分析</li></ul><h3 id="82-正面收益遵循规范">8.2 正面收益（遵循规范）</h3><ul><li><strong>多维查询能力</strong>：可按「子系统 × 模块 × 操作 × 端」任意组合查询，满足审计追溯需求</li><li><strong>审计合规</strong>：四维画像满足合规审计要求，便于生成操作轨迹报告</li><li><strong>MQ 路由键复用</strong>：<code>SubSystemEnum.prefix</code> 同时用于日志分类和 MQ 命名，日志与消息一体化追溯</li><li><strong>聚合统计</strong>：<code>ModuleTypeEnum</code> 层级编码支持按大类/子模块聚合统计操作量</li><li><strong>扩展友好</strong>：新增业务子系统只需在枚举中添加值，无需改动切面和写入链路</li></ul><h3 id="83-负面代价遵循规范">8.3 负面代价（遵循规范）</h3><ul><li><strong><code>@SysLog</code> 注解每个写接口都要写</strong>：每个 INSERT/UPDATE/DELETE/IMPORT/EXPORT 等操作接口需标注，约 2~3 分钟/接口</li><li><strong>枚举值需要维护</strong>：新增业务模块时需同时在 <code>SubSystemEnum</code> + <code>ModuleTypeEnum</code> 添加枚举值</li></ul><h3 id="84-不遵循的后果">8.4 不遵循的后果</h3><ul><li><strong>审计数据不完整</strong>：缺少 <code>@SysLog</code> 注解的操作无法追溯</li><li><strong>无法按子系统统计</strong>：枚举混用导致跨模块统计失效</li><li><strong>MQ 路由键不一致</strong>：日志与消息无法关联分析</li><li><strong>敏感数据泄漏</strong>：缺少脱敏机制，操作日志可能包含密码等敏感信息</li></ul><h3 id="85-适用边界">8.5 适用边界</h3><div class="doc-table-wrap"><table><thead><tr><th>场景</th><th>规范要求</th></tr></thead><tbody><tr><td>新增 / 删除 / 更新 / 导入 / 导出 / 下载 / 上传 / 授权 / 清空 / 同步 / 认证等写操作</td><td><strong>必须</strong>标注 <code>@SysLog</code></td></tr><tr><td>GET 查询、列表等读操作</td><td><strong>不强制</strong>标注</td></tr><tr><td>内部接口（Feign 调用）</td><td>视业务需求决定</td></tr><tr><td>临时接口 / 测试接口</td><td>可酌情省略，但正式接口必须遵守</td></tr></tbody></table></div>`,84)])]))}}),Vt={class:"doc-article"},Kt=h({__name:"MessageQueueDoc",setup(n){return(s,t)=>(o(),a("article",Vt,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-29 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><hr><h2 id="一术语延时队列方案对比">一、术语（延时队列方案对比）</h2><h3 id="11-延时队列">1.1 延时队列</h3><p>消息队列支持消息延迟投递的特性，用于解决「定时触发」场景（如订单超时关闭、任务延迟执行等）。</p><h3 id="12-三种实现方案对比">1.2 三种实现方案对比</h3><div class="doc-table-wrap"><table><thead><tr><th>方案</th><th>原理</th><th>优点</th><th>缺点</th><th>适用场景</th></tr></thead><tbody><tr><td><strong>TTL + DLX</strong></td><td>队列设置 TTL，消息过期后进入死信交换机（DLX）重新路由</td><td>实现简单，无需插件</td><td>精度低（秒级），消息堆积时延迟不准</td><td>简单延迟（5s/30s/1min）</td></tr><tr><td><strong>x-delayed-message</strong></td><td>RabbitMQ 延迟消息插件，支持精确毫秒级延迟</td><td>精度高（毫秒），单条消息独立延迟</td><td>需要安装插件，集群部署复杂</td><td>精确延迟（业务定时触发）</td></tr><tr><td><strong>数据库轮询</strong></td><td>定时任务扫描数据库「待执行」状态记录</td><td>无额外依赖，可靠性高</td><td>存在轮询开销，延迟取决于定时频率</td><td>可靠性要求高的业务任务</td></tr></tbody></table></div><blockquote><p><strong>项目现状</strong>：当前主要使用 RabbitMQ，消息监听采用 <code>@RabbitListener</code> + <code>@MqConsumerLog</code> 自动 ACK 机制。</p></blockquote><hr><h2 id="二交换机与队列命名">二、交换机与队列命名</h2><h3 id="21-命名原则">2.1 命名原则</h3><p>交换机、队列、路由键命名统一采用 <strong>三段式</strong>：<code>{prefix}.{module}.{action}</code></p><ul><li><strong>prefix</strong>：子系统前缀，来源于 <code>SubSystemEnum.prefix</code></li><li><strong>module</strong>：业务模块名</li><li><strong>action</strong>：操作行为（如 <code>created</code>、<code>exported</code>、<code>filled</code>）</li></ul><h3 id="22-subsystemenum-前缀对照">2.2 SubSystemEnum 前缀对照</h3><div class="doc-table-wrap"><table><thead><tr><th>枚举值</th><th>prefix</th><th>说明</th></tr></thead><tbody><tr><td><code>COMMON</code></td><td><code>common</code></td><td>公共模块</td></tr><tr><td><code>SYSTEM</code></td><td><code>system</code></td><td>系统管理</td></tr><tr><td><code>UPMS</code></td><td><code>upms</code></td><td>用户权限</td></tr><tr><td><code>DUTY</code></td><td><code>duty</code></td><td>应急值守</td></tr><tr><td><code>PLAN</code></td><td><code>plan</code></td><td>应急预案</td></tr><tr><td><code>EVENT</code></td><td><code>event</code></td><td>应急事件</td></tr><tr><td><code>DISPATCH</code></td><td><code>dispatch</code></td><td>应急调度</td></tr><tr><td><code>RESOURCE</code></td><td><code>resource</code></td><td>物资管理</td></tr><tr><td><code>EMERGENCY_MATERIAL</code></td><td><code>material</code></td><td>应急物资</td></tr><tr><td><code>DSS</code></td><td><code>dss</code></td><td>辅助决策</td></tr><tr><td><code>FUSION</code></td><td><code>fusion</code></td><td>数据融合</td></tr><tr><td><code>DATA_FUSION</code></td><td><code>datafusion</code></td><td>数据融合（新）</td></tr><tr><td><code>FLOOD_INSPECTION</code></td><td><code>flood</code></td><td>汛期公路巡查系统</td></tr><tr><td><code>THIRD_PARTY</code></td><td><code>thirdparty</code></td><td>第三方服务</td></tr><tr><td><code>WORKFLOW</code></td><td><code>workflow</code></td><td>工作流</td></tr></tbody></table></div><h3 id="23-命名示例">2.3 命名示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 交换机命名
    public static final String TASK_EXCHANGE = &quot;flood.task.exchange&quot;;
    
    // 队列命名
    public static final String TASK_QUEUE = &quot;flood.task.created.queue&quot;;
    
    // 路由键命名（与 @SysLog 的 moduleType 联动）
    public static final String TASK_ROUTING_KEY = &quot;flood.task.created&quot;;
    
    // 完整链路示例
    @Bean
    public DirectExchange taskExchange() {
        return new DirectExchange(&quot;flood.task.exchange&quot;);
    }
    
    @Bean
    public Queue taskQueue() {
        return QueueBuilder.durable(&quot;flood.task.created.queue&quot;)
                .withArgument(&quot;x-dead-letter-exchange&quot;, &quot;flood.task.dlx&quot;)
                .withArgument(&quot;x-dead-letter-routing-key&quot;, &quot;flood.task.created.dlx&quot;)
                .build();
    }
    
    @Bean
    public Binding taskBinding(Queue taskQueue, DirectExchange taskExchange) {
        return BindingBuilder.bind(taskQueue).to(taskExchange).with(&quot;flood.task.created&quot;);
    }
    </code></pre></div><h3 id="24-强制要求">2.4 强制要求</h3><ol><li><strong>前缀强制</strong>：交换机/队列命名必须以 <code>SubSystemEnum.prefix</code> 开头</li><li><strong>三段式</strong>：格式为 <code>{prefix}.{module}.{suffix}</code>，禁止随意命名</li><li><strong>路由键与模块协同</strong>：路由键格式与 <code>@SysLog.moduleType</code> 保持一致，便于日志关联</li></ol><hr><h2 id="三消息体规范">三、消息体规范</h2><h3 id="31-json-序列化">3.1 JSON 序列化</h3><p>消息体统一使用 <strong>JSON 序列化</strong>，禁止使用 Java 原生序列化。</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Data
    @Schema(description = &quot;任务生成消息&quot;)
    public class TaskGenerateMessage implements Serializable {
    
        @Serial
        private static final long serialVersionUID = 1L;
    
        @Schema(description = &quot;任务ID&quot;)
        private Long taskId;
    
        @Schema(description = &quot;任务名称&quot;)
        private String taskName;
    
        @Schema(description = &quot;创建时间&quot;)
        @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;)
        private LocalDateTime createTime;
    }
    </code></pre></div><h3 id="32-@schema-标注">3.2 @Schema 标注</h3><p>消息类字段必须标注 <code>@Schema(description = &quot;...&quot;)</code>，便于：</p><ul><li>消息体字段语义清晰</li><li>日志打印时字段可读</li><li>消费者和生产者契约明确</li></ul><h3 id="33-serialversionuid">3.3 serialVersionUID</h3><p>所有消息类必须实现 <code>Serializable</code> 并声明 <code>serialVersionUID</code>：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">public class XxxMessage implements Serializable {
        @Serial
        private static final long serialVersionUID = 1L;
        // ...
    }
    </code></pre></div><h3 id="34-消息体设计原则">3.4 消息体设计原则</h3><ol><li><strong>最小化字段</strong>：只传递消费者需要的字段，减少消息体大小</li><li><strong>避免嵌套</strong>：优先使用扁平的 JSON 结构</li><li><strong>时间字段</strong>：统一使用 <code>LocalDateTime</code>，并配置 <code>@JsonFormat</code></li><li><strong>ID 字段类型</strong>：主键使用 <code>Long</code>（雪花算法），避免使用 <code>String</code></li></ol><hr><h2 id="四消费者规范">四、消费者规范</h2><h3 id="41-@rabbitlistener-注解">4.1 @RabbitListener 注解</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Component
    @RequiredArgsConstructor
    public class TaskGenerateListener {
    
        private final ITaskService taskService;
    
        @MqConsumerLog(description = &quot;任务生成监听器&quot;)
        @RabbitListener(queues = AmqpConstants.TASK_QUEUE)
        public void onMessage(Message message, Channel channel) {
            try {
                // 1. 解析消息体
                TaskGenerateMessage msg = JSON.parseObject(message.getBody(), TaskGenerateMessage.class);
                
                // 2. 业务处理
                taskService.processTaskGenerate(msg);
                
                // 3. ACK 由 @MqConsumerLog + MQReceiveLoggerAspect 自动处理
            } catch (Exception e) {
                log.error(&quot;任务生成消息处理失败&quot;, e);
                throw e; // 抛出异常触发 NackStrategy
            }
        }
    }
    </code></pre></div><h3 id="42-@mqconsumerlog-自动-ack">4.2 @MqConsumerLog 自动 ACK</h3><p><code>@MqConsumerLog</code> 注解配合 <code>MQReceiveLoggerAspect</code> AOP 切面实现自动 ACK：</p><div class="doc-table-wrap"><table><thead><tr><th>执行结果</th><th>处理方式</th></tr></thead><tbody><tr><td>方法正常返回</td><td>自动调用 <code>RabbitAckUtil.ack(channel, deliveryTag)</code></td></tr><tr><td>方法抛出异常</td><td>根据 <code>NackStrategy</code> 执行 nack 或 requeue</td></tr></tbody></table></div><p><strong>NackStrategy 枚举</strong>：</p><div class="doc-table-wrap"><table><thead><tr><th>策略</th><th>说明</th></tr></thead><tbody><tr><td><code>REQUEUE</code></td><td>重新入队，重试消费</td></tr><tr><td><code>NACK</code></td><td>拒绝消息，进入 DLX（死信队列）</td></tr><tr><td><code>DISCARD</code></td><td>直接丢弃</td></tr></tbody></table></div><h3 id="43-消费日志持久化">4.3 消费日志持久化</h3><p>消息消费日志通过 <code>MqConsumerLog</code> 实体持久化到 <code>mq_consume_log</code> 表，便于：</p><ul><li>消息消费链路追溯</li><li>消费失败原因分析</li><li>消息重复消费幂等校验</li></ul><h3 id="44-消费者规范要求">4.4 消费者规范要求</h3><ol><li><strong>禁止手动 ACK</strong>：<code>@MqConsumerLog</code> 已封装自动 ACK，勿重复调用</li><li><strong>异常外抛</strong>：业务处理失败时必须抛出异常，由框架决定 NackStrategy</li><li><strong>幂等处理</strong>：消费者必须处理重复消息（建议使用 Redis SETNX 幂等锁）</li><li><strong>禁止阻塞</strong>：消费者方法必须快速返回，禁止在方法内执行耗时操作</li></ol><hr><h2 id="五业务代码位置">五、业务代码位置</h2><h3 id="51-禁止放-ecdp-common-rabbitmq">5.1 禁止放 ecdp-common-rabbitmq</h3><p><strong>禁止</strong>在 <code>ecdp-common-rabbitmq</code> 公共模块中编写业务代码，包括：</p><ul><li>业务消息体定义（应放在对应业务 API 模块）</li><li>业务消息监听器（应放在对应业务模块）</li><li>业务交换机/队列声明（应放在对应业务模块）</li></ul><h3 id="52-业务模块-amqp-子包结构">5.2 业务模块 amqp 子包结构</h3><p>业务微服务中使用 RabbitMQ 时，按以下结构组织：</p><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>com.infoview.business.{module}/
    ├── amqp/
    │   ├── config/                    # 交换机、队列声明配置
    │   │   ├── FloodAmqpConfig.java
    │   │   └── AmqpConstants.java    # 交换机、队列、路由键常量
    │   ├── constant/
    │   │   └── RoutingKeyConstants.java
    │   ├── listener/                  # 消息监听器（业务逻辑）
    │   │   ├── TaskGenerateListener.java
    │   │   ├── TaskComplianceListener.java
    │   │   ├── PileNoFillCoordinateListener.java
    │   │   └── MileageStatisticsListener.java
    │   └── message/                   # 消息体定义
    │       ├── TaskGenerateMessage.java
    │       └── TaskComplianceMessage.java
    </code></pre></div><h3 id="53-依赖引入">5.3 依赖引入</h3><p>业务模块使用 RabbitMQ 时，需要在 <code>pom.xml</code> 中引入：</p><div class="code-block"><div class="code-head"><span class="code-lang">xml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-xml">&lt;dependency&gt;
        &lt;groupId&gt;com.infoview&lt;/groupId&gt;
        &lt;artifactId&gt;ecdp-common-rabbitmq&lt;/artifactId&gt;
    &lt;/dependency&gt;
    </code></pre></div><hr><h2 id="六典型场景">六、典型场景</h2><h3 id="61-延时触发ttl-+-dlx">6.1 延时触发（TTL + DLX）</h3><p>场景：任务创建后延迟 N 分钟触发合规检查。</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 1. 配置死信交换机和死信队列
    @Bean
    public DirectExchange taskDlxExchange() {
        return new DirectExchange(&quot;flood.task.dlx&quot;);
    }
    
    @Bean
    public Queue taskDlxQueue() {
        return QueueBuilder.durable(&quot;flood.task.dlx.queue&quot;).build();
    }
    
    @Bean
    public Binding taskDlxBinding() {
        return BindingBuilder.bind(taskDlxQueue())
                .to(taskDlxExchange())
                .with(&quot;flood.task.created.dlx&quot;);
    }
    
    // 2. 业务队列设置 TTL，过期消息进入 DLX
    @Bean
    public Queue delayCheckQueue() {
        return QueueBuilder.durable(&quot;flood.task.delaycheck.queue&quot;)
                .withArgument(&quot;x-message-ttl&quot;, 300000)  // 5分钟 TTL
                .withArgument(&quot;x-dead-letter-exchange&quot;, &quot;flood.task.dlx&quot;)
                .withArgument(&quot;x-dead-letter-routing-key&quot;, &quot;flood.task.created.dlx&quot;)
                .build();
    }
    
    // 3. 监听死信队列触发合规检查
    @RabbitListener(queues = &quot;flood.task.dlx.queue&quot;)
    public void onDelayCheck(Message message, Channel channel) {
        // 执行合规检查逻辑
    }
    </code></pre></div><h3 id="62-异步解耦">6.2 异步解耦</h3><p>场景：任务导出完成后异步发送通知。</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 生产者：任务导出完成后发送消息
    @RequiredArgsConstructor
    public class TaskExportService {
    
        private final RabbitTemplate rabbitTemplate;
    
        public void exportTask(Long taskId) {
            // 1. 执行导出逻辑
            byte[] excelData = doExport(taskId);
            
            // 2. 发送异步通知消息
            TaskExportMessage message = new TaskExportMessage();
            message.setTaskId(taskId);
            message.setFileName(&quot;任务导出.xlsx&quot;);
            message.setExportTime(LocalDateTime.now());
            
            rabbitTemplate.convertAndSend(
                &quot;flood.task.exchange&quot;,
                &quot;flood.task.exported&quot;,
                JSON.toJSONString(message)
            );
        }
    }
    
    // 消费者：监听导出完成消息
    @RabbitListener(queues = &quot;flood.task.exported.queue&quot;)
    public void onTaskExported(Message message, Channel channel) {
        TaskExportMessage msg = JSON.parseObject(message.getBody(), TaskExportMessage.class);
        // 发送通知（邮件/短信/站内信）
    }
    </code></pre></div><h3 id="63-延迟补偿">6.3 延迟补偿</h3><p>场景：消息处理失败后延迟重试。</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@MqConsumerLog(description = &quot;合规检查监听器&quot;)
    @RabbitListener(queues = AmqpConstants.COMPLIANCE_QUEUE)
    public void onComplianceCheck(Message message, Channel channel) {
        try {
            TaskComplianceMessage msg = JSON.parseObject(message.getBody(), TaskComplianceMessage.class);
            complianceService.process(msg);
        } catch (RetryableException e) {
            // 抛出 RetryableException，框架自动延迟重试
            throw new RetryableException(&quot;处理中，请稍后重试&quot;);
        }
    }
    </code></pre></div><hr><h2 id="七设计意图">七、设计意图</h2><h3 id="71-解决的问题">7.1 解决的问题</h3><ul><li><strong>交换机/队列命名混乱</strong>：各业务模块自创格式，无统一规范</li><li><strong>业务代码侵入 common</strong>：业务监听器、消息体定义错误地放在公共模块</li><li><strong>路由键无规律</strong>：消费者绑定、消息发送使用不同格式的路由键</li></ul><h3 id="72-正面收益遵循规范">7.2 正面收益（遵循规范）</h3><ul><li><strong>队列命名可预期</strong>：通过 <code>SubSystemEnum.prefix</code> 前缀，任何人看一眼队列名就知道归属哪个子系统</li><li><strong>交换机路由键全局统一</strong>：三段式命名 <code>{prefix}.{module}.{action}</code> 与 <code>@SysLog.moduleType</code> 联动，日志与 MQ 一体化追溯</li><li><strong>common 模块职责清晰</strong>：<code>ecdp-common-rabbitmq</code> 只提供配置抽象，业务逻辑下沉到业务模块</li><li><strong>排障效率提升</strong>：消息丢失或消费异常时，可按命名规则快速定位生产者和消费者</li></ul><h3 id="73-负面代价遵循规范">7.3 负面代价（遵循规范）</h3><ul><li><strong>需要遵守 SubSystemEnum 前缀约束</strong>：新增子系统需要先在枚举中添加 prefix（轻微学习成本）</li><li><strong>交换机/队列声明代码量增加</strong>：每个业务需要单独配置 Bean（初期开发量略增）</li></ul><h3 id="74-不遵循的后果">7.4 不遵循的后果</h3><ul><li><strong>路由键冲突</strong>：不同模块使用相同路由键导致消息被错误消费者捕获</li><li><strong>消息丢失</strong>：队列命名不规范导致消费者无法正确绑定</li><li><strong>排障困难</strong>：消息消费失败时无法按命名追溯到具体业务模块</li><li><strong>common 膨胀</strong>：业务代码混入公共模块，维护成本增加</li></ul><h3 id="75-适用边界">7.5 适用边界</h3><div class="doc-table-wrap"><table><thead><tr><th>场景</th><th>规范要求</th></tr></thead><tbody><tr><td>所有 RabbitMQ 业务队列</td><td>必须遵守三段式命名规则</td></tr><tr><td>所有消息体定义</td><td>必须放在业务模块 amqp/message 子包</td></tr><tr><td>所有消息监听器</td><td>必须放在业务模块 amqp/listener 子包</td></tr><tr><td>交换机/队列配置</td><td>必须放在业务模块 amqp/config 子包</td></tr><tr><td>临时/测试队列</td><td>可酌情变通，但禁止用于生产环境</td></tr></tbody></table></div>`,80)])]))}}),Xt={class:"doc-article"},zt=h({__name:"InterServiceDoc",setup(n){return(s,t)=>(o(),a("article",Xt,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-29 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><hr><h2 id="一feign-接口规范">一、Feign 接口规范</h2><h3 id="11-接口定义位置">1.1 接口定义位置</h3><p>Feign 接口统一放置在 <code>ecdp-*-api</code> 模块中，<strong>禁止</strong>在业务模块中直接定义。</p><h3 id="12-命名规范">1.2 命名规范</h3><p>Feign 接口命名必须以 <code>Remote</code> 开头，以 <code>Service</code> 结尾，格式：<code>Remote{功能}Service</code>。</p><div class="doc-table-wrap"><table><thead><tr><th>功能</th><th>接口名</th></tr></thead><tbody><tr><td>菜单服务</td><td><code>RemoteMenuService</code></td></tr><tr><td>用户服务</td><td><code>RemoteUserService</code></td></tr><tr><td>应用信息</td><td><code>RemoteAppInfoService</code></td></tr></tbody></table></div><h3 id="13-接口定义模板">1.3 接口定义模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@FeignClient(contextId = &quot;remoteFloodOrgMemberService&quot;,
                 value = ServiceNameConstants.FLOOD_INSPECTION_SERVICE)
    public interface RemoteOrgMemberService {
    
        @NoToken
        @GetMapping(&quot;/inner/member/listOrganizations&quot;)
        ApiResult&lt;List&lt;FloodUserOrganizationResponse&gt;&gt; listOrganizations(
                @RequestParam(&quot;userId&quot;) Long userId);
    
        @NoToken
        @PostMapping(&quot;/inner/member/pageMembers&quot;)
        ApiResult&lt;PageResult&lt;MemberResponse&gt;&gt; pageMembers(
                @RequestBody MemberPageRequest request);
    }
    </code></pre></div><h3 id="14-关键配置项">1.4 关键配置项</h3><div class="doc-table-wrap"><table><thead><tr><th>配置项</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td><code>contextId</code></td><td>Feign Client 唯一标识</td><td><code>&quot;remoteFloodOrgMemberService&quot;</code></td></tr><tr><td><code>value</code></td><td>目标服务名（与 Nacos 注册名一致）</td><td><code>ServiceNameConstants.FLOOD_INSPECTION_SERVICE</code></td></tr></tbody></table></div><h3 id="15-imports-自动注册">1.5 imports 自动注册</h3><p>所有 Feign 接口必须在以下路径创建声明文件：</p><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>META-INF/spring/org.springframework.cloud.openfeign.FeignClient.imports
    </code></pre></div><p>文件内容为 Feign 接口的全限定类名，每行一个：</p><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>com.infoview.apis.flood.RemoteOrgMemberService
    com.infoview.apis.upms.RemoteMenuService
    com.infoview.apis.upms.RemoteUserService
    </code></pre></div><h3 id="16-@notoken-注解">1.6 @NoToken 注解</h3><p>Feign 调用时不携带用户 Token，用于内部服务间调用：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@NoToken
    @GetMapping(&quot;/inner/member/listOrganizations&quot;)
    ApiResult&lt;List&lt;OrgResponse&gt;&gt; listOrganizations(@RequestParam(&quot;userId&quot;) Long userId);
    </code></pre></div><hr><h2 id="二内部接口-@inner">二、内部接口 @Inner</h2><h3 id="21-@inner-注解定义">2.1 @Inner 注解定义</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Target({ElementType.METHOD, ElementType.TYPE})
    @Retention(RetentionPolicy.RUNTIME)
    public @interface Inner {
        /**
         * true=内部接口，false=公开认证接口
         */
        boolean value() default true;
        /**
         * 扩展字段
         */
        String[] field() default {};
    }
    </code></pre></div><h3 id="22-使用场景">2.2 使用场景</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 场景1：内部 Feign 调用（默认 value=true）
    @Inner
    @GetMapping(&quot;/inner/member/listOrganizations&quot;)
    public ApiResult&lt;List&lt;OrgResponse&gt;&gt; listOrganizations(@RequestParam Long userId) { ... }
    
    // 场景2：公开认证接口（value=false）
    @Inner(value = false)
    @PostMapping(&quot;/oauth2/token&quot;)
    public ApiResult&lt;TokenResponse&gt; login(...) { ... }
    </code></pre></div><h3 id="23-类级-vs-方法级">2.3 类级 vs 方法级</h3><ul><li><strong>类级 <code>@Inner</code></strong>：整个 Controller 所有方法均为内部接口</li><li><strong>方法级 <code>@Inner</code></strong>：仅标注的方法为内部接口</li></ul><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 类级标注：整个控制器所有方法都是内部接口
    @Inner
    @RestController
    @RequestMapping(&quot;/inner/member&quot;)
    public class InnerOrgMemberController { ... }
    
    // 方法级标注：仅标注的方法是内部接口
    @RestController
    @RequestMapping(&quot;/inner/member&quot;)
    public class InnerOrgMemberController {
        @Inner
        @GetMapping(&quot;/listOrganizations&quot;)
        public ApiResult&lt;List&lt;OrgResponse&gt;&gt; listOrganizations() { ... }
    }
    </code></pre></div><h3 id="24-inneraspect-校验逻辑">2.4 InnerAspect 校验逻辑</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Before(&quot;@within(inner) || @annotation(inner)&quot;)
    public void around(JoinPoint point, Inner inner) {
        // value=true 时，要求请求头 from=Y
        if (inner != null &amp;&amp; inner.value()
                &amp;&amp; !StrUtil.equals(SecurityConstants.FROM_IN,
                    request.getHeader(SecurityConstants.FROM))) {
            log.warn(&quot;拒绝访问内部接口: class={}, method={}&quot;, className, methodName);
            throw new AccessDeniedException(&quot;拒绝访问内部接口&quot;);
        }
    }
    </code></pre></div><h3 id="25-feigninnerrequestinterceptor">2.5 FeignInnerRequestInterceptor</h3><p>Feign 调用时自动添加 <code>from=Y</code> 请求头：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Component
    public class FeignInnerRequestInterceptor implements RequestInterceptor {
        @Override
        public void apply(RequestTemplate template) {
            template.header(SecurityConstants.FROM, SecurityConstants.FROM_IN);
        }
    }
    </code></pre></div><hr><h2 id="三第三方对接收敛">三、第三方对接收敛</h2><h3 id="31-收敛原则">3.1 收敛原则</h3><p>项目所有外部系统对接（短信、预警、路段、里程桩、第三方接口采集等）<strong>必须收敛到 <code>ecdp-services/ecdp-third-party</code> 微服务</strong>，由其他模块通过 Feign 统一调用。</p><h3 id="32-强制要求">3.2 强制要求</h3><div class="doc-table-wrap"><table><thead><tr><th>要求</th><th>说明</th></tr></thead><tbody><tr><td>对接请求集中</td><td>所有第三方 HTTP 调用必须在 <code>ecdp-third-party</code> 模块内，禁止在 <code>ecdp-business/*</code> 等业务模块中直接调用</td></tr><tr><td>HTTP 工具类位置</td><td><code>HttpUtils</code> 不得放入 <code>ecdp-common</code>，下沉至 <code>ecdp-third-party</code> 限定使用</td></tr><tr><td>请求日志落库</td><td>第三方对接产生的请求/响应日志（<code>SysHttpLog</code>）由 <code>HttpUtils</code> 自动上报</td></tr><tr><td>跨模块调用方式</td><td>业务模块通过 <code>ecdp-third-party-api</code> 中的 <code>RemoteXxxService</code> Feign 接口调用</td></tr></tbody></table></div><h3 id="33-允许-vs-禁止">3.3 允许 vs 禁止</h3><div class="doc-table-wrap"><table><thead><tr><th>允许</th><th>禁止</th></tr></thead><tbody><tr><td><code>ecdp-third-party/utils/HttpUtils</code>（第三方对接，支持日志上报）</td><td><code>ecdp-common-core</code>、<code>ecdp-common-data</code> 中扩展第三方对接能力</td></tr><tr><td><code>ecdp-common-core/http/HttpUtils</code>（通用 HTTP 工具，不写日志）</td><td>业务模块直接调用第三方接口</td></tr><tr><td><code>ecdp-third-party-api/.../feign/RemoteXxxService</code></td><td><code>HttpUtils</code> 跨模块复制（多实例）</td></tr></tbody></table></div><h3 id="34-新增第三方对接流程">3.4 新增第三方对接流程</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>步骤 1：在 ecdp-third-party 中创建 service 层实现第三方对接
    步骤 2：在 ecdp-third-party-api 中创建 RemoteXxxService Feign 接口
    步骤 3：在 META-INF/spring/org.springframework.cloud.openfeign.FeignClient.imports 注册
    步骤 4：业务模块通过 @Autowired RemoteXxxService 注入使用
    </code></pre></div><h3 id="35-feign-接口模板">3.5 Feign 接口模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@FeignClient(contextId = &quot;remoteFusionCommService&quot;,
                 value = ServiceNameConstants.THIRD_PARTY_SERVICE)
    public interface RemoteFusionCommService {
    
        @NoToken
        @PostMapping(&quot;/inner/fusion/sendMessage&quot;)
        ApiResult&lt;Void&gt; sendMessage(@RequestBody FusionMessageRequest request);
    }
    </code></pre></div><h3 id="36-httputils-位置约束">3.6 HttpUtils 位置约束</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>ecdp-third-party/utils/HttpUtils     ← 第三方对接专用（带日志上报）
    ecdp-common-core/http/HttpUtils      ← 通用工具（不带日志）
    </code></pre></div><hr><h2 id="四幂等设计">四、幂等设计</h2><h3 id="41-幂等原则">4.1 幂等原则</h3><p>所有写操作接口（新增、更新、删除）必须考虑幂等性，防止重复提交导致的数据不一致。</p><h3 id="42-redis-setnx-+-唯一约束">4.2 Redis SETNX + 唯一约束</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">public boolean saveRole(SysRoleRequest request) {
        String idempotentKey = &quot;idempotent:role:save:&quot; + request.getEntId() + &quot;:&quot; + request.getCode();
    
        // Redis SETNX 保证同一请求只执行一次
        Boolean acquired = redisTemplate.opsForValue()
                .setIfAbsent(idempotentKey, &quot;1&quot;, Duration.ofMinutes(5));
    
        if (Boolean.FALSE.equals(acquired)) {
            throw new ServiceException(&quot;请勿重复提交&quot;);
        }
    
        try {
            // 业务逻辑
            return roleMapper.insert(role) &gt; 0;
        } catch (DuplicateKeyException e) {
            throw new ServiceException(&quot;该角色编码已存在&quot;);
        }
    }
    </code></pre></div><h3 id="43-数据库唯一约束">4.3 数据库唯一约束</h3><div class="code-block"><div class="code-head"><span class="code-lang">sql</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-sql">-- 表设计时添加唯一约束
    CREATE UNIQUE INDEX uk_role_code ON sys_role(ent_id, code, deleted);
    
    -- 实体类对应字段
    @TableName(&quot;sys_role&quot;)
    public class SysRole extends Model&lt;SysRole&gt; {
        // 唯一约束字段
        @TableField(&quot;code&quot;)
        private String code;
    
        @TableField(&quot;ent_id&quot;)
        private Long entId;
    }
    </code></pre></div><h3 id="44-幂等场景清单">4.4 幂等场景清单</h3><div class="doc-table-wrap"><table><thead><tr><th>场景</th><th>幂等方案</th></tr></thead><tbody><tr><td>新增角色</td><td>Redis SETNX + 数据库唯一约束</td></tr><tr><td>新增用户</td><td>Redis SETNX + 数据库唯一约束</td></tr><tr><td>第三方数据同步</td><td>Redis SETNX + 业务状态机</td></tr><tr><td>文件上传</td><td>Redis SETNX + 文件 MD5 去重</td></tr></tbody></table></div><hr><h2 id="五熔断降级-sentinel">五、熔断降级 Sentinel</h2><h3 id="51-当前状态">5.1 当前状态</h3><p><code>ecdp-common-feign</code> 已引入 <code>spring-cloud-starter-alibaba-sentinel</code> 依赖，但当前<strong>未配置 FallbackFactory</strong>。Feign 接口未启用熔断降级，仅依赖 Sentinel 的基础限流能力。</p><h3 id="52-熔断降级配置模板">5.2 熔断降级配置模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@FeignClient(contextId = &quot;remoteXxxService&quot;,
                 value = &quot;ecdp-xxx&quot;,
                 fallbackFactory = RemoteXxxServiceFallbackFactory.class)
    public interface RemoteXxxService { ... }
    
    // FallbackFactory 实现
    @Component
    public class RemoteXxxServiceFallbackFactory
            implements FallbackFactory&lt;RemoteXxxService&gt; {
    
        @Override
        public RemoteXxxService create(Throwable cause) {
            return new RemoteXxxService() {
                @Override
                public ApiResult&lt;XxxResponse&gt; getXxx(Long id) {
                    log.error(&quot;调用 RemoteXxxService 失败，熔断降级&quot;, cause);
                    return ApiResult.fail(&quot;服务暂时不可用，请稍后重试&quot;);
                }
            };
        }
    }
    </code></pre></div><h3 id="53-feign-重试配置">5.3 Feign 重试配置</h3><p>通过 <code>application.yml</code> 配置 Feign 重试策略：</p><div class="code-block"><div class="code-head"><span class="code-lang">yaml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-yaml">feign:
      client:
        config:
          default:
            connectTimeout: 5000
            readTimeout: 10000
            retryer: feign.Retryer.Default
    </code></pre></div><h3 id="54-生产环境待办">5.4 生产环境待办</h3><blockquote><p><strong>重要</strong>：所有 <code>Remote*Service</code> Feign 接口均需在生产环境上线前补充降级逻辑。</p></blockquote><hr><h2 id="六设计意图">六、设计意图</h2><h3 id="解决的问题">解决的问题</h3><p>业务模块重复对接第三方（改密钥要改 N 处）、HTTP 工具散落。</p><h3 id="正面收益遵循规范">正面收益（遵循规范）</h3><ul><li><strong>凭据集中管控</strong>：第三方凭据（appKey、appSecret、token）只在 <code>ecdp-third-party</code> 持有，缩小泄露面</li><li><strong>第三方日志统一审计</strong>：请求日志统一在 <code>ecdp-third-party</code> 落库，便于审计、链路追踪、异常归因</li><li><strong>灰度熔断只改一处</strong>：第三方对接降级、限流、熔断只需在 <code>ecdp-third-party</code> 集中处理</li></ul><h3 id="负面代价遵循规范">负面代价（遵循规范）</h3><ul><li>第三方新增时需在 third-party 走一遍流程（轻微延迟）</li><li>需要维护 Feign 接口与实现类的对应关系</li></ul><h3 id="不遵循的后果">不遵循的后果</h3><ul><li><strong>密钥泄露面扩大</strong>：每个业务模块都持有第三方凭据，一个模块被攻破则全部泄露</li><li><strong>日志归属混乱</strong>：HTTP 日志散落在各业务模块，无法统一归因</li><li><strong>第三方故障时无法统一降级</strong>：各模块自行处理，响应不一致，用户体验差</li></ul><h3 id="适用边界">适用边界</h3><ul><li><strong>必须遵守</strong>：所有第三方外部系统对接（短信、预警、路段、里程桩、融合通信等）</li><li><strong>酌情变通</strong>：纯内部服务间调用（Feign）无需经过 third-party，直接使用 <code>RemoteXxxService</code></li><li><strong>例外</strong>：微服务架构初期、快速原型验证阶段可临时在业务模块直接对接，但需在正式版前迁移</li></ul><hr><blockquote><p><strong>相关规范</strong></p><ul><li><a href="/library/7">接口设计规范</a> — Feign 接口返回类型约束</li><li><a href="/library/8">异常处理规范</a> — 服务韧性、熔断降级</li></ul></blockquote>`,83)])]))}}),Yt={class:"doc-article"},Jt=h({__name:"DatabaseDesignDoc",setup(n){return(s,t)=>(o(),a("article",Yt,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-17 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><hr><h2 id="一表命名规范">一、表命名规范</h2><h3 id="11-基本规则">1.1 基本规则</h3><div class="doc-table-wrap"><table><thead><tr><th>规则</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>全小写下划线分隔</td><td>不使用驼峰命名</td><td><code>sys_role_permission_rel</code></td></tr><tr><td>模块前缀区分域</td><td>使用业务模块前缀</td><td>见 1.2 前缀对照表</td></tr><tr><td>单数形式</td><td>表名不使用复数</td><td><code>sys_user</code>（非 <code>sys_users</code>）</td></tr><tr><td>关键词避免</td><td>不使用数据库保留字</td><td>避免 <code>order</code>、<code>group</code>、<code>key</code> 等</td></tr></tbody></table></div><h3 id="12-模块前缀对照表">1.2 模块前缀对照表</h3><div class="doc-table-wrap"><table><thead><tr><th>前缀</th><th>所属模块</th><th>说明</th><th>示例表</th></tr></thead><tbody><tr><td><code>sys_</code></td><td>系统管理（upms）</td><td>用户、角色、权限、菜单等基础管理</td><td><code>sys_user</code>、<code>sys_role</code>、<code>sys_menu</code></td></tr><tr><td><code>org_</code></td><td>组织管理</td><td>跨模块公共组织架构</td><td><code>org_organization</code>、<code>org_dept</code>、<code>org_user</code></td></tr><tr><td><code>duty_</code></td><td>应急值守（duty）</td><td>值班、排班、交接班等</td><td><code>duty_shift</code>、<code>duty_schedule</code>、<code>duty_handover</code></td></tr><tr><td><code>plan_</code></td><td>应急预案（plan）</td><td>预案编制、演练、复盘</td><td><code>plan_info</code>、<code>plan_step</code>、<code>plan_drill</code></td></tr><tr><td><code>event_</code></td><td>应急事件（event）</td><td>事件接报、响应、处置、评估</td><td><code>event_info</code>、<code>event_process</code>、<code>event_assessment</code></td></tr><tr><td><code>dispatch_</code></td><td>调度指挥（dispatch）</td><td>资源调度、任务下达、指令分发</td><td><code>dispatch_task</code>、<code>dispatch_resource</code>、<code>dispatch_order</code></td></tr><tr><td><code>resource_</code></td><td>物资管理（resource）</td><td>物资库存、调度、盘点</td><td><code>resource_stock</code>、<code>resource_reservoir</code>、<code>resource_check</code></td></tr><tr><td><code>flood_</code></td><td>防汛检查（fhis-web）</td><td>防汛巡查、隐患排查、预警</td><td><code>flood_task</code>、<code>flood_inspection</code>、<code>flood_warning</code></td></tr><tr><td><code>fusion_</code></td><td>数据融合（fusion）</td><td>多源数据接入、清洗、融合</td><td><code>fusion_source</code>、<code>fusion_data</code>、<code>fusion_rule</code></td></tr><tr><td><code>dss_</code></td><td>决策支持（dss）</td><td>态势分析、辅助决策、预案推荐</td><td><code>dss_situation</code>、<code>dss_decision</code>、<code>dss_analysis</code></td></tr></tbody></table></div><h3 id="13-特殊表命名">1.3 特殊表命名</h3><div class="doc-table-wrap"><table><thead><tr><th>类型</th><th>命名规则</th><th>示例</th></tr></thead><tbody><tr><td>关联表</td><td><code>{tableA}_{tableB}_rel</code></td><td><code>sys_role_permission_rel</code></td></tr><tr><td>日志表</td><td><code>{module}_access_log</code></td><td><code>sys_access_log</code></td></tr><tr><td>字典表</td><td><code>{module}_dict_{type}</code></td><td><code>sys_dict_type</code></td></tr></tbody></table></div><blockquote><p><strong>存量例外</strong>：<code>app_info</code>、<code>app_publish_log</code>、<code>mq_consume_log</code> 因历史原因未使用模块前缀，新增表必须遵循前缀规范。</p></blockquote><hr><h2 id="二字段命名规范">二、字段命名规范</h2><div class="doc-table-wrap"><table><thead><tr><th>规则</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>全小写下划线分隔</td><td>与表名风格一致</td><td><code>create_time</code>、<code>display_order</code></td></tr><tr><td>主键命名</td><td>业务表使用 <code>{entity}_id</code>，关联表可使用 <code>id</code> 或 <code>rel_id</code></td><td><code>role_id</code>、<code>task_id</code>、<code>id</code></td></tr><tr><td>外键命名</td><td>引用其他表主键时保持原名</td><td><code>org_id</code> 引用 <code>org_organization.org_id</code></td></tr><tr><td>布尔语义</td><td>使用 <code>is_</code> 前缀</td><td><code>is_default</code>、<code>is_enabled</code></td></tr><tr><td>时间字段</td><td>使用 <code>_time</code> 后缀</td><td><code>create_time</code>、<code>sync_time</code></td></tr><tr><td>名称字段</td><td>使用 <code>_name</code> 后缀</td><td><code>org_name</code>、<code>section_name</code></td></tr><tr><td>编码字段</td><td>使用 <code>_code</code> 后缀</td><td><code>org_code</code>、<code>area_code</code></td></tr></tbody></table></div><hr><h2 id="三必须字段规范">三、必须字段规范</h2><p>所有业务表 <strong>必须包含</strong> 以下字段：</p><h3 id="31-核心必须字段">3.1 核心必须字段</h3><h4 id="311-基础字段">3.1.1 基础字段</h4><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th><th>MyBatis-Plus 映射</th></tr></thead><tbody><tr><td><code>{entity}_id</code></td><td>BIGINT</td><td>主键，雪花算法生成</td><td><code>@TableId(type = IdType.ASSIGN_ID)</code></td></tr><tr><td><code>deleted</code></td><td>INTEGER</td><td>逻辑删除（0=正常，1=删除）</td><td><code>@TableLogic</code></td></tr><tr><td><code>local_signature</code></td><td>VARCHAR(500)</td><td>本地签名（SM2），用于列表批量验签</td><td>应用层设置</td></tr><tr><td><code>local_signature_version</code></td><td>INTEGER</td><td>本地签名版本号，默认 1</td><td>应用层设置</td></tr><tr><td><code>signature</code></td><td>VARCHAR(500)</td><td>一体化签名，用于对接外部签名平台</td><td>应用层设置</td></tr><tr><td><code>signature_version</code></td><td>INTEGER</td><td>一体化签名版本号，默认 1</td><td>应用层设置</td></tr></tbody></table></div><h4 id="312-审计字段">3.1.2 审计字段</h4><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code>creater</code></td><td>VARCHAR(64)</td><td>创建人姓名</td><td>需记录操作人的业务表</td></tr><tr><td><code>creater_id</code></td><td>BIGINT</td><td>创建人 ID（关联 <code>sys_user</code> 或 <code>org_user</code>）</td><td>需关联创建者的业务表</td></tr><tr><td><code>create_time</code></td><td>TIMESTAMP</td><td>创建时间</td><td><code>@TableField(fill = FieldFill.INSERT)</code></td></tr><tr><td><code>updater</code></td><td>VARCHAR(64)</td><td>更新人姓名</td><td>需记录操作人的业务表</td></tr><tr><td><code>updater_id</code></td><td>BIGINT</td><td>更新人 ID（关联 <code>sys_user</code> 或 <code>org_user</code>）</td><td>需关联更新者的业务表</td></tr><tr><td><code>update_time</code></td><td>TIMESTAMP</td><td>更新时间</td><td><code>@TableField(fill = FieldFill.INSERT_UPDATE)</code></td></tr><tr><td><code>org_id</code></td><td>BIGINT</td><td>归属组织 ID（关联 <code>org_organization</code>）</td><td>多组织隔离的业务数据</td></tr><tr><td><code>org_name</code></td><td>VARCHAR(128)</td><td>归属组织名称（冗余）</td><td>查询时避免连表，按需冗余</td></tr></tbody></table></div><blockquote><p><strong>禁止使用基础字段和审计字段作为业务字段</strong>：<code>{entity}_id</code>、<code>deleted</code>、签名字段（<code>local_signature</code> 等）、审计字段（<code>creater</code>/<code>creater_id</code>/<code>create_time</code>/<code>updater</code>/<code>updater_id</code>/<code>update_time</code>/<code>org_id</code>/<code>org_name</code>）由系统统一维护，承载数据完整性、审计溯源与多组织隔离职责，<strong>不得</strong>被赋予业务语义或作为业务参数由前端传入。例如：<code>org_id</code>/<code>org_name</code> 只能是数据的归属组织（系统从登录用户自动填充），不得当作&quot;所属单位&quot;&quot;参会单位&quot;等业务字段使用；业务上确有此类语义时，应新增独立业务字段（如 <code>unit_name</code>）承载。</p></blockquote><h3 id="32-可选字段">3.2 可选字段</h3><p>以下字段按业务需要选用，不强制要求，但命名时必须遵循此约定。</p><h4 id="321-排序字段">3.2.1 排序字段</h4><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code>display_order</code></td><td>INTEGER</td><td>排序号，默认 0</td><td>需手动排序的业务表</td></tr></tbody></table></div><h4 id="322-树形结构字段">3.2.2 树形结构字段</h4><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code>parent_id</code></td><td>BIGINT</td><td>父级 ID（关联自身主键）</td><td>树形结构表（组织、菜单、部门等）</td></tr><tr><td><code>ancestors</code></td><td>VARCHAR(500)</td><td>祖级路径，格式：<code>0/父ID1/父ID2/自己ID</code></td><td>需快速查询所有祖先节点的树形表</td></tr><tr><td><code>level</code></td><td>INTEGER</td><td>层级深度（从 0 开始）</td><td>树形结构表，辅助查询</td></tr></tbody></table></div><h4 id="323-状态字段">3.2.3 状态字段</h4><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th><th>适用场景</th></tr></thead><tbody><tr><td><code>status</code></td><td>INTEGER</td><td>业务状态（如 <code>1101</code> 正常、<code>1102</code> 停用）</td><td>有状态流转的业务表</td></tr><tr><td><code>sync_type</code></td><td>INTEGER</td><td>同步类型（<code>0</code> 手动、<code>1</code> 接口同步）</td><td>支持外部数据同步的表</td></tr><tr><td><code>sync_time</code></td><td>TIMESTAMP</td><td>最近同步时间</td><td>支持外部数据同步的表</td></tr></tbody></table></div><blockquote><p><strong>说明</strong>：以上字段均为参考，按实际业务需要选用。选用时必须遵循上述命名和类型约定，不得自创命名。</p></blockquote><h3 id="33-字段允许省略规则">3.3 字段允许省略规则</h3><div class="doc-table-wrap"><table><thead><tr><th>表类型</th><th>可省略字段</th><th>原因</th></tr></thead><tbody><tr><td>关联表（<code>*_rel</code>）</td><td><code>update_time</code>、<code>deleted</code></td><td>关联关系只创建不修改，物理删除即可</td></tr><tr><td>日志表（<code>*_log</code>）</td><td><code>update_time</code></td><td>日志写入后不修改</td></tr><tr><td>基础数据表（外部导入）</td><td><code>create_time</code>、<code>update_time</code></td><td>数据由外部系统导入，无业务创建时间</td></tr></tbody></table></div><blockquote><p><strong>注意</strong>：<code>local_signature</code>、<code>local_signature_version</code>、<code>signature</code>、<code>signature_version</code> 为数据完整性保障字段，<strong>所有表均不得省略</strong>。</p></blockquote><hr><h2 id="四字段类型规范">四、字段类型规范</h2><h3 id="41-类型选择指南">4.1 类型选择指南</h3><div class="doc-table-wrap"><table><thead><tr><th>类型</th><th>使用场景</th><th>注意事项</th></tr></thead><tbody><tr><td>BIGINT</td><td>主键、外键</td><td>雪花算法生成，禁止自增（关联表/基础数据表除外）</td></tr><tr><td>INTEGER</td><td>状态、枚举、计数、签名版本号</td><td>—</td></tr><tr><td>DECIMAL(p,s)</td><td>金额、精确数值</td><td><strong>禁止使用 FLOAT/DOUBLE</strong>（浮点精度问题）</td></tr><tr><td>VARCHAR(n)</td><td>短字符串</td><td><strong>必须指定长度</strong>，常用 VARCHAR(64)、VARCHAR(128)、VARCHAR(500)</td></tr><tr><td>TEXT</td><td>长文本（&gt;4000 字符）</td><td>不参与索引</td></tr><tr><td>TIMESTAMP</td><td>时间（带时分秒）</td><td>推荐类型，不使用 DATE</td></tr><tr><td>JSONB</td><td>JSON 结构化数据</td><td>OpenGauss 特有类型</td></tr></tbody></table></div><h3 id="42-常用字段长度参考">4.2 常用字段长度参考</h3><div class="doc-table-wrap"><table><thead><tr><th>字段用途</th><th>推荐长度</th><th>示例</th></tr></thead><tbody><tr><td>ID 字段</td><td>BIGINT</td><td>—</td></tr><tr><td>编码字段</td><td>VARCHAR(64)</td><td><code>org_code</code>、<code>area_code</code></td></tr><tr><td>名称字段</td><td>VARCHAR(128)</td><td><code>org_name</code>、<code>section_name</code></td></tr><tr><td>描述/备注</td><td>VARCHAR(500)</td><td><code>introduce</code>、<code>remark</code></td></tr><tr><td>签名值</td><td>VARCHAR(500)</td><td><code>local_signature</code>、<code>signature</code></td></tr><tr><td>手机号</td><td>VARCHAR(20)</td><td><code>contact_phone</code></td></tr><tr><td>邮箱</td><td>VARCHAR(128)</td><td><code>contact_email</code></td></tr><tr><td>URL/路径</td><td>VARCHAR(500)</td><td><code>file_url</code></td></tr></tbody></table></div><hr><h2 id="五数据签名体系">五、数据签名体系</h2><p>项目采用 <strong>双签名架构</strong>：<code>local_signature</code>（本地签名，SM2 算法，用于列表批量验签）+ <code>signature</code>（一体化签名，对接外部签名平台，用于单条权威校验）。</p><blockquote><p><strong>详细设计</strong>：签名架构原理、数据流、代码实现、版本管理等见 <a href="/library/14">数据签名设计规范</a>。</p></blockquote><h3 id="51-字段定义">5.1 字段定义</h3><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>local_signature</code></td><td>VARCHAR(500)</td><td>本地签名值（SM2），用于列表批量验签</td></tr><tr><td><code>local_signature_version</code></td><td>INTEGER</td><td>本地签名版本号，默认 1（对应 <code>SignatureConstants.DEFAULT_VERSION</code>）</td></tr><tr><td><code>signature</code></td><td>VARCHAR(500)</td><td>一体化签名值，用于对接外部签名平台</td></tr><tr><td><code>signature_version</code></td><td>INTEGER</td><td>一体化签名版本号，默认 1（对应 <code>SignatureConstants.DEFAULT_VERSION</code>）</td></tr></tbody></table></div><h3 id="52-签名-key-构建规则">5.2 签名 Key 构建规则</h3><p>签名 Key 由业务关键字段拼接，使用 <code>SignatureConstants.SEPARATOR</code>（<code>|</code>）分隔：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">String signatureKey = entity.getNo() + SignatureConstants.SEPARATOR + entity.getName();
    </code></pre></div><p><strong>原则</strong>：选择业务上唯一且稳定的字段组合，避免使用会频繁变更的字段。</p><h3 id="53-签名架构总览">5.3 签名架构总览</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>┌─────────────────────────────────────────────────────────────────────┐
    │                          数据签名体系                                │
    ├─────────────────────────────┬───────────────────────────────────────┤
    │      本地签名（local_）       │         一体化签名（无前缀）            │
    ├─────────────────────────────┼───────────────────────────────────────┤
    │ 算法：SM2（国密）              │ 算法：由一体化签名平台决定               │
    │ 密钥：本地管理（服务端）        │ 密钥：一体化签名平台管理                 │
    │ 性能：高性能，本地计算          │ 性能：依赖外部 HTTP 接口                │
    │ 用途：列表批量验签             │ 用途：单条数据权威验签                   │
    │ 批量验签：✅ 支持（上限500条）  │ 批量验签：❌ 不支持（需逐条调用）        │
    │ 场景：前端列表展示验签          │ 场景：数据导出、审计、合规校验           │
    │ 验签优先级：🥇 优先            │ 验签优先级：🥈 兜底                     │
    └─────────────────────────────┴───────────────────────────────────────┘
    </code></pre></div><h3 id="54-验签策略">5.4 验签策略</h3><p><strong>写入时</strong>：每次保存/更新同时计算两个签名，确保数据完整性。</p><p><strong>验签时</strong>：</p><ol><li>优先本地验签（SM2），通过则视为数据可信，无需调用外部接口</li><li>仅本地验签失败时才调用一体化签名平台兜底校验</li><li>两者均失败则判定数据已被篡改</li></ol><p><strong>列表场景</strong>：先批量本地验签，失败的记录再逐条调用外部验签，大幅减少外部接口调用次数。</p><h3 id="55-密钥版本管理">5.5 密钥版本管理</h3><p>签名算法升级时的处理流程：</p><ol><li><strong>新增密钥配置</strong>：在 <code>local-signature-keys</code> 列表中新增版本配置</li><li><strong>新版本上线</strong>：自动使用版本号最大的密钥进行签名</li><li><strong>存量迁移</strong>：通过定时任务逐步将旧版本数据重新签名</li><li><strong>兼容验签</strong>：验签时根据 <code>signature_version</code> 字段选择对应版本密钥</li></ol><hr><h2 id="六实体类映射规范">六、实体类映射规范</h2><h3 id="61-标准实体类模板">6.1 标准实体类模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Data
    @EqualsAndHashCode(callSuper = true)
    @TableName(&quot;flood_example&quot;)
    @Schema(description = &quot;示例信息表&quot;)
    public class FloodExample extends Model&lt;FloodExample&gt; implements Serializable {
    
        @Serial
        private static final long serialVersionUID = 1L;
    
        /** 示例ID */
        @Schema(description = &quot;示例ID&quot;)
        @TableId(value = &quot;example_id&quot;, type = IdType.ASSIGN_ID)
        private Long exampleId;
    
        /** 示例名称 */
        @Schema(description = &quot;示例名称&quot;)
        @TableField(&quot;example_name&quot;)
        private String exampleName;
    
        /** 创建者 */
        @Schema(description = &quot;创建者&quot;)
        @TableField(&quot;creater&quot;)
        private String creater;
    
        /** 创建时间 */
        @Schema(description = &quot;创建时间&quot;)
        @TableField(value = &quot;create_time&quot;, fill = FieldFill.INSERT)
        @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;)
        private LocalDateTime createTime;
    
        /** 更新者 */
        @Schema(description = &quot;更新者&quot;)
        @TableField(&quot;updater&quot;)
        private String updater;
    
        /** 更新时间 */
        @Schema(description = &quot;更新时间&quot;)
        @TableField(value = &quot;update_time&quot;, fill = FieldFill.INSERT_UPDATE)
        @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;)
        private LocalDateTime updateTime;
    
        /** 逻辑删除标志（0正常 1删除） */
        @JsonIgnore
        @Schema(description = &quot;逻辑删除标志（0正常 1删除）&quot;)
        @TableLogic
        @TableField(&quot;deleted&quot;)
        private Integer deleted;
    
        /** 本地签名（SM2） */
        @Schema(description = &quot;本地签名（SM2）&quot;)
        @TableField(&quot;local_signature&quot;)
        private String localSignature;
    
        /** 本地签名版本号 */
        @Schema(description = &quot;本地签名版本号&quot;)
        @TableField(&quot;local_signature_version&quot;)
        private Integer localSignatureVersion;
    
        /** 一体化签名 */
        @Schema(description = &quot;一体化签名&quot;)
        @TableField(&quot;signature&quot;)
        private String signature;
    
        /** 一体化签名版本号 */
        @Schema(description = &quot;一体化签名版本号&quot;)
        @TableField(&quot;signature_version&quot;)
        private Integer signatureVersion;
    }
    </code></pre></div><h3 id="62-关联表模板">6.2 关联表模板</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Data
    @EqualsAndHashCode(callSuper = true)
    @TableName(&quot;flood_example_rel&quot;)
    @Schema(description = &quot;示例关联表&quot;)
    public class FloodExampleRel extends Model&lt;FloodExampleRel&gt; implements Serializable {
    
        @Serial
        private static final long serialVersionUID = 1L;
    
        /** 主键ID */
        @Schema(description = &quot;主键ID&quot;)
        @TableId(value = &quot;id&quot;, type = IdType.ASSIGN_ID)
        private Long id;
    
        /** 示例ID */
        @Schema(description = &quot;示例ID&quot;)
        @TableField(&quot;example_id&quot;)
        private Long exampleId;
    
        /** 关联ID */
        @Schema(description = &quot;关联ID&quot;)
        @TableField(&quot;rel_id&quot;)
        private Long relId;
    
        /** 创建时间 */
        @Schema(description = &quot;创建时间&quot;)
        @TableField(value = &quot;create_time&quot;, fill = FieldFill.INSERT)
        @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;)
        private LocalDateTime createTime;
    
        /** 本地签名（SM2） */
        @Schema(description = &quot;本地签名（SM2）&quot;)
        @TableField(&quot;local_signature&quot;)
        private String localSignature;
    
        /** 本地签名版本号 */
        @Schema(description = &quot;本地签名版本号&quot;)
        @TableField(&quot;local_signature_version&quot;)
        private Integer localSignatureVersion;
    
        /** 一体化签名 */
        @Schema(description = &quot;一体化签名&quot;)
        @TableField(&quot;signature&quot;)
        private String signature;
    
        /** 一体化签名版本号 */
        @Schema(description = &quot;一体化签名版本号&quot;)
        @TableField(&quot;signature_version&quot;)
        private Integer signatureVersion;
    }
    </code></pre></div><h3 id="63-注解使用规范">6.3 注解使用规范</h3><div class="doc-table-wrap"><table><thead><tr><th>注解</th><th>用途</th><th>要求</th></tr></thead><tbody><tr><td><code>@Data</code></td><td>Lombok 自动生成 getter/setter</td><td>必须</td></tr><tr><td><code>@EqualsAndHashCode(callSuper = true)</code></td><td>包含父类字段</td><td>必须</td></tr><tr><td><code>@TableName(&quot;table_name&quot;)</code></td><td>表名映射</td><td>必须，值与数据库表名一致</td></tr><tr><td><code>@Schema(description = &quot;...&quot;)</code></td><td>字段说明</td><td>每个字段必须，内容与 <code>/** */</code> 注释一致</td></tr><tr><td><code>@TableId(value = &quot;col&quot;, type = IdType.ASSIGN_ID)</code></td><td>主键映射</td><td>主键字段必须</td></tr><tr><td><code>@TableField(&quot;col_name&quot;)</code></td><td>列名映射</td><td>非主键字段必须</td></tr><tr><td><code>@TableField(value = &quot;col&quot;, fill = FieldFill.INSERT)</code></td><td>自动填充</td><td><code>create_time</code> 使用 <code>INSERT</code></td></tr><tr><td><code>@TableField(value = &quot;col&quot;, fill = FieldFill.INSERT_UPDATE)</code></td><td>自动填充</td><td><code>update_time</code> 使用 <code>INSERT_UPDATE</code></td></tr><tr><td><code>@TableLogic</code></td><td>逻辑删除</td><td><code>deleted</code> 字段必须</td></tr><tr><td><code>@JsonIgnore</code></td><td>响应中隐藏</td><td><code>deleted</code> 字段必须</td></tr><tr><td><code>@JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm&quot;)</code></td><td>日期格式</td><td>日期字段必须</td></tr></tbody></table></div><hr><h2 id="七设计原则">七、设计原则</h2><h3 id="71-禁止事项">7.1 禁止事项</h3><div class="doc-table-wrap"><table><thead><tr><th>禁止</th><th>原因</th></tr></thead><tbody><tr><td><strong>禁止使用数据库外键约束</strong></td><td>增加维护开销、阻碍大数据量导入、级联操作风险不可控；表间关系由应用层通过代码保证一致性</td></tr><tr><td><strong>禁止使用基础字段和审计字段作为业务字段</strong></td><td>基础字段（主键、逻辑删除、签名字段）与审计字段（创建人/时间、更新人/时间、归属组织等）由系统统一维护，承载完整性、溯源与隔离职责；赋予业务语义会导致字段职责混乱、审计失真、组织隔离失效。业务语义应使用独立业务字段（如 <code>unit_name</code>）</td></tr><tr><td>业务表使用数据库自增主键</td><td>不利于分布式环境，使用雪花算法</td></tr><tr><td>使用 FLOAT/DOUBLE 存储金额</td><td>浮点精度问题，使用 DECIMAL</td></tr><tr><td>字段不指定 VARCHAR 长度</td><td>避免无限制字符串导致存储浪费</td></tr><tr><td>表名使用复数形式</td><td>统一使用单数</td></tr><tr><td>省略签名字段</td><td>数据完整性保障，所有表必须包含双签名字段</td></tr></tbody></table></div><blockquote><p><strong>外键替代方案</strong>：</p><ul><li>表间关联通过应用层代码校验（如保存前查询关联表是否存在）</li><li>数据一致性通过事务保证（<code>@Transactional</code>）</li><li>删除关联数据时由 Service 层显式处理级联逻辑，而非依赖数据库 CASCADE</li></ul></blockquote><h3 id="72-建议事项">7.2 建议事项</h3><div class="doc-table-wrap"><table><thead><tr><th>建议</th><th>说明</th></tr></thead><tbody><tr><td>索引命名</td><td>主键索引 <code>pk_{table}_{col}</code>，唯一索引 <code>uk_{table}_{col}</code>，普通索引 <code>idx_{table}_{col}</code></td></tr><tr><td>字段注释</td><td>每个字段必须有 COMMENT，描述业务含义和取值范围</td></tr><tr><td>枚举值注释</td><td>枚举字段在 COMMENT 中说明所有取值，如 <code>状态（1101正常 1102停用）</code></td></tr><tr><td>预留字段</td><td>不建议预留字段，按需新增</td></tr></tbody></table></div><hr><h2 id="附录签名字段完整示例">附录：签名字段完整示例</h2><h3 id="ddl-示例">DDL 示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">sql</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-sql">CREATE TABLE flood_example (
                                   example_id              BIGINT       NOT NULL PRIMARY KEY,
                                   parent_id               BIGINT,
                                   ancestors               VARCHAR(500),
                                   level                   INTEGER      DEFAULT 0,
                                   example_name            VARCHAR(128) NOT NULL,
                                   example_code            VARCHAR(64),
                                   org_id                  BIGINT,
                                   org_name                VARCHAR(128),
                                   user_id                 BIGINT,
                                   status                  INTEGER      DEFAULT 1101,
                                   display_order           INTEGER      DEFAULT 0,
                                   creater                 VARCHAR(64),
                                   create_time             TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                   updater                 VARCHAR(64),
                                   update_time             TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                   deleted                 INTEGER      NOT NULL DEFAULT 0,
                                   local_signature             VARCHAR(500),
                                   local_signature_version     INTEGER      NOT NULL DEFAULT 1,
                                   signature               VARCHAR(500),
                                   signature_version       INTEGER      NOT NULL DEFAULT 1
    )
        WITH (ORIENTATION = ROW, COMPRESSION = NO);
    
    COMMENT ON TABLE flood_example IS &#39;示例信息表&#39;;
    COMMENT ON COLUMN flood_example.example_id IS &#39;示例ID&#39;;
    COMMENT ON COLUMN flood_example.parent_id IS &#39;父级ID（关联自身，顶级为0或NULL）&#39;;
    COMMENT ON COLUMN flood_example.ancestors IS &#39;祖级路径，格式：0/父ID1/父ID2/自己ID&#39;;
    COMMENT ON COLUMN flood_example.level IS &#39;层级深度（从0开始）&#39;;
    COMMENT ON COLUMN flood_example.example_name IS &#39;示例名称&#39;;
    COMMENT ON COLUMN flood_example.example_code IS &#39;示例编码&#39;;
    COMMENT ON COLUMN flood_example.org_id IS &#39;归属组织ID&#39;;
    COMMENT ON COLUMN flood_example.org_name IS &#39;归属组织名称（冗余）&#39;;
    COMMENT ON COLUMN flood_example.user_id IS &#39;创建用户ID&#39;;
    COMMENT ON COLUMN flood_example.status IS &#39;状态（1101正常 1102停用）&#39;;
    COMMENT ON COLUMN flood_example.display_order IS &#39;排序号&#39;;
    COMMENT ON COLUMN flood_example.creater IS &#39;创建者&#39;;
    COMMENT ON COLUMN flood_example.create_time IS &#39;创建时间&#39;;
    COMMENT ON COLUMN flood_example.updater IS &#39;更新者&#39;;
    COMMENT ON COLUMN flood_example.update_time IS &#39;更新时间&#39;;
    COMMENT ON COLUMN flood_example.deleted IS &#39;逻辑删除（0正常 1删除）&#39;;
    COMMENT ON COLUMN flood_example.local_signature IS &#39;本地签名（SM2）&#39;;
    COMMENT ON COLUMN flood_example.local_signature_version IS &#39;本地签名版本号&#39;;
    COMMENT ON COLUMN flood_example.signature IS &#39;一体化签名&#39;;
    COMMENT ON COLUMN flood_example.signature_version IS &#39;一体化签名版本号&#39;;
    
    -- 禁止外键约束，表间关系由应用层保证
    -- ALTER TABLE flood_example ADD CONSTRAINT fk_example_parent
    --     FOREIGN KEY (parent_id) REFERENCES flood_example(example_id);  -- ❌ 禁止
    -- ALTER TABLE flood_example ADD CONSTRAINT fk_example_org
    --     FOREIGN KEY (org_id) REFERENCES org_organization(org_id);       -- ❌ 禁止
    
    -- 索引命名规范
    CREATE INDEX idx_flood_example_org_id ON flood_example(org_id);
    CREATE INDEX idx_flood_example_parent_id ON flood_example(parent_id);
    CREATE INDEX idx_flood_example_status ON flood_example(status, deleted);
    </code></pre></div><h3 id="service-层签名写入示例">Service 层签名写入示例</h3><blockquote><p>完整的签名写入和批量验签代码示例见 <a href="/library/14">数据签名设计规范</a> 第五章。</p></blockquote><hr><blockquote><p><strong>相关文档</strong>：</p><ul><li><a href="/library/15">架构设计规范</a> — 第三章 数据架构</li><li>后端仓库 AGENTS.md — 编码规范（本前端仓库的 AGENTS.md 为前端契约，勿混用）</li></ul></blockquote>`,83)])]))}}),$t={class:"doc-article"},Qt=h({__name:"MetricsDoc",setup(n){return(s,t)=>(o(),a("article",$t,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-29 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><blockquote><p><strong>说明</strong>：本规范为<strong>参考性规范</strong>，具体业务场景需结合实际衡量（如法规约束、外部系统对接、报表精度要求等）。</p></blockquote><hr><h2 id="一长度-/-距离">一、长度 / 距离</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议最小单位</th><th>说明</th></tr></thead><tbody><tr><td>短距离</td><td><strong>米（m）</strong></td><td>GPS 轨迹、巡查里程、道路长度等，避免使用「千米」导致小数丢失精度</td></tr><tr><td>极短距离</td><td><strong>厘米（cm）</strong> / <strong>毫米（mm）</strong></td><td>工程图纸、设备精度等场景，按需使用</td></tr><tr><td>大尺度</td><td><strong>千米（km）</strong></td><td>跨城/跨省运输距离等大尺度场景可放宽到 km</td></tr><tr><td>经纬度</td><td><strong>度（°）</strong>，使用 <code>BigDecimal</code> 存储</td><td>推荐保留 6 位小数（约 0.11m 精度），避免 <code>double</code> 浮点误差</td></tr></tbody></table></div><h3 id="11-经纬度规范">1.1 经纬度规范</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ✅ 正确：BigDecimal 存储，6 位小数
    @Schema(description = &quot;经度（保留 6 位小数）&quot;)
    private BigDecimal longitude;
    
    @Schema(description = &quot;纬度（保留 6 位小数）&quot;)
    private BigDecimal latitude;
    
    // ❌ 错误：double 存储，存在浮点精度问题
    private Double longitude;  // 浮点精度问题
    </code></pre></div><hr><h2 id="二时间">二、时间</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议最小单位</th><th>说明</th></tr></thead><tbody><tr><td>持续时长 / 时间间隔</td><td><strong>秒（s）</strong></td><td>巡查时长、任务执行时长、网络耗时等，避免使用「分钟」导致秒级精度丢失</td></tr><tr><td>调度延时 / 缓存 TTL</td><td><strong>秒（s）</strong> 或 <strong>毫秒（ms）</strong></td><td>Redis TTL 默认秒、延时队列（<code>x-delay</code>）以毫秒为单位</td></tr><tr><td>时间戳</td><td><strong>毫秒（ms）</strong></td><td>数据库存储统一用 <code>BIGINT</code> 存毫秒值（避免 <code>DATETIME</code> 时区问题）；前端展示按需格式化为 <code>yyyy-MM-dd HH:mm:ss</code></td></tr><tr><td>日历日期</td><td><strong>天（d）</strong></td><td>生日、合同期等业务日期字段</td></tr></tbody></table></div><h3 id="21-数据库存储规范">2.1 数据库存储规范</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ✅ 正确：时间戳用 TIMESTAMP 存储
    @Schema(description = &quot;创建时间&quot;)
    @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;)
    private LocalDateTime createTime;
    
    // 数据库字段类型：TIMESTAMP
    // CREATE_TIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;创建时间&#39;
    </code></pre></div><blockquote><p>注意：使用 TIMESTAMP 类型，由数据库自动维护时区转换，避免 Java 侧时区问题。TIMESTAMP 范围为 &#39;1970-01-01 00:00:01&#39; UTC 至 &#39;2038-01-19 03:14:07&#39; UTC，如需覆盖更大时间范围可使用 DATETIME。</p></blockquote><h3 id="22-前端展示">2.2 前端展示</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ✅ 正确：使用 @JsonFormat 格式化展示
    @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;)
    @Schema(description = &quot;创建时间&quot;)
    private LocalDateTime createTime;
    
    // 前端展示：2026-07-29 10:30:00
    </code></pre></div><blockquote><p><strong>注意</strong>：用户对「等待时长」的容忍度差异较大，<strong>前端展示可向上聚合</strong>为「3 分 25 秒」「1 小时 20 分」，但<strong>底层存储与计算仍用秒</strong>。</p></blockquote><hr><h2 id="三金额-/-货币">三、金额 / 货币</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议类型</th><th>说明</th></tr></thead><tbody><tr><td>金额</td><td><strong><code>decimal</code> / <code>BigDecimal</code></strong></td><td><strong>绝对禁止</strong>使用 <code>float</code> / <code>double</code> 存储金额，否则会出现 <code>0.1 + 0.2 ≠ 0.3</code> 的精度问题</td></tr><tr><td>数据库字段</td><td><code>DECIMAL(M, D)</code></td><td>MySQL/PostgreSQL 的 <code>DECIMAL</code>，指定总位数 <code>M</code> 与小数位 <code>D</code>（如 <code>DECIMAL(18, 2)</code> 表示 16 位整数 + 2 位小数）</td></tr><tr><td>精度建议</td><td>保留 2 位小数</td><td>人民币、美元等绝大多数币种的最小单位是「分」；特殊场景（加密货币、利率等）按需扩展</td></tr><tr><td>计算</td><td><code>BigDecimal.setScale(scale, RoundingMode.HALF_UP)</code></td><td>加减乘除统一指定精度与舍入方式，避免隐式精度丢失</td></tr></tbody></table></div><h3 id="31-代码示例">3.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ✅ 正确：金额用 BigDecimal + 显式 setScale
    @Schema(description = &quot;订单金额（元）&quot;)
    private BigDecimal orderAmount;
    
    // 计算时统一精度
    BigDecimal fee = baseAmount.multiply(rate).setScale(2, RoundingMode.HALF_UP);
    
    // 数据库字段定义
    // ORDER_AMOUNT DECIMAL(18,2) NOT NULL COMMENT &#39;订单金额（元）&#39;
    
    // ❌ 错误：金额用 double
    private Double amount;  // 0.1 + 0.2 = 0.30000000000000004
    </code></pre></div><hr><h2 id="四重量-/-质量">四、重量 / 质量</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议最小单位</th><th>说明</th></tr></thead><tbody><tr><td>一般物资</td><td><strong>千克（kg）</strong></td><td>物资储备、应急设备等</td></tr><tr><td>大宗货物</td><td><strong>吨（t）</strong></td><td>1 t = 1000 kg，避免大数值溢出</td></tr><tr><td>精细场景</td><td><strong>克（g）</strong> / <strong>毫克（mg）</strong></td><td>化学品、药品等按需使用</td></tr></tbody></table></div><h3 id="41-代码示例">4.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Schema(description = &quot;物资重量（kg）&quot;)
    private BigDecimal weight;
    
    // 物资清单
    @Schema(description = &quot;单件重量（kg）&quot;)
    private BigDecimal unitWeight;
    
    // 运输统计
    @Schema(description = &quot;总重量（吨）&quot;)
    private BigDecimal totalWeightTon;
    </code></pre></div><hr><h2 id="五面积-/-体积">五、面积 / 体积</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议最小单位</th><th>说明</th></tr></thead><tbody><tr><td>面积</td><td><strong>平方米（m²）</strong></td><td>灾害影响面积、淹没范围等</td></tr><tr><td>大面积</td><td><strong>平方千米（km²）</strong></td><td>流域面积、受灾区域等大尺度场景</td></tr><tr><td>体积</td><td><strong>立方米（m³）</strong></td><td>水库库容、物资体积等</td></tr><tr><td>液体</td><td><strong>升（L）</strong></td><td>油料、化学品等按行业惯例</td></tr></tbody></table></div><h3 id="51-代码示例">5.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Schema(description = &quot;受灾面积（km²）&quot;)
    private BigDecimal disasterArea;
    
    // 水库库容
    @Schema(description = &quot;库容（万立方米）&quot;)
    private BigDecimal reservoirCapacity;
    
    // 物资体积
    @Schema(description = &quot;单件体积（L）&quot;)
    private BigDecimal unitVolumeLiter;
    </code></pre></div><hr><h2 id="六角度-/-方向">六、角度 / 方向</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议最小单位</th><th>说明</th></tr></thead><tbody><tr><td>方位角</td><td><strong>度（°）</strong></td><td>0-360° 整数表示；如需更高精度可使用浮点度（如 <code>113.123456</code>）</td></tr><tr><td>倾斜角</td><td><strong>度（°）</strong>，保留 2 位小数</td><td>桥梁挠度、坡度等工程量</td></tr></tbody></table></div><h3 id="61-代码示例">6.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 方位角（0-360°）
    @Schema(description = &quot;方位角（°）&quot;)
    private Integer azimuth;
    
    // 倾斜角
    @Schema(description = &quot;桥梁倾斜角（°）&quot;)
    private BigDecimal tiltAngle;
    
    // 坡度
    @Schema(description = &quot;道路坡度（°）&quot;)
    private BigDecimal slopeAngle;
    </code></pre></div><hr><h2 id="七百分比-/-比率">七、百分比 / 比率</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议类型</th><th>说明</th></tr></thead><tbody><tr><td>比例</td><td><strong><code>decimal</code> / <code>BigDecimal</code></strong></td><td>占比、合格率等使用 0-1 之间的小数（避免 0-100 整数，避免百分比单位歧义）</td></tr><tr><td>展示</td><td>前端格式化为 <code>XX.XX%</code></td><td>内部存储保持小数，展示层格式化为百分比字符串</td></tr><tr><td>极小概率</td><td><strong>基点（bp，1bp = 0.01%）</strong></td><td>金融、保险等场景按需使用</td></tr></tbody></table></div><h3 id="71-代码示例">7.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ✅ 正确：存储小数，展示时格式化
    @Schema(description = &quot;任务完成率（0-1 之间的小数）&quot;)
    private BigDecimal completionRate;  // 存储 0.85 表示 85%
    
    // 前端格式化：0.85 → 85.00%
    // 后端格式化：completionRate.multiply(BigDecimal.valueOf(100)).setScale(2) + &quot;%&quot;
    
    // ❌ 错误：存储整数百分比（存在单位歧义）
    private Integer completionPercent;  // 85 表示 85% 还是 0.85？
    </code></pre></div><hr><h2 id="八流量-/-速率">八、流量 / 速率</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议最小单位</th><th>说明</th></tr></thead><tbody><tr><td>数据流量</td><td><strong>字节（B）</strong> / <strong>比特（bit）</strong></td><td>网络流量按 <code>bit/s</code>，存储容量按 <code>Byte</code>，<strong>注意单位区分</strong></td></tr><tr><td>传输速率</td><td><strong>Mbps</strong> / <strong>MB/s</strong></td><td>按行业惯例</td></tr><tr><td>车流 / 人流</td><td><strong>辆/小时</strong>、<strong>人/小时</strong></td><td>道路监测、应急疏散等场景</td></tr></tbody></table></div><h3 id="81-代码示例">8.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 网络流量
    @Schema(description = &quot;下载速度（MB/s）&quot;)
    private BigDecimal downloadSpeed;
    
    // 文件大小
    @Schema(description = &quot;文件大小（字节）&quot;)
    private Long fileSize;  // 存储字节，前端按需格式化为 KB/MB/GB
    
    // 车流量
    @Schema(description = &quot;小时车流量（辆/小时）&quot;)
    private Integer hourlyVehicleCount;
    </code></pre></div><hr><h2 id="九温度">九、温度</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议最小单位</th><th>说明</th></tr></thead><tbody><tr><td>一般温度</td><td><strong>摄氏度（°C）</strong>，保留 1 位小数</td><td>气象监测、设备温度等</td></tr><tr><td>极端温度</td><td><strong>摄氏度（°C）</strong>，保留 2 位小数</td><td>工业、医疗等场景</td></tr><tr><td>温标</td><td>摄氏度优先</td><td>涉及美国/英国对接时按需转换为华氏度（°F）</td></tr></tbody></table></div><h3 id="91-代码示例">9.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 气象温度
    @Schema(description = &quot;当前温度（°C）&quot;)
    private BigDecimal temperature;
    
    // 设备温度
    @Schema(description = &quot;设备温度（°C）&quot;)
    private BigDecimal deviceTemperature;
    </code></pre></div><hr><h2 id="十数据量级">十、数据量级</h2><div class="doc-table-wrap"><table><thead><tr><th>量纲</th><th>建议单位</th><th>说明</th></tr></thead><tbody><tr><td>计数</td><td><strong>整数（Integer / Long）</strong></td><td>用户数、消息数、点击数等</td></tr><tr><td>文件大小</td><td><strong>字节（B）</strong>，按需格式化为 KB/MB/GB</td><td>存储、传输等场景</td></tr><tr><td>唯一标识</td><td><strong>字符串（String）</strong>，使用雪花算法 ID</td><td>主键、订单号、设备编号等</td></tr></tbody></table></div><h3 id="101-代码示例">10.1 代码示例</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// 计数
    @Schema(description = &quot;用户数&quot;)
    private Long userCount;
    
    @Schema(description = &quot;消息数&quot;)
    private Integer messageCount;
    
    // 文件大小（字节）
    @Schema(description = &quot;文件大小（字节）&quot;)
    private Long fileSize;
    
    // 主键使用雪花算法
    @Schema(description = &quot;任务ID&quot;)
    private Long taskId;  // 使用 IdGenerator.idKey() 生成
    </code></pre></div><hr><h2 id="十一通用原则">十一、通用原则</h2><h3 id="111-精度层级原则">11.1 精度层级原则</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>存储精度 ≧ 计算精度 ≧ 展示精度
    </code></pre></div><p>底层存储保留更多精度，避免向上聚合时丢失。</p><h3 id="112-口径一致原则">11.2 口径一致原则</h3><p>同一字段在整个系统（前端、后端、数据库、外部对接）的单位与精度必须一致，<strong>避免出现「米 + 千米」混用</strong>。</p><h3 id="113-字段语义标注原则">11.3 字段语义标注原则</h3><p>通过 <code>@Schema(description = &quot;本次巡查距离（m）&quot;)</code> 在字段注释中<strong>显式标注单位</strong>：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Schema(description = &quot;本次巡查距离（m）&quot;)
    private BigDecimal inspectionMileage;
    
    @Schema(description = &quot;任务执行时长（秒）&quot;)
    private Integer durationSeconds;
    
    @Schema(description = &quot;订单金额（元）&quot;)
    private BigDecimal orderAmount;
    </code></pre></div><h3 id="114-单位转换封装原则">11.4 单位转换封装原则</h3><p>如需频繁转换（m ↔ km、s ↔ min），建议封装为工具类：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">/**
     * 距离单位转换工具
     * @author xxx
     * @since yyyy-MM-dd
     */
    public class DistanceUtils {
    
        /**
         * 米转千米
         * @param meter 米
         * @return 千米
         */
        public static BigDecimal meterToKilometer(BigDecimal meter) {
            return meter.divide(BigDecimal.valueOf(1000), 6, RoundingMode.HALF_UP);
        }
    
        /**
         * 千米转米
         * @param kilometer 千米
         * @return 米
         */
        public static BigDecimal kilometerToMeter(BigDecimal kilometer) {
            return kilometer.multiply(BigDecimal.valueOf(1000)).setScale(2, RoundingMode.HALF_UP);
        }
    }
    </code></pre></div><h3 id="115-国际化i18n">11.5 国际化（i18n）</h3><p>涉及多语言或多币种时，金额、长度、重量等单位需按区域切换；前端展示优先使用 i18n 库（如 <code>Intl.NumberFormat</code>）做格式化。</p><hr><h2 id="十二反例-vs-正例">十二、反例 vs 正例</h2><h3 id="121-金额精度">12.1 金额精度</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ❌ 反例：金额用 double
    private Double amount;
    
    // ✅ 正例：金额用 BigDecimal + 显式 scale
    @Schema(description = &quot;订单金额（元）&quot;)
    private BigDecimal amount;
    </code></pre></div><h3 id="122-距离单位">12.2 距离单位</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ❌ 反例：距离用 cm 但单位语义不清晰
    @Schema(description = &quot;距离&quot;)
    private Integer distance;  // 是 cm？m？km？
    
    // ✅ 正例：距离用 BigDecimal + 单位标注
    @Schema(description = &quot;本次巡查距离（m）&quot;)
    private BigDecimal inspectionMileage;
    </code></pre></div><h3 id="123-时间精度">12.3 时间精度</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ❌ 反例：时间用分钟导致秒级精度丢失
    @Schema(description = &quot;任务执行时长&quot;)
    private Integer duration;  // 单位是分钟？还是秒？
    
    // ✅ 正例：时间用秒 + 单位标注
    @Schema(description = &quot;任务执行时长（秒）&quot;)
    private Integer durationSeconds;
    </code></pre></div><h3 id="124-经纬度精度">12.4 经纬度精度</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// ❌ 反例：经纬度用 double
    private Double longitude;  // 浮点精度问题
    
    // ✅ 正例：经纬度用 BigDecimal + 6 位精度
    @Schema(description = &quot;经度（保留 6 位小数）&quot;)
    private BigDecimal longitude;
    </code></pre></div><hr><h2 id="十三设计意图">十三、设计意图</h2><h3 id="131-解决的问题">13.1 解决的问题</h3><ul><li><strong>单位混用</strong>：m/km、min/s、cm/mm 等单位混用导致换算错误</li><li><strong>金额精度丢失</strong>：使用 <code>double</code> 导致 <code>0.1 + 0.2 ≠ 0.3</code></li><li><strong>经纬度误差</strong>：使用 <code>double</code> 导致 GPS 坐标偏移 10m+</li><li><strong>联调成本高</strong>：前后端数据库三方口径不一致，反复确认单位</li></ul><h3 id="132-正面收益遵循规范">13.2 正面收益（遵循规范）</h3><ul><li><strong>口径一致</strong>：前后端数据库三方统一，避免联调时反复确认单位</li><li><strong>精度不丢失</strong>：存储精度 ≧ 计算精度 ≧ 展示精度，向上聚合时不会丢失</li><li><strong>换算零散</strong>：统一单位后无需在业务代码中分散写换算逻辑</li><li><strong>可演进</strong>：底层用「最小精度 + 充足位数」，业务演进（如从 m 升级到 mm）时改动最小</li></ul><h3 id="133-负面代价遵循规范">13.3 负面代价（遵循规范）</h3><ul><li><strong>存储精度高于展示精度</strong>：字段更长（如 DECIMAL(18,6) vs DECIMAL(18,2)），但存储成本可接受</li><li><strong>需要显式标注单位</strong>：每个字段都要写明单位（轻微工作量）</li></ul><h3 id="134-不遵循的后果">13.4 不遵循的后果</h3><ul><li><strong>金额精度问题</strong>：<code>0.1 + 0.2 ≠ 0.3</code>，财务报表出错</li><li><strong>GPS 坐标偏移</strong>：经纬度偏移 10m+，应急定位不准确</li><li><strong>联调成本增加</strong>：前后端反复确认单位，沟通成本高</li><li><strong>业务计算错误</strong>：混用 m/km 导致里程统计错误</li></ul><h3 id="135-适用边界">13.5 适用边界</h3><blockquote><p><strong>本规范为参考性规范</strong>，涉及以下场景必须严格遵守，其他场景可酌情变通：</p></blockquote><div class="doc-table-wrap"><table><thead><tr><th>场景类型</th><th>规范要求</th></tr></thead><tbody><tr><td><strong>法规约束场景</strong></td><td>必须严格遵守（如财务报表、金融计算）</td></tr><tr><td><strong>外部系统对接</strong></td><td>必须严格遵守（如对接第三方 GPS 系统）</td></tr><tr><td><strong>报表精度要求</strong></td><td>必须严格遵守（如统计数据必须与原始数据一致）</td></tr><tr><td><strong>跨系统数据交换</strong></td><td>必须严格遵守（如微服务间传递经纬度、金额）</td></tr><tr><td><strong>纯内部计算的中间值</strong></td><td>可酌情变通（如计算过程中临时使用的精度）</td></tr><tr><td><strong>UI 展示用的草率计算</strong></td><td>可酌情变通（如调试用的临时变量）</td></tr></tbody></table></div>`,94)])]))}}),Wt={class:"doc-article"},Zt=h({__name:"SigningDoc",setup(n){return(s,t)=>(o(),a("article",Wt,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0 <strong>编制日期</strong>: 2026-07-17 <strong>适用版本</strong>: ECDP-Cloud 全版本 <strong>文档状态</strong>: 正式发布</p></blockquote><hr><h2 id="一背景与问题">一、背景与问题</h2><h3 id="11-现状">1.1 现状</h3><p>项目对接一体化签名平台进行数据签名，保障数据完整性与防篡改。但一体化签名平台存在以下限制：</p><ul><li><strong>不提供批量验签接口</strong>：每次验签需单独调用 HTTP 接口</li><li><strong>列表场景性能瓶颈</strong>：列表展示 N 条数据需要 N 次 HTTP 请求验签，严重影响页面加载性能</li><li><strong>网络依赖</strong>：验签强依赖外部服务可用性</li></ul><h3 id="12-核心矛盾">1.2 核心矛盾</h3><div class="doc-table-wrap"><table><thead><tr><th>场景</th><th>需求</th><th>一体化签名现状</th></tr></thead><tbody><tr><td>列表批量验签</td><td>一次请求验签 N 条数据</td><td>❌ 需 N 次 HTTP 请求</td></tr><tr><td>单条权威校验</td><td>数据导出、审计、合规</td><td>✅ 支持</td></tr><tr><td>离线验签</td><td>内网环境、断网场景</td><td>❌ 依赖外部服务</td></tr><tr><td>高频验签</td><td>每次查询都验签</td><td>❌ 接口调用成本高</td></tr></tbody></table></div><h3 id="13-解决思路">1.3 解决思路</h3><p>引入本地签名作为<strong>第一道防线</strong>：</p><ul><li><strong>写入时</strong>：同时计算本地签名和一体化签名，双写保障</li><li><strong>验签时</strong>：优先本地验签，通过即视为数据可信，避免调用外部接口</li><li><strong>兜底机制</strong>：仅本地验签失败时调用一体化签名平台，区分&quot;密钥轮换&quot;与&quot;数据篡改&quot;</li></ul><hr><h2 id="二双签名架构设计">二、双签名架构设计</h2><h3 id="21-设计思路">2.1 设计思路</h3><p>在每张表中同时维护两个签名字段：</p><ul><li><strong><code>local_signature</code></strong>：本地签名，服务端自行计算，用于列表批量验签</li><li><strong><code>signature</code></strong>：一体化签名，由外部签名平台签发，用于单条权威校验</li></ul><p>两个签名各司其职，互不干扰，通过版本号独立管理。</p><h3 id="22-架构总览">2.2 架构总览</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>┌─────────────────────────────────────────────────────────────────────┐
    │                          数据签名体系                                │
    ├─────────────────────────────┬───────────────────────────────────────┤
    │      本地签名（local_）       │         一体化签名（无前缀）            │
    ├─────────────────────────────┼───────────────────────────────────────┤
    │ 算法：SM2（国密）              │ 算法：由一体化签名平台决定               │
    │ 密钥：本地管理（服务端）        │ 密钥：一体化签名平台管理                 │
    │ 性能：高性能，本地计算          │ 性能：依赖外部 HTTP 接口                │
    │ 用途：列表批量验签             │ 用途：单条数据权威验签                   │
    │ 批量验签：✅ 支持（上限1000条） │ 批量验签：❌ 不支持（需逐条调用）        │
    │ 场景：前端列表展示验签          │ 场景：数据导出、审计、合规校验           │
    │ 验签优先级：🥇 优先            │ 验签优先级：🥈 兜底                     │
    └─────────────────────────────┴───────────────────────────────────────┘
    </code></pre></div><p><strong>验签策略</strong>：优先本地验签，通过则无需调用外部接口；仅本地验签失败时才调用一体化签名平台兜底校验。</p><h3 id="23-数据流">2.3 数据流</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>                    ┌──────────────────────────────────┐
                        │           数据写入流程              │
                        └──────────────────────────────────┘
    
      Service.save(entity) / Service.update(entity)
            │
            ├── 1. 构建签名 Key（业务关键字段拼接）
            │
            ├── 2. 本地签名（SM2，同步，必选）
            │      entity.localSignature = signData(key)
            │      entity.localSignatureVersion = CURRENT_VERSION
            │
            └── 3. 一体化签名（外部接口，同步，必选）
                   entity.signature = externalSign(key)
                   entity.signatureVersion = CURRENT_VERSION
                   │
                   ▼
               写入数据库
    </code></pre></div><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>                    ┌──────────────────────────────────┐
                        │           验签流程（优先本地）       │
                        └──────────────────────────────────┘
    
      查询数据（单条 / 列表）
            │
            ├── 1. 本地签名验签（SM2，优先）
            │      valid = localVerify(key, localSignature)
            │
            ├── 2. 判断结果
            │      ├── ✅ 通过 → 验签完成，无需调用外部接口
            │      │
            │      └── ❌ 失败 → 进入步骤 3
            │
            └── 3. 一体化签名验签（外部接口，兜底）
                   valid = externalVerify(key, signature)
                   ├── ✅ 通过 → 数据可信（本地密钥可能已轮换）
                   └── ❌ 失败 → 数据已被篡改
    </code></pre></div><p><strong>设计要点</strong>：</p><ul><li><strong>写入时双签</strong>：每次保存/更新同时计算两个签名，确保数据完整性</li><li><strong>验签时本地优先</strong>：本地验签通过即视为数据可信，避免不必要的外部接口调用</li><li><strong>外部验签兜底</strong>：仅在本地验签失败时调用，用于区分&quot;密钥轮换&quot;和&quot;数据篡改&quot;</li><li><strong>列表场景</strong>：先批量本地验签，失败的记录再逐条调用外部验签，大幅减少外部接口调用次数</li></ul><hr><h2 id="三签名算法">三、签名算法</h2><h3 id="31-本地签名sm2">3.1 本地签名（SM2）</h3><p>采用国密 SM2 非对称签名算法，基于 Hutool SmUtil 封装。</p><ul><li><strong>私钥</strong>：用于签名，Hex 编码（32 字节 D 值）</li><li><strong>公钥</strong>：用于验签，Hex 编码（64 字节坐标 X||Y）</li><li><strong>签名值</strong>：Hex 编码，存储于 <code>local_signature</code> 字段</li></ul><h3 id="32-一体化签名">3.2 一体化签名</h3><p>由一体化签名平台决定具体算法，当前尚未对接。</p><ul><li><strong>签名值</strong>：存储于 <code>signature</code> 字段</li><li><strong>对接方式</strong>：实现 <code>ExternalSignatureStrategy</code>，继承 <code>ISignatureService</code></li></ul><hr><h2 id="四签名-key-构建规则">四、签名 Key 构建规则</h2><h3 id="41-基本原则">4.1 基本原则</h3><p>签名 Key 由业务关键字段拼接而成，代表一条数据的&quot;业务指纹&quot;：</p><div class="doc-table-wrap"><table><thead><tr><th>原则</th><th>说明</th></tr></thead><tbody><tr><td>业务唯一性</td><td>选择能唯一标识业务含义的字段组合</td></tr><tr><td>稳定性</td><td>避免使用会频繁变更的字段</td></tr><tr><td>可重建性</td><td>验签时能从数据中还原出相同的 Key</td></tr><tr><td>最小化</td><td>字段越少越好，减少拼接复杂度</td></tr></tbody></table></div><h3 id="42-分隔符">4.2 分隔符</h3><p>使用 <code>SignatureConstants.SEPARATOR</code>（<code>|</code>）作为字段分隔符：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">public interface SignatureConstants {
        /**
         * 默认密钥版本号
         */
        int DEFAULT_VERSION = 1;
    
        /**
         * 签名 Key 字段分隔符
         */
        String SEPARATOR = &quot;|&quot;;
    }
    </code></pre></div><h3 id="43-构建规范">4.3 构建规范</h3><div class="doc-table-wrap"><table><thead><tr><th>要求</th><th>说明</th></tr></thead><tbody><tr><td>接口必选</td><td><code>IService</code> 接口中必须声明 <code>buildSignatureKey(...)</code> 方法</td></tr><tr><td>参数要求</td><td><strong>参数为业务关键字段（非 Entity 对象）</strong>，如 <code>buildSignatureKey(String code, String name)</code></td></tr><tr><td>实现必覆写</td><td><code>ServiceImpl</code> 中必须 <code>@Override public</code> 实现该方法，访问权限<strong>必须为 <code>public</code></strong></td></tr><tr><td>分隔符常量</td><td>拼接时<strong>必须</strong>使用 <code>SignatureConstants.SEPARATOR</code>（值为 \`</td></tr><tr><td>零字段保护</td><td>可选业务字段若为 <code>null</code>，需转换为空串 <code>&quot;&quot;</code> 后再拼接</td></tr></tbody></table></div><h3 id="44-构建示例">4.4 构建示例</h3><div class="doc-table-wrap"><table><thead><tr><th>业务表</th><th>签名 Key 构建</th><th>说明</th></tr></thead><tbody><tr><td>路段表</td><td><code>buildSignatureKey(String sectionNo, String sectionName)</code></td><td>编号 + 名称</td></tr><tr><td>组织表</td><td><code>buildSignatureKey(String orgCode, String orgName)</code></td><td>编码 + 名称</td></tr><tr><td>用户表</td><td><code>buildSignatureKey(String username, String phone)</code></td><td>用户名 + 手机号</td></tr><tr><td>任务表</td><td><code>buildSignatureKey(String taskNo, String taskName)</code></td><td>任务编号 + 任务名称</td></tr></tbody></table></div><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">// IService 接口
    /**
     * 构建签名 Key
     * @param exampleNo 示例编号
     * @param exampleName 示例名称
     * @return 签名原文
     */
    String buildSignatureKey(String exampleNo, String exampleName);
    
    // ServiceImpl 实现
    @Override
    public String buildSignatureKey(String exampleNo, String exampleName) {
        String no = exampleNo != null ? exampleNo : &quot;&quot;;
        String name = exampleName != null ? exampleName : &quot;&quot;;
        return no + SignatureConstants.SEPARATOR + name;
    }
    </code></pre></div><hr><h2 id="五代码实现">五、代码实现</h2><h3 id="51-核心接口">5.1 核心接口</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">public interface ISignatureService {
    
        // ==================== 本地签名（SM2） ====================
    
        /**
         * 本地签名单条（使用最新版本密钥）
         * @param message 原文
         * @return 签名结果（含签名值和版本号），签名功能禁用时返回 null
         */
        SignatureResult signLocal(String message);
    
        /**
         * 本地批量签名（上限 500 条，使用最新版本密钥）
         * @param messageMap 原文 Map
         * @return 签名结果 Map
         */
        Map&lt;String, SignatureResult&gt; signLocalBatch(Map&lt;String, String&gt; messageMap);
    
        /**
         * 本地验签单条（根据传入的版本号选择密钥）
         * @param message 原文
         * @param signature 签名值
         * @param version 签名版本号（用于选择对应密钥）
         * @return true=通过
         */
        boolean verifyLocal(String message, String signature, int version);
    
        /**
         * 本地批量验签（上限 500 条）
         * @param signatureMap 验签 Map（key=原文，value=签名结果）
         * @return 验签结果 Map
         */
        Map&lt;String, VerifyResult&gt; verifyLocalBatch(Map&lt;String, SignatureResult&gt; signatureMap);
    
        // ==================== 一体化签名 ====================
    
        /**
         * 一体化签名单条（使用最新版本密钥）
         * @param message 原文
         * @return 签名结果，签名功能禁用时返回 null
         */
        SignatureResult signExternal(String message);
    
        /**
         * 一体化批量签名（上限 50 条）
         * @param messageMap 原文 Map
         * @return 签名结果 Map
         */
        Map&lt;String, SignatureResult&gt; signExternalBatch(Map&lt;String, String&gt; messageMap);
    
        /**
         * 一体化验签单条
         * @param message 原文
         * @param signature 签名值
         * @return true=通过
         */
        boolean verifyExternal(String message, String signature);
    
        /**
         * 一体化批量验签（上限 50 条）
         * @param signatureMap 验签 Map（key=原文，value=签名结果）
         * @return 验签结果 Map
         */
        Map&lt;String, VerifyResult&gt; verifyExternalBatch(Map&lt;String, SignatureResult&gt; signatureMap);
    }
    </code></pre></div><h3 id="52-签名结果-dto">5.2 签名结果 DTO</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Data
    @Builder
    public class SignatureResult implements Serializable {
        /** 签名值 */
        private String signature;
        /** 签名版本号（用于验签时选择对应密钥） */
        private int version;
        /** 签名算法（如 SM2） */
        private String algorithm;
    }
    </code></pre></div><h3 id="53-验签结果-dto">5.3 验签结果 DTO</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Data
    @Builder
    public class VerifyResult implements Serializable {
        /** 是否通过 */
        private boolean passed;
        /** 签名版本号（验签时使用的版本） */
        private int version;
        /** 失败原因（可选） */
        private String reason;
    }
    </code></pre></div><h3 id="54-策略模式">5.4 策略模式</h3><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>ISignatureService（接口）
        │
        └── SignatureServiceImpl（Spring Bean，自动注入）
                │
                ├── 根据配置选择启用状态
                │
                ├── 本地签名（SM2）
                │   ├── enabled: true → 正常签名/验签
                │   └── enabled: false → 返回 null / false
                │
                └── 一体化签名（待对接）
                    ├── enabled: true → 调用外部接口
                    └── enabled: false → 返回 null / false
    </code></pre></div><h3 id="55-配置项">5.5 配置项</h3><div class="code-block"><div class="code-head"><span class="code-lang">yaml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-yaml">security:
      crypto:
        # ==================== 本地加解密 ====================
        # 是否启用本地加解密功能，默认 true
        local-crypto-enabled: true
        # 本地 SM4 加密密钥（Hex 编码，32字符，16字节）
        local-crypto-key: &quot;224ef329ca746bbd...&quot;
        # 本地批量加解密上限，默认 1000
        local-crypto-batch-max: 1000
    
        # ==================== 本地签名 ====================
        # 是否启用本地签名功能，默认 true
        local-signature-enabled: true
        # 本地批量签名上限，默认 500
        local-signature-batch-max: 500
        # 本地签名密钥列表（按版本号升序排列，版本号越大表示越新）
        local-signature-keys:
          - version: 1
            private-key: &quot;30819302010030...&quot;
            public-key: &quot;3059301306072a...&quot;
          - version: 2
            private-key: &quot;...&quot;
            public-key: &quot;...&quot;
    
        # ==================== 一体化加解密 ====================
        # 是否启用一体化加解密功能，默认 false（待对接）
        external-crypto-enabled: false
        # 一体化批量加解密上限，默认 1000
        external-crypto-batch-max: 1000
    
        # ==================== 一体化签名 ====================
        # 是否启用一体化签名功能，默认 false（待对接）
        external-signature-enabled: false
        # 一体化批量签名上限，默认 50
        external-signature-batch-max: 50
    </code></pre></div><h3 id="56-service-层签名写入">5.6 Service 层签名写入</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">@Slf4j
    @Service
    @RequiredArgsConstructor
    public class FloodExampleServiceImpl
            extends ServiceImpl&lt;FloodExampleMapper, FloodExample&gt;
            implements IFloodExampleService {
    
        private final ISignatureService signatureService;
    
        @Transactional(rollbackFor = Exception.class)
        @Override
        public void saveExample(FloodExampleRequest request) {
            FloodExample entity = new FloodExample();
            BeanUtils.copyProperties(request, entity);
            entity.setExampleId(IdGenerator.idKey());
    
            // 构建签名 Key
            String signatureKey = buildSignatureKey(entity);
    
            // 本地签名（SM2）
            SignatureResult localResult = signatureService.signLocal(signatureKey);
            if (localResult != null) {
                entity.setLocalSignature(localResult.getSignature());
                entity.setLocalSignatureVersion(localResult.getVersion());
            }
    
            // 一体化签名（对接后启用）
            // SignatureResult externalResult = signatureService.signExternal(signatureKey);
            // if (externalResult != null) {
            //     entity.setSignature(externalResult.getSignature());
            //     entity.setSignatureVersion(externalResult.getVersion());
            // }
    
            this.save(entity);
        }
    
        /**
         * 构建签名 Key
         */
        private String buildSignatureKey(FloodExample entity) {
            return entity.getExampleNo() + SignatureConstants.SEPARATOR + entity.getExampleName();
        }
    }
    </code></pre></div><h3 id="57-验签本地优先外部兜底">5.7 验签（本地优先、外部兜底）</h3><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">/**
     * 单条验签：本地优先，失败时调用外部兜底
     */
    public boolean verify(FloodExample entity) {
        String key = buildSignatureKey(entity);
    
        // 1. 优先本地验签（SM2）
        boolean localValid = signatureService.verifyLocal(
                key, entity.getLocalSignature(), entity.getLocalSignatureVersion());
        if (localValid) {
            return true;  // 本地通过，无需调用外部接口
        }
    
        // 2. 本地失败，调用一体化签名平台兜底
        log.warn(&quot;本地验签失败，尝试外部验签: id={}&quot;, entity.getExampleId());
        boolean externalValid = signatureService.verifyExternal(key, entity.getSignature());
        if (externalValid) {
            log.info(&quot;外部验签通过（可能密钥已轮换），建议重签: id={}&quot;, entity.getExampleId());
            return true;
        }
    
        // 3. 两者均失败，数据已被篡改
        log.error(&quot;数据签名验证失败（本地+外部均不通过）: id={}&quot;, entity.getExampleId());
        return false;
    }
    
    /**
     * 批量验签：先批量本地验签，失败记录再逐条外部验签
     */
    public List&lt;Long&gt; batchVerify(List&lt;FloodExample&gt; list) {
        // 1. 构建本地验签 Map：key = 原文，value = SignatureResult
        Map&lt;String, SignatureResult&gt; signatureMap = new LinkedHashMap&lt;&gt;();
        Map&lt;String, Long&gt; keyToIdMap = new LinkedHashMap&lt;&gt;();
        Map&lt;String, FloodExample&gt; keyToEntityMap = new LinkedHashMap&lt;&gt;();
    
        for (FloodExample item : list) {
            String key = buildSignatureKey(item);
            signatureMap.put(key, SignatureResult.builder()
                    .signature(item.getLocalSignature())
                    .version(item.getLocalSignatureVersion())
                    .algorithm(&quot;SM2&quot;)
                    .build());
            keyToIdMap.put(key, item.getExampleId());
            keyToEntityMap.put(key, item);
        }
    
        // 2. 批量本地验签（单次上限 500 条）
        Map&lt;String, VerifyResult&gt; localResults = signatureService.verifyLocalBatch(signatureMap);
    
        // 3. 收集本地验签失败的记录，逐条调用外部验签
        List&lt;Long&gt; failedIds = new ArrayList&lt;&gt;();
        int localPassed = 0;
        int externalPassed = 0;
    
        for (Map.Entry&lt;String, VerifyResult&gt; entry : localResults.entrySet()) {
            String key = entry.getKey();
            Long id = keyToIdMap.get(key);
    
            if (entry.getValue().isPassed()) {
                localPassed++;
                continue;
            }
    
            // 本地失败，调用外部验签兜底
            FloodExample entity = keyToEntityMap.get(key);
            boolean externalValid = signatureService.verifyExternal(key, entity.getSignature());
            if (externalValid) {
                externalPassed++;
                log.warn(&quot;本地验签失败但外部通过（建议重签）: id={}&quot;, id);
            } else {
                failedIds.add(id);
                log.error(&quot;数据签名验证失败: id={}&quot;, id);
            }
        }
    
        log.info(&quot;批量验签完成: 总数={}, 本地通过={}, 外部兜底通过={}, 失败={}&quot;,
                list.size(), localPassed, externalPassed, failedIds.size());
    
        return failedIds;
    }
    </code></pre></div><h3 id="58-验签失败处理">5.8 验签失败处理</h3><p>验签失败时直接抛出业务异常，通过统一的 <code>ApiResult</code> 错误响应返回前端：</p><div class="code-block"><div class="code-head"><span class="code-lang">java</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-java">/**
     * 单条验签，失败时抛出异常
     */
    public void verifyOrThrow(FloodExample entity) {
        String key = buildSignatureKey(entity);
    
        // 1. 优先本地验签
        if (signatureService.verifyLocal(key, entity.getLocalSignature(), entity.getLocalSignatureVersion())) {
            return;
        }
    
        // 2. 外部验签兜底
        if (signatureService.verifyExternal(key, entity.getSignature())) {
            log.warn(&quot;本地验签失败但外部通过，建议重签: id={}&quot;, entity.getExampleId());
            return;
        }
    
        // 3. 两者均失败，抛出异常
        throw new ServiceException(&quot;数据签名验证失败，可能已被篡改（ID: &quot; + entity.getExampleId() + &quot;）&quot;);
    }
    
    /**
     * 批量验签，失败时抛出异常并携带失败 ID
     */
    public void batchVerifyOrThrow(List&lt;FloodExample&gt; list) {
        List&lt;Long&gt; failedIds = batchVerify(list);
        if (!failedIds.isEmpty()) {
            throw new ServiceException(&quot;检测到 &quot; + failedIds.size() + &quot; 条数据签名异常，可能已被篡改，失败ID: &quot; + failedIds);
        }
    }
    </code></pre></div><p><strong>前端响应示例</strong>：</p><div class="code-block"><div class="code-head"><span class="code-lang">json</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-json">{
        &quot;code&quot;: 500,
        &quot;message&quot;: &quot;检测到 2 条数据签名异常，可能已被篡改，失败ID: [1876544321098765432, 1876544321098765433]&quot;,
        &quot;success&quot;: false,
        &quot;data&quot;: null
    }
    </code></pre></div><hr><h2 id="六版本管理">六、版本管理</h2><h3 id="61-版本号定义">6.1 版本号定义</h3><div class="doc-table-wrap"><table><thead><tr><th>配置项</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td><code>DEFAULT_VERSION</code></td><td>1</td><td>未配置密钥时的默认版本号</td></tr><tr><td><code>localSignatureVersion</code></td><td>签名时的版本号</td><td>存储在 <code>local_signature_version</code> 字段</td></tr><tr><td><code>signatureVersion</code></td><td>签名时的版本号</td><td>存储在 <code>signature_version</code> 字段</td></tr></tbody></table></div><h3 id="62-密钥版本升级策略">6.2 密钥版本升级策略</h3><p>签名算法升级时的处理流程：</p><ol><li><strong>新增密钥配置</strong>：在 <code>local-signature-keys</code> 列表中新增版本配置</li></ol><div class="code-block"><div class="code-head"><span class="code-lang">yaml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-yaml">local-signature-keys:
      - version: 1
        private-key: &quot;...&quot;  # 旧密钥
        public-key: &quot;...&quot;
      - version: 2
        private-key: &quot;...&quot;  # 新密钥
        public-key: &quot;...&quot;
    </code></pre></div><ol start="2"><li><p><strong>新版本上线</strong>：<code>SignatureResult</code> 自动使用版本号最大的密钥（version=2）进行签名</p></li><li><p><strong>存量迁移</strong>：通过定时任务逐步将旧版本数据重新签名</p></li><li><p><strong>兼容验签</strong>：验签时根据 <code>signature_version</code> 字段选择对应版本密钥</p></li></ol><div class="code-block"><div class="code-head"><span class="code-lang"></span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code>验签流程：
        if (version == 1) → 使用 version=1 的公钥验签
        if (version == 2) → 使用 version=2 的公钥验签
        if (version == null || version == 0) → 跳过验签（存量脏数据）
    </code></pre></div><hr><h2 id="七字段定义速查">七、字段定义速查</h2><blockquote><p>详细建表 DDL 见 <a href="/library/12">数据库设计规范</a> 第三章。</p></blockquote><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td><code>local_signature</code></td><td>VARCHAR(500)</td><td>本地签名值（SM2），用于列表批量验签</td></tr><tr><td><code>local_signature_version</code></td><td>INTEGER</td><td>本地签名版本号</td></tr><tr><td><code>signature</code></td><td>VARCHAR(500)</td><td>一体化签名值，用于对接外部签名平台</td></tr><tr><td><code>signature_version</code></td><td>INTEGER</td><td>一体化签名版本号</td></tr></tbody></table></div><hr><blockquote><p><strong>相关文档</strong>：</p><ul><li><a href="/library/12">数据库设计规范</a> — 签名字段定义与建表规范</li><li><a href="/library/15">架构设计规范</a> — 第三章 数据架构</li></ul></blockquote>`,83)])]))}}),te={class:"doc-article"},ee=h({__name:"SystemArchitectureDoc",setup(n){return(s,t)=>(o(),a("article",te,[...t[0]||(t[0]=[v(`<blockquote><p><strong>文档版本</strong>: v1.0<br><strong>编制日期</strong>: 2026-07-29<br><strong>适用版本</strong>: ECDP-Cloud 全版本<br><strong>文档类型</strong>: 架构设计说明书<br><strong>文档状态</strong>: 正式发布<br><strong>文档来源</strong>: 本文档描述后端微服务版（ECDP-Cloud）的架构设计，收录于本前端演示仓库 <code>docs/</code> 作为设计参考资料；其引用的 AGENTS.md、容器化部署文档等位于后端仓库，本仓库未收录。</p></blockquote><hr><h1 id="第一章-文档概述">第一章 文档概述</h1><h2 id="11-文档目的">1.1 文档目的</h2><p>本文档用于说明 <strong>广东省应急指挥调度平台（ECDP-Cloud）</strong> 的系统架构设计，包括系统建设目标、总体架构、业务架构、应用模块划分、数据架构、安全架构、技术组件、服务通信、部署运行和运维韧性等内容。</p><p>本文档从“系统如何设计、为什么这样设计、各组成部分如何协同”的角度进行说明，主要用于帮助项目干系人、架构师、开发人员、测试人员、运维人员理解系统整体结构与设计思路。</p><h2 id="12-文档定位">1.2 文档定位</h2><p>本文档已由原先的“架构设计规范”调整为“系统架构设计说明书”。调整后的定位如下：</p><ul><li><strong>架构设计说明书</strong>：描述系统架构方案、模块组成、技术选型、交互关系和部署形态；</li><li><strong>开发规范类文档</strong>：约束代码命名、接口风格、数据库设计、异常处理、日志处理等实现细节；</li><li><strong>运维部署类文档</strong>：说明环境准备、容器部署、中间件部署、服务启停和日常运维操作。</li></ul><p>因此，本文档不再作为具体编码规范的唯一来源。涉及接口、数据库、日志、异常、服务通信等详细约束时，以对应专项规范文档为准，本文档仅保留架构层面的说明和引用。</p><h2 id="13-适用范围">1.3 适用范围</h2><p>本文档适用于 ECDP-Cloud 平台的：</p><ul><li>总体架构评审；</li><li>微服务模块划分说明；</li><li>技术选型说明；</li><li>系统集成设计说明；</li><li>部署方案设计说明；</li><li>新模块接入前的架构理解；</li><li>开发、测试、运维交接。</li></ul><h2 id="14-读者对象">1.4 读者对象</h2><div class="doc-table-wrap"><table><thead><tr><th>读者</th><th>关注内容</th></tr></thead><tbody><tr><td>项目负责人</td><td>系统建设目标、模块边界、部署规模、演进方向</td></tr><tr><td>架构师</td><td>总体架构、技术选型、服务通信、安全与数据架构</td></tr><tr><td>开发人员</td><td>模块职责、依赖关系、公共能力、接口协作方式</td></tr><tr><td>测试人员</td><td>服务边界、接口链路、部署环境、关键业务流程</td></tr><tr><td>运维人员</td><td>部署架构、端口规划、中间件依赖、日志与监控</td></tr></tbody></table></div><h2 id="15-术语说明">1.5 术语说明</h2><div class="doc-table-wrap"><table><thead><tr><th>术语</th><th>说明</th></tr></thead><tbody><tr><td>ECDP-Cloud</td><td>广东省应急指挥调度平台微服务版本</td></tr><tr><td>Gateway</td><td>API 网关服务，统一承接外部请求并转发至后端微服务</td></tr><tr><td>Auth</td><td>认证授权服务，负责 OAuth2 登录、Token 颁发和校验</td></tr><tr><td>UPMS</td><td>统一权限管理系统，负责用户、角色、菜单、组织等基础权限能力</td></tr><tr><td>API 模块</td><td>仅承载服务间调用契约、DTO、实体、Feign 接口等，不包含业务实现</td></tr><tr><td>Biz 模块</td><td>业务实现模块，承载 Controller、Service、Mapper、业务逻辑等</td></tr><tr><td>Nacos</td><td>注册中心与配置中心</td></tr><tr><td>OpenFeign</td><td>服务间声明式 HTTP 调用框架</td></tr><tr><td>OpenGauss</td><td>系统主数据库</td></tr></tbody></table></div><hr><h1 id="第二章-建设背景与架构目标">第二章 建设背景与架构目标</h1><h2 id="21-建设背景">2.1 建设背景</h2><p>广东省应急指挥调度平台面向省级应急管理和多部门协同场景，支撑值班值守、事件接报、预案管理、调度指挥、资源管理、辅助决策、数据融合、防汛巡查、第三方系统对接等综合业务。</p><p>平台需要面对业务域多、用户角色多、系统集成多、数据安全要求高、运行连续性要求高等特点，因此采用微服务架构进行系统拆分，通过统一网关、统一认证、统一权限、统一配置和统一公共能力降低系统复杂度。</p><h2 id="22-架构目标">2.2 架构目标</h2><p>系统架构设计目标如下：</p><div class="doc-table-wrap"><table><thead><tr><th>目标</th><th>说明</th></tr></thead><tbody><tr><td>业务解耦</td><td>按业务域拆分微服务，降低模块间耦合，支持独立开发、测试、部署和扩展</td></tr><tr><td>统一入口</td><td>通过网关统一承接外部访问，集中处理路由、认证、限流和跨域等入口能力</td></tr><tr><td>统一认证</td><td>通过认证授权中心统一颁发和校验 Token，保障身份可信</td></tr><tr><td>统一权限</td><td>通过 UPMS 提供用户、角色、菜单、权限等平台级基础能力</td></tr><tr><td>数据安全</td><td>通过加密、脱敏、数据签名、权限控制等机制保障数据安全和完整性</td></tr><tr><td>弹性扩展</td><td>微服务可按业务压力独立扩容，支持容器化部署和后续 Kubernetes 编排</td></tr><tr><td>运维可控</td><td>通过统一配置、统一日志、服务注册发现和标准化部署降低运维复杂度</td></tr><tr><td>持续演进</td><td>支持新增业务域、第三方系统接入和基础能力扩展</td></tr></tbody></table></div><h2 id="23-架构设计原则">2.3 架构设计原则</h2><p>ECDP-Cloud 的架构设计遵循以下原则：</p><ol><li><strong>业务域驱动拆分</strong>：以业务职责和数据边界作为服务划分依据；</li><li><strong>公共能力下沉</strong>：认证、安全、日志、数据访问、Feign、Swagger、加密等通用能力沉淀到公共模块；</li><li><strong>接口契约前置</strong>：跨服务调用通过 API 模块和 Feign 接口定义契约；</li><li><strong>配置外部化</strong>：环境差异、数据库连接、中间件连接、业务开关等配置统一由 Nacos 管理；</li><li><strong>安全内建</strong>：认证、权限、数据脱敏、数据签名、内部接口校验作为平台基础能力；</li><li><strong>部署可替换</strong>：支持 Docker Compose 部署，并为 Kubernetes 编排预留演进空间；</li><li><strong>渐进式治理</strong>：熔断降级、链路追踪、监控告警等治理能力按系统阶段逐步增强。</li></ol><h2 id="24-质量目标">2.4 质量目标</h2><div class="doc-table-wrap"><table><thead><tr><th>质量属性</th><th>设计说明</th></tr></thead><tbody><tr><td>可用性</td><td>核心服务按 7×24 小时运行设计，关键模块目标可用性不低于 99.9%</td></tr><tr><td>可维护性</td><td>通过多模块结构、公共组件和规范化接口降低维护成本</td></tr><tr><td>可扩展性</td><td>支持按业务域新增服务，支持服务实例水平扩展</td></tr><tr><td>安全性</td><td>提供认证、授权、数据加密、数据脱敏和数据签名能力</td></tr><tr><td>可观测性</td><td>通过统一日志、操作日志、健康检查和后续监控体系支撑运维排障</td></tr><tr><td>可部署性</td><td>通过 Maven Profile、Nacos 配置和容器化部署支持多环境发布</td></tr></tbody></table></div><hr><h1 id="第三章-总体架构设计">第三章 总体架构设计</h1><h2 id="31-总体架构视图">3.1 总体架构视图</h2><p>ECDP-Cloud 采用分层微服务架构，整体由接入层、认证与网关层、平台服务层、业务服务层、基础服务层、公共能力层、数据与中间件层组成。</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">┌────────────────────────────────────────────────────────────────────┐
    │                            客户端接入层                              │
    │        后台管理端 | 移动端 | 指挥大屏 | 第三方系统 | 运维入口          │
    └───────────────────────────────┬────────────────────────────────────┘
                                    │ HTTPS / HTTP
    ┌───────────────────────────────▼────────────────────────────────────┐
    │                         网关与认证层                                 │
    │  ecdp-gateway：统一入口、路由、JWT 校验、限流、跨域、API 聚合          │
    │  ecdp-auth：OAuth2 认证授权、Token 颁发、Token 内省、Token 撤销        │
    └───────────────────────────────┬────────────────────────────────────┘
                                    │ OpenFeign / REST
    ┌───────────────────────────────▼────────────────────────────────────┐
    │                         平台服务层                                   │
    │  ecdp-upms-api + ecdp-upms-biz：用户、组织、角色、菜单、权限、日志      │
    └───────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────▼────────────────────────────────────┐
    │                         业务服务层                                   │
    │  ecdp-duty        应急值守        ecdp-plan       应急预案             │
    │  ecdp-event       应急事件        ecdp-dispatch   调度指挥             │
    │  ecdp-resource    应急资源        ecdp-dss        辅助决策             │
    │  ecdp-fusion      数据融合        ecdp-flood-inspection 防汛巡查        │
    └───────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────▼────────────────────────────────────┐
    │                         基础服务层                                   │
    │  ecdp-third-party：第三方系统集成                                     │
    │  ecdp-workflow：工作流引擎与流程能力                                  │
    └───────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────▼────────────────────────────────────┐
    │                         公共能力层                                   │
    │  ecdp-common-core | data | security | feign | log | encrypt          │
    │  sensitive | swagger | s3 | xxl-job | rabbitmq | wps | bom           │
    └───────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────▼────────────────────────────────────┐
    │                         数据与中间件层                               │
    │  OpenGauss | Redis | Nacos | RabbitMQ | XXL-JOB | S3 | WPS 服务       │
    └────────────────────────────────────────────────────────────────────┘
    </code></pre></div><h2 id="32-请求处理链路">3.2 请求处理链路</h2><p>外部请求统一从 <code>ecdp-gateway</code> 进入，网关完成基础认证校验和路由转发，业务服务完成方法级权限校验和业务处理。</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">客户端
      │
      │ 1. 携带 Token 发起请求
      ▼
    ecdp-gateway
      │ 2. 校验 JWT、匹配路由、转发请求
      ▼
    目标业务服务
      │ 3. 通过资源服务器能力进行 Token 内省
      │ 4. 通过 @HasPermission 执行权限校验
      │ 5. 执行业务逻辑、访问数据库或调用其他服务
      ▼
    OpenGauss / Redis / 其他微服务
      │
      ▼
    统一 ApiResult 响应
    </code></pre></div><h2 id="33-服务协作关系">3.3 服务协作关系</h2><div class="doc-table-wrap"><table><thead><tr><th>协作关系</th><th>说明</th></tr></thead><tbody><tr><td>客户端 → 网关</td><td>所有外部业务请求统一进入网关，由网关按路由转发</td></tr><tr><td>网关 → 认证服务</td><td>登录、Token 校验、Token 刷新等认证相关能力由 Auth 提供</td></tr><tr><td>业务服务 → UPMS</td><td>获取用户、组织、角色、权限、日志入库等平台基础能力</td></tr><tr><td>业务服务 → 业务服务</td><td>通过 API 模块定义契约，通过 OpenFeign 发起调用</td></tr><tr><td>业务服务 → 基础服务</td><td>第三方系统对接、流程流转、文件处理等能力由基础服务提供</td></tr><tr><td>服务 → 中间件</td><td>通过 Nacos、Redis、RabbitMQ、XXL-JOB、S3 等组件完成配置、缓存、消息和任务调度</td></tr></tbody></table></div><h2 id="34-架构边界说明">3.4 架构边界说明</h2><p>系统通过服务边界控制职责范围：</p><ul><li><code>ecdp-gateway</code> 只负责入口治理，不承载业务逻辑；</li><li><code>ecdp-auth</code> 只负责认证授权和 Token 生命周期管理；</li><li><code>ecdp-upms-biz</code> 承载平台级用户、组织、角色、菜单、权限等能力；</li><li>业务服务承载各自业务域逻辑，不直接操作其他业务服务的数据表；</li><li>API 模块仅承载接口契约，不包含业务实现；</li><li>公共模块只提供通用能力，不反向依赖业务模块。</li></ul><hr><h1 id="第四章-业务架构设计">第四章 业务架构设计</h1><h2 id="41-业务域划分">4.1 业务域划分</h2><p>ECDP-Cloud 按应急业务链路划分为平台支撑域、应急业务域、辅助决策域、外部集成域和流程支撑域。</p><div class="doc-table-wrap"><table><thead><tr><th>业务域</th><th>对应服务</th><th>主要职责</th></tr></thead><tbody><tr><td>平台支撑域</td><td><code>ecdp-upms-biz</code></td><td>用户、组织、角色、菜单、权限、操作日志等平台基础能力</td></tr><tr><td>应急值守域</td><td><code>ecdp-duty</code></td><td>值班值守、值班安排、值守记录等</td></tr><tr><td>应急预案域</td><td><code>ecdp-plan</code></td><td>预案管理、预案版本、预案关联资源等</td></tr><tr><td>应急事件域</td><td><code>ecdp-event</code></td><td>事件接报、事件流转、事件处置记录等</td></tr><tr><td>调度指挥域</td><td><code>ecdp-dispatch</code></td><td>指挥调度、任务派发、处置跟踪等</td></tr><tr><td>应急资源域</td><td><code>ecdp-resource</code></td><td>物资、队伍、装备、资源点等应急资源管理</td></tr><tr><td>辅助决策域</td><td><code>ecdp-dss</code></td><td>决策分析、统计汇总、态势研判等</td></tr><tr><td>数据融合域</td><td><code>ecdp-fusion</code></td><td>多源数据融合、数据治理、数据分析支撑</td></tr><tr><td>防汛巡查域</td><td><code>ecdp-flood-inspection</code></td><td>防汛巡查、巡查任务、隐患问题、业务域权限自治</td></tr><tr><td>外部集成域</td><td><code>ecdp-third-party</code></td><td>天气、高速、里程桩、融合通信等第三方能力对接</td></tr><tr><td>流程支撑域</td><td><code>ecdp-workflow</code></td><td>流程定义、流程实例、审批流转等工作流能力</td></tr></tbody></table></div><h2 id="42-核心业务链路">4.2 核心业务链路</h2><p>平台围绕应急事件处置形成业务闭环：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">事件接报
      │
      ▼
    事件研判与分级
      │
      ▼
    预案匹配与资源查询
      │
      ▼
    调度指挥与任务派发
      │
      ▼
    处置过程跟踪
      │
      ▼
    结果反馈与复盘分析
    </code></pre></div><p>在该链路中：</p><ul><li><code>ecdp-event</code> 负责事件接报、事件基础信息和处置过程记录；</li><li><code>ecdp-plan</code> 提供应急预案和处置依据；</li><li><code>ecdp-resource</code> 提供应急队伍、物资和装备数据；</li><li><code>ecdp-dispatch</code> 负责调度指挥和任务派发；</li><li><code>ecdp-dss</code> 和 <code>ecdp-fusion</code> 提供态势分析、辅助决策和数据支撑；</li><li><code>ecdp-third-party</code> 补充外部数据和外部系统能力。</li></ul><h2 id="43-多端业务访问">4.3 多端业务访问</h2><p>系统面向不同终端提供差异化接口：</p><div class="doc-table-wrap"><table><thead><tr><th>端类型</th><th>接口前缀</th><th>说明</th></tr></thead><tbody><tr><td>后台管理端</td><td><code>/backend</code></td><td>面向管理员、运维人员和业务管理人员</td></tr><tr><td>移动端</td><td><code>/mobile</code></td><td>面向移动 App、小程序、移动巡查等场景</td></tr><tr><td>指挥大屏端</td><td><code>/screen</code></td><td>面向指挥中心大屏展示和态势展示</td></tr><tr><td>内部服务端</td><td><code>/inner</code></td><td>面向微服务间 Feign 调用</td></tr></tbody></table></div><p>UPMS 服务作为统一权限管理系统，其对外接口保留自身模块路径风格，不强制使用 <code>/backend</code> 前缀。</p><hr><h1 id="第五章-应用架构与模块设计">第五章 应用架构与模块设计</h1><h2 id="51-应用分层">5.1 应用分层</h2><p>系统应用层按职责划分为基础设施服务、平台服务、业务服务、基础支撑服务、API 契约模块和公共模块。</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">基础设施服务：ecdp-gateway、ecdp-auth
    平台服务：    ecdp-upms-api、ecdp-upms-biz
    业务服务：    ecdp-duty、ecdp-plan、ecdp-event、ecdp-dispatch、ecdp-resource、ecdp-dss、ecdp-fusion、ecdp-flood-inspection
    基础支撑服务：ecdp-third-party、ecdp-workflow
    API 契约模块：ecdp-apis/*-api
    公共模块：    ecdp-common/*
    </code></pre></div><h2 id="52-模块清单">5.2 模块清单</h2><h3 id="521-基础设施服务">5.2.1 基础设施服务</h3><div class="doc-table-wrap"><table><thead><tr><th>模块</th><th>职责</th><th>默认端口</th><th>说明</th></tr></thead><tbody><tr><td><code>ecdp-gateway</code></td><td>统一网关、路由转发、JWT 校验、限流、接口文档聚合</td><td>28088</td><td>系统外部访问入口</td></tr><tr><td><code>ecdp-auth</code></td><td>OAuth2 认证授权、Token 颁发、Token 内省、Token 撤销</td><td>25010</td><td>认证授权中心</td></tr></tbody></table></div><h3 id="522-平台服务">5.2.2 平台服务</h3><div class="doc-table-wrap"><table><thead><tr><th>模块</th><th>职责</th><th>默认端口</th><th>说明</th></tr></thead><tbody><tr><td><code>ecdp-upms-api</code></td><td>UPMS 接口契约、实体、DTO、Feign 接口</td><td>—</td><td>被其他服务依赖</td></tr><tr><td><code>ecdp-upms-biz</code></td><td>用户、组织、角色、菜单、权限、操作日志</td><td>25020</td><td>平台级基础服务</td></tr></tbody></table></div><h3 id="523-业务服务">5.2.3 业务服务</h3><div class="doc-table-wrap"><table><thead><tr><th>模块</th><th>职责</th><th>默认端口</th><th>包路径</th></tr></thead><tbody><tr><td><code>ecdp-duty</code></td><td>应急值守管理</td><td>25030</td><td><code>com.infoview.business.duty</code></td></tr><tr><td><code>ecdp-plan</code></td><td>应急预案管理</td><td>25040</td><td><code>com.infoview.business.plan</code></td></tr><tr><td><code>ecdp-event</code></td><td>应急事件管理</td><td>25050</td><td><code>com.infoview.business.event</code></td></tr><tr><td><code>ecdp-dispatch</code></td><td>智能调度指挥</td><td>25060</td><td><code>com.infoview.business.dispatch</code></td></tr><tr><td><code>ecdp-resource</code></td><td>应急物资与资源管理</td><td>25070</td><td><code>com.infoview.business.resource</code></td></tr><tr><td><code>ecdp-dss</code></td><td>辅助决策支持</td><td>25080</td><td><code>com.infoview.business.dss</code></td></tr><tr><td><code>ecdp-fusion</code></td><td>数据融合分析</td><td>25090</td><td><code>com.infoview.business.fusion</code></td></tr><tr><td><code>ecdp-flood-inspection</code></td><td>防汛巡查管理</td><td>25100</td><td><code>com.infoview.business.flood</code></td></tr></tbody></table></div><h3 id="524-基础支撑服务">5.2.4 基础支撑服务</h3><div class="doc-table-wrap"><table><thead><tr><th>模块</th><th>职责</th><th>默认端口</th><th>说明</th></tr></thead><tbody><tr><td><code>ecdp-third-party</code></td><td>天气、高速、里程桩、融合通信等第三方能力对接</td><td>25510</td><td>外部系统适配层</td></tr><tr><td><code>ecdp-workflow</code></td><td>工作流引擎、流程定义、流程实例和审批流转</td><td>25520</td><td>流程支撑服务</td></tr></tbody></table></div><h2 id="53-api-契约模块">5.3 API 契约模块</h2><p><code>ecdp-apis</code> 目录用于承载各微服务的公共接口契约。API 模块用于解决服务间调用时的契约复用问题，避免业务服务之间直接依赖对方的实现模块。</p><p>API 模块通常包含：</p><ul><li>Feign 接口；</li><li>Request / Response / DTO；</li><li>Entity；</li><li>Enum；</li><li>Constant；</li><li>服务间共享的数据结构。</li></ul><p>API 模块的设计目标是保持轻量、稳定、可复用，不承载具体业务逻辑。</p><h2 id="54-公共模块设计">5.4 公共模块设计</h2><p><code>ecdp-common</code> 目录沉淀平台通用能力，支撑各业务服务快速接入统一能力。</p><div class="doc-table-wrap"><table><thead><tr><th>模块</th><th>职责</th><th>典型能力</th></tr></thead><tbody><tr><td><code>ecdp-common-bom</code></td><td>依赖版本统一管理</td><td>Maven dependencyManagement</td></tr><tr><td><code>ecdp-common-core</code></td><td>核心基础能力</td><td><code>ApiResult</code>、<code>ServiceException</code>、<code>IdGenerator</code>、上下文工具</td></tr><tr><td><code>ecdp-common-data</code></td><td>数据访问公共能力</td><td>分页、MyBatis-Plus、Redis、数据转换</td></tr><tr><td><code>ecdp-common-security</code></td><td>安全认证公共能力</td><td><code>@HasPermission</code>、<code>@Inner</code>、资源服务器配置</td></tr><tr><td><code>ecdp-common-feign</code></td><td>服务调用公共能力</td><td>Feign 拦截器、异常处理、内部调用标识</td></tr><tr><td><code>ecdp-common-log</code></td><td>日志公共能力</td><td><code>@SysLog</code>、操作日志事件、日志监听器</td></tr><tr><td><code>ecdp-common-encrypt</code></td><td>加密与签名能力</td><td>数据加密、数据签名、验签</td></tr><tr><td><code>ecdp-common-sensitive</code></td><td>数据脱敏能力</td><td><code>@Sensitive</code>、序列化脱敏</td></tr><tr><td><code>ecdp-common-swagger</code></td><td>接口文档能力</td><td>SpringDoc、Knife4j、文档聚合配置</td></tr><tr><td><code>ecdp-common-s3</code></td><td>对象存储能力</td><td>文件上传、下载、预览</td></tr><tr><td><code>ecdp-common-xxl-job</code></td><td>定时任务能力</td><td>XXL-JOB 执行器接入</td></tr><tr><td><code>ecdp-common-rabbitmq</code></td><td>消息队列能力</td><td>RabbitMQ 配置、消息日志、队列约定</td></tr><tr><td><code>ecdp-common-wps</code></td><td>文档处理能力</td><td>WPS 预览、编辑和文档处理集成</td></tr></tbody></table></div><h2 id="55-模块依赖设计">5.5 模块依赖设计</h2><p>模块依赖关系如下：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">业务服务 / 平台服务 / 基础支撑服务
              │
              ├── 依赖本服务 API 模块
              ├── 按需依赖其他服务 API 模块
              └── 依赖 ecdp-common 公共能力
    
    API 模块
              └── 仅承载契约对象和 Feign 接口
    
    公共模块
              └── 不依赖具体业务服务
    </code></pre></div><p>设计说明：</p><ul><li>业务服务通过 API 模块进行契约依赖；</li><li>跨服务调用通过 OpenFeign 完成；</li><li>公共模块向上提供能力，不承载业务域规则；</li><li>业务服务之间不直接依赖对方 Biz 模块；</li><li>对于复杂业务域，可在服务内部进一步按 controller、service、mapper、entity、request、response、config 等分层组织。</li></ul><h2 id="56-重点模块说明ecdp-flood-inspection">5.6 重点模块说明：ecdp-flood-inspection</h2><p><code>ecdp-flood-inspection</code> 是当前系统中复杂度较高的业务模块，除了承载防汛巡查业务外，还包含独立的业务域 RBAC 能力，并通过 Feign 与 UPMS 进行用户与组织等基础数据协同。</p><p>该模块体现了业务域权限自治的设计思路：平台 UPMS 提供统一身份与基础权限能力，复杂业务域可在自身边界内扩展更贴合业务场景的权限模型。</p><hr><h1 id="第六章-数据架构设计">第六章 数据架构设计</h1><h2 id="61-数据架构概览">6.1 数据架构概览</h2><p>系统以 OpenGauss 作为主数据库，Redis 作为缓存与会话存储，RabbitMQ 用于异步消息，S3 用于对象文件存储。各业务服务原则上拥有自身业务数据边界，通过服务接口进行跨域数据访问。</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">业务服务
      │
      ├── OpenGauss：结构化业务数据、权限数据、日志数据
      ├── Redis：Token、Session、缓存、分布式锁、临时状态
      ├── RabbitMQ：异步任务、业务事件、削峰解耦
      └── S3：附件、文档、图片、对象文件
    </code></pre></div><h2 id="62-数据库选型">6.2 数据库选型</h2><p>系统主数据库选用 <strong>OpenGauss 6.0+</strong>，JDBC 驱动为 <code>opengauss-jdbc 5.0.0</code>。数据访问层使用 MyBatis-Plus，并结合 XML Mapper 支持复杂 SQL 查询。</p><p>选型考虑：</p><ul><li>兼容 PostgreSQL 协议生态；</li><li>支持企业级数据库能力；</li><li>适合政企场景下的结构化数据管理；</li><li>能够配合 MyBatis-Plus 完成常规 CRUD、分页和条件查询。</li></ul><h2 id="63-数据边界设计">6.3 数据边界设计</h2><p>系统按服务划分数据边界：</p><ul><li>平台基础数据由 UPMS 管理；</li><li>业务域数据由对应业务服务管理；</li><li>跨服务数据访问通过 Feign 接口完成；</li><li>业务服务不直接访问其他服务的数据表；</li><li>共享数据结构通过 API 模块定义。</li></ul><p>该设计有利于服务自治、降低数据库耦合，并为后续独立扩展和分库演进保留空间。</p><h2 id="64-数据完整性设计">6.4 数据完整性设计</h2><p>系统采用数据签名机制保障关键业务数据完整性。核心思路是写入时生成签名，读取或关键业务操作时进行验签，防止数据被未授权篡改。</p><p>当前设计采用双签名架构：</p><div class="doc-table-wrap"><table><thead><tr><th>字段</th><th>说明</th></tr></thead><tbody><tr><td><code>local_signature</code></td><td>本地签名，用于系统内部高频验签</td></tr><tr><td><code>local_signature_version</code></td><td>本地签名版本号</td></tr><tr><td><code>signature</code></td><td>一体化签名，用于对接外部签名平台或权威验签</td></tr><tr><td><code>signature_version</code></td><td>一体化签名版本号</td></tr></tbody></table></div><p>详细字段约束、签名 Key 构建方式和实体映射要求见 <a href="/library/14">数据签名设计规范</a>。</p><h2 id="65-缓存架构">6.5 缓存架构</h2><p>系统采用 Redis 和 Caffeine 组合的缓存设计：</p><div class="doc-table-wrap"><table><thead><tr><th>缓存组件</th><th>作用</th></tr></thead><tbody><tr><td>Redis</td><td>分布式缓存、Token/Session 存储、分布式锁、业务缓存</td></tr><tr><td>Caffeine</td><td>JVM 本地缓存，用于热点数据和低延迟读取场景</td></tr></tbody></table></div><p>推荐缓存模式为 Cache-Aside：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">读流程：查询缓存 → 命中返回 → 未命中查询数据库 → 写入缓存 → 返回
    写流程：更新数据库 → 删除缓存 → 下次读取重建缓存
    </code></pre></div><p>缓存 Key 命名、TTL、更新策略等详细约束由后端仓库的编码规范文档承载（本前端设计仓库未收录，落地时以后端仓库最新版本为准）。</p><h2 id="66-数据安全设计">6.6 数据安全设计</h2><p>数据安全从存储、传输和展示三个环节进行设计：</p><div class="doc-table-wrap"><table><thead><tr><th>环节</th><th>设计说明</th></tr></thead><tbody><tr><td>存储</td><td>敏感字段使用 <code>ICryptoService.encrypt()</code> 加密后存储</td></tr><tr><td>传输</td><td>通过 HTTPS、Token 认证、内部接口标识控制访问来源</td></tr><tr><td>展示</td><td>响应字段可通过 <code>@Sensitive</code> 注解进行脱敏</td></tr><tr><td>完整性</td><td>关键数据通过签名与验签机制保障完整性</td></tr><tr><td>权限</td><td>通过用户身份、角色权限、数据归属控制访问范围</td></tr></tbody></table></div><hr><h1 id="第七章-技术架构设计">第七章 技术架构设计</h1><h2 id="71-技术栈总览">7.1 技术栈总览</h2><div class="doc-table-wrap"><table><thead><tr><th>层级</th><th>组件</th><th>版本/说明</th></tr></thead><tbody><tr><td>运行时</td><td>JDK</td><td>17</td></tr><tr><td>应用框架</td><td>Spring Boot</td><td>3.5.13</td></tr><tr><td>微服务框架</td><td>Spring Cloud</td><td>2025.0.1</td></tr><tr><td>微服务生态</td><td>Spring Cloud Alibaba</td><td>2025.0.0.0</td></tr><tr><td>注册与配置</td><td>Nacos</td><td>2.x</td></tr><tr><td>网关</td><td>Spring Cloud Gateway</td><td>4.3.2</td></tr><tr><td>认证授权</td><td>Spring Security OAuth2</td><td>Authorization Server / Resource Server</td></tr><tr><td>ORM</td><td>MyBatis-Plus</td><td>3.5.16</td></tr><tr><td>连表查询</td><td>mybatis-plus-join</td><td>1.5.5</td></tr><tr><td>数据库</td><td>OpenGauss</td><td>6.0+</td></tr><tr><td>缓存</td><td>Redis</td><td>7.x</td></tr><tr><td>本地缓存</td><td>Caffeine</td><td>3.2.x</td></tr><tr><td>分布式锁</td><td>Redisson + Lock4j</td><td>3.39.0 / 2.2.7</td></tr><tr><td>消息队列</td><td>RabbitMQ</td><td>3.x</td></tr><tr><td>定时任务</td><td>XXL-JOB</td><td>3.4.0</td></tr><tr><td>熔断降级</td><td>Sentinel</td><td>1.8.x</td></tr><tr><td>对象存储</td><td>S3</td><td>兼容 S3 协议</td></tr><tr><td>API 文档</td><td>SpringDoc + Knife4j</td><td>2.8.14 / 4.5.0</td></tr><tr><td>工具库</td><td>Hutool</td><td>5.8.44</td></tr><tr><td>JWT</td><td>JJWT</td><td>0.12.5</td></tr><tr><td>配置加密</td><td>Jasypt</td><td>3.0.5</td></tr><tr><td>构建工具</td><td>Maven</td><td>3.9.x</td></tr><tr><td>容器化</td><td>Docker / Kubernetes</td><td>Docker Compose 当前可用，Kubernetes 后续演进</td></tr></tbody></table></div><h2 id="72-技术选型说明">7.2 技术选型说明</h2><h3 id="721-spring-boot-+-spring-cloud">7.2.1 Spring Boot + Spring Cloud</h3><p>系统以 Spring Boot 作为服务应用基础框架，以 Spring Cloud 作为微服务治理基础，配合 Spring Cloud Alibaba 接入 Nacos、Sentinel 等组件。</p><p>该组合适合多模块微服务系统，能够提供服务注册发现、配置外部化、网关路由、服务调用、熔断降级等基础能力。</p><h3 id="722-nacos">7.2.2 Nacos</h3><p>Nacos 同时承担注册中心和配置中心职责：</p><ul><li>注册中心：服务启动后注册实例，网关和 Feign 通过服务名发现实例；</li><li>配置中心：统一管理公共配置、服务配置和环境配置；</li><li>配置热更新：支持按需刷新动态配置。</li></ul><h3 id="723-spring-cloud-gateway">7.2.3 Spring Cloud Gateway</h3><p>Gateway 作为统一入口，负责：</p><ul><li>路由转发；</li><li>JWT 校验；</li><li>跨域处理；</li><li>限流控制；</li><li>接口文档聚合；</li><li>后续扩展审计、灰度、统一响应处理等入口治理能力。</li></ul><h3 id="724-openfeign">7.2.4 OpenFeign</h3><p>OpenFeign 用于服务间同步 HTTP 调用。系统通过 API 模块定义 Feign 契约，业务服务依赖 API 模块完成远程调用。</p><p>该设计降低了服务实现之间的耦合，同时便于接口契约复用和版本管理。</p><h3 id="725-redisrabbitmqxxl-job">7.2.5 Redis、RabbitMQ、XXL-JOB</h3><div class="doc-table-wrap"><table><thead><tr><th>组件</th><th>架构作用</th></tr></thead><tbody><tr><td>Redis</td><td>缓存、Token/Session、分布式锁和临时状态存储</td></tr><tr><td>RabbitMQ</td><td>异步解耦、削峰填谷、事件驱动扩展</td></tr><tr><td>XXL-JOB</td><td>分布式定时任务调度，支持任务统一管理和执行记录</td></tr></tbody></table></div><h2 id="73-依赖版本管理">7.3 依赖版本管理</h2><p>系统通过 <code>ecdp-common-bom</code> 统一管理公共依赖版本，业务模块通过 <code>&lt;dependencyManagement&gt;</code> 引入，避免多个模块之间出现依赖版本漂移。</p><div class="code-block"><div class="code-head"><span class="code-lang">xml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-xml">&lt;dependencyManagement&gt;
        &lt;dependencies&gt;
            &lt;dependency&gt;
                &lt;groupId&gt;com.infoview&lt;/groupId&gt;
                &lt;artifactId&gt;ecdp-common-bom&lt;/artifactId&gt;
                &lt;version&gt;\${project.version}&lt;/version&gt;
                &lt;type&gt;pom&lt;/type&gt;
                &lt;scope&gt;import&lt;/scope&gt;
            &lt;/dependency&gt;
        &lt;/dependencies&gt;
    &lt;/dependencyManagement&gt;
    </code></pre></div><h2 id="74-配置管理设计">7.4 配置管理设计</h2><p>系统采用 Nacos 配置中心管理配置，配置分为共享配置、公共能力配置、服务专属配置和本地引导配置。</p><div class="code-block"><div class="code-head"><span class="code-lang">yaml</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-yaml">spring:
      config:
        import:
          - optional:nacos:application.yml
          - optional:nacos:common-ds.yml
          - optional:nacos:common-rabbitmq.yml
          - optional:nacos:\${spring.application.name}.yml
    </code></pre></div><p>配置分层说明：</p><div class="doc-table-wrap"><table><thead><tr><th>配置层级</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td>共享配置</td><td><code>application.yml</code></td><td>所有服务共用的基础配置</td></tr><tr><td>公共能力配置</td><td><code>common-ds.yml</code>、<code>common-rabbitmq.yml</code>、<code>common-s3.yml</code></td><td>数据源、消息队列、对象存储等公共配置</td></tr><tr><td>服务配置</td><td><code>ecdp-*.yml</code></td><td>单个服务独有配置</td></tr><tr><td>本地引导配置</td><td><code>bootstrap.yml</code> 或本地环境变量</td><td>Nacos 地址、命名空间、账号密码等启动配置</td></tr></tbody></table></div><hr><h1 id="第八章-安全架构设计">第八章 安全架构设计</h1><h2 id="81-安全架构概览">8.1 安全架构概览</h2><p>系统安全架构由认证、授权、内部调用校验、数据权限、数据加密、数据脱敏和数据完整性校验组成。</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">客户端
      │ Token
      ▼
    ecdp-gateway
      │ JWT 校验、路由控制
      ▼
    业务服务
      │ Token 内省、@HasPermission、数据权限校验
      ▼
    数据访问层
      │ 加密存储、签名验签、脱敏返回
      ▼
    OpenGauss / Redis
    </code></pre></div><h2 id="82-认证设计">8.2 认证设计</h2><p><code>ecdp-auth</code> 作为 OAuth2 认证授权中心，负责用户登录、Token 颁发、Token 刷新、Token 内省和 Token 撤销。</p><p>Token 管理设计：</p><div class="doc-table-wrap"><table><thead><tr><th>能力</th><th>说明</th></tr></thead><tbody><tr><td>Token 颁发</td><td>支持密码、手机验证码、Refresh Token、Client Credentials、Authorization Code 等模式</td></tr><tr><td>Token 存储</td><td>Token 信息存储在 Redis 中，支持撤销和互斥登录</td></tr><tr><td>Token 校验</td><td>网关校验 JWT，业务服务通过资源服务器能力进行 Opaque Token 内省</td></tr><tr><td>Token 有效期</td><td>Access Token 默认 2 小时，Refresh Token 默认 30 天</td></tr></tbody></table></div><h2 id="83-授权设计">8.3 授权设计</h2><p>系统通过 <code>@HasPermission</code> 实现方法级权限控制。权限字符串采用四段式结构：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">{产品}:{模块}:{资源}:{操作}
    </code></pre></div><p>示例：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">umps:system:user:list
    flood:org:organization:insert
    </code></pre></div><p>权限控制链路：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">请求进入业务服务
      │
      ▼
    解析当前登录用户和权限集合
      │
      ▼
    读取 Controller 方法上的 @HasPermission
      │
      ▼
    判断用户是否具备对应权限
      │
      ▼
    允许访问或返回无权限响应
    </code></pre></div><h2 id="84-内部接口安全设计">8.4 内部接口安全设计</h2><p>系统通过 <code>@Inner</code> 注解区分内部接口和公开接口。内部接口主要用于 Feign 调用和网关内部路由，调用方通过 Feign 拦截器自动注入内部调用标识。</p><p>该设计用于降低内部接口被外部绕过调用的风险，同时配合网关路由、Token 校验和服务间调用约定共同形成内部接口访问边界。</p><h2 id="85-数据权限设计">8.5 数据权限设计</h2><p>业务数据访问需要结合用户身份、组织、企业、角色和业务归属进行控制。典型场景包括：</p><ul><li>用户只能访问所属组织或授权范围内的数据；</li><li>企业级数据需要校验 <code>entId</code> 等归属字段；</li><li>防汛巡查等复杂业务域可在自身服务内扩展业务域权限模型；</li><li>内部服务调用不能绕过数据权限校验。</li></ul><h2 id="86-数据加密脱敏与签名">8.6 数据加密、脱敏与签名</h2><div class="doc-table-wrap"><table><thead><tr><th>安全能力</th><th>说明</th></tr></thead><tbody><tr><td>数据加密</td><td>敏感字段入库前加密存储</td></tr><tr><td>数据脱敏</td><td>响应给前端或第三方前进行脱敏展示</td></tr><tr><td>数据签名</td><td>关键数据写入时生成签名，读取或关键操作时验签</td></tr><tr><td>配置加密</td><td>Nacos 中的敏感配置通过 Jasypt 加密存储</td></tr></tbody></table></div><p>详细设计见 <a href="/library/12">数据库设计规范</a> 和 <a href="/library/14">数据签名设计规范</a>。</p><hr><h1 id="第九章-集成与服务通信设计">第九章 集成与服务通信设计</h1><h2 id="91-服务通信方式">9.1 服务通信方式</h2><p>系统内部服务通信以 OpenFeign 同步调用为主，RabbitMQ 异步消息为辅。</p><div class="doc-table-wrap"><table><thead><tr><th>通信方式</th><th>使用场景</th><th>说明</th></tr></thead><tbody><tr><td>REST API</td><td>外部客户端访问业务接口</td><td>经由 Gateway 统一入口</td></tr><tr><td>OpenFeign</td><td>微服务间同步调用</td><td>通过 API 模块定义契约</td></tr><tr><td>RabbitMQ</td><td>异步任务、业务事件</td><td>用于削峰、解耦和最终一致性</td></tr><tr><td>XXL-JOB</td><td>定时任务触发</td><td>统一调度周期性任务</td></tr><tr><td>S3 协议</td><td>文件上传、下载、预览</td><td>统一对象存储访问方式</td></tr></tbody></table></div><h2 id="92-feign-调用设计">9.2 Feign 调用设计</h2><p>Feign 接口放置在 <code>ecdp-*-api</code> 模块中，命名通常采用 <code>Remote{功能}Service</code> 形式。业务服务依赖 API 模块后即可注入远程接口完成调用。</p><p>Feign 调用链路：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">调用方业务服务
      │ 注入 RemoteXxxService
      ▼
    Feign Client
      │ 注入内部调用标识、传递 Token、负载均衡
      ▼
    被调用方业务服务 / 平台服务
      │ @Inner / 权限 / 参数校验
      ▼
    返回 ApiResult&lt;T&gt;
    </code></pre></div><h2 id="93-异步消息设计">9.3 异步消息设计</h2><p>RabbitMQ 用于异步业务处理、削峰填谷和系统解耦。当前主要用于防汛巡查等业务模块中的异步任务场景，例如任务生成、合规检查、桩号坐标填充、里程统计等。</p><p>异步消息设计关注点：</p><ul><li>交换机、队列、路由键命名保持业务语义清晰；</li><li>消息体使用稳定 DTO，避免直接暴露内部实体；</li><li>消费端处理需具备幂等能力；</li><li>异常消息应具备日志记录和后续补偿能力；</li><li>重要业务消息需要考虑重试、死信队列或人工处理机制。</li></ul><h2 id="94-第三方系统集成">9.4 第三方系统集成</h2><p><code>ecdp-third-party</code> 作为第三方系统适配层，用于隔离外部系统协议、鉴权方式、字段差异和异常处理。</p><p>该服务主要承担：</p><ul><li>高速天气数据对接；</li><li>里程桩相关数据对接；</li><li>融合通信能力对接；</li><li>外部接口协议适配；</li><li>第三方调用异常转换；</li><li>第三方返回数据标准化。</li></ul><p>通过独立第三方服务进行集成，可避免外部系统变化直接影响核心业务服务。</p><h2 id="95-api-文档设计">9.5 API 文档设计</h2><p>系统使用 SpringDoc + Knife4j 生成 OpenAPI 文档，各服务通过 <code>@EnableCustomDoc</code> 启用文档能力，网关基于服务发现聚合各微服务接口文档。</p><p>该设计便于：</p><ul><li>前后端联调；</li><li>测试人员查看接口；</li><li>第三方系统对接；</li><li>接口变更评审；</li><li>生成接口说明资料。</li></ul><hr><h1 id="第十章-部署架构与运行环境">第十章 部署架构与运行环境</h1><h2 id="101-部署架构概览">10.1 部署架构概览</h2><p>ECDP-Cloud 支持以容器化方式部署。当前可通过 Docker Compose 编排微服务和运行容器，后续可演进至 Kubernetes 进行弹性伸缩、滚动发布和资源治理。</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">负载入口 / 反向代理
            │
            ▼
    ecdp-gateway 容器
            │
            ├── ecdp-auth 容器
            ├── ecdp-upms-biz 容器
            ├── ecdp-duty / ecdp-plan / ecdp-event 等业务容器
            ├── ecdp-third-party 容器
            └── ecdp-workflow 容器
            │
            ▼
    Nacos / OpenGauss / Redis / RabbitMQ / XXL-JOB / S3
    </code></pre></div><h2 id="102-环境划分">10.2 环境划分</h2><p>系统通过 Maven Profile 和 Nacos Namespace 管理不同环境配置。</p><div class="doc-table-wrap"><table><thead><tr><th>环境</th><th>Maven Profile</th><th>Nacos Namespace</th><th>说明</th></tr></thead><tbody><tr><td>本地开发</td><td><code>dev</code></td><td><code>fetch</code></td><td>本地开发与调试</td></tr><tr><td>内网开发</td><td><code>nas_local</code></td><td><code>ecdp</code></td><td>内网联调环境</td></tr><tr><td>测试环境</td><td><code>71.95_test</code></td><td><code>ecdp</code></td><td>测试验证环境</td></tr><tr><td>生产环境</td><td><code>11.14_prod</code></td><td><code>ecdp</code></td><td>正式运行环境</td></tr></tbody></table></div><h2 id="103-服务端口规划">10.3 服务端口规划</h2><div class="doc-table-wrap"><table><thead><tr><th>服务</th><th>默认端口</th></tr></thead><tbody><tr><td><code>ecdp-gateway</code></td><td>28088</td></tr><tr><td><code>ecdp-auth</code></td><td>25010</td></tr><tr><td><code>ecdp-upms-biz</code></td><td>25020</td></tr><tr><td><code>ecdp-duty</code></td><td>25030</td></tr><tr><td><code>ecdp-plan</code></td><td>25040</td></tr><tr><td><code>ecdp-event</code></td><td>25050</td></tr><tr><td><code>ecdp-dispatch</code></td><td>25060</td></tr><tr><td><code>ecdp-resource</code></td><td>25070</td></tr><tr><td><code>ecdp-dss</code></td><td>25080</td></tr><tr><td><code>ecdp-fusion</code></td><td>25090</td></tr><tr><td><code>ecdp-flood-inspection</code></td><td>25100</td></tr><tr><td><code>ecdp-third-party</code></td><td>25510</td></tr><tr><td><code>ecdp-workflow</code></td><td>25520</td></tr></tbody></table></div><h2 id="104-容器化设计">10.4 容器化设计</h2><p>微服务容器镜像以 JDK 17 运行环境为基础，应用 JAR、配置文件、依赖库和日志目录通过标准目录组织。</p><p>典型容器目录：</p><div class="code-block"><div class="code-head"><span class="code-lang">text</span><button type="button" class="copy-code"><span>复制代码</span></button></div><pre><code class="language-text">/{service-name}/
    ├── {service-name}.jar
    ├── config/
    ├── project-libs/
    └── logs/
    </code></pre></div><p>容器运行设计要点：</p><ul><li>使用 <code>JAVA_OPTS</code> 统一设置 JVM 参数；</li><li>使用 <code>-Dloader.path=project-libs</code> 支持依赖库外置；</li><li>日志目录挂载到宿主机，便于收集和排障；</li><li>配置目录挂载到宿主机，便于环境差异配置管理；</li><li>通过 Docker Compose 或 Kubernetes 编排服务启动和依赖关系。</li></ul><p>容器化微服务部署说明见后端仓库的「容器化部署微服务」文档（本前端设计仓库未收录）。</p><h2 id="105-kubernetes-演进方向">10.5 Kubernetes 演进方向</h2><p>系统后续可按以下方式演进至 Kubernetes：</p><div class="doc-table-wrap"><table><thead><tr><th>能力</th><th>演进说明</th></tr></thead><tbody><tr><td>Deployment</td><td>每个微服务独立 Deployment，支持副本数控制和滚动升级</td></tr><tr><td>Service</td><td>每个微服务通过 ClusterIP 暴露集群内部访问地址</td></tr><tr><td>Ingress</td><td>网关或外部入口统一暴露服务访问域名</td></tr><tr><td>ConfigMap / Secret</td><td>配置和敏感信息纳入 K8s 原生配置管理</td></tr><tr><td>Probe</td><td>通过 livenessProbe、readinessProbe 检查服务健康状态</td></tr><tr><td>HPA</td><td>根据 CPU、内存或自定义指标自动扩缩容</td></tr><tr><td>日志采集</td><td>通过标准输出或挂载目录接入日志采集系统</td></tr></tbody></table></div><hr><h1 id="第十一章-运维监控与韧性设计">第十一章 运维、监控与韧性设计</h1><h2 id="111-运维设计目标">11.1 运维设计目标</h2><p>运维设计目标是保证系统可部署、可观测、可恢复和可持续运行。</p><div class="doc-table-wrap"><table><thead><tr><th>目标</th><th>说明</th></tr></thead><tbody><tr><td>可部署</td><td>服务可通过标准脚本或容器编排快速部署</td></tr><tr><td>可观测</td><td>日志、健康检查、操作日志和后续监控指标可辅助定位问题</td></tr><tr><td>可恢复</td><td>服务异常退出后可自动重启，关键数据具备恢复和补偿手段</td></tr><tr><td>可扩展</td><td>支持按服务维度扩容和独立发布</td></tr><tr><td>可审计</td><td>操作日志和系统日志支撑问题追踪与安全审计</td></tr></tbody></table></div><h2 id="112-日志设计">11.2 日志设计</h2><p>系统统一使用 Logback 作为日志实现，日志分为应用日志、错误日志、操作日志和中间件日志。</p><div class="doc-table-wrap"><table><thead><tr><th>日志类型</th><th>说明</th></tr></thead><tbody><tr><td>应用日志</td><td>记录服务运行过程中的业务和系统日志</td></tr><tr><td>错误日志</td><td>记录异常堆栈和错误信息</td></tr><tr><td>操作日志</td><td>通过 <code>@SysLog</code> 记录用户关键操作</td></tr><tr><td>中间件日志</td><td>记录数据库、缓存、消息队列、服务注册等相关日志</td></tr></tbody></table></div><p>日志设计要求详见 <a href="/library/9">日志规范</a>。</p><h2 id="113-健康检查设计">11.3 健康检查设计</h2><p>服务可通过 Spring Boot Actuator 暴露健康检查端点，配合容器编排平台进行存活检测和就绪检测。</p><p>典型检查类型：</p><div class="doc-table-wrap"><table><thead><tr><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>Liveness</td><td>判断进程是否存活，失败时可重启容器</td></tr><tr><td>Readiness</td><td>判断服务是否可接收流量，失败时从流量入口摘除</td></tr><tr><td>Dependency</td><td>检查数据库、Redis、Nacos 等依赖组件状态</td></tr></tbody></table></div><h2 id="114-异常处理设计">11.4 异常处理设计</h2><p>系统通过全局异常处理器统一处理业务异常、参数校验异常、认证异常、权限异常和系统异常，并统一转换为 <code>ApiResult&lt;T&gt;</code> 响应。</p><p>异常处理设计目标：</p><ul><li>对前端返回稳定、统一、可理解的错误信息；</li><li>对日志保留完整异常上下文，便于排查；</li><li>对业务异常和系统异常进行区分；</li><li>避免敏感信息通过异常响应暴露给前端。</li></ul><p>详细设计见 <a href="/library/8">异常处理规范</a>。</p><h2 id="115-韧性设计">11.5 韧性设计</h2><p>系统韧性设计包括超时控制、重试、熔断降级、幂等、异步补偿和服务自动恢复。</p><div class="doc-table-wrap"><table><thead><tr><th>能力</th><th>说明</th></tr></thead><tbody><tr><td>超时控制</td><td>Feign、数据库、Redis、第三方接口均需要设置合理超时时间</td></tr><tr><td>重试机制</td><td>对短暂网络异常可结合 LoadBalancer 和 Feign 重试策略进行实例级重试</td></tr><tr><td>熔断降级</td><td>关键远程调用可接入 Sentinel 和 fallbackFactory</td></tr><tr><td>幂等设计</td><td>关键写操作结合业务唯一键、Redis SETNX 或数据库唯一约束实现幂等</td></tr><tr><td>异步补偿</td><td>异步消息失败时通过重试、死信或人工处理完成补偿</td></tr><tr><td>自动恢复</td><td>容器通过 <code>restart: always</code> 或 K8s 重启策略实现进程级恢复</td></tr></tbody></table></div><h2 id="116-事务一致性设计">11.6 事务一致性设计</h2><p>单服务内多表写操作使用本地事务 <code>@Transactional</code> 保证一致性。跨服务业务流程不采用强分布式事务，优先通过以下方式保障最终一致性：</p><ul><li>接口幂等；</li><li>业务状态机；</li><li>消息队列异步驱动；</li><li>重试与补偿机制；</li><li>对账与人工干预能力。</li></ul><hr><h1 id="第十二章-架构演进说明">第十二章 架构演进说明</h1><h2 id="121-当前架构阶段">12.1 当前架构阶段</h2><p>当前 ECDP-Cloud 已形成以 Spring Cloud Alibaba 为基础的微服务架构，具备以下能力：</p><ul><li>微服务模块化拆分；</li><li>统一网关；</li><li>统一认证授权；</li><li>UPMS 平台基础服务；</li><li>公共模块能力沉淀；</li><li>Nacos 注册与配置；</li><li>OpenFeign 服务间调用；</li><li>Redis 缓存与 Token 存储；</li><li>RabbitMQ 异步消息能力；</li><li>Docker Compose 容器化部署能力。</li></ul><h2 id="122-后续演进方向">12.2 后续演进方向</h2><p>后续架构可从以下方面持续演进：</p><div class="doc-table-wrap"><table><thead><tr><th>方向</th><th>说明</th></tr></thead><tbody><tr><td>Kubernetes 化</td><td>使用 K8s 管理微服务部署、滚动升级、健康检查和弹性伸缩</td></tr><tr><td>服务治理增强</td><td>完善 Sentinel 熔断降级、限流、隔离和服务降级策略</td></tr><tr><td>可观测性增强</td><td>引入指标监控、链路追踪、日志聚合和统一告警</td></tr><tr><td>安全体系增强</td><td>强化接口审计、数据权限、密钥管理和安全扫描</td></tr><tr><td>数据治理增强</td><td>完善数据血缘、数据质量、数据共享和数据归档能力</td></tr><tr><td>架构文档体系化</td><td>将说明书、设计规范、部署手册、运维手册和接口文档形成完整文档体系</td></tr></tbody></table></div><h2 id="123-与规范文档的关系">12.3 与规范文档的关系</h2><p>本文档只描述架构设计思路和系统组成，不替代专项规范文档。开发和实施过程中：</p><ul><li>编码命名、注释、分层、提交等要求以后端仓库的 AGENTS.md 为准（本前端设计仓库的 AGENTS.md 是前端规范，勿混用）；</li><li>REST API、参数校验、Feign、Swagger 等要求以 <a href="/library/7">接口设计规范</a> 为准；</li><li>表设计、字段类型、实体映射、数据签名字段等要求以 <a href="/library/12">数据库设计规范</a> 为准；</li><li>异常处理、错误码、事务和韧性要求以 <a href="/library/8">异常处理规范</a> 为准；</li><li>日志输出、操作日志和敏感信息处理以 <a href="/library/9">日志规范</a> 为准；</li><li>服务间调用、第三方系统对接和降级策略以 <a href="/library/11">服务间通信规范</a> 为准。</li></ul><hr><h1 id="附录-相关文档">附录 相关文档</h1><div class="doc-table-wrap"><table><thead><tr><th>文档</th><th>说明</th></tr></thead><tbody><tr><td>[AGENTS.md]（后端仓库）</td><td>项目编码规范、模块约定和 AI Agent 工作指引（本仓库未收录，前端规范见根目录 AGENTS.md）</td></tr><tr><td><a href="/library/7">接口设计规范</a></td><td>REST API、参数校验、OpenFeign、Swagger、权限和日志注解规范</td></tr><tr><td><a href="/library/12">数据库设计规范</a></td><td>表命名、字段类型、必须字段、实体映射和数据安全要求</td></tr><tr><td><a href="/library/14">数据签名设计规范</a></td><td>双签名体系、签名字段、签名 Key 构建和验签策略</td></tr><tr><td><a href="/library/8">异常处理规范</a></td><td>全局异常、错误码、事务、幂等和韧性处理说明</td></tr><tr><td><a href="/library/9">日志规范</a></td><td>应用日志、错误日志、操作日志和敏感信息处理说明</td></tr><tr><td><a href="/library/11">服务间通信规范</a></td><td>Feign 调用、服务降级、第三方系统对接和通信安全说明</td></tr><tr><td>[容器化部署微服务]（后端仓库）</td><td>微服务 Docker Compose 部署配置和服务管理脚本说明（本仓库未收录）</td></tr><tr><td><a href="/library/10">消息队列规范</a></td><td>RabbitMQ 交换机与队列命名、消息体、消费者与幂等规范</td></tr><tr><td><a href="/library/13">数据度量规范</a></td><td>长度、时间、金额、经纬度等各类数据字段的单位与精度规范</td></tr></tbody></table></div>`,246)])]))}}),de={"fe-monorepo":It,"fe-router":At,"fe-pro-components":Nt,"fe-list-drawer":Ot,"fe-mock-sql":Lt,"fe-type-theme":wt,"be-api-design":Ut,"be-error-handling":Bt,"be-logging":Gt,"be-message-queue":Kt,"be-inter-service":zt,"be-database-design":Jt,"be-metrics":Qt,"be-signing":Zt,"arch-microservice":ee},oe={published:"已发布",draft:"草稿",offline:"已下架"},ne=h({__name:"DocArticle",props:{component:{}},emits:["ready"],setup(n,{expose:s,emit:t}){const k=n,m=t,R=B(),b=M();function p(){const i=b.value;if(!i)return[];const e=i.querySelectorAll("h1"),d=e.length?e:i.querySelectorAll("h2, h3");return Array.from(d).map((r,g)=>{var E;return r.id||(r.id=`doc-heading-${g+1}`),{id:r.id,text:((E=r.textContent)==null?void 0:E.trim())??"",level:Number(r.tagName.slice(1))}})}function _(){m("ready",p())}function u(i){var e;(e=document.getElementById(i))==null||e.scrollIntoView({behavior:"smooth",block:"start"})}function y(){if(!b.value)return"";const i=b.value.cloneNode(!0);i.querySelectorAll(".code-head, .copy-code").forEach(d=>d.remove()),i.querySelectorAll("[id]").forEach(d=>d.removeAttribute("id")),i.style.position="absolute",i.style.left="-9999px",i.style.top="0",i.style.width="800px",document.body.appendChild(i);const e=i.innerText.replace(/\n{3,}/g,`

`).trim();return document.body.removeChild(i),e}async function A(i){var E,C;const e=i.target,d=e.closest("button.copy-code");if(d){const $=((C=(E=d.closest(".code-block"))==null?void 0:E.querySelector("pre code"))==null?void 0:C.textContent)??"";if(!await J($))return;const O=d.querySelector("span");O&&(O.textContent="已复制"),setTimeout(()=>{O&&(O.textContent="复制代码")},1500);return}const r=e.closest("a[href]");if(!r)return;const g=r.getAttribute("href")??"";if(g.startsWith("#")){i.preventDefault(),u(decodeURIComponent(g.slice(1)));return}(g.startsWith("/library/")||g.startsWith("/project-docs/"))&&(i.preventDefault(),R.push(g))}return H(()=>F(_)),G(()=>k.component,()=>F(_)),s({getToc:p,getText:y,scrollTo:u}),(i,e)=>(o(),a("div",{ref_key:"rootRef",ref:b,class:"doc-html",onClick:A},[n.component?(o(),N(j(n.component),{key:0})):x("",!0)],512))}}),ce=P(ne,[["__scopeId","data-v-4e5066db"]]),ae={class:"doc-reader-card"},se={class:"doc-reader-card__header"},re={class:"reader-head"},le={class:"reader-icon"},ie={class:"reader-titles"},pe={class:"reader-source"},ue={class:"reader-meta"},ge={class:"reader-meta__info"},he={class:"meta-item"},be={class:"meta-item"},ve={class:"meta-item"},me={class:"reader-meta__actions"},ye={key:0,class:"reader-body"},Se={key:0,class:"reader-toc"},qe={class:"reader-toc__list"},Te=["href","onClick"],_e={key:1,class:"reader-placeholder"},Ee={key:1,class:"reader-placeholder"},Re=h({__name:"DocReaderCard",props:{doc:{}},setup(n){const s=n,t=I(()=>{var e;return((e=s.doc)==null?void 0:e.format)??"vue"}),k=I(()=>s.doc?pt(s.doc.categoryId):""),m=I(()=>s.doc?oe[s.doc.status]:""),R=I(()=>{var e;return(e=s.doc)!=null&&e.contentKey?de[s.doc.contentKey]??null:null}),b=M([]),p=M();function _(e){b.value=e}function u(e){var d;(d=p.value)==null||d.scrollTo(e)}const y=M(!1);function A(){var d;const e=((d=p.value)==null?void 0:d.getText())??"";e&&(J(e),y.value=!0,setTimeout(()=>{y.value=!1},1500))}function i(){var e;st.success(`「${((e=s.doc)==null?void 0:e.title)??""}」已加入下载队列（演示）`)}return(e,d)=>{const r=V;return o(),a("article",ae,[n.doc?(o(),a(D,{key:0},[c("header",se,[c("div",re,[c("span",le,[l(r,{size:24},{default:q(()=>[l(S(X))]),_:1})]),c("div",ie,[c("h1",null,T(n.doc.title),1),c("p",null,[d[0]||(d[0]=f("文档中心 · ",-1)),c("span",pe,T(n.doc.code)+"."+T(t.value),1)])])]),c("div",ue,[c("div",ge,[c("span",he,[l(r,null,{default:q(()=>[l(S(dt))]),_:1}),f(T(n.doc.version),1)]),c("span",be,[l(r,null,{default:q(()=>[l(S(ot))]),_:1}),f(T(n.doc.updateTime),1)]),c("span",ve,[l(r,null,{default:q(()=>[l(S(K))]),_:1}),f(T(k.value),1)]),c("span",{class:L(["meta-status",`is-${n.doc.status}`])},[l(r,{size:13},{default:q(()=>[n.doc.status==="published"?(o(),N(S(nt),{key:0})):(o(),N(S(ct),{key:1}))]),_:1}),f(" "+T(m.value),1)],2)]),c("div",me,[R.value?(o(),a("button",{key:0,class:"reader-action reader-action--ghost",onClick:A},[l(r,null,{default:q(()=>[l(S(at))]),_:1}),f(" "+T(y.value?"已复制":"复制纯正文"),1)])):x("",!0),c("button",{class:"reader-action reader-action--primary",onClick:i},[l(r,null,{default:q(()=>[l(S(U))]),_:1}),d[1]||(d[1]=f(" 下载文档 ",-1))])])])]),R.value?(o(),a("div",ye,[b.value.length?(o(),a("div",Se,[d[2]||(d[2]=c("div",{class:"reader-toc__title"},[c("span",null,"目录")],-1)),c("ul",qe,[(o(!0),a(D,null,w(b.value,g=>(o(),a("li",{key:g.id,class:L(`is-level-${g.level}`)},[c("a",{href:`#${g.id}`,onClick:W(E=>u(g.id),["prevent"])},T(g.text),9,Te)],2))),128))])])):x("",!0),l(ce,{ref_key:"articleRef",ref:p,component:R.value,onReady:_},null,8,["component"])])):(o(),a("div",_e,[l(r,{size:44,color:"#c0c4cc"},{default:q(()=>[l(S(z))]),_:1}),d[4]||(d[4]=c("p",null,"该文档暂无在线正文，请下载后查看",-1)),c("button",{class:"reader-action reader-action--primary",onClick:i},[l(r,null,{default:q(()=>[l(S(U))]),_:1}),d[3]||(d[3]=f(" 下载文档 ",-1))])]))],64)):(o(),a("div",Ee,[l(r,{size:44,color:"#c0c4cc"},{default:q(()=>[l(S(Y))]),_:1}),d[5]||(d[5]=c("p",null,"从左侧目录选择一篇文档开始阅读",-1))]))])}}}),ke=P(Re,[["__scopeId","data-v-806b0deb"]]),fe={class:"library-page"},Ie={class:"library-page__body"},Me={class:"library-page__aside"},Ae={class:"library-page__content"},xe=h({__name:"DocLibraryView",setup(n){const s=Z(),t=B(),k=M(!1),m=M([]);function R(e){var g;let d=e,r=0;for(;r<10;){const E=((g=gt.find(C=>C.id===d))==null?void 0:g.parentId)??0;if(E===0)break;d=E,r++}return d}const b=["#059669","#0891b2","#d97706","#7c3aed","#dc2626","#2563eb"],p=[X,rt,lt,it,z,Y],_=I(()=>ht.map((e,d)=>({id:e.id,name:e.name,color:b[d%b.length],icon:p[d%p.length],docs:m.value.filter(r=>R(r.categoryId)===e.id).map(r=>({id:r.id,title:r.title}))}))),u=I(()=>{const e=Number(s.params.id);return Number.isFinite(e)&&e>0?e:void 0}),y=I(()=>m.value.find(e=>e.id===u.value)??null);function A(e){t.replace(`/library/${e}`)}G(u,()=>{window.scrollTo({top:0})});function i(){if(u.value)return;const e=Number(s.query.cat);let d;Number.isFinite(e)&&e>0&&(d=m.value.find(E=>R(E.categoryId)===e));const r=m.value[0],g=d??r;g&&t.replace(`/library/${g.id}`)}return H(async()=>{k.value=!0;const e=await ut.getAll();m.value=e.filter(d=>!d.deleted),i(),k.value=!1}),(e,d)=>(o(),a("div",fe,[c("div",Ie,[c("aside",Me,[l(kt,{groups:_.value,"active-doc-id":u.value,onSelect:A},null,8,["groups","active-doc-id"])]),c("section",Ae,[l(ke,{doc:y.value},null,8,["doc"])])])]))}}),Pe=P(xe,[["__scopeId","data-v-af02ca6d"]]);export{Pe as default};
