import{m as te,s as ie,j as ne,i as se,b as ue,q as re,w as de,p as _e,o as me,z as be,v as ce}from"./index-BGoR6y1A.js";import{bc as ge,bd as Ne,M as Oe,ar as Me,X as fe,bo as Te,a as T}from"./element-plus-FTcyDTKl.js";import{G as Le,r as u,n as Ce,M as he,a0 as o,W as p,u as e,j as V,F as Ee,az as Se,aj as A,L as y,_ as c,$ as L,O as Ue,Z as ve,c as Ie}from"./vue-vendor-CYCT-Zs3.js";import{b as Ve}from"./appPublishLogData-CNfzEIaq.js";import{V as C,W as Ae,X as ye,Y as h,Z as De,_ as D}from"./subsystem-BQNqsSr5.js";import{a as we,u as Fe}from"./useMockTablePage-C2bxY-8-.js";import{y as Pe}from"./warning-BshV8eZN.js";import{d as ze,c as Re,M as xe,a as ke}from"./ui-CkdNVOlu.js";import"./randomMock-C6-QJwcy.js";import"./pagination-BHZHZx5b.js";import"./search-BoGTCmM8.js";const Be=`-- Table structure for app_publish_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."app_publish_log";
CREATE TABLE "public"."app_publish_log" (
  "publish_id" bigint NOT NULL,
  "app_id" bigint NOT NULL,
  "platform" smallint NOT NULL,
  "version_code" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "version_name" varchar(20) COLLATE "pg_catalog"."default" NOT NULL,
  "wgt_version" varchar(20) COLLATE "pg_catalog"."default",
  "update_type" smallint NOT NULL,
  "download_url" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "release_notes" text COLLATE "pg_catalog"."default",
  "is_force" smallint NOT NULL DEFAULT 0,
  "file_size" integer DEFAULT 0,
  "file_md5" varchar(32) COLLATE "pg_catalog"."default",
  "publisher" varchar(50) COLLATE "pg_catalog"."default",
  "publish_reason" varchar(255) COLLATE "pg_catalog"."default",
  "publish_status" smallint NOT NULL DEFAULT 1,
  "publish_time" timestamp(6),
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
ALTER TABLE "public"."app_publish_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."app_publish_log"."publish_id" IS '发布日志ID（雪花算法）';
COMMENT ON COLUMN "public"."app_publish_log"."app_id" IS 'AppID（关联 app_info.app_id）';
COMMENT ON COLUMN "public"."app_publish_log"."platform" IS '平台（1-iOS, 2-Android）';
COMMENT ON COLUMN "public"."app_publish_log"."version_code" IS 'APK整包版本号';
COMMENT ON COLUMN "public"."app_publish_log"."version_name" IS 'APK整包版本名';
COMMENT ON COLUMN "public"."app_publish_log"."wgt_version" IS 'WGT资源版本号（热更资源版本，整包时为 NULL）';
COMMENT ON COLUMN "public"."app_publish_log"."update_type" IS '更新类型（1-wgt热更, 2-apk整包）';
COMMENT ON COLUMN "public"."app_publish_log"."download_url" IS '下载地址';
COMMENT ON COLUMN "public"."app_publish_log"."release_notes" IS '对外更新日志（展示给用户）';
COMMENT ON COLUMN "public"."app_publish_log"."is_force" IS '是否强制（0-否 1-是）';
COMMENT ON COLUMN "public"."app_publish_log"."file_size" IS '包大小(字节)';
COMMENT ON COLUMN "public"."app_publish_log"."file_md5" IS '文件MD5';
COMMENT ON COLUMN "public"."app_publish_log"."publisher" IS '发布人';
COMMENT ON COLUMN "public"."app_publish_log"."publish_reason" IS '发布原因(内部备注)';
COMMENT ON COLUMN "public"."app_publish_log"."publish_status" IS '发布状态（1-待发布, 2-已发布, 3-已撤销）';
COMMENT ON COLUMN "public"."app_publish_log"."publish_time" IS '发布时间';
COMMENT ON COLUMN "public"."app_publish_log"."creater" IS '创建者';
COMMENT ON COLUMN "public"."app_publish_log"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."app_publish_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."app_publish_log"."updater" IS '更新者';
COMMENT ON COLUMN "public"."app_publish_log"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."app_publish_log"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."app_publish_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."app_publish_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."app_publish_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."app_publish_log"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."app_publish_log"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."app_publish_log"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."app_publish_log"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."app_publish_log" IS 'App发布日志表';

-- ----------------------------

-- Primary Key structure for table app_publish_log
-- ----------------------------
ALTER TABLE "public"."app_publish_log" ADD CONSTRAINT "app_publish_log_pkey" PRIMARY KEY ("publish_id");

-- ----------------------------
`,el=Le({__name:"AppPublishLog",setup($e){function w(i){return[{label:"编辑",icon:Me,handler:()=>R(i)},{label:"发布",icon:fe,disabled:i.publishStatus!==D.PENDING,handler:()=>Y(i)},{label:"删除",icon:Te,divided:!0,handler:()=>X(i)}]}const E=Se(),F=u(E.query.appName||"App"),P=u(Number(E.query.appId)||0),r=u(""),d=u(""),S={publishId:0,versionCode:"",versionName:"",updateType:C.HOT,wgtVersion:"",downloadUrl:"",releaseNotes:"",isForce:0,fileSize:0,fileMd5:"",publisher:"",publishReason:""},z=[{prop:"versionCode",label:"版本号",width:120,slot:"versionCode"},{prop:"updateType",label:"更新类型",width:100,slot:"updateType"},{prop:"isForce",label:"强制更新",width:90,slot:"isForce"},{prop:"fileSize",label:"包大小",width:100},{prop:"releaseNotes",label:"更新日志",minWidth:200,showOverflowTooltip:!0},{prop:"publishStatus",label:"发布状态",width:100,cellType:"tag",tagMap:ye,tagLabelMap:Ae},{prop:"publisher",label:"发布人",width:90},{type:"audit",prop:"publishTime",label:"发布时间"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],U=u(),{drawerVisible:_,isEdit:m,formData:t,openEdit:R,handleSubmit:x,resetForm:k}=we({formRef:U,defaultFormData:S,onSubmit:()=>{T.success(m.value?xe:ke)}}),{allData:B,loading:g,pagination:b,searchKeyword:N,filteredData:$,total:q,handleSearch:O,deleteItem:G}=Fe({initialData:[],keywordFields:["versionCode"]}),W=Ie(()=>{let i=$.value;return r.value!==""&&(i=i.filter(l=>l.updateType===r.value)),d.value!==""&&(i=i.filter(l=>l.publishStatus===d.value)),i});function K(){g.value=!0,setTimeout(()=>{B.value=Ve.filter(i=>i.appId===P.value),g.value=!1},ze)}function j(){m.value=!1,Object.assign(t,S),_.value=!0}async function Y(i){await be(`确定要发布版本 v${i.versionCode} 吗？`)&&(i.publishStatus=D.PUBLISHED,i.publishTime=new Date().toLocaleString(),T.success("发布成功"))}async function X(i){await ce(i.versionCode)&&(G(l=>l.publishId!==i.publishId),T.success(Re))}function H(i){var l;return((l=h.find(M=>M.value===i))==null?void 0:l.label)||"未知"}return Ce(()=>K()),(i,l)=>{const M=A("table-structure-drawer"),Z=re,v=de,J=ue,f=se,Q=ne,ee=ie,le=A("card-layout"),s=Oe,n=Ne,I=_e,ae=me,oe=ge,pe=te;return y(),he(Ee,null,[o(le,{title:`${F.value} - 发布日志`},{"title-extra":p(()=>[o(M,{sql:e(Be)},null,8,["sql"])]),search:p(()=>[o(Z,{modelValue:e(N),"onUpdate:modelValue":l[0]||(l[0]=a=>V(N)?N.value=a:null),placeholder:"搜索版本号",onSearch:e(O)},null,8,["modelValue","onSearch"]),o(v,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=a=>r.value=a),placeholder:"选择更新类型",options:e(h),onSearch:e(O)},null,8,["modelValue","options","onSearch"]),o(v,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=a=>d.value=a),placeholder:"选择发布状态",options:e(De),onSearch:e(O)},null,8,["modelValue","options","onSearch"])]),actions:p(()=>[o(J,{"margin-left":10,onClick:j},{default:p(()=>[...l[16]||(l[16]=[c("新增发布",-1)])]),_:1})]),default:p(()=>[o(ee,{pageNum:e(b).pageNum,"onUpdate:pageNum":l[3]||(l[3]=a=>e(b).pageNum=a),pageSize:e(b).pageSize,"onUpdate:pageSize":l[4]||(l[4]=a=>e(b).pageSize=a),data:W.value,columns:z,total:e(q),loading:e(g),"row-key":"publishId","show-tool-bar":!1,"show-pagination":!1},{versionCode:p(({row:a})=>[o(f,{type:"info",size:"small"},{default:p(()=>[c("v"+L(a.versionCode),1)]),_:2},1024)]),updateType:p(({row:a})=>[o(f,{type:a.updateType===e(C).FULL?"warning":"success",size:"small"},{default:p(()=>[c(L(H(a.updateType)),1)]),_:2},1032,["type"])]),isForce:p(({row:a})=>[o(f,{type:a.isForce===1?"danger":"info",size:"small"},{default:p(()=>[c(L(a.isForce===1?"是":"否"),1)]),_:2},1032,["type"])]),actions:p(({row:a})=>[o(Q,{items:w(a),row:a},null,8,["items","row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1},8,["title"]),o(pe,{modelValue:e(_),"onUpdate:modelValue":l[15]||(l[15]=a=>V(_)?_.value=a:null),title:e(m)?"编辑发布记录":"新增发布记录",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":e(m)?"保存修改":"确认创建","on-confirm":e(x),onClosed:e(k)},{default:p(()=>[o(oe,{ref_key:"formRef",ref:U,model:e(t),"label-width":"100px","label-position":"right"},{default:p(()=>[o(n,{label:"版本号",prop:"versionCode",rules:[{required:!0,message:"请输入版本号",trigger:"blur"}]},{default:p(()=>[o(s,{modelValue:e(t).versionCode,"onUpdate:modelValue":l[5]||(l[5]=a=>e(t).versionCode=a),placeholder:"如：2.1.0"},null,8,["modelValue"])]),_:1}),o(n,{label:"版本名",prop:"versionName",rules:[{required:!0,message:"请输入版本名",trigger:"blur"}]},{default:p(()=>[o(s,{modelValue:e(t).versionName,"onUpdate:modelValue":l[6]||(l[6]=a=>e(t).versionName=a),placeholder:"如：2.1.0"},null,8,["modelValue"])]),_:1}),o(n,{label:"更新类型",prop:"updateType"},{default:p(()=>[o(I,{modelValue:e(t).updateType,"onUpdate:modelValue":l[7]||(l[7]=a=>e(t).updateType=a),options:e(h)},null,8,["modelValue","options"])]),_:1}),e(t).updateType===e(C).FULL?(y(),Ue(n,{key:0,label:"WGT版本",prop:"wgtVersion"},{default:p(()=>[o(s,{modelValue:e(t).wgtVersion,"onUpdate:modelValue":l[8]||(l[8]=a=>e(t).wgtVersion=a),placeholder:"WGT资源版本号"},null,8,["modelValue"])]),_:1})):ve("",!0),o(n,{label:"下载地址",prop:"downloadUrl"},{default:p(()=>[o(s,{modelValue:e(t).downloadUrl,"onUpdate:modelValue":l[9]||(l[9]=a=>e(t).downloadUrl=a),placeholder:"下载地址"},null,8,["modelValue"])]),_:1}),o(n,{label:"是否强制",prop:"isForce"},{default:p(()=>[o(I,{modelValue:e(t).isForce,"onUpdate:modelValue":l[10]||(l[10]=a=>e(t).isForce=a),options:e(Pe)},null,8,["modelValue","options"])]),_:1}),o(n,{label:"包大小(字节)",prop:"fileSize"},{default:p(()=>[o(ae,{modelValue:e(t).fileSize,"onUpdate:modelValue":l[11]||(l[11]=a=>e(t).fileSize=a),min:0},null,8,["modelValue"])]),_:1}),o(n,{label:"文件MD5",prop:"fileMd5"},{default:p(()=>[o(s,{modelValue:e(t).fileMd5,"onUpdate:modelValue":l[12]||(l[12]=a=>e(t).fileMd5=a),placeholder:"文件MD5校验值"},null,8,["modelValue"])]),_:1}),o(n,{label:"发布人",prop:"publisher"},{default:p(()=>[o(s,{modelValue:e(t).publisher,"onUpdate:modelValue":l[13]||(l[13]=a=>e(t).publisher=a),placeholder:"请输入发布人"},null,8,["modelValue"])]),_:1}),o(n,{label:"更新日志",prop:"releaseNotes"},{default:p(()=>[o(s,{modelValue:e(t).releaseNotes,"onUpdate:modelValue":l[14]||(l[14]=a=>e(t).releaseNotes=a),type:"textarea",rows:4,placeholder:"对外更新日志",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","on-confirm","onClosed"])],64)}}});export{el as default};
