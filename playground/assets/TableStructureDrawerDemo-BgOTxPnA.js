import{ak as h}from"./element-plus-EGZbwYXy.js";import{p as V,a as z}from"./index-DyoFwojq.js";import{D as H,a as x,b as Q}from"./DemoCodeBlock-DHLQzome.js";import{E as P}from"./EntryRefTables-ZgcHUR3n.js";import{G,e as $,aj as Y,L as r,O as W,W as d,a0 as a,P as s,M as u,F as A,ae as N,$ as p,Z as E,_ as c,r as X,c as m,v as M}from"./vue-vendor-DWvNw2xx.js";import"./ComponentDetail-BgX7mPcG.js";import"./RefTable-CeBtsXrQ.js";const j={class:"tsd-stage"},K={class:"control-group__title"},Z={key:0,class:"control-line control-line--stack"},J={key:1,class:"control-line control-line--stack"},ee={key:2,class:"control-line control-line--stack"},se={class:"control-label"},le={class:"control-prop"},te={class:"panel code-panel"},oe={class:"panel ref-panel"},ae=`DROP TABLE IF EXISTS "public"."sys_subsystem";
CREATE TABLE sys_subsystem (
  subsystem_id BIGINT NOT NULL                COMMENT '子系统ID',
  subsystem_code VARCHAR(50) NOT NULL         COMMENT '子系统编码',
  subsystem_name VARCHAR(100) NOT NULL        COMMENT '子系统名称',
  route_path VARCHAR(200) DEFAULT NULL        COMMENT '路由路径',
  display_order INT DEFAULT 0                 COMMENT '显示顺序',
  status CHAR(4) DEFAULT '1101'               COMMENT '状态（1101-正常/1102-停用）',
  creater VARCHAR(50) DEFAULT NULL            COMMENT '创建人',
  create_time DATETIME DEFAULT NULL           COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='子系统信息表';

ALTER TABLE sys_subsystem OWNER TO ecdp;

COMMENT ON COLUMN sys_subsystem.subsystem_id IS '子系统ID';

ALTER TABLE sys_subsystem ADD PRIMARY KEY (subsystem_id);
`,re=`DROP TABLE IF EXISTS "public"."sys_user";
CREATE TABLE sys_user (
  user_id BIGINT NOT NULL                COMMENT '用户ID',
  user_name VARCHAR(50) NOT NULL         COMMENT '用户名',
  status CHAR(4) DEFAULT '1101'          COMMENT '状态（1101-正常/1102-停用）',
  creater VARCHAR(50) DEFAULT NULL       COMMENT '创建人',
  create_time DATETIME DEFAULT NULL      COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';

ALTER TABLE sys_user OWNER TO ecdp;

CREATE INDEX idx_sys_user_name ON sys_user (user_name);

ALTER TABLE sys_user ADD PRIMARY KEY (user_id);
`,ne=`DROP TABLE IF EXISTS "public"."sys_role";
CREATE TABLE sys_role (
  role_id BIGINT NOT NULL                COMMENT '角色ID',
  role_name VARCHAR(50) NOT NULL         COMMENT '角色名称',
  role_code VARCHAR(50) NOT NULL         COMMENT '角色编码',
  display_order INT DEFAULT 0            COMMENT '显示顺序',
  status CHAR(4) DEFAULT '1101'          COMMENT '状态（1101-正常/1102-停用）',
  creater VARCHAR(50) DEFAULT NULL       COMMENT '创建人',
  create_time DATETIME DEFAULT NULL      COMMENT '创建时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色信息表';

ALTER TABLE sys_role OWNER TO ecdp;

CREATE INDEX idx_sys_role_code ON sys_role (role_code);

ALTER TABLE sys_role ADD PRIMARY KEY (role_id);
`,ie=G({__name:"TableStructureDrawerDemo",setup(ue){const b=["TableStructureDrawer 组件演示台","研发调试专用，非业务页面"],C=["ProDrawer"],t=X({sqlMode:"single",size:"40%",direction:"rtl",customTooltip:!1,customTitle:!1}),R={sqlMode:{label:"SQL 入参形态"},size:{label:"抽屉宽度"},direction:{label:"抽屉方向"},customTooltip:{label:"自定义图标提示"},customTitle:{label:"自定义抽屉标题"}},O=[{title:"SQL 入参与方向",radio:!0,checks:[]},{title:"文案定制",checks:["customTooltip","customTitle"]}],D=[{label:"单字符串（单表）",value:"single"},{label:"字符串数组（多表 tab）",value:"array"}],y=[{label:"rtl（右侧，默认）",value:"rtl"},{label:"ltr（左侧）",value:"ltr"},{label:"ttb（顶部）",value:"ttb"},{label:"btt（底部）",value:"btt"}],v=[{label:"40%",value:"40%"},{label:"50%",value:"50%"},{label:"80%",value:"80%"}],U=m(()=>t.sqlMode==="single"?ae:[re,ne]);function I(l){return!!t[l]}function f(l,e){t[l]=e}const n=M([]),L=M(0);function g(l,e){n.value.unshift({type:l,msg:e}),n.value.length>30&&n.value.pop(),L.value++}function S(){n.value.splice(0,n.value.length)}$(()=>t.sqlMode,l=>{g("cfg-change",l==="single"?"sql 传单字符串（1 张表，无徽标无 tab）":"sql 传字符串数组（2 张表，tab 切换 + 表数量徽标）")});const q=m(()=>{const l=t,e=[];return l.sqlMode==="single"?(e.push("<!-- 脚本侧：import sql from '@/sql/admin/sys_subsystem.sql?raw' -->"),e.push(""),e.push(`<table-structure-drawer :sql="sql"${l.customTooltip?' tooltip="查看子系统表结构"':""}${l.size!=="40%"?` size="${l.size}"`:""} />`)):(e.push("<!-- 脚本侧：逐个 ?raw 导入多张表的 SQL -->"),e.push("<!-- import sysUser from '@/sql/admin/sys_user.sql?raw' -->"),e.push("<!-- import sysRole from '@/sql/admin/sys_role.sql?raw' -->"),e.push(""),e.push(`<table-structure-drawer :sql="[sysUser, sysRole]"${l.customTitle?' title="演示表结构（自定义标题）"':""} />`)),l.direction!=="rtl"&&e.push(`<!-- direction="${l.direction}" 决定抽屉弹出方向 -->`),e.join(`
`)}),B=m(()=>`<template>
${q.value}
</template>`);return(l,e)=>{const F=Y("table-structure-drawer"),T=V,k=h;return r(),W(Q,{title:"TableStructureDrawer 表结构抽屉组件演示台","preview-theme":"light",tags:b,related:C},{description:d(()=>[...e[3]||(e[3]=[c(" 表结构设计抽屉 ",-1),s("code",null,"<table-structure-drawer>",-1),c("（位于 ",-1),s("code",null,"packages/share-components/src/display/",-1),c("）—— Coin 图标触发 + highlight.js SQL 高亮 + 一键复制；收编原「多表合并渲染」variant（收尾：sql 数组 —— 多个文件独立成 tab、触发器显示表数量徽标）。演示 SQL 直接内联（真实项目改为 ",-1),s("code",null,"?raw",-1),c(" 导入 ",-1),s("code",null,"src/sql/",-1),c(" 一表一文件）。 ",-1)])]),preview:d(()=>[s("div",j,[e[4]||(e[4]=s("p",{class:"stage-tip"},"点击下方 Coin 图标按钮打开表结构抽屉（sql 内容 / 数量随下方「SQL 入参形态」联动）",-1)),a(F,{sql:U.value,tooltip:t.customTooltip?"查看子系统表结构（自定义 tooltip）":"查看表结构",size:t.size,title:t.customTitle?"演示表结构（自定义标题）":"表结构设计",direction:t.direction},null,8,["sql","tooltip","size","title","direction"])])]),console:d(()=>[(r(),u(A,null,N(O,i=>s("div",{key:i.title,class:"control-group"},[s("h4",K,p(i.title),1),i.radio?(r(),u("div",Z,[e[5]||(e[5]=s("span",{class:"control-label"},"SQL 入参形态",-1)),e[6]||(e[6]=s("span",{class:"control-prop"},"sql: string | string[]",-1)),a(T,{"model-value":t.sqlMode,options:D,size:"small","onUpdate:modelValue":e[0]||(e[0]=o=>t.sqlMode=o)},null,8,["model-value"])])):E("",!0),i.radio?(r(),u("div",J,[e[7]||(e[7]=s("span",{class:"control-label"},"抽屉方向",-1)),e[8]||(e[8]=s("span",{class:"control-prop"},"direction",-1)),a(T,{"model-value":t.direction,options:y,size:"small","onUpdate:modelValue":e[1]||(e[1]=o=>t.direction=o)},null,8,["model-value"])])):E("",!0),i.radio?(r(),u("div",ee,[e[9]||(e[9]=s("span",{class:"control-label"},"抽屉宽度",-1)),e[10]||(e[10]=s("span",{class:"control-prop"},"size",-1)),a(T,{"model-value":t.size,options:v,size:"small","onUpdate:modelValue":e[2]||(e[2]=o=>t.size=o)},null,8,["model-value"])])):E("",!0),(r(!0),u(A,null,N(i.checks,o=>{var _;return r(),u("label",{key:o,class:"control-line"},[a(k,{"model-value":I(o),"onUpdate:modelValue":w=>f(o,w)},null,8,["model-value","onUpdate:modelValue"]),s("span",se,p((_=R[o])==null?void 0:_.label),1),s("span",le,p(o),1)])}),128))])),64))]),panels:d(()=>[a(H,{logs:n.value,seq:L.value,"empty-text":"切换入参形态 / 打开抽屉查看联动说明",onClear:S},null,8,["logs","seq"]),s("section",te,[e[11]||(e[11]=s("h4",{class:"panel__title"},"用法示例（随控制台实时生成，代码框内可滚动查看全部）",-1)),a(x,{code:B.value},null,8,["code"])]),s("section",oe,[a(P,{name:"TableStructureDrawer"})])]),_:1})}}}),_e=z(ie,[["__scopeId","data-v-0b213dcc"]]);export{_e as default};
