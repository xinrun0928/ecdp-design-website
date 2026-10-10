const r=`-- Table structure for org_user
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_user";
CREATE TABLE "public"."org_user" (
  "user_id" bigint NOT NULL,
  "org_id" bigint NOT NULL,
  "org_name" varchar(128) COLLATE "pg_catalog"."default",
  "puser_id" bigint,
  "user_type" integer NOT NULL DEFAULT 1,
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
COMMENT ON COLUMN "public"."org_user"."user_type" IS '用户类型（1系统用户 2联系人员）';
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
`;export{r as o};
