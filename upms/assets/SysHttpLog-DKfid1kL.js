import{m as $,s as z,j,b as X,w as J,q as K,A as Y,h as Z,g as Q}from"./index-B-IfrPXT.js";import{b1 as ee,b0 as te,bj as ae,bk as le,aB as b,a as oe}from"./element-plus-C-8OMMB5.js";import{a as se,b as re}from"./logMockApi-C2LXFlpY.js";import{h as ne}from"./warning-BshV8eZN.js";import{Y as pe,Z as ie}from"./subsystem-DveL0s1z.js";import{f as h}from"./json-C7YhXd02.js";import{e as _e}from"./file-q4pzil9q.js";import{m as de}from"./search-BoGTCmM8.js";import{p as ce}from"./pagination-BHZHZx5b.js";import{G as ue,M as v,a0 as l,W as s,F as ge,r as m,aj as M,L as U,u as i,_ as N,P as r,$ as S,Z as me,c as T,k as A}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-C6-QJwcy.js";import"./mockCrud-Dc2FFITc.js";const Ne=`-- Table structure for sys_http_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_http_log";
CREATE TABLE "public"."sys_http_log" (
  "http_log_id" bigint NOT NULL,
  "req_method" varchar(50) COLLATE "pg_catalog"."default",
  "req_url" text COLLATE "pg_catalog"."default",
  "req_header" text COLLATE "pg_catalog"."default",
  "req_params" text COLLATE "pg_catalog"."default",
  "rep_data" text COLLATE "pg_catalog"."default",
  "rep_state" varchar(50) COLLATE "pg_catalog"."default",
  "rep_time" varchar(30) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint DEFAULT 0,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_http_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_http_log"."http_log_id" IS '日志ID';
COMMENT ON COLUMN "public"."sys_http_log"."req_method" IS '请求方式';
COMMENT ON COLUMN "public"."sys_http_log"."req_url" IS '请求链接';
COMMENT ON COLUMN "public"."sys_http_log"."req_header" IS '请求头信息';
COMMENT ON COLUMN "public"."sys_http_log"."req_params" IS '请求参数';
COMMENT ON COLUMN "public"."sys_http_log"."rep_data" IS '响应数据';
COMMENT ON COLUMN "public"."sys_http_log"."rep_state" IS '响应状态';
COMMENT ON COLUMN "public"."sys_http_log"."rep_time" IS '响应时间（毫秒/耗时）';
COMMENT ON COLUMN "public"."sys_http_log"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_http_log"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_http_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_http_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_http_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_http_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_http_log"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_http_log"."signature_version" IS '数据签名版本号';
COMMENT ON COLUMN "public"."sys_http_log"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."sys_http_log"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."sys_http_log" IS '系统接口请求日志';

-- ----------------------------

-- Indexes structure for table sys_http_log
-- ----------------------------
CREATE INDEX "idx_sys_http_log_create_time" ON "public"."sys_http_log" USING btree (
  "create_time" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_http_log_org_id" ON "public"."sys_http_log" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND creater_org_id <> 0 AND deleted = 0;
CREATE INDEX "idx_sys_http_log_rep_state" ON "public"."sys_http_log" USING btree (
  "rep_state" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE rep_state IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_http_log_req_method" ON "public"."sys_http_log" USING btree (
  "req_method" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE req_method IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_http_log_creater_id" ON "public"."sys_http_log" USING btree (
  "creater_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_http_log
-- ----------------------------
ALTER TABLE "public"."sys_http_log" ADD CONSTRAINT "sys_http_log_pkey" PRIMARY KEY ("http_log_id");

-- ----------------------------
`,Te={key:0,class:"detail-content"},Oe={class:"detail-grid"},Le={class:"detail-item full-width"},Ee={class:"label-row"},be={class:"json-block"},he={class:"detail-item full-width"},Me={class:"label-row"},Se={class:"json-block"},Ce={class:"detail-item full-width"},fe={class:"label-row"},ye={class:"json-block"},ve=ue({__name:"SysHttpLog",setup(Ue){const I=m(re),O=m(!1),o=m(null),C=m(["basic","request"]),q=T(()=>{var t,e,p,c,u,d;return[{label:"日志ID",value:(t=o.value)==null?void 0:t.id,type:"code"},{label:"请求方式",value:(e=o.value)==null?void 0:e.reqMethod},{label:"请求地址",value:(p=o.value)==null?void 0:p.reqUrl,type:"code",fullWidth:!0},{label:"响应状态",value:(c=o.value)==null?void 0:c.repState},{label:"耗时",value:(u=o.value)!=null&&u.repTime?`${o.value.repTime} ms`:void 0},{label:"调用时间",value:(d=o.value)==null?void 0:d.createTime,fullWidth:!0}]}),n=A({reqMethod:"",reqUrl:"",createTime:null}),_=A({pageNum:1,pageSize:20}),L=T(()=>{var e;let t=I.value;if(n.reqMethod&&(t=t.filter(p=>p.reqMethod===n.reqMethod)),n.reqUrl&&(t=t.filter(p=>de(n.reqUrl,p.reqUrl))),((e=n.createTime)==null?void 0:e.length)===2){const[p,c]=n.createTime;t=t.filter(u=>{const d=u.createTime.split(" ")[0];return d>=p&&d<=c})}return t}),D=T(()=>L.value.length),w=T(()=>ce(L.value,_.pageNum,_.pageSize)),x=[{prop:"id",label:"日志ID",width:180,cellType:"code"},{prop:"reqMethod",label:"请求方式",width:115,cellType:"tag",tagMap:{GET:"success",POST:"",POST_FORM:"",POST_JSON:"",PUT:"warning",DELETE:"danger"},tagLabelMap:{GET:"GET",POST:"POST",POST_FORM:"POST_FORM",POST_JSON:"POST_JSON",PUT:"PUT",DELETE:"DELETE"}},{prop:"reqUrl",label:"请求地址",minWidth:300,align:"left",showOverflowTooltip:!0},{prop:"repState",label:"响应状态",width:100,cellType:"tag",tagMap:ie,tagLabelMap:pe},{prop:"repTime",label:"耗时(ms)",width:90},{type:"audit",prop:"createTime",label:"调用时间"},{type:"actions",label:"操作",slot:"actions"}],R=[{label:"详情",icon:ee,handler:t=>k(t)}];function f(){_.pageNum=1}function V(){_e("接口日志",["日志ID","请求方式","请求地址","响应状态","耗时(ms)","调用时间"],L.value.map(t=>[t.id,t.reqMethod,t.reqUrl,t.repState,t.repTime,t.createTime]))}async function E(t){Z(t)}async function k(t){const e=await se(t.id);e?(o.value=e,O.value=!0):oe.warning("未找到详情")}return(t,e)=>{const p=M("table-structure-drawer"),c=J,u=K,d=Y,g=X,P=j,F=z,H=M("card-layout"),B=M("detail-list"),y=le,G=ae,W=$;return U(),v(ge,null,[l(H,{title:"接口日志"},{"title-extra":s(()=>[l(p,{sql:i(Ne)},null,8,["sql"])]),search:s(()=>[l(c,{modelValue:n.reqMethod,"onUpdate:modelValue":e[0]||(e[0]=a=>n.reqMethod=a),placeholder:"请求方式",options:i(ne),onSearch:f},null,8,["modelValue","options"]),l(u,{modelValue:n.reqUrl,"onUpdate:modelValue":e[1]||(e[1]=a=>n.reqUrl=a),placeholder:"搜索请求地址",onSearch:f},null,8,["modelValue"]),l(d,{modelValue:n.createTime,"onUpdate:modelValue":e[2]||(e[2]=a=>n.createTime=a),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:s(()=>[l(g,{type:"success",icon:i(te),"margin-left":10,onClick:V},{default:s(()=>[...e[10]||(e[10]=[N("导出",-1)])]),_:1},8,["icon"])]),default:s(()=>[l(F,{pageNum:_.pageNum,"onUpdate:pageNum":e[3]||(e[3]=a=>_.pageNum=a),pageSize:_.pageSize,"onUpdate:pageSize":e[4]||(e[4]=a=>_.pageSize=a),data:w.value,columns:x,total:D.value,"row-key":"id","show-tool-bar":!1},{actions:s(({row:a})=>[l(P,{items:R,row:a},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total"])]),_:1}),l(W,{modelValue:O.value,"onUpdate:modelValue":e[9]||(e[9]=a=>O.value=a),title:"接口请求详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:s(()=>[o.value?(U(),v("div",Te,[l(G,{modelValue:C.value,"onUpdate:modelValue":e[8]||(e[8]=a=>C.value=a)},{default:s(()=>[l(y,{title:"基础信息",name:"basic"},{default:s(()=>[l(B,{items:q.value,column:2},null,8,["items"])]),_:1}),l(y,{title:"报文信息",name:"request"},{default:s(()=>[r("div",Oe,[r("div",Le,[r("div",Ee,[e[12]||(e[12]=r("span",{class:"detail-label"},"请求头",-1)),l(g,{link:"",type:"primary",icon:i(b),onClick:e[5]||(e[5]=a=>E(o.value.reqHeader||"-"))},{default:s(()=>[...e[11]||(e[11]=[N("复制",-1)])]),_:1},8,["icon"])]),r("pre",be,S(i(h)(o.value.reqHeader||"-")),1)]),r("div",he,[r("div",Me,[e[14]||(e[14]=r("span",{class:"detail-label"},"请求参数",-1)),l(g,{link:"",type:"primary",icon:i(b),onClick:e[6]||(e[6]=a=>E(o.value.reqParams))},{default:s(()=>[...e[13]||(e[13]=[N("复制",-1)])]),_:1},8,["icon"])]),r("pre",Se,S(i(h)(o.value.reqParams)),1)]),r("div",Ce,[r("div",fe,[e[16]||(e[16]=r("span",{class:"detail-label"},"响应数据",-1)),l(g,{link:"",type:"primary",icon:i(b),onClick:e[7]||(e[7]=a=>E(o.value.repData))},{default:s(()=>[...e[15]||(e[15]=[N("复制",-1)])]),_:1},8,["icon"])]),r("pre",ye,S(i(h)(o.value.repData)),1)])])]),_:1})]),_:1},8,["modelValue"])])):me("",!0)]),_:1},8,["modelValue"])],64)}}}),Be=Q(ve,[["__scopeId","data-v-fb906127"]]);export{Be as default};
