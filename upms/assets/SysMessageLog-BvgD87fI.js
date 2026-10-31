import{m as j,s as K,j as Y,i as J,b as Z,q as Q,B as ee,E as se,h as te,g as ae}from"./index-BGoR6y1A.js";import{br as le,k as ne,bq as oe,b8 as I,a as d}from"./element-plus-FTcyDTKl.js";import{e as _e,f as ie}from"./logMockApi-Ct28hWQr.js";import{f as U}from"./json-C7YhXd02.js";import{e as re}from"./file-BE9knabr.js";import{m as pe}from"./search-BoGTCmM8.js";import{p as ce}from"./pagination-BHZHZx5b.js";import{af as m,ag as ge,a3 as A}from"./subsystem-BQNqsSr5.js";import{e as ue}from"./ui-CkdNVOlu.js";import{G as de,M as v,a0 as l,W as a,F as me,r as y,aj as C,L as h,u as _,_ as u,$ as r,P as n,Z as Ne,c as N,k as D}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-C6-QJwcy.js";import"./warning-BshV8eZN.js";import"./mockCrud-VGUp_ajm.js";const Le=`-- Table structure for sys_message_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_message_log";
CREATE TABLE "public"."sys_message_log" (
  "message_id" bigint NOT NULL,
  "template_id" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "phone" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "content" text COLLATE "pg_catalog"."default" NOT NULL,
  "req_headers" text COLLATE "pg_catalog"."default",
  "reply_text" text COLLATE "pg_catalog"."default",
  "display_order" integer DEFAULT 0,
  "status" smallint DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_message_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_message_log"."message_id" IS '消息ID';
COMMENT ON COLUMN "public"."sys_message_log"."template_id" IS '模版ID';
COMMENT ON COLUMN "public"."sys_message_log"."phone" IS '手机号码';
COMMENT ON COLUMN "public"."sys_message_log"."content" IS '消息内容';
COMMENT ON COLUMN "public"."sys_message_log"."req_headers" IS '请求头';
COMMENT ON COLUMN "public"."sys_message_log"."reply_text" IS '消息回复';
COMMENT ON COLUMN "public"."sys_message_log"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_message_log"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_message_log"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_message_log"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_message_log"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_message_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_message_log"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_message_log"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_message_log"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_message_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_message_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_message_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_message_log"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_message_log"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_message_log"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_message_log"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_message_log" IS '系统短信消息记录表';

-- ----------------------------

-- Indexes structure for table sys_message_log
-- ----------------------------
CREATE INDEX "idx_sys_message_log_create_time" ON "public"."sys_message_log" USING btree (
  "create_time" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_message_log_org_id" ON "public"."sys_message_log" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_message_log_phone" ON "public"."sys_message_log" USING btree (
  "phone" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE phone IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_message_log_status" ON "public"."sys_message_log" USING btree (
  "status" "pg_catalog"."int2_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_message_log_template_id" ON "public"."sys_message_log" USING btree (
  "template_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE template_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_message_log
-- ----------------------------
ALTER TABLE "public"."sys_message_log" ADD CONSTRAINT "sys_message_log_pkey" PRIMARY KEY ("message_id");

-- ----------------------------
`,Oe={class:"content-text"},Te={key:0,class:"detail-content"},Ee={class:"detail-summary__main"},Me={class:"detail-summary__name"},ye={class:"detail-summary__url"},Ce={class:"detail-summary__meta"},fe={class:"payload-section"},Se={class:"label-row"},be={class:"json-block"},Ie={class:"payload-section"},Ue={class:"label-row"},Ae={class:"json-block"},ve=de({__name:"SysMessageLog",setup(he){const x=y(ie),L=y(!1),o=y(null),R=N(()=>{var s;return[{label:"消息内容",value:(s=o.value)==null?void 0:s.content,fullWidth:!0}]}),i=D({phone:"",createTime:null}),p=D({pageNum:1,pageSize:20}),f=N(()=>{var e;let s=x.value;if(i.phone&&(s=s.filter(g=>pe(i.phone,g.phone))),((e=i.createTime)==null?void 0:e.length)===2){const[g,T]=i.createTime;s=s.filter(E=>{const c=E.createTime.split(" ")[0];return c>=g&&c<=T})}return s}),k=N(()=>f.value.length),O=N(()=>ce(f.value,p.pageNum,p.pageSize)),w=[{prop:"messageId",label:"消息ID",width:180},{prop:"templateId",label:"模板ID",width:110},{prop:"phone",label:"手机号",width:130},{prop:"content",label:"内容",minWidth:180,slot:"content"},{prop:"status",label:"发送状态",width:100,cellType:"tag",tagMap:ge,tagLabelMap:m},{type:"audit",prop:"createTime",label:"发送时间"},{type:"actions",label:"操作",slot:"actions"}],V=[{label:"详情",icon:le,handler:s=>$(s)}];function F(s){return s?s.length<=20?s:s.slice(0,20)+"...":"-"}async function S(s){te(s??"")}function q(){p.pageNum=1}function B(){if(!O.value.length){d.warning(ue);return}re(`短信日志_${new Date().toISOString().slice(0,10)}.csv`,["手机号","模板ID","内容","发送状态","消息ID","发送时间"],O.value.map(s=>[s.phone,s.templateId,s.content,m[s.status]||"未知",s.messageId,s.createTime])),d.success("导出成功")}async function $(s){try{const e=await _e(s.messageId);e?(o.value=e,L.value=!0):d.warning("未找到该条记录的详细信息")}catch(e){console.warn("操作失败:",e),d.error("获取详情失败，请重试")}}return(s,e)=>{const g=C("table-structure-drawer"),T=Q,E=ee,c=Z,z=ne,b=J,P=Y,W=K,G=C("card-layout"),M=se,X=C("detail-list"),H=j;return h(),v(me,null,[l(G,{title:"短信日志"},{"title-extra":a(()=>[l(g,{sql:_(Le)},null,8,["sql"])]),search:a(()=>[l(T,{modelValue:i.phone,"onUpdate:modelValue":e[0]||(e[0]=t=>i.phone=t),placeholder:"搜索手机号码",onSearch:q},null,8,["modelValue"]),l(E,{modelValue:i.createTime,"onUpdate:modelValue":e[1]||(e[1]=t=>i.createTime=t),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:a(()=>[l(c,{type:"success",icon:_(oe),"margin-left":10,onClick:B},{default:a(()=>[...e[7]||(e[7]=[u("导出",-1)])]),_:1},8,["icon"])]),default:a(()=>[l(W,{pageNum:p.pageNum,"onUpdate:pageNum":e[2]||(e[2]=t=>p.pageNum=t),pageSize:p.pageSize,"onUpdate:pageSize":e[3]||(e[3]=t=>p.pageSize=t),data:O.value,columns:w,total:k.value,"row-key":"messageId","show-tool-bar":!1},{content:a(({row:t})=>[l(z,{content:t.content,placement:"top","show-after":300,disabled:t.content.length<=20},{default:a(()=>[n("span",Oe,r(F(t.content)),1)]),_:2},1032,["content","disabled"])]),status:a(({row:t})=>[l(b,{type:t.status===_(A).SUCCESS?"success":"danger",effect:"dark",round:""},{default:a(()=>[u(r(_(m)[t.status]||"未知"),1)]),_:2},1032,["type"])]),actions:a(({row:t})=>[l(P,{items:V,row:t},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total"])]),_:1}),l(H,{modelValue:L.value,"onUpdate:modelValue":e[6]||(e[6]=t=>L.value=t),title:"短信消息详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:a(()=>[o.value?(h(),v("div",Te,[l(M,{class:"detail-summary"},{default:a(()=>[n("div",Ee,[n("span",Me,r(o.value.phone),1),n("span",ye,r(o.value.messageId),1)]),n("div",Ce,[l(b,{type:o.value.status===_(A).SUCCESS?"success":"danger",effect:"dark",round:""},{default:a(()=>[u(r(_(m)[o.value.status]||"未知"),1)]),_:1},8,["type"]),n("span",null,r(o.value.templateId),1)])]),_:1}),l(M,{class:"detail-section"},{header:a(()=>[...e[8]||(e[8]=[n("span",{class:"detail-section__title"},"消息内容",-1)])]),default:a(()=>[l(X,{items:R.value,column:1},null,8,["items"])]),_:1}),l(M,{class:"detail-section"},{header:a(()=>[...e[9]||(e[9]=[n("span",{class:"detail-section__title"},"报文信息",-1)])]),default:a(()=>[n("section",fe,[n("header",Se,[e[11]||(e[11]=n("span",{class:"detail-label"},"请求头",-1)),l(c,{link:"",type:"primary",icon:_(I),onClick:e[4]||(e[4]=t=>S(o.value.reqHeaders))},{default:a(()=>[...e[10]||(e[10]=[u("复制",-1)])]),_:1},8,["icon"])]),n("pre",be,r(_(U)(o.value.reqHeaders||"-")),1)]),n("section",Ie,[n("header",Ue,[e[13]||(e[13]=n("span",{class:"detail-label"},"第三方回复",-1)),l(c,{link:"",type:"primary",icon:_(I),onClick:e[5]||(e[5]=t=>S(o.value.replyText))},{default:a(()=>[...e[12]||(e[12]=[u("复制",-1)])]),_:1},8,["icon"])]),n("pre",Ae,r(_(U)(o.value.replyText||"-")),1)])]),_:1})])):Ne("",!0)]),_:1},8,["modelValue"])],64)}}}),Ge=ae(ve,[["__scopeId","data-v-b980fe30"]]);export{Ge as default};
