import{m as Y,s as Q,j as X,b as H,q as J,w as Z,n as ee,p as ae,v as le,g as pe}from"./index-BGoR6y1A.js";import{ar as oe,bo as te,bc as ne,bd as re,M as ie,a as b}from"./element-plus-FTcyDTKl.js";import{a as se}from"./appPublishLogData-CNfzEIaq.js";import{L as ue,Q as de,R as me,U as C}from"./subsystem-BQNqsSr5.js";import{G as _e,M as ce,a0 as p,W as t,u as e,j as E,F as fe,aj as L,L as Ne,P as Oe,$ as ge,_ as Me,r as N,aA as be}from"./vue-vendor-CYCT-Zs3.js";import{a as Ce,u as Ee}from"./useMockTablePage-C2bxY-8-.js";import{S as Le,s as Te,a as Ae,b as T}from"./warning-BshV8eZN.js";import{c as Se,M as Ue,a as Ie}from"./ui-CkdNVOlu.js";import"./randomMock-C6-QJwcy.js";import"./pagination-BHZHZx5b.js";import"./search-BoGTCmM8.js";const Ve=`-- Table structure for app_info
-- ----------------------------
DROP TABLE IF EXISTS "public"."app_info";
CREATE TABLE "public"."app_info" (
  "app_id" bigint NOT NULL,
  "app_code" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "app_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "platform" smallint NOT NULL,
  "bundle_id" varchar(200) COLLATE "pg_catalog"."default",
  "min_version_code" varchar(20) COLLATE "pg_catalog"."default" DEFAULT '0'::character varying,
  "status" smallint DEFAULT 1101,
  "latest_apk_url" varchar(500) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."app_info" OWNER TO "postgres";
COMMENT ON COLUMN "public"."app_info"."app_id" IS 'AppID（系统主键，雪花算法）';
COMMENT ON COLUMN "public"."app_info"."app_code" IS 'App业务编码（由业务方定义，如 __UNI__1818E59）';
COMMENT ON COLUMN "public"."app_info"."app_name" IS 'App名称';
COMMENT ON COLUMN "public"."app_info"."platform" IS '平台（1-iOS, 2-Android, 3-Windows, 4-Mac, 5-Linux）';
COMMENT ON COLUMN "public"."app_info"."bundle_id" IS 'iOS的BundleId / Android的包名';
COMMENT ON COLUMN "public"."app_info"."min_version_code" IS '最低支持版本（低于该版本不允许使用，会触发强制整包升级）';
COMMENT ON COLUMN "public"."app_info"."status" IS '状态（1001-停用 1101-启用）';
COMMENT ON COLUMN "public"."app_info"."latest_apk_url" IS '最新APK整包下载地址（热更新失败时兜底下载链接）';
COMMENT ON COLUMN "public"."app_info"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."app_info"."creater" IS '创建者';
COMMENT ON COLUMN "public"."app_info"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."app_info"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."app_info"."updater" IS '更新者';
COMMENT ON COLUMN "public"."app_info"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."app_info"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."app_info"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."app_info"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."app_info"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."app_info"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."app_info"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."app_info"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."app_info"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."app_info" IS 'App信息表';

-- ----------------------------

-- Primary Key structure for table app_info
-- ----------------------------
ALTER TABLE "public"."app_info" ADD CONSTRAINT "app_info_pkey" PRIMARY KEY ("app_id");

-- ----------------------------
`,ve=["onClick"],he=_e({__name:"AppManagement",setup(De){const A=be(),S=[{label:"编辑",icon:oe,handler:n=>I(n)},{label:"删除",icon:te,divided:!0,handler:n=>R(n)}],m=N(""),_=N(""),O={appId:0,appCode:"",appName:"",platform:ue.ANDROID,bundleId:"",minVersionCode:"1.0.0",latestApkUrl:"",status:Le.NORMAL,remark:""},U=[{prop:"appName",label:"App名称",minWidth:150,slot:"appName"},{prop:"appCode",label:"App编码",width:160,cellType:"code"},{prop:"platform",label:"平台",width:100,cellType:"tag",tagMap:me,tagLabelMap:de},{prop:"bundleId",label:"BundleId/包名",minWidth:200,showOverflowTooltip:!0},{prop:"minVersionCode",label:"最低版本",width:100},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:Ae,tagLabelMap:Te},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],g=N(),{drawerVisible:u,isEdit:s,formData:o,openEdit:I,handleSubmit:V,resetForm:v}=Ce({formRef:g,defaultFormData:O,onSubmit:()=>{b.success(s.value?Ue:Ie)}}),{loading:h,pagination:d,searchKeyword:c,total:D,pagedData:k,handleSearch:f,deleteItem:w}=Ee({initialData:[...se],keywordFields:["appName"],selectFilters:[{key:"platform",field:"platform",value:m},{key:"status",field:"status",value:_}]});function y(){s.value=!1,Object.assign(o,O),u.value=!0}async function R(n){await le(n.appName)&&(w(l=>l.appId===n.appId),b.success(Se))}function F(n){A.push({path:"/global/app/log",query:{appId:n.appId,appName:n.appName}})}return(n,l)=>{const x=L("table-structure-drawer"),P=J,M=Z,B=H,q=X,$=Q,z=L("card-layout"),i=ie,r=re,K=ee,W=ae,j=ne,G=Y;return Ne(),ce(fe,null,[p(z,{title:"App管理"},{"title-extra":t(()=>[p(x,{sql:e(Ve)},null,8,["sql"])]),search:t(()=>[p(P,{modelValue:e(c),"onUpdate:modelValue":l[0]||(l[0]=a=>E(c)?c.value=a:null),placeholder:"搜索App名称",onSearch:e(f)},null,8,["modelValue","onSearch"]),p(M,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=a=>m.value=a),placeholder:"选择平台",options:e(C).map(a=>({label:a.label,value:a.value})),onSearch:e(f)},null,8,["modelValue","options","onSearch"]),p(M,{modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=a=>_.value=a),placeholder:"选择状态",options:e(T),onSearch:e(f)},null,8,["modelValue","options","onSearch"])]),actions:t(()=>[p(B,{"margin-left":10,onClick:y},{default:t(()=>[...l[14]||(l[14]=[Me("新增APP",-1)])]),_:1})]),default:t(()=>[p($,{pageNum:e(d).pageNum,"onUpdate:pageNum":l[3]||(l[3]=a=>e(d).pageNum=a),pageSize:e(d).pageSize,"onUpdate:pageSize":l[4]||(l[4]=a=>e(d).pageSize=a),data:e(k),columns:U,total:e(D),loading:e(h),"row-key":"appId","show-tool-bar":!1},{appName:t(({row:a})=>[Oe("span",{class:"cell-link",onClick:ke=>F(a)},ge(a.appName),9,ve)]),actions:t(({row:a})=>[p(q,{items:S,row:a},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),p(G,{modelValue:e(u),"onUpdate:modelValue":l[13]||(l[13]=a=>E(u)?u.value=a:null),title:e(s)?"编辑App":"新增App",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":e(s)?"保存修改":"确认创建","on-confirm":e(V),onClosed:e(v)},{default:t(()=>[p(j,{ref_key:"formRef",ref:g,model:e(o),"label-width":"110px","label-position":"right"},{default:t(()=>[p(r,{label:"App编码",prop:"appCode",rules:[{required:!0,message:"请输入App编码",trigger:"blur"}]},{default:t(()=>[p(i,{modelValue:e(o).appCode,"onUpdate:modelValue":l[5]||(l[5]=a=>e(o).appCode=a),placeholder:"如：__UNI__1818E59",disabled:e(s)},null,8,["modelValue","disabled"])]),_:1}),p(r,{label:"App名称",prop:"appName",rules:[{required:!0,message:"请输入App名称",trigger:"blur"}]},{default:t(()=>[p(i,{modelValue:e(o).appName,"onUpdate:modelValue":l[6]||(l[6]=a=>e(o).appName=a),placeholder:"请输入App名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),p(r,{label:"平台",prop:"platform",rules:[{required:!0,message:"请选择平台",trigger:"change"}]},{default:t(()=>[p(K,{modelValue:e(o).platform,"onUpdate:modelValue":l[7]||(l[7]=a=>e(o).platform=a),options:e(C),placeholder:"请选择平台"},null,8,["modelValue","options"])]),_:1}),p(r,{label:"BundleId",prop:"bundleId"},{default:t(()=>[p(i,{modelValue:e(o).bundleId,"onUpdate:modelValue":l[8]||(l[8]=a=>e(o).bundleId=a),placeholder:"iOS的BundleId / Android的包名"},null,8,["modelValue"])]),_:1}),p(r,{label:"最低版本",prop:"minVersionCode"},{default:t(()=>[p(i,{modelValue:e(o).minVersionCode,"onUpdate:modelValue":l[9]||(l[9]=a=>e(o).minVersionCode=a),placeholder:"如：1.0.0"},null,8,["modelValue"])]),_:1}),p(r,{label:"下载地址",prop:"latestApkUrl"},{default:t(()=>[p(i,{modelValue:e(o).latestApkUrl,"onUpdate:modelValue":l[10]||(l[10]=a=>e(o).latestApkUrl=a),placeholder:"最新APK整包下载地址"},null,8,["modelValue"])]),_:1}),p(r,{label:"状态",prop:"status"},{default:t(()=>[p(W,{modelValue:e(o).status,"onUpdate:modelValue":l[11]||(l[11]=a=>e(o).status=a),options:e(T)},null,8,["modelValue","options"])]),_:1}),p(r,{label:"备注",prop:"remark"},{default:t(()=>[p(i,{modelValue:e(o).remark,"onUpdate:modelValue":l[12]||(l[12]=a=>e(o).remark=a),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","on-confirm","onClosed"])],64)}}}),We=pe(he,[["__scopeId","data-v-18fb1407"]]);export{We as default};
