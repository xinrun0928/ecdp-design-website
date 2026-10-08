import{as as k}from"./element-plus-CTKPIV6R.js";import{a as V,_ as z}from"./index-DunRa3Bm.js";import{S as H}from"./StackWorkbenchLayout-Bs7RW63-.js";import{G as x,e as P,aj as Q,L as a,O as G,W as d,M as i,F as N,ae as _,P as l,$ as E,a0 as u,Z as p,_ as c,r as $,c as m,v as M}from"./vue-vendor-PGclLSNR.js";import"./useWorkbenchNav-Cr29eOAs.js";import"./ComponentDetail-nYUdNv4R.js";import"./SectionPreview-CZocydad.js";const Y={class:"tsd-stage"},W={class:"control-group__title"},X={key:0,class:"control-line control-line--stack"},j={key:1,class:"control-line control-line--stack"},K={key:2,class:"control-line control-line--stack"},Z={class:"control-label"},J={class:"control-prop"},ee=`DROP TABLE IF EXISTS "public"."sys_subsystem";
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
`,se=`DROP TABLE IF EXISTS "public"."sys_user";
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
`,te=`DROP TABLE IF EXISTS "public"."sys_role";
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
`,le=x({__name:"TableStructureDrawerDemo",setup(oe){const b=["TableStructureDrawer 组件演示台","研发调试专用，非业务页面"],C=["ProDrawer"],t=$({sqlMode:"single",size:"40%",direction:"rtl",customTooltip:!1,customTitle:!1}),R={sqlMode:{label:"SQL 入参形态"},size:{label:"抽屉宽度"},direction:{label:"抽屉方向"},customTooltip:{label:"自定义图标提示"},customTitle:{label:"自定义抽屉标题"}},O=[{title:"SQL 入参与方向",radio:!0,checks:[]},{title:"文案定制",checks:["customTooltip","customTitle"]}],y=[{label:"单字符串（单表）",value:"single"},{label:"字符串数组（多表 tab）",value:"array"}],v=[{label:"rtl（右侧，默认）",value:"rtl"},{label:"ltr（左侧）",value:"ltr"},{label:"ttb（顶部）",value:"ttb"},{label:"btt（底部）",value:"btt"}],D=[{label:"40%",value:"40%"},{label:"50%",value:"50%"},{label:"80%",value:"80%"}],U=m(()=>t.sqlMode==="single"?ee:[se,te]);function I(s){return!!t[s]}function g(s,e){t[s]=e}const r=M([]),L=M(0);function S(s,e){r.value.unshift({type:s,msg:e}),r.value.length>30&&r.value.pop(),L.value++}function f(){r.value.splice(0,r.value.length)}P(()=>t.sqlMode,s=>{S("cfg-change",s==="single"?"sql 传单字符串（1 张表，无徽标无 tab）":"sql 传字符串数组（2 张表，tab 切换 + 表数量徽标）")});const q=m(()=>{const s=t,e=[];return s.sqlMode==="single"?(e.push("<!-- 脚本侧：import sql from '@/sql/admin/sys_subsystem.sql?raw' -->"),e.push(""),e.push(`<table-structure-drawer :sql="sql"${s.customTooltip?' tooltip="查看子系统表结构"':""}${s.size!=="40%"?` size="${s.size}"`:""} />`)):(e.push("<!-- 脚本侧：逐个 ?raw 导入多张表的 SQL -->"),e.push("<!-- import sysUser from '@/sql/admin/sys_user.sql?raw' -->"),e.push("<!-- import sysRole from '@/sql/admin/sys_role.sql?raw' -->"),e.push(""),e.push(`<table-structure-drawer :sql="[sysUser, sysRole]"${s.customTitle?' title="演示表结构（自定义标题）"':""} />`)),s.direction!=="rtl"&&e.push(`<!-- direction="${s.direction}" 决定抽屉弹出方向 -->`),e.join(`
`)}),B=m(()=>`<template>
${q.value}
</template>`);return(s,e)=>{const F=Q("table-structure-drawer"),T=V,w=k;return a(),G(H,{title:"TableStructureDrawer 表结构抽屉组件演示台","preview-theme":"light",tags:b,related:C,"entry-name":"TableStructureDrawer","event-logs":r.value,"event-seq":L.value,"event-empty-text":"切换入参形态 / 打开抽屉查看联动说明",onClearEventLogs:f,"usage-code":B.value},{description:d(()=>[...e[3]||(e[3]=[c(" 表结构设计抽屉 ",-1),l("code",null,"<table-structure-drawer>",-1),c("（位于 ",-1),l("code",null,"packages/share-components/src/display/",-1),c("）—— Coin 图标触发 + highlight.js SQL 高亮 + 一键复制；收编原「多表合并渲染」variant（收尾：sql 数组 —— 多个文件独立成 tab、触发器显示表数量徽标）。演示 SQL 直接内联（真实项目改为 ",-1),l("code",null,"?raw",-1),c(" 导入 ",-1),l("code",null,"src/sql/",-1),c(" 一表一文件）。 ",-1)])]),preview:d(()=>[l("div",Y,[u(F,{sql:U.value,tooltip:t.customTooltip?"查看子系统表结构（自定义 tooltip）":"查看表结构",size:t.size,title:t.customTitle?"演示表结构（自定义标题）":"表结构设计",direction:t.direction},null,8,["sql","tooltip","size","title","direction"])])]),console:d(()=>[(a(),i(N,null,_(O,n=>l("div",{key:n.title,class:"control-group"},[l("h4",W,E(n.title),1),n.radio?(a(),i("div",X,[e[4]||(e[4]=l("span",{class:"control-label"},"SQL 入参形态",-1)),e[5]||(e[5]=l("span",{class:"control-prop"},"sql: string | string[]",-1)),u(T,{"model-value":t.sqlMode,options:y,size:"small","onUpdate:modelValue":e[0]||(e[0]=o=>t.sqlMode=o)},null,8,["model-value"])])):p("",!0),n.radio?(a(),i("div",j,[e[6]||(e[6]=l("span",{class:"control-label"},"抽屉方向",-1)),e[7]||(e[7]=l("span",{class:"control-prop"},"direction",-1)),u(T,{"model-value":t.direction,options:v,size:"small","onUpdate:modelValue":e[1]||(e[1]=o=>t.direction=o)},null,8,["model-value"])])):p("",!0),n.radio?(a(),i("div",K,[e[8]||(e[8]=l("span",{class:"control-label"},"抽屉宽度",-1)),e[9]||(e[9]=l("span",{class:"control-prop"},"size",-1)),u(T,{"model-value":t.size,options:D,size:"small","onUpdate:modelValue":e[2]||(e[2]=o=>t.size=o)},null,8,["model-value"])])):p("",!0),(a(!0),i(N,null,_(n.checks,o=>{var A;return a(),i("label",{key:o,class:"control-line"},[u(w,{"model-value":I(o),"onUpdate:modelValue":h=>g(o,!!h)},null,8,["model-value","onUpdate:modelValue"]),l("span",Z,E((A=R[o])==null?void 0:A.label),1),l("span",J,E(o),1)])}),128))])),64))]),_:1},8,["event-logs","event-seq","usage-code"])}}}),de=z(le,[["__scopeId","data-v-a195b245"]]);export{de as default};
