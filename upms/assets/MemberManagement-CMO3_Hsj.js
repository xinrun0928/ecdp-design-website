import{m as ge,s as ce,j as _e,b as Ne,q as fe,n as he,z as Le,v as Oe,i as Te,g as Me}from"./index-4pNdp9yc.js";import{ar as be,aA as Ee,aQ as Ce,bo as Ie,A as Ue,bc as Se,bd as ve,M as Ae,b as ye,a as v}from"./element-plus-FTcyDTKl.js";import{o as ke}from"./org_user_role_rel-rNVO0GOZ.js";import{o as Pe}from"./org_user_dept_rel-w0nzoSLz.js";import{o as xe}from"./org_user_post_rel-DSTT4SCq.js";import{o as De}from"./org_user_job_rel-wLZ8iQh5.js";import{o as P}from"./orgTreeData-D6VkkBhm.js";import{r as o}from"./randomMock-C6-QJwcy.js";import{p as Re}from"./pagination-BHZHZx5b.js";import{G as Ve,n as ze,p as we,M as d,a0 as s,W as t,F as b,r as c,aj as x,L as l,P as L,ae as A,O as E,_ as O,$ as T,Z as C,R as Fe,u as i,k as D,c as R}from"./vue-vendor-CYCT-Zs3.js";const qe=`-- Table structure for org_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_user";
CREATE TABLE "public"."org_user" (
  "user_id" bigint NOT NULL,
  "org_id" bigint NOT NULL,
  "org_name" varchar(128) COLLATE "pg_catalog"."default",
  "puser_id" bigint,
  "name" varchar(100) COLLATE "pg_catalog"."default",
  "phone" varchar(20) COLLATE "pg_catalog"."default",
  "office_phone" varchar(20) COLLATE "pg_catalog"."default",
  "sex" integer NOT NULL DEFAULT 0,
  "avatar" varchar(500) COLLATE "pg_catalog"."default",
  "email" varchar(128) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."org_user" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_user"."user_id" IS '用户ID';
COMMENT ON COLUMN "public"."org_user"."org_id" IS '组织ID';
COMMENT ON COLUMN "public"."org_user"."org_name" IS '归属组织名称（冗余）';
COMMENT ON COLUMN "public"."org_user"."puser_id" IS '平台账户ID';
COMMENT ON COLUMN "public"."org_user"."name" IS '用户姓名';
COMMENT ON COLUMN "public"."org_user"."phone" IS '电话号码';
COMMENT ON COLUMN "public"."org_user"."office_phone" IS '办公电话';
COMMENT ON COLUMN "public"."org_user"."sex" IS '性别（0-未知 1-男 2-女）';
COMMENT ON COLUMN "public"."org_user"."avatar" IS '头像地址';
COMMENT ON COLUMN "public"."org_user"."email" IS '邮箱地址';
COMMENT ON COLUMN "public"."org_user"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_user"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_user"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."org_user"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_user"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_user"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_user"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_user"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_user"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_user"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_user"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_user"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_user"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_user"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_user"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_user"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_user" IS '组织机构用户表';

-- ----------------------------

-- Indexes structure for table org_user
-- ----------------------------
CREATE INDEX "idx_org_user_name" ON "public"."org_user" USING btree (
  "name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_user_org_status_display" ON "public"."org_user" USING btree (
  "org_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_user_phone" ON "public"."org_user" USING btree (
  "phone" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE phone IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_org_user_puser_id" ON "public"."org_user" USING btree (
  "puser_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE puser_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_org_user_status" ON "public"."org_user" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_user
-- ----------------------------
ALTER TABLE "public"."org_user" ADD CONSTRAINT "org_user_pkey" PRIMARY KEY ("user_id");

-- ----------------------------
`,Be=`-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_user";
CREATE TABLE "public"."sys_user" (
  "puser_id" bigint NOT NULL,
  "login_name" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "password" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_type" integer,
  "nickname" varchar(64) COLLATE "pg_catalog"."default",
  "phone" varchar(32) COLLATE "pg_catalog"."default",
  "status" integer NOT NULL DEFAULT 1101,
  "up_pwd_time" timestamp(6),
  "login_time" timestamp(6),
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "update_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "deleted" smallint NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."sys_user" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_user"."puser_id" IS '平台账户ID';
COMMENT ON COLUMN "public"."sys_user"."login_name" IS '登录账号';
COMMENT ON COLUMN "public"."sys_user"."password" IS '密码';
COMMENT ON COLUMN "public"."sys_user"."user_type" IS '用户类型（待定：所有子系统共用同一平台账户，不按子系统区分）';
COMMENT ON COLUMN "public"."sys_user"."nickname" IS '昵称';
COMMENT ON COLUMN "public"."sys_user"."phone" IS '手机号码';
COMMENT ON COLUMN "public"."sys_user"."status" IS '帐号状态（1101正常 1102禁用）';
COMMENT ON COLUMN "public"."sys_user"."up_pwd_time" IS '修改密码时间';
COMMENT ON COLUMN "public"."sys_user"."login_time" IS '最后登录时间';
COMMENT ON COLUMN "public"."sys_user"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_user"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_user"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_user"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."sys_user"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_user"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_user"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_user" IS '系统平台账号信息表';

-- ----------------------------

-- Indexes structure for table sys_user
-- ----------------------------
CREATE INDEX "idx_sys_user_login_name" ON "public"."sys_user" USING btree (
  "login_name" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE login_name IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_user_phone" ON "public"."sys_user" USING btree (
  "phone" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE phone IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_user_status" ON "public"."sys_user" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table sys_user
-- ----------------------------
ALTER TABLE "public"."sys_user" ADD CONSTRAINT "sys_user_pkey" PRIMARY KEY ("puser_id");

-- ----------------------------
`,je=[{id:1,name:"陈志远",roles:["系统管理员","机构管理员"],departments:["广东省交通运输厅"],posts:["厅长"],position:["厅长"],phone:"13800138101",officePhone:"020-83730001",email:"chenzy@gd.gov.cn",remark:"主持厅全面工作",orgId:1,orgName:"广东省交通运输厅",...o()},{id:2,name:"刘建国",roles:["机构管理员"],departments:["广东省交通运输厅"],posts:["副厅长"],position:["副厅长"],phone:"13800138102",officePhone:"020-83730002",email:"liujg@gd.gov.cn",remark:"分管基建、科技工作",orgId:1,orgName:"广东省交通运输厅",...o()},{id:3,name:"王丽华",roles:["机构管理员"],departments:["广东省交通运输厅"],posts:["办公室主任"],position:["副厅长"],phone:"13800138103",officePhone:"020-83730003",email:"wanglh@gd.gov.cn",remark:"分管路政、安全工作",orgId:1,orgName:"广东省交通运输厅",...o()},{id:4,name:"张伟明",roles:["运维工程师"],departments:["广东省交通运输厅"],posts:["人事科科长"],position:["办公室主任"],phone:"13800138104",officePhone:"020-83730004",email:"zhangwm@gd.gov.cn",remark:"协调厅内日常事务",orgId:1,orgName:"广东省交通运输厅",...o()},{id:5,name:"赵国庆",roles:["机构管理员","值班人员"],departments:["厅总值班室"],posts:["值班室主任"],position:["值班室主任"],phone:"138001381101",officePhone:"020-83730101",email:"zhaogq@gd.gov.cn",remark:"统筹值班安排与应急调度",orgId:11,orgName:"厅总值班室",...o()},{id:6,name:"孙晓峰",roles:["值班人员"],departments:["厅总值班室"],posts:["值班员"],position:["值班员"],phone:"138001381102",officePhone:"020-83730102",email:"sunxf@gd.gov.cn",remark:"日常值班与信息报送",orgId:11,orgName:"厅总值班室",...o()},{id:7,name:"李婷",roles:["值班人员"],departments:["厅总值班室"],posts:["信息报送员"],position:["值班员"],phone:"138001381103",officePhone:"020-83730103",email:"liting@gd.gov.cn",remark:"日常值班与信息报送",orgId:11,orgName:"厅总值班室",...o()},{id:8,name:"周文博",roles:["处室管理员"],departments:["科技处"],posts:["处长"],position:["处长"],phone:"138001381201",officePhone:"020-83730201",email:"zhouwb@gd.gov.cn",remark:"统筹科技发展与创新工作",orgId:12,orgName:"科技处",...o()},{id:9,name:"吴思远",roles:["科研项目管理员"],departments:["科技处"],posts:["副处长"],position:["副处长"],phone:"138001381202",officePhone:"020-83730202",email:"wusy@gd.gov.cn",remark:"分管科研项目管理",orgId:12,orgName:"科技处",...o()},{id:10,name:"郑雅文",roles:["普通用户"],departments:["科技处"],posts:["科研管理员"],position:["科员"],phone:"138001381203",officePhone:"020-83730203",email:"zhengyw@gd.gov.cn",remark:"科技项目申报与跟踪",orgId:12,orgName:"科技处",...o()},{id:11,name:"黄志强",roles:["路政执法员"],departments:["路政处"],posts:["路政执法员"],position:["处长"],phone:"138001381301",officePhone:"020-83730301",email:"huangzq@gd.gov.cn",remark:"统筹路政管理工作",orgId:13,orgName:"路政处",...o()},{id:12,name:"林美玲",roles:["治超稽查员"],departments:["路政处"],posts:["治超稽查员"],position:["副处长"],phone:"138001381302",officePhone:"020-83730302",email:"linml@gd.gov.cn",remark:"分管超限治理",orgId:13,orgName:"路政处",...o()},{id:13,name:"何建华",roles:["路政执法员"],departments:["路政处"],posts:["路政执法员"],position:["科员"],phone:"138001381303",officePhone:"020-83730303",email:"hejh@gd.gov.cn",remark:"路政执法监督",orgId:13,orgName:"路政处",...o()},{id:14,name:"杨明辉",roles:["工程项目管理员"],departments:["基建处"],posts:["项目管理员"],position:["处长"],phone:"138001381401",officePhone:"020-83730401",email:"yangmh@gd.gov.cn",remark:"统筹基建项目管理",orgId:14,orgName:"基建处",...o()},{id:15,name:"朱晓燕",roles:["工程项目管理员"],departments:["基建处"],posts:["工程资料员"],position:["副处长"],phone:"138001381402",officePhone:"020-83730402",email:"zhuxy@gd.gov.cn",remark:"分管工程质量监督",orgId:14,orgName:"基建处",...o()},{id:16,name:"马俊杰",roles:["普通用户"],departments:["基建处"],posts:["项目管理员"],position:["科员"],phone:"138001381403",officePhone:"020-83730403",email:"majj@gd.gov.cn",remark:"项目验收与档案管理",orgId:14,orgName:"基建处",...o()},{id:17,name:"李伟强",roles:["机构管理员"],departments:["广州市交通局"],posts:["局长"],position:["局长"],phone:"138001382101",officePhone:"020-86010001",email:"liwq@gz.gov.cn",remark:"主持局全面工作",orgId:21,orgName:"广州市交通局",...o()},{id:18,name:"陈晓东",roles:["运输管理岗"],departments:["广州市交通局"],posts:["副局长"],position:["副局长"],phone:"138001382102",officePhone:"020-86010002",email:"chenxd@gz.gov.cn",remark:"分管交通运输管理",orgId:21,orgName:"广州市交通局",...o()},{id:19,name:"张敏",roles:["安全监督员"],departments:["广州市交通局"],posts:["运输管理科科长"],position:["办公室主任"],phone:"138001382103",officePhone:"020-86010003",email:"zhangmin@gz.gov.cn",remark:"协调局内日常事务",orgId:21,orgName:"广州市交通局",...o()},{id:20,name:"王建军",roles:["机构管理员"],departments:["从化区交通运输局"],posts:["局长"],position:["局长"],phone:"138001382111",officePhone:"020-87962001",email:"wangjj@ch.gov.cn",remark:"主持局全面工作",orgId:211,orgName:"从化区交通运输局",...o()},{id:21,name:"刘小红",roles:["普通用户"],departments:["从化区交通运输局"],posts:["副局长"],position:["副局长"],phone:"138001382112",officePhone:"020-87962002",email:"liuxh@ch.gov.cn",remark:"分管运输管理",orgId:211,orgName:"从化区交通运输局",...o()},{id:22,name:"许宏亮",roles:["机构管理员"],departments:["深圳市交通运输局"],posts:["局长"],position:["局长"],phone:"138001382201",officePhone:"0755-83160001",email:"xuhl@sz.gov.cn",remark:"主持局全面工作",orgId:22,orgName:"深圳市交通运输局",...o()},{id:23,name:"欧阳明",roles:["公共交通管理岗"],departments:["深圳市交通运输局"],posts:["副局长"],position:["副局长"],phone:"138001382202",officePhone:"0755-83160002",email:"ouym@sz.gov.cn",remark:"分管公共交通",orgId:22,orgName:"深圳市交通运输局",...o()},{id:24,name:"方小燕",roles:["普通用户"],departments:["深圳市交通运输局"],posts:["公共交通管理科长"],position:["科员"],phone:"138001382203",officePhone:"0755-83160003",email:"fangxy@sz.gov.cn",remark:"交通规划管理",orgId:22,orgName:"深圳市交通运输局",...o()},{id:25,name:"林志明",roles:["规划管理岗"],departments:["茂名市交通局"],posts:["局长"],position:["局长"],phone:"138001382301",officePhone:"0668-2890001",email:"linzm@mm.gov.cn",remark:"主持局全面工作",orgId:23,orgName:"茂名市交通局",...o()},{id:26,name:"黄丽娟",roles:["规划管理岗"],departments:["茂名市交通局"],posts:["副局长"],position:["副局长"],phone:"138001382302",officePhone:"0668-2890002",email:"huanglj@mm.gov.cn",remark:"分管基建与规划",orgId:23,orgName:"茂名市交通局",...o()},{id:27,name:"陈伟达",roles:["机构管理员"],departments:["佛山市交通运输局"],posts:["局长"],position:["局长"],phone:"138001382401",officePhone:"0757-83200001",email:"chenwd@fs.gov.cn",remark:"主持局全面工作",orgId:24,orgName:"佛山市交通运输局",...o()},{id:28,name:"刘丽珍",roles:["公路运输管理岗"],departments:["佛山市交通运输局"],posts:["副局长"],position:["副局长"],phone:"138001382402",officePhone:"0757-83200002",email:"liulz@fs.gov.cn",remark:"分管公路运输",orgId:24,orgName:"佛山市交通运输局",...o()},{id:29,name:"谢志坚",roles:["机构管理员"],departments:["广东省公路事务中心"],posts:["中心主任"],position:["主任"],phone:"138001380301",officePhone:"020-87650001",email:"xiezj@gd.gov.cn",remark:"主持中心全面工作",orgId:3,orgName:"广东省公路事务中心",...o()},{id:30,name:"何小燕",roles:["养护监督岗"],departments:["广东省公路事务中心"],posts:["副主任"],position:["副主任"],phone:"138001380302",officePhone:"020-87650002",email:"hexy@gd.gov.cn",remark:"分管公路养护",orgId:3,orgName:"广东省公路事务中心",...o()},{id:31,name:"钟伟杰",roles:["行政助理"],departments:["综合事务中心"],posts:["行政助理"],position:["主任"],phone:"138001383001",officePhone:"020-87650101",email:"zhongwj@gd.gov.cn",remark:"统筹综合事务管理",orgId:30,orgName:"综合事务中心",...o()},{id:32,name:"冯小明",roles:["行政助理"],departments:["综合事务中心"],posts:["后勤保障专员"],position:["科员"],phone:"138001383002",officePhone:"020-87650102",email:"fengxm@gd.gov.cn",remark:"日常行政事务",orgId:30,orgName:"综合事务中心",...o()},{id:33,name:"钟伟明",roles:["机构管理员","路况巡查员"],departments:["广州市公路事务中心"],posts:["道路养护技术员"],position:["主任"],phone:"138001383101",officePhone:"020-86680001",email:"zhongwm@gz.gov.cn",remark:"主持中心全面工作",orgId:31,orgName:"广州市公路事务中心",...o()},{id:34,name:"冯晓敏",roles:["路况巡查员"],departments:["广州市公路事务中心"],posts:["路况巡查员"],position:["副主任"],phone:"138001383102",officePhone:"020-86680002",email:"fengxm@gz.gov.cn",remark:"分管养护与路政",orgId:31,orgName:"广州市公路事务中心",...o()},{id:35,name:"李国强",roles:["普通用户"],departments:["广州市公路事务中心"],posts:["道路养护技术员"],position:["科员"],phone:"138001383103",officePhone:"020-86680003",email:"ligq@gz.gov.cn",remark:"公路养护技术指导",orgId:31,orgName:"广州市公路事务中心",...o()},{id:36,name:"刘德华",roles:["站长"],departments:["从化区道路事务中心良口养护站"],posts:["站长"],position:["站长"],phone:"138001384101",officePhone:"020-87964001",email:"liudh@ch.gov.cn",remark:"主持站全面工作",orgId:41,orgName:"从化区道路事务中心良口养护站",...o()},{id:37,name:"张建华",roles:["养护作业员"],departments:["从化区道路事务中心良口养护站"],posts:["副站长"],position:["副站长"],phone:"138001384102",officePhone:"020-87964002",email:"zhangjh@ch.gov.cn",remark:"分管日常养护",orgId:41,orgName:"从化区道路事务中心良口养护站",...o()},{id:38,name:"李伟",roles:["养护作业员"],departments:["从化区道路事务中心良口养护站"],posts:["养护工"],position:["养护工"],phone:"138001384103",officePhone:"020-87964003",email:"liwei@ch.gov.cn",remark:"道路日常巡查与养护",orgId:41,orgName:"从化区道路事务中心良口养护站",...o()},{id:39,name:"王强",roles:["养护作业员"],departments:["从化区道路事务中心良口养护站"],posts:["机械操作手"],position:["养护工"],phone:"138001384104",officePhone:"020-87964004",email:"wangqiang@ch.gov.cn",remark:"道路日常巡查与养护",orgId:41,orgName:"从化区道路事务中心良口养护站",...o()},{id:40,name:"李明远",roles:["机构管理员"],departments:["广东省高速公路发展股份有限公司"],posts:["董事长"],position:["董事长"],phone:"138001385101",officePhone:"020-38100001",email:"limy@gdexpress.com",remark:"主持公司全面工作",orgId:51,orgName:"广东省高速公路发展股份有限公司",...o()},{id:41,name:"张晓东",roles:["收费管理岗"],departments:["广东省高速公路发展股份有限公司"],posts:["总经理"],position:["总经理"],phone:"138001385102",officePhone:"020-38100002",email:"zhangxd@gdexpress.com",remark:"分管运营与管理",orgId:51,orgName:"广东省高速公路发展股份有限公司",...o()},{id:42,name:"王丽萍",roles:["养护管理岗"],departments:["广东省高速公路发展股份有限公司"],posts:["副总经理"],position:["副总经理"],phone:"138001385103",officePhone:"020-38100003",email:"wanglp@gdexpress.com",remark:"分管工程建设",orgId:51,orgName:"广东省高速公路发展股份有限公司",...o()},{id:43,name:"刘国强",roles:["机构管理员"],departments:["广佛高速公路有限公司"],posts:["总经理"],position:["总经理"],phone:"138001385111",officePhone:"020-81900001",email:"liugq@gfexpress.com",remark:"主持公司全面工作",orgId:511,orgName:"广佛高速公路有限公司",...o()},{id:44,name:"黄晓燕",roles:["收费员"],departments:["广佛高速公路有限公司"],posts:["副总经理"],position:["副总经理"],phone:"138001385112",officePhone:"020-81900002",email:"huangxy@gfexpress.com",remark:"分管运营与收费",orgId:511,orgName:"广佛高速公路有限公司",...o()},{id:45,name:"王志坚",roles:["机构管理员"],departments:["广深高速公路有限公司"],posts:["总经理"],position:["总经理"],phone:"138001385121",officePhone:"020-82200001",email:"wangzj@gsexpress.com",remark:"主持公司全面工作",orgId:512,orgName:"广深高速公路有限公司",...o()},{id:46,name:"张丽华",roles:["安全管理员"],departments:["广深高速公路有限公司"],posts:["副总经理"],position:["副总经理"],phone:"138001385122",officePhone:"020-82200002",email:"zhanglh@gsexpress.com",remark:"分管运营与维护",orgId:512,orgName:"广深高速公路有限公司",...o()},{id:47,name:"张国华",roles:["机构管理员","监控调度员"],departments:["广东省交通监控中心"],posts:["监控员"],position:["主任"],phone:"138001385201",officePhone:"020-83500001",email:"zhanggh@gd.gov.cn",remark:"主持中心全面工作",orgId:52,orgName:"广东省交通监控中心",...o()},{id:48,name:"刘小明",roles:["监控调度员"],departments:["广东省交通监控中心"],posts:["调度员"],position:["副主任"],phone:"138001385202",officePhone:"020-83500002",email:"liuxm@gd.gov.cn",remark:"分管监控与应急",orgId:52,orgName:"广东省交通监控中心",...o()},{id:49,name:"王丽丽",roles:["数据分析员"],departments:["广东省交通监控中心"],posts:["监控员"],position:["技术员"],phone:"138001385203",officePhone:"020-83500003",email:"wangll@gd.gov.cn",remark:"监控系统运维",orgId:52,orgName:"广东省交通监控中心",...o()},{id:50,name:"李志强",roles:["监控调度员"],departments:["广东省交通监控中心"],posts:["调度员"],position:["调度员"],phone:"138001385204",officePhone:"020-83500004",email:"lizq@gd.gov.cn",remark:"交通调度与信息报送",orgId:52,orgName:"广东省交通监控中心",...o()}],Xe=["系统管理员","运维工程师","值守主管","技术支持","数据分析师","普通用户","事件处理员","调度员","预案管理员","物资管理员","决策顾问","调度主管","融合协调员","展示管理员","测试工程师"],Ge=["厅总值班室","科技处","路政处","基建处","综合处","广州市交通局","深圳市交通局","茂名市交通局","佛山市交通局","广州市公路事务中心","深圳市公路事务中心","佛山市公路事务中心"],We=["厅长","副厅长","处长","副处长","科员","主任","副主任","值班室主任","值班员","站长","副站长","养护工","局长","副局长","办公室主任","技术员"],$e=["厅长","副厅长","总工程师","办公室主任","人事科科长","财务科科长","值班室主任","值班员","信息报送员","夜班值守班长","处长","副处长","科研管理员","科员","路政执法员","治超稽查员","项目管理员","工程资料员","局长","副局长","运输管理科科长","安全监督科科长","公共交通管理科长","计划财务科长","规划科科长","公路运输科长","中心主任","副主任","养护管理科长","路况信息员","行政助理","后勤保障专员","道路养护技术员","路况巡查员","站长","副站长","养护工","机械操作手","董事长","总经理","副总经理","运营部长","收费站长","收费部长","收费员","监控员","调度员"],Ke={class:"member-name-cell"},He={class:"name-text"},Ye={class:"tag-cell"},Je={key:0,class:"empty-text"},Qe={class:"tag-cell"},Ze={key:0,class:"empty-text"},eo={class:"tag-cell"},oo={key:0,class:"empty-text"},ao={class:"tag-cell"},no={key:0,class:"empty-text"},ro=Ve({__name:"MemberManagement",setup(so){const y=c(!1),V=c([]),z=c(),_=c(null),M=c(!1),f=c(!1),I=c(),w=c(!1),u=D({name:"",phone:""}),n=D({id:0,name:"",roles:[],departments:[],posts:[],position:[],phone:"",officePhone:"",email:"",remark:"",password:""}),G={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号作为账号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"密码长度为6-20位",trigger:"blur"}],roles:[{required:!0,message:"请选择角色",trigger:"change"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"邮箱格式不正确",trigger:"blur"}]},N=D({pageNum:1,pageSize:20}),W=[{prop:"phone",label:"账号(手机号)",width:140},{prop:"name",label:"成员姓名",width:120,slot:"name"},{prop:"roles",label:"角色",width:180,slot:"roles"},{prop:"departments",label:"部门",width:150,slot:"departments"},{prop:"posts",label:"岗位",width:150,slot:"posts"},{prop:"position",label:"职务",width:150,slot:"position"},{prop:"officePhone",label:"办公电话",width:140,cellType:"secondary"},{prop:"email",label:"邮箱",minWidth:180,cellType:"secondary",showOverflowTooltip:!0},{prop:"remark",label:"备注",minWidth:170,cellType:"secondary",showOverflowTooltip:!0},{type:"audit",prop:"creater",label:"创建人"},{type:"audit",prop:"createTime",label:"创建时间"},{type:"actions",label:"操作",slot:"actions"}],F=R(()=>V.value.filter(a=>!(_.value&&a.orgId!==_.value.id||u.name&&!a.name.includes(u.name)||u.phone&&!a.phone.includes(u.phone)))),$=R(()=>F.value.length),K=R(()=>Re(F.value,N.pageNum,N.pageSize)),H=[{label:"编辑",icon:be,handler:r=>Z(r)},{label:"修改密码",icon:Ee,handler:r=>oe(r)},{label:"重置密码",icon:Ce,handler:r=>ae(r)},{label:"删除",icon:Ie,divided:!0,handler:r=>ne(r)}];function q(){y.value=!0;try{V.value=je}finally{y.value=!1}}function Y(r){_.value=r}function B(){N.pageNum=1}function J(r){const a=["#409EFF","#67C23A","#E6A23C","#F56C6C","#9B59B6","#1ABC9C"],k=r.charCodeAt(0)%a.length;return a[k]}function Q(){f.value=!1,n.id=0,n.name="",n.roles=[],n.departments=[],n.posts=[],n.position=[],n.phone="",n.officePhone="",n.email="",n.remark="",n.password="",M.value=!0}function Z(r){f.value=!0,n.id=r.id,n.name=r.name,n.roles=[...r.roles],n.departments=[...r.departments],n.posts=[...r.posts],n.position=[...r.position],n.phone=r.phone,n.officePhone=r.officePhone,n.email=r.email,n.remark=r.remark,n.password="",M.value=!0}function ee(){I.value&&I.value.validate(r=>{r&&(v.success(f.value?"编辑成功":"新增成功"),M.value=!1)})}function oe(r){ye.prompt("请输入新密码","修改密码 - "+r.name,{confirmButtonText:"确认",cancelButtonText:"取消",inputType:"password",inputPlaceholder:"请输入新密码",inputValidator:a=>a?a.length<6?"密码长度不能少于6位":a.length>20?"密码长度不能超过20位":!0:"密码不能为空",inputErrorMessage:"密码长度为6-20位"}).then(()=>{v.success("密码修改成功")}).catch(()=>{})}async function ae(r){await Le(`确定要重置 "${r.name}" 的密码吗？重置后默认密码为 123456`)&&v.success("密码已重置为 123456")}async function ne(r){await Oe(r.name)&&(v.success("删除成功"),q())}function re(){var r;(r=I.value)==null||r.resetFields()}return ze(()=>{q(),P.length>0&&(_.value=P[0],we(()=>{var r;(r=z.value)==null||r.setCurrentKey(1)}))}),(r,a)=>{var X;const k=x("table-structure-drawer"),se=x("search-tree-panel"),j=fe,te=Ne,le=Ue,U=Te,ie=_e,pe=ce,me=x("split-layout"),h=Ae,p=ve,S=he,de=Se,ue=ge;return l(),d(b,null,[s(me,{collapsed:w.value,"onUpdate:collapsed":a[4]||(a[4]=e=>w.value=e),"aside-title":"组织结构",title:"成员管理","sub-title":(X=_.value)==null?void 0:X.name},{"title-extra":t(()=>[s(k,{sql:[i(qe),i(ke),i(Pe),i(xe),i(De),i(Be)]},null,8,["sql"])]),aside:t(({collapsed:e})=>{var m;return[s(se,{ref_key:"orgTreeRef",ref:z,data:i(P),"selected-id":(m=_.value)==null?void 0:m.id,collapsed:e,onNodeClick:Y},null,8,["data","selected-id","collapsed"])]}),search:t(()=>[s(j,{modelValue:u.name,"onUpdate:modelValue":a[0]||(a[0]=e=>u.name=e),placeholder:"搜索成员姓名",onSearch:B},null,8,["modelValue"]),s(j,{modelValue:u.phone,"onUpdate:modelValue":a[1]||(a[1]=e=>u.phone=e),placeholder:"搜索手机号",onSearch:B},null,8,["modelValue"])]),actions:t(()=>[s(te,{disabled:!_.value,"margin-left":10,onClick:Q},{default:t(()=>[...a[16]||(a[16]=[O("新增成员",-1)])]),_:1},8,["disabled"])]),default:t(()=>[s(pe,{pageNum:N.pageNum,"onUpdate:pageNum":a[2]||(a[2]=e=>N.pageNum=e),pageSize:N.pageSize,"onUpdate:pageSize":a[3]||(a[3]=e=>N.pageSize=e),data:K.value,columns:W,total:$.value,loading:y.value,"row-key":"id","show-tool-bar":!1},{name:t(({row:e})=>[L("div",Ke,[s(le,{size:32,style:Fe({background:J(e.name)})},{default:t(()=>[O(T(e.name.charAt(0)),1)]),_:2},1032,["style"]),L("span",He,T(e.name),1)])]),roles:t(({row:e})=>[L("div",Ye,[(l(!0),d(b,null,A(e.roles,(m,g)=>(l(),E(U,{key:g,size:"small",type:g===0?"primary":"info",effect:"plain",class:"tag-spaced"},{default:t(()=>[O(T(m),1)]),_:2},1032,["type"]))),128)),!e.roles||e.roles.length===0?(l(),d("span",Je,"-")):C("",!0)])]),departments:t(({row:e})=>[L("div",Qe,[(l(!0),d(b,null,A(e.departments,(m,g)=>(l(),E(U,{key:g,size:"small",type:"success",effect:"plain",class:"tag-spaced"},{default:t(()=>[O(T(m),1)]),_:2},1024))),128)),!e.departments||e.departments.length===0?(l(),d("span",Ze,"-")):C("",!0)])]),posts:t(({row:e})=>[L("div",eo,[(l(!0),d(b,null,A(e.posts,(m,g)=>(l(),E(U,{key:g,size:"small",type:"danger",effect:"plain",class:"tag-spaced"},{default:t(()=>[O(T(m),1)]),_:2},1024))),128)),!e.posts||e.posts.length===0?(l(),d("span",oo,"-")):C("",!0)])]),position:t(({row:e})=>[L("div",ao,[(l(!0),d(b,null,A(e.position,(m,g)=>(l(),E(U,{key:g,size:"small",type:"warning",effect:"plain",class:"tag-spaced"},{default:t(()=>[O(T(m),1)]),_:2},1024))),128)),!e.position||e.position.length===0?(l(),d("span",no,"-")):C("",!0)])]),actions:t(({row:e})=>[s(ie,{items:H,row:e},null,8,["row"])]),_:1},8,["pageNum","pageSize","data","total","loading"])]),_:1},8,["collapsed","sub-title"]),s(ue,{modelValue:M.value,"onUpdate:modelValue":a[15]||(a[15]=e=>M.value=e),title:f.value?"编辑成员":"新增成员",size:"420px",direction:"rtl","destroy-on-close":"","confirm-text":f.value?"保存修改":"确认创建","on-confirm":ee,onClosed:re},{default:t(()=>[s(de,{ref_key:"memberFormRef",ref:I,model:n,rules:G,"label-width":"80px","label-position":"right",class:"member-form"},{default:t(()=>[s(p,{label:"姓名",prop:"name"},{default:t(()=>[s(h,{modelValue:n.name,"onUpdate:modelValue":a[5]||(a[5]=e=>n.name=e),placeholder:"请输入成员姓名",maxlength:"20","show-word-limit":""},null,8,["modelValue"])]),_:1}),s(p,{label:"账号",prop:"phone"},{default:t(()=>[s(h,{modelValue:n.phone,"onUpdate:modelValue":a[6]||(a[6]=e=>n.phone=e),placeholder:"请输入11位手机号作为账号",maxlength:"11"},null,8,["modelValue"])]),_:1}),f.value?C("",!0):(l(),E(p,{key:0,label:"密码",prop:"password"},{default:t(()=>[s(h,{modelValue:n.password,"onUpdate:modelValue":a[7]||(a[7]=e=>n.password=e),type:"password",placeholder:"请输入密码","show-password":"",maxlength:"20"},null,8,["modelValue"])]),_:1})),s(p,{label:"角色",prop:"roles"},{default:t(()=>[s(S,{modelValue:n.roles,"onUpdate:modelValue":a[8]||(a[8]=e=>n.roles=e),options:i(Xe).map(e=>({label:e,value:e})),multiple:"",placeholder:"请选择角色（可多选）"},null,8,["modelValue","options"])]),_:1}),s(p,{label:"部门",prop:"departments"},{default:t(()=>[s(S,{modelValue:n.departments,"onUpdate:modelValue":a[9]||(a[9]=e=>n.departments=e),options:i(Ge).map(e=>({label:e,value:e})),multiple:"",placeholder:"请选择部门（可多选）"},null,8,["modelValue","options"])]),_:1}),s(p,{label:"岗位",prop:"posts"},{default:t(()=>[s(S,{modelValue:n.posts,"onUpdate:modelValue":a[10]||(a[10]=e=>n.posts=e),options:i($e).map(e=>({label:e,value:e})),multiple:"",placeholder:"请选择岗位（可多选）"},null,8,["modelValue","options"])]),_:1}),s(p,{label:"职务",prop:"position"},{default:t(()=>[s(S,{modelValue:n.position,"onUpdate:modelValue":a[11]||(a[11]=e=>n.position=e),options:i(We).map(e=>({label:e,value:e})),multiple:"",placeholder:"请选择职务（可多选）"},null,8,["modelValue","options"])]),_:1}),s(p,{label:"办公电话",prop:"officePhone"},{default:t(()=>[s(h,{modelValue:n.officePhone,"onUpdate:modelValue":a[12]||(a[12]=e=>n.officePhone=e),placeholder:"请输入办公电话（座机等）",maxlength:"20"},null,8,["modelValue"])]),_:1}),s(p,{label:"邮箱",prop:"email"},{default:t(()=>[s(h,{modelValue:n.email,"onUpdate:modelValue":a[13]||(a[13]=e=>n.email=e),placeholder:"请输入邮箱地址"},null,8,["modelValue"])]),_:1}),s(p,{label:"备注",prop:"remark"},{default:t(()=>[s(h,{modelValue:n.remark,"onUpdate:modelValue":a[14]||(a[14]=e=>n.remark=e),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])],64)}}}),fo=Me(ro,[["__scopeId","data-v-ca7fe6f7"]]);export{fo as default};
