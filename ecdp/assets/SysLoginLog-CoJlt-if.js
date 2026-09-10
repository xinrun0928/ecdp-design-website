import{q,ay as K,az as Y,aA as j,aB as Q,aC as Z,aD as J,aE as D,aF as ee,r as ae,a as le,x as te,w as ne,aG as M,aH as N,aq as oe,ar as se,t as ie,aI as C,y as _e,U as pe,Q as re,P as ue,d as ge}from"./index-BQSjtNr4.js";import{b7 as de,bl as ce,a as h}from"./element-plus-Bt8i1BPk.js";import{c as me,d as Ne}from"./logMockApi-CMqKBl4X.js";import{G as Le,aj as A,L as R,M as V,a0 as n,W as _,u as i,_ as w,P as r,$ as L,Z as ye,F as Te,p as f,c as y,m as x}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";import"./mockCrud-BtS6NwdU.js";const be=`-- Table structure for sys_login_log
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
`,Oe={key:0,class:"detail-content"},Ie={class:"detail-summary__main"},Ee={class:"detail-summary__name"},Me={class:"detail-summary__url"},ve={class:"detail-summary__meta"},Se={class:"detail-summary__row"},Ce=Le({__name:"SysLoginLog",setup(Ae){const P=f(Ne),v=f(!1),l=f(null),F=y(()=>{var e,a,o,u,p,d,c,b,O,I,E,m;return[{label:"记录ID",value:(e=l.value)==null?void 0:e.logId,type:"code"},{label:"用户姓名",value:(a=l.value)==null?void 0:a.name},{label:"用户名",value:(o=l.value)==null?void 0:o.userName},{label:"父用户ID",value:(u=l.value)==null?void 0:u.puserId,type:"code"},{label:"用户ID",value:(p=l.value)==null?void 0:p.userId,type:"code"},{label:"组织ID",value:(d=l.value)==null?void 0:d.orgId,type:"code"},{label:"组织名称",value:(c=l.value)==null?void 0:c.orgName},{label:"操作类型",value:((b=l.value)==null?void 0:b.operationType)===C.LOGIN?"登录":"登出"},{label:"客户端",value:(O=l.value)==null?void 0:O.clientId},{label:"授权类型",value:(I=l.value)==null?void 0:I.grantType},{label:"子系统ID",value:(E=l.value)==null?void 0:E.subsystemId,type:"code"},{label:"登录时间",value:(m=l.value)==null?void 0:m.createTime}]}),G=y(()=>{var e,a,o,u,p;return[{label:"IP地址",value:(e=l.value)==null?void 0:e.ip,type:"code"},{label:"地理位置",value:(a=l.value)==null?void 0:a.location},{label:"浏览器",value:(o=l.value)==null?void 0:o.browser},{label:"操作系统",value:(u=l.value)==null?void 0:u.os},{label:"终端ID",value:(p=l.value)==null?void 0:p.terminalId}]}),t=x({userName:"",clientId:"",grantType:"",createTime:null}),g=x({pageNum:1,pageSize:20}),T=y(()=>{var a;let e=P.value;if(t.userName&&(e=e.filter(o=>re(t.userName,o.userName))),t.clientId&&(e=e.filter(o=>o.clientId===t.clientId)),t.grantType&&(e=e.filter(o=>o.grantType===t.grantType)),((a=t.createTime)==null?void 0:a.length)===2){const[o,u]=t.createTime;e=e.filter(p=>{var c;const d=((c=p.createTime)==null?void 0:c.split(" ")[0])??"";return d>=o&&d<=u})}return e}),B=y(()=>T.value.length),W=y(()=>ue(T.value,g.pageNum,g.pageSize)),k=[{prop:"logId",label:"日志ID",width:180},{prop:"userName",label:"用户名",minWidth:150,showOverflowTooltip:!0,emptyPlaceholder:"-"},{prop:"name",label:"用户姓名",width:120,emptyPlaceholder:"-"},{prop:"orgName",label:"组织",width:120,emptyPlaceholder:"-"},{prop:"clientId",label:"客户端",width:120,cellType:"tag",tagMap:Y,tagLabelMap:K},{prop:"grantType",label:"授权类型",width:120,cellType:"tag",tagMap:Q,tagLabelMap:j,emptyPlaceholder:"-"},{prop:"operationType",label:"操作类型",width:100,cellType:"tag",tagMap:J,tagLabelMap:Z},{prop:"terminalId",label:"终端",width:80},{prop:"subsystemId",label:"子系统",width:100,cellType:"tag",tagMap:ee,tagLabelMap:D},{prop:"ip",label:"IP地址",width:130},{prop:"browser",label:"浏览器",width:150,showOverflowTooltip:!0},{type:"audit",prop:"createTime",label:"登录时间"},{type:"actions",label:"操作",slot:"actions"}],z=[{label:"详情",icon:de,handler:e=>X(e)}];function S(){g.pageNum=1}function H(){if(!T.value.length){h.warning("暂无数据可导出");return}pe("登录日志",["记录ID","用户姓名","用户名","父用户ID","用户ID","组织ID","组织名称","客户端","授权类型","操作类型","终端","子系统","IP地址","浏览器","操作系统","登录时间"],T.value.map(e=>[e.logId,e.name,e.userName,e.puserId,e.userId,e.orgId,e.orgName,e.clientId,e.grantType,e.operationType===1?"登录":"登出",e.terminalId,e.subsystemId,e.ip,e.browser,e.os,e.createTime]))}async function X(e){const a=await me(e.logId);a?(l.value=a,v.value=!0):h.warning("未找到详情")}return(e,a)=>{const o=A("table-structure-drawer"),u=te,p=ne,d=oe,c=le,b=ae,O=q,I=A("panel-layout"),E=ie,m=se,U=A("detail-list"),$=_e;return R(),V(Te,null,[n(I,{title:"登录日志"},{"title-extra":_(()=>[n(o,{sql:i(be)},null,8,["sql"])]),search:_(()=>[n(u,{modelValue:t.userName,"onUpdate:modelValue":a[0]||(a[0]=s=>t.userName=s),placeholder:"搜索用户名",onSearch:S},null,8,["modelValue"]),n(p,{modelValue:t.clientId,"onUpdate:modelValue":a[1]||(a[1]=s=>t.clientId=s),placeholder:"客户端",options:[{label:i(M).SUB_SYSTEM,value:i(M).SUB_SYSTEM},{label:i(M).FLOOD,value:i(M).FLOOD}],onSearch:S},null,8,["modelValue","options"]),n(p,{modelValue:t.grantType,"onUpdate:modelValue":a[2]||(a[2]=s=>t.grantType=s),placeholder:"授权类型",options:[{label:i(N).PASSWORD,value:i(N).PASSWORD},{label:i(N).REFRESH_TOKEN,value:i(N).REFRESH_TOKEN},{label:i(N).MOBILE,value:i(N).MOBILE}],onSearch:S},null,8,["modelValue","options"]),n(d,{modelValue:t.createTime,"onUpdate:modelValue":a[3]||(a[3]=s=>t.createTime=s),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:_(()=>[n(c,{type:"success",icon:i(ce),"margin-left":10,onClick:H},{default:_(()=>[...a[7]||(a[7]=[w("导出",-1)])]),_:1},8,["icon"])]),default:_(()=>[n(O,{"page-num":g.pageNum,"onUpdate:pageNum":a[4]||(a[4]=s=>g.pageNum=s),"page-size":g.pageSize,"onUpdate:pageSize":a[5]||(a[5]=s=>g.pageSize=s),data:W.value,columns:k,total:B.value,"row-key":"logId","show-tool-bar":!1},{actions:_(({row:s})=>[n(b,{items:z,row:s},null,8,["row"])]),_:1},8,["page-num","page-size","data","total"])]),_:1}),n($,{modelValue:v.value,"onUpdate:modelValue":a[6]||(a[6]=s=>v.value=s),title:"登录详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:_(()=>[l.value?(R(),V("div",Oe,[n(m,{class:"detail-summary"},{default:_(()=>[r("div",Ie,[r("span",Ee,L(l.value.userName||"-"),1),r("span",Me,L(l.value.name||"-"),1)]),r("div",ve,[n(E,{type:l.value.operationType===i(C).LOGIN?"success":"info",effect:"dark",round:""},{default:_(()=>[w(L(l.value.operationType===i(C).LOGIN?"登录":"登出"),1)]),_:1},8,["type"]),r("span",null,L(l.value.clientId),1)]),r("div",Se,[r("span",null,L(l.value.grantType),1),r("span",null,L(l.value.subsystemId?i(D)[l.value.subsystemId]||l.value.subsystemId:"-"),1)])]),_:1}),n(m,{class:"detail-section"},{header:_(()=>[...a[8]||(a[8]=[r("span",{class:"detail-section__title"},"基础信息",-1)])]),default:_(()=>[n(U,{items:F.value},null,8,["items"])]),_:1}),n(m,{class:"detail-section"},{header:_(()=>[...a[9]||(a[9]=[r("span",{class:"detail-section__title"},"终端信息",-1)])]),default:_(()=>[n(U,{items:G.value},null,8,["items"])]),_:1})])):ye("",!0)]),_:1},8,["modelValue"])],64)}}}),Pe=ge(Ce,[["__scopeId","data-v-ceaaa55c"]]);export{Pe as default};
