const a=`-- Table structure for org_organization
-- ----------------------------
DROP TABLE IF EXISTS "public"."org_organization";
CREATE TABLE "public"."org_organization" (
  "org_id" bigint NOT NULL,
  "parent_id" bigint NOT NULL DEFAULT 0,
  "ancestors" text COLLATE "pg_catalog"."default",
  "level" integer NOT NULL DEFAULT 1,
  "org_code" varchar(50) COLLATE "pg_catalog"."default",
  "org_name" varchar(100) COLLATE "pg_catalog"."default" NOT NULL,
  "org_short_name" varchar(100) COLLATE "pg_catalog"."default",
  "introduce" varchar(500) COLLATE "pg_catalog"."default",
  "area_codes" varchar(1000) COLLATE "pg_catalog"."default",
  "area_min_code" varchar(32) COLLATE "pg_catalog"."default",
  "area_min_name" varchar(128) COLLATE "pg_catalog"."default",
  "area_names" varchar(1000) COLLATE "pg_catalog"."default",
  "org_type_id" bigint,
  "org_type_name" varchar(128) COLLATE "pg_catalog"."default",
  "org_type_code" varchar(64) COLLATE "pg_catalog"."default",
  "parent_city_org_ids" text COLLATE "pg_catalog"."default",
  "parent_city_org_names" text COLLATE "pg_catalog"."default",
  "parent_affair_org_ids" text COLLATE "pg_catalog"."default",
  "parent_affair_org_names" text COLLATE "pg_catalog"."default",
  "parent_company_org_ids" text COLLATE "pg_catalog"."default",
  "parent_company_org_names" text COLLATE "pg_catalog"."default",
  "contact_person" varchar(255) COLLATE "pg_catalog"."default",
  "contact_phone" varchar(255) COLLATE "pg_catalog"."default",
  "contact_fax" varchar(255) COLLATE "pg_catalog"."default",
  "contact_email" varchar(255) COLLATE "pg_catalog"."default",
  "display_order" integer NOT NULL DEFAULT 0,
  "status" integer NOT NULL DEFAULT 1101,
  "subordinate_count" integer NOT NULL DEFAULT 0,
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
ALTER TABLE "public"."org_organization" OWNER TO "postgres";
COMMENT ON COLUMN "public"."org_organization"."org_id" IS '组织ID';
COMMENT ON COLUMN "public"."org_organization"."parent_id" IS '父组织ID（0表示根组织）';
COMMENT ON COLUMN "public"."org_organization"."ancestors" IS '祖级路径（含自身ID），格式：0/父ID1/父ID2/.../直接父ID/自身org_id';
COMMENT ON COLUMN "public"."org_organization"."level" IS '层级深度';
COMMENT ON COLUMN "public"."org_organization"."org_code" IS '组织编码';
COMMENT ON COLUMN "public"."org_organization"."org_name" IS '组织名称';
COMMENT ON COLUMN "public"."org_organization"."org_short_name" IS '组织简称';
COMMENT ON COLUMN "public"."org_organization"."introduce" IS '组织介绍';
COMMENT ON COLUMN "public"."org_organization"."area_codes" IS '归属地区编码列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."area_min_code" IS '最小单元区域编码（动态层级：选到市存市编码，选到街道存街道编码）';
COMMENT ON COLUMN "public"."org_organization"."area_min_name" IS '最小单元区域名称';
COMMENT ON COLUMN "public"."org_organization"."area_names" IS '归属地区名称列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."org_type_id" IS '组织类型ID';
COMMENT ON COLUMN "public"."org_organization"."org_type_name" IS '组织类型名称';
COMMENT ON COLUMN "public"."org_organization"."org_type_code" IS '组织类型编码';
COMMENT ON COLUMN "public"."org_organization"."parent_city_org_ids" IS '上级地市交通组织ID列表，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_city_org_names" IS '上级地市交通组织名称，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_affair_org_ids" IS '上级事务中心组织ID列表，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_affair_org_names" IS '上级事务中心组织名称，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_company_org_ids" IS '上级公司企业组织ID列表，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."parent_company_org_names" IS '上级公司企业组织名称，多个用逗号分隔';
COMMENT ON COLUMN "public"."org_organization"."contact_person" IS '联系人姓名';
COMMENT ON COLUMN "public"."org_organization"."contact_phone" IS '联系电话';
COMMENT ON COLUMN "public"."org_organization"."contact_fax" IS '传真号码';
COMMENT ON COLUMN "public"."org_organization"."contact_email" IS '电子邮箱';
COMMENT ON COLUMN "public"."org_organization"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."org_organization"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."org_organization"."subordinate_count" IS '下辖人数';
COMMENT ON COLUMN "public"."org_organization"."creater" IS '创建者';
COMMENT ON COLUMN "public"."org_organization"."creater_id" IS '创建者ID';
COMMENT ON COLUMN "public"."org_organization"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."org_organization"."updater" IS '更新者';
COMMENT ON COLUMN "public"."org_organization"."updater_id" IS '更新者ID';
COMMENT ON COLUMN "public"."org_organization"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."org_organization"."creater_org_id" IS '创建者组织ID';
COMMENT ON COLUMN "public"."org_organization"."creater_org_name" IS '创建者组织名称';
COMMENT ON COLUMN "public"."org_organization"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."org_organization"."local_signature" IS '本地签名（SM2，用于批量验签）';
COMMENT ON COLUMN "public"."org_organization"."local_signature_version" IS '本地签名版本号';
COMMENT ON COLUMN "public"."org_organization"."signature" IS '一体化签名';
COMMENT ON COLUMN "public"."org_organization"."signature_version" IS '一体化签名版本号';
COMMENT ON TABLE "public"."org_organization" IS '组织机构表';

-- ----------------------------

-- Indexes structure for table org_organization
-- ----------------------------
CREATE INDEX "idx_org_organization_area_min_code" ON "public"."org_organization" USING btree (
  "area_min_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
) WHERE area_min_code IS NOT NULL AND deleted = 0;
CREATE INDEX "idx_org_organization_level" ON "public"."org_organization" USING btree (
  "level" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_organization_org_name" ON "public"."org_organization" USING btree (
  "org_name" COLLATE "pg_catalog"."default" "pg_catalog"."varchar_pattern_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_organization_parent_order" ON "public"."org_organization" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST,
  "display_order" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_organization_status" ON "public"."org_organization" USING btree (
  "status" "pg_catalog"."int4_ops" ASC NULLS LAST,
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_org_organization_org_type_id" ON "public"."org_organization" USING btree (
  "org_type_id" "pg_catalog"."int8_ops" ASC NULLS LAST
) WHERE org_type_id IS NOT NULL AND deleted = 0;

-- Primary Key structure for table org_organization
-- ----------------------------
ALTER TABLE "public"."org_organization" ADD CONSTRAINT "org_organization_pkey" PRIMARY KEY ("org_id");

-- ----------------------------
`;export{a as o};
