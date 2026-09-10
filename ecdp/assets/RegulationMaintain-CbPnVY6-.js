import{x as ce,y as se,F as _e,ba as xe,e as pe,N as ge,d as Ne,q as we,r as ke,a as Fe,w as Ye,O as Pe,aU as Be}from"./index-BQSjtNr4.js";import{a_ as $e,l as Xe,d as me,ar as ye,bx as Oe,b9 as Le,ba as Te,bu as Je,R as fe,Z as Ge,a as L,b7 as ze,bw as He,V as qe,a0 as Ke,a1 as We,aa as je,i as Ze}from"./element-plus-Bt8i1BPk.js";/* empty css                     */import{_ as Qe,m as et,r as oe,a as tt,b as ne,R as w}from"./RegulationDetailDrawer.vue_vue_type_style_index_0_lang-DEqbNieP.js";import{u as at}from"./useMockTablePage-BzRj7glv.js";/* empty css                       */import{G as Ce,L as Z,M as Q,F as be,P as m,a0 as e,W as n,$ as Me,ac as re,u as c,p as N,c as ie,m as Ee,aj as ue,_ as de,l as lt,Z as ot}from"./vue-vendor-CrWx_I7L.js";import{b as nt}from"./common-CRcHQUfu.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";const rt={class:"category-tree-panel"},it={class:"tree-wrapper"},ut={class:"tree-node"},dt={class:"tree-node-label"},ct={class:"tree-node-actions"},st=Ce({__name:"CategoryTreePanel",props:{categories:{}},emits:["node-click"],setup(ee,{expose:S,emit:k}){const F=xe,p=ee,h=k,b=N(""),Y=ie(()=>{if(!b.value)return p.categories;const u=o=>o.reduce((d,_)=>{const y=_.children?u(_.children):[];return(_.categoryName.includes(b.value)||y.length>0)&&d.push({..._,children:y.length>0?y:void 0}),d},[]);return u(p.categories)}),P=ie(()=>[{categoryId:0,categoryName:"（顶级分类）",children:p.categories}]);function D(u){h("node-click",u)}const M=N(!1),T=N("新增分类"),E=N(),r=Ee({categoryId:void 0,categoryName:"",parentId:0,categoryType:0,displayOrder:0,status:1101,remark:""}),v={categoryName:[{required:!0,message:"请输入分类名称",trigger:"blur"}]};function I(u,o){for(const d of u){if(d.categoryId===o)return d;if(d.children){const _=I(d.children,o);if(_)return _}}}function C(u){let o=0;for(const d of u)if(d.categoryId>o&&(o=d.categoryId),d.children){const _=C(d.children);_>o&&(o=_)}return o+1}function g(u,o){for(let d=0;d<u.length;d++){if(u[d].categoryId===o)return u.splice(d,1),!0;if(u[d].children&&g(u[d].children,o))return!0}return!1}function V(){T.value="新增分类",Object.assign(r,{categoryId:void 0,categoryName:"",parentId:0,categoryType:0,displayOrder:0,status:1101,remark:""}),M.value=!0}function t(u){T.value="编辑分类",Object.assign(r,{categoryId:u.categoryId,categoryName:u.categoryName,parentId:u.parentId??0,categoryType:u.categoryType??0,displayOrder:u.displayOrder??0,status:u.status??1101,remark:u.remark??""}),M.value=!0}async function B(u){await ge(u.categoryName)&&(g(p.categories,u.categoryId),L.success("删除成功"))}async function $(){var u;try{await((u=E.value)==null?void 0:u.validate())}catch{return!1}if(r.categoryId){const o=I(p.categories,r.categoryId);o&&(o.categoryName=r.categoryName,o.parentId=r.parentId,o.categoryType=r.categoryType,o.displayOrder=r.displayOrder,o.status=r.status,o.remark=r.remark,L.success("修改成功"))}else{const d={categoryId:C(p.categories),categoryName:r.categoryName,parentId:r.parentId,categoryType:r.categoryType,displayOrder:r.displayOrder,status:r.status,remark:r.remark};if(r.parentId){const _=I(p.categories,r.parentId);_&&(_.children||(_.children=[]),_.children.push(d))}else p.categories.push(d);L.success("新增成功")}return!0}return S({handleAdd:V}),(u,o)=>{const d=ce,_=Xe,y=me,X=$e,J=Je,f=Te,R=fe,G=_e,z=Ge,H=pe,q=Le,K=se;return Z(),Q(be,null,[m("div",rt,[e(d,{modelValue:b.value,"onUpdate:modelValue":o[0]||(o[0]=s=>b.value=s),placeholder:"请输入",width:"100%","margin-left":0,clearable:"",class:"tree-search"},null,8,["modelValue"]),m("div",it,[e(X,{data:Y.value,props:{children:"children",label:"categoryName"},"node-key":"categoryId","default-expand-all":"","highlight-current":"",onNodeClick:D},{default:n(({node:s,data:l})=>[m("div",ut,[e(_,{content:s.label,placement:"top",disabled:s.label.length<=10},{default:n(()=>[m("span",dt,Me(s.label),1)]),_:2},1032,["content","disabled"]),m("span",ct,[e(y,{class:"tree-action-icon",onClick:re(a=>t(l),["stop"])},{default:n(()=>[e(c(ye))]),_:1},8,["onClick"]),e(y,{class:"tree-action-icon danger",onClick:re(a=>B(l),["stop"])},{default:n(()=>[e(c(Oe))]),_:1},8,["onClick"])])])]),_:1},8,["data"])])]),e(K,{modelValue:M.value,"onUpdate:modelValue":o[7]||(o[7]=s=>M.value=s),title:T.value,size:"480px","destroy-on-close":"","on-confirm":$},{default:n(()=>[e(q,{ref_key:"formRef",ref:E,model:r,rules:v,"label-width":"90px"},{default:n(()=>[e(f,{label:"上级分类",prop:"parentId"},{default:n(()=>[e(J,{modelValue:r.parentId,"onUpdate:modelValue":o[1]||(o[1]=s=>r.parentId=s),data:P.value,props:{label:"name",children:"children"},"check-strictly":"","render-after-expand":!1,placeholder:"请选择上级分类（不选则为顶级）",clearable:"",class:"full-width"},null,8,["modelValue","data"])]),_:1}),e(f,{label:"分类名称",prop:"categoryName"},{default:n(()=>[e(R,{modelValue:r.categoryName,"onUpdate:modelValue":o[2]||(o[2]=s=>r.categoryName=s),placeholder:"请输入分类名称",maxlength:"50"},null,8,["modelValue"])]),_:1}),e(f,{label:"分类类型"},{default:n(()=>[e(G,{modelValue:r.categoryType,"onUpdate:modelValue":o[3]||(o[3]=s=>r.categoryType=s),options:c(F),placeholder:"请选择"},null,8,["modelValue","options"])]),_:1}),e(f,{label:"排序"},{default:n(()=>[e(z,{modelValue:r.displayOrder,"onUpdate:modelValue":o[4]||(o[4]=s=>r.displayOrder=s),min:0,max:9999,"controls-position":"right",class:"full-width"},null,8,["modelValue"])]),_:1}),e(f,{label:"状态"},{default:n(()=>[e(H,{modelValue:r.status,"onUpdate:modelValue":o[5]||(o[5]=s=>r.status=s),options:c(nt)},null,8,["modelValue","options"])]),_:1}),e(f,{label:"备注"},{default:n(()=>[e(R,{modelValue:r.remark,"onUpdate:modelValue":o[6]||(o[6]=s=>r.remark=s),type:"textarea",rows:2,placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}}),_t=Ne(st,[["__scopeId","data-v-2b9adce4"]]),pt=`-- Table structure for duty_regulation
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_regulation";
CREATE TABLE "public"."duty_regulation" (
  "regulation_id" bigint NOT NULL,
  "category_id" bigint,
  "doc_name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "version" varchar(255) COLLATE "pg_catalog"."default",
  "regulation_type_code" varchar(32) COLLATE "pg_catalog"."default",
  "regulation_type_label" varchar(255) COLLATE "pg_catalog"."default",
  "effect_status" integer NOT NULL DEFAULT 1,
  "effective_date" timestamp(6),
  "abolition_date" timestamp(6),
  "publish_dept" varchar(255) COLLATE "pg_catalog"."default",
  "description" text COLLATE "pg_catalog"."default",
  "attachment_json" text COLLATE "pg_catalog"."default",
  "search_count" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_regulation" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_regulation"."regulation_id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_regulation"."category_id" IS '制度分类ID';
COMMENT ON COLUMN "public"."duty_regulation"."doc_name" IS '文档名称';
COMMENT ON COLUMN "public"."duty_regulation"."version" IS '版本号';
COMMENT ON COLUMN "public"."duty_regulation"."regulation_type_code" IS '制度类型编码（关联字典表）';
COMMENT ON COLUMN "public"."duty_regulation"."regulation_type_label" IS '制度类型名称（关联字典表）';
COMMENT ON COLUMN "public"."duty_regulation"."effect_status" IS '生效状态（1实施 2废止，默认1）';
COMMENT ON COLUMN "public"."duty_regulation"."effective_date" IS '生效时间';
COMMENT ON COLUMN "public"."duty_regulation"."abolition_date" IS '废止时间';
COMMENT ON COLUMN "public"."duty_regulation"."publish_dept" IS '发布部门';
COMMENT ON COLUMN "public"."duty_regulation"."description" IS '描述';
COMMENT ON COLUMN "public"."duty_regulation"."attachment_json" IS '附件列表（JSON字符串，格式 [{"id":"xxx","name":"xxx","url":"xxx"}]）';
COMMENT ON COLUMN "public"."duty_regulation"."search_count" IS '搜索次数（用于热门搜索排序）';
COMMENT ON COLUMN "public"."duty_regulation"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_regulation"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_regulation"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_regulation"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_regulation"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_regulation"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_regulation"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_regulation"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_regulation"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_regulation"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_regulation"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_regulation"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_regulation"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_regulation"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_regulation"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_regulation" IS '值守制度表';

-- ----------------------------

-- Indexes structure for table duty_regulation
-- ----------------------------
CREATE INDEX "idx_duty_regulation_doc_name" ON "public"."duty_regulation" USING btree (
  "doc_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_regulation_category" ON "public"."duty_regulation" USING btree (
  "category_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
) WHERE category_id IS NOT NULL;
CREATE INDEX "idx_duty_regulation_type_status" ON "public"."duty_regulation" USING btree (
  "regulation_type_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "effect_status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_regulation_status" ON "public"."duty_regulation" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_regulation
-- ----------------------------
ALTER TABLE "public"."duty_regulation" ADD CONSTRAINT "duty_regulation_pkey" PRIMARY KEY ("regulation_id");

-- ----------------------------
`,gt=`-- Table structure for duty_regulation_category
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_regulation_category";
CREATE TABLE "public"."duty_regulation_category" (
  "category_id" bigint NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "category_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "category_type" integer NOT NULL DEFAULT 0,
  "display_order" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "updater_id" bigint,
  "update_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_regulation_category" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_regulation_category"."category_id" IS '分类ID';
COMMENT ON COLUMN "public"."duty_regulation_category"."parent_id" IS '上级分类ID（0表示顶级分类）';
COMMENT ON COLUMN "public"."duty_regulation_category"."category_name" IS '分类名称';
COMMENT ON COLUMN "public"."duty_regulation_category"."category_type" IS '分类类型（0其他 1基本工作制度 2专项工作制度）';
COMMENT ON COLUMN "public"."duty_regulation_category"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."duty_regulation_category"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_regulation_category"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_regulation_category"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_regulation_category"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_regulation_category"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_regulation_category"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_regulation_category"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_regulation_category"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_regulation_category"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_regulation_category"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_regulation_category"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_regulation_category"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_regulation_category"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_regulation_category"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_regulation_category"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_regulation_category" IS '值守制度分类表';

-- ----------------------------

-- Indexes structure for table duty_regulation_category
-- ----------------------------
CREATE INDEX "idx_duty_regulation_category_parent_sort" ON "public"."duty_regulation_category" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_regulation_category_name" ON "public"."duty_regulation_category" USING btree (
  "category_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_regulation_category_status" ON "public"."duty_regulation_category" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_regulation_category
-- ----------------------------
ALTER TABLE "public"."duty_regulation_category" ADD CONSTRAINT "duty_regulation_category_pkey" PRIMARY KEY ("category_id");

-- ----------------------------
`,Nt=`-- Table structure for duty_regulation_search_log
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_regulation_search_log";
CREATE TABLE "public"."duty_regulation_search_log" (
  "log_id" bigint NOT NULL,
  "keyword" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "regulation_id" bigint,
  "doc_name" varchar(255) COLLATE "pg_catalog"."default",
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_regulation_search_log" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_regulation_search_log"."log_id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."keyword" IS '搜索关键词';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."regulation_id" IS '关联制度ID（精确命中时填写）';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."doc_name" IS '匹配的文档名称（冗余，展示用）';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."creater" IS '搜索人';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."creater_id" IS '搜索人ID';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."create_time" IS '搜索时间';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."creater_org_id" IS '搜索人组织ID';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."creater_org_name" IS '搜索人组织名称';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_regulation_search_log"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_regulation_search_log" IS '制度搜索日志表';

-- ----------------------------

-- Indexes structure for table duty_regulation_search_log
-- ----------------------------
CREATE INDEX "idx_regulation_search_log_keyword" ON "public"."duty_regulation_search_log" USING btree (
  "keyword" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_regulation_search_log_creater" ON "public"."duty_regulation_search_log" USING btree (
  "creater_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "create_time" "pg_catalog"."timestamp_ops" DESC NULLS LAST
) WHERE creater_id IS NOT NULL;
CREATE INDEX "idx_regulation_search_log_time" ON "public"."duty_regulation_search_log" USING btree (
  "create_time" "pg_catalog"."timestamp_ops" DESC NULLS LAST
);

-- Primary Key structure for table duty_regulation_search_log
-- ----------------------------
ALTER TABLE "public"."duty_regulation_search_log" ADD CONSTRAINT "duty_regulation_search_log_pkey" PRIMARY KEY ("log_id");

-- ----------------------------
`,mt={class:"aside-header-extra"},yt={class:"upload-area"},Ot={class:"upload-content"},Lt={key:0,class:"uploaded-file"},Tt={class:"file-name"},ft=Ce({__name:"RegulationMaintain",setup(ee){const S=N(""),{allData:k,loading:F,pagination:p,searchKeyword:h,pagedData:b,total:Y,deleteItem:P,upsertItem:D}=at({initialData:et,keywordFields:["docName"],selectFilters:[{key:"status",field:"status",value:S}]}),M=N(null),T=N(!1),E=N(!1),r=N(null),v=N("新增"),I=N(),C=N(),g=N(null),V={regulationId:void 0,docName:"",version:"",regulationTypeCode:"",regulationTypeLabel:"",description:"",status:"实施",effectiveDate:"",abolitionDate:"",publishDept:"",attachmentJson:[]},t=Ee({...V}),B={docName:[{required:!0,message:"请输入文档名称",trigger:"blur"}],regulationTypeCode:[{required:!0,message:"请选择制度类型",trigger:"change"}]},$=[{prop:"docName",label:"文档名称",minWidth:250,showOverflowTooltip:!0},{prop:"version",label:"版本",width:80},{prop:"regulationTypeLabel",label:"制度类型",width:100},{prop:"status",label:"生效状态",width:90,cellType:"tag",tagMap:{[w.ACTIVE]:"success",[w.REVOKED]:"danger"},tagLabelMap:{[w.ACTIVE]:"实施",[w.REVOKED]:"废止"}},{prop:"effectiveDate",label:"生效时间",width:170},{prop:"abolitionDate",label:"废止时间",width:170,formatter:l=>l.abolitionDate||"-"},{prop:"publishDept",label:"发布部门",width:120,showOverflowTooltip:!0},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"更新人"},{type:"audit",prop:"updateTime",label:"更新时间"},{type:"actions",label:"操作",slot:"actions"}],u=N();function o(){var l;(l=u.value)==null||l.handleAdd()}const d=[{label:"修改",icon:ye,handler:l=>f(l)},{label:"查看",icon:ze,handler:l=>J(l)},{label:"删除",icon:Oe,divided:!0,handler:l=>R(l)}];function _(l){M.value=l.categoryId,y()}function y(){p.pageNum=1}function X(){v.value="新增",z(),T.value=!0}function J(l){r.value=l,E.value=!0}function f(l){v.value="修改",Object.assign(t,{regulationId:l.regulationId,docName:l.docName,version:l.version,regulationTypeCode:l.regulationTypeCode,regulationTypeLabel:l.regulationTypeLabel,description:l.description??"",status:l.status,effectiveDate:l.effectiveDate??"",abolitionDate:l.abolitionDate??"",publishDept:l.publishDept??"",attachmentJson:l.attachmentJson??[]}),T.value=!0}async function R(l){await ge(l.docName)&&(P(a=>a.regulationId===l.regulationId),L.success("删除成功"))}async function G(){var l;try{await((l=I.value)==null?void 0:l.validate())}catch{return!1}if(t.regulationId){const a=k.value.find(U=>U.regulationId===t.regulationId);a&&(D({...a,docName:t.docName,version:t.version,regulationTypeCode:t.regulationTypeCode,regulationTypeLabel:t.regulationTypeLabel,description:t.description,status:t.status,effectiveDate:t.effectiveDate,abolitionDate:t.abolitionDate,publishDept:t.publishDept,attachmentJson:g.value?[{id:String(Date.now()),name:g.value.name,url:`uploads/${g.value.name}`}]:t.attachmentJson},"regulationId"),L.success("修改成功"))}else D({regulationId:Date.now(),docName:t.docName,version:t.version,regulationTypeCode:t.regulationTypeCode,regulationTypeLabel:t.regulationTypeLabel,status:t.status,description:t.description,effectiveDate:t.effectiveDate,abolitionDate:t.abolitionDate,publishDept:t.publishDept,attachmentJson:g.value?[{id:String(Date.now()),name:g.value.name,url:`uploads/${g.value.name}`}]:[],...Pe()},"regulationId"),L.success("新增成功");return!0}function z(){var l;Object.assign(t,{...V}),g.value=null,(l=C.value)==null||l.clearFiles()}function H(l){var a,U;if(l.raw){if(!Be(l.raw.size,10)){L.error("文件大小不能超过10M"),(a=C.value)==null||a.clearFiles();return}const A=[".doc",".docx"],W=l.raw.name.toLowerCase();if(!A.some(j=>W.endsWith(j))){L.error("仅支持 doc、docx 格式文件"),(U=C.value)==null||U.clearFiles();return}g.value=l.raw,t.attachmentJson=[{id:String(Date.now()),name:l.raw.name,url:`uploads/${l.raw.name}`}]}}function q(){L.warning("只能上传一个文件")}function K(){g.value=null,t.attachmentJson=[]}function s(){g.value=null,t.attachmentJson=[]}return(l,a)=>{const U=ue("table-structure-drawer"),A=Fe,W=ce,j=Ye,Ie=ke,Ue=we,Se=ue("split-layout"),x=fe,O=Te,he=_e,ve=pe,te=qe,ae=me,Ae=Ke,De=Le,Ve=se;return Z(),Q(be,null,[e(Se,{"aside-title":"分类",title:"制度维护"},{"title-extra":n(()=>[e(U,{sql:[c(pt),c(gt),c(Nt)]},null,8,["sql"])]),aside:n(()=>[e(_t,{ref_key:"categoryTreeRef",ref:u,categories:c(tt),onNodeClick:_},null,8,["categories"]),m("div",mt,[e(A,{type:"primary",icon:c(He),size:"small",onClick:o},{default:n(()=>[...a[15]||(a[15]=[de("新增",-1)])]),_:1},8,["icon"])])]),search:n(()=>[e(W,{modelValue:c(h),"onUpdate:modelValue":a[0]||(a[0]=i=>lt(h)?h.value=i:null),placeholder:"请输入文档名称",onSearch:y},null,8,["modelValue"]),e(j,{modelValue:S.value,"onUpdate:modelValue":a[1]||(a[1]=i=>S.value=i),placeholder:"请选择状态",options:c(oe),onChange:y},null,8,["modelValue","options"])]),actions:n(()=>[e(A,{type:"primary","margin-left":10,onClick:X},{default:n(()=>[...a[16]||(a[16]=[de("新增制度",-1)])]),_:1})]),default:n(()=>[e(Ue,{"page-num":c(p).pageNum,"onUpdate:pageNum":a[2]||(a[2]=i=>c(p).pageNum=i),"page-size":c(p).pageSize,"onUpdate:pageSize":a[3]||(a[3]=i=>c(p).pageSize=i),data:c(b),columns:$,total:c(Y),loading:c(F),"row-key":"regulationId","show-tool-bar":!1},{actions:n(({row:i})=>[e(Ie,{items:d,row:i},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),e(Qe,{modelValue:E.value,"onUpdate:modelValue":a[4]||(a[4]=i=>E.value=i),data:r.value,title:"制度详情"},null,8,["modelValue","data"]),e(Ve,{modelValue:T.value,"onUpdate:modelValue":a[14]||(a[14]=i=>T.value=i),title:v.value,size:"500px","destroy-on-close":"","on-confirm":G},{default:n(()=>[e(De,{ref_key:"formRef",ref:I,model:t,rules:B,"label-width":"90px","label-position":"right"},{default:n(()=>[e(O,{label:"文档名称",prop:"docName"},{default:n(()=>[e(x,{modelValue:t.docName,"onUpdate:modelValue":a[5]||(a[5]=i=>t.docName=i),placeholder:"输入"},null,8,["modelValue"])]),_:1}),e(O,{label:"版本号"},{default:n(()=>[e(x,{modelValue:t.version,"onUpdate:modelValue":a[6]||(a[6]=i=>t.version=i),placeholder:"输入"},null,8,["modelValue"])]),_:1}),e(O,{label:"制度类型",prop:"regulationTypeCode"},{default:n(()=>[e(he,{modelValue:t.regulationTypeCode,"onUpdate:modelValue":a[7]||(a[7]=i=>t.regulationTypeCode=i),options:c(ne),placeholder:"请选择",class:"full-width",onChange:a[8]||(a[8]=i=>{var le;t.regulationTypeLabel=((le=c(ne).find(Re=>Re.value===i))==null?void 0:le.label)??""})},null,8,["modelValue","options"])]),_:1}),e(O,{label:"描述",prop:"description"},{default:n(()=>[e(x,{modelValue:t.description,"onUpdate:modelValue":a[9]||(a[9]=i=>t.description=i),type:"textarea",rows:4,placeholder:"风险说明"},null,8,["modelValue"])]),_:1}),e(O,{label:"生效状态"},{default:n(()=>[e(ve,{modelValue:t.status,"onUpdate:modelValue":a[10]||(a[10]=i=>t.status=i),options:c(oe)},null,8,["modelValue","options"])]),_:1}),e(O,{label:"生效时间"},{default:n(()=>[e(te,{modelValue:t.effectiveDate,"onUpdate:modelValue":a[11]||(a[11]=i=>t.effectiveDate=i),type:"datetime","value-format":"YYYY-MM-DD HH:mm",format:"YYYY-MM-DD HH:mm",placeholder:"请选择生效时间",class:"full-width"},null,8,["modelValue"])]),_:1}),e(O,{label:"废止时间"},{default:n(()=>[e(te,{modelValue:t.abolitionDate,"onUpdate:modelValue":a[12]||(a[12]=i=>t.abolitionDate=i),type:"datetime","value-format":"YYYY-MM-DD HH:mm",format:"YYYY-MM-DD HH:mm",placeholder:"未废止可留空",clearable:"",class:"full-width"},null,8,["modelValue"])]),_:1}),e(O,{label:"发布部门"},{default:n(()=>[e(x,{modelValue:t.publishDept,"onUpdate:modelValue":a[13]||(a[13]=i=>t.publishDept=i),placeholder:"请输入发布部门"},null,8,["modelValue"])]),_:1}),e(O,{label:"上传文件"},{default:n(()=>{var i;return[m("div",yt,[e(Ae,{ref_key:"uploadRef",ref:C,class:"regulation-upload",drag:"",action:"#","auto-upload":!1,limit:1,accept:".doc,.docx","on-change":H,"on-exceed":q,"on-remove":K},{tip:n(()=>[...a[18]||(a[18]=[m("div",{class:"upload-tip"},"最大10M/个 支持扩展名：doc .docx",-1)])]),default:n(()=>[m("div",Ot,[e(ae,{class:"upload-icon"},{default:n(()=>[e(c(We))]),_:1}),a[17]||(a[17]=m("div",{class:"upload-text"},"点击或将文件拖拽到这里上传",-1))])]),_:1},512),(i=t.attachmentJson)!=null&&i.length&&!g.value?(Z(),Q("div",Lt,[e(ae,null,{default:n(()=>[e(c(je))]),_:1}),m("span",Tt,Me(t.attachmentJson[0].name),1),e(A,{type:"danger",link:"",icon:c(Ze),onClick:s},null,8,["icon"])])):ot("",!0)])]}),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}}),Vt=Ne(ft,[["__scopeId","data-v-db38b47f"]]);export{Vt as default};
