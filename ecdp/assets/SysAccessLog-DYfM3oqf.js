import{q as j,at as K,au as Y,r as Z,a as J,x as Q,aq as H,ar as ee,t as ae,av as se,y as te,U as le,A as oe,Q as f,P as ne,d as ce}from"./index-BQSjtNr4.js";import{b7 as _e,bl as re,aZ as U,a as A}from"./element-plus-Bt8i1BPk.js";import{g as ie,m as pe}from"./logMockApi-CMqKBl4X.js";import{f as v}from"./json-C7YhXd02.js";import{G as ue,aj as C,L as m,M as I,a0 as n,W as o,u as i,_ as N,P as t,$ as p,O as D,Z as y,F as ge,p as M,m as h,c as O}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";import"./mockCrud-BtS6NwdU.js";const de=`-- Table structure for sys_access_log
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
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
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
COMMENT ON COLUMN "public"."sys_access_log"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_access_log"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_access_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_access_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_access_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_access_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_access_log"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_access_log"."signature_version" IS '数据签名版本号';
COMMENT ON COLUMN "public"."sys_access_log"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."sys_access_log"."local_signature_version" IS '签名版本号（本地）';
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
`,me={key:0,class:"detail-content"},Ne={class:"detail-summary__main"},Oe={class:"detail-summary__name"},Le={class:"detail-summary__url"},Te={class:"detail-summary__meta"},Ee={class:"payload-section"},Ce={class:"label-row"},ye={class:"json-block"},Me={class:"payload-section"},be={class:"label-row"},Se={class:"json-block"},fe=ue({__name:"SysAccessLog",setup(Ue){const x=M(pe),L=M(!1),s=M(null),c=h({name:"",reqUrl:"",createTime:null}),_=h({pageNum:1,pageSize:20}),g=O(()=>{var e;let a=x.value;if(c.name&&(a=a.filter(r=>f(c.name,r.name))),c.reqUrl&&(a=a.filter(r=>f(c.reqUrl,r.reqUrl))),((e=c.createTime)==null?void 0:e.length)===2){const[r,d]=c.createTime;a=a.filter(T=>{const u=T.createTime.split(" ")[0];return u>=r&&u<=d})}return a}),q=O(()=>g.value.length),w=O(()=>ne(g.value,_.pageNum,_.pageSize)),k=O(()=>s.value?[{label:"日志 ID",value:s.value.id,type:"code"},{label:"访问时间",value:s.value.createTime},{label:"IP 地址",value:s.value.ip,type:"code"},{label:"客户端",value:`${s.value.browser} / ${s.value.os}`}]:[]),R=[{prop:"name",label:"日志名称",minWidth:140},{prop:"reqUrl",label:"请求地址",minWidth:240,align:"left",showOverflowTooltip:!0},{prop:"opMethod",label:"方法",width:80,cellType:"tag",tagMap:{GET:"success",POST:"",PUT:"warning",DELETE:"danger"},tagLabelMap:{GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE"}},{prop:"result",label:"结果",width:100,cellType:"tag",tagMap:Y,tagLabelMap:K},{prop:"repTime",label:"耗时(ms)",width:90},{prop:"ip",label:"IP地址",width:130},{prop:"browser",label:"浏览器",width:100},{prop:"os",label:"操作系统",width:100},{type:"audit",prop:"createTime",label:"访问时间"},{type:"actions",label:"操作",slot:"actions"}],P=[{label:"详情",icon:_e,handler:a=>F(a)}];function b(){_.pageNum=1}function V(){if(!g.value.length){A.warning("暂无数据可导出");return}le("访问日志",["日志ID","日志名称","请求地址","方法","结果","耗时(ms)","IP地址","浏览器","操作系统","访问时间"],g.value.map(a=>[a.id,a.name,a.reqUrl,a.opMethod,a.result,a.repTime,a.ip,a.browser,a.os,a.createTime]))}async function S(a){oe(a)}async function F(a){const e=await ie(a.id);e?(s.value=e,L.value=!0):A.warning("未找到详情")}return(a,e)=>{const r=C("table-structure-drawer"),d=Q,T=H,u=J,G=Z,$=j,B=C("panel-layout"),z=ae,E=ee,X=C("detail-list"),W=te;return m(),I(ge,null,[n(B,{title:"访问日志"},{"title-extra":o(()=>[n(r,{sql:i(de)},null,8,["sql"])]),search:o(()=>[n(d,{modelValue:c.name,"onUpdate:modelValue":e[0]||(e[0]=l=>c.name=l),placeholder:"搜索日志名称",onSearch:b},null,8,["modelValue"]),n(d,{modelValue:c.reqUrl,"onUpdate:modelValue":e[1]||(e[1]=l=>c.reqUrl=l),placeholder:"搜索请求地址",onSearch:b},null,8,["modelValue"]),n(T,{modelValue:c.createTime,"onUpdate:modelValue":e[2]||(e[2]=l=>c.createTime=l),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:o(()=>[n(u,{type:"success",icon:i(re),"margin-left":10,onClick:V},{default:o(()=>[...e[8]||(e[8]=[N("导出",-1)])]),_:1},8,["icon"])]),default:o(()=>[n($,{"page-num":_.pageNum,"onUpdate:pageNum":e[3]||(e[3]=l=>_.pageNum=l),"page-size":_.pageSize,"onUpdate:pageSize":e[4]||(e[4]=l=>_.pageSize=l),data:w.value,columns:R,total:q.value,"row-key":"id","show-tool-bar":!1},{actions:o(({row:l})=>[n(G,{items:P,row:l},null,8,["row"])]),_:1},8,["page-num","page-size","data","total"])]),_:1}),n(W,{modelValue:L.value,"onUpdate:modelValue":e[7]||(e[7]=l=>L.value=l),title:"访问日志详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:o(()=>[s.value?(m(),I("div",me,[n(E,{class:"detail-summary"},{default:o(()=>[t("div",Ne,[t("span",Oe,p(s.value.name),1),t("span",Le,p(s.value.reqUrl),1)]),t("div",Te,[n(z,{type:s.value.result===i(se).SUCCESS?"success":"danger",effect:"dark",round:""},{default:o(()=>[N(p(s.value.result),1)]),_:1},8,["type"]),t("span",null,p(s.value.opMethod),1),t("span",null,p(s.value.repTime)+" ms",1)])]),_:1}),n(E,{class:"detail-section"},{header:o(()=>[...e[9]||(e[9]=[t("span",{class:"detail-section__title"},"基础信息",-1)])]),default:o(()=>[n(X,{items:k.value},null,8,["items"])]),_:1}),n(E,{class:"detail-section"},{header:o(()=>[...e[10]||(e[10]=[t("span",{class:"detail-section__title"},"报文信息",-1)])]),default:o(()=>[t("section",Ee,[t("header",Ce,[e[12]||(e[12]=t("span",{class:"detail-label"},"请求参数",-1)),s.value.reqParams?(m(),D(u,{key:0,link:"",type:"primary",icon:i(U),onClick:e[5]||(e[5]=l=>S(s.value.reqParams))},{default:o(()=>[...e[11]||(e[11]=[N("复制",-1)])]),_:1},8,["icon"])):y("",!0)]),t("pre",ye,p(i(v)(s.value.reqParams||"-")),1)]),t("section",Me,[t("header",be,[e[14]||(e[14]=t("span",{class:"detail-label"},"响应数据",-1)),s.value.repData?(m(),D(u,{key:0,link:"",type:"primary",icon:i(U),onClick:e[6]||(e[6]=l=>S(s.value.repData))},{default:o(()=>[...e[13]||(e[13]=[N("复制",-1)])]),_:1},8,["icon"])):y("",!0)]),t("pre",Se,p(i(v)(s.value.repData||"-")),1)])]),_:1})])):y("",!0)]),_:1},8,["modelValue"])],64)}}}),Re=ce(fe,[["__scopeId","data-v-f0eadf29"]]);export{Re as default};
