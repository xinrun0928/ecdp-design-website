import{i as pe,j as ie,k as se,l as me,o as ce,I as _e,n as fe,a as he,p as Oe,r as Te,b as Ne}from"./index-Dz8cBk7z.js";import{ax as be,b as ge,ai as ye,aD as Ce,aE as Me,aR as Ee,a4 as Le,F as Ie,aO as ve,aQ as Ue,p as k}from"./element-plus-D60thvil.js";/* empty css                     *//* empty css                       */import{m as D,a as w,f as E}from"./floodMenuData-B0E1JDHn.js";import{s as Ve}from"./common-Bz-Eyofd.js";import{G as Se,l as Ae,O as m,W as u,j as c,aj as F,g as xe,L as p,a0 as a,_ as L,$ as _,M as b,v as O,R as ke,Y as R,Z as I,P as g,u as De,c as B}from"./vue-vendor-Dq7Ldkyc.js";import"./randomMock-BnXBY1mw.js";const we=`DROP TABLE IF EXISTS "public"."flood_auth_menu";
CREATE TABLE "public"."flood_auth_menu" (
  "menu_id" bigint NOT NULL,
  "parent_id" bigint,
  "menu_name" varchar(100) COLLATE "pg_catalog"."default",
  "menu_code" varchar(100) COLLATE "pg_catalog"."default",
  "menu_type" smallint,
  "content_type" smallint,
  "icon" varchar(255) COLLATE "pg_catalog"."default",
  "path" varchar(255) COLLATE "pg_catalog"."default",
  "component" varchar(255) COLLATE "pg_catalog"."default",
  "display_order" integer DEFAULT 0,
  "status" smallint DEFAULT 1101,
  "remark" varchar(500) COLLATE "pg_catalog"."default",
  "ext" varchar(500) COLLATE "pg_catalog"."default",
  "hidden" smallint DEFAULT 0,
  "creater" varchar(64) COLLATE "pg_catalog"."default",
  "create_time" timestamp(6) DEFAULT pg_systimestamp(),
  "updater" varchar(64) COLLATE "pg_catalog"."default",
  "update_time" timestamp(6) DEFAULT pg_systimestamp(),
  "deleted" smallint DEFAULT 0,
  "signature" varchar(500) COLLATE "pg_catalog"."default",
  "signature_version" integer DEFAULT 0,
  "local_signature" varchar(500) COLLATE "pg_catalog"."default",
  "local_signature_version" integer DEFAULT 1
)
;
ALTER TABLE "public"."flood_auth_menu" OWNER TO "postgres";
COMMENT ON COLUMN "public"."flood_auth_menu"."menu_id" IS '菜单ID';
COMMENT ON COLUMN "public"."flood_auth_menu"."parent_id" IS '父菜单ID';
COMMENT ON COLUMN "public"."flood_auth_menu"."menu_name" IS '菜单名称';
COMMENT ON COLUMN "public"."flood_auth_menu"."menu_code" IS '权限值（权限标识）';
COMMENT ON COLUMN "public"."flood_auth_menu"."menu_type" IS '菜单类型（0-目录；1-菜单；2-按钮；99-导航）';
COMMENT ON COLUMN "public"."flood_auth_menu"."content_type" IS '内容类型（1-菜单页面；2-大屏；3-嵌入页面；4-外部链接）';
COMMENT ON COLUMN "public"."flood_auth_menu"."icon" IS '菜单图标';
COMMENT ON COLUMN "public"."flood_auth_menu"."path" IS '路由地址';
COMMENT ON COLUMN "public"."flood_auth_menu"."component" IS '组件路径';
COMMENT ON COLUMN "public"."flood_auth_menu"."display_order" IS '排序字段';
COMMENT ON COLUMN "public"."flood_auth_menu"."status" IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN "public"."flood_auth_menu"."remark" IS '备注信息';
COMMENT ON COLUMN "public"."flood_auth_menu"."ext" IS '扩展字段';
COMMENT ON COLUMN "public"."flood_auth_menu"."hidden" IS '是否隐藏（0-显示；1-隐藏）';
COMMENT ON COLUMN "public"."flood_auth_menu"."creater" IS '创建者';
COMMENT ON COLUMN "public"."flood_auth_menu"."create_time" IS '创建时间';
COMMENT ON COLUMN "public"."flood_auth_menu"."updater" IS '更新者';
COMMENT ON COLUMN "public"."flood_auth_menu"."update_time" IS '更新时间';
COMMENT ON COLUMN "public"."flood_auth_menu"."deleted" IS '逻辑删除标志（0正常 1删除）';
COMMENT ON COLUMN "public"."flood_auth_menu"."signature" IS '数据签名';
COMMENT ON COLUMN "public"."flood_auth_menu"."signature_version" IS '签名版本号';
COMMENT ON COLUMN "public"."flood_auth_menu"."local_signature" IS '数据签名（本地）';
COMMENT ON COLUMN "public"."flood_auth_menu"."local_signature_version" IS '签名版本号（本地）';
COMMENT ON TABLE "public"."flood_auth_menu" IS '巡检菜单表';

-- ----------------------------

-- Indexes structure for table flood_auth_menu
-- ----------------------------
CREATE INDEX "idx_flood_auth_menu_deleted" ON "public"."flood_auth_menu" USING btree (
  "deleted" "pg_catalog"."int2_ops" ASC NULLS LAST
);
CREATE INDEX "idx_flood_auth_menu_menu_code" ON "public"."flood_auth_menu" USING btree (
  "menu_code" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);
CREATE INDEX "idx_flood_auth_menu_parent_id" ON "public"."flood_auth_menu" USING btree (
  "parent_id" "pg_catalog"."int8_ops" ASC NULLS LAST
);

-- Primary Key structure for table flood_auth_menu
-- ----------------------------
ALTER TABLE "public"."flood_auth_menu" ADD CONSTRAINT "flood_auth_menu_pkey" PRIMARY KEY ("menu_id");

-- ----------------------------
`,Fe={class:"menu-name"},Re={key:0,class:"overflow-text"},Be={key:1,class:"empty-text"},Pe={key:0,class:"overflow-text"},We={key:1,class:"empty-text"},$e={class:"icon-input__text"},qe=Se({__name:"Menu",setup(je){const v=[{label:"菜单页面",value:1},{label:"大屏",value:2},{label:"嵌入页面",value:3},{label:"外部链接",value:4}],P=[{label:"显示",value:0},{label:"隐藏",value:1}],y=c(!1),s=c(!1),f=c(!1),T=c(),U=c(),C=c(""),e=De({menuId:0,parentId:0,menuName:"",menuCode:"",menuType:1,contentType:1,icon:"",path:"",component:"",displayOrder:0,status:1101,hidden:0,remark:"",ext:""}),W={menuName:[{required:!0,message:"请输入菜单名称",trigger:"blur"}],menuType:[{required:!0,message:"请选择菜单类型",trigger:"change"}]};function M(n,t=0){return n.filter(o=>o.parentId===t).sort((o,d)=>o.displayOrder-d.displayOrder).map(o=>{const d=M(n,o.menuId),i={...o};return d.length>0&&(i.children=d),i})}function $(n){const t=[];function o(d){for(const i of d)t.push(i),i.children&&i.children.length>0&&o(i.children)}return o(n),t}const q=B(()=>{const n=C.value.trim().toLowerCase();if(!n)return M(E,0);const o=$(E).filter(d=>d.menuName.toLowerCase().includes(n));return M(o,0)}),j=B(()=>{const n=t=>E.filter(o=>o.parentId===t&&o.menuType!==2).map(o=>({menuId:o.menuId,menuName:o.menuName,children:n(o.menuId)}));return[{menuId:0,menuName:"顶级菜单",children:n(0)}]}),z=[{prop:"menuName",label:"菜单名称",minWidth:255,align:"left",headerAlign:"left",slot:"menuName"},{prop:"menuCode",label:"权限标识",minWidth:220,align:"center",cellType:"code",showOverflowTooltip:!0},{prop:"menuType",label:"类型",width:80,align:"center",slot:"menuType"},{prop:"path",label:"路由地址",minWidth:200,align:"left",showOverflowTooltip:!0,slot:"path"},{prop:"component",label:"组件路径",minWidth:200,align:"left",showOverflowTooltip:!0,slot:"component"},{prop:"displayOrder",label:"排序",width:60,align:"center"},{prop:"contentType",label:"内容类型",width:100,align:"center",formatter:n=>{var t;return((t=v.find(o=>o.value===n.contentType))==null?void 0:t.label)||"-"}},{prop:"hidden",label:"是否隐藏",width:90,align:"center",formatter:n=>n.hidden===1?"隐藏":"显示"},{prop:"status",label:"状态",width:80,align:"center",slot:"status"},{prop:"remark",label:"备注",minWidth:150,align:"center",showOverflowTooltip:!0},{prop:"creater",label:"创建人",width:100,align:"center",cellType:"secondary"},{prop:"createTime",label:"创建时间",width:175,align:"center",cellType:"secondary"},{prop:"updater",label:"更新人",width:100,align:"center",cellType:"secondary"},{prop:"updateTime",label:"更新时间",width:175,align:"center",cellType:"secondary"},{label:"操作",width:60,fixed:"right",align:"center",slot:"actions"}];function G(n){const t=[];return t.push({label:"编辑",icon:Ie,handler:o=>Q(o)}),n.menuType!==2&&t.push({label:"子菜单",icon:ve,handler:o=>V(o)}),t.push({label:"删除",icon:Ue,divided:!0,handler:o=>H(o)}),t}function X(n){return D[n]||"#909399"}function K(){var n;(n=U.value)==null||n.open()}function Y(){}function V(n){f.value=!1,e.menuId=0,e.parentId=n?n.menuId:0,e.menuName="",e.menuCode="",e.menuType=n?n.menuType===0?1:n.menuType:0,e.icon="",e.path="",e.component="",e.displayOrder=0,e.contentType=1,e.hidden=0,e.status=1101,e.remark="",e.ext="",s.value=!0}function Q(n){f.value=!0,e.menuId=n.menuId,e.parentId=n.parentId,e.menuName=n.menuName,e.menuCode=n.menuCode,e.menuType=n.menuType,e.icon=n.icon??"",e.path=n.path??"",e.component=n.component??"",e.displayOrder=n.displayOrder,e.contentType=n.contentType??1,e.hidden=n.hidden??0,e.status=n.status,e.remark=n.remark??"",e.ext=n.ext??"",s.value=!0}function Z(){T.value&&T.value.validate(n=>{n&&(k.success(f.value?"编辑成功":"新增成功"),s.value=!1)})}async function H(n){await Te(n.menuName)&&k.success("删除成功")}function J(){var n;(n=T.value)==null||n.resetFields()}return Ae(()=>{var t;const n=(t=xe())==null?void 0:t.appContext.app;n&&Object.entries(be).forEach(([o,d])=>{n.component(o,d)}),y.value=!0;try{}finally{y.value=!1}}),(n,t)=>{const o=F("table-structure-drawer"),d=Oe,i=he,S=ge,ee=ye,A=se,ne=ie,te=pe,le=Ee,r=Me,N=ce,h=Le,ae=fe,oe=Ce,ue=me,de=F("panel-layout");return p(),m(de,{title:"菜单管理"},{"title-extra":u(()=>[a(o,{sql:O(we)},null,8,["sql"])]),search:u(()=>[a(d,{modelValue:C.value,"onUpdate:modelValue":t[0]||(t[0]=l=>C.value=l),placeholder:"搜索菜单名称",onSearch:Y},null,8,["modelValue"])]),actions:u(()=>[a(i,{"margin-left":10,onClick:t[1]||(t[1]=l=>V(null))},{default:u(()=>[...t[15]||(t[15]=[L("新增菜单",-1)])]),_:1})]),default:u(()=>[a(te,{"show-index":!1,"show-pagination":!1,"show-tool-bar":!1,data:q.value,columns:z,"row-key":"menuId","tree-props":{children:"children",hasChildren:"hasChildren"},"default-expand-all":!0,indent:24,loading:y.value,"empty-text":" "},{menuName:u(({row:l})=>[l.icon?(p(),m(S,{key:0,class:"menu-icon",style:ke({color:X(l.menuType)})},{default:u(()=>[(p(),m(R(l.icon)))]),_:2},1032,["style"])):I("",!0),a(ee,{content:l.menuName,placement:"top"},{default:u(()=>[g("span",Fe,_(l.menuName),1)]),_:2},1032,["content"])]),menuType:u(({row:l})=>[a(A,{color:O(D)[l.menuType],effect:"dark",round:"",size:"small"},{default:u(()=>{var x;return[L(_(((x=O(w).find(re=>re.value===l.menuType))==null?void 0:x.label)||"未知"),1)]}),_:2},1032,["color"])]),path:u(({row:l})=>[l.path?(p(),b("span",Re,_(l.path),1)):(p(),b("span",Be,"-"))]),component:u(({row:l})=>[l.component?(p(),b("span",Pe,_(l.component),1)):(p(),b("span",We,"-"))]),status:u(({row:l})=>[a(A,{size:"small",type:l.status===1101?"success":"info"},{default:u(()=>[L(_(l.status===1101?"正常":"停用"),1)]),_:2},1032,["type"])]),actions:u(({row:l})=>[a(ne,{items:G(l),row:l},null,8,["items","row"])]),_:1},8,["data","loading"]),s.value?(p(),m(ue,{key:0,modelValue:s.value,"onUpdate:modelValue":t[14]||(t[14]=l=>s.value=l),title:f.value?"编辑菜单":"新增菜单",size:"520px",direction:"rtl","destroy-on-close":"","confirm-text":f.value?"保存修改":"确认创建","on-confirm":Z,onClosed:J},{default:u(()=>[a(oe,{ref_key:"formRef",ref:T,model:e,rules:W,"label-width":"100px","label-position":"right"},{default:u(()=>[a(r,{label:"上级菜单",prop:"parentId"},{default:u(()=>[a(le,{modelValue:e.parentId,"onUpdate:modelValue":t[2]||(t[2]=l=>e.parentId=l),data:j.value,props:{label:"menuName",value:"menuId",children:"children"},"check-strictly":"","render-after-expand":!1,placeholder:"请选择上级菜单（不选则为顶级）",clearable:""},null,8,["modelValue","data"])]),_:1}),a(r,{label:"菜单类型",prop:"menuType"},{default:u(()=>[a(N,{modelValue:e.menuType,"onUpdate:modelValue":t[3]||(t[3]=l=>e.menuType=l),options:O(w)},null,8,["modelValue","options"])]),_:1}),a(r,{label:"菜单名称",prop:"menuName"},{default:u(()=>[a(h,{modelValue:e.menuName,"onUpdate:modelValue":t[4]||(t[4]=l=>e.menuName=l),placeholder:"请输入菜单名称",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),a(r,{label:"权限标识",prop:"menuCode"},{default:u(()=>[a(h,{modelValue:e.menuCode,"onUpdate:modelValue":t[5]||(t[5]=l=>e.menuCode=l),placeholder:"如：flood:admin:system:role",maxlength:"100","show-word-limit":""},null,8,["modelValue"])]),_:1}),a(r,{label:"路由地址",prop:"path"},{default:u(()=>[a(h,{modelValue:e.path,"onUpdate:modelValue":t[6]||(t[6]=l=>e.path=l),placeholder:"如：/admin/system/role",clearable:""},null,8,["modelValue"])]),_:1}),a(r,{label:"组件路径",prop:"component"},{default:u(()=>[a(h,{modelValue:e.component,"onUpdate:modelValue":t[7]||(t[7]=l=>e.component=l),placeholder:"如：admin/role/index",clearable:""},null,8,["modelValue"])]),_:1}),a(r,{label:"菜单图标",prop:"icon"},{default:u(()=>[g("div",{class:"icon-input",onClick:K},[e.icon?(p(),m(S,{key:0,class:"icon-input__icon"},{default:u(()=>[(p(),m(R(e.icon)))]),_:1})):I("",!0),g("span",$e,_(e.icon||"点击选择图标"),1)]),a(_e,{ref_key:"iconPickerRef",ref:U,modelValue:e.icon,"onUpdate:modelValue":t[8]||(t[8]=l=>e.icon=l)},null,8,["modelValue"])]),_:1}),a(r,{label:"排序",prop:"displayOrder"},{default:u(()=>[a(ae,{modelValue:e.displayOrder,"onUpdate:modelValue":t[9]||(t[9]=l=>e.displayOrder=l),min:0,max:9999,width:"180px"},null,8,["modelValue"]),t[16]||(t[16]=g("span",{class:"form-tip-inline"},"数值越小越靠前",-1))]),_:1}),a(r,{label:"内容类型",prop:"contentType"},{default:u(()=>[a(N,{modelValue:e.contentType,"onUpdate:modelValue":t[10]||(t[10]=l=>e.contentType=l),options:v},null,8,["modelValue"])]),_:1}),a(r,{label:"是否隐藏",prop:"hidden"},{default:u(()=>[a(N,{modelValue:e.hidden,"onUpdate:modelValue":t[11]||(t[11]=l=>e.hidden=l),options:P},null,8,["modelValue"])]),_:1}),a(r,{label:"状态",prop:"status"},{default:u(()=>[a(N,{modelValue:e.status,"onUpdate:modelValue":t[12]||(t[12]=l=>e.status=l),options:O(Ve)},null,8,["modelValue","options"])]),_:1}),a(r,{label:"备注",prop:"remark"},{default:u(()=>[a(h,{modelValue:e.remark,"onUpdate:modelValue":t[13]||(t[13]=l=>e.remark=l),type:"textarea",rows:3,placeholder:"请输入备注信息",maxlength:"500","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title","confirm-text"])):I("",!0)]),_:1})}}}),Je=Ne(qe,[["__scopeId","data-v-c9bbe7d2"]]);export{Je as default};
