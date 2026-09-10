import{l as P,i as B,j as G,p as z,f as $,n as W}from"./index-Dz8cBk7z.js";import{F as j,aD as K,aE as X,a4 as Y}from"./element-plus-D60thvil.js";/* empty css                     */import{r as s,s as H}from"./randomMock-BnXBY1mw.js";import{f as b}from"./floodMessageTemplateData-Cx6_KDoL.js";import{u as J}from"./useMockTablePage-Cliqp1A6.js";import{G as Q,M as Z,a0 as a,W as r,F as ee,j as u,aj as L,L as le,v as n,q as ae,c as te}from"./vue-vendor-Dq7Ldkyc.js";import"./pagination-BbYzDLaW.js";const oe=`-- Table structure for flood_message_rule
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_message_rule";
CREATE TABLE "public"."flood_message_rule" (
  "rule_id" bigint NOT NULL,
  "rule_name" varchar(100) COLLATE "pg_catalog"."default",
  "reminder_type" varchar(20) COLLATE "pg_catalog"."default",
  "hours" integer DEFAULT 1,
  "template_id" bigint,
  "template_name" varchar(100) COLLATE "pg_catalog"."default",
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "status" smallint DEFAULT 1101,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 0
)
;
ALTER TABLE "public"."flood_message_rule" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_message_rule"."rule_id" IS '规则ID';
COMMENT ON COLUMN "public"."flood_message_rule"."rule_name" IS '规则名称';
COMMENT ON COLUMN "public"."flood_message_rule"."reminder_type" IS '提醒类型';
COMMENT ON COLUMN "public"."flood_message_rule"."hours" IS '提前/超时时间（小时）';
COMMENT ON COLUMN "public"."flood_message_rule"."template_id" IS '关联消息模版ID';
COMMENT ON COLUMN "public"."flood_message_rule"."template_name" IS '消息模版名称';
COMMENT ON COLUMN "public"."flood_message_rule"."remark" IS '备注';
COMMENT ON COLUMN "public"."flood_message_rule"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_message_rule"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_message_rule"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_message_rule"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_message_rule"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_message_rule"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_message_rule"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_message_rule"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_message_rule"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_message_rule"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_message_rule" IS '消息推送规则表';

-- ----------------------------

-- Indexes structure for table flood_message_rule
-- ----------------------------
CREATE INDEX "idx_flood_message_rule_deleted" ON "public"."flood_message_rule" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_flood_message_rule_template_id" ON "public"."flood_message_rule" USING btree (
  "template_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_message_rule
-- ----------------------------
ALTER TABLE "public"."flood_message_rule" ADD CONSTRAINT "flood_message_rule_pkey" PRIMARY KEY ("rule_id");

-- ----------------------------
`,re=[{ruleId:1,ruleName:"任务生成时提前提醒",reminderType:"ADVANCE",hours:1,templateId:12,templateName:"巡查提醒：起止桩号单位已响应",status:1101,...s()},{ruleId:2,ruleName:"任务生成后超时提醒",reminderType:"OVERTIME",hours:1,templateId:17,templateName:"巡查提醒：已超过1小时未巡查将影响考核",status:1101,...s()},{ruleId:3,ruleName:"执行间隔超时提醒",reminderType:"INTERVAL",hours:2,templateId:14,templateName:"巡查提醒：已超过2小时未巡查不达标",status:1101,...s()},{ruleId:4,ruleName:"任务生成后未完成提醒",reminderType:"PENDING",hours:1,templateId:13,templateName:"巡查提醒：已超过1小时未巡查",status:1101,...s()}],ne=[{label:"任务生成时提前提醒",value:"ADVANCE"},{label:"任务生成后超时提醒",value:"OVERTIME"},{label:"执行间隔超时提醒",value:"INTERVAL"},{label:"任务生成后未完成提醒",value:"PENDING"}],fe=Q({__name:"MessageRule",setup(ue){const{loading:C,pagination:d,searchKeyword:g,pagedData:v,total:A,handleSearch:U,upsertItem:f}=J({initialData:[...re],keywordFields:["ruleName"]}),S=te(()=>b.filter(o=>o.status===1).map(o=>({label:`${o.template||"未命名"}（${o.templateId}）`,value:o.messageTemplateId}))),i=u(!1),c=u(!1),E=u(!1),T=u(),O=u(null),t=u({...{ruleName:"",reminderType:"ADVANCE",hours:1,templateId:0,templateName:"",status:1101,remark:""}}),V={ruleName:[{required:!0,message:"请输入规则名称",trigger:"blur"}],reminderType:[{required:!0,message:"请选择提醒类型",trigger:"change"}],hours:[{required:!0,message:"请输入时间",trigger:"blur"}],templateId:[{required:!0,message:"请选择消息模版",trigger:"change"}]},y=[{prop:"ruleName",label:"规则名称",minWidth:150,showOverflowTooltip:!0},{prop:"reminderType",label:"提醒类型",width:160,align:"center",cellType:"tag",tagMap:{ADVANCE:"",OVERTIME:"warning",INTERVAL:"danger",PENDING:"info"},tagLabelMap:{ADVANCE:"任务生成时提前提醒",OVERTIME:"任务生成后超时提醒",INTERVAL:"执行间隔超时提醒",PENDING:"任务生成后未完成提醒"}},{prop:"hours",label:"时间(小时)",width:100,align:"center"},{prop:"templateName",label:"消息模版",minWidth:150,showOverflowTooltip:!0},{prop:"status",label:"状态",width:80,align:"center",cellType:"tag",tagMap:{1101:"success",1102:"info"},tagLabelMap:{1101:"启用",1102:"停用"}},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],h=[{label:"编辑",icon:j,handler:o=>D(o)}];function D(o){c.value=!0,t.value={...H(o)},i.value=!0}async function R(){var e;if(await((e=T.value)==null?void 0:e.validate().catch(()=>!1))){E.value=!0;try{const m=b.find(N=>N.messageTemplateId===t.value.templateId),_={...t.value,templateName:(m==null?void 0:m.template)||""};c.value&&O.value?f({..._,ruleId:O.value.ruleId,...s()},"ruleId"):f({..._,ruleId:Date.now(),...s()},"ruleId"),i.value=!1}finally{E.value=!1}}}return(o,e)=>{const m=L("table-structure-drawer"),_=z,N=G,w=B,F=L("panel-layout"),I=Y,p=X,M=$,k=W,x=K,q=P;return le(),Z(ee,null,[a(F,{title:"消息推送规则管理"},{"title-extra":r(()=>[a(m,{sql:n(oe)},null,8,["sql"])]),search:r(()=>[a(_,{modelValue:n(g),"onUpdate:modelValue":e[0]||(e[0]=l=>ae(g)?g.value=l:null),placeholder:"搜索规则名称",onSearch:n(U)},null,8,["modelValue","onSearch"])]),default:r(()=>[a(w,{"page-num":n(d).pageNum,"onUpdate:pageNum":e[1]||(e[1]=l=>n(d).pageNum=l),"page-size":n(d).pageSize,"onUpdate:pageSize":e[2]||(e[2]=l=>n(d).pageSize=l),data:n(v),columns:y,total:n(A),loading:n(C),"row-key":"ruleId","show-tool-bar":!1},{actions:r(({row:l})=>[a(N,{items:h,row:l},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),a(q,{modelValue:i.value,"onUpdate:modelValue":e[8]||(e[8]=l=>i.value=l),title:c.value?"编辑规则":"新增规则",direction:"rtl",size:"580px","destroy-on-close":"","on-confirm":R},{default:r(()=>[a(x,{ref_key:"formRef",ref:T,model:t.value,rules:V,"label-width":"120px"},{default:r(()=>[a(p,{label:"规则名称",prop:"ruleName"},{default:r(()=>[a(I,{modelValue:t.value.ruleName,"onUpdate:modelValue":e[3]||(e[3]=l=>t.value.ruleName=l),placeholder:"请输入规则名称"},null,8,["modelValue"])]),_:1}),a(p,{label:"提醒类型",prop:"reminderType"},{default:r(()=>[a(M,{modelValue:t.value.reminderType,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value.reminderType=l),options:n(ne),placeholder:"请选择提醒类型"},null,8,["modelValue","options"])]),_:1}),a(p,{label:"时间(小时)",prop:"hours"},{default:r(()=>[a(k,{modelValue:t.value.hours,"onUpdate:modelValue":e[5]||(e[5]=l=>t.value.hours=l),min:0,max:24,placeholder:"请输入小时数"},null,8,["modelValue"])]),_:1}),a(p,{label:"消息模版",prop:"templateId"},{default:r(()=>[a(M,{modelValue:t.value.templateId,"onUpdate:modelValue":e[6]||(e[6]=l=>t.value.templateId=l),options:S.value,placeholder:"请选择消息模版"},null,8,["modelValue","options"])]),_:1}),a(p,{label:"备注",prop:"remark"},{default:r(()=>[a(I,{modelValue:t.value.remark,"onUpdate:modelValue":e[7]||(e[7]=l=>t.value.remark=l),type:"textarea",rows:3,placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}});export{fe as default};
