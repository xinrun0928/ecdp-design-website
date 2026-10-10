import{m as X,s as Y,j as H,b as J,q as Q,o as Z,p as tt,v as et,g as ot}from"./index-XehKi6pI.js";import{ar as st,bo as at,bc as rt,bd as pt,M as dt,a as P}from"./element-plus-FTcyDTKl.js";import{o as lt}from"./org_user_post_rel-CxSllQ9y.js";import{r as t}from"./randomMock-C6-QJwcy.js";import{m as E}from"./search-BoGTCmM8.js";import{p as nt}from"./pagination-BHZHZx5b.js";import{b as it}from"./warning-BshV8eZN.js";import"./subsystem-cdL3j6aS.js";import{G as ut,n as mt,M as Ot,a0 as a,W as p,F as Nt,r as n,aj as U,L as _t,_ as ct,u as S,k as I,c as f}from"./vue-vendor-CYCT-Zs3.js";const gt=`-- Table structure for org_post
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_post";
CREATE TABLE "public"."org_post" (
  "post_id" bigint NOT NULL,
  "post_code" varchar(64) COLLATE "pg_catalog"."default",
  "post_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
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
ALTER TABLE "public"."org_post" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_post"."post_id" IS '岗位ID';
COMMENT ON COLUMN "public"."org_post"."post_code" IS '岗位编码';
COMMENT ON COLUMN "public"."org_post"."post_name" IS '岗位名称';
COMMENT ON COLUMN "public"."org_post"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_post"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_post"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."org_post"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_post"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_post"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_post"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_post"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_post"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_post"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_post"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_post"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_post"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_post"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_post"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_post"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_post" IS '组织岗位表';

-- ----------------------------

-- Indexes structure for table org_post
-- ----------------------------
CREATE INDEX "idx_org_post_post_name" ON "public"."org_post" USING btree (
  "post_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_post_status" ON "public"."org_post" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_post
-- ----------------------------
ALTER TABLE "public"."org_post" ADD CONSTRAINT "org_post_pkey" PRIMARY KEY ("post_id");

-- ----------------------------
`,Ct=[{postId:1,postCode:"POS-0001",postName:"厅长",displayOrder:1,status:1101,remark:"主持厅全面工作",...t()},{postId:2,postCode:"POS-0002",postName:"副厅长",displayOrder:2,status:1101,remark:"分管分管领域业务",...t()},{postId:3,postCode:"POS-0003",postName:"总工程师",displayOrder:3,status:1101,remark:"重大工程技术把关",...t()},{postId:4,postCode:"POS-0004",postName:"办公室主任",displayOrder:4,status:1101,remark:"统筹机关日常运转",...t()},{postId:5,postCode:"POS-0005",postName:"人事科科长",displayOrder:5,status:1101,remark:"干部人事与编制管理",...t()},{postId:6,postCode:"POS-0006",postName:"财务科科长",displayOrder:6,status:1101,remark:"经费预算与财务核算",...t()},{postId:7,postCode:"POS-0007",postName:"信访调解专员",displayOrder:7,status:1102,remark:"群众来访接待与矛盾化解",...t()},{postId:8,postCode:"POS-0008",postName:"值班室主任",displayOrder:1,status:1101,...t()},{postId:9,postCode:"POS-0009",postName:"值班员",displayOrder:2,status:1101,remark:"24小时应急值守",...t()},{postId:10,postCode:"POS-0010",postName:"信息报送员",displayOrder:3,status:1101,remark:"突发事件信息采集报送",...t()},{postId:11,postCode:"POS-0011",postName:"夜班值守班长",displayOrder:4,status:1101,remark:"负责夜间值守班组管理",...t()},{postId:12,postCode:"POS-0012",postName:"处长",displayOrder:1,status:1101,...t()},{postId:13,postCode:"POS-0013",postName:"副处长",displayOrder:2,status:1101,...t()},{postId:14,postCode:"POS-0014",postName:"科研管理员",displayOrder:3,status:1101,remark:"科研项目全过程管理",...t()},{postId:15,postCode:"POS-0015",postName:"科员",displayOrder:4,status:1101,...t()},{postId:16,postCode:"POS-0016",postName:"路政执法员",displayOrder:1,status:1101,remark:"涉路案件查处与执法",...t()},{postId:17,postCode:"POS-0017",postName:"治超稽查员",displayOrder:2,status:1102,remark:"超限超载车辆稽查处置",...t()},{postId:18,postCode:"POS-0018",postName:"项目管理员",displayOrder:1,status:1101,remark:"工程项目建设进度管理",...t()},{postId:19,postCode:"POS-0019",postName:"工程资料员",displayOrder:2,status:1101,remark:"工程档案与资料归档",...t()},{postId:20,postCode:"POS-0020",postName:"局长",displayOrder:1,status:1101,...t()},{postId:21,postCode:"POS-0021",postName:"副局长",displayOrder:2,status:1101,...t()},{postId:22,postCode:"POS-0022",postName:"运输管理科科长",displayOrder:3,status:1101,remark:"道路运输行业监管",...t()},{postId:23,postCode:"POS-0023",postName:"安全监督科科长",displayOrder:4,status:1101,remark:"交通运输安全生产监督",...t()},{postId:24,postCode:"POS-0024",postName:"科员",displayOrder:5,status:1101,...t()},{postId:25,postCode:"POS-0025",postName:"公共交通管理科长",displayOrder:1,status:1101,remark:"城市公交与出租管理",...t()},{postId:26,postCode:"POS-0026",postName:"计划财务科长",displayOrder:2,status:1101,remark:"投资计划与财务管理",...t()},{postId:27,postCode:"POS-0027",postName:"规划科科长",displayOrder:1,status:1101,remark:"交通规划编制与报批",...t()},{postId:28,postCode:"POS-0028",postName:"交通项目管理岗",displayOrder:2,status:1102,remark:"交通项目前期推进",...t()},{postId:29,postCode:"POS-0029",postName:"公路运输科长",displayOrder:1,status:1101,remark:"公路与水路运输管理",...t()},{postId:30,postCode:"POS-0030",postName:"中心主任",displayOrder:1,status:1101,...t()},{postId:31,postCode:"POS-0031",postName:"副主任",displayOrder:2,status:1101,...t()},{postId:32,postCode:"POS-0032",postName:"养护管理科长",displayOrder:3,status:1101,remark:"干线公路养护组织",...t()},{postId:33,postCode:"POS-0033",postName:"路况信息员",displayOrder:4,status:1101,remark:"路况数据采集发布",...t()},{postId:34,postCode:"POS-0034",postName:"行政助理",displayOrder:1,status:1101,remark:"日常行政事务协助",...t()},{postId:35,postCode:"POS-0035",postName:"后勤保障专员",displayOrder:2,status:1101,remark:"物资采购与后勤服务",...t()},{postId:36,postCode:"POS-0036",postName:"道路养护技术员",displayOrder:1,status:1101,remark:"养护工艺技术指导",...t()},{postId:37,postCode:"POS-0037",postName:"路况巡查员",displayOrder:2,status:1101,remark:"道路日常巡查记录",...t()},{postId:38,postCode:"POS-0038",postName:"站长",displayOrder:1,status:1101,...t()},{postId:39,postCode:"POS-0039",postName:"副站长",displayOrder:2,status:1101,...t()},{postId:40,postCode:"POS-0040",postName:"养护工",displayOrder:3,status:1101,remark:"道路日常巡查与养护",...t()},{postId:41,postCode:"POS-0041",postName:"机械操作手",displayOrder:4,status:1101,remark:"养护机械与除雪车操作",...t()},{postId:42,postCode:"POS-0042",postName:"董事长",displayOrder:1,status:1101,...t()},{postId:43,postCode:"POS-0043",postName:"总经理",displayOrder:2,status:1101,...t()},{postId:44,postCode:"POS-0044",postName:"副总经理",displayOrder:3,status:1101,...t()},{postId:45,postCode:"POS-0045",postName:"运营部长",displayOrder:4,status:1101,remark:"高速公路运营管理",...t()},{postId:46,postCode:"POS-0046",postName:"收费站长",displayOrder:5,status:1101,remark:"收费站日常运营管理",...t()},{postId:47,postCode:"POS-0047",postName:"收费部长",displayOrder:1,status:1101,remark:"收费业务统筹管理",...t()},{postId:48,postCode:"POS-0048",postName:"收费员",displayOrder:2,status:1102,...t()},{postId:49,postCode:"POS-0049",postName:"监控员",displayOrder:1,status:1101,remark:"路网视频实时监控",...t()},{postId:50,postCode:"POS-0050",postName:"调度员",displayOrder:2,status:1101,remark:"交通调度与信息传递",...t()}],St=ut({__name:"PostManagement",setup(It){const O=n(!1),L=n([]),l=I({postName:"",postCode:""}),d=I({pageNum:1,pageSize:20}),y={postId:0,postCode:"",postName:"",displayOrder:0,status:1101,remark:""},i=n(!1),u=n(!1),N=n(!1),_=n(),r=I({...y}),T=f(()=>L.value.filter(o=>E(l.postName,o.postName)&&E(l.postCode,o.postCode))),k=f(()=>T.value.length),v=f(()=>nt(T.value,d.pageNum,d.pageSize)),A={postCode:[{required:!0,message:"请输入岗位编号",trigger:"blur"}],postName:[{required:!0,message:"请输入岗位名称",trigger:"blur"}]},h=[{prop:"postName",label:"岗位名称",minWidth:150},{prop:"postCode",label:"岗位编号",minWidth:120,cellType:"code"},{prop:"displayOrder",label:"排序",width:80},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:{1101:"success",1102:"danger"},tagLabelMap:{1101:"正常",1102:"停用"}},{prop:"remark",label:"备注",minWidth:150,showOverflowTooltip:!0},{prop:"creater",label:"创建人",width:100},{prop:"createTime",label:"创建时间",width:170,showOverflowTooltip:!0},{prop:"updater",label:"修改人",width:100},{prop:"updateTime",label:"修改时间",width:170,showOverflowTooltip:!0},{type:"actions",label:"操作",slot:"actions"}],w=[{label:"编辑",icon:st,handler:o=>D(o)},{label:"删除",icon:at,divided:!0,handler:o=>R(o)}];function c(){O.value=!0;try{L.value=Ct}finally{O.value=!1}}function b(){d.pageNum=1}function V(){u.value=!1,Object.assign(r,y),i.value=!0}function D(o){u.value=!0,Object.assign(r,{postId:o.postId,postCode:o.postCode,postName:o.postName,displayOrder:o.displayOrder,status:o.status,remark:o.remark}),i.value=!0}function F(){var o;(o=_.value)==null||o.validate(async e=>{if(e){N.value=!0;try{c(),P.success(u.value?"编辑成功":"新增成功"),await new Promise(g=>setTimeout(g,500)),i.value=!1}finally{N.value=!1}}})}function x(){var o;(o=_.value)==null||o.resetFields()}async function R(o){await et(o.postName)&&(P.success("删除成功"),c())}return mt(()=>{c()}),(o,e)=>{const g=U("table-structure-drawer"),M=Q,z=J,q=H,B=Y,W=U("card-layout"),C=dt,m=pt,j=Z,$=tt,G=rt,K=X;return _t(),Ot(Nt,null,[a(W,{title:"岗位管理"},{"title-extra":p(()=>[a(g,{sql:[S(gt),S(lt)]},null,8,["sql"])]),search:p(()=>[a(M,{modelValue:l.postName,"onUpdate:modelValue":e[0]||(e[0]=s=>l.postName=s),placeholder:"搜索岗位名称",onSearch:b},null,8,["modelValue"]),a(M,{modelValue:l.postCode,"onUpdate:modelValue":e[1]||(e[1]=s=>l.postCode=s),placeholder:"搜索岗位编号",onSearch:b},null,8,["modelValue"])]),actions:p(()=>[a(z,{"margin-left":10,onClick:V},{default:p(()=>[...e[10]||(e[10]=[ct("新增岗位",-1)])]),_:1})]),default:p(()=>[a(B,{pageNum:d.pageNum,"onUpdate:pageNum":e[2]||(e[2]=s=>d.pageNum=s),pageSize:d.pageSize,"onUpdate:pageSize":e[3]||(e[3]=s=>d.pageSize=s),data:v.value,columns:h,total:k.value,loading:O.value,"row-key":"postId","show-tool-bar":!1},{actions:p(({row:s})=>[a(q,{items:w,row:s},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1}),a(K,{modelValue:i.value,"onUpdate:modelValue":e[9]||(e[9]=s=>i.value=s),title:u.value?"编辑岗位":"新增岗位",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":u.value?"保存修改":"确认创建",loading:N.value,"on-confirm":F,onClosed:x},{default:p(()=>[a(G,{ref_key:"postFormRef",ref:_,model:r,rules:A,"label-width":"80px","label-position":"right",class:"post-form"},{default:p(()=>[a(m,{label:"岗位名称",prop:"postName"},{default:p(()=>[a(C,{modelValue:r.postName,"onUpdate:modelValue":e[4]||(e[4]=s=>r.postName=s),placeholder:"请输入岗位名称",maxlength:"30","show-word-limit":""},null,8,["modelValue"])]),_:1}),a(m,{label:"岗位编号",prop:"postCode"},{default:p(()=>[a(C,{modelValue:r.postCode,"onUpdate:modelValue":e[5]||(e[5]=s=>r.postCode=s),placeholder:"请输入岗位编号",maxlength:"20","show-word-limit":""},null,8,["modelValue"])]),_:1}),a(m,{label:"排序",prop:"displayOrder"},{default:p(()=>[a(j,{modelValue:r.displayOrder,"onUpdate:modelValue":e[6]||(e[6]=s=>r.displayOrder=s),min:0,max:999},null,8,["modelValue"])]),_:1}),a(m,{label:"状态",prop:"status"},{default:p(()=>[a($,{modelValue:r.status,"onUpdate:modelValue":e[7]||(e[7]=s=>r.status=s),options:S(it)},null,8,["modelValue","options"])]),_:1}),a(m,{label:"备注",prop:"remark"},{default:p(()=>[a(C,{modelValue:r.remark,"onUpdate:modelValue":e[8]||(e[8]=s=>r.remark=s),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","loading"])],64)}}}),kt=ot(St,[["__scopeId","data-v-6a154e12"]]);export{kt as default};
