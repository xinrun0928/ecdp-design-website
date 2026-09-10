import{i as J,j as P,k as K,l as G,n as X,o as Y,a as Q,p as H,r as Z,b as ee}from"./index-Dz8cBk7z.js";import{aD as oe,aE as ae,a4 as te,F as le,aQ as ne,p as N}from"./element-plus-D60thvil.js";/* empty css                     */import{f as re}from"./floodJobData-BxJTXLUU.js";import{p as se,m as ue}from"./pagination-BbYzDLaW.js";import{s as ie}from"./common-Bz-Eyofd.js";import{G as de,O as pe,W as l,aj as O,L as _e,a0 as t,_ as j,$ as me,P as ce,v as T,j as _,u as c,c as b}from"./vue-vendor-Dq7Ldkyc.js";import"./randomMock-BnXBY1mw.js";const be=`DROP TABLE IF EXISTS "public"."flood_auth_job";
CREATE TABLE "public"."flood_auth_job" (
  "job_id" bigint NOT NULL,
  "org_id" bigint,
  "job_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "job_code" varchar(50) COLLATE "pg_catalog"."default",
  "display_order" integer DEFAULT 0,
  "status" smallint DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."flood_auth_job" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_auth_job"."job_id" IS '职务ID';
COMMENT ON COLUMN "public"."flood_auth_job"."org_id" IS '归属组织ID（null表示全局职务）';
COMMENT ON COLUMN "public"."flood_auth_job"."job_name" IS '职务名称';
COMMENT ON COLUMN "public"."flood_auth_job"."job_code" IS '职务编码';
COMMENT ON COLUMN "public"."flood_auth_job"."display_order" IS '排序号';
COMMENT ON COLUMN "public"."flood_auth_job"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_auth_job"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."flood_auth_job"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_auth_job"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_auth_job"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_auth_job"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_auth_job"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_auth_job"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_auth_job"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_auth_job"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_auth_job"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_auth_job" IS '巡检职务信息表';

-- ----------------------------

-- Indexes structure for table flood_auth_job
-- ----------------------------
CREATE INDEX "idx_flood_auth_job_deleted" ON "public"."flood_auth_job" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_auth_job
-- ----------------------------
ALTER TABLE "public"."flood_auth_job" ADD CONSTRAINT "flood_auth_job_pkey" PRIMARY KEY ("job_id");

-- ----------------------------
`,fe=de({__name:"Job",setup(ge){const C=_(!1),u=_(!1),s=_(!1),d=_(),p=c({jobName:""}),r=c({pageNum:1,pageSize:20}),f={jobId:0,jobCode:"",jobName:"",displayOrder:0,status:1101,remark:""},n=c({...f}),h={jobCode:[{required:!0,message:"请输入职务编码",trigger:"blur"}],jobName:[{required:!0,message:"请输入职务名称",trigger:"blur"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},E=[{prop:"jobName",label:"职务名称",minWidth:140,showOverflowTooltip:!0},{prop:"jobCode",label:"职务编码",minWidth:160,align:"center",cellType:"code",showOverflowTooltip:!0},{prop:"displayOrder",label:"排序",width:70,align:"center"},{prop:"status",label:"状态",width:80,align:"center",slot:"status"},{prop:"remark",label:"备注",minWidth:180,showOverflowTooltip:!0},{prop:"creater",label:"创建人",width:100,align:"center",cellType:"secondary"},{prop:"createTime",label:"创建时间",width:175,align:"center",cellType:"secondary"},{prop:"updater",label:"更新人",width:100,align:"center",cellType:"secondary"},{prop:"updateTime",label:"更新时间",width:175,align:"center",cellType:"secondary"},{label:"操作",width:60,align:"center",fixed:"right",slot:"actions"}],g=b(()=>re.filter(a=>!p.jobName||ue(p.jobName,a.jobName))),L=b(()=>g.value.length),M=b(()=>se(g.value,r.pageNum,r.pageSize));function v(a){return[{label:"编辑",icon:le,handler:()=>I(a)},{label:"删除",icon:ne,divided:!0,handler:()=>A(a)}]}function U(){r.pageNum=1}function y(){s.value=!1,Object.assign(n,f),u.value=!0}function I(a){s.value=!0,Object.assign(n,{jobId:a.jobId,jobCode:a.jobCode,jobName:a.jobName,displayOrder:a.displayOrder,status:a.status,remark:a.remark??""}),u.value=!0}function S(){d.value&&d.value.validate(a=>{a&&(N.success(s.value?"编辑成功":"新增成功"),u.value=!1)})}async function A(a){await Z(a.jobName)&&N.success("删除成功")}function V(){var a;(a=d.value)==null||a.resetFields()}return(a,o)=>{const w=O("table-structure-drawer"),D=H,x=Q,k=K,F=P,R=J,m=te,i=ae,z=X,B=Y,q=oe,$=G,W=O("panel-layout");return _e(),pe(W,{title:"职务管理"},{"title-extra":l(()=>[t(w,{sql:T(be)},null,8,["sql"])]),search:l(()=>[t(D,{modelValue:p.jobName,"onUpdate:modelValue":o[0]||(o[0]=e=>p.jobName=e),placeholder:"搜索职务名称",onSearch:U},null,8,["modelValue"])]),actions:l(()=>[t(x,{"margin-left":10,onClick:y},{default:l(()=>[...o[9]||(o[9]=[j("新增职务",-1)])]),_:1})]),default:l(()=>[t(R,{"page-num":r.pageNum,"onUpdate:pageNum":o[1]||(o[1]=e=>r.pageNum=e),"page-size":r.pageSize,"onUpdate:pageSize":o[2]||(o[2]=e=>r.pageSize=e),data:M.value,columns:E,total:L.value,loading:C.value,"row-key":"jobId","show-tool-bar":!1},{status:l(({row:e})=>[t(k,{size:"small",type:e.status===1101?"success":"info",effect:"plain"},{default:l(()=>[j(me(e.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:l(({row:e})=>[t(F,{items:v(e),row:e},null,8,["items","row"])]),_:1},8,["page-num","page-size","data","total","loading"]),t($,{modelValue:u.value,"onUpdate:modelValue":o[8]||(o[8]=e=>u.value=e),title:s.value?"编辑职务":"新增职务",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":s.value?"保存修改":"确认创建","on-confirm":S,onClosed:V},{default:l(()=>[t(q,{ref_key:"formRef",ref:d,model:n,rules:h,"label-width":"90px","label-position":"right"},{default:l(()=>[t(i,{label:"职务编码",prop:"jobCode"},{default:l(()=>[t(m,{modelValue:n.jobCode,"onUpdate:modelValue":o[3]||(o[3]=e=>n.jobCode=e),placeholder:"请输入职务编码",maxlength:"50",disabled:s.value},null,8,["modelValue","disabled"])]),_:1}),t(i,{label:"职务名称",prop:"jobName"},{default:l(()=>[t(m,{modelValue:n.jobName,"onUpdate:modelValue":o[4]||(o[4]=e=>n.jobName=e),placeholder:"请输入职务名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(i,{label:"排序",prop:"displayOrder"},{default:l(()=>[t(z,{modelValue:n.displayOrder,"onUpdate:modelValue":o[5]||(o[5]=e=>n.displayOrder=e),min:0,max:9999,width:"180px"},null,8,["modelValue"]),o[10]||(o[10]=ce("span",{class:"form-tip-inline"},"数值越小越靠前",-1))]),_:1}),t(i,{label:"状态",prop:"status"},{default:l(()=>[t(B,{modelValue:n.status,"onUpdate:modelValue":o[6]||(o[6]=e=>n.status=e),options:T(ie)},null,8,["modelValue","options"])]),_:1}),t(i,{label:"备注",prop:"remark"},{default:l(()=>[t(m,{modelValue:n.remark,"onUpdate:modelValue":o[7]||(o[7]=e=>n.remark=e),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])]),_:1})}}}),Me=ee(fe,[["__scopeId","data-v-f7f856a6"]]);export{Me as default};
