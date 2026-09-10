import{s as B,f as H,a as q,b as $}from"./index-Dz8cBk7z.js";import{aT as J,p as K}from"./element-plus-D60thvil.js";import{r as X}from"./randomMock-BnXBY1mw.js";import{G as Y,O as j,W as a,aj as d,L as z,P as e,a0 as i,v as r,_ as Q,u as Z}from"./vue-vendor-Dq7Ldkyc.js";const h=`-- Table structure for flood_inspection_rule
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_inspection_rule";
CREATE TABLE "public"."flood_inspection_rule" (
  "rule_id" bigint NOT NULL,
  "task_generation_time" varchar(100) COLLATE "pg_catalog"."default",
  "first_patrol_window" varchar(100) COLLATE "pg_catalog"."default",
  "pre_warning_patrol_validity" varchar(100) COLLATE "pg_catalog"."default",
  "period_interval" varchar(100) COLLATE "pg_catalog"."default",
  "tail_insufficient_period" varchar(100) COLLATE "pg_catalog"."default",
  "exclude_cancelled_warning" varchar(100) COLLATE "pg_catalog"."default",
  "overnight_rule" varchar(100) COLLATE "pg_catalog"."default",
  "track_coordinate_system" varchar(50) COLLATE "pg_catalog"."default",
  "track_coverage_standard" varchar(100) COLLATE "pg_catalog"."default",
  "track_coverage_definition" varchar(100) COLLATE "pg_catalog"."default",
  "sampling_interval" varchar(100) COLLATE "pg_catalog"."default",
  "track_offset_tolerance" varchar(100) COLLATE "pg_catalog"."default",
  "direction_consistency" varchar(100) COLLATE "pg_catalog"."default",
  "stake_consistency" varchar(100) COLLATE "pg_catalog"."default",
  "min_track_points" varchar(100) COLLATE "pg_catalog"."default",
  "pause_time_included" varchar(100) COLLATE "pg_catalog"."default",
  "no_end_time_handling" varchar(100) COLLATE "pg_catalog"."default",
  "location_off_handling" varchar(100) COLLATE "pg_catalog"."default",
  "data_supplement" varchar(100) COLLATE "pg_catalog"."default",
  "phone_supervision_enabled" varchar(100) COLLATE "pg_catalog"."default",
  "phone_trigger_condition" varchar(100) COLLATE "pg_catalog"."default",
  "call_target" varchar(100) COLLATE "pg_catalog"."default",
  "phone_retry_strategy" varchar(100) COLLATE "pg_catalog"."default",
  "post_warning_follow_up" varchar(100) COLLATE "pg_catalog"."default",
  "report_target" varchar(100) COLLATE "pg_catalog"."default",
  "report_method" varchar(100) COLLATE "pg_catalog"."default",
  "report_retry_count" varchar(100) COLLATE "pg_catalog"."default",
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "status" smallint DEFAULT 1101,
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
ALTER TABLE "public"."flood_inspection_rule" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_inspection_rule"."rule_id" IS '规则ID';
COMMENT ON COLUMN "public"."flood_inspection_rule"."task_generation_time" IS '任务生成时间';
COMMENT ON COLUMN "public"."flood_inspection_rule"."first_patrol_window" IS '首次巡查窗口';
COMMENT ON COLUMN "public"."flood_inspection_rule"."pre_warning_patrol_validity" IS '预警生效前巡查有效性';
COMMENT ON COLUMN "public"."flood_inspection_rule"."period_interval" IS '周期间隔';
COMMENT ON COLUMN "public"."flood_inspection_rule"."tail_insufficient_period" IS '尾端不足周期';
COMMENT ON COLUMN "public"."flood_inspection_rule"."exclude_cancelled_warning" IS '排除已撤销预警';
COMMENT ON COLUMN "public"."flood_inspection_rule"."overnight_rule" IS '跨夜规则';
COMMENT ON COLUMN "public"."flood_inspection_rule"."track_coordinate_system" IS '轨迹坐标系';
COMMENT ON COLUMN "public"."flood_inspection_rule"."track_coverage_standard" IS '轨迹覆盖标准';
COMMENT ON COLUMN "public"."flood_inspection_rule"."track_coverage_definition" IS '轨迹覆盖定义';
COMMENT ON COLUMN "public"."flood_inspection_rule"."sampling_interval" IS '采样间隔';
COMMENT ON COLUMN "public"."flood_inspection_rule"."track_offset_tolerance" IS '轨迹偏移容差';
COMMENT ON COLUMN "public"."flood_inspection_rule"."direction_consistency" IS '方向一致性';
COMMENT ON COLUMN "public"."flood_inspection_rule"."stake_consistency" IS '桩号一致性';
COMMENT ON COLUMN "public"."flood_inspection_rule"."min_track_points" IS '最少轨迹点';
COMMENT ON COLUMN "public"."flood_inspection_rule"."pause_time_included" IS '暂停时间是否计入';
COMMENT ON COLUMN "public"."flood_inspection_rule"."no_end_time_handling" IS '无结束时间处理';
COMMENT ON COLUMN "public"."flood_inspection_rule"."location_off_handling" IS '定位关闭处理';
COMMENT ON COLUMN "public"."flood_inspection_rule"."data_supplement" IS '数据补录';
COMMENT ON COLUMN "public"."flood_inspection_rule"."phone_supervision_enabled" IS '是否启用电话督办';
COMMENT ON COLUMN "public"."flood_inspection_rule"."phone_trigger_condition" IS '电话触发条件';
COMMENT ON COLUMN "public"."flood_inspection_rule"."call_target" IS '外呼对象';
COMMENT ON COLUMN "public"."flood_inspection_rule"."phone_retry_strategy" IS '电话重试策略';
COMMENT ON COLUMN "public"."flood_inspection_rule"."post_warning_follow_up" IS '预警结束后续巡';
COMMENT ON COLUMN "public"."flood_inspection_rule"."report_target" IS '报送对象';
COMMENT ON COLUMN "public"."flood_inspection_rule"."report_method" IS '报送方式';
COMMENT ON COLUMN "public"."flood_inspection_rule"."report_retry_count" IS '重试次数';
COMMENT ON COLUMN "public"."flood_inspection_rule"."remark" IS '备注';
COMMENT ON COLUMN "public"."flood_inspection_rule"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_inspection_rule"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_inspection_rule"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_inspection_rule"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_inspection_rule"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_inspection_rule"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_inspection_rule"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_inspection_rule"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_inspection_rule"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_inspection_rule"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_inspection_rule" IS '达标规则配置表';

-- ----------------------------

-- Indexes structure for table flood_inspection_rule
-- ----------------------------
CREATE INDEX "idx_flood_inspection_rule_deleted" ON "public"."flood_inspection_rule" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_inspection_rule
-- ----------------------------
ALTER TABLE "public"."flood_inspection_rule" ADD CONSTRAINT "flood_inspection_rule_pkey" PRIMARY KEY ("rule_id");

-- ----------------------------
`,ll={ruleId:1,taskGenerationTime:"预警生效时间",firstPatrolWindow:"2小时内",preWarningPatrolValidity:"预警生效前1小时内有效",periodInterval:"2小时",tailInsufficientPeriod:"豁免",excludeCancelledWarning:"是",overnightRule:"继续执行",trackCoordinateSystem:"WGS84",trackCoverageStandard:"是",trackCoverageDefinition:"上行或下行均可",samplingInterval:"10秒",trackOffsetTolerance:"100米",directionConsistency:"不校验",stakeConsistency:"允许偏差",minTrackPoints:"10",pauseTimeIncluded:"不计入巡查时长",noEndTimeHandling:"数据不提交",locationOffHandling:"禁止巡查",dataSupplement:"否",phoneSupervisionEnabled:"是",phoneTriggerCondition:"提前5分钟",callTarget:"路段配置人员",phoneRetryStrategy:"重试三次后，通知工人",postWarningFollowUp:"不巡查",reportTarget:"部系统",reportMethod:"实时推送",reportRetryCount:"三次",...X()},el={class:"rule-config-page"},ol={class:"config-grid"},nl={class:"config-item"},il={class:"config-item"},tl={class:"config-item"},al={class:"config-item"},sl={class:"config-item"},dl={class:"config-item"},rl={class:"config-item"},ul={class:"config-grid"},pl={class:"config-item"},cl={class:"config-item"},gl={class:"config-item"},fl={class:"config-item"},vl={class:"config-item"},Ol={class:"config-item"},ml={class:"config-item"},_l={class:"config-item"},bl={class:"config-grid"},Cl={class:"config-item"},Nl={class:"config-item"},Tl={class:"config-item"},Ml={class:"config-grid"},Ll={class:"config-item"},El={class:"config-grid"},Vl={class:"config-item"},Ul={class:"config-item"},Sl={class:"config-item"},Il={class:"config-item"},Al={class:"config-grid"},yl={class:"config-item"},kl={class:"config-grid"},Rl={class:"config-item"},wl={class:"config-item"},Pl={class:"config-item"},Wl=Y({__name:"Rules",setup(Dl){const u=[{label:"预警生效时间",value:"预警生效时间"},{label:"预警生效时",value:"预警生效时"},{label:"预警生效后一小时",value:"预警生效后一小时"},{label:"预警生效前一小时",value:"预警生效前一小时"}],p=[{label:"1小时内",value:"1小时内"},{label:"2小时内",value:"2小时内"},{label:"4小时内",value:"4小时内"}],c=[{label:"预警生效前1小时内有效",value:"预警生效前1小时内有效"},{label:"预警生效前2小时内有效",value:"预警生效前2小时内有效"}],g=[{label:"1小时",value:"1小时"},{label:"1.5小时",value:"1.5小时"},{label:"2小时",value:"2小时"}],f=[{label:"豁免",value:"豁免"},{label:"1小时内",value:"1小时内"},{label:"2小时内",value:"2小时内"}],v=[{label:"是",value:"是"},{label:"否",value:"否"}],O=[{label:"继续执行",value:"继续执行"},{label:"豁免",value:"豁免"}],m=[{label:"WGS84",value:"WGS84"},{label:"GCJ02",value:"GCJ02"},{label:"BD09",value:"BD09"}],_=[{label:"是",value:"是"},{label:"否",value:"否"}],b=[{label:"上行或下行均可",value:"上行或下行均可"},{label:"仅上行",value:"仅上行"},{label:"仅下行",value:"仅下行"}],C=[{label:"5秒",value:"5秒"},{label:"10秒",value:"10秒"},{label:"30秒",value:"30秒"},{label:"60秒",value:"60秒"}],N=[{label:"50米",value:"50米"},{label:"100米",value:"100米"},{label:"200米",value:"200米"},{label:"500米",value:"500米"}],T=[{label:"不校验",value:"不校验"},{label:"校验",value:"校验"}],M=[{label:"允许偏差",value:"允许偏差"},{label:"不允许偏差",value:"不允许偏差"}],L=[{label:"5",value:"5"},{label:"10",value:"10"},{label:"20",value:"20"},{label:"50",value:"50"}],E=[{label:"不计入巡查时长",value:"不计入巡查时长"},{label:"计入巡查时长",value:"计入巡查时长"}],V=[{label:"数据不提交",value:"数据不提交"},{label:"数据提交",value:"数据提交"}],U=[{label:"禁止巡查",value:"禁止巡查"},{label:"允许巡查",value:"允许巡查"}],S=[{label:"是",value:"是"},{label:"否",value:"否"}],I=[{label:"是",value:"是"},{label:"否",value:"否"}],A=[{label:"提前5分钟",value:"提前5分钟"},{label:"提前10分钟",value:"提前10分钟"},{label:"提前15分钟",value:"提前15分钟"}],y=[{label:"路段配置人员",value:"路段配置人员"},{label:"全部人员",value:"全部人员"}],k=[{label:"重试一次后，通知工人",value:"重试一次后，通知工人"},{label:"重试两次后，通知工人",value:"重试两次后，通知工人"},{label:"重试三次后，通知工人",value:"重试三次后，通知工人"}],R=[{label:"不巡查",value:"不巡查"},{label:"继续巡查",value:"继续巡查"}],w=[{label:"部系统",value:"部系统"},{label:"省系统",value:"省系统"}],P=[{label:"实时推送",value:"实时推送"},{label:"定时推送",value:"定时推送"}],W=[{label:"一次",value:"一次"},{label:"两次",value:"两次"},{label:"三次",value:"三次"}],o=Z({...ll});function D(){K.success("配置保存成功")}return(xl,l)=>{const x=d("table-structure-drawer"),F=q,t=H,s=B,G=d("panel-layout");return z(),j(G,{title:"达标规则配置","content-scrollable":!0},{"title-extra":a(()=>[i(x,{sql:r(h)},null,8,["sql"])]),actions:a(()=>[i(F,{type:"primary",icon:r(J),onClick:D},{default:a(()=>[...l[27]||(l[27]=[Q("保存配置",-1)])]),_:1},8,["icon"])]),default:a(()=>[e("div",el,[i(s,{class:"config-section"},{header:a(()=>[...l[28]||(l[28]=[e("span",{class:"section-title"},"任务生成时间",-1)])]),default:a(()=>[e("div",ol,[e("div",nl,[l[29]||(l[29]=e("div",{class:"config-label"},"预警生效时间",-1)),l[30]||(l[30]=e("div",{class:"config-desc"},"预警发出后，在生效之前的多长时间生成任务",-1)),i(t,{modelValue:o.taskGenerationTime,"onUpdate:modelValue":l[0]||(l[0]=n=>o.taskGenerationTime=n),options:u,placeholder:"请选择"},null,8,["modelValue"])]),e("div",il,[l[31]||(l[31]=e("div",{class:"config-label"},"首次巡查窗口",-1)),l[32]||(l[32]=e("div",{class:"config-desc"},"预警生效后，允许多久内容巡查开始合规",-1)),i(t,{modelValue:o.firstPatrolWindow,"onUpdate:modelValue":l[1]||(l[1]=n=>o.firstPatrolWindow=n),options:p,placeholder:"请选择"},null,8,["modelValue"])]),e("div",tl,[l[33]||(l[33]=e("div",{class:"config-label"},"预警生效前巡查有效性",-1)),l[34]||(l[34]=e("div",{class:"config-desc"},"预警生效前，允许多久内容巡查开始合规",-1)),i(t,{modelValue:o.preWarningPatrolValidity,"onUpdate:modelValue":l[2]||(l[2]=n=>o.preWarningPatrolValidity=n),options:c,placeholder:"请选择"},null,8,["modelValue"])]),e("div",al,[l[35]||(l[35]=e("div",{class:"config-label"},"周期间隔",-1)),l[36]||(l[36]=e("div",{class:"config-desc"},"与最近一次巡查开始时间间隔",-1)),i(t,{modelValue:o.periodInterval,"onUpdate:modelValue":l[3]||(l[3]=n=>o.periodInterval=n),options:g,placeholder:"请选择"},null,8,["modelValue"])]),e("div",sl,[l[37]||(l[37]=e("div",{class:"config-label"},"尾端不足周期",-1)),l[38]||(l[38]=e("div",{class:"config-desc"},"预警结束前剩余不足一个巡查周期时，是否计入窗口",-1)),i(t,{modelValue:o.tailInsufficientPeriod,"onUpdate:modelValue":l[4]||(l[4]=n=>o.tailInsufficientPeriod=n),options:f,placeholder:"请选择"},null,8,["modelValue"])]),e("div",dl,[l[39]||(l[39]=e("div",{class:"config-label"},"排除已撤销预警",-1)),l[40]||(l[40]=e("div",{class:"config-desc"},"预警被撤销后，是否从应巡、未达标和通报统计中剔除",-1)),i(t,{modelValue:o.excludeCancelledWarning,"onUpdate:modelValue":l[5]||(l[5]=n=>o.excludeCancelledWarning=n),options:v,placeholder:"请选择"},null,8,["modelValue"])]),e("div",rl,[l[41]||(l[41]=e("div",{class:"config-label"},"跨夜规则",-1)),l[42]||(l[42]=e("div",{class:"config-desc"},"跨夜预警是否继续执行原班次，避免跨夜窗口被误判为豁免",-1)),i(t,{modelValue:o.overnightRule,"onUpdate:modelValue":l[6]||(l[6]=n=>o.overnightRule=n),options:O,placeholder:"请选择"},null,8,["modelValue"])])])]),_:1}),i(s,{class:"config-section"},{header:a(()=>[...l[43]||(l[43]=[e("span",{class:"section-title"},"轨迹覆盖核查",-1)])]),default:a(()=>[e("div",ul,[e("div",pl,[l[44]||(l[44]=e("div",{class:"config-label"},"轨迹坐标系",-1)),l[45]||(l[45]=e("div",{class:"config-desc"},"设置轨迹经纬度统一坐标口径",-1)),i(t,{modelValue:o.trackCoordinateSystem,"onUpdate:modelValue":l[7]||(l[7]=n=>o.trackCoordinateSystem=n),options:m,placeholder:"请选择"},null,8,["modelValue"])]),e("div",cl,[l[46]||(l[46]=e("div",{class:"config-label"},"轨迹覆盖标准",-1)),l[47]||(l[47]=e("div",{class:"config-desc"},"定义轨迹覆盖预警路段的最低比例或进入标准",-1)),i(t,{modelValue:o.trackCoverageStandard,"onUpdate:modelValue":l[8]||(l[8]=n=>o.trackCoverageStandard=n),options:_,placeholder:"请选择"},null,8,["modelValue"])]),e("div",gl,[l[48]||(l[48]=e("div",{class:"config-label"},"轨迹覆盖定义",-1)),l[49]||(l[49]=e("div",{class:"config-desc"},"上下行公路，完全覆盖定义",-1)),i(t,{modelValue:o.trackCoverageDefinition,"onUpdate:modelValue":l[9]||(l[9]=n=>o.trackCoverageDefinition=n),options:b,placeholder:"请选择"},null,8,["modelValue"])]),e("div",fl,[l[50]||(l[50]=e("div",{class:"config-label"},"采样间隔",-1)),l[51]||(l[51]=e("div",{class:"config-desc"},"配置APP采集轨迹点的时间或距离间隔，用于轨迹完整性核查",-1)),i(t,{modelValue:o.samplingInterval,"onUpdate:modelValue":l[10]||(l[10]=n=>o.samplingInterval=n),options:C,placeholder:"请选择"},null,8,["modelValue"])]),e("div",vl,[l[52]||(l[52]=e("div",{class:"config-label"},"轨迹偏移容差",-1)),l[53]||(l[53]=e("div",{class:"config-desc"},"允许轨迹点偏离路段或电子围栏的最大距离",-1)),i(t,{modelValue:o.trackOffsetTolerance,"onUpdate:modelValue":l[11]||(l[11]=n=>o.trackOffsetTolerance=n),options:N,placeholder:"请选择"},null,8,["modelValue"])]),e("div",Ol,[l[54]||(l[54]=e("div",{class:"config-label"},"方向一致性",-1)),l[55]||(l[55]=e("div",{class:"config-desc"},"核查巡查方向是否与预警路段方向一致",-1)),i(t,{modelValue:o.directionConsistency,"onUpdate:modelValue":l[12]||(l[12]=n=>o.directionConsistency=n),options:T,placeholder:"请选择"},null,8,["modelValue"])]),e("div",ml,[l[56]||(l[56]=e("div",{class:"config-label"},"桩号一致性",-1)),l[57]||(l[57]=e("div",{class:"config-desc"},"核查巡查起止桩号是否落在预警或任务要求范围内",-1)),i(t,{modelValue:o.stakeConsistency,"onUpdate:modelValue":l[13]||(l[13]=n=>o.stakeConsistency=n),options:M,placeholder:"请选择"},null,8,["modelValue"])]),e("div",_l,[l[58]||(l[58]=e("div",{class:"config-label"},"最少轨迹点（个）",-1)),l[59]||(l[59]=e("div",{class:"config-desc"},"设置一次巡查至少需要多少个有效轨迹点",-1)),i(t,{modelValue:o.minTrackPoints,"onUpdate:modelValue":l[14]||(l[14]=n=>o.minTrackPoints=n),options:L,placeholder:"请选择"},null,8,["modelValue"])])])]),_:1}),i(s,{class:"config-section"},{header:a(()=>[...l[60]||(l[60]=[e("span",{class:"section-title"},"巡查执行核查",-1)])]),default:a(()=>[e("div",bl,[e("div",Cl,[l[61]||(l[61]=e("div",{class:"config-label"},"暂停时间是否计入",-1)),l[62]||(l[62]=e("div",{class:"config-desc"},"暂停时间是否计入巡查时长，影响巡查时长",-1)),i(t,{modelValue:o.pauseTimeIncluded,"onUpdate:modelValue":l[15]||(l[15]=n=>o.pauseTimeIncluded=n),options:E,placeholder:"请选择"},null,8,["modelValue"])]),e("div",Nl,[l[63]||(l[63]=e("div",{class:"config-label"},"无结束时间处理",-1)),l[64]||(l[64]=e("div",{class:"config-desc"},"巡查记录缺少结束时间时，系统如何暂存、禁止报送",-1)),i(t,{modelValue:o.noEndTimeHandling,"onUpdate:modelValue":l[16]||(l[16]=n=>o.noEndTimeHandling=n),options:V,placeholder:"请选择"},null,8,["modelValue"])]),e("div",Tl,[l[65]||(l[65]=e("div",{class:"config-label"},"定位关闭处理",-1)),l[66]||(l[66]=e("div",{class:"config-desc"},"定位权限关闭或定位不可用时",-1)),i(t,{modelValue:o.locationOffHandling,"onUpdate:modelValue":l[17]||(l[17]=n=>o.locationOffHandling=n),options:U,placeholder:"请选择"},null,8,["modelValue"])])])]),_:1}),i(s,{class:"config-section"},{header:a(()=>[...l[67]||(l[67]=[e("span",{class:"section-title"},"数据补录",-1)])]),default:a(()=>[e("div",Ml,[e("div",Ll,[l[68]||(l[68]=e("div",{class:"config-label"},"不达标时，是否必须要补录",-1)),l[69]||(l[69]=e("div",{class:"config-desc"},"不达标时，是否必须要补录",-1)),i(t,{modelValue:o.dataSupplement,"onUpdate:modelValue":l[18]||(l[18]=n=>o.dataSupplement=n),options:S,placeholder:"请选择"},null,8,["modelValue"])])])]),_:1}),i(s,{class:"config-section"},{header:a(()=>[...l[70]||(l[70]=[e("span",{class:"section-title"},"电话督办",-1)])]),default:a(()=>[e("div",El,[e("div",Vl,[l[71]||(l[71]=e("div",{class:"config-label"},"是否启用电话督办",-1)),l[72]||(l[72]=e("div",{class:"config-desc"},"预警呼叫、未巡查、超时未反馈时是否允许自动外呼",-1)),i(t,{modelValue:o.phoneSupervisionEnabled,"onUpdate:modelValue":l[19]||(l[19]=n=>o.phoneSupervisionEnabled=n),options:I,placeholder:"请选择"},null,8,["modelValue"])]),e("div",Ul,[l[73]||(l[73]=e("div",{class:"config-label"},"电话触发条件",-1)),l[74]||(l[74]=e("div",{class:"config-desc"},"达到哪些条件时从系统消息提醒升级为电话语音督办",-1)),i(t,{modelValue:o.phoneTriggerCondition,"onUpdate:modelValue":l[20]||(l[20]=n=>o.phoneTriggerCondition=n),options:A,placeholder:"请选择"},null,8,["modelValue"])]),e("div",Sl,[l[75]||(l[75]=e("div",{class:"config-label"},"外呼对象",-1)),l[76]||(l[76]=e("div",{class:"config-desc"},"配置电话督办时优先拨打的人员范围",-1)),i(t,{modelValue:o.callTarget,"onUpdate:modelValue":l[21]||(l[21]=n=>o.callTarget=n),options:y,placeholder:"请选择"},null,8,["modelValue"])]),e("div",Il,[l[77]||(l[77]=e("div",{class:"config-label"},"电话重试策略",-1)),l[78]||(l[78]=e("div",{class:"config-desc"},"无人接听或外呼失败后的重试次数",-1)),i(t,{modelValue:o.phoneRetryStrategy,"onUpdate:modelValue":l[22]||(l[22]=n=>o.phoneRetryStrategy=n),options:k,placeholder:"请选择"},null,8,["modelValue"])])])]),_:1}),i(s,{class:"config-section"},{header:a(()=>[...l[79]||(l[79]=[e("span",{class:"section-title"},"预警结束后续巡",-1)])]),default:a(()=>[e("div",Al,[e("div",yl,[l[80]||(l[80]=e("div",{class:"config-label"},"路段较长或高风险区域未覆盖时，预警结束后是否继续完成任务",-1)),l[81]||(l[81]=e("div",{class:"config-desc"},"路段较长或高风险区域未覆盖时，预警结束后是否继续完成任务",-1)),i(t,{modelValue:o.postWarningFollowUp,"onUpdate:modelValue":l[23]||(l[23]=n=>o.postWarningFollowUp=n),options:R,placeholder:"请选择"},null,8,["modelValue"])])])]),_:1}),i(s,{class:"config-section"},{header:a(()=>[...l[82]||(l[82]=[e("span",{class:"section-title"},"数据报送核查",-1)])]),default:a(()=>[e("div",kl,[e("div",Rl,[l[83]||(l[83]=e("div",{class:"config-label"},"报送对象",-1)),l[84]||(l[84]=e("div",{class:"config-desc"},"数据报送的目标系统",-1)),i(t,{modelValue:o.reportTarget,"onUpdate:modelValue":l[24]||(l[24]=n=>o.reportTarget=n),options:w,placeholder:"请选择"},null,8,["modelValue"])]),e("div",wl,[l[85]||(l[85]=e("div",{class:"config-label"},"报送方式",-1)),l[86]||(l[86]=e("div",{class:"config-desc"},"数据报送的方式",-1)),i(t,{modelValue:o.reportMethod,"onUpdate:modelValue":l[25]||(l[25]=n=>o.reportMethod=n),options:P,placeholder:"请选择"},null,8,["modelValue"])]),e("div",Pl,[l[87]||(l[87]=e("div",{class:"config-label"},"重试次数",-1)),l[88]||(l[88]=e("div",{class:"config-desc"},"报送失败后的重试次数",-1)),i(t,{modelValue:o.reportRetryCount,"onUpdate:modelValue":l[26]||(l[26]=n=>o.reportRetryCount=n),options:W,placeholder:"请选择"},null,8,["modelValue"])])])]),_:1})])]),_:1})}}}),ql=$(Wl,[["__scopeId","data-v-e9979596"]]);export{ql as default};
