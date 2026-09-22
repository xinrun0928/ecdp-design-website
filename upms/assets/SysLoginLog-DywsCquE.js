import{s as $,j as q,a as j,q as Z,v as J,z as Q,A as ee,i as ae,m as le,f as te}from"./index-D5_Q8ZhX.js";import{aY as ne,aX as oe,a as h}from"./element-plus-D2VbkOFi.js";import{c as se,d as ie}from"./logMockApi-CcIUnKpP.js";import{m as _e}from"./search-BoGTCmM8.js";import{p as pe}from"./pagination-BHZHZx5b.js";import{e as re}from"./file-DT4GqAgJ.js";import{_ as ue,$ as ge,a0 as de,a1 as ce,a2 as Ne,a3 as me,a4 as M,a5 as T,a6 as A}from"./subsystem-BrK1TFZN.js";import{G as Te,L as R,M as P,a0 as o,W as p,u as _,_ as V,P as u,$ as I,Z as Ie,F as Le,r as U,c as L,k as w,aj as f}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-5mY5cPlO.js";import"./mockCrud-De7qt4nP.js";const t={UNKNOWN:0,DUTY:1,PLAN:2,EVENT:3,DISPATCH:4,MATERIAL:5,DECISION:6,FUSION:7,INSPECTION:60,ADMIN:99},Oe={[t.UNKNOWN]:"info",[t.DUTY]:"blue",[t.PLAN]:"purple",[t.EVENT]:"red",[t.DISPATCH]:"orange",[t.MATERIAL]:"green",[t.DECISION]:"cyan",[t.FUSION]:"pink",[t.INSPECTION]:"warning",[t.ADMIN]:""},x={[t.UNKNOWN]:"未知",[t.DUTY]:"应急值守",[t.PLAN]:"应急预案",[t.EVENT]:"应急事件",[t.DISPATCH]:"指挥调度",[t.MATERIAL]:"应急物资",[t.DECISION]:"辅助决策",[t.FUSION]:"数据融合",[t.INSPECTION]:"防汛巡查",[t.ADMIN]:"后台管理"},ye=`-- Table structure for sys_login_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_login_log";
CREATE TABLE "public"."sys_login_log" (
  "log_id" bigint NOT NULL,
  "puser_id" bigint NOT NULL DEFAULT 0,
  "user_id" bigint,
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "org_id" bigint NOT NULL DEFAULT 0,
  "org_name" varchar(100) COLLATE "pg_catalog"."default",
  "user_name" varchar(100) COLLATE "pg_catalog"."default",
  "client_id" varchar(255) COLLATE "pg_catalog"."default",
  "grant_type" varchar(255) COLLATE "pg_catalog"."default",
  "ip" varchar(40) COLLATE "pg_catalog"."default",
  "location" varchar(255) COLLATE "pg_catalog"."default",
  "browser" varchar(512) COLLATE "pg_catalog"."default",
  "os" varchar(512) COLLATE "pg_catalog"."default",
  "terminal_id" varchar(64) COLLATE "pg_catalog"."default",
  "operation_type" integer,
  "subsystem_id" bigint NOT NULL DEFAULT 0,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_login_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_login_log"."log_id" IS '唯一ID';
COMMENT ON COLUMN "public"."sys_login_log"."puser_id" IS '平台账户ID';
COMMENT ON COLUMN "public"."sys_login_log"."user_id" IS '用户ID';
COMMENT ON COLUMN "public"."sys_login_log"."name" IS '用户姓名';
COMMENT ON COLUMN "public"."sys_login_log"."org_id" IS '组织ID';
COMMENT ON COLUMN "public"."sys_login_log"."org_name" IS '组织名称';
COMMENT ON COLUMN "public"."sys_login_log"."user_name" IS '用户名称';
COMMENT ON COLUMN "public"."sys_login_log"."client_id" IS '客户端ID';
COMMENT ON COLUMN "public"."sys_login_log"."grant_type" IS '授权类型';
COMMENT ON COLUMN "public"."sys_login_log"."ip" IS '客户端IP地址';
COMMENT ON COLUMN "public"."sys_login_log"."location" IS 'IP地理位置';
COMMENT ON COLUMN "public"."sys_login_log"."browser" IS '浏览器信息';
COMMENT ON COLUMN "public"."sys_login_log"."os" IS '操作系统';
COMMENT ON COLUMN "public"."sys_login_log"."terminal_id" IS '终端标识';
COMMENT ON COLUMN "public"."sys_login_log"."operation_type" IS '操作类型（1-登录，2-登出）';
COMMENT ON COLUMN "public"."sys_login_log"."subsystem_id" IS '子系统ID（SubSystemEnum.code）';
COMMENT ON COLUMN "public"."sys_login_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_login_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_login_log"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_login_log"."signature_version" IS '数据签名版本号';
COMMENT ON COLUMN "public"."sys_login_log"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."sys_login_log"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."sys_login_log" IS '系统登录日志表';

-- ----------------------------

-- Indexes structure for table sys_login_log
-- ----------------------------
CREATE INDEX "idx_sys_login_log_create_time" ON "public"."sys_login_log" USING btree (
  "create_time" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_login_log_ip" ON "public"."sys_login_log" USING btree (
  "ip" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE ip IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_login_log_operation_type" ON "public"."sys_login_log" USING btree (
  "operation_type" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE operation_type IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_login_log_org_id" ON "public"."sys_login_log" USING btree (
  "org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE org_id IS NOT NULL AND org_id <> 0 AND deleted = 0;
CREATE INDEX "idx_sys_login_log_puser_id" ON "public"."sys_login_log" USING btree (
  "puser_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE puser_id IS NOT NULL AND puser_id <> 0 AND deleted = 0;
CREATE INDEX "idx_sys_login_log_subsystem_id" ON "public"."sys_login_log" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE subsystem_id IS NOT NULL AND subsystem_id <> 0 AND deleted = 0;
CREATE INDEX "idx_sys_login_log_user_name" ON "public"."sys_login_log" USING btree (
  "user_name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE user_name IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_login_log
-- ----------------------------
ALTER TABLE "public"."sys_login_log" ADD CONSTRAINT "sys_login_log_pkey" PRIMARY KEY ("log_id");

-- ----------------------------
`,be={key:0,class:"detail-content"},Ee={class:"detail-summary__main"},Se={class:"detail-summary__name"},Me={class:"detail-summary__url"},Ce={class:"detail-summary__meta"},ve={class:"detail-summary__row"},Ae=Te({__name:"SysLoginLog",setup(Ue){const F=U(ie),C=U(!1),l=U(null),G=L(()=>{var e,a,s,g,r,c,N,y,b,E,S,m;return[{label:"记录ID",value:(e=l.value)==null?void 0:e.logId,type:"code"},{label:"用户姓名",value:(a=l.value)==null?void 0:a.name},{label:"用户名",value:(s=l.value)==null?void 0:s.userName},{label:"父用户ID",value:(g=l.value)==null?void 0:g.puserId,type:"code"},{label:"用户ID",value:(r=l.value)==null?void 0:r.userId,type:"code"},{label:"组织ID",value:(c=l.value)==null?void 0:c.orgId,type:"code"},{label:"组织名称",value:(N=l.value)==null?void 0:N.orgName},{label:"操作类型",value:((y=l.value)==null?void 0:y.operationType)===A.LOGIN?"登录":"登出"},{label:"客户端",value:(b=l.value)==null?void 0:b.clientId},{label:"授权类型",value:(E=l.value)==null?void 0:E.grantType},{label:"子系统ID",value:(S=l.value)==null?void 0:S.subsystemId,type:"code"},{label:"登录时间",value:(m=l.value)==null?void 0:m.createTime}]}),W=L(()=>{var e,a,s,g,r;return[{label:"IP地址",value:(e=l.value)==null?void 0:e.ip,type:"code"},{label:"地理位置",value:(a=l.value)==null?void 0:a.location},{label:"浏览器",value:(s=l.value)==null?void 0:s.browser},{label:"操作系统",value:(g=l.value)==null?void 0:g.os},{label:"终端ID",value:(r=l.value)==null?void 0:r.terminalId}]}),n=w({userName:"",clientId:"",grantType:"",createTime:null}),d=w({pageNum:1,pageSize:20}),O=L(()=>{var a;let e=F.value;if(n.userName&&(e=e.filter(s=>_e(n.userName,s.userName))),n.clientId&&(e=e.filter(s=>s.clientId===n.clientId)),n.grantType&&(e=e.filter(s=>s.grantType===n.grantType)),((a=n.createTime)==null?void 0:a.length)===2){const[s,g]=n.createTime;e=e.filter(r=>{var N;const c=((N=r.createTime)==null?void 0:N.split(" ")[0])??"";return c>=s&&c<=g})}return e}),B=L(()=>O.value.length),k=L(()=>pe(O.value,d.pageNum,d.pageSize)),H=[{prop:"logId",label:"日志ID",width:180},{prop:"userName",label:"用户名",minWidth:150,showOverflowTooltip:!0,emptyPlaceholder:"-"},{prop:"name",label:"用户姓名",width:120,emptyPlaceholder:"-"},{prop:"orgName",label:"组织",width:120,emptyPlaceholder:"-"},{prop:"clientId",label:"客户端",width:120,cellType:"tag",tagMap:ge,tagLabelMap:ue},{prop:"grantType",label:"授权类型",width:120,cellType:"tag",tagMap:ce,tagLabelMap:de,emptyPlaceholder:"-"},{prop:"operationType",label:"操作类型",width:100,cellType:"tag",tagMap:me,tagLabelMap:Ne},{prop:"terminalId",label:"终端",width:80},{prop:"subsystemId",label:"子系统",width:100,cellType:"tag",tagMap:Oe,tagLabelMap:x},{prop:"ip",label:"IP地址",width:130},{prop:"browser",label:"浏览器",width:150,showOverflowTooltip:!0},{type:"audit",prop:"createTime",label:"登录时间"},{type:"actions",label:"操作",slot:"actions"}],z=[{label:"详情",icon:ne,handler:e=>K(e)}];function v(){d.pageNum=1}function X(){if(!O.value.length){h.warning("暂无数据可导出");return}re("登录日志",["记录ID","用户姓名","用户名","父用户ID","用户ID","组织ID","组织名称","客户端","授权类型","操作类型","终端","子系统","IP地址","浏览器","操作系统","登录时间"],O.value.map(e=>[e.logId,e.name,e.userName,e.puserId,e.userId,e.orgId,e.orgName,e.clientId,e.grantType,e.operationType===1?"登录":"登出",e.terminalId,e.subsystemId,e.ip,e.browser,e.os,e.createTime]))}async function K(e){const a=await se(e.logId);a?(l.value=a,C.value=!0):h.warning("未找到详情")}return(e,a)=>{const s=f("table-structure-drawer"),g=Z,r=J,c=Q,N=j,y=q,b=$,E=f("panel-layout"),S=ae,m=ee,D=f("detail-list"),Y=le;return R(),P(Le,null,[o(E,{title:"登录日志"},{"title-extra":p(()=>[o(s,{sql:_(ye)},null,8,["sql"])]),search:p(()=>[o(g,{modelValue:n.userName,"onUpdate:modelValue":a[0]||(a[0]=i=>n.userName=i),placeholder:"搜索用户名",onSearch:v},null,8,["modelValue"]),o(r,{modelValue:n.clientId,"onUpdate:modelValue":a[1]||(a[1]=i=>n.clientId=i),placeholder:"客户端",options:[{label:_(M).SUB_SYSTEM,value:_(M).SUB_SYSTEM},{label:_(M).FLOOD,value:_(M).FLOOD}],onSearch:v},null,8,["modelValue","options"]),o(r,{modelValue:n.grantType,"onUpdate:modelValue":a[2]||(a[2]=i=>n.grantType=i),placeholder:"授权类型",options:[{label:_(T).PASSWORD,value:_(T).PASSWORD},{label:_(T).REFRESH_TOKEN,value:_(T).REFRESH_TOKEN},{label:_(T).MOBILE,value:_(T).MOBILE}],onSearch:v},null,8,["modelValue","options"]),o(c,{modelValue:n.createTime,"onUpdate:modelValue":a[3]||(a[3]=i=>n.createTime=i),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:p(()=>[o(N,{type:"success",icon:_(oe),"margin-left":10,onClick:X},{default:p(()=>[...a[7]||(a[7]=[V("导出",-1)])]),_:1},8,["icon"])]),default:p(()=>[o(b,{"page-num":d.pageNum,"onUpdate:pageNum":a[4]||(a[4]=i=>d.pageNum=i),"page-size":d.pageSize,"onUpdate:pageSize":a[5]||(a[5]=i=>d.pageSize=i),data:k.value,columns:H,total:B.value,"row-key":"logId","show-tool-bar":!1},{actions:p(({row:i})=>[o(y,{items:z,row:i},null,8,["row"])]),_:1},8,["page-num","page-size","data","total"])]),_:1}),o(Y,{modelValue:C.value,"onUpdate:modelValue":a[6]||(a[6]=i=>C.value=i),title:"登录详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:p(()=>[l.value?(R(),P("div",be,[o(m,{class:"detail-summary"},{default:p(()=>[u("div",Ee,[u("span",Se,I(l.value.userName||"-"),1),u("span",Me,I(l.value.name||"-"),1)]),u("div",Ce,[o(S,{type:l.value.operationType===_(A).LOGIN?"success":"info",effect:"dark",round:""},{default:p(()=>[V(I(l.value.operationType===_(A).LOGIN?"登录":"登出"),1)]),_:1},8,["type"]),u("span",null,I(l.value.clientId),1)]),u("div",ve,[u("span",null,I(l.value.grantType),1),u("span",null,I(l.value.subsystemId?_(x)[l.value.subsystemId]||l.value.subsystemId:"-"),1)])]),_:1}),o(m,{class:"detail-section"},{header:p(()=>[...a[8]||(a[8]=[u("span",{class:"detail-section__title"},"基础信息",-1)])]),default:p(()=>[o(D,{items:G.value},null,8,["items"])]),_:1}),o(m,{class:"detail-section"},{header:p(()=>[...a[9]||(a[9]=[u("span",{class:"detail-section__title"},"终端信息",-1)])]),default:p(()=>[o(D,{items:W.value},null,8,["items"])]),_:1})])):Ie("",!0)]),_:1},8,["modelValue"])],64)}}}),We=te(Ae,[["__scopeId","data-v-ceaaa55c"]]);export{We as default};
