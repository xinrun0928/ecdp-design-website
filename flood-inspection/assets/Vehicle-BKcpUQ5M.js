import{l as $,i as X,j as H,a as Z,p as j,q as J,h as Q,f as ee,r as le}from"./index-Dz8cBk7z.js";import{F as ae,aQ as oe,aO as te,aD as re,aE as ne,a4 as ie}from"./element-plus-D60thvil.js";/* empty css                     */import{r as n,s as ue}from"./randomMock-BnXBY1mw.js";import{u as de}from"./useMockTablePage-Cliqp1A6.js";import{G as ce,M as pe,a0 as a,W as t,F as me,j as c,aj as L,L as se,v as r,_ as ve,q as Ne}from"./vue-vendor-Dq7Ldkyc.js";import"./pagination-BbYzDLaW.js";const _e=`-- Table structure for flood_vehicle
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_vehicle";
CREATE TABLE "public"."flood_vehicle" (
  "record_id" bigint NOT NULL,
  "company_name" varchar(200) COLLATE "pg_catalog"."default",
  "vehicle_name" varchar(100) COLLATE "pg_catalog"."default",
  "plate_number" varchar(20) COLLATE "pg_catalog"."default",
  "vin_code" varchar(50) COLLATE "pg_catalog"."default",
  "vehicle_type" varchar(50) COLLATE "pg_catalog"."default",
  "vehicle_model" varchar(100) COLLATE "pg_catalog"."default",
  "enable_date" varchar(10) COLLATE "pg_catalog"."default",
  "vehicle_status" varchar(20) COLLATE "pg_catalog"."default",
  "manager" varchar(50) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."flood_vehicle" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_vehicle"."record_id" IS '记录ID';
COMMENT ON COLUMN "public"."flood_vehicle"."company_name" IS '所属企业名称';
COMMENT ON COLUMN "public"."flood_vehicle"."vehicle_name" IS '车辆名称';
COMMENT ON COLUMN "public"."flood_vehicle"."plate_number" IS '车牌号码';
COMMENT ON COLUMN "public"."flood_vehicle"."vin_code" IS '车辆识别代码';
COMMENT ON COLUMN "public"."flood_vehicle"."vehicle_type" IS '车辆类型';
COMMENT ON COLUMN "public"."flood_vehicle"."vehicle_model" IS '车辆型号';
COMMENT ON COLUMN "public"."flood_vehicle"."enable_date" IS '启用日期';
COMMENT ON COLUMN "public"."flood_vehicle"."vehicle_status" IS '车辆状态';
COMMENT ON COLUMN "public"."flood_vehicle"."manager" IS '负责人';
COMMENT ON COLUMN "public"."flood_vehicle"."remark" IS '备注';
COMMENT ON COLUMN "public"."flood_vehicle"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_vehicle"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_vehicle"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_vehicle"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_vehicle"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_vehicle"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_vehicle"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_vehicle"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_vehicle"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_vehicle"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_vehicle" IS '智能巡查车辆表';

-- ----------------------------

-- Indexes structure for table flood_vehicle
-- ----------------------------
CREATE INDEX "idx_flood_vehicle_deleted" ON "public"."flood_vehicle" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_vehicle
-- ----------------------------
ALTER TABLE "public"."flood_vehicle" ADD CONSTRAINT "flood_vehicle_pkey" PRIMARY KEY ("record_id");

-- ----------------------------
`,he=[{recordId:1,companyName:"广东粤安交通服务有限公司",vehicleName:"一号安全巡查车",plateNumber:"粤A·7K26F",vinCode:"LSVFA49J89N2012685",vehicleType:"小型普通客车",vehicleModel:"大众途观 280TSI",enableDate:"2026-01-15",vehicleStatus:"NORMAL",manager:"陈志强",remark:"用于广州市区项目安全巡查",...n()},{recordId:2,companyName:"深圳市深联工程管理有限公司",vehicleName:"二号工程保障车",plateNumber:"粤B·5M83Q",vinCode:"LGBF5AE08NR326417",vehicleType:"多用途乘用车",vehicleModel:"别克GL8 ES",enableDate:"2026-02-08",vehicleStatus:"NORMAL",manager:"李海涛",remark:"用于工程人员接送及应急保障",...n()},{recordId:3,companyName:"佛山市南粤设备维护有限公司",vehicleName:"设备检修服务车",plateNumber:"粤E·3R18P",vinCode:"LZWADAGA5NC618253",vehicleType:"轻型厢式货车",vehicleModel:"五菱荣光新卡",enableDate:"2026-02-20",vehicleStatus:"MAINTENANCE",manager:"赵建华",remark:"发动机故障，已送维修厂检修",...n()},{recordId:4,companyName:"东莞市粤盛化工运输有限公司",vehicleName:"危化品运输一号车",plateNumber:"粤S·8D52W",vinCode:"LZZ1BMM0NW7N721603",vehicleType:"危险品运输车",vehicleModel:"东风天锦KR",enableDate:"2026-03-05",vehicleStatus:"NORMAL",manager:"黄国辉",remark:"用于危险化学品短途运输",...n()},{recordId:5,companyName:"珠海市海港物流服务有限公司",vehicleName:"港区物流运输车",plateNumber:"粤C·6H39N",vinCode:"LGAXD65D3N4015926",vehicleType:"重型半挂牵引车",vehicleModel:"东风天龙KL",enableDate:"2026-03-18",vehicleStatus:"NORMAL",manager:"梁伟东",remark:"用于港区集装箱及货物运输",...n()},{recordId:6,companyName:"中山市华南仓储配送有限公司",vehicleName:"仓储配送一号车",plateNumber:"粤T·2C77U",vinCode:"LSGL11A6NA109368",vehicleType:"轻型封闭式货车",vehicleModel:"上汽大通V80",enableDate:"2026-04-02",vehicleStatus:"NORMAL",manager:"周文杰",remark:"负责原材料及成品配送",...n()},{recordId:7,companyName:"江门市新合装备制造有限公司",vehicleName:"车间物料转运车",plateNumber:"粤J·9P46K",vinCode:"LZWDAAGA8NC715842",vehicleType:"轻型栏板货车",vehicleModel:"五菱新卡",enableDate:"2026-04-16",vehicleStatus:"SUSPENDED",manager:"林志鹏",remark:"因生产车间调整暂停使用",...n()},{recordId:8,companyName:"惠州市惠阳环境服务有限公司",vehicleName:"环保监测作业车",plateNumber:"粤L·4F29X",vinCode:"LNBSCC3H6NV082514",vehicleType:"专项作业车",vehicleModel:"江铃特顺监测车",enableDate:"2026-05-06",vehicleStatus:"FAULT",manager:"郑晓峰",remark:"车载监测设备异常，正在维修",...n()},{recordId:9,companyName:"肇庆市封桂园区运营有限公司",vehicleName:"园区消防巡查车",plateNumber:"粤H·1X65M",vinCode:"LGWFF75A4NH186230",vehicleType:"消防巡查车",vehicleModel:"长城炮商用版",enableDate:"2026-05-20",vehicleStatus:"NORMAL",manager:"吴家明",remark:"用于园区消防设施日常巡查",...n()},{recordId:10,companyName:"汕头市华新能源服务有限公司",vehicleName:"新能源综合保障车",plateNumber:"粤D·8E73V",vinCode:"LC0CE6CCBN0012473",vehicleType:"纯电动多用途乘用车",vehicleModel:"比亚迪宋PLUS EV",enableDate:"2026-06-10",vehicleStatus:"PENDING",manager:"蔡文浩",remark:"已完成登记，待驾驶保险生效后启用",...n()}],C=[{label:"正常使用",value:"NORMAL"},{label:"维修中",value:"MAINTENANCE"},{label:"暂停使用",value:"SUSPENDED"},{label:"故障维修",value:"FAULT"},{label:"待启用",value:"PENDING"}],fe={NORMAL:"正常使用",MAINTENANCE:"维修中",SUSPENDED:"暂停使用",FAULT:"故障维修",PENDING:"待启用"},Se=ce({__name:"Vehicle",setup(ge){const _=c(""),{loading:T,pagination:m,searchKeyword:v,pagedData:E,total:S,handleSearch:h,deleteItem:A,upsertItem:f}=de({initialData:[...he],keywordFields:["vehicleName","plateNumber"]}),I={NORMAL:"success",MAINTENANCE:"warning",SUSPENDED:"info",FAULT:"danger",PENDING:"info"},p=c(!1),s=c(!1),g=c(!1),b=c(),M=c(null),O={companyName:"",vehicleName:"",plateNumber:"",vinCode:"",vehicleType:"",vehicleModel:"",enableDate:"",vehicleStatus:"NORMAL",manager:"",remark:""},o=c({...O}),y={companyName:[{required:!0,message:"请输入所属企业名称",trigger:"blur"}],vehicleName:[{required:!0,message:"请输入车辆名称",trigger:"blur"}],plateNumber:[{required:!0,message:"请输入车牌号码",trigger:"blur"}],vinCode:[{required:!0,message:"请输入车辆识别代码",trigger:"blur"}],vehicleType:[{required:!0,message:"请输入车辆类型",trigger:"blur"}],vehicleModel:[{required:!0,message:"请输入车辆型号",trigger:"blur"}],enableDate:[{required:!0,message:"请选择启用日期",trigger:"change"}],vehicleStatus:[{required:!0,message:"请选择车辆状态",trigger:"change"}],manager:[{required:!0,message:"请输入负责人",trigger:"blur"}]},D=[{prop:"companyName",label:"所属企业名称",minWidth:180,showOverflowTooltip:!0},{prop:"vehicleName",label:"车辆名称",minWidth:120,showOverflowTooltip:!0},{prop:"plateNumber",label:"车牌号码",width:110,align:"center",cellType:"code"},{prop:"vinCode",label:"车辆识别代码",width:180,align:"center",cellType:"code"},{prop:"vehicleType",label:"车辆类型",width:110,align:"center"},{prop:"vehicleModel",label:"车辆型号",width:150,showOverflowTooltip:!0},{prop:"enableDate",label:"启用日期",width:110,align:"center"},{prop:"vehicleStatus",label:"车辆状态",width:90,align:"center",cellType:"tag",tagMap:I,tagLabelMap:fe},{prop:"manager",label:"负责人",width:80,align:"center"},{prop:"remark",label:"备注",minWidth:150,showOverflowTooltip:!0},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],U=[{label:"编辑",icon:ae,handler:i=>w(i)},{label:"删除",icon:oe,divided:!0,handler:i=>R(i)}];function V(){s.value=!1,o.value={...O},p.value=!0}function w(i){s.value=!0,o.value={...ue(i)},p.value=!0}async function R(i){await le(`确定要删除车辆「${i.vehicleName}」吗？`)&&A(N=>N.recordId===i.recordId)}async function k(){var e;if(await((e=b.value)==null?void 0:e.validate().catch(()=>!1))){g.value=!0;try{s.value&&M.value?f({...o.value,recordId:M.value.recordId,...n()},"recordId"):f({...o.value,recordId:Date.now(),...n()},"recordId"),p.value=!1}finally{g.value=!1}}}return(i,e)=>{const N=L("table-structure-drawer"),F=j,P=J,q=Z,G=H,B=X,x=L("panel-layout"),d=ie,u=ne,W=Q,K=ee,z=re,Y=$;return se(),pe(me,null,[a(x,{title:"智能巡查车辆"},{"title-extra":t(()=>[a(N,{sql:r(_e)},null,8,["sql"])]),search:t(()=>[a(F,{modelValue:r(v),"onUpdate:modelValue":e[0]||(e[0]=l=>Ne(v)?v.value=l:null),placeholder:"搜索车辆名称/车牌号码",onSearch:r(h)},null,8,["modelValue","onSearch"]),a(P,{modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=l=>_.value=l),options:r(C),placeholder:"车辆状态",onSearch:r(h)},null,8,["modelValue","options","onSearch"])]),actions:t(()=>[a(q,{type:"primary",icon:r(te),onClick:V},{default:t(()=>[...e[15]||(e[15]=[ve("新增",-1)])]),_:1},8,["icon"])]),default:t(()=>[a(B,{"page-num":r(m).pageNum,"onUpdate:pageNum":e[2]||(e[2]=l=>r(m).pageNum=l),"page-size":r(m).pageSize,"onUpdate:pageSize":e[3]||(e[3]=l=>r(m).pageSize=l),data:r(E),columns:D,total:r(S),loading:r(T),"row-key":"recordId","show-tool-bar":!1},{actions:t(({row:l})=>[a(G,{items:U,row:l},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),a(Y,{modelValue:p.value,"onUpdate:modelValue":e[14]||(e[14]=l=>p.value=l),title:s.value?"编辑车辆":"新增车辆",direction:"rtl",size:"580px","destroy-on-close":"","on-confirm":k},{default:t(()=>[a(z,{ref_key:"formRef",ref:b,model:o.value,rules:y,"label-width":"120px"},{default:t(()=>[a(u,{label:"所属企业名称",prop:"companyName"},{default:t(()=>[a(d,{modelValue:o.value.companyName,"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.companyName=l),placeholder:"请输入所属企业名称"},null,8,["modelValue"])]),_:1}),a(u,{label:"车辆名称",prop:"vehicleName"},{default:t(()=>[a(d,{modelValue:o.value.vehicleName,"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.vehicleName=l),placeholder:"请输入车辆名称"},null,8,["modelValue"])]),_:1}),a(u,{label:"车牌号码",prop:"plateNumber"},{default:t(()=>[a(d,{modelValue:o.value.plateNumber,"onUpdate:modelValue":e[6]||(e[6]=l=>o.value.plateNumber=l),placeholder:"请输入车牌号码"},null,8,["modelValue"])]),_:1}),a(u,{label:"车辆识别代码",prop:"vinCode"},{default:t(()=>[a(d,{modelValue:o.value.vinCode,"onUpdate:modelValue":e[7]||(e[7]=l=>o.value.vinCode=l),placeholder:"请输入车辆识别代码"},null,8,["modelValue"])]),_:1}),a(u,{label:"车辆类型",prop:"vehicleType"},{default:t(()=>[a(d,{modelValue:o.value.vehicleType,"onUpdate:modelValue":e[8]||(e[8]=l=>o.value.vehicleType=l),placeholder:"请输入车辆类型"},null,8,["modelValue"])]),_:1}),a(u,{label:"车辆型号",prop:"vehicleModel"},{default:t(()=>[a(d,{modelValue:o.value.vehicleModel,"onUpdate:modelValue":e[9]||(e[9]=l=>o.value.vehicleModel=l),placeholder:"请输入车辆型号"},null,8,["modelValue"])]),_:1}),a(u,{label:"启用日期",prop:"enableDate"},{default:t(()=>[a(W,{modelValue:o.value.enableDate,"onUpdate:modelValue":e[10]||(e[10]=l=>o.value.enableDate=l),type:"date",placeholder:"请选择启用日期","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),a(u,{label:"车辆状态",prop:"vehicleStatus"},{default:t(()=>[a(K,{modelValue:o.value.vehicleStatus,"onUpdate:modelValue":e[11]||(e[11]=l=>o.value.vehicleStatus=l),options:r(C),placeholder:"请选择车辆状态"},null,8,["modelValue","options"])]),_:1}),a(u,{label:"负责人",prop:"manager"},{default:t(()=>[a(d,{modelValue:o.value.manager,"onUpdate:modelValue":e[12]||(e[12]=l=>o.value.manager=l),placeholder:"请输入负责人"},null,8,["modelValue"])]),_:1}),a(u,{label:"备注",prop:"remark"},{default:t(()=>[a(d,{modelValue:o.value.remark,"onUpdate:modelValue":e[13]||(e[13]=l=>o.value.remark=l),type:"textarea",rows:3,placeholder:"请输入备注"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])],64)}}});export{Se as default};
