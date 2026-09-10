import{l as W,i as j,j as J,a as K,p as Q,q as Z,h as H,f as ee,r as ae}from"./index-Dz8cBk7z.js";import{F as oe,aQ as le,aO as te,aD as re,aE as ne,a4 as de}from"./element-plus-D60thvil.js";/* empty css                     */import{r as d,s as ue}from"./randomMock-BnXBY1mw.js";import{u as ce}from"./useMockTablePage-Cliqp1A6.js";import{G as ie,M as me,a0 as o,W as t,F as pe,j as i,aj as C,L as se,v as r,_ as be,q as Ne}from"./vue-vendor-Dq7Ldkyc.js";import"./pagination-BbYzDLaW.js";const _e=`-- Table structure for flood_robot
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_robot";
CREATE TABLE "public"."flood_robot" (
  "record_id" bigint NOT NULL,
  "robot_code" varchar(50) COLLATE "pg_catalog"."default",
  "robot_name" varchar(100) COLLATE "pg_catalog"."default",
  "company_name" varchar(200) COLLATE "pg_catalog"."default",
  "device_type" varchar(50) COLLATE "pg_catalog"."default",
  "device_model" varchar(100) COLLATE "pg_catalog"."default",
  "manufacturer" varchar(200) COLLATE "pg_catalog"."default",
  "serial_number" varchar(100) COLLATE "pg_catalog"."default",
  "enable_date" varchar(10) COLLATE "pg_catalog"."default",
  "device_status" varchar(20) COLLATE "pg_catalog"."default",
  "manager" varchar(50) COLLATE "pg_catalog"."default",
  "contact_phone" varchar(20) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."flood_robot" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_robot"."record_id" IS '记录ID';
COMMENT ON COLUMN "public"."flood_robot"."robot_code" IS '机器人编号';
COMMENT ON COLUMN "public"."flood_robot"."robot_name" IS '机器人名称';
COMMENT ON COLUMN "public"."flood_robot"."company_name" IS '所属企业名称';
COMMENT ON COLUMN "public"."flood_robot"."device_type" IS '设备类型';
COMMENT ON COLUMN "public"."flood_robot"."device_model" IS '设备型号';
COMMENT ON COLUMN "public"."flood_robot"."manufacturer" IS '生产厂家';
COMMENT ON COLUMN "public"."flood_robot"."serial_number" IS '设备序列号';
COMMENT ON COLUMN "public"."flood_robot"."enable_date" IS '启用日期';
COMMENT ON COLUMN "public"."flood_robot"."device_status" IS '设备状态';
COMMENT ON COLUMN "public"."flood_robot"."manager" IS '负责人';
COMMENT ON COLUMN "public"."flood_robot"."contact_phone" IS '联系电话';
COMMENT ON COLUMN "public"."flood_robot"."remark" IS '备注';
COMMENT ON COLUMN "public"."flood_robot"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_robot"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_robot"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_robot"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_robot"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_robot"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_robot"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_robot"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_robot"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_robot"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_robot" IS '巡查机器人表';

-- ----------------------------

-- Indexes structure for table flood_robot
-- ----------------------------
CREATE INDEX "idx_flood_robot_deleted" ON "public"."flood_robot" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_robot
-- ----------------------------
ALTER TABLE "public"."flood_robot" ADD CONSTRAINT "flood_robot_pkey" PRIMARY KEY ("record_id");

-- ----------------------------
`,fe=[{recordId:1,robotCode:"ROB-GD-2026-001",robotName:"厂区一号巡检机器人",companyName:"广东国安智能科技有限公司",deviceType:"轮式巡检机器人",deviceModel:"XJ-R800",manufacturer:"广州赛特智能科技有限公司",serialNumber:"ST-R800-260001",enableDate:"2026-01-15",deviceStatus:"NORMAL",manager:"陈志强",contactPhone:"13800131026",...d()},{recordId:2,robotCode:"ROB-GD-2026-002",robotName:"地下管廊巡检机器人",companyName:"深圳市深联智业发展有限公司",deviceType:"轨道式巡检机器人",deviceModel:"GD-X5",manufacturer:"深圳市朗驰欣创科技股份有限公司",serialNumber:"LC-GDX5-260018",enableDate:"2026-02-08",deviceStatus:"NORMAL",manager:"李海涛",contactPhone:"18675533571",...d()},{recordId:3,robotCode:"ROB-GD-2026-003",robotName:"配电室智能巡检机器人",companyName:"佛山市南海电气设备有限公司",deviceType:"电力巡检机器人",deviceModel:"ER-20",manufacturer:"广东博智机器人有限公司",serialNumber:"BZL-ER20-260036",enableDate:"2026-02-20",deviceStatus:"MAINTENANCE",manager:"赵建华",contactPhone:"13516666824",...d()},{recordId:4,robotCode:"ROB-GD-2026-004",robotName:"危化仓库防爆巡检机器人",companyName:"东莞市粤盛化工有限公司",deviceType:"防爆巡检机器人",deviceModel:"EXR-600",manufacturer:"广州高新兴机器人有限公司",serialNumber:"GX-EXR600-260012",enableDate:"2026-03-05",deviceStatus:"NORMAL",manager:"黄国辉",contactPhone:"13922997458",...d()},{recordId:5,robotCode:"ROB-GD-2026-005",robotName:"港区智能巡逻机器人",companyName:"珠海港区物业管理有限公司",deviceType:"安防巡逻机器人",deviceModel:"PATROL-A3",manufacturer:"深圳市优必选科技股份有限公司",serialNumber:"UB-A3-260025",enableDate:"2026-03-18",deviceStatus:"NORMAL",manager:"梁伟东",contactPhone:"13726262396",...d()},{recordId:6,robotCode:"ROB-GD-2026-006",robotName:"仓储搬运机器人",companyName:"中山市华南智能仓储有限公司",deviceType:"搬运机器人",deviceModel:"AGV-T10",manufacturer:"广东嘉腾机器人自动化有限公司",serialNumber:"JT-T10-260048",enableDate:"2026-04-02",deviceStatus:"NORMAL",manager:"周文杰",contactPhone:"18825334165",...d()},{recordId:7,robotCode:"ROB-GD-2026-007",robotName:"车间物料配送机器人",companyName:"江门市新合装备建设有限公司",deviceType:"自动导引运输机器人",deviceModel:"AGV-M5",manufacturer:"广东嘉腾机器人自动化有限公司",serialNumber:"JT-M5-260063",enableDate:"2026-04-16",deviceStatus:"SUSPENDED",manager:"林志鹏",contactPhone:"13630458073",...d()},{recordId:8,robotCode:"ROB-GD-2026-008",robotName:"污水处理巡检机器人",companyName:"惠州市惠阳环保水务有限公司",deviceType:"环保巡检机器人",deviceModel:"ENV-R3",manufacturer:"深圳市施耐德工业集团有限公司",serialNumber:"SLD-R3-260079",enableDate:"2026-05-06",deviceStatus:"FAULT",manager:"郑晓峰",contactPhone:"15986965318",...d()},{recordId:9,robotCode:"ROB-GD-2026-009",robotName:"园区消防巡检机器人",companyName:"肇庆市封桂产业园运营有限公司",deviceType:"消防巡检机器人",deviceModel:"FIRE-X2",manufacturer:"广州高新兴机器人有限公司",serialNumber:"GX-FX2-260091",enableDate:"2026-05-20",deviceStatus:"NORMAL",manager:"吴家明",contactPhone:"13360219642",...d()},{recordId:10,robotCode:"ROB-GD-2026-010",robotName:"能源站综合巡检机器人",companyName:"汕头市华新能源科技有限公司",deviceType:"综合巡检机器人",deviceModel:"INSPECT-S8",manufacturer:"深圳市朗驰欣创科技股份有限公司",serialNumber:"LC-S8-260105",enableDate:"2026-06-10",deviceStatus:"PENDING",manager:"蔡文浩",contactPhone:"18923982754",...d()}],E=[{label:"正常运行",value:"NORMAL"},{label:"维护中",value:"MAINTENANCE"},{label:"暂停使用",value:"SUSPENDED"},{label:"故障维修",value:"FAULT"},{label:"待启用",value:"PENDING"}],ve={NORMAL:"正常运行",MAINTENANCE:"维护中",SUSPENDED:"暂停使用",FAULT:"故障维修",PENDING:"待启用"},Ae=ie({__name:"Robot",setup(ge){const _=i(""),{loading:L,pagination:p,searchKeyword:b,pagedData:S,total:A,handleSearch:f,deleteItem:I,upsertItem:v}=ce({initialData:[...fe],keywordFields:["robotName","robotCode"]}),D={NORMAL:"success",MAINTENANCE:"warning",SUSPENDED:"info",FAULT:"danger",PENDING:"info"},m=i(!1),s=i(!1),g=i(!1),O=i(),M=i(null),T={robotCode:"",robotName:"",companyName:"",deviceType:"",deviceModel:"",manufacturer:"",serialNumber:"",enableDate:"",deviceStatus:"NORMAL",manager:"",contactPhone:"",remark:""},l=i({...T}),y={robotCode:[{required:!0,message:"请输入机器人编号",trigger:"blur"}],robotName:[{required:!0,message:"请输入机器人名称",trigger:"blur"}],companyName:[{required:!0,message:"请输入所属企业名称",trigger:"blur"}],deviceType:[{required:!0,message:"请输入设备类型",trigger:"blur"}],deviceModel:[{required:!0,message:"请输入设备型号",trigger:"blur"}],manufacturer:[{required:!0,message:"请输入生产厂家",trigger:"blur"}],serialNumber:[{required:!0,message:"请输入设备序列号",trigger:"blur"}],enableDate:[{required:!0,message:"请选择启用日期",trigger:"change"}],deviceStatus:[{required:!0,message:"请选择设备状态",trigger:"change"}],manager:[{required:!0,message:"请输入负责人",trigger:"blur"}],contactPhone:[{required:!0,message:"请输入联系电话",trigger:"blur"}]},U=[{prop:"robotCode",label:"机器人编号",width:150,align:"center",cellType:"code"},{prop:"robotName",label:"机器人名称",minWidth:150,showOverflowTooltip:!0},{prop:"companyName",label:"所属企业名称",minWidth:180,showOverflowTooltip:!0},{prop:"deviceType",label:"设备类型",width:150,align:"center"},{prop:"deviceModel",label:"设备型号",width:120,align:"center"},{prop:"manufacturer",label:"生产厂家",minWidth:150,showOverflowTooltip:!0},{prop:"serialNumber",label:"设备序列号",width:160,align:"center",cellType:"code"},{prop:"enableDate",label:"启用日期",width:110,align:"center"},{prop:"deviceStatus",label:"设备状态",width:90,align:"center",cellType:"tag",tagMap:D,tagLabelMap:ve},{prop:"manager",label:"负责人",width:80,align:"center"},{prop:"contactPhone",label:"联系电话",width:130,align:"center",cellType:"code"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],V=[{label:"编辑",icon:oe,handler:u=>R(u)},{label:"删除",icon:le,divided:!0,handler:u=>P(u)}];function h(){s.value=!1,l.value={...T},m.value=!0}function R(u){s.value=!0,l.value={...ue(u)},m.value=!0}async function P(u){await ae(`确定要删除机器人「${u.robotName}」吗？`)&&I(N=>N.recordId===u.recordId)}async function w(){var e;if(await((e=O.value)==null?void 0:e.validate().catch(()=>!1))){g.value=!0;try{s.value&&M.value?v({...l.value,recordId:M.value.recordId,...d()},"recordId"):v({...l.value,recordId:Date.now(),...d()},"recordId"),m.value=!1}finally{g.value=!1}}}return(u,e)=>{const N=C("table-structure-drawer"),F=Q,G=Z,B=K,q=J,k=j,X=C("panel-layout"),c=de,n=ne,x=H,z=ee,Y=re,$=W;return se(),me(pe,null,[o(X,{title:"巡查机器人"},{"title-extra":t(()=>[o(N,{sql:r(_e)},null,8,["sql"])]),search:t(()=>[o(F,{modelValue:r(b),"onUpdate:modelValue":e[0]||(e[0]=a=>Ne(b)?b.value=a:null),placeholder:"搜索机器人名称/编号",onSearch:r(f)},null,8,["modelValue","onSearch"]),o(G,{modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=a=>_.value=a),options:r(E),placeholder:"设备状态",onSearch:r(f)},null,8,["modelValue","options","onSearch"])]),actions:t(()=>[o(B,{type:"primary",icon:r(te),onClick:h},{default:t(()=>[...e[17]||(e[17]=[be("新增",-1)])]),_:1},8,["icon"])]),default:t(()=>[o(k,{"page-num":r(p).pageNum,"onUpdate:pageNum":e[2]||(e[2]=a=>r(p).pageNum=a),"page-size":r(p).pageSize,"onUpdate:pageSize":e[3]||(e[3]=a=>r(p).pageSize=a),data:r(S),columns:U,total:r(A),loading:r(L),"row-key":"recordId","show-tool-bar":!1},{actions:t(({row:a})=>[o(q,{items:V,row:a},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),o($,{modelValue:m.value,"onUpdate:modelValue":e[16]||(e[16]=a=>m.value=a),title:s.value?"编辑机器人":"新增机器人",direction:"rtl",size:"580px","destroy-on-close":"","on-confirm":w},{default:t(()=>[o(Y,{ref_key:"formRef",ref:O,model:l.value,rules:y,"label-width":"120px"},{default:t(()=>[o(n,{label:"机器人编号",prop:"robotCode"},{default:t(()=>[o(c,{modelValue:l.value.robotCode,"onUpdate:modelValue":e[4]||(e[4]=a=>l.value.robotCode=a),placeholder:"请输入机器人编号"},null,8,["modelValue"])]),_:1}),o(n,{label:"机器人名称",prop:"robotName"},{default:t(()=>[o(c,{modelValue:l.value.robotName,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.robotName=a),placeholder:"请输入机器人名称"},null,8,["modelValue"])]),_:1}),o(n,{label:"所属企业名称",prop:"companyName"},{default:t(()=>[o(c,{modelValue:l.value.companyName,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.companyName=a),placeholder:"请输入所属企业名称"},null,8,["modelValue"])]),_:1}),o(n,{label:"设备类型",prop:"deviceType"},{default:t(()=>[o(c,{modelValue:l.value.deviceType,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.deviceType=a),placeholder:"请输入设备类型"},null,8,["modelValue"])]),_:1}),o(n,{label:"设备型号",prop:"deviceModel"},{default:t(()=>[o(c,{modelValue:l.value.deviceModel,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.deviceModel=a),placeholder:"请输入设备型号"},null,8,["modelValue"])]),_:1}),o(n,{label:"生产厂家",prop:"manufacturer"},{default:t(()=>[o(c,{modelValue:l.value.manufacturer,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.manufacturer=a),placeholder:"请输入生产厂家"},null,8,["modelValue"])]),_:1}),o(n,{label:"设备序列号",prop:"serialNumber"},{default:t(()=>[o(c,{modelValue:l.value.serialNumber,"onUpdate:modelValue":e[10]||(e[10]=a=>l.value.serialNumber=a),placeholder:"请输入设备序列号"},null,8,["modelValue"])]),_:1}),o(n,{label:"启用日期",prop:"enableDate"},{default:t(()=>[o(x,{modelValue:l.value.enableDate,"onUpdate:modelValue":e[11]||(e[11]=a=>l.value.enableDate=a),type:"date",placeholder:"请选择启用日期","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),o(n,{label:"设备状态",prop:"deviceStatus"},{default:t(()=>[o(z,{modelValue:l.value.deviceStatus,"onUpdate:modelValue":e[12]||(e[12]=a=>l.value.deviceStatus=a),options:r(E),placeholder:"请选择设备状态"},null,8,["modelValue","options"])]),_:1}),o(n,{label:"负责人",prop:"manager"},{default:t(()=>[o(c,{modelValue:l.value.manager,"onUpdate:modelValue":e[13]||(e[13]=a=>l.value.manager=a),placeholder:"请输入负责人"},null,8,["modelValue"])]),_:1}),o(n,{label:"联系电话",prop:"contactPhone"},{default:t(()=>[o(c,{modelValue:l.value.contactPhone,"onUpdate:modelValue":e[14]||(e[14]=a=>l.value.contactPhone=a),placeholder:"请输入联系电话"},null,8,["modelValue"])]),_:1}),o(n,{label:"备注",prop:"remark"},{default:t(()=>[o(c,{modelValue:l.value.remark,"onUpdate:modelValue":e[15]||(e[15]=a=>l.value.remark=a),type:"textarea",rows:3,placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}});export{Ae as default};
