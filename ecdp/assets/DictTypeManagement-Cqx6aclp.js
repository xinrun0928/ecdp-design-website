import{Y as ae,t as se,u as de,a as ie,z as ce,Q as pe,I as le,K as re,e as ne,U as _e,A as ue,Z as ye,$ as oe,d as me}from"./index-Chsrs_3N.js";import{at as Te,by as Ne,bb as be,bc as Oe,Q as ge,a as U}from"./element-plus-CMDnEDmP.js";/* empty css                     */import{G as Le,L as Ee,M as Ie,a0 as s,W as d,P as Me,$ as Ce,_ as Se,u as m,F as fe,r as u,k as I,c as b,aj as v,aA as Ae}from"./vue-vendor-BFL4yudo.js";import{s as Ue,a as ve,b as ke}from"./common-CRcHQUfu.js";import{m as De}from"./subsystemData-lO_U4v7l.js";import"./markdown-AhVvyqak.js";import"./editor-CDjaDkQU.js";import"./ol-map-BDSc84yL.js";const he=[{dictType:"duty_status",dictTypeName:"值守状态",subsystemId:1,remark:"值守期间的在岗状态"},{dictType:"duty_shift",dictTypeName:"值守班次",subsystemId:1,remark:"值守班次划分"},{dictType:"handover_type",dictTypeName:"交接班类型",subsystemId:1,remark:"交接班业务类型"},{dictType:"duty_expressway_section_type",dictTypeName:"路段类型",subsystemId:1,remark:"高速公路维护-路段类型"},{dictType:"plan_type",dictTypeName:"预案类型",subsystemId:2,remark:"应急预案分类"},{dictType:"response_level",dictTypeName:"响应等级",subsystemId:2,remark:"应急响应分级"},{dictType:"plan_status",dictTypeName:"预案状态",subsystemId:2,remark:"预案流转状态"},{dictType:"drill_type",dictTypeName:"演练类型",subsystemId:2,remark:"应急演练形式"},{dictType:"event_type",dictTypeName:"事件类型",subsystemId:3,remark:"突发事件类别"},{dictType:"event_level",dictTypeName:"事件等级",subsystemId:3,remark:"突发事件危害程度分级"},{dictType:"event_status",dictTypeName:"事件状态",subsystemId:3,remark:"事件处置流程状态"},{dictType:"event_source",dictTypeName:"接报来源",subsystemId:3,remark:"事件信息接报渠道"},{dictType:"dispatch_type",dictTypeName:"调度类型",subsystemId:4,remark:"应急调度业务类型"},{dictType:"dispatch_status",dictTypeName:"调度状态",subsystemId:4,remark:"调度任务生命周期状态"},{dictType:"command_type",dictTypeName:"指令类型",subsystemId:4,remark:"指挥指令分类"},{dictType:"dispatch_expressway_section_type",dictTypeName:"路段类型",subsystemId:4,remark:"高速公路维护-路段类型"},{dictType:"material_category",dictTypeName:"物资类别",subsystemId:5,remark:"应急物资分类"},{dictType:"material_unit",dictTypeName:"计量单位",subsystemId:5,remark:"物资常用计量单位"},{dictType:"material_status",dictTypeName:"物资状态",subsystemId:5,remark:"物资库存状态"},{dictType:"warning_level",dictTypeName:"预警等级",subsystemId:6,remark:"预警信号等级"},{dictType:"warning_type",dictTypeName:"预警类型",subsystemId:6,remark:"预警灾种类型"},{dictType:"decision_type",dictTypeName:"决策类型",subsystemId:6,remark:"辅助决策类型"},{dictType:"source_type",dictTypeName:"数据源类型",subsystemId:7,remark:"融合接入的数据源分类"},{dictType:"data_quality",dictTypeName:"数据质量等级",subsystemId:7,remark:"数据质量评价等级"},{dictType:"fusion_status",dictTypeName:"融合状态",subsystemId:7,remark:"数据融合任务状态"},{dictType:"display_type",dictTypeName:"展示类型",subsystemId:8,remark:"综合展示场景分类"},{dictType:"screen_status",dictTypeName:"大屏状态",subsystemId:8,remark:"大屏展示运行状态"},{dictType:"flood_fail_reason_type",dictTypeName:"未达标原因类型",subsystemId:60,remark:"巡查未达标原因分类"},{dictType:"flood_highway_element",dictTypeName:"公路要素",subsystemId:60,remark:"公路巡查要素分类"},{dictType:"highway_grade",dictTypeName:"公路等级",subsystemId:60,remark:"公路等级分类"},{dictType:"flood_task_type",dictTypeName:"任务类型",subsystemId:60,remark:"汛期公路巡查任务类型"},{dictType:"flood_warning_category",dictTypeName:"预警分类",subsystemId:60,remark:"汛期公路巡查预警分类"},{dictType:"inspection_type",dictTypeName:"巡查类型",subsystemId:60,remark:"汛期公路巡查开展方式"},{dictType:"hidden_danger_type",dictTypeName:"隐患类型",subsystemId:60,remark:"巡查发现的隐患类别"},{dictType:"org_area_level",dictTypeName:"区域级别",subsystemId:99,remark:"行政区域级别"},{dictType:"user_status",dictTypeName:"用户状态",subsystemId:99,remark:"平台用户账号状态"},{dictType:"notice_type",dictTypeName:"通知类型",subsystemId:99,remark:"系统通知消息类型"},{dictType:"auth_type",dictTypeName:"授权类型",subsystemId:99,remark:"OAuth 客户端授权类型"}],M=he.reduce((p,c)=>{const O=p.filter(y=>y.subsystemId===c.subsystemId).length;return p.push({dictTypeId:p.length+1,dictType:c.dictType,dictTypeName:c.dictTypeName,subsystemId:c.subsystemId,displayOrder:O+1,remark:c.remark??"",status:1101,...ae()}),p},[]);M.reduce((p,c)=>(p[c.dictType]=c.dictTypeName,p),{});M.reduce((p,c)=>(p[c.dictType]=c.subsystemId,p),{});function Re(){return M}const xe=`-- Table structure for sys_dict_type
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
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
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
COMMENT ON COLUMN "public"."sys_dict_type"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_dict_type"."signature_version" IS '数据签名版本号';
COMMENT ON COLUMN "public"."sys_dict_type"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_dict_type"."local_signature_version" IS '本地签名版本号';
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
`,Ve=`-- Table structure for sys_dict_data
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
COMMENT ON COLUMN "public"."sys_dict_data"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."sys_dict_data"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON COLUMN "public"."sys_dict_data"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_dict_data"."signature_version" IS '数据签名版本号';
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
`,Fe=["onClick"],we=Le({__name:"DictTypeManagement",setup(p){const c=ke,O=Ae(),y=De.filter(e=>!e.isHidden),g=u(!1),C=u([]),o=u(!1),r=u(!1),T=u(),n=u(99),N=I({dictTypeName:""}),S=b(()=>{const e=y.find(a=>a.subsystemId===n.value);return e?e.subsystemName:""}),f={dictTypeId:0,dictType:"",dictTypeName:"",subsystemId:99,displayOrder:0,remark:"",status:1101},i=I({...f}),k={dictType:[{required:!0,message:"请输入类型编码",trigger:"blur"}],dictTypeName:[{required:!0,message:"请输入类型名称",trigger:"blur"}],subsystemId:[{required:!0,message:"请选择所属子系统",trigger:"change"}]},l=I({pageNum:1,pageSize:20}),D=[{prop:"dictTypeName",label:"类型名称",minWidth:160,slot:"dictTypeName"},{prop:"dictType",label:"类型编码",minWidth:220,cellType:"code"},{prop:"displayOrder",label:"显示排序",width:90},{prop:"status",label:"状态",width:90,cellType:"tag",tagMap:ve,tagLabelMap:Ue},{prop:"remark",label:"备注",minWidth:140,cellType:"secondary",showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"更新人"},{type:"audit",prop:"updateTime",label:"更新时间"},{type:"actions",label:"操作",slot:"actions"}],A=b(()=>{let e=C.value;return e=e.filter(a=>a.subsystemId===n.value),N.dictTypeName&&(e=e.filter(a=>oe(N.dictTypeName,a.dictTypeName))),e}),h=b(()=>A.value.length),R=b(()=>ye(A.value,l.pageNum,l.pageSize)),x=[{label:"编辑",icon:Te,handler:e=>B(e)},{label:"删除",icon:Ne,divided:!0,handler:e=>X(e)}];function L(){g.value=!0,setTimeout(()=>{C.value=Re(),g.value=!1},300)}function V(e){n.value=e,l.pageNum=1}function F(){l.pageNum=1}function w(e){O.push({path:"/admin/dict/data",query:{dictType:e.dictType,dictTypeName:e.dictTypeName,subsystemName:S.value}})}function W(){r.value=!1,Object.assign(i,f,{subsystemId:n.value}),o.value=!0}function B(e){r.value=!0,Object.assign(i,{dictTypeId:e.dictTypeId,dictType:e.dictType,dictTypeName:e.dictTypeName,subsystemId:n.value,displayOrder:e.displayOrder,remark:e.remark,status:e.status}),o.value=!0}function P(){T.value&&T.value.validate(e=>{e&&(U.success(r.value?"编辑成功":"新增成功"),o.value=!1,L())})}async function X(e){await _e(e.dictTypeName)&&(U.success("删除成功"),L())}function q(){var e;(e=T.value)==null||e.resetFields()}return L(),(e,a)=>{const z=v("table-structure-drawer"),G=pe,H=ce,$=ie,K=de,Y=se,j=v("split-layout"),E=ge,_=Oe,Q=le,Z=re,J=ne,ee=be,te=ue;return Ee(),Ie(fe,null,[s(j,{"aside-title":"子系统列表",title:"字典管理","sub-title":S.value,"expanded-width":"260px","collapsed-width":"72px",collapsed:""},{"title-extra":d(()=>[s(z,{sql:[m(xe),m(Ve)]},null,8,["sql"])]),aside:d(({collapsed:t})=>[s(G,{subsystems:m(y),"active-id":n.value,collapsed:t,onSelect:V},null,8,["subsystems","active-id","collapsed"])]),search:d(()=>[s(H,{modelValue:N.dictTypeName,"onUpdate:modelValue":a[0]||(a[0]=t=>N.dictTypeName=t),placeholder:"搜索类型名称",onSearch:F},null,8,["modelValue"])]),actions:d(()=>[s($,{"margin-left":10,onClick:W},{default:d(()=>[...a[10]||(a[10]=[Se("新增类型",-1)])]),_:1})]),default:d(()=>[s(Y,{"page-num":l.pageNum,"onUpdate:pageNum":a[1]||(a[1]=t=>l.pageNum=t),"page-size":l.pageSize,"onUpdate:pageSize":a[2]||(a[2]=t=>l.pageSize=t),data:R.value,columns:D,total:h.value,loading:g.value,"row-key":"dictTypeId","show-tool-bar":!1},{dictTypeName:d(({row:t})=>[Me("span",{class:"cell-link",onClick:We=>w(t)},Ce(t.dictTypeName),9,Fe)]),actions:d(({row:t})=>[s(K,{items:x,row:t},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1},8,["sub-title"]),s(te,{modelValue:o.value,"onUpdate:modelValue":a[9]||(a[9]=t=>o.value=t),title:r.value?"编辑字典类型":"新增字典类型",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":r.value?"保存修改":"确认创建","on-confirm":P,onClosed:q},{default:d(()=>[s(ee,{ref_key:"formRef",ref:T,model:i,rules:k,"label-width":"110px","label-position":"right"},{default:d(()=>[s(_,{label:"类型编码",prop:"dictType"},{default:d(()=>[s(E,{modelValue:i.dictType,"onUpdate:modelValue":a[3]||(a[3]=t=>i.dictType=t),placeholder:"如：sys_normal_disable",maxlength:"100",disabled:r.value},null,8,["modelValue","disabled"])]),_:1}),s(_,{label:"类型名称",prop:"dictTypeName"},{default:d(()=>[s(E,{modelValue:i.dictTypeName,"onUpdate:modelValue":a[4]||(a[4]=t=>i.dictTypeName=t),placeholder:"请输入类型名称",maxlength:"100"},null,8,["modelValue"])]),_:1}),s(_,{label:"所属子系统",prop:"subsystemId"},{default:d(()=>[s(Q,{modelValue:i.subsystemId,"onUpdate:modelValue":a[5]||(a[5]=t=>i.subsystemId=t),options:m(y).map(t=>({label:t.subsystemName,value:t.subsystemId})),disabled:""},null,8,["modelValue","options"])]),_:1}),s(_,{label:"显示排序",prop:"displayOrder"},{default:d(()=>[s(Z,{modelValue:i.displayOrder,"onUpdate:modelValue":a[6]||(a[6]=t=>i.displayOrder=t),min:0,max:9999},null,8,["modelValue"])]),_:1}),s(_,{label:"状态",prop:"status"},{default:d(()=>[s(J,{modelValue:i.status,"onUpdate:modelValue":a[7]||(a[7]=t=>i.status=t),options:m(c)},null,8,["modelValue","options"])]),_:1}),s(_,{label:"备注",prop:"remark"},{default:d(()=>[s(E,{modelValue:i.remark,"onUpdate:modelValue":a[8]||(a[8]=t=>i.remark=t),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])],64)}}}),Ye=me(we,[["__scopeId","data-v-3da34d57"]]);export{Ye as default};
