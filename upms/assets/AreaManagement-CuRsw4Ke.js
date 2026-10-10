import{m as Q,s as z,j as Z,b as J,q as ee,o as ae,v as le,g as ne}from"./index-4pNdp9yc.js";import{ar as te,bn as re,bo as oe,aD as se,bq as ie,bc as de,bd as ce,bl as _e,M as ue,a as g,d as pe}from"./element-plus-FTcyDTKl.js";/* empty css                       */import{a as ge}from"./areaData-DFLUZyLP.js";import"./subsystem-cdL3j6aS.js";import{d as me}from"./json-C7YhXd02.js";import{e as Ne}from"./file-BE9knabr.js";import{f as Ee,a as Le}from"./tree-Di5k6ZR9.js";import{G as Oe,M as Te,a0 as t,W as r,F as Ce,r as c,aj as b,L as y,P as m,$ as A,O as fe,u as _,Z as ve,_ as M,k as S,c as I}from"./vue-vendor-CYCT-Zs3.js";import"./randomMock-C6-QJwcy.js";const o={PROVINCE:"province",CITY:"city",DISTRICT:"district",STREET:"street"},be={province:"#409EFF",city:"#67C23A",district:"#E6A23C",street:"#9B59B6"};function ye(N){return be[N]??"#909399"}const Ae=`-- Table structure for sys_area
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_area";
CREATE TABLE "public"."sys_area" (
  "id" bigint NOT NULL,
  "code" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "level" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "parent_code" varchar(50) COLLATE "pg_catalog"."default",
  "display_order" integer DEFAULT 0,
  "deleted" smallint DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(255) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_area" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_area"."id" IS '区域ID（自增主键）';
COMMENT ON COLUMN "public"."sys_area"."code" IS '区域编码';
COMMENT ON COLUMN "public"."sys_area"."name" IS '区域名称';
COMMENT ON COLUMN "public"."sys_area"."level" IS '区域层级（province/city/district/street）';
COMMENT ON COLUMN "public"."sys_area"."parent_code" IS '父级区域编码';
COMMENT ON COLUMN "public"."sys_area"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_area"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_area"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_area"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_area"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_area"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_area" IS '行政区划信息表';

-- ----------------------------

-- Indexes structure for table sys_area
-- ----------------------------
CREATE UNIQUE INDEX "idx_sys_area_code" ON "public"."sys_area" USING btree (
  "code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_area_level" ON "public"."sys_area" USING btree (
  "level" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_area_name" ON "public"."sys_area" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_area_parent_code" ON "public"."sys_area" USING btree (
  "parent_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE parent_code IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_area
-- ----------------------------
ALTER TABLE "public"."sys_area" ADD CONSTRAINT "sys_area_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,Me=`-- Table structure for sys_area_village
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_area_village";
CREATE TABLE "public"."sys_area_village" (
  "id" bigint NOT NULL,
  "code" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "name" varchar(200) COLLATE "pg_catalog"."default" NOT NULL,
  "level" varchar(50) COLLATE "pg_catalog"."default" NOT NULL,
  "parent_code" varchar(50) COLLATE "pg_catalog"."default",
  "display_order" integer DEFAULT 0,
  "deleted" smallint DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(255) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0
)
;
ALTER TABLE "public"."sys_area_village" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_area_village"."id" IS '区域ID（自增主键）';
COMMENT ON COLUMN "public"."sys_area_village"."code" IS '区域编码';
COMMENT ON COLUMN "public"."sys_area_village"."name" IS '区域名称';
COMMENT ON COLUMN "public"."sys_area_village"."level" IS '区域层级（仅限village）';
COMMENT ON COLUMN "public"."sys_area_village"."parent_code" IS '父级区域编码';
COMMENT ON COLUMN "public"."sys_area_village"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_area_village"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_area_village"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_area_village"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_area_village"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_area_village"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_area_village" IS '行政村/居委会信息表';

-- ----------------------------

