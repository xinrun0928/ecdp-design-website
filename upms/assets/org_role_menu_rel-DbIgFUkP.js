const e=`-- Table structure for org_role
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_role";
CREATE TABLE "public"."org_role" (
  "role_id" bigint NOT NULL,
  "org_id" bigint NOT NULL,
  "org_name" varchar(128) COLLATE "pg_catalog"."default",
  "role_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "role_code" varchar(64) COLLATE "pg_catalog"."default",
  "role_level" integer NOT NULL DEFAULT 1,
  "data_scope" varchar(64) COLLATE "pg_catalog"."default",
  "is_builtin" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."org_role" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_role"."role_id" IS '角色ID';
COMMENT ON COLUMN "public"."org_role"."org_id" IS '归属组织ID';
COMMENT ON COLUMN "public"."org_role"."org_name" IS '归属组织名称（冗余）';
COMMENT ON COLUMN "public"."org_role"."role_name" IS '角色名称';
COMMENT ON COLUMN "public"."org_role"."role_code" IS '角色编码';
COMMENT ON COLUMN "public"."org_role"."role_level" IS '角色级别（数字越小权限越高）';
COMMENT ON COLUMN "public"."org_role"."data_scope" IS '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）';
COMMENT ON COLUMN "public"."org_role"."is_builtin" IS '是否内建角色（0否 1是，内建角色不允许删除）';
COMMENT ON COLUMN "public"."org_role"."display_order" IS '显示顺序';
COMMENT ON COLUMN "public"."org_role"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_role"."remark" IS '备注';
COMMENT ON COLUMN "public"."org_role"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_role"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_role"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_role"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_role"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_role"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_role"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_role"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_role"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_role"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_role"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_role"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_role"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_role" IS '组织角色表';

-- ----------------------------

-- Indexes structure for table org_role
-- ----------------------------
CREATE INDEX "idx_org_role_org_display" ON "public"."org_role" USING btree (
  "org_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_role_role_level" ON "public"."org_role" USING btree (
  "role_level" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_role_status" ON "public"."org_role" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_role
-- ----------------------------
ALTER TABLE "public"."org_role" ADD CONSTRAINT "org_role_pkey" PRIMARY KEY ("role_id");

-- ----------------------------
`,r=`-- Table structure for org_role_menu_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_role_menu_rel";
CREATE TABLE "public"."org_role_menu_rel" (
  "id" bigint NOT NULL,
  "role_id" bigint NOT NULL,
  "menu_id" bigint NOT NULL,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "creater_id" bigint,
  "create_time" timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "creater_org_id" bigint,
  "creater_org_name" varchar(128) COLLATE "pg_catalog"."default",
  "deleted" integer NOT NULL DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer NOT NULL DEFAULT 1,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer NOT NULL DEFAULT 1
)
;
ALTER TABLE "public"."org_role_menu_rel" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_role_menu_rel"."id" IS '主键ID（自增）';
COMMENT ON COLUMN "public"."org_role_menu_rel"."role_id" IS '角色ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."menu_id" IS '菜单ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_role_menu_rel"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_role_menu_rel"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_role_menu_rel"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_role_menu_rel"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_role_menu_rel"."signature_version" IS '一体化签名版本号';
COMMENT ON COLUMN "public"."org_role_menu_rel"."deleted" IS '删除标志（0-未删除 1-已删除）';
COMMENT ON TABLE "public"."org_role_menu_rel" IS '组织角色菜单关联表';

-- ----------------------------

-- Indexes structure for table org_role_menu_rel
-- ----------------------------
CREATE INDEX "idx_org_role_menu_rel_menu_role" ON "public"."org_role_menu_rel" USING btree (
  "menu_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "role_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_role_menu_rel_role_menu" ON "public"."org_role_menu_rel" USING btree (
  "role_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "menu_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_role_menu_rel
-- ----------------------------
ALTER TABLE "public"."org_role_menu_rel" ADD CONSTRAINT "org_role_menu_rel_pkey" PRIMARY KEY ("id");

-- ----------------------------
`;export{r as a,e as o};
