import{m as se,s as de,j as ie,b as ce,q as pe,n as le,o as re,p as ne,v as _e,g as ue}from"./index-XehKi6pI.js";import{ar as ye,bo as oe,bc as me,bd as Te,M as Ne,a as v}from"./element-plus-FTcyDTKl.js";import{G as be,M as Oe,a0 as s,W as d,F as ge,r as y,c as b,aj as I,L as Le,P as Ee,$ as Ie,_ as Me,u as o,k as M,aA as Ce}from"./vue-vendor-CYCT-Zs3.js";import{r as Se}from"./randomMock-C6-QJwcy.js";import{s as fe,a as Ae,b as Ue}from"./warning-BshV8eZN.js";import"./subsystem-cdL3j6aS.js";import{m as ve}from"./subsystemData-BoqqXqRF.js";import{m as ke}from"./search-BoGTCmM8.js";import{p as De}from"./pagination-BHZHZx5b.js";import{s as he}from"./subsystemPresentation-Ck3hbC2f.js";import"./subsystemData-7ooVpSiT.js";const Re=[{dictType:"duty_status",dictTypeName:"值守状态",subsystemId:1,remark:"值守期间的在岗状态"},{dictType:"duty_shift",dictTypeName:"值守班次",subsystemId:1,remark:"值守班次划分"},{dictType:"handover_type",dictTypeName:"交接班类型",subsystemId:1,remark:"交接班业务类型"},{dictType:"duty_expressway_section_type",dictTypeName:"路段类型",subsystemId:1,remark:"高速公路维护-路段类型"},{dictType:"plan_type",dictTypeName:"预案类型",subsystemId:2,remark:"应急预案分类"},{dictType:"response_level",dictTypeName:"响应等级",subsystemId:2,remark:"应急响应分级"},{dictType:"plan_status",dictTypeName:"预案状态",subsystemId:2,remark:"预案流转状态"},{dictType:"drill_type",dictTypeName:"演练类型",subsystemId:2,remark:"应急演练形式"},{dictType:"event_type",dictTypeName:"事件类型",subsystemId:3,remark:"突发事件类别"},{dictType:"event_level",dictTypeName:"事件等级",subsystemId:3,remark:"突发事件危害程度分级"},{dictType:"event_status",dictTypeName:"事件状态",subsystemId:3,remark:"事件处置流程状态"},{dictType:"event_source",dictTypeName:"接报来源",subsystemId:3,remark:"事件信息接报渠道"},{dictType:"dispatch_type",dictTypeName:"调度类型",subsystemId:4,remark:"应急调度业务类型"},{dictType:"dispatch_status",dictTypeName:"调度状态",subsystemId:4,remark:"调度任务生命周期状态"},{dictType:"command_type",dictTypeName:"指令类型",subsystemId:4,remark:"指挥指令分类"},{dictType:"dispatch_expressway_section_type",dictTypeName:"路段类型",subsystemId:4,remark:"高速公路维护-路段类型"},{dictType:"material_category",dictTypeName:"物资类别",subsystemId:5,remark:"应急物资分类"},{dictType:"material_unit",dictTypeName:"计量单位",subsystemId:5,remark:"物资常用计量单位"},{dictType:"material_status",dictTypeName:"物资状态",subsystemId:5,remark:"物资库存状态"},{dictType:"warning_level",dictTypeName:"预警等级",subsystemId:6,remark:"预警信号等级"},{dictType:"warning_type",dictTypeName:"预警类型",subsystemId:6,remark:"预警灾种类型"},{dictType:"decision_type",dictTypeName:"决策类型",subsystemId:6,remark:"辅助决策类型"},{dictType:"source_type",dictTypeName:"数据源类型",subsystemId:7,remark:"融合接入的数据源分类"},{dictType:"data_quality",dictTypeName:"数据质量等级",subsystemId:7,remark:"数据质量评价等级"},{dictType:"fusion_status",dictTypeName:"融合状态",subsystemId:7,remark:"数据融合任务状态"},{dictType:"display_type",dictTypeName:"展示类型",subsystemId:8,remark:"综合展示场景分类"},{dictType:"screen_status",dictTypeName:"大屏状态",subsystemId:8,remark:"大屏展示运行状态"},{dictType:"flood_fail_reason_type",dictTypeName:"未达标原因类型",subsystemId:60,remark:"巡查未达标原因分类"},{dictType:"flood_highway_element",dictTypeName:"公路要素",subsystemId:60,remark:"公路巡查要素分类"},{dictType:"highway_grade",dictTypeName:"公路等级",subsystemId:60,remark:"公路等级分类"},{dictType:"flood_task_type",dictTypeName:"任务类型",subsystemId:60,remark:"汛期公路巡查任务类型"},{dictType:"flood_warning_category",dictTypeName:"预警分类",subsystemId:60,remark:"汛期公路巡查预警分类"},{dictType:"inspection_type",dictTypeName:"巡查类型",subsystemId:60,remark:"汛期公路巡查开展方式"},{dictType:"hidden_danger_type",dictTypeName:"隐患类型",subsystemId:60,remark:"巡查发现的隐患类别"},{dictType:"org_area_level",dictTypeName:"区域级别",subsystemId:99,remark:"行政区域级别"},{dictType:"user_status",dictTypeName:"用户状态",subsystemId:99,remark:"平台用户账号状态"},{dictType:"notice_type",dictTypeName:"通知类型",subsystemId:99,remark:"系统通知消息类型"},{dictType:"auth_type",dictTypeName:"授权类型",subsystemId:99,remark:"OAuth 客户端授权类型"}],C=Re.reduce((p,c)=>{const O=p.filter(r=>r.subsystemId===c.subsystemId).length;return p.push({dictTypeId:p.length+1,dictType:c.dictType,dictTypeName:c.dictTypeName,subsystemId:c.subsystemId,displayOrder:O+1,remark:c.remark??"",status:1101,...Se()}),p},[]);C.reduce((p,c)=>(p[c.dictType]=c.dictTypeName,p),{});C.reduce((p,c)=>(p[c.dictType]=c.subsystemId,p),{});function xe(){return C}const Ve=`-- Table structure for sys_dict_type
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_dict_type";
CREATE TABLE "public"."sys_dict_type" (
  "dict_type_id" bigint NOT NULL,
  "dict_type_name" varchar(100) COLLATE "pg_catalog"."default",
  "dict_type" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "subsystem_id" bigint,
  "display_order" integer DEFAULT 0,
  "status" smallint DEFAULT 1101,
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
ALTER TABLE "public"."sys_dict_type" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_dict_type"."dict_type_id" IS '类型ID';
COMMENT ON COLUMN "public"."sys_dict_type"."dict_type_name" IS '类型名称';
COMMENT ON COLUMN "public"."sys_dict_type"."dict_type" IS '类型编码（唯一，关联字典表的dict_type字段）';
COMMENT ON COLUMN "public"."sys_dict_type"."subsystem_id" IS '子系统ID';
COMMENT ON COLUMN "public"."sys_dict_type"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_dict_type"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_dict_type"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_dict_type"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_dict_type"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_dict_type"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_dict_type"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_dict_type"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_dict_type"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_dict_type"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_dict_type"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_dict_type"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_dict_type"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_dict_type"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_dict_type"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_dict_type"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_dict_type" IS '字典类型表';

-- ----------------------------

-- Indexes structure for table sys_dict_type
-- ----------------------------
CREATE INDEX "idx_sys_dict_type_dict_type" ON "public"."sys_dict_type" USING btree (
  "dict_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_dict_type_org_id" ON "public"."sys_dict_type" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_dict_type_status_display" ON "public"."sys_dict_type" USING btree (
  "status" "pg_catalog"."int2_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_dict_type_subsystem_id" ON "public"."sys_dict_type" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE subsystem_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_dict_type
-- ----------------------------
ALTER TABLE "public"."sys_dict_type" ADD CONSTRAINT "sys_dict_type_pkey" PRIMARY KEY ("dict_type_id");

-- ----------------------------
`,Fe=`-- Table structure for sys_dict_data
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_dict_data";
CREATE TABLE "public"."sys_dict_data" (
  "dict_id" bigint NOT NULL,
  "dict_type" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "subsystem_id" bigint,
  "dict_label" varchar(100) COLLATE "pg_catalog"."default",
  "dict_value" varchar(255) COLLATE "pg_catalog"."default",
  "dict_code" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "display_order" integer DEFAULT 0,
  "dict_class" varchar(100) COLLATE "pg_catalog"."default",
  "is_default" smallint DEFAULT 0,
  "status" smallint DEFAULT 1101,
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
ALTER TABLE "public"."sys_dict_data" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_dict_data"."dict_id" IS '字典ID';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_type" IS '字典类型（同一类型下有多条字典项）';
COMMENT ON COLUMN "public"."sys_dict_data"."subsystem_id" IS '子系统ID';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_label" IS '字典标签';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_value" IS '字典值';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_code" IS '字典编码（唯一）';
COMMENT ON COLUMN "public"."sys_dict_data"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_dict_data"."dict_class" IS '样式 class（用于自定义颜色）';
COMMENT ON COLUMN "public"."sys_dict_data"."is_default" IS '是否默认（0否 1是）';
COMMENT ON COLUMN "public"."sys_dict_data"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_dict_data"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_dict_data"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_dict_data"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_dict_data"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_dict_data"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_dict_data"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_dict_data"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_dict_data"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_dict_data"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_dict_data"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_dict_data"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_dict_data"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_dict_data"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_dict_data"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_dict_data" IS '数据字典表';

-- ----------------------------

-- Indexes structure for table sys_dict_data
-- ----------------------------
CREATE INDEX "idx_sys_dict_data_dict_code" ON "public"."sys_dict_data" USING btree (
  "dict_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE dict_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_dict_data_dict_type_status" ON "public"."sys_dict_data" USING btree (
  "dict_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "status" "pg_catalog"."int2_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_dict_data_org_id" ON "public"."sys_dict_data" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_dict_data_subsystem_id" ON "public"."sys_dict_data" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE subsystem_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_dict_data
-- ----------------------------
ALTER TABLE "public"."sys_dict_data" ADD CONSTRAINT "sys_dict_data_pkey" PRIMARY KEY ("dict_id");

-- ----------------------------
`,we=["onClick"],We=be({__name:"DictTypeManagement",setup(p){const c=Ue,O=Ce(),r=ve.filter(e=>!e.isHidden),k=[{key:"emergency",label:"应急工程",subsystemIds:r.filter(e=>e.projectType===1).map(e=>e.subsystemId)},{key:"road",label:"路网工程",subsystemIds:r.filter(e=>e.projectType===2).map(e=>e.subsystemId)}],g=y(!1),S=y([]),m=y(!1),n=y(!1),T=y(),_=y(99),N=M({dictTypeName:""}),f=b(()=>{const e=r.find(a=>a.subsystemId===_.value);return e?e.subsystemName:""}),A={dictTypeId:0,dictType:"",dictTypeName:"",subsystemId:99,displayOrder:0,remark:"",status:1101},i=M({...A}),D={dictType:[{required:!0,message:"请输入类型编码",trigger:"blur"}],dictTypeName:[{required:!0,message:"请输入类型名称",trigger:"blur"}],subsystemId:[{required:!0,message:"请选择所属子系统",trigger:"change"}]},l=M({pageNum:1,pageSize:20}),h=[{prop:"dictTypeName",label:"类型名称",minWidth:160,slot:"dictTypeName"},{prop:"dictType",label:"类型编码",minWidth:220,cellType:"code"},{prop:"displayOrder",label:"显示排序",width:90},{prop:"status",label:"状态",width:90,cellType:"tag",tagMap:Ae,tagLabelMap:fe},{prop:"remark",label:"备注",minWidth:140,cellType:"secondary",showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"更新人"},{type:"audit",prop:"updateTime",label:"更新时间"},{type:"actions",label:"操作",slot:"actions"}],U=b(()=>{let e=S.value;return e=e.filter(a=>a.subsystemId===_.value),N.dictTypeName&&(e=e.filter(a=>ke(N.dictTypeName,a.dictTypeName))),e}),R=b(()=>U.value.length),x=b(()=>De(U.value,l.pageNum,l.pageSize)),V=[{label:"编辑",icon:ye,handler:e=>P(e)},{label:"删除",icon:oe,divided:!0,handler:e=>X(e)}];function L(){g.value=!0,setTimeout(()=>{S.value=xe(),g.value=!1},300)}function F(e){_.value=e,l.pageNum=1}function w(){l.pageNum=1}function W(e){O.push({path:"/global/v2/dict/data",query:{dictType:e.dictType,dictTypeName:e.dictTypeName,subsystemName:f.value}})}function B(){n.value=!1,Object.assign(i,A,{subsystemId:_.value}),m.value=!0}function P(e){n.value=!0,Object.assign(i,{dictTypeId:e.dictTypeId,dictType:e.dictType,dictTypeName:e.dictTypeName,subsystemId:_.value,displayOrder:e.displayOrder,remark:e.remark,status:e.status}),m.value=!0}function q(){T.value&&T.value.validate(e=>{e&&(v.success(n.value?"编辑成功":"新增成功"),m.value=!1,L())})}async function X(e){await _e(e.dictTypeName)&&(v.success("删除成功"),L())}function G(){var e;(e=T.value)==null||e.resetFields()}return L(),(e,a)=>{const H=I("table-structure-drawer"),z=I("sub-system-panel"),$=pe,j=ce,K=ie,Y=de,J=I("split-layout"),E=Ne,u=Te,Q=le,Z=re,ee=ne,te=me,ae=se;return Le(),Oe(ge,null,[s(J,{"aside-title":"子系统列表",title:"字典管理","sub-title":f.value,"expanded-width":"260px","collapsed-width":"72px",collapsed:""},{"title-extra":d(()=>[s(H,{sql:[o(Ve),o(Fe)]},null,8,["sql"])]),aside:d(({collapsed:t})=>[s(z,{subsystems:o(r),"active-id":_.value,collapsed:t,"presentation-map":o(he),categories:k,onSelect:F},null,8,["subsystems","active-id","collapsed","presentation-map"])]),search:d(()=>[s($,{modelValue:N.dictTypeName,"onUpdate:modelValue":a[0]||(a[0]=t=>N.dictTypeName=t),placeholder:"搜索类型名称",onSearch:w},null,8,["modelValue"])]),actions:d(()=>[s(j,{"margin-left":10,onClick:B},{default:d(()=>[...a[10]||(a[10]=[Me("新增类型",-1)])]),_:1})]),default:d(()=>[s(Y,{pageNum:l.pageNum,"onUpdate:pageNum":a[1]||(a[1]=t=>l.pageNum=t),pageSize:l.pageSize,"onUpdate:pageSize":a[2]||(a[2]=t=>l.pageSize=t),data:x.value,columns:h,total:R.value,loading:g.value,"row-key":"dictTypeId","show-tool-bar":!1},{dictTypeName:d(({row:t})=>[Ee("span",{class:"cell-link",onClick:Be=>W(t)},Ie(t.dictTypeName),9,we)]),actions:d(({row:t})=>[s(K,{items:V,row:t},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1},8,["sub-title"]),s(ae,{modelValue:m.value,"onUpdate:modelValue":a[9]||(a[9]=t=>m.value=t),title:n.value?"编辑字典类型":"新增字典类型",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":n.value?"保存修改":"确认创建","on-confirm":q,onClosed:G},{default:d(()=>[s(te,{ref_key:"formRef",ref:T,model:i,rules:D,"label-width":"110px","label-position":"right"},{default:d(()=>[s(u,{label:"类型编码",prop:"dictType"},{default:d(()=>[s(E,{modelValue:i.dictType,"onUpdate:modelValue":a[3]||(a[3]=t=>i.dictType=t),placeholder:"如：sys_normal_disable",maxlength:"100",disabled:n.value},null,8,["modelValue","disabled"])]),_:1}),s(u,{label:"类型名称",prop:"dictTypeName"},{default:d(()=>[s(E,{modelValue:i.dictTypeName,"onUpdate:modelValue":a[4]||(a[4]=t=>i.dictTypeName=t),placeholder:"请输入类型名称",maxlength:"100"},null,8,["modelValue"])]),_:1}),s(u,{label:"所属子系统",prop:"subsystemId"},{default:d(()=>[s(Q,{modelValue:i.subsystemId,"onUpdate:modelValue":a[5]||(a[5]=t=>i.subsystemId=t),options:o(r).map(t=>({label:t.subsystemName,value:t.subsystemId})),disabled:""},null,8,["modelValue","options"])]),_:1}),s(u,{label:"显示排序",prop:"displayOrder"},{default:d(()=>[s(Z,{modelValue:i.displayOrder,"onUpdate:modelValue":a[6]||(a[6]=t=>i.displayOrder=t),min:0,max:9999},null,8,["modelValue"])]),_:1}),s(u,{label:"状态",prop:"status"},{default:d(()=>[s(ee,{modelValue:i.status,"onUpdate:modelValue":a[7]||(a[7]=t=>i.status=t),options:o(c)},null,8,["modelValue","options"])]),_:1}),s(u,{label:"备注",prop:"remark"},{default:d(()=>[s(E,{modelValue:i.remark,"onUpdate:modelValue":a[8]||(a[8]=t=>i.remark=t),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])],64)}}}),Qe=ue(We,[["__scopeId","data-v-19cbac0c"]]);export{Qe as default};
