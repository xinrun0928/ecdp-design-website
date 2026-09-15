import{x as ue,y as se,k as re,aO as L,a as de,B as _e,A as me,aP as C,aQ as V,e as be,X as ce,aN as r,f as Ne,a1 as ge,C as Oe}from"./index-DlrKsU8X.js";import{bb as fe,bc as Te,R as Me,au as he,$ as Le,bz as Ce,a as E}from"./element-plus-DrBWcvYy.js";/* empty css                     */import{G as Ee,r as O,n as Ue,L as y,M as Se,a0 as t,W as p,u as a,_ as d,$ as f,j as A,O as ve,Z as Ie,F as Ve,az as ye,c as Ae,aj as D}from"./vue-vendor-BFL4yudo.js";import{b as De}from"./appPublishLogData-DzSYqlzP.js";import{u as we}from"./useCrudDrawer-DZTGmGMZ.js";import{u as Fe}from"./useMockTablePage-CVH8pgnI.js";import{y as Pe}from"./common-CRcHQUfu.js";import"./markdown-CGqRJECw.js";import"./editor-CDjaDkQU.js";import"./ol-map-BDSc84yL.js";const ze=`-- Table structure for app_publish_log
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
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "create_time" timestamp(6) DEFAULT CURRENT_TIMESTAMP,
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
COMMENT ON COLUMN "public"."app_publish_log"."updater" IS '更新者';
COMMENT ON COLUMN "public"."app_publish_log"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."app_publish_log"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."app_publish_log"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."app_publish_log"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."app_publish_log"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."app_publish_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."app_publish_log"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."app_publish_log"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON COLUMN "public"."app_publish_log"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."app_publish_log"."signature_version" IS '数据签名版本号';
COMMENT ON TABLE "public"."app_publish_log" IS 'App发布日志表';

-- ----------------------------

-- Primary Key structure for table app_publish_log
-- ----------------------------
ALTER TABLE "public"."app_publish_log" ADD CONSTRAINT "app_publish_log_pkey" PRIMARY KEY ("publish_id");

-- ----------------------------
`,Ye=Ee({__name:"AppPublishLog",setup(Re){function w(o){return[{label:"编辑",icon:he,handler:()=>R(o)},{label:"发布",icon:Le,disabled:o.publishStatus!==r.PENDING,handler:()=>X(o)},{label:"删除",icon:Ce,divided:!0,handler:()=>Y(o)}]}const U=ye(),F=O(U.query.appName||"App"),P=O(Number(U.query.appId)||0),_=O(""),m=O(""),S={publishId:0,versionCode:"",versionName:"",updateType:L.HOT,wgtVersion:"",downloadUrl:"",releaseNotes:"",isForce:0,fileSize:0,fileMd5:"",publisher:"",publishReason:""},z=[{prop:"versionCode",label:"版本号",width:120,slot:"versionCode"},{prop:"updateType",label:"更新类型",width:100,slot:"updateType"},{prop:"isForce",label:"强制更新",width:90,slot:"isForce"},{prop:"fileSize",label:"包大小",width:100},{prop:"releaseNotes",label:"更新日志",minWidth:200,showOverflowTooltip:!0},{prop:"publishStatus",label:"发布状态",width:100,slot:"publishStatus"},{prop:"publisher",label:"发布人",width:90},{type:"audit",prop:"publishTime",label:"发布时间"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],{drawerVisible:b,isEdit:c,formData:i,openEdit:R,handleSubmit:x,resetForm:k}=we({defaultFormData:S,onSubmit:()=>{E.success(c.value?"编辑成功":"新增成功")}}),{allData:B,loading:T,pagination:N,searchKeyword:M,filteredData:$,total:q,handleSearch:h,deleteItem:G}=Fe({initialData:[],keywordFields:["versionCode"]}),K=Ae(()=>{let o=$.value;return _.value!==""&&(o=o.filter(e=>e.updateType===_.value)),m.value!==""&&(o=o.filter(e=>e.publishStatus===m.value)),o});function W(){x()}function j(){T.value=!0,setTimeout(()=>{B.value=De.filter(o=>o.appId===P.value),T.value=!1},300)}function H(){c.value=!1,Object.assign(i,S),b.value=!0}async function X(o){await Ne(`确定要发布版本 v${o.versionCode} 吗？`)&&(o.publishStatus=r.PUBLISHED,o.publishTime=new Date().toLocaleString(),E.success("发布成功"))}async function Y(o){await ge(o.versionCode)&&(G(e=>e.publishId!==o.publishId),E.success("删除成功"))}function Q(o){var e;return((e=C.find(s=>s.value===o))==null?void 0:e.label)||"未知"}function Z(o){var e;return((e=V.find(s=>s.value===o))==null?void 0:e.label)||"未知"}function J(o){return{[r.PENDING]:"warning",[r.PUBLISHED]:"success",[r.REVOKED]:"info"}[o]||"info"}return Ue(()=>j()),(o,e)=>{const s=D("table-structure-drawer"),ee=_e,v=me,le=de,g=re,ae=se,te=ue,oe=D("panel-layout"),u=Me,n=Te,I=be,pe=ce,ie=fe,ne=Oe;return y(),Se(Ve,null,[t(oe,{title:`${F.value} - 发布日志`},{"title-extra":p(()=>[t(s,{sql:a(ze)},null,8,["sql"])]),search:p(()=>[t(ee,{modelValue:a(M),"onUpdate:modelValue":e[0]||(e[0]=l=>A(M)?M.value=l:null),placeholder:"搜索版本号",onSearch:a(h)},null,8,["modelValue","onSearch"]),t(v,{modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=l=>_.value=l),placeholder:"选择更新类型",options:a(C),onSearch:a(h)},null,8,["modelValue","options","onSearch"]),t(v,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),placeholder:"选择发布状态",options:a(V),onSearch:a(h)},null,8,["modelValue","options","onSearch"])]),actions:p(()=>[t(le,{"margin-left":10,onClick:H},{default:p(()=>[...e[16]||(e[16]=[d("新增发布",-1)])]),_:1})]),default:p(()=>[t(te,{"page-num":a(N).pageNum,"onUpdate:pageNum":e[3]||(e[3]=l=>a(N).pageNum=l),"page-size":a(N).pageSize,"onUpdate:pageSize":e[4]||(e[4]=l=>a(N).pageSize=l),data:K.value,columns:z,total:a(q),loading:a(T),"row-key":"publishId","show-tool-bar":!1,"show-pagination":!1},{versionCode:p(({row:l})=>[t(g,{type:"info",size:"small"},{default:p(()=>[d("v"+f(l.versionCode),1)]),_:2},1024)]),updateType:p(({row:l})=>[t(g,{type:l.updateType===a(L).FULL?"warning":"success",size:"small"},{default:p(()=>[d(f(Q(l.updateType)),1)]),_:2},1032,["type"])]),isForce:p(({row:l})=>[t(g,{type:l.isForce===1?"danger":"info",size:"small"},{default:p(()=>[d(f(l.isForce===1?"是":"否"),1)]),_:2},1032,["type"])]),publishStatus:p(({row:l})=>[t(g,{type:J(l.publishStatus),effect:"light",size:"small",round:""},{default:p(()=>[d(f(Z(l.publishStatus)),1)]),_:2},1032,["type"])]),actions:p(({row:l})=>[t(ae,{items:w(l),row:l},null,8,["items","row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1},8,["title"]),t(ne,{modelValue:a(b),"onUpdate:modelValue":e[15]||(e[15]=l=>A(b)?b.value=l:null),title:a(c)?"编辑发布记录":"新增发布记录",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":a(c)?"保存修改":"确认创建","on-confirm":W,onClosed:a(k)},{default:p(()=>[t(ie,{ref:"formRef",model:a(i),"label-width":"100px","label-position":"right"},{default:p(()=>[t(n,{label:"版本号",prop:"versionCode",rules:[{required:!0,message:"请输入版本号",trigger:"blur"}]},{default:p(()=>[t(u,{modelValue:a(i).versionCode,"onUpdate:modelValue":e[5]||(e[5]=l=>a(i).versionCode=l),placeholder:"如：2.1.0"},null,8,["modelValue"])]),_:1}),t(n,{label:"版本名",prop:"versionName",rules:[{required:!0,message:"请输入版本名",trigger:"blur"}]},{default:p(()=>[t(u,{modelValue:a(i).versionName,"onUpdate:modelValue":e[6]||(e[6]=l=>a(i).versionName=l),placeholder:"如：2.1.0"},null,8,["modelValue"])]),_:1}),t(n,{label:"更新类型",prop:"updateType"},{default:p(()=>[t(I,{modelValue:a(i).updateType,"onUpdate:modelValue":e[7]||(e[7]=l=>a(i).updateType=l),options:a(C)},null,8,["modelValue","options"])]),_:1}),a(i).updateType===a(L).FULL?(y(),ve(n,{key:0,label:"WGT版本",prop:"wgtVersion"},{default:p(()=>[t(u,{modelValue:a(i).wgtVersion,"onUpdate:modelValue":e[8]||(e[8]=l=>a(i).wgtVersion=l),placeholder:"WGT资源版本号"},null,8,["modelValue"])]),_:1})):Ie("",!0),t(n,{label:"下载地址",prop:"downloadUrl"},{default:p(()=>[t(u,{modelValue:a(i).downloadUrl,"onUpdate:modelValue":e[9]||(e[9]=l=>a(i).downloadUrl=l),placeholder:"下载地址"},null,8,["modelValue"])]),_:1}),t(n,{label:"是否强制",prop:"isForce"},{default:p(()=>[t(I,{modelValue:a(i).isForce,"onUpdate:modelValue":e[10]||(e[10]=l=>a(i).isForce=l),options:a(Pe)},null,8,["modelValue","options"])]),_:1}),t(n,{label:"包大小(字节)",prop:"fileSize"},{default:p(()=>[t(pe,{modelValue:a(i).fileSize,"onUpdate:modelValue":e[11]||(e[11]=l=>a(i).fileSize=l),min:0},null,8,["modelValue"])]),_:1}),t(n,{label:"文件MD5",prop:"fileMd5"},{default:p(()=>[t(u,{modelValue:a(i).fileMd5,"onUpdate:modelValue":e[12]||(e[12]=l=>a(i).fileMd5=l),placeholder:"文件MD5校验值"},null,8,["modelValue"])]),_:1}),t(n,{label:"发布人",prop:"publisher"},{default:p(()=>[t(u,{modelValue:a(i).publisher,"onUpdate:modelValue":e[13]||(e[13]=l=>a(i).publisher=l),placeholder:"请输入发布人"},null,8,["modelValue"])]),_:1}),t(n,{label:"更新日志",prop:"releaseNotes"},{default:p(()=>[t(u,{modelValue:a(i).releaseNotes,"onUpdate:modelValue":e[14]||(e[14]=l=>a(i).releaseNotes=l),type:"textarea",rows:4,placeholder:"对外更新日志",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","onClosed"])],64)}}});export{Ye as default};
