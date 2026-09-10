import{O as s,y as j,q as z,r as H,a as Q,x as J,F as Z,e as ee,N as te,U as ae,Q as re}from"./index-BQSjtNr4.js";import{ar as ne,bD as le,bx as oe,bw as se,bl as ie,b9 as ue,ba as de,bu as pe,R as _e,a as g}from"./element-plus-Bt8i1BPk.js";/* empty css                     *//* empty css                       */import{S as o,b as me}from"./common-CRcHQUfu.js";import{d as ce}from"./json-C7YhXd02.js";import{G as Ne,p as N,M as Oe,a0 as l,W as i,F as Le,aj as y,m as S,L as Me,u as O,_ as h,c as U}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";function Te(E){const c=[];function L(d){var m;for(const p of d)c.push(p),(m=p.children)!=null&&m.length&&L(p.children)}return L(E),c}const be=[{id:1,postName:"应急指挥中心",parentId:0,unitName:"交通运输局",status:o.NORMAL,remark:"负责全局应急指挥调度工作",children:[{id:11,postName:"中心主任",parentId:1,unitName:"交通运输局",status:o.NORMAL,remark:"全面负责应急指挥中心工作",children:[],...s()},{id:12,postName:"中心副主任",parentId:1,unitName:"交通运输局",status:o.NORMAL,remark:"协助主任开展日常工作",children:[],...s()},{id:13,postName:"值班长",parentId:1,unitName:"交通运输局",status:o.NORMAL,remark:"负责当班期间应急值守工作",children:[],...s()}],...s()},{id:2,postName:"值班岗位",parentId:0,unitName:"交通运输局",status:o.NORMAL,remark:"日常值班相关岗位",children:[{id:21,postName:"主班",parentId:2,unitName:"交通运输局",status:o.NORMAL,remark:"负责主班期间值班工作",children:[],...s()},{id:22,postName:"副班",parentId:2,unitName:"交通运输局",status:o.NORMAL,remark:"协助主班开展值班工作",children:[],...s()},{id:23,postName:"节假日值班",parentId:2,unitName:"交通运输局",status:o.NORMAL,remark:"节假日及周末值班岗位",children:[],...s()}],...s()},{id:3,postName:"专项工作组",parentId:0,unitName:"交通运输局",status:o.NORMAL,remark:"各类专项应急工作组",children:[{id:31,postName:"防台防汛组",parentId:3,unitName:"交通运输局",status:o.NORMAL,remark:"负责防台防汛应急处置",children:[],...s()},{id:32,postName:"除雪保畅组",parentId:3,unitName:"交通运输局",status:o.NORMAL,remark:"负责冬季除雪保畅工作",children:[],...s()},{id:33,postName:"道路抢通组",parentId:3,unitName:"公路局",status:o.NORMAL,remark:"负责道路损毁抢通工作",children:[],...s()}],...s()},{id:4,postName:"信息保障岗位",parentId:0,unitName:"信息中心",status:o.NORMAL,remark:"应急信息保障相关岗位",children:[{id:41,postName:"信息员",parentId:4,unitName:"信息中心",status:o.NORMAL,remark:"负责应急信息收集与报送",children:[],...s()},{id:42,postName:"通信保障员",parentId:4,unitName:"信息中心",status:o.NORMAL,remark:"负责应急通信设备保障",children:[],...s()}],...s()},{id:5,postName:"综合协调岗位",parentId:0,unitName:"交通运输局",status:o.DISABLED,remark:"已停用的综合协调岗位",children:[{id:51,postName:"协调员",parentId:5,unitName:"交通运输局",status:o.DISABLED,remark:"已停用",children:[],...s()}],...s()}],ge=["交通运输局","公路局","运管处","海事局","航道局","信息中心","执法总队"],Ee=`-- Table structure for duty_post
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_post";
CREATE TABLE "public"."duty_post" (
  "id" bigint NOT NULL,
  "post_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "unit_name" varchar(128) COLLATE "pg_catalog"."default",
  "area_codes" varchar(1000) COLLATE "pg_catalog"."default",
  "area_min_code" varchar(32) COLLATE "pg_catalog"."default",
  "area_min_name" varchar(128) COLLATE "pg_catalog"."default",
  "area_names" varchar(1000) COLLATE "pg_catalog"."default",
  "longitude" numeric(12,6) COLLATE "pg_catalog"."default",
  "latitude" numeric(12,6) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_post" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_post"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_post"."post_name" IS '岗位名称';
COMMENT ON COLUMN "public"."duty_post"."parent_id" IS '上级岗位ID（0表示顶级岗位）';
COMMENT ON COLUMN "public"."duty_post"."unit_name" IS '所属单位名称';
COMMENT ON COLUMN "public"."duty_post"."area_codes" IS '归属地区编码列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."duty_post"."area_min_code" IS '最小单元区域编码（动态层级：选到市存市编码，选到街道存街道编码）';
COMMENT ON COLUMN "public"."duty_post"."area_min_name" IS '最小单元区域名称';
COMMENT ON COLUMN "public"."duty_post"."area_names" IS '归属地区名称列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."duty_post"."longitude" IS '经度（值守点位位置）';
COMMENT ON COLUMN "public"."duty_post"."latitude" IS '纬度（值守点位位置）';
COMMENT ON COLUMN "public"."duty_post"."display_order" IS '显示顺序';
COMMENT ON COLUMN "public"."duty_post"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_post"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_post"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_post"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_post"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_post"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_post"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_post"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_post"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_post"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_post"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_post"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_post"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_post"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_post"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_post" IS '值班岗位表';

-- ----------------------------

-- Indexes structure for table duty_post
-- ----------------------------
CREATE INDEX "idx_duty_post_parent_display" ON "public"."duty_post" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_post_area_min_code" ON "public"."duty_post" USING btree (
  "area_min_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE area_min_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_post_post_name" ON "public"."duty_post" USING btree (
  "post_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_post_status" ON "public"."duty_post" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_post
-- ----------------------------
ALTER TABLE "public"."duty_post" ADD CONSTRAINT "duty_post_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,Ce=`-- Table structure for duty_post_member_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_post_member_rel";
CREATE TABLE "public"."duty_post_member_rel" (
  "id" bigint NOT NULL,
  "post_id" bigint NOT NULL,
  "member_id" bigint NOT NULL,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" integer NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."duty_post_member_rel" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_post_member_rel"."id" IS '主键ID（自增）';
COMMENT ON COLUMN "public"."duty_post_member_rel"."post_id" IS '岗位ID';
COMMENT ON COLUMN "public"."duty_post_member_rel"."member_id" IS '值班人员ID';
COMMENT ON COLUMN "public"."duty_post_member_rel"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_post_member_rel"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_post_member_rel"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_post_member_rel"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_post_member_rel"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_post_member_rel"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_post_member_rel"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_post_member_rel"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_post_member_rel"."signature_version" IS '一体化签名版本号';
COMMENT ON COLUMN "public"."duty_post_member_rel"."deleted" IS '删除标志（0-未删除 1-已删除）';
COMMENT ON TABLE "public"."duty_post_member_rel" IS '值班岗位人员关联表';

-- ----------------------------

-- Indexes structure for table duty_post_member_rel
-- ----------------------------
CREATE INDEX "idx_duty_post_member_rel_post_member" ON "public"."duty_post_member_rel" USING btree (
  "post_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "member_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_post_member_rel_member_post" ON "public"."duty_post_member_rel" USING btree (
  "member_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "post_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_post_member_rel
-- ----------------------------
ALTER TABLE "public"."duty_post_member_rel" ADD CONSTRAINT "duty_post_member_rel_pkey" PRIMARY KEY ("id");

-- ----------------------------
`,ke=Ne({__name:"PostManagement",setup(E){const c=N(!1),L=N(!1),d=N(ce(be)),m=N(!1),p=N(!1),T=N(),b=S({postName:""}),t=S({postName:"",parentId:0,unitName:"",status:o.NORMAL,remark:""}),v={postName:[{required:!0,message:"请输入岗位名称",trigger:"blur"}],unitName:[{required:!0,message:"请选择所属单位",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},C=[{prop:"postName",label:"岗位名称",minWidth:200,fixed:"left",align:"left",headerAlign:"left"},{prop:"unitName",label:"所属单位",minWidth:140,align:"center"},{prop:"status",label:"启用状态",width:100,align:"center",cellType:"tag",tagMap:{1101:"success",1102:"info"},tagLabelMap:{1101:"启用",1102:"停用"}},{prop:"remark",label:"备注信息",minWidth:200,align:"center",showOverflowTooltip:!0},{prop:"creater",label:"创建人",width:100,align:"center",cellType:"secondary"},{prop:"createTime",label:"创建时间",width:175,align:"center",cellType:"secondary"},{label:"操作",width:60,fixed:"right",align:"center",slot:"actions"}],f=U(()=>{if(!b.postName)return d.value;const a=r=>r.filter(e=>{const u=re(b.postName,e.postName),_=e.children&&a(e.children).length>0;return u||_}).map(e=>({...e,children:e.children?a(e.children):[]}));return a(d.value)}),R=U(()=>{const a=r=>d.value.filter(e=>e.parentId===r).map(e=>({id:e.id,postName:e.postName,children:a(e.id)}));return[{id:0,postName:"顶级岗位",children:a(0)}]}),D=[{label:"修改",icon:ne,handler:a=>x(a)},{label:"子项",icon:le,handler:a=>I(a)},{label:"删除",icon:oe,divided:!0,handler:a=>F(a)}];function k(){}function I(a){p.value=!1,t.id=void 0,t.parentId=a?a.id:0,t.postName="",t.unitName="",t.status=o.NORMAL,t.remark="",m.value=!0}function x(a){p.value=!0,t.id=a.id,t.parentId=a.parentId,t.postName=a.postName,t.unitName=a.unitName,t.status=a.status,t.remark=a.remark,m.value=!0}async function w(){if(T.value){try{await T.value.validate()}catch{return}L.value=!0,setTimeout(()=>{if(p.value&&t.id){const a=r=>{for(const e of r){if(e.id===t.id)return e.postName=t.postName,e.parentId=t.parentId,e.unitName=t.unitName,e.status=t.status,e.remark=t.remark,!0;if(e.children&&a(e.children))return!0}return!1};a(d.value),g.success("修改成功，数据已更新")}else{const a={id:Date.now(),postName:t.postName,parentId:t.parentId,unitName:t.unitName,status:t.status,remark:t.remark,children:[]};if(t.parentId===0)d.value.push(a);else{const r=e=>{for(const u of e){if(u.id===t.parentId)return u.children||(u.children=[]),u.children.push(a),!0;if(u.children&&r(u.children))return!0}return!1};r(d.value)}g.success("新增成功，岗位已创建")}m.value=!1,L.value=!1},400)}}function V(){var a;(a=T.value)==null||a.resetFields()}async function F(a){if(!await te(a.postName))return;c.value=!0;const r=e=>{const u=e.findIndex(_=>_.id===a.id);if(u!==-1)return e.splice(u,1),!0;for(const _ of e)if(_.children&&r(_.children))return!0;return!1};r(d.value),g.success("删除成功"),c.value=!1}function B(){const a=C.filter(e=>e.label!=="操作").map(e=>e.label),r=Te(f.value).map(e=>[e.postName,e.unitName,e.status,e.remark,e.creater,e.createTime]);ae("岗位管理",a,r)}return(a,r)=>{const e=y("table-structure-drawer"),u=J,_=Q,P=H,q=z,X=y("panel-layout"),G=pe,M=de,A=_e,W=Z,K=ee,$=ue,Y=j;return Me(),Oe(Le,null,[l(X,{title:"岗位管理"},{"title-extra":i(()=>[l(e,{sql:[O(Ee),O(Ce)]},null,8,["sql"])]),search:i(()=>[l(u,{modelValue:b.postName,"onUpdate:modelValue":r[0]||(r[0]=n=>b.postName=n),placeholder:"请输入岗位名称",clearable:"",onSearch:k},null,8,["modelValue"])]),actions:i(()=>[l(_,{icon:O(se),"margin-left":10,onClick:r[1]||(r[1]=n=>I(null))},{default:i(()=>[...r[8]||(r[8]=[h("新增岗位",-1)])]),_:1},8,["icon"]),l(_,{icon:O(ie),type:"success","margin-left":10,onClick:B},{default:i(()=>[...r[9]||(r[9]=[h("导出",-1)])]),_:1},8,["icon"])]),default:i(()=>[l(q,{data:f.value,columns:C,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,"show-index":!1,"show-pagination":!1,"show-tool-bar":!1,loading:c.value},{actions:i(({row:n})=>[l(P,{items:D,row:n},null,8,["row"])]),_:1},8,["data","loading"])]),_:1}),l(Y,{modelValue:m.value,"onUpdate:modelValue":r[7]||(r[7]=n=>m.value=n),title:p.value?"修改岗位":"新增岗位",size:480,"destroy-on-close":!0,"confirm-text":p.value?"保存修改":"确认创建","on-confirm":w,onClosed:V},{default:i(()=>[l($,{ref_key:"formRef",ref:T,model:t,rules:v,"label-width":"100px","label-position":"right"},{default:i(()=>[l(M,{label:"上一层级",prop:"parentId"},{default:i(()=>[l(G,{modelValue:t.parentId,"onUpdate:modelValue":r[2]||(r[2]=n=>t.parentId=n),data:R.value,props:{label:"postName",children:"children"},"check-strictly":"","render-after-expand":!1,placeholder:"请选择上级岗位（不选则为顶级）",clearable:"",style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),l(M,{label:"岗位名称",prop:"postName"},{default:i(()=>[l(A,{modelValue:t.postName,"onUpdate:modelValue":r[3]||(r[3]=n=>t.postName=n),placeholder:"请输入岗位名称",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(M,{label:"所属单位",prop:"unitName"},{default:i(()=>[l(W,{modelValue:t.unitName,"onUpdate:modelValue":r[4]||(r[4]=n=>t.unitName=n),options:O(ge).map(n=>({label:n,value:n})),placeholder:"请选择所属单位"},null,8,["modelValue","options"])]),_:1}),l(M,{label:"状态",prop:"status"},{default:i(()=>[l(K,{modelValue:t.status,"onUpdate:modelValue":r[5]||(r[5]=n=>t.status=n),options:O(me)},null,8,["modelValue","options"])]),_:1}),l(M,{label:"备注信息",prop:"remark"},{default:i(()=>[l(A,{modelValue:t.remark,"onUpdate:modelValue":r[6]||(r[6]=n=>t.remark=n),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])],64)}}});export{ke as default};
