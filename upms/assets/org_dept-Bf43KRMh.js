const e=`-- Table structure for org_dept
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_dept";
CREATE TABLE "public"."org_dept" (
  "dept_id" bigint NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "ancestors" varchar(500) COLLATE "pg_catalog"."default",
  "dept_name" varchar(128) COLLATE "pg_catalog"."default" NOT NULL,
  "leader" varchar(64) COLLATE "pg_catalog"."default",
  "phone" varchar(32) COLLATE "pg_catalog"."default",
  "email" varchar(128) COLLATE "pg_catalog"."default",
  "status" integer NOT NULL DEFAULT 1101,
  "display_order" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."org_dept" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_dept"."dept_id" IS '部门ID';
COMMENT ON COLUMN "public"."org_dept"."parent_id" IS '父部门ID';
COMMENT ON COLUMN "public"."org_dept"."ancestors" IS '祖级列表（格式：0/父ID1/父ID2，用于快速查询所有祖先节点）';
COMMENT ON COLUMN "public"."org_dept"."dept_name" IS '部门名称';
COMMENT ON COLUMN "public"."org_dept"."leader" IS '负责人';
COMMENT ON COLUMN "public"."org_dept"."phone" IS '联系电话';
COMMENT ON COLUMN "public"."org_dept"."email" IS '邮箱';
COMMENT ON COLUMN "public"."org_dept"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_dept"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_dept"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."org_dept"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_dept"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_dept"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_dept"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_dept"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_dept"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_dept"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_dept"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_dept"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_dept"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_dept"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_dept"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_dept"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_dept" IS '组织部门表';

-- ----------------------------

-- Indexes structure for table org_dept
-- ----------------------------
CREATE INDEX "idx_org_dept_ancestors" ON "public"."org_dept" USING btree (
  "ancestors" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
) WHERE ancestors IS NOT NULL;
CREATE INDEX "idx_org_dept_dept_name" ON "public"."org_dept" USING btree (
  "dept_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_dept_display" ON "public"."org_dept" USING btree (
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_dept_parent_id" ON "public"."org_dept" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_dept_status" ON "public"."org_dept" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_dept
-- ----------------------------
ALTER TABLE "public"."org_dept" ADD CONSTRAINT "org_dept_pkey" PRIMARY KEY ("dept_id");

-- ----------------------------
`;export{e as o};
