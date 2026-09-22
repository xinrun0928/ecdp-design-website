const r=`-- Table structure for org_user_role_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_user_role_rel";
CREATE TABLE "public"."org_user_role_rel" (
  "id" bigint NOT NULL,
  "user_id" bigint NOT NULL,
  "role_id" bigint NOT NULL,
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
ALTER TABLE "public"."org_user_role_rel" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_user_role_rel"."id" IS '主键ID（雪花算法）';
COMMENT ON COLUMN "public"."org_user_role_rel"."user_id" IS '用户ID';
COMMENT ON COLUMN "public"."org_user_role_rel"."role_id" IS '角色ID';
COMMENT ON COLUMN "public"."org_user_role_rel"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_user_role_rel"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_user_role_rel"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_user_role_rel"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_user_role_rel"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_user_role_rel"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_user_role_rel"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_user_role_rel"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_user_role_rel"."signature_version" IS '一体化签名版本号';
COMMENT ON COLUMN "public"."org_user_role_rel"."deleted" IS '删除标志（0-未删除 1-已删除）';
COMMENT ON TABLE "public"."org_user_role_rel" IS '组织用户角色关联表';

-- ----------------------------

-- Indexes structure for table org_user_role_rel
-- ----------------------------
CREATE INDEX "idx_org_user_role_rel_role_user" ON "public"."org_user_role_rel" USING btree (
  "role_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_user_role_rel_user_role" ON "public"."org_user_role_rel" USING btree (
  "user_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "role_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table org_user_role_rel
-- ----------------------------
ALTER TABLE "public"."org_user_role_rel" ADD CONSTRAINT "org_user_role_rel_pkey" PRIMARY KEY ("id");

-- ----------------------------
`;export{r as o};
