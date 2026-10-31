import{m as te,s as ae,j as oe,k as le,b as pe,q as se,w as ne,p as re,o as ie,v as ue,h as de,g as me}from"./index-BGoR6y1A.js";import{ar as _e,bo as ce,k as ye,b8 as Ne,bc as Te,bd as Me,M as ge,a as g}from"./element-plus-FTcyDTKl.js";import{r as u}from"./randomMock-C6-QJwcy.js";import{S as n,b as S}from"./warning-BshV8eZN.js";import{P as Oe,a as Ce,b as Ee,p as I}from"./subsystem-BQNqsSr5.js";import{u as Le,a as be}from"./useMockTablePage-C2bxY-8-.js";import{c as fe,b as Se,M as Ie,a as Ae}from"./ui-CkdNVOlu.js";import{G as Ue,M as ve,a0 as l,W as p,u as t,j as he,F as Ve,aj as A,L as De,P as U,$ as ke,_ as Re,k as je,r as xe,c as v}from"./vue-vendor-CYCT-Zs3.js";import"./pagination-BHZHZx5b.js";import"./search-BoGTCmM8.js";const O=[{typeId:1,typeCode:"MEAL_TOP",typeName:"顶节点",projectType:1,sort:1,status:n.NORMAL,remark:"省级顶节点套餐类型",...u()},{typeId:2,typeCode:"MEAL_TRANSPORT",typeName:"交通节点",projectType:1,sort:2,status:n.NORMAL,remark:"省市县交通部门节点套餐类型",...u()},{typeId:3,typeCode:"MEAL_AFFAIRS",typeName:"事务中心节点",projectType:1,sort:3,status:n.NORMAL,remark:"省市县事务中心节点套餐类型",...u()},{typeId:4,typeCode:"MEAL_COMPANY",typeName:"公司企业节点",projectType:1,sort:4,status:n.NORMAL,remark:"公司企业节点套餐类型",...u()}],Fe=`DROP TABLE IF EXISTS "public"."sys_meal_type";
CREATE TABLE "public"."sys_meal_type" (
  "type_id" bigint NOT NULL,
  "type_name" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "type_code" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "project_type" integer NOT NULL DEFAULT 1,
  "display_order" integer DEFAULT 0,
  "status" integer DEFAULT 1101,
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
ALTER TABLE "public"."sys_meal_type" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_meal_type"."type_id" IS '套餐类型ID';
COMMENT ON COLUMN "public"."sys_meal_type"."type_name" IS '类型名称（1顶节点 2交通节点 3事务中心节点 4公司企业节点）';
COMMENT ON COLUMN "public"."sys_meal_type"."type_code" IS '类型编码';
COMMENT ON COLUMN "public"."sys_meal_type"."project_type" IS '工程分类（1-应急工程；2-路网工程）';
COMMENT ON COLUMN "public"."sys_meal_type"."display_order" IS '排序号';
COMMENT ON COLUMN "public"."sys_meal_type"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_meal_type"."remark" IS '备注';
COMMENT ON COLUMN "public"."sys_meal_type"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_meal_type"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_meal_type"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_meal_type"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_meal_type"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_meal_type"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_meal_type"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_meal_type"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_meal_type"."deleted" IS '逻辑删除（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_meal_type"."local_signature" IS '本地签名（SM2）';
COMMENT ON COLUMN "public"."sys_meal_type"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_meal_type"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_meal_type"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_meal_type" IS '系统套餐类型定义表';

CREATE INDEX "idx_sys_meal_type_type_code" ON "public"."sys_meal_type" USING btree (
  "type_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE type_code IS NOT NULL AND deleted = 0;

ALTER TABLE "public"."sys_meal_type" ADD CONSTRAINT "sys_meal_type_pkey" PRIMARY KEY ("type_id");
`,we={class:"code-cell"},Pe={class:"code-text"},Be=Ue({__name:"MealTypeManagement",setup($e){const r=je({typeName:"",projectType:"",status:""}),{loading:h,pagination:d,total:V,pagedData:D,handleSearch:m,deleteItem:k,upsertItem:_}=Le({initialData:[...O],keywordFields:["typeName"],selectFilters:[{key:"projectType",field:"projectType",value:v(()=>r.projectType)},{key:"status",field:"status",value:v(()=>r.status)}]}),R={typeCode:"",typeName:"",projectType:Oe.EMERGENCY,sort:0,status:n.NORMAL,remark:""},C=xe(),{drawerVisible:c,isEdit:y,formData:s,openCreate:j,openEdit:x,handleSubmit:F,resetForm:w}=be({formRef:C,defaultFormData:R,onSubmit:async o=>{if(o.typeId)_({...O.find(e=>e.typeId===o.typeId),...o,...u()},"typeId");else{const e=O.reduce((N,T)=>Math.max(N,T.typeId),0);_({...o,typeId:e+1,...u()},"typeId")}g.success(y.value?Ie:Ae)}}),P={typeCode:[{required:!0,message:"请输入类型编码",trigger:"blur"}],typeName:[{required:!0,message:"请输入类型名称",trigger:"blur"}],projectType:[{required:!0,message:"请选择工程分类",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},B=[{prop:"typeCode",label:"类型编码",width:180,slot:"typeCode"},{prop:"typeName",label:"类型名称",minWidth:140},{prop:"projectType",label:"工程分类",width:110,align:"center",highlight:!0,cellType:"tag",tagMap:Ee,tagLabelMap:Ce},{prop:"sort",label:"排序",width:80},{prop:"status",label:"状态",width:120,slot:"status"},{prop:"remark",label:"备注",minWidth:160,ellipsis:!0},{type:"audit",prop:"createTime",label:"创建时间"},{prop:"updater",label:"修改人",width:110},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],$=[{label:"编辑",icon:_e,handler:o=>G(o)},{label:"删除",icon:ce,divided:!0,handler:o=>q(o)}];function G(o){x({typeId:o.typeId,typeCode:o.typeCode,typeName:o.typeName,projectType:o.projectType,sort:o.sort,status:o.status,remark:o.remark??""})}async function q(o){await ue(o.typeName)&&(k(e=>e.typeId===o.typeId),g.success(fe))}async function z(o,e){o.status!==e&&(e!==n.NORMAL&&e!==n.DISABLED||(_({...o,status:e},"typeId"),g.success(Se)))}async function W(o){de(o)}return(o,e)=>{const N=A("table-structure-drawer"),T=se,E=ne,L=pe,Y=ye,X=le,H=oe,K=ae,J=A("card-layout"),M=ge,i=Me,b=re,Q=ie,Z=Te,ee=te;return De(),ve(Ve,null,[l(J,{title:"套餐类型"},{"title-extra":p(()=>[l(N,{sql:t(Fe)},null,8,["sql"])]),search:p(()=>[l(T,{modelValue:r.typeName,"onUpdate:modelValue":e[0]||(e[0]=a=>r.typeName=a),placeholder:"搜索类型名称",onSearch:t(m)},null,8,["modelValue","onSearch"]),l(E,{modelValue:r.projectType,"onUpdate:modelValue":e[1]||(e[1]=a=>r.projectType=a),placeholder:"工程分类",options:t(I).map(a=>({label:a.label,value:a.value})),onSearch:t(m)},null,8,["modelValue","options","onSearch"]),l(E,{modelValue:r.status,"onUpdate:modelValue":e[2]||(e[2]=a=>r.status=a),placeholder:"状态",options:t(S),onSearch:t(m)},null,8,["modelValue","options","onSearch"])]),actions:p(()=>[l(L,{"margin-left":10,onClick:e[3]||(e[3]=a=>t(j)())},{default:p(()=>[...e[14]||(e[14]=[Re("新增套餐类型",-1)])]),_:1})]),default:p(()=>[l(K,{pageNum:t(d).pageNum,"onUpdate:pageNum":e[4]||(e[4]=a=>t(d).pageNum=a),pageSize:t(d).pageSize,"onUpdate:pageSize":e[5]||(e[5]=a=>t(d).pageSize=a),data:t(D),columns:B,total:t(V),loading:t(h),"row-key":"typeId","show-tool-bar":!1},{typeCode:p(({row:a})=>[U("div",we,[U("span",Pe,ke(a.typeCode),1),l(Y,{content:"复制编码",placement:"top"},{default:p(()=>[l(L,{link:"",type:"primary",icon:t(Ne),onClick:f=>W(a.typeCode)},null,8,["icon","onClick"])]),_:2},1024)])]),status:p(({row:a})=>[l(X,{"model-value":a.status,"active-value":t(n).NORMAL,"inactive-value":t(n).DISABLED,"active-text":"正常","inactive-text":"停用",onChange:f=>z(a,f)},null,8,["model-value","active-value","inactive-value","onChange"])]),actions:p(({row:a})=>[l(H,{items:$,row:a},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),l(ee,{modelValue:t(c),"onUpdate:modelValue":e[12]||(e[12]=a=>he(c)?c.value=a:null),title:t(y)?"编辑套餐类型":"新增套餐类型",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":t(y)?"保存修改":"确认创建","on-confirm":t(F),onClosed:e[13]||(e[13]=a=>t(w)())},{default:p(()=>[l(Z,{ref_key:"formRef",ref:C,model:t(s),rules:P,"label-width":"100px","label-position":"right"},{default:p(()=>[l(i,{label:"类型编码",prop:"typeCode"},{default:p(()=>[l(M,{modelValue:t(s).typeCode,"onUpdate:modelValue":e[6]||(e[6]=a=>t(s).typeCode=a),placeholder:"请输入编码，如：MEAL_TOP",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(i,{label:"类型名称",prop:"typeName"},{default:p(()=>[l(M,{modelValue:t(s).typeName,"onUpdate:modelValue":e[7]||(e[7]=a=>t(s).typeName=a),placeholder:"请输入类型名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(i,{label:"工程分类",prop:"projectType"},{default:p(()=>[l(b,{modelValue:t(s).projectType,"onUpdate:modelValue":e[8]||(e[8]=a=>t(s).projectType=a),options:t(I)},null,8,["modelValue","options"])]),_:1}),l(i,{label:"排序",prop:"sort"},{default:p(()=>[l(Q,{modelValue:t(s).sort,"onUpdate:modelValue":e[9]||(e[9]=a=>t(s).sort=a),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),l(i,{label:"状态",prop:"status"},{default:p(()=>[l(b,{modelValue:t(s).status,"onUpdate:modelValue":e[10]||(e[10]=a=>t(s).status=a),options:t(S)},null,8,["modelValue","options"])]),_:1}),l(i,{label:"备注",prop:"remark"},{default:p(()=>[l(M,{modelValue:t(s).remark,"onUpdate:modelValue":e[11]||(e[11]=a=>t(s).remark=a),type:"textarea",placeholder:"请输入备注",maxlength:"200","show-word-limit":"",rows:3},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","on-confirm"])],64)}}}),Ze=me(Be,[["__scopeId","data-v-1cb692e0"]]);export{Ze as default};
