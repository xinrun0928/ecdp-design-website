import{i as lo,j as ro,k as io,l as so,m as co,n as po,o as go,a as uo,p as _o,q as mo,r as fo,b as Oo}from"./index-Dz8cBk7z.js";import{F as No,aO as To,aQ as Co,b as Lo,O as Eo,ai as Mo,aD as bo,aE as yo,aR as ho,a4 as Io,p as S}from"./element-plus-D60thvil.js";/* empty css                     *//* empty css                       */import{b as A,f as Uo,a as vo}from"./floodOrgOrganizationData-D0D2gcmM.js";import{s as So}from"./common-Bz-Eyofd.js";import{G as Ao,l as zo,O as z,W as l,j as u,aj as x,L as C,a0 as n,_ as L,$ as _,P as E,M as xo,F as Vo,ae as Do,R as Fo,v as M,u as V,c as D}from"./vue-vendor-Dq7Ldkyc.js";import"./randomMock-BnXBY1mw.js";const wo=`-- Table structure for flood_org_organization
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_org_organization";
CREATE TABLE "public"."flood_org_organization" (
  "org_id" bigint NOT NULL,
  "org_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "org_code" varchar(50) COLLATE "pg_catalog"."default",
  "parent_id" bigint DEFAULT 0,
  "ancestors" text COLLATE "pg_catalog"."default",
  "level" integer DEFAULT 0,
  "area_code" varchar(20) COLLATE "pg_catalog"."default",
  "org_type" varchar(255) COLLATE "pg_catalog"."default" DEFAULT 0,
  "org_level" varchar(10) COLLATE "pg_catalog"."default",
  "introduce" text COLLATE "pg_catalog"."default",
  "contact_person" varchar(50) COLLATE "pg_catalog"."default",
  "contact_phone" varchar(20) COLLATE "pg_catalog"."default",
  "contact_fax" varchar(20) COLLATE "pg_catalog"."default",
  "contact_email" varchar(100) COLLATE "pg_catalog"."default",
  "external_org_id" varchar(100) COLLATE "pg_catalog"."default",
  "sync_time" timestamp(6),
  "sync_type" smallint DEFAULT 0,
  "sync_source" varchar(100) COLLATE "pg_catalog"."default",
  "display_order" integer DEFAULT 0,
  "status" smallint DEFAULT 1101,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0,
  "area_level" integer,
  "area_codes" varchar(500) COLLATE "pg_catalog"."default",
  "area_names" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."flood_org_organization" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_org_organization"."org_id" IS '归属组织ID（关联org_organization，此即主键）';
COMMENT ON COLUMN "public"."flood_org_organization"."org_name" IS '组织名称（汛期组织）';
COMMENT ON COLUMN "public"."flood_org_organization"."org_code" IS '组织编码';
COMMENT ON COLUMN "public"."flood_org_organization"."parent_id" IS '父组织ID（树形）';
COMMENT ON COLUMN "public"."flood_org_organization"."ancestors" IS '祖级列表，格式：0/父ID1/父ID2';
COMMENT ON COLUMN "public"."flood_org_organization"."level" IS '层级深度';
COMMENT ON COLUMN "public"."flood_org_organization"."area_code" IS '归属地区编码';
COMMENT ON COLUMN "public"."flood_org_organization"."org_type" IS '组织类型（1=管理单位，2=养护单位，支持多选逗号分隔，如 1,2）';
COMMENT ON COLUMN "public"."flood_org_organization"."org_level" IS '组织级别';
COMMENT ON COLUMN "public"."flood_org_organization"."introduce" IS '组织介绍（汛期职责说明）';
COMMENT ON COLUMN "public"."flood_org_organization"."contact_person" IS '联系人姓名';
COMMENT ON COLUMN "public"."flood_org_organization"."contact_phone" IS '联系电话';
COMMENT ON COLUMN "public"."flood_org_organization"."contact_fax" IS '传真号码';
COMMENT ON COLUMN "public"."flood_org_organization"."contact_email" IS '电子邮箱';
COMMENT ON COLUMN "public"."flood_org_organization"."external_org_id" IS '外部系统组织ID（对接第三方）';
COMMENT ON COLUMN "public"."flood_org_organization"."sync_time" IS '外部数据同步时间';
COMMENT ON COLUMN "public"."flood_org_organization"."sync_type" IS '同步类型（0-默认/手动 1-接口同步）';
COMMENT ON COLUMN "public"."flood_org_organization"."sync_source" IS '同步来源';
COMMENT ON COLUMN "public"."flood_org_organization"."display_order" IS '排序号';
COMMENT ON COLUMN "public"."flood_org_organization"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_org_organization"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_org_organization"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_org_organization"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_org_organization"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_org_organization"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_org_organization"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_org_organization"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_org_organization"."area_level" IS '区域级别（1=省 2=市 3=区 4=乡镇）';
COMMENT ON COLUMN "public"."flood_org_organization"."area_codes" IS '归属地区编码列表，多个用英文逗号分隔，如 440000,440100';
COMMENT ON COLUMN "public"."flood_org_organization"."area_names" IS '归属地区名称列表，多个用英文逗号分隔，如 广东省,广州市';
COMMENT ON COLUMN "public"."flood_org_organization"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_org_organization"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_org_organization" IS '汛期巡检组织信息表（汛期专用，与日常巡检组织独立管理）';

-- ----------------------------

-- Indexes structure for table flood_org_organization
-- ----------------------------
CREATE INDEX "idx_flood_org_organization_deleted" ON "public"."flood_org_organization" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_flood_org_organization_external_org_id" ON "public"."flood_org_organization" USING btree (
  "external_org_id" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_flood_org_organization_parent_id" ON "public"."flood_org_organization" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_org_organization
-- ----------------------------
ALTER TABLE "public"."flood_org_organization" ADD CONSTRAINT "flood_org_organization_pkey" PRIMARY KEY ("org_id");

-- ----------------------------
`,Po={class:"org-name"},Ro=["title"],ko=Ao({__name:"OrgManagement",setup(Bo){const b=[{label:"管理单位",value:"1"},{label:"养护单位",value:"2"}],F={1:"管理单位",2:"养护单位"},m=u(!1),s=u(!1),c=u(!1),p=u(),i=V({orgName:"",orgType:null}),e=V({orgId:0,parentId:0,orgName:"",orgCode:"",orgTypeList:[],contactPerson:"",contactPhone:"",contactFax:"",contactEmail:"",displayOrder:0,status:1101,introduce:""}),w={orgName:[{required:!0,message:"请输入组织名称",trigger:"blur"}],orgType:[{required:!0,message:"请选择组织类型",trigger:"change"}],status:[{required:!0,message:"请选择状态",trigger:"change"}]},P=[{prop:"orgName",label:"组织名称",minWidth:280,align:"left",headerAlign:"left",slot:"orgName"},{prop:"orgCode",label:"组织编码",width:120,align:"center",showOverflowTooltip:!0,cellType:"code",formatter:o=>o.orgCode||"-"},{prop:"orgType",label:"组织类型",width:180,align:"center",slot:"orgType"},{prop:"areaNames",label:"归属地区",width:160,align:"center",showOverflowTooltip:!0,slot:"areaNames"},{prop:"contactPerson",label:"联系人",width:100,align:"center",showOverflowTooltip:!0,formatter:o=>o.contactPerson||"-"},{prop:"contactPhone",label:"联系电话",width:130,align:"center",showOverflowTooltip:!0,formatter:o=>o.contactPhone||"-"},{prop:"contactFax",label:"传真",width:130,align:"center",showOverflowTooltip:!0,formatter:o=>o.contactFax||"-"},{prop:"contactEmail",label:"邮箱",minWidth:160,align:"center",showOverflowTooltip:!0,formatter:o=>o.contactEmail||"-"},{prop:"status",label:"状态",width:90,align:"center",slot:"status"},{prop:"displayOrder",label:"排序",width:70,align:"center"},{prop:"creater",label:"创建人",width:100,align:"center",cellType:"secondary"},{prop:"createTime",label:"创建时间",width:175,align:"center",cellType:"secondary"},{prop:"updater",label:"更新人",width:100,align:"center",cellType:"secondary"},{prop:"updateTime",label:"更新时间",width:175,align:"center",cellType:"secondary"},{prop:"actions",label:"操作",width:60,align:"center",fixed:"right",slot:"actions"}],R=D(()=>[{orgId:0,orgName:"（顶级组织）",children:y.value}]),y=D(()=>{let o=A(vo);if(i.orgName||i.orgType!==null){const f=Uo(o).filter(g=>{const O=!i.orgName||g.orgName.includes(i.orgName),N=i.orgType===null||(g.orgType??"").includes(i.orgType);return O&&N});o=A(f)}return o});function h(o){return o?o.split(",").filter(Boolean):[]}function k(o){return F[o]||o}function B(o){return{1:"success",2:"warning"}[o]||"info"}function $(o){return o?o.includes("1")&&o.includes("2")?"#E6A23C":o.includes("1")?"#409EFF":o.includes("2")?"#67C23A":"#909399":"#909399"}const q=[{label:"编辑",icon:No,handler:o=>W(o)},{label:"新增子集",icon:To,handler:o=>U(o)},{label:"删除",icon:Co,divided:!0,handler:o=>X(o)}];function I(){}function U(o){c.value=!1,e.orgId=0,e.parentId=(o==null?void 0:o.orgId)||0,e.orgName="",e.orgCode="",e.orgTypeList=[],e.contactPerson="",e.contactPhone="",e.contactFax="",e.contactEmail="",e.displayOrder=0,e.status=1101,e.introduce="",s.value=!0}function W(o){c.value=!0,e.orgId=o.orgId,e.parentId=o.parentId,e.orgName=o.orgName,e.orgCode=o.orgCode??"",e.orgTypeList=h(o.orgType),e.contactPerson=o.contactPerson??"",e.contactPhone=o.contactPhone??"",e.contactFax=o.contactFax??"",e.contactEmail=o.contactEmail??"",e.displayOrder=o.displayOrder??0,e.status=o.status,e.introduce=o.introduce??"",s.value=!0}function G(){p.value&&p.value.validate(o=>{o&&(S.success(c.value?"编辑成功":"新增成功"),s.value=!1)})}async function X(o){await fo(o.orgName)&&S.success("删除成功")}function j(){var o;(o=p.value)==null||o.resetFields()}return zo(()=>{m.value=!0;try{}finally{m.value=!1}}),(o,t)=>{const f=x("table-structure-drawer"),g=_o,O=mo,N=uo,K=Lo,Y=Mo,v=io,H=ro,Q=lo,J=ho,r=yo,d=Io,Z=co,oo=po,eo=go,ao=bo,to=so,no=x("panel-layout");return C(),z(no,{title:"组织管理"},{"title-extra":l(()=>[n(f,{sql:M(wo)},null,8,["sql"])]),search:l(()=>[n(g,{modelValue:i.orgName,"onUpdate:modelValue":t[0]||(t[0]=a=>i.orgName=a),placeholder:"搜索组织名称",onSearch:I},null,8,["modelValue"]),n(O,{modelValue:i.orgType,"onUpdate:modelValue":t[1]||(t[1]=a=>i.orgType=a),placeholder:"组织类型",options:b,"margin-left":10,onSearch:I},null,8,["modelValue"])]),actions:l(()=>[n(N,{"margin-left":10,onClick:t[2]||(t[2]=a=>U(null))},{default:l(()=>[...t[15]||(t[15]=[L("新增组织",-1)])]),_:1})]),default:l(()=>[n(Q,{data:y.value,columns:P,loading:m.value,"row-key":"orgId","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,"show-index":!1,"show-pagination":!1,"show-tool-bar":!1},{orgName:l(({row:a})=>[n(K,{class:"org-icon",style:Fo({color:$(a.orgType)})},{default:l(()=>[n(M(Eo))]),_:1},8,["style"]),n(Y,{content:a.orgName,placement:"top"},{default:l(()=>[E("span",Po,_(a.orgName),1)]),_:2},1032,["content"])]),orgType:l(({row:a})=>[(C(!0),xo(Vo,null,Do(h(a.orgType),T=>(C(),z(v,{key:T,size:"small",type:B(T),effect:"plain",style:{"margin-right":"4px"}},{default:l(()=>[L(_(k(T)),1)]),_:2},1032,["type"]))),128))]),areaNames:l(({row:a})=>[E("span",{title:a.areaNames},_(a.areaNames||"-"),9,Ro)]),status:l(({row:a})=>[n(v,{size:"small",type:a.status===1101?"success":"info"},{default:l(()=>[L(_(a.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:l(({row:a})=>[n(H,{items:q,row:a},null,8,["row"])]),_:1},8,["data","loading"]),n(to,{modelValue:s.value,"onUpdate:modelValue":t[14]||(t[14]=a=>s.value=a),title:c.value?"编辑组织":"新增组织",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":c.value?"保存修改":"确认创建","on-confirm":G,onClosed:j},{default:l(()=>[n(ao,{ref_key:"formRef",ref:p,model:e,rules:w,"label-width":"110px","label-position":"right"},{default:l(()=>[n(r,{label:"上级节点",prop:"parentId"},{default:l(()=>[n(J,{modelValue:e.parentId,"onUpdate:modelValue":t[3]||(t[3]=a=>e.parentId=a),data:R.value,props:{label:"orgName",children:"children"},"node-key":"orgId",placeholder:"请选择上级节点（不选则为顶级）",clearable:"","check-strictly":"",style:{width:"100%"}},null,8,["modelValue","data"])]),_:1}),n(r,{label:"组织名称",prop:"orgName"},{default:l(()=>[n(d,{modelValue:e.orgName,"onUpdate:modelValue":t[4]||(t[4]=a=>e.orgName=a),placeholder:"请输入组织名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(r,{label:"组织编码",prop:"orgCode"},{default:l(()=>[n(d,{modelValue:e.orgCode,"onUpdate:modelValue":t[5]||(t[5]=a=>e.orgCode=a),placeholder:"请输入组织编码",maxlength:"50","show-word-limit":""},null,8,["modelValue"])]),_:1}),n(r,{label:"组织类型",prop:"orgType"},{default:l(()=>[n(Z,{modelValue:e.orgTypeList,"onUpdate:modelValue":t[6]||(t[6]=a=>e.orgTypeList=a),options:b},null,8,["modelValue"])]),_:1}),n(r,{label:"联系人",prop:"contactPerson"},{default:l(()=>[n(d,{modelValue:e.contactPerson,"onUpdate:modelValue":t[7]||(t[7]=a=>e.contactPerson=a),placeholder:"请输入联系人姓名",maxlength:"50"},null,8,["modelValue"])]),_:1}),n(r,{label:"联系电话",prop:"contactPhone"},{default:l(()=>[n(d,{modelValue:e.contactPhone,"onUpdate:modelValue":t[8]||(t[8]=a=>e.contactPhone=a),placeholder:"请输入联系电话",maxlength:"20"},null,8,["modelValue"])]),_:1}),n(r,{label:"传真",prop:"contactFax"},{default:l(()=>[n(d,{modelValue:e.contactFax,"onUpdate:modelValue":t[9]||(t[9]=a=>e.contactFax=a),placeholder:"请输入传真号码",maxlength:"20"},null,8,["modelValue"])]),_:1}),n(r,{label:"邮箱",prop:"contactEmail"},{default:l(()=>[n(d,{modelValue:e.contactEmail,"onUpdate:modelValue":t[10]||(t[10]=a=>e.contactEmail=a),placeholder:"请输入电子邮箱"},null,8,["modelValue"])]),_:1}),n(r,{label:"排序",prop:"displayOrder"},{default:l(()=>[n(oo,{modelValue:e.displayOrder,"onUpdate:modelValue":t[11]||(t[11]=a=>e.displayOrder=a),min:0,max:9999,width:"180px"},null,8,["modelValue"]),t[16]||(t[16]=E("span",{class:"form-tip-inline"},"数值越小越靠前",-1))]),_:1}),n(r,{label:"状态",prop:"status"},{default:l(()=>[n(eo,{modelValue:e.status,"onUpdate:modelValue":t[12]||(t[12]=a=>e.status=a),options:M(So)},null,8,["modelValue","options"])]),_:1}),n(r,{label:"备注",prop:"introduce"},{default:l(()=>[n(d,{modelValue:e.introduce,"onUpdate:modelValue":t[13]||(t[13]=a=>e.introduce=a),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])]),_:1})}}}),Ho=Oo(ko,[["__scopeId","data-v-a58d6866"]]);export{Ho as default};
