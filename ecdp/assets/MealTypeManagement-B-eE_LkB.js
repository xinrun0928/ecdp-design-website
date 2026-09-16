import{Y as i,t as ee,W as te,X as ae,u as le,F as oe,a as pe,z as se,y as ne,J as f,e as re,K as ie,U as ue,C as de,A as me,P as _e,d as ce}from"./index-Chsrs_3N.js";import{at as ye,by as Ne,l as Te,a_ as ge,bb as Me,bc as Oe,Q as Ce,a as M}from"./element-plus-CMDnEDmP.js";/* empty css                     */import{u as Ee}from"./useMockTablePage-DiqlWf4a.js";import{u as Le}from"./useCrudDrawer-COyi1tS8.js";import{S as d,b as be}from"./common-CRcHQUfu.js";import{G as fe,L as Ie,M as Se,a0 as o,W as p,u as a,P as I,$ as Ue,_ as Ae,j as ve,F as he,k as Ve,aj as S,c as U}from"./vue-vendor-BFL4yudo.js";import"./markdown-AhVvyqak.js";import"./editor-CDjaDkQU.js";import"./ol-map-BDSc84yL.js";const O=[{typeId:1,typeCode:"MEAL_TOP",typeName:"顶节点",projectType:1,sort:1,status:1101,remark:"省级顶节点套餐类型",...i()},{typeId:2,typeCode:"MEAL_TRANSPORT",typeName:"交通节点",projectType:1,sort:2,status:1101,remark:"省市县交通部门节点套餐类型",...i()},{typeId:3,typeCode:"MEAL_AFFAIRS",typeName:"事务中心节点",projectType:1,sort:3,status:1101,remark:"省市县事务中心节点套餐类型",...i()},{typeId:4,typeCode:"MEAL_COMPANY",typeName:"公司企业节点",projectType:1,sort:4,status:1101,remark:"公司企业节点套餐类型",...i()}],De=`DROP TABLE IF EXISTS "public"."sys_meal_type";
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
`,ke={class:"code-cell"},je={class:"code-text"},xe=fe({__name:"MealTypeManagement",setup(Re){const n=Ve({typeName:"",projectType:"",status:""}),{loading:A,pagination:u,total:v,pagedData:h,handleSearch:m,deleteItem:V,upsertItem:_}=Ee({initialData:[...O],keywordFields:["typeName"],selectFilters:[{key:"projectType",field:"projectType",value:U(()=>n.projectType)},{key:"status",field:"status",value:U(()=>n.status)}]}),D={typeCode:"",typeName:"",projectType:_e.EMERGENCY,sort:0,status:1101,remark:""},{drawerVisible:c,isEdit:y,formRef:k,formData:s,openCreate:j,openEdit:x,handleSubmit:R,resetForm:F}=Le({defaultFormData:D,onSubmit:async l=>{if(l.typeId)_({...O.find(e=>e.typeId===l.typeId),...l,...i()},"typeId");else{const e=O.reduce((N,T)=>Math.max(N,T.typeId),0);_({...l,typeId:e+1,...i()},"typeId")}M.success(y.value?"编辑成功":"新增成功")}}),w={typeCode:[{required:!0,message:"请输入类型编码",trigger:"blur"}],typeName:[{required:!0,message:"请输入类型名称",trigger:"blur"}],projectType:[{required:!0,message:"请选择工程分类",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},P=[{prop:"typeCode",label:"类型编码",width:180,slot:"typeCode"},{prop:"typeName",label:"类型名称",minWidth:140},{prop:"projectType",label:"工程分类",width:110,align:"center",highlight:!0,cellType:"tag",tagMap:ae,tagLabelMap:te},{prop:"sort",label:"排序",width:80},{prop:"status",label:"状态",width:120,slot:"status"},{prop:"remark",label:"备注",minWidth:160,ellipsis:!0},{type:"audit",prop:"createTime",label:"创建时间"},{prop:"updater",label:"修改人",width:110},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],B=[{label:"编辑",icon:ye,handler:l=>$(l)},{label:"删除",icon:Ne,divided:!0,handler:l=>q(l)}];function $(l){x({typeId:l.typeId,typeCode:l.typeCode,typeName:l.typeName,projectType:l.projectType,sort:l.sort,status:l.status,remark:l.remark??""})}async function q(l){await ue(l.typeName)&&(V(e=>e.typeId===l.typeId),M.success("删除成功"))}async function z(l,e){l.status!==e&&(e!==d.NORMAL&&e!==d.DISABLED||(_({...l,status:e},"typeId"),M.success("状态已切换")))}async function W(l){de(l)}return(l,e)=>{const N=S("table-structure-drawer"),T=se,C=ne,E=pe,Y=Te,G=oe,X=le,K=ee,H=S("panel-layout"),g=Ce,r=Oe,L=re,J=ie,Q=Me,Z=me;return Ie(),Se(he,null,[o(H,{title:"套餐类型"},{"title-extra":p(()=>[o(N,{sql:a(De)},null,8,["sql"])]),search:p(()=>[o(T,{modelValue:n.typeName,"onUpdate:modelValue":e[0]||(e[0]=t=>n.typeName=t),placeholder:"搜索类型名称",onSearch:a(m)},null,8,["modelValue","onSearch"]),o(C,{modelValue:n.projectType,"onUpdate:modelValue":e[1]||(e[1]=t=>n.projectType=t),placeholder:"工程分类",options:a(f).map(t=>({label:t.label,value:t.value})),onSearch:a(m)},null,8,["modelValue","options","onSearch"]),o(C,{modelValue:n.status,"onUpdate:modelValue":e[2]||(e[2]=t=>n.status=t),placeholder:"状态",options:[{label:"正常",value:1101},{label:"停用",value:1102}],onSearch:a(m)},null,8,["modelValue","onSearch"])]),actions:p(()=>[o(E,{"margin-left":10,onClick:e[3]||(e[3]=t=>a(j)())},{default:p(()=>[...e[14]||(e[14]=[Ae("新增套餐类型",-1)])]),_:1})]),default:p(()=>[o(K,{"page-num":a(u).pageNum,"onUpdate:pageNum":e[4]||(e[4]=t=>a(u).pageNum=t),"page-size":a(u).pageSize,"onUpdate:pageSize":e[5]||(e[5]=t=>a(u).pageSize=t),data:a(h),columns:P,total:a(v),loading:a(A),"row-key":"typeId","show-tool-bar":!1},{typeCode:p(({row:t})=>[I("div",ke,[I("span",je,Ue(t.typeCode),1),o(Y,{content:"复制编码",placement:"top"},{default:p(()=>[o(E,{link:"",type:"primary",icon:a(ge),onClick:b=>W(t.typeCode)},null,8,["icon","onClick"])]),_:2},1024)])]),status:p(({row:t})=>[o(G,{"model-value":t.status,"active-value":a(d).NORMAL,"inactive-value":a(d).DISABLED,"active-text":"正常","inactive-text":"停用",onChange:b=>z(t,b)},null,8,["model-value","active-value","inactive-value","onChange"])]),actions:p(({row:t})=>[o(X,{items:B,row:t},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),o(Z,{modelValue:a(c),"onUpdate:modelValue":e[12]||(e[12]=t=>ve(c)?c.value=t:null),title:a(y)?"编辑套餐类型":"新增套餐类型",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":a(y)?"保存修改":"确认创建","on-confirm":a(R),onClosed:e[13]||(e[13]=t=>a(F)())},{default:p(()=>[o(Q,{ref_key:"formRef",ref:k,model:a(s),rules:w,"label-width":"100px","label-position":"right"},{default:p(()=>[o(r,{label:"类型编码",prop:"typeCode"},{default:p(()=>[o(g,{modelValue:a(s).typeCode,"onUpdate:modelValue":e[6]||(e[6]=t=>a(s).typeCode=t),placeholder:"请输入编码，如：MEAL_TOP",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),o(r,{label:"类型名称",prop:"typeName"},{default:p(()=>[o(g,{modelValue:a(s).typeName,"onUpdate:modelValue":e[7]||(e[7]=t=>a(s).typeName=t),placeholder:"请输入类型名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),o(r,{label:"工程分类",prop:"projectType"},{default:p(()=>[o(L,{modelValue:a(s).projectType,"onUpdate:modelValue":e[8]||(e[8]=t=>a(s).projectType=t),options:a(f)},null,8,["modelValue","options"])]),_:1}),o(r,{label:"排序",prop:"sort"},{default:p(()=>[o(J,{modelValue:a(s).sort,"onUpdate:modelValue":e[9]||(e[9]=t=>a(s).sort=t),min:0,max:9999,width:"180px"},null,8,["modelValue"])]),_:1}),o(r,{label:"状态",prop:"status"},{default:p(()=>[o(L,{modelValue:a(s).status,"onUpdate:modelValue":e[10]||(e[10]=t=>a(s).status=t),options:a(be)},null,8,["modelValue","options"])]),_:1}),o(r,{label:"备注",prop:"remark"},{default:p(()=>[o(g,{modelValue:a(s).remark,"onUpdate:modelValue":e[11]||(e[11]=t=>a(s).remark=t),type:"textarea",placeholder:"请输入备注",maxlength:"200","show-word-limit":"",rows:3},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","on-confirm"])],64)}}}),Xe=ce(xe,[["__scopeId","data-v-85a2c763"]]);export{Xe as default};
