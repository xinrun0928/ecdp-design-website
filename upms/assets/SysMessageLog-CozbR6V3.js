import{r as K,j as Y,i as J,a as Q,q as Z,y as ee,z as se,h as te,m as ae,f as le}from"./index-DTgluf9T.js";import{aY as ne,k as oe,aX as _e,aQ as U,a as N}from"./element-plus-D2VbkOFi.js";import{e as ie,f as re}from"./logMockApi-CcIUnKpP.js";import{f as A}from"./json-C7YhXd02.js";import{e as pe}from"./file-DT4GqAgJ.js";import{m as ce}from"./search-BoGTCmM8.js";import{p as ge}from"./pagination-BHZHZx5b.js";import{G as ue,L as v,M as h,a0 as l,W as a,_ as d,$ as i,P as n,u as g,Z as de,F as me,r as M,c as L,k as D,aj as S}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-5mY5cPlO.js";import"./mockCrud-De7qt4nP.js";const Ne=`-- Table structure for sys_message_log
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
COMMENT ON COLUMN "public"."sys_message_log"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."sys_message_log"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON COLUMN "public"."sys_message_log"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_message_log"."signature_version" IS '数据签名版本号';
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
`,Le={class:"content-text"},Oe={key:0,class:"detail-content"},Te={class:"detail-summary__main"},Ce={class:"detail-summary__name"},Ee={class:"detail-summary__url"},ye={class:"detail-summary__meta"},Me={class:"payload-section"},Se={class:"label-row"},fe={class:"json-block"},be={class:"payload-section"},Ie={class:"label-row"},Ue={class:"json-block"},Ae=ue({__name:"SysMessageLog",setup(ve){const p={SUCCESS:1101,FAIL:1102},x={[p.SUCCESS]:"success",[p.FAIL]:"danger"},m={[p.SUCCESS]:"发送成功",[p.FAIL]:"发送失败"},R=M(re),O=M(!1),o=M(null),k=L(()=>{var s;return[{label:"消息内容",value:(s=o.value)==null?void 0:s.content,fullWidth:!0}]}),_=D({phone:"",createTime:null}),r=D({pageNum:1,pageSize:20}),f=L(()=>{var e;let s=R.value;if(_.phone&&(s=s.filter(u=>ce(_.phone,u.phone))),((e=_.createTime)==null?void 0:e.length)===2){const[u,C]=_.createTime;s=s.filter(E=>{const c=E.createTime.split(" ")[0];return c>=u&&c<=C})}return s}),w=L(()=>f.value.length),T=L(()=>ge(f.value,r.pageNum,r.pageSize)),V=[{prop:"messageId",label:"消息ID",width:180},{prop:"templateId",label:"模板ID",width:110},{prop:"phone",label:"手机号",width:130},{prop:"content",label:"内容",minWidth:180,slot:"content"},{prop:"status",label:"发送状态",width:100,cellType:"tag",tagMap:x,tagLabelMap:m},{type:"audit",prop:"createTime",label:"发送时间"},{type:"actions",label:"操作",slot:"actions"}],F=[{label:"详情",icon:ne,handler:s=>B(s)}];function z(s){return s?s.length<=20?s:s.slice(0,20)+"...":"-"}async function b(s){te(s??"")}function $(){r.pageNum=1}function q(){if(!T.value.length){N.warning("暂无数据可导出");return}pe(`短信日志_${new Date().toISOString().slice(0,10)}.csv`,["手机号","模板ID","内容","发送状态","消息ID","发送时间"],T.value.map(s=>[s.phone,s.templateId,s.content,m[s.status]||"未知",s.messageId,s.createTime])),N.success("导出成功")}async function B(s){try{const e=await ie(s.messageId);e?(o.value=e,O.value=!0):N.warning("未找到该条记录的详细信息")}catch(e){console.warn("操作失败:",e),N.error("获取详情失败，请重试")}}return(s,e)=>{const u=S("table-structure-drawer"),C=Z,E=ee,c=Q,W=oe,I=J,X=Y,G=K,H=S("panel-layout"),y=se,P=S("detail-list"),j=ae;return v(),h(me,null,[l(H,{title:"短信日志"},{"title-extra":a(()=>[l(u,{sql:g(Ne)},null,8,["sql"])]),search:a(()=>[l(C,{modelValue:_.phone,"onUpdate:modelValue":e[0]||(e[0]=t=>_.phone=t),placeholder:"搜索手机号码",onSearch:$},null,8,["modelValue"]),l(E,{modelValue:_.createTime,"onUpdate:modelValue":e[1]||(e[1]=t=>_.createTime=t),"start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])]),actions:a(()=>[l(c,{type:"success",icon:g(_e),"margin-left":10,onClick:q},{default:a(()=>[...e[7]||(e[7]=[d("导出",-1)])]),_:1},8,["icon"])]),default:a(()=>[l(G,{"page-num":r.pageNum,"onUpdate:pageNum":e[2]||(e[2]=t=>r.pageNum=t),"page-size":r.pageSize,"onUpdate:pageSize":e[3]||(e[3]=t=>r.pageSize=t),data:T.value,columns:V,total:w.value,"row-key":"messageId","show-tool-bar":!1},{content:a(({row:t})=>[l(W,{content:t.content,placement:"top","show-after":300,disabled:t.content.length<=20},{default:a(()=>[n("span",Le,i(z(t.content)),1)]),_:2},1032,["content","disabled"])]),status:a(({row:t})=>[l(I,{type:t.status===p.SUCCESS?"success":"danger",effect:"dark",round:""},{default:a(()=>[d(i(m[t.status]||"未知"),1)]),_:2},1032,["type"])]),actions:a(({row:t})=>[l(X,{items:F,row:t},null,8,["row"])]),_:1},8,["page-num","page-size","data","total"])]),_:1}),l(j,{modelValue:O.value,"onUpdate:modelValue":e[6]||(e[6]=t=>O.value=t),title:"短信消息详情",direction:"rtl",size:"580px","destroy-on-close":"","hide-footer":!0},{default:a(()=>[o.value?(v(),h("div",Oe,[l(y,{class:"detail-summary"},{default:a(()=>[n("div",Te,[n("span",Ce,i(o.value.phone),1),n("span",Ee,i(o.value.messageId),1)]),n("div",ye,[l(I,{type:o.value.status===p.SUCCESS?"success":"danger",effect:"dark",round:""},{default:a(()=>[d(i(m[o.value.status]||"未知"),1)]),_:1},8,["type"]),n("span",null,i(o.value.templateId),1)])]),_:1}),l(y,{class:"detail-section"},{header:a(()=>[...e[8]||(e[8]=[n("span",{class:"detail-section__title"},"消息内容",-1)])]),default:a(()=>[l(P,{items:k.value,column:1},null,8,["items"])]),_:1}),l(y,{class:"detail-section"},{header:a(()=>[...e[9]||(e[9]=[n("span",{class:"detail-section__title"},"报文信息",-1)])]),default:a(()=>[n("section",Me,[n("header",Se,[e[11]||(e[11]=n("span",{class:"detail-label"},"请求头",-1)),l(c,{link:"",type:"primary",icon:g(U),onClick:e[4]||(e[4]=t=>b(o.value.reqHeaders))},{default:a(()=>[...e[10]||(e[10]=[d("复制",-1)])]),_:1},8,["icon"])]),n("pre",fe,i(g(A)(o.value.reqHeaders||"-")),1)]),n("section",be,[n("header",Ie,[e[13]||(e[13]=n("span",{class:"detail-label"},"第三方回复",-1)),l(c,{link:"",type:"primary",icon:g(U),onClick:e[5]||(e[5]=t=>b(o.value.replyText))},{default:a(()=>[...e[12]||(e[12]=[d("复制",-1)])]),_:1},8,["icon"])]),n("pre",Ue,i(g(A)(o.value.replyText||"-")),1)])]),_:1})])):de("",!0)]),_:1},8,["modelValue"])],64)}}}),qe=le(Ae,[["__scopeId","data-v-2a6ec05e"]]);export{qe as default};
