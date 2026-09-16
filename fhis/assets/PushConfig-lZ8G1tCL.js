import{m as F,i as P,k as B,l as $,n as q,f as W,p as K}from"./index-aJdPh3oK.js";import{K as j,aD as z,aE as G,ag as X,aa as Y,a as J}from"./element-plus-Bqw3OeQw.js";/* empty css                     */import{r as Q}from"./randomMock-BnXBY1mw.js";import{s as Z}from"./common-Bz-Eyofd.js";import{G as ee,M as ae,a0 as o,W as n,F as te,r as p,aj as g,L as oe,_,$ as c,v as s,c as O}from"./vue-vendor-BBXWt6X3.js";const le=`-- Table structure for flood_data_push_config
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_data_push_config";
CREATE TABLE "public"."flood_data_push_config" (
  "config_id" bigint NOT NULL,
  "business_scope" varchar(20) COLLATE "pg_catalog"."default",
  "push_mode" varchar(20) COLLATE "pg_catalog"."default",
  "execute_start_time" varchar(5) COLLATE "pg_catalog"."default",
  "execute_end_time" varchar(5) COLLATE "pg_catalog"."default",
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
  "local_signature_version" integer DEFAULT 0
)
;
ALTER TABLE "public"."flood_data_push_config" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_data_push_config"."config_id" IS '配置ID';
COMMENT ON COLUMN "public"."flood_data_push_config"."business_scope" IS '业务范围（PHONE-手机 DRONE-无人机 VEHICLE-巡查车 ROBOT-巡查机器人）';
COMMENT ON COLUMN "public"."flood_data_push_config"."push_mode" IS '推送方式（REALTIME-实时）';
COMMENT ON COLUMN "public"."flood_data_push_config"."execute_start_time" IS '执行开始时间（HH:mm格式）';
COMMENT ON COLUMN "public"."flood_data_push_config"."execute_end_time" IS '执行结束时间（HH:mm格式）';
COMMENT ON COLUMN "public"."flood_data_push_config"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_data_push_config"."remark" IS '备注';
COMMENT ON COLUMN "public"."flood_data_push_config"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_data_push_config"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_data_push_config"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_data_push_config"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_data_push_config"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_data_push_config"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_data_push_config"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_data_push_config"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_data_push_config"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_data_push_config" IS '部系统数据推送配置表';

-- ----------------------------

-- Indexes structure for table flood_data_push_config
-- ----------------------------
CREATE INDEX "idx_flood_data_push_config_deleted" ON "public"."flood_data_push_config" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_data_push_config
-- ----------------------------
ALTER TABLE "public"."flood_data_push_config" ADD CONSTRAINT "flood_data_push_config_pkey" PRIMARY KEY ("config_id");

-- ----------------------------
`,ne=[{configId:1,businessScope:"PHONE",pushMode:"REALTIME",executeStartTime:"08:00",executeEndTime:"18:00",status:1101,remark:"手机端数据推送配置",...Q()}],se=[{label:"手机",value:"PHONE"},{label:"无人机",value:"DRONE"},{label:"巡查车",value:"VEHICLE"},{label:"巡查机器人",value:"ROBOT"}],E=[{label:"实时",value:"REALTIME"}],ue={PHONE:"手机",DRONE:"无人机",VEHICLE:"巡查车",ROBOT:"巡查机器人"},fe=ee({__name:"PushConfig",setup(ie){const i=p(!1),b=p(!1),r=p(),e=p({...ne[0]}),d=O({get:()=>e.value.businessScope?e.value.businessScope.split(","):[],set:a=>{e.value.businessScope=a.join(",")}}),m=O({get:()=>e.value.executeStartTime&&e.value.executeEndTime?[e.value.executeStartTime,e.value.executeEndTime]:null,set:a=>{a?(e.value.executeStartTime=a[0],e.value.executeEndTime=a[1]):(e.value.executeStartTime="",e.value.executeEndTime="")}}),T={businessScope:[{required:!0,message:"请选择业务范围",trigger:"change"}],pushMode:[{required:!0,message:"请选择推送方式",trigger:"change"}],executeStartTime:[{required:!0,message:"请选择执行时间",trigger:"change"}]},N=[{prop:"businessScope",label:"业务范围",minWidth:200,align:"center",slot:"businessScope"},{prop:"pushMode",label:"推送方式",width:120,align:"center",slot:"pushMode"},{prop:"executeStartTime",label:"执行时间",width:200,align:"center",formatter:a=>a.executeStartTime&&a.executeEndTime?`${a.executeStartTime} - ${a.executeEndTime}`:"-"},{prop:"status",label:"状态",width:100,align:"center",slot:"status"},{prop:"remark",label:"备注",minWidth:200,showOverflowTooltip:!0,formatter:a=>a.remark||"-"},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"更新人"},{type:"audit",prop:"updateTime",label:"更新时间"},{type:"actions",label:"操作",slot:"actions"}],M=[{label:"编辑",icon:j,handler:()=>h()}];function h(){i.value=!0}function L(){var a;(a=r.value)==null||a.validate(l=>{l&&(J.success("保存成功"),i.value=!1)})}function C(){var a;(a=r.value)==null||a.resetFields()}return(a,l)=>{const v=g("table-structure-drawer"),S=$,I=B,x=P,A=g("panel-layout"),U=q,u=G,V=W,R=X,y=K,D=Y,k=z,H=F;return oe(),ae(te,null,[o(A,{title:"部系统数据推送配置"},{"title-extra":n(()=>[o(v,{sql:s(le)},null,8,["sql"])]),default:n(()=>[o(x,{data:[e.value],columns:N,"show-tool-bar":!1,"show-pagination":!1},{businessScope:n(({row:t})=>[_(c(t.businessScope?s(ue)[t.businessScope]:"-"),1)]),pushMode:n(({row:t})=>{var f;return[_(c(((f=s(E).find(w=>w.value===t.pushMode))==null?void 0:f.label)||"-"),1)]}),status:n(({row:t})=>[o(S,{size:"small",type:t.status===1101?"success":"info"},{default:n(()=>[_(c(t.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:n(()=>[o(I,{items:M,row:e.value},null,8,["row"])]),_:1},8,["data"])]),_:1}),o(H,{modelValue:i.value,"onUpdate:modelValue":l[5]||(l[5]=t=>i.value=t),title:"编辑推送配置",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":"保存修改",loading:b.value,"on-confirm":L,onClosed:C},{default:n(()=>[o(k,{ref_key:"formRef",ref:r,model:e.value,rules:T,"label-width":"100px","label-position":"right"},{default:n(()=>[o(u,{label:"业务范围",prop:"businessScope"},{default:n(()=>[o(U,{modelValue:d.value,"onUpdate:modelValue":l[0]||(l[0]=t=>d.value=t),options:s(se)},null,8,["modelValue","options"])]),_:1}),o(u,{label:"推送方式",prop:"pushMode"},{default:n(()=>[o(V,{modelValue:e.value.pushMode,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.pushMode=t),options:s(E),placeholder:"请选择推送方式",disabled:""},null,8,["modelValue","options"])]),_:1}),o(u,{label:"执行时间",prop:"executeStartTime"},{default:n(()=>[o(R,{modelValue:m.value,"onUpdate:modelValue":l[2]||(l[2]=t=>m.value=t),"is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",format:"HH:mm","value-format":"HH:mm",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),o(u,{label:"状态",prop:"status"},{default:n(()=>[o(y,{modelValue:e.value.status,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.status=t),options:s(Z)},null,8,["modelValue","options"])]),_:1}),o(u,{label:"备注"},{default:n(()=>[o(D,{modelValue:e.value.remark,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.remark=t),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","loading"])],64)}}});export{fe as default};
