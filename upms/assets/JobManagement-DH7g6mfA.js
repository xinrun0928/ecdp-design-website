import{m as K,s as X,j as Y,b as H,q as Q,o as Z,p as ee,v as oe,g as ae}from"./index-4pNdp9yc.js";import{ar as re,bo as te,bc as le,bd as de,M as se,a as E}from"./element-plus-FTcyDTKl.js";import{o as ne}from"./org_user_job_rel-D-24mS5-.js";import{r as e}from"./randomMock-C6-QJwcy.js";import{m as k}from"./search-BoGTCmM8.js";import{p as be}from"./pagination-BHZHZx5b.js";import{b as ue}from"./warning-BshV8eZN.js";import"./subsystem-cdL3j6aS.js";import{G as ie,n as me,M as pe,a0 as t,W as d,F as je,r as b,aj as U,L as Oe,_ as _e,u as g,k as C,c as I}from"./vue-vendor-CYCT-Zs3.js";const Ne=`-- Table structure for org_job
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
`,ce=[{jobId:1,jobCode:"JOB-0001",jobName:"党委书记",displayOrder:1,status:1101,remark:"主持党委全面工作",...e()},{jobId:2,jobCode:"JOB-0002",jobName:"党委副书记",displayOrder:2,status:1101,remark:"协助党委书记抓好党建工作",...e()},{jobId:3,jobCode:"JOB-0003",jobName:"纪委书记",displayOrder:3,status:1101,remark:"统筹纪检监察与作风建设",...e()},{jobId:4,jobCode:"JOB-0004",jobName:"总经济师",displayOrder:4,status:1101,remark:"重大经济事项评估决策",...e()},{jobId:5,jobCode:"JOB-0005",jobName:"总会计师",displayOrder:5,status:1101,remark:"资金统筹与财务监督",...e()},{jobId:6,jobCode:"JOB-0006",jobName:"首席专家顾问",displayOrder:6,status:1101,remark:"重大政策与技术咨询论证",...e()},{jobId:7,jobCode:"JOB-0007",jobName:"一级调研员",displayOrder:7,status:1102,remark:"政策调研与决策支持",...e()},{jobId:8,jobCode:"JOB-0008",jobName:"值班带班领导",displayOrder:1,status:1101,remark:"统筹值班带班与应急处置",...e()},{jobId:9,jobCode:"JOB-0009",jobName:"应急信息主管",displayOrder:2,status:1101,remark:"负责应急信息归口发布",...e()},{jobId:10,jobCode:"JOB-0010",jobName:"科技创新专家",displayOrder:1,status:1101,remark:"智慧交通科研专项攻关",...e()},{jobId:11,jobCode:"JOB-0011",jobName:"项目评审专家",displayOrder:2,status:1101,remark:"科研项目立项与结题评审",...e()},{jobId:12,jobCode:"JOB-0012",jobName:"知识产权专员",displayOrder:3,status:1102,remark:"专利布局与成果转化",...e()},{jobId:13,jobCode:"JOB-0013",jobName:"执法监督员",displayOrder:1,status:1101,remark:"路政执法全过程监督",...e()},{jobId:14,jobCode:"JOB-0014",jobName:"治超联动专员",displayOrder:2,status:1101,remark:"超限超载联合治理协调",...e()},{jobId:15,jobCode:"JOB-0015",jobName:"造价工程师",displayOrder:1,status:1101,remark:"工程概预算审核与造价管理",...e()},{jobId:16,jobCode:"JOB-0016",jobName:"质量监督工程师",displayOrder:2,status:1101,remark:"工程实体质量巡检与验收",...e()},{jobId:17,jobCode:"JOB-0017",jobName:"轨道交通规划师",displayOrder:1,status:1101,remark:"轨道交通线网规划研究",...e()},{jobId:18,jobCode:"JOB-0018",jobName:"公交线网规划师",displayOrder:2,status:1101,remark:"公交线网优化与评估",...e()},{jobId:19,jobCode:"JOB-0019",jobName:"政协提案联络员",displayOrder:3,status:1102,remark:"人大代表建议与政协提案办理",...e()},{jobId:20,jobCode:"JOB-0020",jobName:"港航规划专员",displayOrder:1,status:1101,remark:"港口航道规划与岸线利用",...e()},{jobId:21,jobCode:"JOB-0021",jobName:"智能网联专员",displayOrder:2,status:1101,remark:"智能网联汽车试点管理",...e()},{jobId:22,jobCode:"JOB-0022",jobName:"农村公路专管员",displayOrder:1,status:1101,remark:"农村公路建设与管养督导",...e()},{jobId:23,jobCode:"JOB-0023",jobName:"桥梁监测工程师",displayOrder:1,status:1101,remark:"桥梁结构健康监测管理",...e()},{jobId:24,jobCode:"JOB-0024",jobName:"技术委员会主任",displayOrder:1,status:1101,remark:"统筹公路技术委员会工作",...e()},{jobId:25,jobCode:"JOB-0025",jobName:"养护定额工程师",displayOrder:2,status:1101,remark:"养护定额测算与标准发布",...e()},{jobId:26,jobCode:"JOB-0026",jobName:"党建工作专员",displayOrder:1,status:1101,remark:"党组织建设与主题党日组织",...e()},{jobId:27,jobCode:"JOB-0027",jobName:"档案专员",displayOrder:2,status:1101,remark:"业务档案归集与数字化",...e()},{jobId:28,jobCode:"JOB-0028",jobName:"路产保护专员",displayOrder:1,status:1101,remark:"路产路权登记与保护",...e()},{jobId:29,jobCode:"JOB-0029",jobName:"安全生产监督员",displayOrder:1,status:1101,remark:"养护作业安全生产监管",...e()},{jobId:30,jobCode:"JOB-0030",jobName:"养护质量检查员",displayOrder:2,status:1101,remark:"养护质量抽检与评定",...e()},{jobId:31,jobCode:"JOB-0031",jobName:"应急抢险队长",displayOrder:1,status:1101,remark:"带队开展道路应急抢险救援",...e()},{jobId:32,jobCode:"JOB-0032",jobName:"董事会秘书",displayOrder:1,status:1101,remark:"董事会事务与对外披露",...e()},{jobId:33,jobCode:"JOB-0033",jobName:"证券事务代表",displayOrder:2,status:1101,remark:"投资者关系与定期报告",...e()},{jobId:34,jobCode:"JOB-0034",jobName:"收费稽查主管",displayOrder:1,status:1102,remark:"收费稽核与逃费打击",...e()},{jobId:35,jobCode:"JOB-0035",jobName:"机电维护工程师",displayOrder:1,status:1101,remark:"机电设施巡检与维保",...e()},{jobId:36,jobCode:"JOB-0036",jobName:"数据研判分析师",displayOrder:1,status:1101,remark:"路网运行大数据研判",...e()},{jobId:37,jobCode:"JOB-0037",jobName:"视频巡查员",displayOrder:2,status:1101,remark:"视频轮巡与异常事件核处",...e()}],ge=ie({__name:"JobManagement",setup(Ce){const p=b(!1),L=b([]),n=C({jobName:"",jobCode:""}),s=C({pageNum:1,pageSize:20}),f={jobId:0,jobCode:"",jobName:"",displayOrder:0,status:1101,remark:""},u=b(!1),i=b(!1),j=b(!1),O=b(),l=C({...f}),T=I(()=>L.value.filter(a=>k(n.jobName,a.jobName)&&k(n.jobCode,a.jobCode))),S=I(()=>T.value.length),J=I(()=>be(T.value,s.pageNum,s.pageSize)),v={jobCode:[{required:!0,message:"请输入职务编号",trigger:"blur"}],jobName:[{required:!0,message:"请输入职务名称",trigger:"blur"}]},B=[{prop:"jobName",label:"职务名称",minWidth:150},{prop:"jobCode",label:"职务编号",minWidth:120,cellType:"code"},{prop:"displayOrder",label:"排序",width:80},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:{1101:"success",1102:"danger"},tagLabelMap:{1101:"正常",1102:"停用"}},{prop:"remark",label:"备注",minWidth:150,showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"修改人"},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],A=[{label:"编辑",icon:re,handler:a=>D(a)},{label:"删除",icon:te,divided:!0,handler:a=>w(a)}];function _(){p.value=!0;try{L.value=ce}finally{p.value=!1}}function M(){s.pageNum=1}function V(){i.value=!1,Object.assign(l,f),u.value=!0}function D(a){i.value=!0,Object.assign(l,{jobId:a.jobId,jobCode:a.jobCode,jobName:a.jobName,displayOrder:a.displayOrder,status:a.status,remark:a.remark}),u.value=!0}function h(){var a;(a=O.value)==null||a.validate(async o=>{if(o){j.value=!0;try{_(),E.success(i.value?"编辑成功":"新增成功"),await new Promise(N=>setTimeout(N,500)),u.value=!1}finally{j.value=!1}}})}function F(){var a;(a=O.value)==null||a.resetFields()}async function w(a){await oe(a.jobName)&&(E.success("删除成功"),_())}return me(()=>{_()}),(a,o)=>{const N=U("table-structure-drawer"),y=Q,x=H,R=Y,z=X,q=U("card-layout"),c=se,m=de,P=Z,W=ee,$=le,G=K;return Oe(),pe(je,null,[t(q,{title:"职务管理"},{"title-extra":d(()=>[t(N,{sql:[g(Ne),g(ne)]},null,8,["sql"])]),search:d(()=>[t(y,{modelValue:n.jobName,"onUpdate:modelValue":o[0]||(o[0]=r=>n.jobName=r),placeholder:"搜索职务名称",onSearch:M},null,8,["modelValue"]),t(y,{modelValue:n.jobCode,"onUpdate:modelValue":o[1]||(o[1]=r=>n.jobCode=r),placeholder:"搜索职务编号",onSearch:M},null,8,["modelValue"])]),actions:d(()=>[t(x,{"margin-left":10,onClick:V},{default:d(()=>[...o[10]||(o[10]=[_e("新增职务",-1)])]),_:1})]),default:d(()=>[t(z,{pageNum:s.pageNum,"onUpdate:pageNum":o[2]||(o[2]=r=>s.pageNum=r),pageSize:s.pageSize,"onUpdate:pageSize":o[3]||(o[3]=r=>s.pageSize=r),data:J.value,columns:B,total:S.value,loading:p.value,"row-key":"jobId","show-tool-bar":!1},{actions:d(({row:r})=>[t(R,{items:A,row:r},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),t(G,{modelValue:u.value,"onUpdate:modelValue":o[9]||(o[9]=r=>u.value=r),title:i.value?"编辑职务":"新增职务",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":i.value?"保存修改":"确认创建",loading:j.value,"on-confirm":h,onClosed:F},{default:d(()=>[t($,{ref_key:"jobFormRef",ref:O,model:l,rules:v,"label-width":"80px","label-position":"right",class:"job-form"},{default:d(()=>[t(m,{label:"职务名称",prop:"jobName"},{default:d(()=>[t(c,{modelValue:l.jobName,"onUpdate:modelValue":o[4]||(o[4]=r=>l.jobName=r),placeholder:"请输入职务名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(m,{label:"职务编号",prop:"jobCode"},{default:d(()=>[t(c,{modelValue:l.jobCode,"onUpdate:modelValue":o[5]||(o[5]=r=>l.jobCode=r),placeholder:"请输入职务编号",maxlength:"20","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(m,{label:"排序",prop:"displayOrder"},{default:d(()=>[t(P,{modelValue:l.displayOrder,"onUpdate:modelValue":o[6]||(o[6]=r=>l.displayOrder=r),min:0,max:999},null,8,["modelValue"])]),_:1}),t(m,{label:"状态",prop:"status"},{default:d(()=>[t(W,{modelValue:l.status,"onUpdate:modelValue":o[7]||(o[7]=r=>l.status=r),options:g(ue)},null,8,["modelValue","options"])]),_:1}),t(m,{label:"备注",prop:"remark"},{default:d(()=>[t(c,{modelValue:l.remark,"onUpdate:modelValue":o[8]||(o[8]=r=>l.remark=r),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","loading"])],64)}}}),Se=ae(ge,[["__scopeId","data-v-61782960"]]);export{Se as default};
