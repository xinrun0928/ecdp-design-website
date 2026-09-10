import{q as z,aw as B,ax as X,r as J,a as j,w as K,x as Y,aq as Z,y as Q,U as ee,A as te,Q as ae,P as le,d as oe}from"./index-BQSjtNr4.js";import{b7 as se,bl as ne,bG as re,bH as pe,aZ as b,a as ie}from"./element-plus-Bt8i1BPk.js";/* empty css                         */import{a as _e,b as de}from"./logMockApi-CMqKBl4X.js";import{h as ce}from"./common-CRcHQUfu.js";import{f as h}from"./json-C7YhXd02.js";import{G as ue,aj as M,L as v,M as U,a0 as l,W as s,u as i,_ as m,P as n,$ as C,Z as ge,F as me,p as N,c as T,m as A}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";import"./mockCrud-BtS6NwdU.js";const Ne=`-- Table structure for sys_http_log
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
`,Te={key:0,class:"detail-content"},Oe={class:"detail-grid"},Le={class:"detail-item full-width"},Ee={class:"label-row"},be={class:"json-block"},he={class:"detail-item full-width"},Me={class:"label-row"},Ce={class:"json-block"},Se={class:"detail-item full-width"},ye={class:"label-row"},fe={class:"json-block"},ve=ue({__name:"SysHttpLog",setup(Ue){const I=N(de),O=N(!1),o=N(null),S=N(["basic","request"]),q=T(()=>{var t,e,p,c,u,d;return[{label:"日志ID",value:(t=o.value)==null?void 0:t.id,type:"code"},{label:"请求方式",value:(e=o.value)==null?void 0:e.reqMethod},{label:"请求地址",value:(p=o.value)==null?void 0:p.reqUrl,type:"code",fullWidth:!0},{label:"响应状态",value:(c=o.value)==null?void 0:c.repState},{label:"耗时",value:(u=o.value)!=null&&u.repTime?`${o.value.repTime} ms`:void 0},{label:"调用时间",value:(d=o.value)==null?void 0:d.createTime,fullWidth:!0}]}),r=A({reqMethod:"",reqUrl:"",createTime:null}),_=A({pageNum:1,pageSize:20}),L=T(()=>{var e;let t=I.value;if(r.reqMethod&&(t=t.filter(p=>p.reqMethod===r.reqMethod)),r.reqUrl&&(t=t.filter(p=>ae(r.reqUrl,p.reqUrl))),((e=r.createTime)==null?void 0:e.length)===2){const[p,c]=r.createTime;t=t.filter(u=>{const d=u.createTime.split(" ")[0];return d>=p&&d<=c})}return t}),D=T(()=>L.value.length),x=T(()=>le(L.value,_.pageNum,_.pageSize)),w=[{prop:"id",label:"日志ID",width:120,cellType:"code"},{prop:"reqMethod",label:"请求方式",width:100,cellType:"tag",tagMap:{GET:"success",POST:"",POST_FORM:"",POST_JSON:"",PUT:"warning",DELETE:"danger"},tagLabelMap:{GET:"GET",POST:"POST",POST_FORM:"POST_FORM",POST_JSON:"POST_JSON",PUT:"PUT",DELETE:"DELETE"}},{prop:"reqUrl",label:"请求地址",minWidth:300,align:"left",showOverflowTooltip:!0},{prop:"repState",label:"响应状态",width:100,cellType:"tag",tagMap:X,tagLabelMap:B},{prop:"repTime",label:"耗时(ms)",width:90},{type:"audit",prop:"createTime",label:"调用时间"},{type:"actions",label:"操作",slot:"actions"}],R=[{label:"详情",icon:se,handler:t=>P(t)}];function y(){_.pageNum=1}function V(){ee("接口日志",["日志ID","请求方式","请求地址","响应状态","耗时(ms)","调用时间"],L.value.map(t=>[t.id,t.reqMethod,t.reqUrl,t.repState,t.repTime,t.createTime]))}async function E(t){te(t)}async function P(t){const e=await _e(t.id);e?(o.value=e,O.value=!0):ie.warning("未找到详情")}return(t,e)=>{const p=M("table-structure-drawer"),c=K,u=Y,d=Z,g=j,k=J,F=z,H=M("panel-layout"),G=M("detail-list"),f=pe,W=re,$=Q;return v(),U(me,null,[l(H,{title:"接口日志"},{"title-extra":s(()=>[l(p,{sql:i(Ne)},null,8,["sql"])]),search:s(()=>[l(c,{modelValue:r.reqMethod,"onUpdate:modelValue":e[0]||(e[0]=a=>r.reqMethod=a),placeholder:"请求方式",options:i(ce),onSearch:y},null,8,["modelValue","options"]),l(u,{modelValue:r.reqUrl,"onUpdate:modelValue":e[1]||(e[1]=a=>r.reqUrl=a),placeholder:"搜索请求地址",onSearch:y},null,8,["modelValue"]),l(d,{modelValue:r.createTime,"onUpdate:modelValue":e[2]||(e[2]=a=>r.createTime=a),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:s(()=>[l(g,{type:"success",icon:i(ne),"margin-left":10,onClick:V},{default:s(()=>[...e[10]||(e[10]=[m("导出",-1)])]),_:1},8,["icon"])]),default:s(()=>[l(F,{"page-num":_.pageNum,"onUpdate:pageNum":e[3]||(e[3]=a=>_.pageNum=a),"page-size":_.pageSize,"onUpdate:pageSize":e[4]||(e[4]=a=>_.pageSize=a),data:x.value,columns:w,total:D.value,"row-key":"id","show-tool-bar":!1},{actions:s(({row:a})=>[l(k,{items:R,row:a},null,8,["row"])]),_:1},8,["page-num","page-size","data","total"])]),_:1}),l($,{modelValue:O.value,"onUpdate:modelValue":e[9]||(e[9]=a=>O.value=a),title:"接口请求详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:s(()=>[o.value?(v(),U("div",Te,[l(W,{modelValue:S.value,"onUpdate:modelValue":e[8]||(e[8]=a=>S.value=a)},{default:s(()=>[l(f,{title:"基础信息",name:"basic"},{default:s(()=>[l(G,{items:q.value,column:2},null,8,["items"])]),_:1}),l(f,{title:"报文信息",name:"request"},{default:s(()=>[n("div",Oe,[n("div",Le,[n("div",Ee,[e[12]||(e[12]=n("span",{class:"detail-label"},"请求头",-1)),l(g,{link:"",type:"primary",icon:i(b),onClick:e[5]||(e[5]=a=>E(o.value.reqHeader||"-"))},{default:s(()=>[...e[11]||(e[11]=[m("复制",-1)])]),_:1},8,["icon"])]),n("pre",be,C(i(h)(o.value.reqHeader||"-")),1)]),n("div",he,[n("div",Me,[e[14]||(e[14]=n("span",{class:"detail-label"},"请求参数",-1)),l(g,{link:"",type:"primary",icon:i(b),onClick:e[6]||(e[6]=a=>E(o.value.reqParams))},{default:s(()=>[...e[13]||(e[13]=[m("复制",-1)])]),_:1},8,["icon"])]),n("pre",Ce,C(i(h)(o.value.reqParams)),1)]),n("div",Se,[n("div",ye,[e[16]||(e[16]=n("span",{class:"detail-label"},"响应数据",-1)),l(g,{link:"",type:"primary",icon:i(b),onClick:e[7]||(e[7]=a=>E(o.value.repData))},{default:s(()=>[...e[15]||(e[15]=[m("复制",-1)])]),_:1},8,["icon"])]),n("pre",fe,C(i(h)(o.value.repData)),1)])])]),_:1})]),_:1},8,["modelValue"])])):ge("",!0)]),_:1},8,["modelValue"])],64)}}}),He=oe(ve,[["__scopeId","data-v-583a680c"]]);export{He as default};
