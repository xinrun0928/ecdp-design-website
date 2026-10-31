import{m as W,s as K,j as Y,b as J,q as Z,B as H,E as Q,i as ee,h as ae,g as se}from"./index-BGoR6y1A.js";import{br as te,bq as le,b8 as f,a as U}from"./element-plus-FTcyDTKl.js";import{g as oe,m as ne}from"./logMockApi-Ct28hWQr.js";import{f as A}from"./json-C7YhXd02.js";import{m as v}from"./search-BoGTCmM8.js";import{p as ce}from"./pagination-BHZHZx5b.js";import{e as re}from"./file-BE9knabr.js";import{a0 as _e,a1 as ie,a2 as pe}from"./subsystem-BQNqsSr5.js";import{e as ue}from"./ui-CkdNVOlu.js";import{G as ge,M as I,a0 as n,W as o,F as de,r as C,aj as M,L as m,u as i,_ as N,P as t,$ as p,O as D,Z as y,k as h,c as O}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-C6-QJwcy.js";import"./warning-BshV8eZN.js";import"./mockCrud-VGUp_ajm.js";const me=`-- Table structure for sys_access_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_access_log";
CREATE TABLE "public"."sys_access_log" (
  "access_log_id" bigint NOT NULL,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "req_url" varchar(255) COLLATE "pg_catalog"."default",
  "op_method" varchar(20) COLLATE "pg_catalog"."default",
  "ip" varchar(40) COLLATE "pg_catalog"."default",
  "location" varchar(100) COLLATE "pg_catalog"."default",
  "req_params" text COLLATE "pg_catalog"."default",
  "rep_data" text COLLATE "pg_catalog"."default",
  "rep_time" varchar(64) COLLATE "pg_catalog"."default",
  "class_name" varchar(255) COLLATE "pg_catalog"."default",
  "result" varchar(20) COLLATE "pg_catalog"."default",
  "user_name" varchar(100) COLLATE "pg_catalog"."default",
  "browser" varchar(512) COLLATE "pg_catalog"."default",
  "os" varchar(512) COLLATE "pg_catalog"."default",
  "subsystem_id" bigint DEFAULT 0,
  "module_type" integer DEFAULT 0,
  "func_type" integer DEFAULT 0,
  "op_type" integer DEFAULT 0,
  "display_order" integer DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" text COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint DEFAULT 0,
  "creater_org_name" varchar(100) COLLATE "pg_catalog"."default",
  "deleted" smallint DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_access_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_access_log"."access_log_id" IS '唯一ID';
COMMENT ON COLUMN "public"."sys_access_log"."name" IS '日志名称';
COMMENT ON COLUMN "public"."sys_access_log"."req_url" IS '请求地址';
COMMENT ON COLUMN "public"."sys_access_log"."op_method" IS '调用方法';
COMMENT ON COLUMN "public"."sys_access_log"."ip" IS '访问ip';
COMMENT ON COLUMN "public"."sys_access_log"."location" IS '地址';
COMMENT ON COLUMN "public"."sys_access_log"."req_params" IS '请求参数';
COMMENT ON COLUMN "public"."sys_access_log"."rep_data" IS '响应数据';
COMMENT ON COLUMN "public"."sys_access_log"."rep_time" IS '响应时间';
COMMENT ON COLUMN "public"."sys_access_log"."class_name" IS '访问类名';
COMMENT ON COLUMN "public"."sys_access_log"."result" IS '日志结果';
COMMENT ON COLUMN "public"."sys_access_log"."user_name" IS '用户名';
COMMENT ON COLUMN "public"."sys_access_log"."browser" IS '请求终端';
COMMENT ON COLUMN "public"."sys_access_log"."os" IS '终端系统';
COMMENT ON COLUMN "public"."sys_access_log"."subsystem_id" IS '子系统ID（SubSystemEnum.code）';
COMMENT ON COLUMN "public"."sys_access_log"."module_type" IS '模块分类';
COMMENT ON COLUMN "public"."sys_access_log"."func_type" IS '功能类型';
COMMENT ON COLUMN "public"."sys_access_log"."op_type" IS '日志类型';
COMMENT ON COLUMN "public"."sys_access_log"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_access_log"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_access_log"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_access_log"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_access_log"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_access_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_access_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_access_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_access_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_access_log"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_access_log"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_access_log"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_access_log"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_access_log" IS '系统访问日志表';

-- ----------------------------

-- Indexes structure for table sys_access_log
-- ----------------------------
CREATE INDEX "idx_sys_access_log_create_time" ON "public"."sys_access_log" USING btree (
  "create_time" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_access_log_ip" ON "public"."sys_access_log" USING btree (
  "ip" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_access_log_org_id" ON "public"."sys_access_log" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_access_log_req_url" ON "public"."sys_access_log" USING btree (
  "req_url" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_access_log_status" ON "public"."sys_access_log" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_access_log_subsystem_id" ON "public"."sys_access_log" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_access_log_user_name" ON "public"."sys_access_log" USING btree (
  "user_name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- Primary Key structure for table sys_access_log
-- ----------------------------
ALTER TABLE "public"."sys_access_log" ADD CONSTRAINT "sys_access_log_pkey" PRIMARY KEY ("access_log_id");

-- ----------------------------
`,Ne={key:0,class:"detail-content"},Oe={class:"detail-summary__main"},Le={class:"detail-summary__name"},Te={class:"detail-summary__url"},Ee={class:"detail-summary__meta"},Ce={class:"payload-section"},Me={class:"label-row"},ye={class:"json-block"},be={class:"payload-section"},Se={class:"label-row"},fe={class:"json-block"},Ue=ge({__name:"SysAccessLog",setup(Ae){const x=C(ne),L=C(!1),s=C(null),c=h({name:"",reqUrl:"",createTime:null}),r=h({pageNum:1,pageSize:20}),g=O(()=>{var e;let a=x.value;if(c.name&&(a=a.filter(_=>v(c.name,_.name))),c.reqUrl&&(a=a.filter(_=>v(c.reqUrl,_.reqUrl))),((e=c.createTime)==null?void 0:e.length)===2){const[_,d]=c.createTime;a=a.filter(T=>{const u=T.createTime.split(" ")[0];return u>=_&&u<=d})}return a}),q=O(()=>g.value.length),k=O(()=>ce(g.value,r.pageNum,r.pageSize)),w=O(()=>s.value?[{label:"日志 ID",value:s.value.id,type:"code"},{label:"访问时间",value:s.value.createTime},{label:"IP 地址",value:s.value.ip,type:"code"},{label:"客户端",value:`${s.value.browser} / ${s.value.os}`}]:[]),R=[{prop:"name",label:"日志名称",minWidth:140},{prop:"reqUrl",label:"请求地址",minWidth:240,align:"left",showOverflowTooltip:!0},{prop:"opMethod",label:"方法",width:80,cellType:"tag",tagMap:{GET:"success",POST:"",PUT:"warning",DELETE:"danger"},tagLabelMap:{GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE"}},{prop:"result",label:"结果",width:100,cellType:"tag",tagMap:ie,tagLabelMap:_e},{prop:"repTime",label:"耗时(ms)",width:90},{prop:"ip",label:"IP地址",width:130},{prop:"browser",label:"浏览器",width:100},{prop:"os",label:"操作系统",width:100},{type:"audit",prop:"createTime",label:"访问时间"},{type:"actions",label:"操作",slot:"actions"}],P=[{label:"详情",icon:te,handler:a=>F(a)}];function b(){r.pageNum=1}function V(){if(!g.value.length){U.warning(ue);return}re("访问日志",["日志ID","日志名称","请求地址","方法","结果","耗时(ms)","IP地址","浏览器","操作系统","访问时间"],g.value.map(a=>[a.id,a.name,a.reqUrl,a.opMethod,a.result,a.repTime,a.ip,a.browser,a.os,a.createTime]))}async function S(a){ae(a)}async function F(a){const e=await oe(a.id);e?(s.value=e,L.value=!0):U.warning("未找到详情")}return(a,e)=>{const _=M("table-structure-drawer"),d=Z,T=H,u=J,G=Y,B=K,$=M("card-layout"),X=ee,E=Q,z=M("detail-list"),j=W;return m(),I(de,null,[n($,{title:"访问日志"},{"title-extra":o(()=>[n(_,{sql:i(me)},null,8,["sql"])]),search:o(()=>[n(d,{modelValue:c.name,"onUpdate:modelValue":e[0]||(e[0]=l=>c.name=l),placeholder:"搜索日志名称",onSearch:b},null,8,["modelValue"]),n(d,{modelValue:c.reqUrl,"onUpdate:modelValue":e[1]||(e[1]=l=>c.reqUrl=l),placeholder:"搜索请求地址",onSearch:b},null,8,["modelValue"]),n(T,{modelValue:c.createTime,"onUpdate:modelValue":e[2]||(e[2]=l=>c.createTime=l),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:o(()=>[n(u,{type:"success",icon:i(le),"margin-left":10,onClick:V},{default:o(()=>[...e[8]||(e[8]=[N("导出",-1)])]),_:1},8,["icon"])]),default:o(()=>[n(B,{pageNum:r.pageNum,"onUpdate:pageNum":e[3]||(e[3]=l=>r.pageNum=l),pageSize:r.pageSize,"onUpdate:pageSize":e[4]||(e[4]=l=>r.pageSize=l),data:k.value,columns:R,total:q.value,"row-key":"id","show-tool-bar":!1},{actions:o(({row:l})=>[n(G,{items:P,row:l},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total"])]),_:1}),n(j,{modelValue:L.value,"onUpdate:modelValue":e[7]||(e[7]=l=>L.value=l),title:"访问日志详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:o(()=>[s.value?(m(),I("div",Ne,[n(E,{class:"detail-summary"},{default:o(()=>[t("div",Oe,[t("span",Le,p(s.value.name),1),t("span",Te,p(s.value.reqUrl),1)]),t("div",Ee,[n(X,{type:s.value.result===i(pe).SUCCESS?"success":"danger",effect:"dark",round:""},{default:o(()=>[N(p(s.value.result),1)]),_:1},8,["type"]),t("span",null,p(s.value.opMethod),1),t("span",null,p(s.value.repTime)+" ms",1)])]),_:1}),n(E,{class:"detail-section"},{header:o(()=>[...e[9]||(e[9]=[t("span",{class:"detail-section__title"},"基础信息",-1)])]),default:o(()=>[n(z,{items:w.value},null,8,["items"])]),_:1}),n(E,{class:"detail-section"},{header:o(()=>[...e[10]||(e[10]=[t("span",{class:"detail-section__title"},"报文信息",-1)])]),default:o(()=>[t("section",Ce,[t("header",Me,[e[12]||(e[12]=t("span",{class:"detail-label"},"请求参数",-1)),s.value.reqParams?(m(),D(u,{key:0,link:"",type:"primary",icon:i(f),onClick:e[5]||(e[5]=l=>S(s.value.reqParams))},{default:o(()=>[...e[11]||(e[11]=[N("复制",-1)])]),_:1},8,["icon"])):y("",!0)]),t("pre",ye,p(i(A)(s.value.reqParams||"-")),1)]),t("section",be,[t("header",Se,[e[14]||(e[14]=t("span",{class:"detail-label"},"响应数据",-1)),s.value.repData?(m(),D(u,{key:0,link:"",type:"primary",icon:i(f),onClick:e[6]||(e[6]=l=>S(s.value.repData))},{default:o(()=>[...e[13]||(e[13]=[N("复制",-1)])]),_:1},8,["icon"])):y("",!0)]),t("pre",fe,p(i(A)(s.value.repData||"-")),1)])]),_:1})])):y("",!0)]),_:1},8,["modelValue"])],64)}}}),Be=se(Ue,[["__scopeId","data-v-20efb31e"]]);export{Be as default};
