import{O as e,q as ae,r as re,a as te,x as de,G as le,e as se,y as ne,N as be,P as ie,Q as B,d as me}from"./index-BQSjtNr4.js";import{ar as ue,bx as pe,b9 as ge,ba as Ne,R as je,a as D}from"./element-plus-Bt8i1BPk.js";/* empty css                     */import{o as Oe}from"./org_user_job_rel-IL5hhOYT.js";import{o as I}from"./orgTreeData-CoAXZm9S.js";import{b as _e}from"./common-CRcHQUfu.js";import{G as ce,o as Ce,n as Ie,aj as L,L as Le,M as fe,a0 as t,W as d,_ as Te,u as g,F as Me,p as s,m as f,c as T}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";const ye=`-- Table structure for org_job
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_job";
CREATE TABLE "public"."org_job" (
  "job_id" bigint NOT NULL,
  "org_id" bigint NOT NULL,
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
`,Ee=[{jobId:1,jobCode:"JOB-0001",jobName:"党委书记",displayOrder:1,status:1101,remark:"主持党委全面工作",orgId:1,orgName:"广东省交通运输厅",...e()},{jobId:2,jobCode:"JOB-0002",jobName:"党委副书记",displayOrder:2,status:1101,remark:"协助党委书记抓好党建工作",orgId:1,orgName:"广东省交通运输厅",...e()},{jobId:3,jobCode:"JOB-0003",jobName:"纪委书记",displayOrder:3,status:1101,remark:"统筹纪检监察与作风建设",orgId:1,orgName:"广东省交通运输厅",...e()},{jobId:4,jobCode:"JOB-0004",jobName:"总经济师",displayOrder:4,status:1101,remark:"重大经济事项评估决策",orgId:1,orgName:"广东省交通运输厅",...e()},{jobId:5,jobCode:"JOB-0005",jobName:"总会计师",displayOrder:5,status:1101,remark:"资金统筹与财务监督",orgId:1,orgName:"广东省交通运输厅",...e()},{jobId:6,jobCode:"JOB-0006",jobName:"首席专家顾问",displayOrder:6,status:1101,remark:"重大政策与技术咨询论证",orgId:1,orgName:"广东省交通运输厅",...e()},{jobId:7,jobCode:"JOB-0007",jobName:"一级调研员",displayOrder:7,status:1102,remark:"政策调研与决策支持",orgId:1,orgName:"广东省交通运输厅",...e()},{jobId:8,jobCode:"JOB-0008",jobName:"值班带班领导",displayOrder:1,status:1101,remark:"统筹值班带班与应急处置",orgId:11,orgName:"厅总值班室",...e()},{jobId:9,jobCode:"JOB-0009",jobName:"应急信息主管",displayOrder:2,status:1101,remark:"负责应急信息归口发布",orgId:11,orgName:"厅总值班室",...e()},{jobId:10,jobCode:"JOB-0010",jobName:"科技创新专家",displayOrder:1,status:1101,remark:"智慧交通科研专项攻关",orgId:12,orgName:"科技处",...e()},{jobId:11,jobCode:"JOB-0011",jobName:"项目评审专家",displayOrder:2,status:1101,remark:"科研项目立项与结题评审",orgId:12,orgName:"科技处",...e()},{jobId:12,jobCode:"JOB-0012",jobName:"知识产权专员",displayOrder:3,status:1102,remark:"专利布局与成果转化",orgId:12,orgName:"科技处",...e()},{jobId:13,jobCode:"JOB-0013",jobName:"执法监督员",displayOrder:1,status:1101,remark:"路政执法全过程监督",orgId:13,orgName:"路政处",...e()},{jobId:14,jobCode:"JOB-0014",jobName:"治超联动专员",displayOrder:2,status:1101,remark:"超限超载联合治理协调",orgId:13,orgName:"路政处",...e()},{jobId:15,jobCode:"JOB-0015",jobName:"造价工程师",displayOrder:1,status:1101,remark:"工程概预算审核与造价管理",orgId:14,orgName:"基建处",...e()},{jobId:16,jobCode:"JOB-0016",jobName:"质量监督工程师",displayOrder:2,status:1101,remark:"工程实体质量巡检与验收",orgId:14,orgName:"基建处",...e()},{jobId:17,jobCode:"JOB-0017",jobName:"轨道交通规划师",displayOrder:1,status:1101,remark:"轨道交通线网规划研究",orgId:21,orgName:"广州市交通局",...e()},{jobId:18,jobCode:"JOB-0018",jobName:"公交线网规划师",displayOrder:2,status:1101,remark:"公交线网优化与评估",orgId:21,orgName:"广州市交通局",...e()},{jobId:19,jobCode:"JOB-0019",jobName:"政协提案联络员",displayOrder:3,status:1102,remark:"人大代表建议与政协提案办理",orgId:21,orgName:"广州市交通局",...e()},{jobId:20,jobCode:"JOB-0020",jobName:"港航规划专员",displayOrder:1,status:1101,remark:"港口航道规划与岸线利用",orgId:22,orgName:"深圳市交通运输局",...e()},{jobId:21,jobCode:"JOB-0021",jobName:"智能网联专员",displayOrder:2,status:1101,remark:"智能网联汽车试点管理",orgId:22,orgName:"深圳市交通运输局",...e()},{jobId:22,jobCode:"JOB-0022",jobName:"农村公路专管员",displayOrder:1,status:1101,remark:"农村公路建设与管养督导",orgId:23,orgName:"茂名市交通局",...e()},{jobId:23,jobCode:"JOB-0023",jobName:"桥梁监测工程师",displayOrder:1,status:1101,remark:"桥梁结构健康监测管理",orgId:24,orgName:"佛山市交通运输局",...e()},{jobId:24,jobCode:"JOB-0024",jobName:"技术委员会主任",displayOrder:1,status:1101,remark:"统筹公路技术委员会工作",orgId:3,orgName:"广东省公路事务中心",...e()},{jobId:25,jobCode:"JOB-0025",jobName:"养护定额工程师",displayOrder:2,status:1101,remark:"养护定额测算与标准发布",orgId:3,orgName:"广东省公路事务中心",...e()},{jobId:26,jobCode:"JOB-0026",jobName:"党建工作专员",displayOrder:1,status:1101,remark:"党组织建设与主题党日组织",orgId:30,orgName:"综合事务中心",...e()},{jobId:27,jobCode:"JOB-0027",jobName:"档案专员",displayOrder:2,status:1101,remark:"业务档案归集与数字化",orgId:30,orgName:"综合事务中心",...e()},{jobId:28,jobCode:"JOB-0028",jobName:"路产保护专员",displayOrder:1,status:1101,remark:"路产路权登记与保护",orgId:31,orgName:"广州市公路事务中心",...e()},{jobId:29,jobCode:"JOB-0029",jobName:"安全生产监督员",displayOrder:1,status:1101,remark:"养护作业安全生产监管",orgId:41,orgName:"从化区道路事务中心良口养护站",...e()},{jobId:30,jobCode:"JOB-0030",jobName:"养护质量检查员",displayOrder:2,status:1101,remark:"养护质量抽检与评定",orgId:41,orgName:"从化区道路事务中心良口养护站",...e()},{jobId:31,jobCode:"JOB-0031",jobName:"应急抢险队长",displayOrder:1,status:1101,remark:"带队开展道路应急抢险救援",orgId:42,orgName:"增城区道路养护中心",...e()},{jobId:32,jobCode:"JOB-0032",jobName:"董事会秘书",displayOrder:1,status:1101,remark:"董事会事务与对外披露",orgId:51,orgName:"广东省高速公路发展股份有限公司",...e()},{jobId:33,jobCode:"JOB-0033",jobName:"证券事务代表",displayOrder:2,status:1101,remark:"投资者关系与定期报告",orgId:51,orgName:"广东省高速公路发展股份有限公司",...e()},{jobId:34,jobCode:"JOB-0034",jobName:"收费稽查主管",displayOrder:1,status:1102,remark:"收费稽核与逃费打击",orgId:511,orgName:"广佛高速公路有限公司",...e()},{jobId:35,jobCode:"JOB-0035",jobName:"机电维护工程师",displayOrder:1,status:1101,remark:"机电设施巡检与维保",orgId:512,orgName:"广深高速公路有限公司",...e()},{jobId:36,jobCode:"JOB-0036",jobName:"数据研判分析师",displayOrder:1,status:1101,remark:"路网运行大数据研判",orgId:52,orgName:"广东省交通监控中心",...e()},{jobId:37,jobCode:"JOB-0037",jobName:"视频巡查员",displayOrder:2,status:1101,remark:"视频轮巡与异常事件核处",orgId:52,orgName:"广东省交通监控中心",...e()}],Ue=ce({__name:"JobManagement",setup(Se){const N=s(!1),M=s([]),y=s(),b=s(null),E=s(!1),i=f({jobName:"",jobCode:""}),n=f({pageNum:1,pageSize:20}),U={jobId:0,jobCode:"",jobName:"",displayOrder:0,status:1101,remark:""},m=s(!1),u=s(!1),j=s(!1),O=s(),l=f({...U}),S=T(()=>M.value.filter(o=>b.value&&o.orgId!==b.value.id?!1:B(i.jobName,o.jobName)&&B(i.jobCode,o.jobCode))),V=T(()=>S.value.length),h=T(()=>ie(S.value,n.pageNum,n.pageSize)),x={jobCode:[{required:!0,message:"请输入职务编号",trigger:"blur"}],jobName:[{required:!0,message:"请输入职务名称",trigger:"blur"}]},R=[{prop:"jobName",label:"职务名称",minWidth:150},{prop:"jobCode",label:"职务编号",minWidth:120,cellType:"code"},{prop:"displayOrder",label:"排序",width:80},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:{1101:"success",1102:"danger"},tagLabelMap:{1101:"正常",1102:"停用"}},{prop:"remark",label:"备注",minWidth:150,showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"audit",prop:"updater",label:"修改人"},{type:"audit",prop:"updateTime",label:"修改时间"},{type:"actions",label:"操作",slot:"actions"}],F=[{label:"编辑",icon:ue,handler:o=>q(o)},{label:"删除",icon:pe,divided:!0,handler:o=>W(o)}];function _(){N.value=!0;try{M.value=Ee}finally{N.value=!1}}function w(o){b.value=o,n.pageNum=1}function k(){n.pageNum=1}function z(){u.value=!1,Object.assign(l,U),m.value=!0}function q(o){u.value=!0,Object.assign(l,{jobId:o.jobId,jobCode:o.jobCode,jobName:o.jobName,displayOrder:o.displayOrder,status:o.status,remark:o.remark}),m.value=!0}function P(){var o;(o=O.value)==null||o.validate(async a=>{if(a){j.value=!0;try{_(),D.success(u.value?"编辑成功":"新增成功"),await new Promise(c=>setTimeout(c,500)),m.value=!1}finally{j.value=!1}}})}function G(){var o;(o=O.value)==null||o.resetFields()}async function W(o){await be(o.jobName)&&(D.success("删除成功"),_())}return Ce(()=>{_(),I.length>0&&(b.value=I[0],Ie(()=>{var o;(o=y.value)==null||o.setCurrentKey(1)}))}),(o,a)=>{var J;const c=L("table-structure-drawer"),K=L("org-tree-panel"),v=de,X=te,$=re,Y=ae,Q=L("split-layout"),C=je,p=Ne,H=le,Z=se,ee=ge,oe=ne;return Le(),fe(Me,null,[t(Q,{collapsed:E.value,"onUpdate:collapsed":a[4]||(a[4]=r=>E.value=r),"aside-title":"组织结构",title:"职务管理","sub-title":(J=b.value)==null?void 0:J.name},{"title-extra":d(()=>[t(c,{sql:[g(ye),g(Oe)]},null,8,["sql"])]),aside:d(({collapsed:r})=>{var A;return[t(K,{ref_key:"orgTreeRef",ref:y,data:g(I),"selected-id":(A=b.value)==null?void 0:A.id,collapsed:r,onNodeClick:w},null,8,["data","selected-id","collapsed"])]}),search:d(()=>[t(v,{modelValue:i.jobName,"onUpdate:modelValue":a[0]||(a[0]=r=>i.jobName=r),placeholder:"搜索职务名称",onSearch:k},null,8,["modelValue"]),t(v,{modelValue:i.jobCode,"onUpdate:modelValue":a[1]||(a[1]=r=>i.jobCode=r),placeholder:"搜索职务编号",onSearch:k},null,8,["modelValue"])]),actions:d(()=>[t(X,{disabled:!b.value,"margin-left":10,onClick:z},{default:d(()=>[...a[11]||(a[11]=[Te("新增职务",-1)])]),_:1},8,["disabled"])]),default:d(()=>[t(Y,{"page-num":n.pageNum,"onUpdate:pageNum":a[2]||(a[2]=r=>n.pageNum=r),"page-size":n.pageSize,"onUpdate:pageSize":a[3]||(a[3]=r=>n.pageSize=r),data:h.value,columns:R,total:V.value,loading:N.value,"row-key":"jobId","show-tool-bar":!1},{actions:d(({row:r})=>[t($,{items:F,row:r},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1},8,["collapsed","sub-title"]),t(oe,{modelValue:m.value,"onUpdate:modelValue":a[10]||(a[10]=r=>m.value=r),title:u.value?"编辑职务":"新增职务",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":u.value?"保存修改":"确认创建",loading:j.value,"on-confirm":P,onClosed:G},{default:d(()=>[t(ee,{ref_key:"jobFormRef",ref:O,model:l,rules:x,"label-width":"80px","label-position":"right",class:"job-form"},{default:d(()=>[t(p,{label:"职务名称",prop:"jobName"},{default:d(()=>[t(C,{modelValue:l.jobName,"onUpdate:modelValue":a[5]||(a[5]=r=>l.jobName=r),placeholder:"请输入职务名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"职务编号",prop:"jobCode"},{default:d(()=>[t(C,{modelValue:l.jobCode,"onUpdate:modelValue":a[6]||(a[6]=r=>l.jobCode=r),placeholder:"请输入职务编号",maxlength:"20","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(p,{label:"排序",prop:"displayOrder"},{default:d(()=>[t(H,{modelValue:l.displayOrder,"onUpdate:modelValue":a[7]||(a[7]=r=>l.displayOrder=r),min:0,max:999},null,8,["modelValue"])]),_:1}),t(p,{label:"状态",prop:"status"},{default:d(()=>[t(Z,{modelValue:l.status,"onUpdate:modelValue":a[8]||(a[8]=r=>l.status=r),options:g(_e)},null,8,["modelValue","options"])]),_:1}),t(p,{label:"备注",prop:"remark"},{default:d(()=>[t(C,{modelValue:l.remark,"onUpdate:modelValue":a[9]||(a[9]=r=>l.remark=r),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","loading"])],64)}}}),Fe=me(Ue,[["__scopeId","data-v-586f20eb"]]);export{Fe as default};
