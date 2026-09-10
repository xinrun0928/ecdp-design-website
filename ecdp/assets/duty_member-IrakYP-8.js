const e=`-- Table structure for duty_member
-- ----------------------------
DROP TABLE IF EXISTS "public"."duty_member";
CREATE TABLE "public"."duty_member" (
  "id" bigint NOT NULL,
  "member_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "unit_type" varchar(50) COLLATE "pg_catalog"."default",
  "unit_name" varchar(128) COLLATE "pg_catalog"."default",
  "area_codes" varchar(1000) COLLATE "pg_catalog"."default",
  "area_min_code" varchar(32) COLLATE "pg_catalog"."default",
  "area_min_name" varchar(128) COLLATE "pg_catalog"."default",
  "area_names" varchar(1000) COLLATE "pg_catalog"."default",
  "duty" varchar(100) COLLATE "pg_catalog"."default",
  "position" varchar(100) COLLATE "pg_catalog"."default",
  "phone" varchar(20) COLLATE "pg_catalog"."default",
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
ALTER TABLE "public"."duty_member" OWNER TO "postgres";
COMMENT ON COLUMN "public"."duty_member"."id" IS '主键ID';
COMMENT ON COLUMN "public"."duty_member"."member_name" IS '值班人员姓名';
COMMENT ON COLUMN "public"."duty_member"."unit_type" IS '单位类型（厅总值班室/厅直属单位/地市交通局/路段）';
COMMENT ON COLUMN "public"."duty_member"."unit_name" IS '所属单位名称';
COMMENT ON COLUMN "public"."duty_member"."area_codes" IS '归属地区编码列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."duty_member"."area_min_code" IS '最小单元区域编码（动态层级：选到市存市编码，选到街道存街道编码）';
COMMENT ON COLUMN "public"."duty_member"."area_min_name" IS '最小单元区域名称';
COMMENT ON COLUMN "public"."duty_member"."area_names" IS '归属地区名称列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."duty_member"."duty" IS '职务';
COMMENT ON COLUMN "public"."duty_member"."position" IS '岗位';
COMMENT ON COLUMN "public"."duty_member"."phone" IS '电话号码';
COMMENT ON COLUMN "public"."duty_member"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."duty_member"."remark" IS '备注';
COMMENT ON COLUMN "public"."duty_member"."creater" IS '创建者';
COMMENT ON COLUMN "public"."duty_member"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."duty_member"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."duty_member"."updater" IS '更新者';
COMMENT ON COLUMN "public"."duty_member"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."duty_member"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."duty_member"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."duty_member"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."duty_member"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."duty_member"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."duty_member"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."duty_member"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."duty_member"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."duty_member" IS '值班人员表';

-- ----------------------------

-- Indexes structure for table duty_member
-- ----------------------------
CREATE INDEX "idx_duty_member_member_name" ON "public"."duty_member" USING btree (
  "member_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_duty_member_unit_type" ON "public"."duty_member" USING btree (
  "unit_type" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE unit_type IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_member_area_min_code" ON "public"."duty_member" USING btree (
  "area_min_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE area_min_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_member_phone" ON "public"."duty_member" USING btree (
  "phone" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE phone IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_duty_member_status" ON "public"."duty_member" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);

-- Primary Key structure for table duty_member
-- ----------------------------
ALTER TABLE "public"."duty_member" ADD CONSTRAINT "duty_member_pkey" PRIMARY KEY ("id");

-- ----------------------------
`;export{e as d};
