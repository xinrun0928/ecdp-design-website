import{m as $,s as K,j as Y,b as q,q as j,w as Z,B as J,E as Q,i as ee,g as ae}from"./index-BGoR6y1A.js";import{br as le,bq as te,a as U}from"./element-plus-FTcyDTKl.js";import{c as oe,d as ne}from"./logMockApi-Ct28hWQr.js";import{m as se}from"./search-BoGTCmM8.js";import{p as ie}from"./pagination-BHZHZx5b.js";import{e as re}from"./file-BE9knabr.js";import{a6 as pe,a7 as _e,a8 as ue,a9 as ge,aa as de,ab as ce,ac as Ne,ad as me,ae as S}from"./subsystem-BQNqsSr5.js";import{e as Te}from"./ui-CkdNVOlu.js";import{G as Ie,M as D,a0 as n,W as r,F as Le,r as v,aj as A,L as h,u as N,_ as R,P as _,$ as T,Z as ye,c as I,k as P}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-C6-QJwcy.js";import"./warning-BshV8eZN.js";import"./mockCrud-VGUp_ajm.js";const t={UNKNOWN:0,DUTY:1,PLAN:2,EVENT:3,DISPATCH:4,MATERIAL:5,DECISION:6,FUSION:7,INSPECTION:60,ADMIN:99},Oe={[t.UNKNOWN]:"info",[t.DUTY]:"blue",[t.PLAN]:"purple",[t.EVENT]:"red",[t.DISPATCH]:"orange",[t.MATERIAL]:"green",[t.DECISION]:"cyan",[t.FUSION]:"pink",[t.INSPECTION]:"warning",[t.ADMIN]:""},V={[t.UNKNOWN]:"未知",[t.DUTY]:"应急值守",[t.PLAN]:"应急预案",[t.EVENT]:"应急事件",[t.DISPATCH]:"指挥调度",[t.MATERIAL]:"应急物资",[t.DECISION]:"辅助决策",[t.FUSION]:"数据融合",[t.INSPECTION]:"防汛巡查",[t.ADMIN]:"后台管理"},be=`-- Table structure for sys_login_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_login_log";
CREATE TABLE "public"."sys_login_log" (
  "log_id" bigint NOT NULL,
  "org_id" bigint NOT NULL DEFAULT 0,
  "org_name" varchar(100) COLLATE "pg_catalog"."default",
  "puser_id" bigint NOT NULL DEFAULT 0,
  "user_id" bigint,
  "name" varchar(100) COLLATE "pg_catalog"."default",
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
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_login_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_login_log"."log_id" IS '唯一ID';
COMMENT ON COLUMN "public"."sys_login_log"."org_id" IS '组织ID';
COMMENT ON COLUMN "public"."sys_login_log"."org_name" IS '组织名称';
COMMENT ON COLUMN "public"."sys_login_log"."puser_id" IS '平台账户ID';
COMMENT ON COLUMN "public"."sys_login_log"."user_id" IS '用户ID';
COMMENT ON COLUMN "public"."sys_login_log"."name" IS '用户姓名';
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
COMMENT ON COLUMN "public"."sys_login_log"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_login_log"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_login_log"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_login_log"."signature_version" IS '一体化签名版本号';
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
`,Ee={key:0,class:"detail-content"},Me={class:"detail-summary__main"},Ce={class:"detail-summary__name"},Se={class:"detail-summary__url"},ve={class:"detail-summary__meta"},Ae={class:"detail-summary__row"},fe=Ie({__name:"SysLoginLog",setup(Ue){const w=v(ne),M=v(!1),l=v(null),x=I(()=>{var e,a,s,u,p,d,c,y,O,b,E,m;return[{label:"记录ID",value:(e=l.value)==null?void 0:e.logId,type:"code"},{label:"用户姓名",value:(a=l.value)==null?void 0:a.name},{label:"用户名",value:(s=l.value)==null?void 0:s.userName},{label:"父用户ID",value:(u=l.value)==null?void 0:u.puserId,type:"code"},{label:"用户ID",value:(p=l.value)==null?void 0:p.userId,type:"code"},{label:"组织ID",value:(d=l.value)==null?void 0:d.orgId,type:"code"},{label:"组织名称",value:(c=l.value)==null?void 0:c.orgName},{label:"操作类型",value:((y=l.value)==null?void 0:y.operationType)===S.LOGIN?"登录":"登出"},{label:"客户端",value:(O=l.value)==null?void 0:O.clientId},{label:"授权类型",value:(b=l.value)==null?void 0:b.grantType},{label:"子系统ID",value:(E=l.value)==null?void 0:E.subsystemId,type:"code"},{label:"登录时间",value:(m=l.value)==null?void 0:m.createTime}]}),G=I(()=>{var e,a,s,u,p;return[{label:"IP地址",value:(e=l.value)==null?void 0:e.ip,type:"code"},{label:"地理位置",value:(a=l.value)==null?void 0:a.location},{label:"浏览器",value:(s=l.value)==null?void 0:s.browser},{label:"操作系统",value:(u=l.value)==null?void 0:u.os},{label:"终端ID",value:(p=l.value)==null?void 0:p.terminalId}]}),o=P({userName:"",clientId:"",grantType:"",createTime:null}),g=P({pageNum:1,pageSize:20}),L=I(()=>{var a;let e=w.value;if(o.userName&&(e=e.filter(s=>se(o.userName,s.userName))),o.clientId&&(e=e.filter(s=>s.clientId===o.clientId)),o.grantType&&(e=e.filter(s=>s.grantType===o.grantType)),((a=o.createTime)==null?void 0:a.length)===2){const[s,u]=o.createTime;e=e.filter(p=>{var c;const d=((c=p.createTime)==null?void 0:c.split(" ")[0])??"";return d>=s&&d<=u})}return e}),F=I(()=>L.value.length),W=I(()=>ie(L.value,g.pageNum,g.pageSize)),k=[{prop:"logId",label:"日志ID",width:180},{prop:"userName",label:"用户名",minWidth:150,showOverflowTooltip:!0,emptyPlaceholder:"-"},{prop:"name",label:"用户姓名",width:120,emptyPlaceholder:"-"},{prop:"orgName",label:"组织",width:120,emptyPlaceholder:"-"},{prop:"clientId",label:"客户端",width:120,cellType:"tag",tagMap:_e,tagLabelMap:pe},{prop:"grantType",label:"授权类型",width:120,cellType:"tag",tagMap:ge,tagLabelMap:ue,emptyPlaceholder:"-"},{prop:"operationType",label:"操作类型",width:100,cellType:"tag",tagMap:ce,tagLabelMap:de},{prop:"terminalId",label:"终端",width:80},{prop:"subsystemId",label:"子系统",width:100,cellType:"tag",tagMap:Oe,tagLabelMap:V},{prop:"ip",label:"IP地址",width:130},{prop:"browser",label:"浏览器",width:150,showOverflowTooltip:!0},{type:"audit",prop:"createTime",label:"登录时间"},{type:"actions",label:"操作",slot:"actions"}],B=[{label:"详情",icon:le,handler:e=>X(e)}];function C(){g.pageNum=1}function H(){if(!L.value.length){U.warning(Te);return}re("登录日志",["记录ID","用户姓名","用户名","父用户ID","用户ID","组织ID","组织名称","客户端","授权类型","操作类型","终端","子系统","IP地址","浏览器","操作系统","登录时间"],L.value.map(e=>[e.logId,e.name,e.userName,e.puserId,e.userId,e.orgId,e.orgName,e.clientId,e.grantType,e.operationType===1?"登录":"登出",e.terminalId,e.subsystemId,e.ip,e.browser,e.os,e.createTime]))}async function X(e){const a=await oe(e.logId);a?(l.value=a,M.value=!0):U.warning("未找到详情")}return(e,a)=>{const s=A("table-structure-drawer"),u=j,p=Z,d=J,c=q,y=Y,O=K,b=A("card-layout"),E=ee,m=Q,f=A("detail-list"),z=$;return h(),D(Le,null,[n(b,{title:"登录日志"},{"title-extra":r(()=>[n(s,{sql:N(be)},null,8,["sql"])]),search:r(()=>[n(u,{modelValue:o.userName,"onUpdate:modelValue":a[0]||(a[0]=i=>o.userName=i),placeholder:"搜索用户名",onSearch:C},null,8,["modelValue"]),n(p,{modelValue:o.clientId,"onUpdate:modelValue":a[1]||(a[1]=i=>o.clientId=i),placeholder:"客户端",options:N(Ne),onSearch:C},null,8,["modelValue","options"]),n(p,{modelValue:o.grantType,"onUpdate:modelValue":a[2]||(a[2]=i=>o.grantType=i),placeholder:"授权类型",options:N(me),onSearch:C},null,8,["modelValue","options"]),n(d,{modelValue:o.createTime,"onUpdate:modelValue":a[3]||(a[3]=i=>o.createTime=i),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:r(()=>[n(c,{type:"success",icon:N(te),"margin-left":10,onClick:H},{default:r(()=>[...a[7]||(a[7]=[R("导出",-1)])]),_:1},8,["icon"])]),default:r(()=>[n(O,{pageNum:g.pageNum,"onUpdate:pageNum":a[4]||(a[4]=i=>g.pageNum=i),pageSize:g.pageSize,"onUpdate:pageSize":a[5]||(a[5]=i=>g.pageSize=i),data:W.value,columns:k,total:F.value,"row-key":"logId","show-tool-bar":!1},{actions:r(({row:i})=>[n(y,{items:B,row:i},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total"])]),_:1}),n(z,{modelValue:M.value,"onUpdate:modelValue":a[6]||(a[6]=i=>M.value=i),title:"登录详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:r(()=>[l.value?(h(),D("div",Ee,[n(m,{class:"detail-summary"},{default:r(()=>[_("div",Me,[_("span",Ce,T(l.value.userName||"-"),1),_("span",Se,T(l.value.name||"-"),1)]),_("div",ve,[n(E,{type:l.value.operationType===N(S).LOGIN?"success":"info",effect:"dark",round:""},{default:r(()=>[R(T(l.value.operationType===N(S).LOGIN?"登录":"登出"),1)]),_:1},8,["type"]),_("span",null,T(l.value.clientId),1)]),_("div",Ae,[_("span",null,T(l.value.grantType),1),_("span",null,T(l.value.subsystemId?N(V)[l.value.subsystemId]||l.value.subsystemId:"-"),1)])]),_:1}),n(m,{class:"detail-section"},{header:r(()=>[...a[8]||(a[8]=[_("span",{class:"detail-section__title"},"基础信息",-1)])]),default:r(()=>[n(f,{items:x.value},null,8,["items"])]),_:1}),n(m,{class:"detail-section"},{header:r(()=>[...a[9]||(a[9]=[_("span",{class:"detail-section__title"},"终端信息",-1)])]),default:r(()=>[n(f,{items:G.value},null,8,["items"])]),_:1})])):ye("",!0)]),_:1},8,["modelValue"])],64)}}}),He=ae(fe,[["__scopeId","data-v-29742d56"]]);export{He as default};
