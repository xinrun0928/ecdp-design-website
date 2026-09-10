import{ak as O,al as m,q as H,r as X,a as J,x as Q,w as Z,F as ee,e as ae,y as le,N as pe,d as oe}from"./index-BQSjtNr4.js";import{ar as te,bx as ne,b9 as re,ba as ie,R as ue,a as M}from"./element-plus-Bt8i1BPk.js";/* empty css                     */import{a as se}from"./appPublishLogData-DounfdSP.js";import{G as de,aA as me,aj as C,L as _e,M as ce,a0 as p,W as t,u as e,P as fe,$ as Ne,_ as Oe,l as T,F as ge,p as L}from"./vue-vendor-CrWx_I7L.js";import{u as be}from"./useCrudDrawer-BkD-uz5U.js";import{u as Me}from"./useMockTablePage-BzRj7glv.js";import{s as Ce,a as Te,b as E}from"./common-CRcHQUfu.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";const Le=`-- Table structure for app_info
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
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "update_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
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
COMMENT ON COLUMN "public"."app_info"."remark" IS '备注';
COMMENT ON COLUMN "public"."app_info"."creater" IS '创建者';
COMMENT ON COLUMN "public"."app_info"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."app_info"."updater" IS '更新者';
COMMENT ON COLUMN "public"."app_info"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."app_info"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."app_info"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."app_info"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."app_info"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."app_info"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."app_info"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."app_info"."signature_version" IS '数据签名版本号';
COMMENT ON COLUMN "public"."app_info"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."app_info"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."app_info" IS 'App信息表';

-- ----------------------------

-- Primary Key structure for table app_info
-- ----------------------------
ALTER TABLE "public"."app_info" ADD CONSTRAINT "app_info_pkey" PRIMARY KEY ("app_id");

-- ----------------------------
`,Ee=["onClick"],Ae=de({__name:"AppManagement",setup(Ie){const A=me(),I=[{label:"编辑",icon:te,handler:n=>S(n)},{label:"删除",icon:ne,divided:!0,handler:n=>F(n)}],_=L(""),c=L(""),g={appId:0,appCode:"",appName:"",platform:m.ANDROID,bundleId:"",minVersionCode:"1.0.0",latestApkUrl:"",status:1101,remark:""},U=[{prop:"appName",label:"App名称",minWidth:150,slot:"appName"},{prop:"appCode",label:"App编码",width:160,cellType:"code"},{prop:"platform",label:"平台",width:100,cellType:"tag",tagMap:{[m.IOS]:"success",[m.ANDROID]:"",[m.BOTH]:"warning"},tagLabelMap:Object.fromEntries(O.map(n=>[n.value,n.label]))},{prop:"bundleId",label:"BundleId/包名",minWidth:200,showOverflowTooltip:!0},{prop:"minVersionCode",label:"最低版本",width:100},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:Te,tagLabelMap:Ce},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],{drawerVisible:s,isEdit:u,formData:o,openEdit:S,handleSubmit:V,resetForm:v}=be({defaultFormData:g,onSubmit:()=>{M.success(u.value?"编辑成功":"新增成功")}}),{loading:h,pagination:d,searchKeyword:f,total:D,pagedData:w,handleSearch:N,deleteItem:k}=Me({initialData:[...se],keywordFields:["appName"],selectFilters:[{key:"platform",field:"platform",value:_},{key:"status",field:"status",value:c}]});function y(){V()}function R(){u.value=!1,Object.assign(o,g),s.value=!0}async function F(n){await pe(n.appName)&&(k(l=>l.appId===n.appId),M.success("删除成功"))}function x(n){A.push({path:"/admin/app/log",query:{appId:n.appId,appName:n.appName}})}return(n,l)=>{const B=C("table-structure-drawer"),P=Q,b=Z,q=J,$=X,z=H,K=C("panel-layout"),i=ue,r=ie,W=ee,j=ae,Y=re,G=le;return _e(),ce(ge,null,[p(K,{title:"App管理"},{"title-extra":t(()=>[p(B,{sql:e(Le)},null,8,["sql"])]),search:t(()=>[p(P,{modelValue:e(f),"onUpdate:modelValue":l[0]||(l[0]=a=>T(f)?f.value=a:null),placeholder:"搜索App名称",onSearch:e(N)},null,8,["modelValue","onSearch"]),p(b,{modelValue:_.value,"onUpdate:modelValue":l[1]||(l[1]=a=>_.value=a),placeholder:"选择平台",options:e(O).map(a=>({label:a.label,value:a.value})),onSearch:e(N)},null,8,["modelValue","options","onSearch"]),p(b,{modelValue:c.value,"onUpdate:modelValue":l[2]||(l[2]=a=>c.value=a),placeholder:"选择状态",options:e(E),onSearch:e(N)},null,8,["modelValue","options","onSearch"])]),actions:t(()=>[p(q,{"margin-left":10,onClick:R},{default:t(()=>[...l[14]||(l[14]=[Oe("新增APP",-1)])]),_:1})]),default:t(()=>[p(z,{"page-num":e(d).pageNum,"onUpdate:pageNum":l[3]||(l[3]=a=>e(d).pageNum=a),"page-size":e(d).pageSize,"onUpdate:pageSize":l[4]||(l[4]=a=>e(d).pageSize=a),data:e(w),columns:U,total:e(D),loading:e(h),"row-key":"appId","show-tool-bar":!1},{appName:t(({row:a})=>[fe("span",{class:"cell-link",onClick:Ue=>x(a)},Ne(a.appName),9,Ee)]),actions:t(({row:a})=>[p($,{items:I,row:a},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),p(G,{modelValue:e(s),"onUpdate:modelValue":l[13]||(l[13]=a=>T(s)?s.value=a:null),title:e(u)?"编辑App":"新增App",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":e(u)?"保存修改":"确认创建","on-confirm":y,onClosed:e(v)},{default:t(()=>[p(Y,{ref:"formRef",model:e(o),"label-width":"110px","label-position":"right"},{default:t(()=>[p(r,{label:"App编码",prop:"appCode",rules:[{required:!0,message:"请输入App编码",trigger:"blur"}]},{default:t(()=>[p(i,{modelValue:e(o).appCode,"onUpdate:modelValue":l[5]||(l[5]=a=>e(o).appCode=a),placeholder:"如：__UNI__1818E59",disabled:e(u)},null,8,["modelValue","disabled"])]),_:1}),p(r,{label:"App名称",prop:"appName",rules:[{required:!0,message:"请输入App名称",trigger:"blur"}]},{default:t(()=>[p(i,{modelValue:e(o).appName,"onUpdate:modelValue":l[6]||(l[6]=a=>e(o).appName=a),placeholder:"请输入App名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),p(r,{label:"平台",prop:"platform",rules:[{required:!0,message:"请选择平台",trigger:"change"}]},{default:t(()=>[p(W,{modelValue:e(o).platform,"onUpdate:modelValue":l[7]||(l[7]=a=>e(o).platform=a),options:e(O),placeholder:"请选择平台"},null,8,["modelValue","options"])]),_:1}),p(r,{label:"BundleId",prop:"bundleId"},{default:t(()=>[p(i,{modelValue:e(o).bundleId,"onUpdate:modelValue":l[8]||(l[8]=a=>e(o).bundleId=a),placeholder:"iOS的BundleId / Android的包名"},null,8,["modelValue"])]),_:1}),p(r,{label:"最低版本",prop:"minVersionCode"},{default:t(()=>[p(i,{modelValue:e(o).minVersionCode,"onUpdate:modelValue":l[9]||(l[9]=a=>e(o).minVersionCode=a),placeholder:"如：1.0.0"},null,8,["modelValue"])]),_:1}),p(r,{label:"下载地址",prop:"latestApkUrl"},{default:t(()=>[p(i,{modelValue:e(o).latestApkUrl,"onUpdate:modelValue":l[10]||(l[10]=a=>e(o).latestApkUrl=a),placeholder:"最新APK整包下载地址"},null,8,["modelValue"])]),_:1}),p(r,{label:"状态",prop:"status"},{default:t(()=>[p(j,{modelValue:e(o).status,"onUpdate:modelValue":l[11]||(l[11]=a=>e(o).status=a),options:e(E)},null,8,["modelValue","options"])]),_:1}),p(r,{label:"备注",prop:"remark"},{default:t(()=>[p(i,{modelValue:e(o).remark,"onUpdate:modelValue":l[12]||(l[12]=a=>e(o).remark=a),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","onClosed"])],64)}}}),Be=oe(Ae,[["__scopeId","data-v-cf722af8"]]);export{Be as default};
