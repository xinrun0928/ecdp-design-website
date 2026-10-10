import{M as e,R as n}from"./subsystem-DveL0s1z.js";const N=`-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS "public"."sys_menu";
CREATE TABLE "public"."sys_menu" (
  "menu_id" bigint NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "menu_name" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "menu_code" varchar(128) COLLATE "pg_catalog"."default",
  "menu_type" integer NOT NULL DEFAULT 0,
  "content_type" integer NOT NULL DEFAULT 1,
  "subsystem_id" bigint,
  "project_type" integer NOT NULL DEFAULT 1,
  "icon" varchar(128) COLLATE "pg_catalog"."default",
  "path" varchar(255) COLLATE "pg_catalog"."default",
  "component" varchar(255) COLLATE "pg_catalog"."default",
  "display_order" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "ext" varchar(1000) COLLATE "pg_catalog"."default",
  "is_hidden" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."sys_menu" OWNER TO "postgres";
COMMENT ON COLUMN "public"."sys_menu"."menu_id" IS '菜单ID';
COMMENT ON COLUMN "public"."sys_menu"."parent_id" IS '父菜单ID';
COMMENT ON COLUMN "public"."sys_menu"."menu_name" IS '菜单名称';
COMMENT ON COLUMN "public"."sys_menu"."menu_code" IS '权限值（权限标识）';
COMMENT ON COLUMN "public"."sys_menu"."menu_type" IS '菜单类型（0-目录；1-菜单；2-按钮；99-导航）';
COMMENT ON COLUMN "public"."sys_menu"."content_type" IS '内容类型（1-菜单页面；2-大屏；3-嵌入页面；4-外部链接）';
COMMENT ON COLUMN "public"."sys_menu"."subsystem_id" IS '子系统ID';
COMMENT ON COLUMN "public"."sys_menu"."project_type" IS '工程类型（1-应急工程；2-路网工程）';
COMMENT ON COLUMN "public"."sys_menu"."icon" IS '菜单图标';
COMMENT ON COLUMN "public"."sys_menu"."path" IS '路由地址';
COMMENT ON COLUMN "public"."sys_menu"."component" IS '组件路径';
COMMENT ON COLUMN "public"."sys_menu"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."sys_menu"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."sys_menu"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."sys_menu"."ext" IS '扩展字段（JSON格式）';
COMMENT ON COLUMN "public"."sys_menu"."is_hidden" IS '是否隐藏（0-显示；1-隐藏）';
COMMENT ON COLUMN "public"."sys_menu"."creater" IS '创建者';
COMMENT ON COLUMN "public"."sys_menu"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."sys_menu"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."sys_menu"."updater" IS '更新者';
COMMENT ON COLUMN "public"."sys_menu"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."sys_menu"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."sys_menu"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."sys_menu"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."sys_menu"."deleted" IS '逻辑删除（0正常 1删除）';
COMMENT ON COLUMN "public"."sys_menu"."local_signature" IS '本地签名（SM2）';
COMMENT ON COLUMN "public"."sys_menu"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."sys_menu"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."sys_menu"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."sys_menu" IS '系统菜单表';

-- ----------------------------

-- Indexes structure for table sys_menu
-- ----------------------------
CREATE INDEX "idx_sys_menu_menu_code" ON "public"."sys_menu" USING btree (
  "menu_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE menu_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_menu_menu_type" ON "public"."sys_menu" USING btree (
  "menu_type" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_menu_org_id" ON "public"."sys_menu" USING btree (
  "creater_org_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE creater_org_id IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_sys_menu_parent_status" ON "public"."sys_menu" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;
CREATE INDEX "idx_sys_menu_subsystem_status_order" ON "public"."sys_menu" USING btree (
  "subsystem_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
) WHERE deleted = 0;

-- Primary Key structure for table sys_menu
-- ----------------------------
ALTER TABLE "public"."sys_menu" ADD CONSTRAINT "sys_menu_pkey" PRIMARY KEY ("menu_id");

-- ----------------------------
`,a={[e.NAV]:{label:"导航",color:"#9B59B6"},[e.DIR]:{label:"目录",color:"#409EFF"},[e.MENU]:{label:"菜单",color:"#67C23A"},[e.BUTTON]:{label:"按钮",color:"#E6A23C"}},t=[{value:e.NAV,label:"导航",color:"#9B59B6"},{value:e.DIR,label:"目录",color:"#409EFF"},{value:e.MENU,label:"菜单",color:"#67C23A"},{value:e.BUTTON,label:"按钮",color:"#E6A23C"}],_={[n.MENU_PAGE]:{label:"菜单页面",color:"#409EFF"},[n.SCREEN]:{label:"大屏",color:"#67C23A"},[n.EMBED]:{label:"嵌入页面",color:"#E6A23C"},[n.EXTERNAL]:{label:"外部链接",color:"#909399"}};export{_ as C,a as M,t as a,N as s};
