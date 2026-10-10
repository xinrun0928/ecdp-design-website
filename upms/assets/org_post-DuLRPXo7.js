const t=`-- Table structure for org_post
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
CREATE INDEX "idx_org_post_display" ON "public"."org_post" USING btree (
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
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
`;export{t as o};
