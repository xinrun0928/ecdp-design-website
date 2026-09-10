const i=`-- Table structure for flood_basic_section
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_basic_section";
CREATE TABLE "public"."flood_basic_section" (
  "section_id" bigint NOT NULL,
  "route_id" bigint,
  "org_id" bigint,
  "area_code" varchar(20) COLLATE "pg_catalog"."default",
  "struct_id" varchar(50) COLLATE "pg_catalog"."default",
  "struct_name" varchar(255) COLLATE "pg_catalog"."default",
  "line_no" varchar(100) COLLATE "pg_catalog"."default",
  "section_no" varchar(100) COLLATE "pg_catalog"."default",
  "section_name" varchar(255) COLLATE "pg_catalog"."default",
  "alias_name" varchar(255) COLLATE "pg_catalog"."default",
  "origin_pile_no" varchar(100) COLLATE "pg_catalog"."default",
  "end_pile_no" varchar(100) COLLATE "pg_catalog"."default",
  "origin_pos" varchar(255) COLLATE "pg_catalog"."default",
  "end_pos" varchar(255) COLLATE "pg_catalog"."default",
  "lane_num" integer,
  "grade" smallint,
  "external_section_id" varchar(100) COLLATE "pg_catalog"."default",
  "direct_list" text COLLATE "pg_catalog"."default",
  "sync_type" smallint DEFAULT 0,
  "sync_time" timestamp(6),
  "status" smallint DEFAULT 1101,
  "display_order" integer DEFAULT 0,
  "user_id" bigint,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0,
  "area_codes" varchar(500) COLLATE "pg_catalog"."default",
  "area_names" varchar(500) COLLATE "pg_catalog"."default",
  "inspection_mileage" varchar(255) COLLATE "pg_catalog"."default",
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 0
)
;
ALTER TABLE "public"."flood_basic_section" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_basic_section"."section_id" IS '路段ID';
COMMENT ON COLUMN "public"."flood_basic_section"."route_id" IS '归属路线ID（关联flood_basic_route）';
COMMENT ON COLUMN "public"."flood_basic_section"."org_id" IS '归属组织ID';
COMMENT ON COLUMN "public"."flood_basic_section"."area_code" IS '所属区域编码';
COMMENT ON COLUMN "public"."flood_basic_section"."struct_id" IS '所属管理组织架构ID';
COMMENT ON COLUMN "public"."flood_basic_section"."struct_name" IS '所属管理组织架构名称';
COMMENT ON COLUMN "public"."flood_basic_section"."line_no" IS '所属路线编号';
COMMENT ON COLUMN "public"."flood_basic_section"."section_no" IS '路段编号';
COMMENT ON COLUMN "public"."flood_basic_section"."section_name" IS '路段名称';
COMMENT ON COLUMN "public"."flood_basic_section"."alias_name" IS '路段别名';
COMMENT ON COLUMN "public"."flood_basic_section"."origin_pile_no" IS '起点桩号';
COMMENT ON COLUMN "public"."flood_basic_section"."end_pile_no" IS '终点桩号';
COMMENT ON COLUMN "public"."flood_basic_section"."origin_pos" IS '起点位置';
COMMENT ON COLUMN "public"."flood_basic_section"."end_pos" IS '终点位置';
COMMENT ON COLUMN "public"."flood_basic_section"."lane_num" IS '车道数量';
COMMENT ON COLUMN "public"."flood_basic_section"."grade" IS '公路技术等级（1-高速公路 2-普通公路）';
COMMENT ON COLUMN "public"."flood_basic_section"."external_section_id" IS '第三方系统路段ID';
COMMENT ON COLUMN "public"."flood_basic_section"."direct_list" IS '方向数据列表（JSON格式）';
COMMENT ON COLUMN "public"."flood_basic_section"."sync_type" IS '同步类型（0-手动添加 1-接口同步）';
COMMENT ON COLUMN "public"."flood_basic_section"."sync_time" IS '同步时间';
COMMENT ON COLUMN "public"."flood_basic_section"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_basic_section"."display_order" IS '排序号';
COMMENT ON COLUMN "public"."flood_basic_section"."user_id" IS '用户ID（冗余，关联org_user）';
COMMENT ON COLUMN "public"."flood_basic_section"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_basic_section"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_basic_section"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_basic_section"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_basic_section"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_basic_section"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_basic_section"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_basic_section"."area_codes" IS '归属地区编码列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."flood_basic_section"."area_names" IS '归属地区名称列表，多个用英文逗号分隔';
COMMENT ON COLUMN "public"."flood_basic_section"."inspection_mileage" IS '巡查里程（km）';
COMMENT ON COLUMN "public"."flood_basic_section"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_basic_section"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_basic_section" IS '巡检路段信息表';

-- ----------------------------

-- Indexes structure for table flood_basic_section
-- ----------------------------
CREATE INDEX "idx_flood_basic_section_deleted" ON "public"."flood_basic_section" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_flood_basic_section_route_id" ON "public"."flood_basic_section" USING btree (
  "route_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_basic_section
-- ----------------------------
ALTER TABLE "public"."flood_basic_section" ADD CONSTRAINT "flood_basic_section_pkey" PRIMARY KEY ("section_id");

-- ----------------------------
`,o=`-- Table structure for flood_basic_section_org_rel
-- ----------------------------
DROP TABLE IF EXISTS "public"."flood_basic_section_org_rel";
CREATE TABLE "public"."flood_basic_section_org_rel" (
  "id" bigint NOT NULL,
  "section_id" bigint NOT NULL,
  "org_id" bigint NOT NULL,
  "org_name" varchar(128) COLLATE "pg_catalog"."default",
  "user_id" bigint,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 0
)
;
ALTER TABLE "public"."flood_basic_section_org_rel" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."id" IS '主键ID';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."section_id" IS '路段ID';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."org_id" IS '组织ID';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."org_name" IS '组织名称';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."user_id" IS '用户ID';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_basic_section_org_rel"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_basic_section_org_rel" IS '巡查路段组织绑定关系表';

-- ----------------------------

-- Primary Key structure for table flood_basic_section_org_rel
-- ----------------------------
ALTER TABLE "public"."flood_basic_section_org_rel" ADD CONSTRAINT "flood_basic_section_org_rel_pkey" PRIMARY KEY ("id");

-- ----------------------------
`;export{o as a,i as f};
