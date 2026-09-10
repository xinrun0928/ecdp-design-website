import{l as oe,i as ne,j as pe,a as ie,p as de,q as me,s as re,k as _e,e as ue,b as ce}from"./index-Dz8cBk7z.js";import{z as ge,aO as fe,aD as Oe,aE as ve,a4 as Ne,ar as N,p as x}from"./element-plus-D60thvil.js";/* empty css                     */import{f as Me}from"./floodMessageTemplateData-Cx6_KDoL.js";import{r as be}from"./randomMock-BnXBY1mw.js";import{f as D}from"./json-C7YhXd02.js";import{u as Te}from"./useMockTablePage-Cliqp1A6.js";import{G as Ce,M as c,a0 as o,W as a,F as k,j as M,aj as E,L as d,v as n,_,q as Le,P as t,$ as m,ae as Ee,Z as g,O as I,c as h,u as Ie}from"./vue-vendor-Dq7Ldkyc.js";import"./pagination-BbYzDLaW.js";const ye=`DROP TABLE IF EXISTS "public"."flood_message_template";
CREATE TABLE "public"."flood_message_template" (
  "message_template_id" bigint NOT NULL,
  "template_id" varchar(50) COLLATE "pg_catalog"."default",
  "msg_id" varchar(100) COLLATE "pg_catalog"."default",
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "template" text COLLATE "pg_catalog"."default",
  "content" text COLLATE "pg_catalog"."default",
  "ext_json" text COLLATE "pg_catalog"."default",
  "approval_json" text COLLATE "pg_catalog"."default",
  "status" smallint DEFAULT 0,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "creater_org_id" bigint,
  "creater_org_name" varchar(100) COLLATE "pg_catalog"."default",
  "deleted" smallint DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."flood_message_template" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_message_template"."message_template_id" IS '消息模板ID';
COMMENT ON COLUMN "public"."flood_message_template"."template_id" IS '模板编号';
COMMENT ON COLUMN "public"."flood_message_template"."msg_id" IS '消息ID';
COMMENT ON COLUMN "public"."flood_message_template"."name" IS '模板名称';
COMMENT ON COLUMN "public"."flood_message_template"."template" IS '短信模板内容';
COMMENT ON COLUMN "public"."flood_message_template"."content" IS '消息内容';
COMMENT ON COLUMN "public"."flood_message_template"."ext_json" IS '扩展信息（JSON格式）';
COMMENT ON COLUMN "public"."flood_message_template"."approval_json" IS '审批信息（JSON格式）';
COMMENT ON COLUMN "public"."flood_message_template"."status" IS '状态（0-未审核 1-已审核）';
COMMENT ON COLUMN "public"."flood_message_template"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_message_template"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."flood_message_template"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_message_template"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_message_template"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."flood_message_template"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_message_template"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."flood_message_template"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."flood_message_template"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_message_template"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_message_template"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON COLUMN "public"."flood_message_template"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_message_template"."signature_version" IS '签名版本号';
COMMENT ON TABLE "public"."flood_message_template" IS '短信模板表';

CREATE INDEX "idx_flood_message_template_deleted" ON "public"."flood_message_template" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

ALTER TABLE "public"."flood_message_template" ADD CONSTRAINT "flood_message_template_pkey" PRIMARY KEY ("message_template_id");
`,Se=[{label:"未审核",value:0},{label:"已审核",value:1}],y={0:"未审核",1:"已审核"},Ue={key:0,class:"detail-content"},Ae={class:"detail-summary__main"},we={class:"detail-summary__name"},xe={class:"detail-summary__code"},De={class:"detail-summary__meta"},ke={class:"payload-section"},he={class:"label-row"},Ve={class:"template-preview"},Fe={class:"template-text"},$e={key:0,class:"template-variables"},Je={class:"payload-section"},Re={class:"label-row"},je={class:"template-preview"},Be={class:"template-text"},ze={class:"payload-section"},qe={class:"label-row"},Pe={class:"template-preview"},We={class:"json-text"},Ge={class:"payload-section"},Ke={class:"label-row"},Xe={class:"template-preview"},Ye={class:"json-text"},Ze=Ce({__name:"MessageTemplate",setup(He){const f=M(""),{loading:V,pagination:O,searchKeyword:b,filteredData:S,total:F,handleSearch:U,upsertItem:$}=Te({initialData:[...Me],keywordFields:["name","templateId","msgId"]}),J=h(()=>f.value===""?S.value:S.value.filter(p=>p.status===f.value)),A={0:"danger",1:"success"},T=M(!1),i=Ie({template:""}),C=M(!1),l=M(null),R=h(()=>{if(!l.value)return[];const p=l.value;return[{label:"消息模板ID",value:p.messageTemplateId,type:"code"},{label:"模板编号",value:p.templateId,type:"code"},{label:"模板名称",value:p.name||"-"},{label:"消息ID",value:p.msgId,type:"code"},{label:"状态",value:y[p.status]},{label:"创建时间",value:p.createTime}]}),j=[{prop:"templateId",label:"模板ID",width:110,cellType:"code"},{prop:"msgId",label:"消息ID",minWidth:240,showOverflowTooltip:!0},{prop:"template",label:"短信模板",minWidth:300,showOverflowTooltip:!0},{prop:"status",label:"审核状态",width:110,cellType:"tag",tagMap:A,tagLabelMap:y},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],B=[{label:"详情",icon:ge,handler:p=>W(p)}];function z(){i.template="",T.value=!0}function q(){if(!i.template){x.warning("请输入短信模板内容");return}$({messageTemplateId:Date.now(),templateId:String(1e7+Math.floor(Math.random()*1e6)),name:null,msgId:"",template:i.template,content:null,extJson:null,approvalJson:null,status:0,...be()},"messageTemplateId"),i.template="",x.success("申请成功，等待审核")}function P(){i.template=""}function W(p){l.value=p,C.value=!0}function v(p){ue(p)}function G(p){return(p.match(/\$\{(\d+)\}/g)||[]).map(L=>L.replace(/\$\{(\d+)\}/,"$1"))}return(p,e)=>{const L=E("table-structure-drawer"),K=de,X=me,u=ie,Y=pe,Z=ne,H=E("panel-layout"),Q=Ne,ee=ve,te=Oe,w=oe,ae=_e,r=re,le=E("detail-list");return d(),c(k,null,[o(H,{title:"短信模板管理"},{"title-extra":a(()=>[o(L,{sql:n(ye)},null,8,["sql"])]),search:a(()=>[o(K,{modelValue:n(b),"onUpdate:modelValue":e[0]||(e[0]=s=>Le(b)?b.value=s:null),placeholder:"搜索模板名称/编号",onSearch:n(U)},null,8,["modelValue","onSearch"]),o(X,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=s=>f.value=s),options:n(Se),placeholder:"模板状态",onSearch:n(U)},null,8,["modelValue","options","onSearch"])]),actions:a(()=>[o(u,{type:"primary",icon:n(fe),onClick:z},{default:a(()=>[...e[11]||(e[11]=[_("申请模版",-1)])]),_:1},8,["icon"])]),default:a(()=>[o(Z,{"page-num":n(O).pageNum,"onUpdate:pageNum":e[2]||(e[2]=s=>n(O).pageNum=s),"page-size":n(O).pageSize,"onUpdate:pageSize":e[3]||(e[3]=s=>n(O).pageSize=s),data:J.value,columns:j,total:n(F),loading:n(V),"row-key":"messageTemplateId","show-tool-bar":!1},{actions:a(({row:s})=>[o(Y,{items:B,row:s},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),o(w,{modelValue:T.value,"onUpdate:modelValue":e[5]||(e[5]=s=>T.value=s),title:"申请模版",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"提交申请","on-confirm":q,onClosed:P},{default:a(()=>[o(te,{model:i,"label-width":"90px"},{default:a(()=>[o(ee,{label:"短信模版"},{default:a(()=>[o(Q,{modelValue:i.template,"onUpdate:modelValue":e[4]||(e[4]=s=>i.template=s),type:"textarea",rows:6,placeholder:"请输入短信模板内容，变量使用 ${2} 方式，从2开始"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),o(w,{modelValue:C.value,"onUpdate:modelValue":e[10]||(e[10]=s=>C.value=s),title:"短信模板详情",direction:"rtl",size:"680px","destroy-on-close":"","hide-footer":!0},{default:a(()=>[l.value?(d(),c("div",Ue,[o(r,{class:"detail-summary"},{default:a(()=>[t("div",Ae,[t("span",we,m(l.value.name||"未命名模板"),1),t("span",xe,m(l.value.templateId),1)]),t("div",De,[o(ae,{type:A[l.value.status],effect:"dark",round:""},{default:a(()=>[_(m(n(y)[l.value.status]),1)]),_:1},8,["type"])])]),_:1}),o(r,{class:"detail-section"},{header:a(()=>[...e[12]||(e[12]=[t("span",{class:"detail-section__title"},"基础信息",-1)])]),default:a(()=>[o(le,{items:R.value},null,8,["items"])]),_:1}),o(r,{class:"detail-section"},{header:a(()=>[...e[13]||(e[13]=[t("span",{class:"detail-section__title"},"短信模板",-1)])]),default:a(()=>[t("section",ke,[t("header",he,[e[15]||(e[15]=t("span",{class:"detail-label"},"模板内容",-1)),o(u,{link:"",type:"primary",icon:n(N),onClick:e[6]||(e[6]=s=>v(l.value.template))},{default:a(()=>[...e[14]||(e[14]=[_("复制",-1)])]),_:1},8,["icon"])]),t("div",Ve,[t("div",Fe,m(l.value.template),1),l.value.template?(d(),c("div",$e,[(d(!0),c(k,null,Ee(G(l.value.template),(s,se)=>(d(),c("span",{key:se,class:"variable-tag"},"$"+m(s),1))),128))])):g("",!0)])])]),_:1}),l.value.content?(d(),I(r,{key:0,class:"detail-section"},{header:a(()=>[...e[16]||(e[16]=[t("span",{class:"detail-section__title"},"消息内容",-1)])]),default:a(()=>[t("section",Je,[t("header",Re,[e[18]||(e[18]=t("span",{class:"detail-label"},"内容",-1)),o(u,{link:"",type:"primary",icon:n(N),onClick:e[7]||(e[7]=s=>v(l.value.content))},{default:a(()=>[...e[17]||(e[17]=[_("复制",-1)])]),_:1},8,["icon"])]),t("div",je,[t("div",Be,m(l.value.content),1)])])]),_:1})):g("",!0),l.value.extJson?(d(),I(r,{key:1,class:"detail-section"},{header:a(()=>[...e[19]||(e[19]=[t("span",{class:"detail-section__title"},"扩展信息",-1)])]),default:a(()=>[t("section",ze,[t("header",qe,[e[21]||(e[21]=t("span",{class:"detail-label"},"JSON数据",-1)),o(u,{link:"",type:"primary",icon:n(N),onClick:e[8]||(e[8]=s=>v(l.value.extJson))},{default:a(()=>[...e[20]||(e[20]=[_("复制",-1)])]),_:1},8,["icon"])]),t("div",Pe,[t("pre",We,m(n(D)(l.value.extJson)),1)])])]),_:1})):g("",!0),l.value.approvalJson?(d(),I(r,{key:2,class:"detail-section"},{header:a(()=>[...e[22]||(e[22]=[t("span",{class:"detail-section__title"},"审批信息",-1)])]),default:a(()=>[t("section",Ge,[t("header",Ke,[e[24]||(e[24]=t("span",{class:"detail-label"},"JSON数据",-1)),o(u,{link:"",type:"primary",icon:n(N),onClick:e[9]||(e[9]=s=>v(l.value.approvalJson))},{default:a(()=>[...e[23]||(e[23]=[_("复制",-1)])]),_:1},8,["icon"])]),t("div",Xe,[t("pre",Ye,m(n(D)(l.value.approvalJson)),1)])])]),_:1})):g("",!0)])):g("",!0)]),_:1},8,["modelValue"])],64)}}}),it=ce(Ze,[["__scopeId","data-v-0bc9c648"]]);export{it as default};