-- Indexes structure for table sys_area_village
-- ----------------------------
CREATE UNIQUE INDEX "idx_sys_area_village_code" ON "public"."sys_area_village" USING btree (
  "code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_area_village_name" ON "public"."sys_area_village" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_area_village_parent_code" ON "public"."sys_area_village" USING btree (
  "parent_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE parent_code IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_area_village
-- ----------------------------
ALTER TABLE "public"."sys_area_village" ADD CONSTRAINT "sys_area_village_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,Se={class:"area-name"},Ie={class:"count-text"},Ue=Oe({__name:"AreaManagement",setup(N){const U=c(!1),E=c(ge),d=c(!1),s=c(!1),u=c(),i=S({name:"",code:""}),n=S({id:0,code:"",name:"",level:o.PROVINCE,parentCode:"",displayOrder:0}),h={code:[{required:!0,message:"请输入区域编码",trigger:"blur"}],name:[{required:!0,message:"请输入区域名称",trigger:"blur"}]},R=[{prop:"name",label:"区域名称",minWidth:300,slot:"name",align:"left",headerAlign:"left"},{prop:"code",label:"区域编码",width:160,cellType:"code"},{label:"下级区域数量",width:140,align:"center",slot:"childCount"},{prop:"creater",label:"创建人",width:100},{prop:"createTime",label:"创建时间",width:175},{label:"操作",width:60,fixed:"right",align:"center",slot:"actions"}],L=I(()=>Le(me(E.value),i.name,i.code)),x=I(()=>[{code:"",name:"顶级区域",children:E.value}]),D=[{label:"编辑",icon:te,handler:e=>B(e)},{label:"子区域",icon:re,handler:e=>T(e)},{label:"删除",icon:oe,divided:!0,handler:e=>k(e)}];function V(e){var a;return((a=e.children)==null?void 0:a.length)||0}function O(){}function F(){const e=Ee(L.value);if(!e.length){g.warning("暂无数据可导出");return}Ne("区域管理",["区域编码","区域名称","下级数量"],e.map(a=>[a.code,a.name,a.childCount]))}function T(e){s.value=!1,n.id=0,n.code="",n.name="",n.level=e?e.level===o.PROVINCE?o.CITY:e.level===o.CITY?o.DISTRICT:o.STREET:o.PROVINCE,n.parentCode=e?e.code:"",n.displayOrder=0,d.value=!0}function B(e){s.value=!0,n.id=e.id,n.code=e.code,n.name=e.name,n.level=e.level,n.parentCode=e.parentCode||"",n.displayOrder=e.displayOrder,d.value=!0}function w(){u.value&&u.value.validate(e=>{e&&(g.success(s.value?"编辑成功":"新增成功"),d.value=!1)})}async function k(e){await le(e.name)&&g.success("删除成功")}function P(){var e;(e=u.value)==null||e.resetFields()}return(e,a)=>{const W=b("table-structure-drawer"),C=ee,f=J,X=pe,q=Z,G=z,H=b("card-layout"),Y=_e,p=ce,v=ue,K=ae,$=de,j=Q;return y(),Te(Ce,null,[t(H,{title:"区域管理"},{"title-extra":r(()=>[t(W,{sql:[_(Ae),_(Me)]},null,8,["sql"])]),search:r(()=>[t(C,{modelValue:i.code,"onUpdate:modelValue":a[0]||(a[0]=l=>i.code=l),placeholder:"搜索区域编号",onSearch:O},null,8,["modelValue"]),t(C,{modelValue:i.name,"onUpdate:modelValue":a[1]||(a[1]=l=>i.name=l),placeholder:"搜索区域名称",onSearch:O},null,8,["modelValue"])]),actions:r(()=>[t(f,{type:"success",icon:_(ie),"margin-left":10,onClick:F},{default:r(()=>[...a[8]||(a[8]=[M("导出",-1)])]),_:1},8,["icon"]),t(f,{"margin-left":10,onClick:a[2]||(a[2]=l=>T(null))},{default:r(()=>[...a[9]||(a[9]=[M("新增区域",-1)])]),_:1})]),default:r(()=>[t(G,{data:L.value,columns:R,"row-key":"code","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,"show-index":!1,"show-pagination":!1,"show-tool-bar":!1,loading:U.value},{name:r(({row:l})=>[l.icon?(y(),fe(X,{key:0,class:"area-icon",color:_(ye)(l.level)},{default:r(()=>[t(_(se))]),_:1},8,["color"])):ve("",!0),m("span",Se,A(l.name),1)]),childCount:r(({row:l})=>[m("span",Ie,A(V(l)),1)]),actions:r(({row:l})=>[t(q,{items:D,row:l},null,8,["row"])]),_:1},8,["data","loading"])]),_:1}),t(j,{modelValue:d.value,"onUpdate:modelValue":a[7]||(a[7]=l=>d.value=l),title:s.value?"编辑区域":"新增区域",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":s.value?"保存修改":"确认创建","on-confirm":w,onClosed:P},{default:r(()=>[t($,{ref_key:"formRef",ref:u,model:n,rules:h,"label-width":"90px","label-position":"right"},{default:r(()=>[t(p,{label:"上级区域",prop:"parentCode"},{default:r(()=>[t(Y,{modelValue:n.parentCode,"onUpdate:modelValue":a[3]||(a[3]=l=>n.parentCode=l),data:x.value,props:{label:"name",value:"code",children:"children"},"check-strictly":"","render-after-expand":!1,placeholder:"请选择上级区域（不选则为顶级）",clearable:""},null,8,["modelValue","data"])]),_:1}),t(p,{label:"区域名称",prop:"name"},{default:r(()=>[t(v,{modelValue:n.name,"onUpdate:modelValue":a[4]||(a[4]=l=>n.name=l),placeholder:"请输入区域名称",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"区域编码",prop:"code"},{default:r(()=>[t(v,{modelValue:n.code,"onUpdate:modelValue":a[5]||(a[5]=l=>n.code=l),placeholder:"请输入区域编码",maxlength:"50",disabled:s.value},null,8,["modelValue","disabled"])]),_:1}),t(p,{label:"排序",prop:"displayOrder"},{default:r(()=>[t(K,{modelValue:n.displayOrder,"onUpdate:modelValue":a[6]||(a[6]=l=>n.displayOrder=l),min:0,max:9999,width:"180px"},null,8,["modelValue"]),a[10]||(a[10]=m("span",{class:"form-tip-inline"},"数值越小越靠前",-1))]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])],64)}}}),We=ne(Ue,[["__scopeId","data-v-73c381c9"]]);export{We as default};
