import{m as re,s as te,j as de,b as le,q as se,o as ne,p as be,v as me,g as ie}from"./index-BGoR6y1A.js";import{ar as ue,bo as pe,bc as Ne,bd as ge,M as Oe,a as B}from"./element-plus-FTcyDTKl.js";import{o as je}from"./org_user_job_rel-wLZ8iQh5.js";import{r as o}from"./randomMock-C6-QJwcy.js";import{S as e,s as _e,a as ce,b as Ce}from"./warning-BshV8eZN.js";import"./subsystem-BQNqsSr5.js";import{o as I}from"./orgTreeData-D6VkkBhm.js";import{m as D}from"./search-BoGTCmM8.js";import{p as Le}from"./pagination-BHZHZx5b.js";import{c as Ie,M as Me,a as fe,d as Te}from"./ui-CkdNVOlu.js";import{G as Ae,n as Ee,p as Se,M as ye,a0 as d,W as l,F as Ue,r as n,aj as M,L as ke,_ as Re,u as g,k as f,c as T}from"./vue-vendor-CYCT-Zs3.js";const ve=`-- Table structure for org_job
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_job";
CREATE TABLE "public"."org_job" (
  "job_id" bigint NOT NULL,
  "org_id" bigint,
  "org_name" varchar(128) COLLATE "pg_catalog"."default",
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
COMMENT ON COLUMN "public"."org_job"."org_id" IS '归属组织ID';
COMMENT ON COLUMN "public"."org_job"."org_name" IS '归属组织名称（冗余）';
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
CREATE INDEX "idx_org_job_org_display" ON "public"."org_job" USING btree (
  "org_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_job_status" ON "public"."org_job" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_job
-- ----------------------------
ALTER TABLE "public"."org_job" ADD CONSTRAINT "org_job_pkey" PRIMARY KEY ("job_id");

-- ----------------------------
`,Je=[{jobId:1,jobCode:"JOB-0001",jobName:"党委书记",displayOrder:1,status:e.NORMAL,remark:"主持党委全面工作",orgId:1,orgName:"广东省交通运输厅",...o()},{jobId:2,jobCode:"JOB-0002",jobName:"党委副书记",displayOrder:2,status:e.NORMAL,remark:"协助党委书记抓好党建工作",orgId:1,orgName:"广东省交通运输厅",...o()},{jobId:3,jobCode:"JOB-0003",jobName:"纪委书记",displayOrder:3,status:e.NORMAL,remark:"统筹纪检监察与作风建设",orgId:1,orgName:"广东省交通运输厅",...o()},{jobId:4,jobCode:"JOB-0004",jobName:"总经济师",displayOrder:4,status:e.NORMAL,remark:"重大经济事项评估决策",orgId:1,orgName:"广东省交通运输厅",...o()},{jobId:5,jobCode:"JOB-0005",jobName:"总会计师",displayOrder:5,status:e.NORMAL,remark:"资金统筹与财务监督",orgId:1,orgName:"广东省交通运输厅",...o()},{jobId:6,jobCode:"JOB-0006",jobName:"首席专家顾问",displayOrder:6,status:e.NORMAL,remark:"重大政策与技术咨询论证",orgId:1,orgName:"广东省交通运输厅",...o()},{jobId:7,jobCode:"JOB-0007",jobName:"一级调研员",displayOrder:7,status:e.DISABLED,remark:"政策调研与决策支持",orgId:1,orgName:"广东省交通运输厅",...o()},{jobId:8,jobCode:"JOB-0008",jobName:"值班带班领导",displayOrder:1,status:e.NORMAL,remark:"统筹值班带班与应急处置",orgId:11,orgName:"厅总值班室",...o()},{jobId:9,jobCode:"JOB-0009",jobName:"应急信息主管",displayOrder:2,status:e.NORMAL,remark:"负责应急信息归口发布",orgId:11,orgName:"厅总值班室",...o()},{jobId:10,jobCode:"JOB-0010",jobName:"科技创新专家",displayOrder:1,status:e.NORMAL,remark:"智慧交通科研专项攻关",orgId:12,orgName:"科技处",...o()},{jobId:11,jobCode:"JOB-0011",jobName:"项目评审专家",displayOrder:2,status:e.NORMAL,remark:"科研项目立项与结题评审",orgId:12,orgName:"科技处",...o()},{jobId:12,jobCode:"JOB-0012",jobName:"知识产权专员",displayOrder:3,status:e.DISABLED,remark:"专利布局与成果转化",orgId:12,orgName:"科技处",...o()},{jobId:13,jobCode:"JOB-0013",jobName:"执法监督员",displayOrder:1,status:e.NORMAL,remark:"路政执法全过程监督",orgId:13,orgName:"路政处",...o()},{jobId:14,jobCode:"JOB-0014",jobName:"治超联动专员",displayOrder:2,status:e.NORMAL,remark:"超限超载联合治理协调",orgId:13,orgName:"路政处",...o()},{jobId:15,jobCode:"JOB-0015",jobName:"造价工程师",displayOrder:1,status:e.NORMAL,remark:"工程概预算审核与造价管理",orgId:14,orgName:"基建处",...o()},{jobId:16,jobCode:"JOB-0016",jobName:"质量监督工程师",displayOrder:2,status:e.NORMAL,remark:"工程实体质量巡检与验收",orgId:14,orgName:"基建处",...o()},{jobId:17,jobCode:"JOB-0017",jobName:"轨道交通规划师",displayOrder:1,status:e.NORMAL,remark:"轨道交通线网规划研究",orgId:21,orgName:"广州市交通局",...o()},{jobId:18,jobCode:"JOB-0018",jobName:"公交线网规划师",displayOrder:2,status:e.NORMAL,remark:"公交线网优化与评估",orgId:21,orgName:"广州市交通局",...o()},{jobId:19,jobCode:"JOB-0019",jobName:"政协提案联络员",displayOrder:3,status:e.DISABLED,remark:"人大代表建议与政协提案办理",orgId:21,orgName:"广州市交通局",...o()},{jobId:20,jobCode:"JOB-0020",jobName:"港航规划专员",displayOrder:1,status:e.NORMAL,remark:"港口航道规划与岸线利用",orgId:22,orgName:"深圳市交通运输局",...o()},{jobId:21,jobCode:"JOB-0021",jobName:"智能网联专员",displayOrder:2,status:e.NORMAL,remark:"智能网联汽车试点管理",orgId:22,orgName:"深圳市交通运输局",...o()},{jobId:22,jobCode:"JOB-0022",jobName:"农村公路专管员",displayOrder:1,status:e.NORMAL,remark:"农村公路建设与管养督导",orgId:23,orgName:"茂名市交通局",...o()},{jobId:23,jobCode:"JOB-0023",jobName:"桥梁监测工程师",displayOrder:1,status:e.NORMAL,remark:"桥梁结构健康监测管理",orgId:24,orgName:"佛山市交通运输局",...o()},{jobId:24,jobCode:"JOB-0024",jobName:"技术委员会主任",displayOrder:1,status:e.NORMAL,remark:"统筹公路技术委员会工作",orgId:3,orgName:"广东省公路事务中心",...o()},{jobId:25,jobCode:"JOB-0025",jobName:"养护定额工程师",displayOrder:2,status:e.NORMAL,remark:"养护定额测算与标准发布",orgId:3,orgName:"广东省公路事务中心",...o()},{jobId:26,jobCode:"JOB-0026",jobName:"党建工作专员",displayOrder:1,status:e.NORMAL,remark:"党组织建设与主题党日组织",orgId:30,orgName:"综合事务中心",...o()},{jobId:27,jobCode:"JOB-0027",jobName:"档案专员",displayOrder:2,status:e.NORMAL,remark:"业务档案归集与数字化",orgId:30,orgName:"综合事务中心",...o()},{jobId:28,jobCode:"JOB-0028",jobName:"路产保护专员",displayOrder:1,status:e.NORMAL,remark:"路产路权登记与保护",orgId:31,orgName:"广州市公路事务中心",...o()},{jobId:29,jobCode:"JOB-0029",jobName:"安全生产监督员",displayOrder:1,status:e.NORMAL,remark:"养护作业安全生产监管",orgId:41,orgName:"从化区道路事务中心良口养护站",...o()},{jobId:30,jobCode:"JOB-0030",jobName:"养护质量检查员",displayOrder:2,status:e.NORMAL,remark:"养护质量抽检与评定",orgId:41,orgName:"从化区道路事务中心良口养护站",...o()},{jobId:31,jobCode:"JOB-0031",jobName:"应急抢险队长",displayOrder:1,status:e.NORMAL,remark:"带队开展道路应急抢险救援",orgId:42,orgName:"增城区道路养护中心",...o()},{jobId:32,jobCode:"JOB-0032",jobName:"董事会秘书",displayOrder:1,status:e.NORMAL,remark:"董事会事务与对外披露",orgId:51,orgName:"广东省高速公路发展股份有限公司",...o()},{jobId:33,jobCode:"JOB-0033",jobName:"证券事务代表",displayOrder:2,status:e.NORMAL,remark:"投资者关系与定期报告",orgId:51,orgName:"广东省高速公路发展股份有限公司",...o()},{jobId:34,jobCode:"JOB-0034",jobName:"收费稽查主管",displayOrder:1,status:e.DISABLED,remark:"收费稽核与逃费打击",orgId:511,orgName:"广佛高速公路有限公司",...o()},{jobId:35,jobCode:"JOB-0035",jobName:"机电维护工程师",displayOrder:1,status:e.NORMAL,remark:"机电设施巡检与维保",orgId:512,orgName:"广深高速公路有限公司",...o()},{jobId:36,jobCode:"JOB-0036",jobName:"数据研判分析师",displayOrder:1,status:e.NORMAL,remark:"路网运行大数据研判",orgId:52,orgName:"广东省交通监控中心",...o()},{jobId:37,jobCode:"JOB-0037",jobName:"视频巡查员",displayOrder:2,status:e.NORMAL,remark:"视频轮巡与异常事件核处",orgId:52,orgName:"广东省交通监控中心",...o()}],Be=Ae({__name:"JobManagement",setup(De){const O=n(!1),A=n([]),E=n(),m=n(null),S=n(!1),i=f({jobName:"",jobCode:""}),b=f({pageNum:1,pageSize:20}),y={jobId:0,jobCode:"",jobName:"",displayOrder:0,status:e.NORMAL,remark:""},u=n(!1),p=n(!1),j=n(!1),_=n(),s=f({...y}),U=T(()=>A.value.filter(a=>m.value&&a.orgId!==m.value.id?!1:D(i.jobName,a.jobName)&&D(i.jobCode,a.jobCode))),h=T(()=>U.value.length),V=T(()=>Le(U.value,b.pageNum,b.pageSize)),F={jobCode:[{required:!0,message:"请输入职务编号",trigger:"blur"}],jobName:[{required:!0,message:"请输入职务名称",trigger:"blur"}]},x=[{prop:"jobName",label:"职务名称",minWidth:150},{prop:"jobCode",label:"职务编号",minWidth:120,cellType:"code"},{prop:"displayOrder",label:"排序",width:80},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:ce,tagLabelMap:_e},{prop:"remark",label:"备注",minWidth:150,showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"修改人"},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],w=[{label:"编辑",icon:ue,handler:a=>G(a)},{label:"删除",icon:pe,divided:!0,handler:a=>W(a)}];function c(){O.value=!0;try{A.value=Je}finally{O.value=!1}}function z(a){m.value=a,b.pageNum=1}function k(){b.pageNum=1}function q(){p.value=!1,Object.assign(s,y),u.value=!0}function G(a){p.value=!0,Object.assign(s,{jobId:a.jobId,jobCode:a.jobCode,jobName:a.jobName,displayOrder:a.displayOrder,status:a.status,remark:a.remark}),u.value=!0}function P(){var a;(a=_.value)==null||a.validate(async r=>{if(r){j.value=!0;try{c(),B.success(p.value?Me:fe),await new Promise(C=>setTimeout(C,Te)),u.value=!1}finally{j.value=!1}}})}function K(){var a;(a=_.value)==null||a.resetFields()}async function W(a){await me(a.jobName)&&(B.success(Ie),c())}return Ee(()=>{c(),I.length>0&&(m.value=I[0],Se(()=>{var a;(a=E.value)==null||a.setCurrentKey(1)}))}),(a,r)=>{var v;const C=M("table-structure-drawer"),X=M("search-tree-panel"),R=se,$=le,Y=de,H=te,Q=M("split-layout"),L=Oe,N=ge,Z=ne,ee=be,oe=Ne,ae=re;return ke(),ye(Ue,null,[d(Q,{collapsed:S.value,"onUpdate:collapsed":r[4]||(r[4]=t=>S.value=t),"aside-title":"组织结构",title:"职务管理","sub-title":(v=m.value)==null?void 0:v.name},{"title-extra":l(()=>[d(C,{sql:[g(ve),g(je)]},null,8,["sql"])]),aside:l(({collapsed:t})=>{var J;return[d(X,{ref_key:"orgTreeRef",ref:E,data:g(I),"selected-id":(J=m.value)==null?void 0:J.id,collapsed:t,onNodeClick:z},null,8,["data","selected-id","collapsed"])]}),search:l(()=>[d(R,{modelValue:i.jobName,"onUpdate:modelValue":r[0]||(r[0]=t=>i.jobName=t),placeholder:"搜索职务名称",onSearch:k},null,8,["modelValue"]),d(R,{modelValue:i.jobCode,"onUpdate:modelValue":r[1]||(r[1]=t=>i.jobCode=t),placeholder:"搜索职务编号",onSearch:k},null,8,["modelValue"])]),actions:l(()=>[d($,{disabled:!m.value,"margin-left":10,onClick:q},{default:l(()=>[...r[11]||(r[11]=[Re("新增职务",-1)])]),_:1},8,["disabled"])]),default:l(()=>[d(H,{pageNum:b.pageNum,"onUpdate:pageNum":r[2]||(r[2]=t=>b.pageNum=t),pageSize:b.pageSize,"onUpdate:pageSize":r[3]||(r[3]=t=>b.pageSize=t),data:V.value,columns:x,total:h.value,loading:O.value,"row-key":"jobId","show-tool-bar":!1},{actions:l(({row:t})=>[d(Y,{items:w,row:t},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1},8,["collapsed","sub-title"]),d(ae,{modelValue:u.value,"onUpdate:modelValue":r[10]||(r[10]=t=>u.value=t),title:p.value?"编辑职务":"新增职务",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":p.value?"保存修改":"确认创建",loading:j.value,"on-confirm":P,onClosed:K},{default:l(()=>[d(oe,{ref_key:"jobFormRef",ref:_,model:s,rules:F,"label-width":"80px","label-position":"right",class:"job-form"},{default:l(()=>[d(N,{label:"职务名称",prop:"jobName"},{default:l(()=>[d(L,{modelValue:s.jobName,"onUpdate:modelValue":r[5]||(r[5]=t=>s.jobName=t),placeholder:"请输入职务名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])]),_:1}),d(N,{label:"职务编号",prop:"jobCode"},{default:l(()=>[d(L,{modelValue:s.jobCode,"onUpdate:modelValue":r[6]||(r[6]=t=>s.jobCode=t),placeholder:"请输入职务编号",maxlength:"20","show-word-limit":""},null,8,["modelValue"])]),_:1}),d(N,{label:"排序",prop:"displayOrder"},{default:l(()=>[d(Z,{modelValue:s.displayOrder,"onUpdate:modelValue":r[7]||(r[7]=t=>s.displayOrder=t),min:0,max:999},null,8,["modelValue"])]),_:1}),d(N,{label:"状态",prop:"status"},{default:l(()=>[d(ee,{modelValue:s.status,"onUpdate:modelValue":r[8]||(r[8]=t=>s.status=t),options:g(Ce)},null,8,["modelValue","options"])]),_:1}),d(N,{label:"备注",prop:"remark"},{default:l(()=>[d(L,{modelValue:s.remark,"onUpdate:modelValue":r[9]||(r[9]=t=>s.remark=t),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","loading"])],64)}}}),Xe=ie(Be,[["__scopeId","data-v-fb99b8c1"]]);export{Xe as default};
