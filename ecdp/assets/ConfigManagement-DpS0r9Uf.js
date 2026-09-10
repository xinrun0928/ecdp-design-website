import{O as i,q,r as $,a as X,x as H,e as j,F as Z,G as J,y as Q,N as ee}from"./index-BQSjtNr4.js";import{ar as oe,bx as ne,b9 as ae,ba as ie,R as le,a as L}from"./element-plus-Bt8i1BPk.js";/* empty css                     */import{c as se,a as te,C as re,b as c}from"./config-DCx0gSwi.js";import{s as ce,a as ge,b as ue}from"./common-CRcHQUfu.js";import{u as pe}from"./useCrudDrawer-BkD-uz5U.js";import{u as fe}from"./useMockTablePage-BzRj7glv.js";import{G as de,aj as T,L as ye,M as me,a0 as a,W as s,u as e,_ as _e,l as N,F as be}from"./vue-vendor-CrWx_I7L.js";import"./markdown-BUTMf7eB.js";import"./editor-CMUCu6Rk.js";import"./ol-map-DY4XWb27.js";const M=[{configId:1,configLabel:"主框架页-默认皮肤样式名称",configKey:"sys.index.skinName",configValue:"skin-blue",configType:"Y",configGroup:"system",displayOrder:1,status:1101,remark:"蓝色 skin-blue、绿色 skin-green、紫色 skin-purple、红色 skin-red、黄色 skin-yellow",...i()},{configId:2,configLabel:"用户管理-账号初始密码",configKey:"sys.user.initPassword",configValue:"123456",configType:"Y",configGroup:"system",displayOrder:2,status:1101,remark:"初始化密码 123456",...i()},{configId:3,configLabel:"主框架页-侧边栏主题",configKey:"sys.index.sideTheme",configValue:"theme-dark",configType:"Y",configGroup:"system",displayOrder:3,status:1101,remark:"深黑主题theme-dark，浅色主题theme-light，深蓝主题theme-blue",...i()},{configId:4,configLabel:"账号自助-是否开启用户注册功能",configKey:"sys.account.registerUser",configValue:"false",configType:"Y",configGroup:"system",displayOrder:4,status:1101,remark:"是否开启注册用户功能（true开启，false关闭）",...i()},{configId:5,configLabel:"用户管理-密码字符范围",configKey:"sys.account.chrtype",configValue:"0",configType:"Y",configGroup:"security",displayOrder:5,status:1101,remark:"默认任意字符范围，0任意（密码可以输入任意字符），1数字（密码只能为0-9数字），2英文字母（密码只能为a-z和A-Z字母），3字母和数字（密码必须包含字母，数字）,4字母数字和特殊字符（目前支持的特殊字符包括：~!@#$%^&*()-=_+）",...i()},{configId:6,configLabel:"用户管理-初始密码修改策略",configKey:"sys.account.initPasswordModify",configValue:"1",configType:"Y",configGroup:"security",displayOrder:6,status:1101,remark:"0：初始密码修改策略关闭，没有任何提示，1：提醒用户，如果未修改初始密码，则在登录时就会提醒修改密码对话框",...i()},{configId:7,configLabel:"用户管理-账号密码更新周期",configKey:"sys.account.passwordValidateDays",configValue:"0",configType:"Y",configGroup:"security",displayOrder:7,status:1101,remark:"密码更新周期（填写数字，数据初始化值为0不限制，若修改必须为大于0小于365的正整数），如果超过这个周期登录系统时，则在登录时就会提醒修改密码对话框",...i()},{configId:8,configLabel:"主框架页-菜单导航显示风格",configKey:"sys.index.menuStyle",configValue:"default",configType:"Y",configGroup:"system",displayOrder:8,status:1101,remark:"菜单导航显示风格（default为左侧导航菜单，topnav为顶部导航菜单）",...i()},{configId:9,configLabel:"主框架页-是否开启页脚",configKey:"sys.index.footer",configValue:"true",configType:"Y",configGroup:"system",displayOrder:9,status:1101,remark:"是否开启底部页脚显示（true显示，false隐藏）",...i()},{configId:10,configLabel:"主框架页-是否开启页签",configKey:"sys.index.tagsView",configValue:"true",configType:"Y",configGroup:"system",displayOrder:10,status:1101,remark:"是否开启菜单多页签显示（true显示，false隐藏）",...i()},{configId:11,configLabel:"用户登录-黑名单列表",configKey:"sys.login.blackIPList",configType:"Y",configGroup:"security",displayOrder:11,status:1101,remark:"设置登录IP黑名单限制，多个匹配项以;分隔，支持匹配（*通配、网段）",...i()},{configId:12,configLabel:"系统默认语言",configKey:"sys.index.lang",configValue:"zh-CN",configType:"Y",configGroup:"system",displayOrder:12,status:1101,remark:"系统默认语言（zh-CN中文、en-US英文）",...i()},{configId:13,configLabel:"用户登录-验证码开关",configKey:"sys.login.captchaEnabled",configValue:"true",configType:"Y",configGroup:"security",displayOrder:13,status:1101,remark:"是否开启登录验证码（true开启，false关闭）",...i()},{configId:14,configLabel:"系统文件上传大小限制",configKey:"sys.upload.maxSize",configValue:"10",configType:"Y",configGroup:"system",displayOrder:14,status:1101,remark:"文件上传大小限制（单位MB）",...i()},{configId:15,configLabel:"用户登录-最大重试次数",configKey:"sys.login.maxRetry",configValue:"5",configType:"Y",configGroup:"security",displayOrder:15,status:1101,remark:"登录密码最大重试次数，超过锁定30分钟",...i()},{configId:16,configLabel:"系统时区设置",configKey:"sys.index.timezone",configValue:"Asia/Shanghai",configType:"Y",configGroup:"system",displayOrder:16,status:1101,remark:"系统时区（默认东八区）",...i()},{configId:17,configLabel:"用户登录-会话超时时间",configKey:"sys.login.sessionTimeout",configValue:"30",configType:"Y",configGroup:"security",displayOrder:17,status:1101,remark:"登录会话超时时间（单位分钟）",...i()},{configId:18,configLabel:"系统日志保留天数",configKey:"sys.log.retentionDays",configValue:"90",configType:"Y",configGroup:"system",displayOrder:18,status:1101,remark:"系统操作日志保留天数，超过自动清理",...i()},{configId:19,configLabel:"用户登录-密码加密方式",configKey:"sys.login.encryptType",configValue:"BCrypt",configType:"Y",configGroup:"security",displayOrder:19,status:1101,remark:"密码加密方式（BCrypt、MD5、SHA256）",...i()},{configId:20,configLabel:"系统通知方式",configKey:"sys.notify.method",configValue:"SMS,EMAIL",configType:"Y",configGroup:"system",displayOrder:20,status:1101,remark:"系统通知方式（SMS短信、EMAIL邮件、SYS系统内通知）",...i()}],Oe=`-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_config";
CREATE TABLE "public"."sys_config" (
  "config_id" bigint NOT NULL,
  "subsystem_id" bigint,
  "config_key" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "config_value" text COLLATE "pg_catalog"."default",
  "config_type" varchar(32) COLLATE "pg_catalog"."default" DEFAULT 'string'::character varying,
  "config_group" varchar(64) COLLATE "pg_catalog"."default",
  "config_label" varchar(128) COLLATE "pg_catalog"."default",
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
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."sys_config" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_config"."config_id" IS '配置ID';
COMMENT ON COLUMN "public"."sys_config"."subsystem_id" IS '子系统ID';
COMMENT ON COLUMN "public"."sys_config"."config_key" IS '配置键';
COMMENT ON COLUMN "public"."sys_config"."config_value" IS '配置值';
COMMENT ON COLUMN "public"."sys_config"."config_type" IS '配置类型（string/number/boolean/json）';
COMMENT ON COLUMN "public"."sys_config"."config_group" IS '配置分组';
COMMENT ON COLUMN "public"."sys_config"."config_label" IS '配置名称';
COMMENT ON COLUMN "public"."sys_config"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_config"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_config"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_config"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_config"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_config"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_config"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_config"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_config"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_config"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_config"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_config"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_config"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_config"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_config"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."sys_config"."signature_version" IS '数据签名版本号';
COMMENT ON TABLE "public"."sys_config" IS '系统参数配置表';

-- ----------------------------

-- Indexes structure for table sys_config
-- ----------------------------
CREATE INDEX "idx_sys_config_config_group" ON "public"."sys_config" USING btree (
  "config_group" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE config_group IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_config_config_key" ON "public"."sys_config" USING btree (
  "config_key" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_sys_config_org_id" ON "public"."sys_config" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_config_subsystem_id" ON "public"."sys_config" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE subsystem_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table sys_config
-- ----------------------------
ALTER TABLE "public"."sys_config" ADD CONSTRAINT "sys_config_pkey" PRIMARY KEY ("config_id");

-- ----------------------------
`,he=de({__name:"ConfigManagement",setup(Le){const{allData:f,loading:d,pagination:g,searchKeyword:y,pagedData:E,total:C,handleSearch:S}=fe({initialData:[...M],keywordFields:["configLabel"]}),I={configId:0,configLabel:"",configKey:"",configValue:"",configType:c.NO,configGroup:re.SYSTEM,displayOrder:0,status:1101,remark:"",createTime:""},{drawerVisible:u,isEdit:m,submitting:b,formRef:U,formData:l,openCreate:V,openEdit:A,handleSubmit:k,resetForm:h}=pe({defaultFormData:I,onSubmit:async(r,o)=>{f.value=[...f.value],L.success(o?"编辑成功":"新增成功"),await new Promise(_=>setTimeout(_,500)),u.value=!1}}),x={configLabel:[{required:!0,message:"请输入参数名称",trigger:"blur"}],configKey:[{required:!0,message:"请输入参数键名",trigger:"blur"}],configValue:[{required:!0,message:"请输入参数键值",trigger:"blur"}]},D=[{prop:"configLabel",label:"参数名称",minWidth:200,showOverflowTooltip:!0},{prop:"configKey",label:"参数键名",minWidth:240,cellType:"code"},{prop:"configValue",label:"参数键值",minWidth:140,cellType:"code",emptyPlaceholder:"-"},{prop:"configType",label:"系统内置",width:100,cellType:"tag",tagMap:{[c.YES]:"success",[c.NO]:"info"},tagLabelMap:{[c.YES]:"是",[c.NO]:"否"}},{prop:"configGroup",label:"配置分组",width:100},{prop:"displayOrder",label:"显示顺序",width:90},{prop:"status",label:"状态",width:80,cellType:"tag",tagMap:ge,tagLabelMap:ce},{type:"audit",prop:"creater",label:"创建者"},{type:"audit",prop:"createTime",label:"创建时间"},{prop:"remark",label:"备注",minWidth:200,cellType:"secondary",showOverflowTooltip:!0},{type:"actions",label:"操作",slot:"actions"}],G=[{label:"编辑",icon:oe,handler:r=>A(r)},{label:"删除",icon:ne,divided:!0,handler:r=>w(r)}];async function w(r){await ee(r.configLabel)&&(L.success("删除成功"),d.value=!0,setTimeout(()=>{f.value=[...M],d.value=!1},500))}return(r,o)=>{const _=T("table-structure-drawer"),v=H,K=X,Y=$,R=q,F=T("panel-layout"),p=le,t=ie,O=j,P=Z,z=J,B=ae,W=Q;return ye(),me(be,null,[a(F,{title:"配置管理"},{"title-extra":s(()=>[a(_,{sql:e(Oe)},null,8,["sql"])]),search:s(()=>[a(v,{modelValue:e(y),"onUpdate:modelValue":o[0]||(o[0]=n=>N(y)?y.value=n:null),placeholder:"搜索参数名称",onSearch:e(S)},null,8,["modelValue","onSearch"])]),actions:s(()=>[a(K,{"margin-left":10,onClick:e(V)},{default:s(()=>[...o[12]||(o[12]=[_e("新增参数",-1)])]),_:1},8,["onClick"])]),default:s(()=>[a(R,{"page-num":e(g).pageNum,"onUpdate:pageNum":o[1]||(o[1]=n=>e(g).pageNum=n),"page-size":e(g).pageSize,"onUpdate:pageSize":o[2]||(o[2]=n=>e(g).pageSize=n),data:e(E),columns:D,total:e(C),loading:e(d)||e(b),"row-key":"configId","show-tool-bar":!1},{actions:s(({row:n})=>[a(Y,{items:G,row:n},null,8,["row"])]),_:1},8,["page-num","page-size","data","total","loading"])]),_:1}),a(W,{modelValue:e(u),"onUpdate:modelValue":o[11]||(o[11]=n=>N(u)?u.value=n:null),title:e(m)?"编辑参数":"新增参数",size:"480px",direction:"rtl","destroy-on-close":"","confirm-text":e(m)?"保存修改":"确认创建",loading:e(b),"on-confirm":e(k),onClosed:e(h)},{default:s(()=>[a(B,{ref_key:"formRef",ref:U,model:e(l),rules:x,"label-width":"100px","label-position":"right"},{default:s(()=>[a(t,{label:"参数名称",prop:"configLabel"},{default:s(()=>[a(p,{modelValue:e(l).configLabel,"onUpdate:modelValue":o[3]||(o[3]=n=>e(l).configLabel=n),placeholder:"请输入参数名称",maxlength:"100"},null,8,["modelValue"])]),_:1}),a(t,{label:"参数键名",prop:"configKey"},{default:s(()=>[a(p,{modelValue:e(l).configKey,"onUpdate:modelValue":o[4]||(o[4]=n=>e(l).configKey=n),placeholder:"如：sys.index.skinName",maxlength:"100",disabled:e(m)},null,8,["modelValue","disabled"])]),_:1}),a(t,{label:"参数键值",prop:"configValue"},{default:s(()=>[a(p,{modelValue:e(l).configValue,"onUpdate:modelValue":o[5]||(o[5]=n=>e(l).configValue=n),placeholder:"请输入参数键值",maxlength:"500"},null,8,["modelValue"])]),_:1}),a(t,{label:"系统内置",prop:"configType"},{default:s(()=>[a(O,{modelValue:e(l).configType,"onUpdate:modelValue":o[6]||(o[6]=n=>e(l).configType=n),options:e(se)},null,8,["modelValue","options"])]),_:1}),a(t,{label:"配置分组",prop:"configGroup"},{default:s(()=>[a(P,{modelValue:e(l).configGroup,"onUpdate:modelValue":o[7]||(o[7]=n=>e(l).configGroup=n),options:e(te),placeholder:"请选择配置分组",clearable:""},null,8,["modelValue","options"])]),_:1}),a(t,{label:"显示顺序",prop:"displayOrder"},{default:s(()=>[a(z,{modelValue:e(l).displayOrder,"onUpdate:modelValue":o[8]||(o[8]=n=>e(l).displayOrder=n),min:0,max:999},null,8,["modelValue"])]),_:1}),a(t,{label:"状态",prop:"status"},{default:s(()=>[a(O,{modelValue:e(l).status,"onUpdate:modelValue":o[9]||(o[9]=n=>e(l).status=n),options:e(ue)},null,8,["modelValue","options"])]),_:1}),a(t,{label:"备注",prop:"remark"},{default:s(()=>[a(p,{modelValue:e(l).remark,"onUpdate:modelValue":o[10]||(o[10]=n=>e(l).remark=n),type:"textarea",rows:3,placeholder:"请输入备注",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text","loading","on-confirm","onClosed"])],64)}}});export{he as default};
