import{m as X,s as Y,j as H,b as Q,q as Z,o as ee,p as oe,v as ae,g as re}from"./index-BGoR6y1A.js";import{ar as te,bo as le,bc as de,bd as se,M as ne,a as S}from"./element-plus-FTcyDTKl.js";import{o as be}from"./org_user_job_rel-D-24mS5-.js";import{r as o}from"./randomMock-C6-QJwcy.js";import{S as e,s as ue,a as ie,b as me}from"./warning-BshV8eZN.js";import"./subsystem-BQNqsSr5.js";import{m as y}from"./search-BoGTCmM8.js";import{p as pe}from"./pagination-BHZHZx5b.js";import{c as Oe,M as je,a as Ne,d as _e}from"./ui-CkdNVOlu.js";import{G as ce,n as ge,M as Le,a0 as l,W as s,F as Ce,r as u,aj as U,L as Me,_ as Ie,u as L,k as C,c as M}from"./vue-vendor-CYCT-Zs3.js";const Ae=`-- Table structure for org_job
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_job";
CREATE TABLE "public"."org_job" (
  "job_id" bigint NOT NULL,
  "job_code" varchar(64) COLLATE "pg_catalog"."default",
  "job_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
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
ALTER TABLE "public"."org_job" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_job"."job_id" IS '职务ID';
COMMENT ON COLUMN "public"."org_job"."job_code" IS '职务编码';
COMMENT ON COLUMN "public"."org_job"."job_name" IS '职务名称';
COMMENT ON COLUMN "public"."org_job"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_job"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_job"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."org_job"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_job"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_job"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_job"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_job"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_job"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_job"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_job"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_job"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_job"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_job"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_job"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_job"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_job" IS '组织职务表';

-- ----------------------------

-- Indexes structure for table org_job
-- ----------------------------
CREATE INDEX "idx_org_job_job_name" ON "public"."org_job" USING btree (
  "job_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_job_status" ON "public"."org_job" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_job
-- ----------------------------
ALTER TABLE "public"."org_job" ADD CONSTRAINT "org_job_pkey" PRIMARY KEY ("job_id");

-- ----------------------------
`,Ee=[{jobId:1,jobCode:"JOB-0001",jobName:"党委书记",displayOrder:1,status:e.NORMAL,remark:"主持党委全面工作",...o()},{jobId:2,jobCode:"JOB-0002",jobName:"党委副书记",displayOrder:2,status:e.NORMAL,remark:"协助党委书记抓好党建工作",...o()},{jobId:3,jobCode:"JOB-0003",jobName:"纪委书记",displayOrder:3,status:e.NORMAL,remark:"统筹纪检监察与作风建设",...o()},{jobId:4,jobCode:"JOB-0004",jobName:"总经济师",displayOrder:4,status:e.NORMAL,remark:"重大经济事项评估决策",...o()},{jobId:5,jobCode:"JOB-0005",jobName:"总会计师",displayOrder:5,status:e.NORMAL,remark:"资金统筹与财务监督",...o()},{jobId:6,jobCode:"JOB-0006",jobName:"首席专家顾问",displayOrder:6,status:e.NORMAL,remark:"重大政策与技术咨询论证",...o()},{jobId:7,jobCode:"JOB-0007",jobName:"一级调研员",displayOrder:7,status:e.DISABLED,remark:"政策调研与决策支持",...o()},{jobId:8,jobCode:"JOB-0008",jobName:"值班带班领导",displayOrder:1,status:e.NORMAL,remark:"统筹值班带班与应急处置",...o()},{jobId:9,jobCode:"JOB-0009",jobName:"应急信息主管",displayOrder:2,status:e.NORMAL,remark:"负责应急信息归口发布",...o()},{jobId:10,jobCode:"JOB-0010",jobName:"科技创新专家",displayOrder:1,status:e.NORMAL,remark:"智慧交通科研专项攻关",...o()},{jobId:11,jobCode:"JOB-0011",jobName:"项目评审专家",displayOrder:2,status:e.NORMAL,remark:"科研项目立项与结题评审",...o()},{jobId:12,jobCode:"JOB-0012",jobName:"知识产权专员",displayOrder:3,status:e.DISABLED,remark:"专利布局与成果转化",...o()},{jobId:13,jobCode:"JOB-0013",jobName:"执法监督员",displayOrder:1,status:e.NORMAL,remark:"路政执法全过程监督",...o()},{jobId:14,jobCode:"JOB-0014",jobName:"治超联动专员",displayOrder:2,status:e.NORMAL,remark:"超限超载联合治理协调",...o()},{jobId:15,jobCode:"JOB-0015",jobName:"造价工程师",displayOrder:1,status:e.NORMAL,remark:"工程概预算审核与造价管理",...o()},{jobId:16,jobCode:"JOB-0016",jobName:"质量监督工程师",displayOrder:2,status:e.NORMAL,remark:"工程实体质量巡检与验收",...o()},{jobId:17,jobCode:"JOB-0017",jobName:"轨道交通规划师",displayOrder:1,status:e.NORMAL,remark:"轨道交通线网规划研究",...o()},{jobId:18,jobCode:"JOB-0018",jobName:"公交线网规划师",displayOrder:2,status:e.NORMAL,remark:"公交线网优化与评估",...o()},{jobId:19,jobCode:"JOB-0019",jobName:"政协提案联络员",displayOrder:3,status:e.DISABLED,remark:"人大代表建议与政协提案办理",...o()},{jobId:20,jobCode:"JOB-0020",jobName:"港航规划专员",displayOrder:1,status:e.NORMAL,remark:"港口航道规划与岸线利用",...o()},{jobId:21,jobCode:"JOB-0021",jobName:"智能网联专员",displayOrder:2,status:e.NORMAL,remark:"智能网联汽车试点管理",...o()},{jobId:22,jobCode:"JOB-0022",jobName:"农村公路专管员",displayOrder:1,status:e.NORMAL,remark:"农村公路建设与管养督导",...o()},{jobId:23,jobCode:"JOB-0023",jobName:"桥梁监测工程师",displayOrder:1,status:e.NORMAL,remark:"桥梁结构健康监测管理",...o()},{jobId:24,jobCode:"JOB-0024",jobName:"技术委员会主任",displayOrder:1,status:e.NORMAL,remark:"统筹公路技术委员会工作",...o()},{jobId:25,jobCode:"JOB-0025",jobName:"养护定额工程师",displayOrder:2,status:e.NORMAL,remark:"养护定额测算与标准发布",...o()},{jobId:26,jobCode:"JOB-0026",jobName:"党建工作专员",displayOrder:1,status:e.NORMAL,remark:"党组织建设与主题党日组织",...o()},{jobId:27,jobCode:"JOB-0027",jobName:"档案专员",displayOrder:2,status:e.NORMAL,remark:"业务档案归集与数字化",...o()},{jobId:28,jobCode:"JOB-0028",jobName:"路产保护专员",displayOrder:1,status:e.NORMAL,remark:"路产路权登记与保护",...o()},{jobId:29,jobCode:"JOB-0029",jobName:"安全生产监督员",displayOrder:1,status:e.NORMAL,remark:"养护作业安全生产监管",...o()},{jobId:30,jobCode:"JOB-0030",jobName:"养护质量检查员",displayOrder:2,status:e.NORMAL,remark:"养护质量抽检与评定",...o()},{jobId:31,jobCode:"JOB-0031",jobName:"应急抢险队长",displayOrder:1,status:e.NORMAL,remark:"带队开展道路应急抢险救援",...o()},{jobId:32,jobCode:"JOB-0032",jobName:"董事会秘书",displayOrder:1,status:e.NORMAL,remark:"董事会事务与对外披露",...o()},{jobId:33,jobCode:"JOB-0033",jobName:"证券事务代表",displayOrder:2,status:e.NORMAL,remark:"投资者关系与定期报告",...o()},{jobId:34,jobCode:"JOB-0034",jobName:"收费稽查主管",displayOrder:1,status:e.DISABLED,remark:"收费稽核与逃费打击",...o()},{jobId:35,jobCode:"JOB-0035",jobName:"机电维护工程师",displayOrder:1,status:e.NORMAL,remark:"机电设施巡检与维保",...o()},{jobId:36,jobCode:"JOB-0036",jobName:"数据研判分析师",displayOrder:1,status:e.NORMAL,remark:"路网运行大数据研判",...o()},{jobId:37,jobCode:"JOB-0037",jobName:"视频巡查员",displayOrder:2,status:e.NORMAL,remark:"视频轮巡与异常事件核处",...o()}],Te=ce({__name:"JobManagement",setup(fe){const O=u(!1),I=u([]),b=C({jobName:"",jobCode:""}),n=C({pageNum:1,pageSize:20}),A={jobId:0,jobCode:"",jobName:"",displayOrder:0,status:e.NORMAL,remark:""},i=u(!1),m=u(!1),j=u(!1),N=u(),d=C({...A}),E=M(()=>I.value.filter(r=>y(b.jobName,r.jobName)&&y(b.jobCode,r.jobCode))),k=M(()=>E.value.length),R=M(()=>pe(E.value,n.pageNum,n.pageSize)),J={jobCode:[{required:!0,message:"请输入职务编号",trigger:"blur"}],jobName:[{required:!0,message:"请输入职务名称",trigger:"blur"}]},B=[{prop:"jobName",label:"职务名称",minWidth:150},{prop:"jobCode",label:"职务编号",minWidth:120,cellType:"code"},{prop:"displayOrder",label:"排序",width:80},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:ie,tagLabelMap:ue},{prop:"remark",label:"备注",minWidth:150,showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"修改人"},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],v=[{label:"编辑",icon:te,handler:r=>V(r)},{label:"删除",icon:le,divided:!0,handler:r=>w(r)}];function _(){O.value=!0;try{I.value=Ee}finally{O.value=!1}}function T(){n.pageNum=1}function D(){m.value=!1,Object.assign(d,A),i.value=!0}function V(r){m.value=!0,Object.assign(d,{jobId:r.jobId,jobCode:r.jobCode,jobName:r.jobName,displayOrder:r.displayOrder,status:r.status,remark:r.remark}),i.value=!0}function h(){var r;(r=N.value)==null||r.validate(async a=>{if(a){j.value=!0;try{_(),S.success(m.value?je:Ne),await new Promise(c=>setTimeout(c,_e)),i.value=!1}finally{j.value=!1}}})}function F(){var r;(r=N.value)==null||r.resetFields()}async function w(r){await ae(r.jobName)&&(S.success(Oe),_())}return ge(()=>{_()}),(r,a)=>{const c=U("table-structure-drawer"),f=Z,x=Q,z=H,q=Y,P=U("card-layout"),g=ne,p=se,G=ee,W=oe,K=de,$=X;return Me(),Le(Ce,null,[l(P,{title:"职务管理"},{"title-extra":s(()=>[l(c,{sql:[L(Ae),L(be)]},null,8,["sql"])]),search:s(()=>[l(f,{modelValue:b.jobName,"onUpdate:modelValue":a[0]||(a[0]=t=>b.jobName=t),placeholder:"搜索职务名称",onSearch:T},null,8,["modelValue"]),l(f,{modelValue:b.jobCode,"onUpdate:modelValue":a[1]||(a[1]=t=>b.jobCode=t),placeholder:"搜索职务编号",onSearch:T},null,8,["modelValue"])]),actions:s(()=>[l(x,{"margin-left":10,onClick:D},{default:s(()=>[...a[10]||(a[10]=[Ie("新增职务",-1)])]),_:1})]),default:s(()=>[l(q,{pageNum:n.pageNum,"onUpdate:pageNum":a[2]||(a[2]=t=>n.pageNum=t),pageSize:n.pageSize,"onUpdate:pageSize":a[3]||(a[3]=t=>n.pageSize=t),data:R.value,columns:B,total:k.value,loading:O.value,"row-key":"jobId","show-tool-bar":!1},{actions:s(({row:t})=>[l(z,{items:v,row:t},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),l($,{modelValue:i.value,"onUpdate:modelValue":a[9]||(a[9]=t=>i.value=t),title:m.value?"编辑职务":"新增职务",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":m.value?"保存修改":"确认创建",loading:j.value,"on-confirm":h,onClosed:F},{default:s(()=>[l(K,{ref_key:"jobFormRef",ref:N,model:d,rules:J,"label-width":"80px","label-position":"right",class:"job-form"},{default:s(()=>[l(p,{label:"职务名称",prop:"jobName"},{default:s(()=>[l(g,{modelValue:d.jobName,"onUpdate:modelValue":a[4]||(a[4]=t=>d.jobName=t),placeholder:"请输入职务名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(p,{label:"职务编号",prop:"jobCode"},{default:s(()=>[l(g,{modelValue:d.jobCode,"onUpdate:modelValue":a[5]||(a[5]=t=>d.jobCode=t),placeholder:"请输入职务编号",maxlength:"20","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(p,{label:"排序",prop:"displayOrder"},{default:s(()=>[l(G,{modelValue:d.displayOrder,"onUpdate:modelValue":a[6]||(a[6]=t=>d.displayOrder=t),min:0,max:999},null,8,["modelValue"])]),_:1}),l(p,{label:"状态",prop:"status"},{default:s(()=>[l(W,{modelValue:d.status,"onUpdate:modelValue":a[7]||(a[7]=t=>d.status=t),options:L(me)},null,8,["modelValue","options"])]),_:1}),l(p,{label:"备注",prop:"remark"},{default:s(()=>[l(g,{modelValue:d.remark,"onUpdate:modelValue":a[8]||(a[8]=t=>d.remark=t),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","loading"])],64)}}}),he=re(Te,[["__scopeId","data-v-81aa273e"]]);export{he as default};
