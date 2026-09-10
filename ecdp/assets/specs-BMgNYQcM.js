import{aG as l,bi as p,bd as u,aK as m,aC as g,ac as S,ae as T,an as y,ab as E}from"./element-plus-Bt8i1BPk.js";const R=`# 异常处理规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-29
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

---

## 目录

- [一、全局异常处理器](#一全局异常处理器)
- [二、错误码体系](#二错误码体系)
- [三、服务韧性](#三服务韧性)
- [四、事务管理](#四事务管理)
- [五、设计意图](#五设计意图)

---

## 一、全局异常处理器

### 1.1 GlobalBizExceptionHandler

全局异常处理器位于 \`ecdp-common-feign\`，使用 \`@RestControllerAdvice\` 注解：

\`\`\`java
@RestControllerAdvice
public class GlobalBizExceptionHandler {
    // ...
}
\`\`\`

### 1.2 异常类型 → HTTP 状态码映射表

| 异常类型 | HTTP 状态码 | 说明 |
|---------|------------|------|
| \`MissingServletRequestParameterException\` | 500 | 缺少请求参数 |
| \`MethodArgumentNotValidException\` | 400 | 参数校验失败 |
| \`BindException\` | 400 | 参数绑定失败 |
| \`MethodArgumentTypeMismatchException\` | 400 | 参数类型不匹配 |
| \`HttpMessageNotReadableException\` | 400 | 请求体不可读 |
| \`BadCredentialsException\` | 401 | 认证失败 |
| \`AccessDeniedException\` | 403 | 权限不足 |
| \`NoResourceFoundException\` | 404 | 资源不存在 |
| \`HttpRequestMethodNotSupportedException\` | 405 | 请求方法不支持 |
| \`ServiceException\` | 200 | 业务异常（code 非 200） |
| \`IllegalArgumentException\` | 200 | 非法参数异常（业务层抛出） |
| \`NoHandlerFoundException\` | 500 | 请求路径无处理器 |
| \`Exception\` / \`Throwable\` | 500 | 未知异常 |

### 1.3 异常处理响应格式

\`\`\`json
// 参数校验失败（HTTP 400）
{
  "code": 400,
  "message": "角色名称不能为空",
  "success": false,
  "data": null,
  "timestamp": 1713619200000
}

// 业务异常（HTTP 200）
{
  "code": 20001,
  "message": "该企业下已存在相同角色编码的角色",
  "success": false,
  "data": null,
  "timestamp": 1713619200000
}

// 系统异常（HTTP 500）
{
  "code": 500,
  "message": "服务器内部错误",
  "success": false,
  "data": null,
  "timestamp": 1713619200000
}
\`\`\`

### 1.4 业务异常抛出方式

\`\`\`java
// 使用 ErrorCode 枚举抛出
throw new ServiceException(FloodInspectionErrorCode.ORG_NOT_FOUND, "组织不存在");

// 直接抛出（使用默认错误码）
throw new ServiceException("参数错误");

// 带错误码和消息
throw new ServiceException(ErrorCode.SYSTEM_ERROR, "系统繁忙，请稍后重试");
\`\`\`

---

## 二、错误码体系

### 2.1 错误码格式

项目采用 5 位错误码格式：**服务标识(1位) + 模块标识(2位) + 具体错误码(2位)**

\`\`\`
┌─────────────────────────────────┐
│  服务标识  │  模块标识  │  具体错误码  │
│   1位     │   2位     │    2位       │
└─────────────────────────────────┘
\`\`\`

### 2.2 模块错误码范围

| 模块 | 错误码接口 | 错误码范围 | 说明 |
|------|-----------|-----------|------|
| 安全/认证 | \`SecurityErrorCode\` | 11001-12706 | 认证失败、Token 无效、权限不足等 |
| 防汛检查 | \`FloodInspectionErrorCode\` | 20001-20301 | 巡查任务、组织管理等业务错误 |

> **说明**：其他业务模块（值守、预案、事件、调度、物资、决策支持、数据融合、第三方集成）的错误码待各模块实现后补充。通用错误码通过 \`ServiceException\` + HTTP 状态码处理，未单独定义 ErrorCode 枚举。

### 2.3 ErrorCode 接口规范

\`\`\`java
/**
 * 错误码接口
 */
public interface ErrorCode {
    /**
     * 获取错误码
     */
    Integer getCode();

    /**
     * 获取错误消息
     */
    String getMessage();
}
\`\`\`

### 2.4 错误码枚举示例

\`\`\`java
public enum FloodInspectionErrorCode implements ErrorCode {

    ORG_NOT_FOUND(20001, "组织不存在"),
    ORG_DUPLICATE(20002, "组织编码重复"),
    TASK_NOT_FOUND(20101, "巡查任务不存在"),
    SECTION_NOT_FOUND(20201, "路段不存在"),
    PILE_NOT_FOUND(20301, "桩号不存在");

    private final Integer code;
    private final String message;

    FloodInspectionErrorCode(Integer code, String message) {
        this.code = code;
        this.message = message;
    }

    @Override
    public Integer getCode() {
        return code;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
\`\`\`

### 2.5 SecurityErrorCode 速查

| 错误码 | 常量名 | 说明 |
|--------|--------|------|
| 11001 | \`AUTH_CREDENTIALS_INVALID\` | 用户名或密码错误 |
| 11002 | \`AUTH_ACCOUNT_DISABLED\` | 账号已停用 |
| 11003 | \`AUTH_ACCOUNT_LOCKED\` | 账号已锁定 |
| 11004 | \`AUTH_ACCOUNT_EXPIRED\` | 账号已过期 |
| 11101 | \`TOKEN_INVALID\` | Token 无效 |
| 11102 | \`TOKEN_EXPIRED\` | Token 已过期 |
| 11201 | \`PERMISSION_DENIED\` | 权限不足 |

### 2.6 FloodInspectionErrorCode 速查

| 错误码 | 常量名 | 说明 |
|--------|--------|------|
| 20001 | \`ORG_NOT_FOUND\` | 组织不存在 |
| 20002 | \`ORG_DUPLICATE\` | 组织编码重复 |
| 20101 | \`TASK_NOT_FOUND\` | 巡查任务不存在 |
| 20201 | \`SECTION_NOT_FOUND\` | 路段不存在 |
| 20301 | \`PILE_NOT_FOUND\` | 桩号不存在 |

---

## 三、服务韧性

### 3.1 Sentinel 熔断

#### 当前状态

\`ecdp-common-feign\` 已引入 \`spring-cloud-starter-alibaba-sentinel\` 依赖，但当前**未配置 FallbackFactory**。

#### 熔断降级配置模板

\`\`\`java
@FeignClient(contextId = "remoteXxxService",
             value = "ecdp-xxx",
             fallbackFactory = RemoteXxxServiceFallbackFactory.class)
public interface RemoteXxxService { ... }

// FallbackFactory 实现
@Component
public class RemoteXxxServiceFallbackFactory
        implements FallbackFactory<RemoteXxxService> {

    private static final Logger log = LoggerFactory.getLogger(RemoteXxxServiceFallbackFactory.class);

    @Override
    public RemoteXxxService create(Throwable cause) {
        return new RemoteXxxService() {
            @Override
            public ApiResult<XxxResponse> getXxx(Long id) {
                log.error("调用 RemoteXxxService 失败，熔断降级", cause);
                return ApiResult.fail("服务暂时不可用，请稍后重试");
            }
        };
    }
}
\`\`\`

#### Sentinel 配置

\`\`\`yaml
spring:
  cloud:
    sentinel:
      enabled: true
      transport:
        dashboard: localhost:8080
      filter:
        enabled: true
\`\`\`

> **重要**：生产环境上线前必须为关键 Feign 调用补充降级逻辑。

### 3.2 Feign 重试

通过 \`application.yml\` 配置 Feign 重试策略：

\`\`\`yaml
feign:
  client:
    config:
      default:
        connectTimeout: 5000
        readTimeout: 10000
        retryer: feign.Retryer.Default
\`\`\`

### 3.3 熔断策略说明

| 策略 | 说明 |
|------|------|
| 慢调用比例 | 慢调用比例超过阈值时触发熔断 |
| 异常比例 | 异常比例超过阈值时触发熔断 |
| 异常数 | 异常数量超过阈值时触发熔断 |

### 3.4 当前未启用状态说明

当前所有 \`Remote*Service\` Feign 接口均未配置 \`fallbackFactory\`，需在生产环境上线前为关键 Feign 调用补充降级逻辑。

---

## 四、事务管理

### 4.1 本地事务

单服务内多表操作使用 \`@Transactional\`：

\`\`\`java
@Transactional(rollbackFor = Exception.class)
public boolean saveRole(SysRoleRequest request) {
    // 多表操作在同一事务中
    SysRole role = new SysRole();
    role.setRoleId(IdGenerator.idKey());
    role.setName(request.getName());
    role.setCode(request.getCode());
    role.setEntId(request.getEntId());

    // 插入角色
    roleMapper.insert(role);

    // 插入角色权限关联
    roleMenuMapper.delete(new LambdaQueryWrapper<SysRoleMenu>()
            .eq(SysRoleMenu::getRoleId, role.getRoleId()));
    if (CollectionUtils.isNotEmpty(request.getMenuIds())) {
        List<SysRoleMenu> roleMenus = request.getMenuIds().stream()
                .map(menuId -> {
                    SysRoleMenu rm = new SysRoleMenu();
                    rm.setRoleMenuId(IdGenerator.idKey());
                    rm.setRoleId(role.getRoleId());
                    rm.setMenuId(menuId);
                    return rm;
                }).toList();
        roleMenuMapper.insertBatch(roleMenus);
    }

    return true;
}
\`\`\`

### 4.2 事务传播行为

| 传播行为 | 说明 |
|----------|------|
| \`REQUIRED\`（默认） | 如果当前存在事务，则加入该事务；否则创建新事务 |
| \`REQUIRES_NEW\` | 每次都创建新事务，挂起当前事务 |
| \`NESTED\` | 如果当前存在事务，则在嵌套事务中执行；否则创建新事务 |

### 4.3 跨服务幂等

当前无分布式事务组件，跨服务一致性通过以下方式保证：

- **幂等设计**：Redis \`SETNX\` + 数据库唯一约束
- **最终一致性**：消息队列异步处理 + 补偿机制

### 4.4 最终一致性策略

#### 4.4.1 消息队列异步处理

\`\`\`
服务A（本地事务） → 发送消息 → MQ → 服务B消费 → 更新数据
     ↓
  失败回滚本地事务，消息不发送
\`\`\`

#### 4.4.2 补偿机制

\`\`\`java
// 定时任务扫描未完成的操作，执行补偿
@XxlJob("compensationJob")
public void compensation() {
    List<PendingOperation> pendingList = pendingMapper.selectUnfinished();

    for (PendingOperation pending : pendingList) {
        try {
            // 执行补偿逻辑
            remoteService.process(pending);
            pending.setStatus(2); // 已完成
        } catch (Exception e) {
            pending.setRetryCount(pending.getRetryCount() + 1);
            if (pending.getRetryCount() >= MAX_RETRY) {
                pending.setStatus(3); // 补偿失败
            }
        }
        pendingMapper.updateById(pending);
    }
}
\`\`\`

### 4.5 事务注意事项

| 注意事项 | 说明 |
|----------|------|
| \`rollbackFor\` | 必须指定 \`rollbackFor = Exception.class\`，确保非运行时异常也回滚 |
| 事务范围 | 事务边界不宜过大，避免长事务导致数据库连接占用 |
| 避免嵌套 | 避免在事务方法中调用远程服务或发送消息 |
| 只读事务 | 查询方法可使用 \`readOnly = true\` 优化性能 |

---

## 五、设计意图

### 解决的问题

异常信息不一致（有的抛 500 有的 code=200）、错误码碎片化。

### 正面收益（遵循规范）

- **前端统一错误处理**：HTTP 状态码 + 业务错误码双层结构，前端可区分「网络错误」和「业务错误」
- **错误可归因到模块/子系统**：5 位错误码格式，错误码前缀对应模块，排障时快速定位问题域
- **错误可追溯**：结合 \`@SysLog\` 操作日志，错误发生时可追溯到具体的操作用户、操作时间

### 负面代价（遵循规范）

- 错误码维护成本（新增错误码需同步文档）
- 错误码体系设计需要前期规划

### 不遵循的后果

- **前端无法区分「网络错误」和「业务错误」**：所有异常都返回 500，前端只能通过 message 文本判断，脆弱且易误判
- **生产排障困难**：无错误码体系，排查问题只能通过日志关键字搜索，效率低
- **国际化困难**：硬编码错误消息无法支持多语言

### 适用边界

- **必须遵守**：所有对外暴露的 HTTP 接口必须在 Controller 层处理异常
- **酌情变通**：内部服务间调用（Feign）的异常降级可简化处理
- **例外**：网关层异常（如 GatewayFilter 异常）由网关统一处理，不走业务服务的异常处理器

---

> **相关规范**
> - [服务间通信规范](./服务间通信规范.md) — Feign 降级、第三方对接
> - [接口设计规范](./接口设计规范.md) — 统一响应格式
`,b=`# 接口设计规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-29
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

---

## 目录

- [一、REST API 约定](#一rest-api-约定)
- [二、统一响应格式](#二统一响应格式)
- [三、入参与 Swagger 文档三件套](#三入参与-swagger-文档三件套)
- [四、返回值约束](#四返回值约束)
- [五、参数校验](#五参数校验)
- [六、OpenFeign 服务调用](#六openfeign-服务调用)
- [七、API 文档](#七api-文档)
- [八、权限字符串](#八权限字符串)
- [九、Controller 依赖注入风格](#九controller-依赖注入风格)
- [十、常用字段命名约定](#十常用字段命名约定)
- [十一、附件 JSON 字段存储规则](#十一附件-json-字段存储规则)
- [十二、签名 Key 构建规范](#十二签名-key-构建规范)
- [十三、设计意图](#十三设计意图)

---

## 一、REST API 约定

### 1.1 基本原则

1. **禁止路径参数**：禁止使用 \`/{id}\` 形式，统一使用查询参数或请求体
2. **正确的 HTTP 方法**：GET（查询）、POST（新增/分页/列表）、PUT（修改）、DELETE（删除）
3. **名词表示资源**：URL 使用资源名词，非动词

### 1.2 URL 命名规范

| 操作 | HTTP 方法 | URL 模式 | 示例 |
|------|-----------|---------|------|
| 根据 ID 查询 | GET | \`/findById?{key}={value}\` | \`/system/user/findById?userId=xxx\` |
| 分页查询 | POST | \`/page\` | \`/system/user/page\` |
| 列表查询 | POST | \`/list\` | \`/system/role/list\` |
| 新增 | POST | \`/save\` | \`/system/user/save\` |
| 修改 | PUT | \`/update\` | \`/system/user/update\` |
| 删除 | DELETE | \`/delete?{key}={value}\` | \`/system/user/delete?userId=xxx\` |
| 修改状态 | PUT | \`/updateStatus\` | \`/system/user/updateStatus\` |

### 1.3 参数传递方式

| 场景 | 注解 | 示例 |
|------|------|------|
| GET 查询 | 对象接收（Spring MVC 自动绑定查询参数） | \`page(SysUserPageRequest request)\` |
| POST 新增 | \`@RequestBody\` + \`@Valid\` | \`save(@Valid @RequestBody SysUserRequest request)\` |
| PUT 修改 | \`@RequestBody\` + \`@Valid\` | \`update(@Valid @RequestBody SysUserRequest request)\` |
| DELETE | \`@RequestParam\` | \`delete(@RequestParam Long userId)\` |

> **说明**：接口前缀（\`/backend\`、\`/mobile\`、\`/screen\`、\`/inner\`）已在 \`AGENTS.md\` 中定义，本规范聚焦 URL 命名与参数传递方式。

### 1.4 接口前缀规范

不同微服务的接口前缀按其定位划分：

| 前缀 | 端类型 | 说明 |
|------|--------|------|
| \`/backend\` | 后台管理端 | 业务微服务（路段、气象、预警等）使用 |
| \`/mobile\` | 移动端 | 供手机 APP、小程序等移动设备使用 |
| \`/screen\` | 大屏展示端 | 供数据可视化大屏、指挥中心大屏使用 |
| \`/inner\` | 内部接口 | 供微服务间 Feign 调用的内部接口 |

> **UPMS 服务特殊说明**：\`ecdp-upms\` 作为统一权限管理系统，其接口前缀**不使用 \`/backend\`**，直接以模块路径对外暴露，如 \`/system/user/page\`、\`/system/role/save\` 等。UPMS 的接口前缀规则已内置在网关路由配置中。

---

## 二、统一响应格式

### 2.1 ApiResult\\<T\\> 结构

所有接口统一返回 \`ApiResult<T>\` 包装格式：

\`\`\`json
// 成功响应
{
  "code": 200,
  "message": "操作成功",
  "success": true,
  "data": { ... },
  "timestamp": 1713619200000
}

// 失败响应
{
  "code": 500,
  "message": "该企业下已存在相同角色编码的角色",
  "success": false,
  "data": null,
  "timestamp": 1713619200000
}

// 分页响应
{
  "code": 200,
  "message": "",
  "success": false,
  "data": {
    "total": 100,
    "list": [...],
    "size": 10,
    "pages": 10
  },
  "timestamp": 1713619200000
}
\`\`\`

### 2.2 HTTP 状态码含义

| 状态码 | 含义 | 场景 |
|--------|------|------|
| 200 | 成功 | 正常业务处理 |
| 400 | 参数错误 | 校验失败、格式错误 |
| 401 | 未认证 | Token 缺失或无效 |
| 403 | 无权限 | Token 有效但无接口访问权限 |
| 404 | 资源不存在 | 查询的数据不存在 |
| 500 | 服务器错误 | 系统异常、未捕获的业务异常 |

> **重要**：\`ServiceException\` 返回 HTTP 200，通过 \`code\` 字段区分业务错误；其他异常返回对应的 HTTP 状态码。

### 2.3 分页响应

分页请求统一继承 \`PageRequest\`，分页结果使用 \`PageResult<T>\`：

\`\`\`java
// PageRequest — 分页请求基类
@Data
@Schema(description = "分页参数对象")
public class PageRequest implements Serializable {
    @Schema(description = "当前页码")
    private Long pageNum = 1L;

    @Schema(description = "每页显示记录条数")
    private Long pageSize = 10L;

    @Schema(description = "关键词检索")
    private String keyword;
}

// PageResult<T> — 分页响应
@Data
@Schema(description = "分页结果")
public class PageResult<T> implements Serializable {
    @Serial private static final long serialVersionUID = 1L;
    @Schema(description = "总记录数") private Long total;
    @Schema(description = "数据列表") private List<T> list;
    @Schema(description = "每页记录数") private Long size;
    @Schema(description = "总页数")   private Long pages;
}
\`\`\`

---

## 三、入参与 Swagger 文档三件套

### 3.1 入参对象化

1. **入参对象化**：除固定参数（如 \`findById\` 的 ID）允许 \`@RequestParam\` 外，**一律**使用 \`xxxRequest\` 对象接收，便于后续新增字段且保持接口签名稳定。
2. **固定参数也必须标注 Swagger 元数据**：使用 \`@RequestParam\` 时必须同步声明 \`@Parameter(description = "...", required = true)\`。
3. **对象参数使用 \`@ParameterObject\`**：GET 请求使用对象（\`XxxRequest\`）接收查询参数时，必须在参数前加 \`@ParameterObject\` 注解。

### 3.2 Swagger 文档三件套

| 注解 | 位置 | 作用 |
|------|------|------|
| \`@Operation\` | Controller 方法 | 接口说明，summary 用于菜单/列表标题，description 用于详情描述 |
| \`@Schema\` | DTO 类和字段 | 字段说明，与 \`/** */\` Javadoc 注释保持一致 |
| \`@ParameterObject\` | Controller 参数 | GET 请求对象参数展开 |

### 3.3 Controller 模板

\`\`\`java
@Operation(summary = "根据AppID查询App信息", description = "根据AppID查询App信息（仅返回未停用记录）")
@GetMapping("/findById")
public ApiResult<AppInfoResponse> findById(
        @RequestParam("appId") @Parameter(description = "AppID", required = true) Long appId) {
    return ApiResult.success(appInfoService.findById(appId));
}

@Operation(summary = "分页查询App信息", description = "支持按名称/状态/时间筛选")
@PostMapping("/page")
public ApiResult<PageResult<AppInfoResponse>> page(
        @RequestBody AppInfoPageRequest request) {
    IPage<AppInfoResponse> page = appInfoService.pageEntity(request);
    return ApiResult.success(DataUtil.convert(page));
}
\`\`\`

### 3.4 实体模板

\`\`\`java
@Data
@Schema(description = "App信息表")
public class AppInfoResponse implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    /** AppID（系统主键） */
    @Schema(description = "AppID（系统主键）")
    private Long appId;

    /** App 名称 */
    @Schema(description = "App 名称")
    private String appName;

    /** 状态（1101正常 1102停用） */
    @Schema(description = "状态（1101正常 1102停用）")
    private Integer status;
}
\`\`\`

---

## 四、返回值约束

### 4.1 强制禁止

| 禁止类型 | 原因 |
|----------|------|
| **禁止返回 \`Object\`** | 编译期失守，调用方无类型提示 |
| **禁止返回 \`Map<String, Object>\`** | Swagger 无法生成 schema，前端只能 \`key.toString()\` 盲调；前端无法按字段补全；结构随版本漂移 |
| **禁止直接返回 Entity** | 原实体含 \`local_signature\`/\`signature\` 等签名字段，直接返回会泄漏数据完整性信息 |

### 4.2 正例 vs 反例

\`\`\`java
// ❌ 反例 1：返回 Object（编译期失守）
public Object findById(Long id) { ... }

// ❌ 反例 2：返回 Map（Swagger 无法生成 schema）
public Map<String, Object> detail(Long id) { ... }

// ❌ 反例 3：直接返回 @TableName 实体（泄漏签名字段）
public SysUser detail(Long id) { return userService.getById(id); }

// ✅ 正例：返回 ApiResult<XxxResponse>
public ApiResult<XxxResponse> findById(XxxQueryRequest request) { ... }
\`\`\`

### 4.3 响应类型只暴露 xxxResponse

必须基于原实体构造 \`XxxResponse\`，按调用方需要筛选字段：

- **保留**：业务字段（\`name\`、\`code\`、\`status\` 等）
- **过滤**：签名字段（\`local_signature\` / \`signature\` / \`signature_version\` / \`local_signature_version\`）
- **过滤**：内部状态字段（\`deleted\`、\`create_time\` 等按业务决定是否对外）

---

## 五、参数校验

### 5.1 分组校验框架

项目定义 \`ValidGroup\` 分组接口，用于区分新增与编辑场景的校验规则：

\`\`\`java
package com.infoview.common.core.util;

/**
 * 校验类型
 */
public class ValidGroup {

    /** 插入组 */
    public static interface Insert {}

    /** 编辑组 */
    public static interface Update {}
}
\`\`\`

> \`@NotNull\`、\`@NotBlank\` 等校验注解通过 \`groups\` 属性指定所属分组，实现「新增时不校验 ID，编辑时必须校验 ID」的业务需求。

### 5.2 @Valid vs @Validated

|| 注解 | 作用域 | 嵌套校验 | 适用场景 |
|------|------|--------|----------|
| \`@Valid\` | 字段、方法参数 | 支持（递归校验嵌套对象） | 推荐用于 \`@RequestBody\` 对象 |
| \`@Validated\` | 类、方法参数 | 不支持 | 支持分组校验（\`groups\` 属性） |

> **强制要求**：Controller 层 POST/PUT 请求使用 \`@Validated\` + 分组，不使用无分组的 \`@Valid\`。

### 5.3 Request 类分组校验模板

使用 \`@Validated\` 注解配合校验分组：

\`\`\`java
@Data
@Schema(description = "角色信息请求")
public class SysRoleRequest implements Serializable {
    @Serial private static final long serialVersionUID = 1L;

    @Schema(description = "角色ID")
    @NotNull(message = "角色ID不能为空", groups = ValidGroup.Update.class)
    private Long roleId;

    @Schema(description = "角色名称")
    @NotBlank(message = "角色名称不能为空",
              groups = {ValidGroup.Insert.class, ValidGroup.Update.class})
    @Size(min = 2, max = 50, message = "角色名称长度为2-50个字符")
    private String name;
}
\`\`\`

### 5.4 Controller 校验模板

\`\`\`java
// 新增
public ApiResult<Void> save(
        @Validated({ValidGroup.Insert.class}) @RequestBody SysRoleRequest request) { ... }

// 更新
public ApiResult<Void> update(
        @Validated({ValidGroup.Update.class}) @RequestBody SysRoleRequest request) { ... }
\`\`\`

### 5.5 常用校验注解

| 注解 | 适用类型 | 说明 |
|------|----------|------|
| \`@NotBlank\` | String | 不能为 null 且不能为空 |
| \`@NotNull\` | 任意类型 | 不能为 null |
| \`@Size\` | String/Collection | 长度或大小范围 |
| \`@Min\` / \`@Max\` | 数值类型 | 最小值/最大值 |
| \`@Pattern\` | String | 正则表达式 |
| \`@Email\` | String | 邮箱格式 |

---

## 六、OpenFeign 服务调用

### 6.1 Feign 接口规范

Feign 接口必须放置在 \`ecdp-*-api\` 模块中，命名格式为 \`Remote{功能}Service\`：

\`\`\`java
@FeignClient(contextId = "remoteFloodOrgMemberService",
             value = ServiceNameConstants.FLOOD_INSPECTION_SERVICE)
public interface RemoteOrgMemberService {

    @NoToken
    @GetMapping("/inner/member/listOrganizations")
    ApiResult<List<FloodUserOrganizationResponse>> listOrganizations(
            @RequestParam("userId") Long userId);
}
\`\`\`

### 6.2 关键注解

| 注解 | 用途 |
|------|------|
| \`@NoToken\` | Feign 调用时不携带用户 Token |
| \`@Inner\` | 标记目标接口为内部接口（校验 \`from=Y\`） |
| \`@CustomEnableFeignClients\` | 自定义 Feign 扫描（替代 \`@EnableFeignClients\`） |

### 6.3 imports 自动注册

所有 Feign 接口必须在 \`META-INF/spring/org.springframework.cloud.openfeign.FeignClient.imports\` 文件中声明全限定类名，实现自动注册。

### 6.4 内部接口 @Inner

内部接口（Feign 互调）使用 \`@Inner\` 注解标记：

\`\`\`java
@Inner
@GetMapping("/inner/member/listOrganizations")
public ApiResult<List<OrgResponse>> listOrganizations(@RequestParam Long userId) { ... }
\`\`\`

---

## 七、API 文档

### 7.1 技术栈

- **SpringDoc OpenAPI**: 2.8.14（Swagger 3 / OpenAPI 3）
- **Knife4j**: 4.5.0（UI 增强）

### 7.2 启用配置

\`\`\`java
@EnableCustomDoc("duty")  // 参数为网关聚合文档中的服务标识
@SpringBootApplication
public class DutyApplication {
    public static void main(String[] args) {
        SpringApplication.run(DutyApplication.class, args);
    }
}
\`\`\`

### 7.3 注解使用

\`\`\`java
@Tag(name = "系统平台账号模块")
@SecurityRequirement(name = HttpHeaders.AUTHORIZATION)
public class SysUserController {

    @Operation(summary = "分页查询用户信息")
    @PostMapping("/page")
    public ApiResult<PageResult<SysUserResponse>> page(
            @ParameterObject SysUserPageRequest request) { ... }
}
\`\`\`

### 7.4 网关聚合

网关通过 Nacos 服务发现自动聚合各服务的 API 文档，统一入口为 \`http://{网关地址}/doc.html\`。

### 7.5 生产环境

生产环境必须关闭 Swagger：

\`\`\`yaml
springdoc:
  api-docs:
    enabled: false
  swagger-ui:
    enabled: false
\`\`\`

---

## 八、权限字符串

### 8.1 四段式格式

权限字符串采用 \`{产品}:{模块}:{资源}:{操作}\` 四段式格式：

| 段位 | 含义 | 示例 |
|------|------|------|
| 第一段 | 产品/子系统 | \`umps\`、\`flood\`、\`duty\` |
| 第二段 | 业务模块 | \`system\`、\`org\`、\`enterprise\` |
| 第三段 | 资源名称 | \`user\`、\`role\`、\`menu\` |
| 第四段 | 操作类型 | \`list\`、\`query\`、\`insert\`、\`update\`、\`delete\` |

### 8.2 @HasPermission 使用

\`\`\`java
// 单个权限
@HasPermission("umps:system:user:insert")
public ApiResult<Void> save(...) { ... }

// 多个权限（OR 逻辑：满足任一即可）
@HasPermission({"umps:system:user:delete", "umps:system:user:update"})
public ApiResult<Void> batchDelete(...) { ... }
\`\`\`

### 8.3 校验流程

\`\`\`
请求 → @HasPermission → @PreAuthorize SpEL
      → PermissionService.hasPermission() (Bean 名 "pms")
      → SecurityContext 获取当前用户权限列表
      → anyMatch（OR 逻辑）→ 匹配成功/失败
      → 失败抛出 AccessDeniedException → GlobalBizExceptionHandler → 403
\`\`\`

> **注意**：多权限使用 **OR 逻辑**（\`anyMatch\`），即用户拥有任意一个指定权限即可访问。

---

## 九、Controller 依赖注入风格

### 9.1 强制要求

1. **优先使用 \`@RequiredArgsConstructor\` 全参构造注入**（配合 \`final\` 字段）
2. **非必要不使用 \`@Autowired\` 字段注入**
3. **构造器与字段必须 \`final\`**

### 9.2 正例

\`\`\`java
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/backend/appInfo")
public class AppInfoController {

    private final IAppInfoService appInfoService;
    private final AppInfoConverter appInfoConverter;

    // ...
}
\`\`\`

### 9.3 设计意图

- **可测试性**：构造注入使 Mock 在 \`@BeforeEach\` 即可替换
- **不可变性**：\`final\` 字段避免运行期被替换导致 NPE
- **依赖显式化**：构造器参数列表即"依赖清单"

---

## 十、常用字段命名约定

与数据库设计规范对齐，字段命名、类型、注释模板保持一致：

| 数据库字段 | Java 字段 | @Schema 描述模板 |
|-----------|-----------|---------------------|
| \`{entity}_id\` | \`Long entityId\` | \`xxxID（系统主键）\` |
| \`create_time\` | \`LocalDateTime createTime\` | \`创建时间\`，\`@JsonFormat(pattern = "yyyy-MM-dd HH:mm")\` |
| \`update_time\` | \`LocalDateTime updateTime\` | \`更新时间\`，\`@JsonFormat(pattern = "yyyy-MM-dd HH:mm")\` |
| \`deleted\` | \`Integer deleted\` | \`逻辑删除标志（0正常 1删除）\`，\`@JsonIgnore\` |
| \`local_signature\` | \`String localSignature\` | \`本地签名（SM2）\`，**响应实体禁止输出** |
| \`local_signature_version\` | \`Integer localSignatureVersion\` | \`本地签名版本号\`，**响应实体禁止输出** |
| \`signature\` | \`String signature\` | \`一体化签名\`，**响应实体禁止输出** |
| \`signature_version\` | \`Integer signatureVersion\` | \`一体化签名版本号\`，**响应实体禁止输出** |
| \`creater\` / \`updater\` | \`String creater\` / \`updater\` | \`创建者\` / \`更新者\` |
| \`org_id\` / \`org_name\` | \`Long orgId\` / \`String orgName\` | \`归属组织ID\` / \`归属组织名称\` |
| \`status\` | \`Integer status\` | \`状态（1101正常 1102停用）\` |
| \`display_order\` | \`Integer displayOrder\` | \`排序号\` |
| \`parent_id\` | \`Long parentId\` | \`父级ID（顶级为0）\` |

> **重要**：签名字段（\`local_signature\` / \`signature\` / \`*_version\`）**仅在 Entity 中存在**，**禁止**复制到 \`XxxResponse\` / \`XxxRequest\`。

## 十一、附件 JSON 字段存储规则

### 11.1 基本原则

实体中存储附件信息的 JSON 字段必须遵循统一的格式结构，确保前端解析一致，避免各模块存储格式混乱。

### 11.2 字段结构

\`\`\`json
[
  {
    "id": "2082052374653964288",
    "name": "1785234932038.jpg",
    "url": "2026/07/28/cfadadb3ce9a4272bf8041c3faaa1ea3.jpg"
  }
]
\`\`\`

### 11.3 字段说明

| 字段 | 必填 | 类型 | 说明 |
|------|:----:|------|------|
| \`id\` | 是 | \`Long\`（String） | 附件唯一标识，使用雪花算法 ID 生成 |
| \`name\` | 否 | \`String\` | 文件名，用于前端展示 |
| \`url\` | 是 | \`String\` | 文件相对地址，**禁止**存储带域名的完整 URL |

### 11.4 强制要求

1. **\`url\` 禁止存储完整 URL**：仅存储文件相对路径，如 \`2026/07/28/cfadadb3ce9a4272bf8041c3faaa1ea3.jpg\`，禁止出现 \`http://\` 或 \`https://\` 开头
2. **\`id\` 必填**：每个附件必须分配雪花算法 ID，不允许缺失
3. **JSON 数组格式**：单个附件也必须使用数组包装，\`[{...}]\`
4. **无附件时**：返回空数组 \`[]\`，而非 \`null\` 或字段缺失

### 11.5 存储示例

\`\`\`java
// Entity 字段定义
@Schema(description = "附件列表")
private String attachmentList;  // JSON 字符串存储
\`\`\`

### 11.6 设计意图

- **统一格式**：前端可依赖固定的 JSON 结构进行附件展示和下载
- **URL 无域名**：避免环境迁移（域名变更）时附件地址失效；由网关或配置中心统一拼接域名
- **雪花 ID**：确保分布式环境下附件 ID 全局唯一，便于日志追溯和数据关联

---

## 十二、签名 Key 构建规范

### 12.1 核心原则

构建实体的签名 \`signatureKey\` 时，**严禁在业务调用点直接拼字符串**。必须且只能在 \`IService\` 接口中提供专属方法 \`buildSignatureKey(...)\`，由实现类覆写，调用方通过 \`SignatureUtils.sign(entity, buildSignatureKey(...))\` 使用。

### 12.2 强制要求

| 要求 | 说明 |
|------|------|
| 接口必选 | \`IService\` 接口中必须声明 \`buildSignatureKey(...)\` 方法 |
| 参数要求 | **参数为业务关键字段（非 Entity 对象）**，如 \`buildSignatureKey(String code, String name)\` |
| 实现必覆写 | \`ServiceImpl\` 中必须 \`@Override public\` 实现该方法，访问权限**必须为 \`public\`** |
| 分隔符常量 | 拼接时**必须**使用 \`SignatureConstants.SEPARATOR\`（值为 \`|\`），禁止使用裸字符串 |
| 零字段保护 | 可选业务字段若为 \`null\`，需转换为空串 \`""\` 后再拼接 |

### 12.3 代码模板

\`\`\`java
// IService 接口（参数为业务字段，非 Entity）
/**
 * 构建XXX签名 Key
 * @param code XXX编码
 * @param name XXX名称
 * @return 签名 Key 字符串
 */
String buildSignatureKey(String code, String name);

// ServiceImpl 实现
@Override
public String buildSignatureKey(String code, String name) {
    String c = code != null ? code : "";
    String n = name != null ? name : "";
    return c + SignatureConstants.SEPARATOR + n;
}
\`\`\`

### 12.4 保存/更新时签名

\`\`\`java
@Override
@Transactional(rollbackFor = Exception.class)
public boolean saveXxx(XxxRequest request) {
    // 校验业务逻辑...
    Xxx entity = new Xxx();
    BeanUtils.copyProperties(request, entity);
    entity.setXxxId(IdGenerator.idKey());
    // 签名（自动设置 localSignature + signature 字段）
    SignatureUtils.sign(entity, buildSignatureKey(request.getCode(), request.getName()));
    return this.save(entity);
}
\`\`\`

> **原因**：显式分隔符避免不同字段边界值拼接冲突；键构造逻辑集中在 \`IService.buildSignatureKey(...)\`，字段顺序/分隔符调整只改一处；参数为业务字段而非 Entity，确保签名 Key 的构建与业务含义直接对应。

---

## 十三、设计意图

### 解决的问题

返参类型混乱（Map/Object）、Swagger schema 失真、前端对接成本高。

### 正面收益（遵循规范）

- **Swagger 自生成 TS/Java**：SpringDoc 自动产出 schema，前端可按类型生成对接代码，无需手动编写
- **前端零文档对接**：通过 Swagger UI 直接查看接口定义、参数说明、响应结构，减少沟通成本
- **Entity 签名字段不外泄**：\`XxxResponse\` 筛选字段后，签名字段（\`local_signature\`/\`signature\`）不暴露给前端，避免数据篡改风险

### 负面代价（遵循规范）

- Request/Response 类增多（代码量增加约 10~20%）
- 初期需要为每个接口定义 DTO，学习成本略高

### 不遵循的后果

- **前端盲调**：Swagger schema 失真，前端只能按 Map 处理，无法享受 IDE 自动补全
- **数据篡改风险**：Entity 直接返回时，签名字段泄漏，攻击者可仿造任意数据
- **接口签名体系失效**：签名字段暴露后，双签名验签机制对外部无效，仅剩内部防护

### 适用边界

- **必须遵守**：所有对外暴露的 HTTP 接口（Controller 层）
- **酌情变通**：内部 Feign 接口在 \`@Inner\` 场景下，如确认调用方可信且在同一服务内，可适当简化
- **例外**：临时调试接口、历史遗留接口（逐步改造）、文件下载流式响应（使用 OutputStream）

---

> **相关规范**
> - [数据库设计规范](./数据库设计规范.md) — 字段类型、表命名
> - [数据签名设计规范](./数据签名设计规范.md) — 双签名体系说明
`,v=`# 数据库设计规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-17
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

---

## 目录

- [一、表命名规范](#一表命名规范)
- [二、字段命名规范](#二字段命名规范)
- [三、必须字段规范](#三必须字段规范)
- [四、字段类型规范](#四字段类型规范)
- [五、数据签名体系](#五数据签名体系)
- [六、实体类映射规范](#六实体类映射规范)
- [七、设计原则](#七设计原则)
- [附录：签名字段完整示例](#附录签名字段完整示例)

---

## 一、表命名规范

### 1.1 基本规则

| 规则 | 说明 | 示例 |
|------|------|------|
| 全小写下划线分隔 | 不使用驼峰命名 | \`sys_role_permission_rel\` |
| 模块前缀区分域 | 使用业务模块前缀 | 见 1.2 前缀对照表 |
| 单数形式 | 表名不使用复数 | \`sys_user\`（非 \`sys_users\`） |
| 关键词避免 | 不使用数据库保留字 | 避免 \`order\`、\`group\`、\`key\` 等 |

### 1.2 模块前缀对照表

| 前缀 | 所属模块 | 说明 | 示例表 |
|------|---------|------|--------|
| \`sys_\` | 系统管理（upms） | 用户、角色、权限、菜单等基础管理 | \`sys_user\`、\`sys_role\`、\`sys_menu\` |
| \`org_\` | 组织管理 | 跨模块公共组织架构 | \`org_organization\`、\`org_dept\`、\`org_user\` |
| \`duty_\` | 应急值守（duty） | 值班、排班、交接班等 | \`duty_shift\`、\`duty_schedule\`、\`duty_handover\` |
| \`plan_\` | 应急预案（plan） | 预案编制、演练、复盘 | \`plan_info\`、\`plan_step\`、\`plan_drill\` |
| \`event_\` | 应急事件（event） | 事件接报、响应、处置、评估 | \`event_info\`、\`event_process\`、\`event_assessment\` |
| \`dispatch_\` | 调度指挥（dispatch） | 资源调度、任务下达、指令分发 | \`dispatch_task\`、\`dispatch_resource\`、\`dispatch_order\` |
| \`resource_\` | 物资管理（resource） | 物资库存、调度、盘点 | \`resource_stock\`、\`resource_reservoir\`、\`resource_check\` |
| \`flood_\` | 防汛检查（flood-inspection） | 防汛巡查、隐患排查、预警 | \`flood_task\`、\`flood_inspection\`、\`flood_warning\` |
| \`fusion_\` | 数据融合（fusion） | 多源数据接入、清洗、融合 | \`fusion_source\`、\`fusion_data\`、\`fusion_rule\` |
| \`dss_\` | 决策支持（dss） | 态势分析、辅助决策、预案推荐 | \`dss_situation\`、\`dss_decision\`、\`dss_analysis\` |

### 1.3 特殊表命名

| 类型 | 命名规则 | 示例 |
|------|---------|------|
| 关联表 | \`{tableA}_{tableB}_rel\` | \`sys_role_permission_rel\` |
| 日志表 | \`{module}_access_log\` | \`sys_access_log\` |
| 字典表 | \`{module}_dict_{type}\` | \`sys_dict_type\` |

> **存量例外**：\`app_info\`、\`app_publish_log\`、\`mq_consume_log\` 因历史原因未使用模块前缀，新增表必须遵循前缀规范。

---

## 二、字段命名规范

| 规则 | 说明 | 示例 |
|------|------|------|
| 全小写下划线分隔 | 与表名风格一致 | \`create_time\`、\`display_order\` |
| 主键命名 | 业务表使用 \`{entity}_id\`，关联表可使用 \`id\` 或 \`rel_id\` | \`role_id\`、\`task_id\`、\`id\` |
| 外键命名 | 引用其他表主键时保持原名 | \`org_id\` 引用 \`org_organization.org_id\` |
| 布尔语义 | 使用 \`is_\` 前缀 | \`is_default\`、\`is_enabled\` |
| 时间字段 | 使用 \`_time\` 后缀 | \`create_time\`、\`sync_time\` |
| 名称字段 | 使用 \`_name\` 后缀 | \`org_name\`、\`section_name\` |
| 编码字段 | 使用 \`_code\` 后缀 | \`org_code\`、\`area_code\` |

---

## 三、必须字段规范

所有业务表 **必须包含** 以下字段：

### 3.1 核心必须字段

#### 3.1.1 基础字段

| 字段 | 类型 | 说明 | MyBatis-Plus 映射 |
|------|------|------|-------------------|
| \`{entity}_id\` | BIGINT | 主键，雪花算法生成 | \`@TableId(type = IdType.ASSIGN_ID)\` |
| \`deleted\` | INTEGER | 逻辑删除（0=正常，1=删除） | \`@TableLogic\` |
| \`local_signature\` | VARCHAR(500) | 本地签名（SM2），用于列表批量验签 | 应用层设置 |
| \`local_signature_version\` | INTEGER | 本地签名版本号，默认 1 | 应用层设置 |
| \`signature\` | VARCHAR(500) | 一体化签名，用于对接外部签名平台 | 应用层设置 |
| \`signature_version\` | INTEGER | 一体化签名版本号，默认 1 | 应用层设置 |

#### 3.1.2 审计字段

| 字段 | 类型 | 说明 | 适用场景       |
|------|------|------|------------|
| \`creater\` | VARCHAR(64) | 创建人姓名 | 需记录操作人的业务表 |
| \`creater_id\` | BIGINT | 创建人 ID（关联 \`sys_user\` 或 \`org_user\`） | 需关联创建者的业务表 |
| \`create_time\` | TIMESTAMP | 创建时间 | \`@TableField(fill = FieldFill.INSERT)\` |
| \`updater\` | VARCHAR(64) | 更新人姓名 | 需记录操作人的业务表 |
| \`updater_id\` | BIGINT | 更新人 ID（关联 \`sys_user\` 或 \`org_user\`） | 需关联更新者的业务表 |
| \`update_time\` | TIMESTAMP | 更新时间 | \`@TableField(fill = FieldFill.INSERT_UPDATE)\` |
| \`org_id\` | BIGINT | 归属组织 ID（关联 \`org_organization\`） | 多组织隔离的业务数据 |
| \`org_name\` | VARCHAR(128) | 归属组织名称（冗余） | 查询时避免连表，按需冗余 |

> **禁止使用基础字段和审计字段作为业务字段**：\`{entity}_id\`、\`deleted\`、签名字段（\`local_signature\` 等）、审计字段（\`creater\`/\`creater_id\`/\`create_time\`/\`updater\`/\`updater_id\`/\`update_time\`/\`org_id\`/\`org_name\`）由系统统一维护，承载数据完整性、审计溯源与多组织隔离职责，**不得**被赋予业务语义或作为业务参数由前端传入。例如：\`org_id\`/\`org_name\` 只能是数据的归属组织（系统从登录用户自动填充），不得当作"所属单位""参会单位"等业务字段使用；业务上确有此类语义时，应新增独立业务字段（如 \`unit_name\`）承载。

### 3.2 可选字段

以下字段按业务需要选用，不强制要求，但命名时必须遵循此约定。

#### 3.2.1 排序字段

| 字段 | 类型 | 说明 | 适用场景 |
|------|------|------|---------|
| \`display_order\` | INTEGER | 排序号，默认 0 | 需手动排序的业务表 |

#### 3.2.2 树形结构字段

| 字段 | 类型 | 说明 | 适用场景 |
|------|------|------|---------|
| \`parent_id\` | BIGINT | 父级 ID（关联自身主键） | 树形结构表（组织、菜单、部门等） |
| \`ancestors\` | VARCHAR(500) | 祖级路径，格式：\`0/父ID1/父ID2/自己ID\` | 需快速查询所有祖先节点的树形表 |
| \`level\` | INTEGER | 层级深度（从 0 开始） | 树形结构表，辅助查询 |

#### 3.2.3 状态字段

| 字段 | 类型 | 说明 | 适用场景 |
|------|------|------|---------|
| \`status\` | INTEGER | 业务状态（如 \`1101\` 正常、\`1102\` 停用） | 有状态流转的业务表 |
| \`sync_type\` | INTEGER | 同步类型（\`0\` 手动、\`1\` 接口同步） | 支持外部数据同步的表 |
| \`sync_time\` | TIMESTAMP | 最近同步时间 | 支持外部数据同步的表 |

> **说明**：以上字段均为参考，按实际业务需要选用。选用时必须遵循上述命名和类型约定，不得自创命名。

### 3.3 字段允许省略规则

| 表类型 | 可省略字段 | 原因 |
|--------|-----------|------|
| 关联表（\`*_rel\`） | \`update_time\`、\`deleted\` | 关联关系只创建不修改，物理删除即可 |
| 日志表（\`*_log\`） | \`update_time\` | 日志写入后不修改 |
| 基础数据表（外部导入） | \`create_time\`、\`update_time\` | 数据由外部系统导入，无业务创建时间 |

> **注意**：\`local_signature\`、\`local_signature_version\`、\`signature\`、\`signature_version\` 为数据完整性保障字段，**所有表均不得省略**。

---

## 四、字段类型规范

### 4.1 类型选择指南

| 类型 | 使用场景 | 注意事项 |
|------|---------|---------|
| BIGINT | 主键、外键 | 雪花算法生成，禁止自增（关联表/基础数据表除外） |
| INTEGER | 状态、枚举、计数、签名版本号 | — |
| DECIMAL(p,s) | 金额、精确数值 | **禁止使用 FLOAT/DOUBLE**（浮点精度问题） |
| VARCHAR(n) | 短字符串 | **必须指定长度**，常用 VARCHAR(64)、VARCHAR(128)、VARCHAR(500) |
| TEXT | 长文本（>4000 字符） | 不参与索引 |
| TIMESTAMP | 时间（带时分秒） | 推荐类型，不使用 DATE |
| JSONB | JSON 结构化数据 | OpenGauss 特有类型 |

### 4.2 常用字段长度参考

| 字段用途 | 推荐长度 | 示例 |
|---------|---------|------|
| ID 字段 | BIGINT | — |
| 编码字段 | VARCHAR(64) | \`org_code\`、\`area_code\` |
| 名称字段 | VARCHAR(128) | \`org_name\`、\`section_name\` |
| 描述/备注 | VARCHAR(500) | \`introduce\`、\`remark\` |
| 签名值 | VARCHAR(500) | \`local_signature\`、\`signature\` |
| 手机号 | VARCHAR(20) | \`contact_phone\` |
| 邮箱 | VARCHAR(128) | \`contact_email\` |
| URL/路径 | VARCHAR(500) | \`file_url\` |

---

## 五、数据签名体系

项目采用 **双签名架构**：\`local_signature\`（本地签名，SM2 算法，用于列表批量验签）+ \`signature\`（一体化签名，对接外部签名平台，用于单条权威校验）。

> **详细设计**：签名架构原理、数据流、代码实现、版本管理等见 [数据签名设计规范](./数据签名设计规范.md)。

### 5.1 字段定义

| 字段 | 类型 | 说明 |
|------|------|------|
| \`local_signature\` | VARCHAR(500) | 本地签名值（SM2），用于列表批量验签 |
| \`local_signature_version\` | INTEGER | 本地签名版本号，默认 1（对应 \`SignatureConstants.DEFAULT_VERSION\`） |
| \`signature\` | VARCHAR(500) | 一体化签名值，用于对接外部签名平台 |
| \`signature_version\` | INTEGER | 一体化签名版本号，默认 1（对应 \`SignatureConstants.DEFAULT_VERSION\`） |

### 5.2 签名 Key 构建规则

签名 Key 由业务关键字段拼接，使用 \`SignatureConstants.SEPARATOR\`（\`|\`）分隔：

\`\`\`java
String signatureKey = entity.getNo() + SignatureConstants.SEPARATOR + entity.getName();
\`\`\`

**原则**：选择业务上唯一且稳定的字段组合，避免使用会频繁变更的字段。

### 5.3 签名架构总览

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                          数据签名体系                                │
├─────────────────────────────┬───────────────────────────────────────┤
│      本地签名（local_）       │         一体化签名（无前缀）            │
├─────────────────────────────┼───────────────────────────────────────┤
│ 算法：SM2（国密）              │ 算法：由一体化签名平台决定               │
│ 密钥：本地管理（服务端）        │ 密钥：一体化签名平台管理                 │
│ 性能：高性能，本地计算          │ 性能：依赖外部 HTTP 接口                │
│ 用途：列表批量验签             │ 用途：单条数据权威验签                   │
│ 批量验签：✅ 支持（上限500条）  │ 批量验签：❌ 不支持（需逐条调用）        │
│ 场景：前端列表展示验签          │ 场景：数据导出、审计、合规校验           │
│ 验签优先级：🥇 优先            │ 验签优先级：🥈 兜底                     │
└─────────────────────────────┴───────────────────────────────────────┘
\`\`\`

### 5.4 验签策略

**写入时**：每次保存/更新同时计算两个签名，确保数据完整性。

**验签时**：
1. 优先本地验签（SM2），通过则视为数据可信，无需调用外部接口
2. 仅本地验签失败时才调用一体化签名平台兜底校验
3. 两者均失败则判定数据已被篡改

**列表场景**：先批量本地验签，失败的记录再逐条调用外部验签，大幅减少外部接口调用次数。

### 5.5 密钥版本管理

签名算法升级时的处理流程：

1. **新增密钥配置**：在 \`local-signature-keys\` 列表中新增版本配置
2. **新版本上线**：自动使用版本号最大的密钥进行签名
3. **存量迁移**：通过定时任务逐步将旧版本数据重新签名
4. **兼容验签**：验签时根据 \`signature_version\` 字段选择对应版本密钥

---

## 六、实体类映射规范

### 6.1 标准实体类模板

\`\`\`java
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("flood_example")
@Schema(description = "示例信息表")
public class FloodExample extends Model<FloodExample> implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    /** 示例ID */
    @Schema(description = "示例ID")
    @TableId(value = "example_id", type = IdType.ASSIGN_ID)
    private Long exampleId;

    /** 示例名称 */
    @Schema(description = "示例名称")
    @TableField("example_name")
    private String exampleName;

    /** 创建者 */
    @Schema(description = "创建者")
    @TableField("creater")
    private String creater;

    /** 创建时间 */
    @Schema(description = "创建时间")
    @TableField(value = "create_time", fill = FieldFill.INSERT)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createTime;

    /** 更新者 */
    @Schema(description = "更新者")
    @TableField("updater")
    private String updater;

    /** 更新时间 */
    @Schema(description = "更新时间")
    @TableField(value = "update_time", fill = FieldFill.INSERT_UPDATE)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updateTime;

    /** 逻辑删除标志（0正常 1删除） */
    @JsonIgnore
    @Schema(description = "逻辑删除标志（0正常 1删除）")
    @TableLogic
    @TableField("deleted")
    private Integer deleted;

    /** 本地签名（SM2） */
    @Schema(description = "本地签名（SM2）")
    @TableField("local_signature")
    private String localSignature;

    /** 本地签名版本号 */
    @Schema(description = "本地签名版本号")
    @TableField("local_signature_version")
    private Integer localSignatureVersion;

    /** 一体化签名 */
    @Schema(description = "一体化签名")
    @TableField("signature")
    private String signature;

    /** 一体化签名版本号 */
    @Schema(description = "一体化签名版本号")
    @TableField("signature_version")
    private Integer signatureVersion;
}
\`\`\`

### 6.2 关联表模板

\`\`\`java
@Data
@EqualsAndHashCode(callSuper = true)
@TableName("flood_example_rel")
@Schema(description = "示例关联表")
public class FloodExampleRel extends Model<FloodExampleRel> implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    /** 主键ID */
    @Schema(description = "主键ID")
    @TableId(value = "id", type = IdType.ASSIGN_ID)
    private Long id;

    /** 示例ID */
    @Schema(description = "示例ID")
    @TableField("example_id")
    private Long exampleId;

    /** 关联ID */
    @Schema(description = "关联ID")
    @TableField("rel_id")
    private Long relId;

    /** 创建时间 */
    @Schema(description = "创建时间")
    @TableField(value = "create_time", fill = FieldFill.INSERT)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createTime;

    /** 本地签名（SM2） */
    @Schema(description = "本地签名（SM2）")
    @TableField("local_signature")
    private String localSignature;

    /** 本地签名版本号 */
    @Schema(description = "本地签名版本号")
    @TableField("local_signature_version")
    private Integer localSignatureVersion;

    /** 一体化签名 */
    @Schema(description = "一体化签名")
    @TableField("signature")
    private String signature;

    /** 一体化签名版本号 */
    @Schema(description = "一体化签名版本号")
    @TableField("signature_version")
    private Integer signatureVersion;
}
\`\`\`

### 6.3 注解使用规范

| 注解 | 用途 | 要求 |
|------|------|------|
| \`@Data\` | Lombok 自动生成 getter/setter | 必须 |
| \`@EqualsAndHashCode(callSuper = true)\` | 包含父类字段 | 必须 |
| \`@TableName("table_name")\` | 表名映射 | 必须，值与数据库表名一致 |
| \`@Schema(description = "...")\` | 字段说明 | 每个字段必须，内容与 \`/** */\` 注释一致 |
| \`@TableId(value = "col", type = IdType.ASSIGN_ID)\` | 主键映射 | 主键字段必须 |
| \`@TableField("col_name")\` | 列名映射 | 非主键字段必须 |
| \`@TableField(value = "col", fill = FieldFill.INSERT)\` | 自动填充 | \`create_time\` 使用 \`INSERT\` |
| \`@TableField(value = "col", fill = FieldFill.INSERT_UPDATE)\` | 自动填充 | \`update_time\` 使用 \`INSERT_UPDATE\` |
| \`@TableLogic\` | 逻辑删除 | \`deleted\` 字段必须 |
| \`@JsonIgnore\` | 响应中隐藏 | \`deleted\` 字段必须 |
| \`@JsonFormat(pattern = "yyyy-MM-dd HH:mm")\` | 日期格式 | 日期字段必须 |

---

## 七、设计原则

### 7.1 禁止事项

| 禁止 | 原因 |
|------|------|
| **禁止使用数据库外键约束** | 增加维护开销、阻碍大数据量导入、级联操作风险不可控；表间关系由应用层通过代码保证一致性 |
| **禁止使用基础字段和审计字段作为业务字段** | 基础字段（主键、逻辑删除、签名字段）与审计字段（创建人/时间、更新人/时间、归属组织等）由系统统一维护，承载完整性、溯源与隔离职责；赋予业务语义会导致字段职责混乱、审计失真、组织隔离失效。业务语义应使用独立业务字段（如 \`unit_name\`） |
| 业务表使用数据库自增主键 | 不利于分布式环境，使用雪花算法 |
| 使用 FLOAT/DOUBLE 存储金额 | 浮点精度问题，使用 DECIMAL |
| 字段不指定 VARCHAR 长度 | 避免无限制字符串导致存储浪费 |
| 表名使用复数形式 | 统一使用单数 |
| 省略签名字段 | 数据完整性保障，所有表必须包含双签名字段 |

> **外键替代方案**：
> - 表间关联通过应用层代码校验（如保存前查询关联表是否存在）
> - 数据一致性通过事务保证（\`@Transactional\`）
> - 删除关联数据时由 Service 层显式处理级联逻辑，而非依赖数据库 CASCADE

### 7.2 建议事项

| 建议 | 说明 |
|------|------|
| 索引命名 | 主键索引 \`pk_{table}_{col}\`，唯一索引 \`uk_{table}_{col}\`，普通索引 \`idx_{table}_{col}\` |
| 字段注释 | 每个字段必须有 COMMENT，描述业务含义和取值范围 |
| 枚举值注释 | 枚举字段在 COMMENT 中说明所有取值，如 \`状态（1101正常 1102停用）\` |
| 预留字段 | 不建议预留字段，按需新增 |

---

## 附录：签名字段完整示例

### DDL 示例

\`\`\`sql
CREATE TABLE flood_example (
                               example_id              BIGINT       NOT NULL PRIMARY KEY,
                               parent_id               BIGINT,
                               ancestors               VARCHAR(500),
                               level                   INTEGER      DEFAULT 0,
                               example_name            VARCHAR(128) NOT NULL,
                               example_code            VARCHAR(64),
                               org_id                  BIGINT,
                               org_name                VARCHAR(128),
                               user_id                 BIGINT,
                               status                  INTEGER      DEFAULT 1101,
                               display_order           INTEGER      DEFAULT 0,
                               creater                 VARCHAR(64),
                               create_time             TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
                               updater                 VARCHAR(64),
                               update_time             TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
                               deleted                 INTEGER      NOT NULL DEFAULT 0,
                               local_signature             VARCHAR(500),
                               local_signature_version     INTEGER      NOT NULL DEFAULT 1,
                               signature               VARCHAR(500),
                               signature_version       INTEGER      NOT NULL DEFAULT 1
)
    WITH (ORIENTATION = ROW, COMPRESSION = NO);

COMMENT ON TABLE flood_example IS '示例信息表';
COMMENT ON COLUMN flood_example.example_id IS '示例ID';
COMMENT ON COLUMN flood_example.parent_id IS '父级ID（关联自身，顶级为0或NULL）';
COMMENT ON COLUMN flood_example.ancestors IS '祖级路径，格式：0/父ID1/父ID2/自己ID';
COMMENT ON COLUMN flood_example.level IS '层级深度（从0开始）';
COMMENT ON COLUMN flood_example.example_name IS '示例名称';
COMMENT ON COLUMN flood_example.example_code IS '示例编码';
COMMENT ON COLUMN flood_example.org_id IS '归属组织ID';
COMMENT ON COLUMN flood_example.org_name IS '归属组织名称（冗余）';
COMMENT ON COLUMN flood_example.user_id IS '创建用户ID';
COMMENT ON COLUMN flood_example.status IS '状态（1101正常 1102停用）';
COMMENT ON COLUMN flood_example.display_order IS '排序号';
COMMENT ON COLUMN flood_example.creater IS '创建者';
COMMENT ON COLUMN flood_example.create_time IS '创建时间';
COMMENT ON COLUMN flood_example.updater IS '更新者';
COMMENT ON COLUMN flood_example.update_time IS '更新时间';
COMMENT ON COLUMN flood_example.deleted IS '逻辑删除（0正常 1删除）';
COMMENT ON COLUMN flood_example.local_signature IS '本地签名（SM2）';
COMMENT ON COLUMN flood_example.local_signature_version IS '本地签名版本号';
COMMENT ON COLUMN flood_example.signature IS '一体化签名';
COMMENT ON COLUMN flood_example.signature_version IS '一体化签名版本号';

-- 禁止外键约束，表间关系由应用层保证
-- ALTER TABLE flood_example ADD CONSTRAINT fk_example_parent
--     FOREIGN KEY (parent_id) REFERENCES flood_example(example_id);  -- ❌ 禁止
-- ALTER TABLE flood_example ADD CONSTRAINT fk_example_org
--     FOREIGN KEY (org_id) REFERENCES org_organization(org_id);       -- ❌ 禁止

-- 索引命名规范
CREATE INDEX idx_flood_example_org_id ON flood_example(org_id);
CREATE INDEX idx_flood_example_parent_id ON flood_example(parent_id);
CREATE INDEX idx_flood_example_status ON flood_example(status, deleted);
\`\`\`

### Service 层签名写入示例

> 完整的签名写入和批量验签代码示例见 [数据签名设计规范](./数据签名设计规范.md) 第五章。

---

> **相关文档**：
> - [架构设计规范](../微服务架构设计/系统架构设计说明书.md) — 第三章 数据架构
> - [AGENTS.md](../../AGENTS.md) — 编码规范
`,I=`# 数据度量规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-29
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

> **说明**：本规范为**参考性规范**，具体业务场景需结合实际衡量（如法规约束、外部系统对接、报表精度要求等）。

---

## 目录

- [一、长度 / 距离](#一长度距离)
- [二、时间](#二时间)
- [三、金额 / 货币](#三金额货币)
- [四、重量 / 质量](#四重量质量)
- [五、面积 / 体积](#五面积体积)
- [六、角度 / 方向](#六角度方向)
- [七、百分比 / 比率](#七百分比比率)
- [八、流量 / 速率](#八流量速率)
- [九、温度](#九温度)
- [十、数据量级](#十数据量级)
- [十一、通用原则](#十一通用原则)
- [十二、反例 vs 正例](#十二反例vs正例)
- [十三、设计意图](#十三设计意图)

---

## 一、长度 / 距离

| 量纲 | 建议最小单位 | 说明 |
|------|--------------|------|
| 短距离 | **米（m）** | GPS 轨迹、巡查里程、道路长度等，避免使用「千米」导致小数丢失精度 |
| 极短距离 | **厘米（cm）** / **毫米（mm）** | 工程图纸、设备精度等场景，按需使用 |
| 大尺度 | **千米（km）** | 跨城/跨省运输距离等大尺度场景可放宽到 km |
| 经纬度 | **度（°）**，使用 \`BigDecimal\` 存储 | 推荐保留 6 位小数（约 0.11m 精度），避免 \`double\` 浮点误差 |

### 1.1 经纬度规范

\`\`\`java
// ✅ 正确：BigDecimal 存储，6 位小数
@Schema(description = "经度（保留 6 位小数）")
private BigDecimal longitude;

@Schema(description = "纬度（保留 6 位小数）")
private BigDecimal latitude;

// ❌ 错误：double 存储，存在浮点精度问题
private Double longitude;  // 浮点精度问题
\`\`\`

---

## 二、时间

| 量纲 | 建议最小单位 | 说明 |
|------|--------------|------|
| 持续时长 / 时间间隔 | **秒（s）** | 巡查时长、任务执行时长、网络耗时等，避免使用「分钟」导致秒级精度丢失 |
| 调度延时 / 缓存 TTL | **秒（s）** 或 **毫秒（ms）** | Redis TTL 默认秒、延时队列（\`x-delay\`）以毫秒为单位 |
| 时间戳 | **毫秒（ms）** | 数据库存储统一用 \`BIGINT\` 存毫秒值（避免 \`DATETIME\` 时区问题）；前端展示按需格式化为 \`yyyy-MM-dd HH:mm:ss\` |
| 日历日期 | **天（d）** | 生日、合同期等业务日期字段 |

### 2.1 数据库存储规范

\`\`\`java
// ✅ 正确：时间戳用 TIMESTAMP 存储
@Schema(description = "创建时间")
@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
private LocalDateTime createTime;

// 数据库字段类型：TIMESTAMP
// CREATE_TIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
\`\`\`

> 注意：使用 TIMESTAMP 类型，由数据库自动维护时区转换，避免 Java 侧时区问题。TIMESTAMP 范围为 '1970-01-01 00:00:01' UTC 至 '2038-01-19 03:14:07' UTC，如需覆盖更大时间范围可使用 DATETIME。

### 2.2 前端展示

\`\`\`java
// ✅ 正确：使用 @JsonFormat 格式化展示
@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
@Schema(description = "创建时间")
private LocalDateTime createTime;

// 前端展示：2026-07-29 10:30:00
\`\`\`

> **注意**：用户对「等待时长」的容忍度差异较大，**前端展示可向上聚合**为「3 分 25 秒」「1 小时 20 分」，但**底层存储与计算仍用秒**。

---

## 三、金额 / 货币

| 量纲 | 建议类型 | 说明 |
|------|----------|------|
| 金额 | **\`decimal\` / \`BigDecimal\`** | **绝对禁止**使用 \`float\` / \`double\` 存储金额，否则会出现 \`0.1 + 0.2 ≠ 0.3\` 的精度问题 |
| 数据库字段 | \`DECIMAL(M, D)\` | MySQL/PostgreSQL 的 \`DECIMAL\`，指定总位数 \`M\` 与小数位 \`D\`（如 \`DECIMAL(18, 2)\` 表示 16 位整数 + 2 位小数） |
| 精度建议 | 保留 2 位小数 | 人民币、美元等绝大多数币种的最小单位是「分」；特殊场景（加密货币、利率等）按需扩展 |
| 计算 | \`BigDecimal.setScale(scale, RoundingMode.HALF_UP)\` | 加减乘除统一指定精度与舍入方式，避免隐式精度丢失 |

### 3.1 代码示例

\`\`\`java
// ✅ 正确：金额用 BigDecimal + 显式 setScale
@Schema(description = "订单金额（元）")
private BigDecimal orderAmount;

// 计算时统一精度
BigDecimal fee = baseAmount.multiply(rate).setScale(2, RoundingMode.HALF_UP);

// 数据库字段定义
// ORDER_AMOUNT DECIMAL(18,2) NOT NULL COMMENT '订单金额（元）'

// ❌ 错误：金额用 double
private Double amount;  // 0.1 + 0.2 = 0.30000000000000004
\`\`\`

---

## 四、重量 / 质量

| 量纲 | 建议最小单位 | 说明 |
|------|--------------|------|
| 一般物资 | **千克（kg）** | 物资储备、应急设备等 |
| 大宗货物 | **吨（t）** | 1 t = 1000 kg，避免大数值溢出 |
| 精细场景 | **克（g）** / **毫克（mg）** | 化学品、药品等按需使用 |

### 4.1 代码示例

\`\`\`java
@Schema(description = "物资重量（kg）")
private BigDecimal weight;

// 物资清单
@Schema(description = "单件重量（kg）")
private BigDecimal unitWeight;

// 运输统计
@Schema(description = "总重量（吨）")
private BigDecimal totalWeightTon;
\`\`\`

---

## 五、面积 / 体积

| 量纲 | 建议最小单位 | 说明 |
|------|--------------|------|
| 面积 | **平方米（m²）** | 灾害影响面积、淹没范围等 |
| 大面积 | **平方千米（km²）** | 流域面积、受灾区域等大尺度场景 |
| 体积 | **立方米（m³）** | 水库库容、物资体积等 |
| 液体 | **升（L）** | 油料、化学品等按行业惯例 |

### 5.1 代码示例

\`\`\`java
@Schema(description = "受灾面积（km²）")
private BigDecimal disasterArea;

// 水库库容
@Schema(description = "库容（万立方米）")
private BigDecimal reservoirCapacity;

// 物资体积
@Schema(description = "单件体积（L）")
private BigDecimal unitVolumeLiter;
\`\`\`

---

## 六、角度 / 方向

| 量纲 | 建议最小单位 | 说明 |
|------|--------------|------|
| 方位角 | **度（°）** | 0-360° 整数表示；如需更高精度可使用浮点度（如 \`113.123456\`） |
| 倾斜角 | **度（°）**，保留 2 位小数 | 桥梁挠度、坡度等工程量 |

### 6.1 代码示例

\`\`\`java
// 方位角（0-360°）
@Schema(description = "方位角（°）")
private Integer azimuth;

// 倾斜角
@Schema(description = "桥梁倾斜角（°）")
private BigDecimal tiltAngle;

// 坡度
@Schema(description = "道路坡度（°）")
private BigDecimal slopeAngle;
\`\`\`

---

## 七、百分比 / 比率

| 量纲 | 建议类型 | 说明 |
|------|----------|------|
| 比例 | **\`decimal\` / \`BigDecimal\`** | 占比、合格率等使用 0-1 之间的小数（避免 0-100 整数，避免百分比单位歧义） |
| 展示 | 前端格式化为 \`XX.XX%\` | 内部存储保持小数，展示层格式化为百分比字符串 |
| 极小概率 | **基点（bp，1bp = 0.01%）** | 金融、保险等场景按需使用 |

### 7.1 代码示例

\`\`\`java
// ✅ 正确：存储小数，展示时格式化
@Schema(description = "任务完成率（0-1 之间的小数）")
private BigDecimal completionRate;  // 存储 0.85 表示 85%

// 前端格式化：0.85 → 85.00%
// 后端格式化：completionRate.multiply(BigDecimal.valueOf(100)).setScale(2) + "%"

// ❌ 错误：存储整数百分比（存在单位歧义）
private Integer completionPercent;  // 85 表示 85% 还是 0.85？
\`\`\`

---

## 八、流量 / 速率

| 量纲 | 建议最小单位 | 说明 |
|------|--------------|------|
| 数据流量 | **字节（B）** / **比特（bit）** | 网络流量按 \`bit/s\`，存储容量按 \`Byte\`，**注意单位区分** |
| 传输速率 | **Mbps** / **MB/s** | 按行业惯例 |
| 车流 / 人流 | **辆/小时**、**人/小时** | 道路监测、应急疏散等场景 |

### 8.1 代码示例

\`\`\`java
// 网络流量
@Schema(description = "下载速度（MB/s）")
private BigDecimal downloadSpeed;

// 文件大小
@Schema(description = "文件大小（字节）")
private Long fileSize;  // 存储字节，前端按需格式化为 KB/MB/GB

// 车流量
@Schema(description = "小时车流量（辆/小时）")
private Integer hourlyVehicleCount;
\`\`\`

---

## 九、温度

| 量纲 | 建议最小单位 | 说明 |
|------|--------------|------|
| 一般温度 | **摄氏度（°C）**，保留 1 位小数 | 气象监测、设备温度等 |
| 极端温度 | **摄氏度（°C）**，保留 2 位小数 | 工业、医疗等场景 |
| 温标 | 摄氏度优先 | 涉及美国/英国对接时按需转换为华氏度（°F） |

### 9.1 代码示例

\`\`\`java
// 气象温度
@Schema(description = "当前温度（°C）")
private BigDecimal temperature;

// 设备温度
@Schema(description = "设备温度（°C）")
private BigDecimal deviceTemperature;
\`\`\`

---

## 十、数据量级

| 量纲 | 建议单位 | 说明 |
|------|----------|------|
| 计数 | **整数（Integer / Long）** | 用户数、消息数、点击数等 |
| 文件大小 | **字节（B）**，按需格式化为 KB/MB/GB | 存储、传输等场景 |
| 唯一标识 | **字符串（String）**，使用雪花算法 ID | 主键、订单号、设备编号等 |

### 10.1 代码示例

\`\`\`java
// 计数
@Schema(description = "用户数")
private Long userCount;

@Schema(description = "消息数")
private Integer messageCount;

// 文件大小（字节）
@Schema(description = "文件大小（字节）")
private Long fileSize;

// 主键使用雪花算法
@Schema(description = "任务ID")
private Long taskId;  // 使用 IdGenerator.idKey() 生成
\`\`\`

---

## 十一、通用原则

### 11.1 精度层级原则

\`\`\`
存储精度 ≧ 计算精度 ≧ 展示精度
\`\`\`

底层存储保留更多精度，避免向上聚合时丢失。

### 11.2 口径一致原则

同一字段在整个系统（前端、后端、数据库、外部对接）的单位与精度必须一致，**避免出现「米 + 千米」混用**。

### 11.3 字段语义标注原则

通过 \`@Schema(description = "本次巡查距离（m）")\` 在字段注释中**显式标注单位**：

\`\`\`java
@Schema(description = "本次巡查距离（m）")
private BigDecimal inspectionMileage;

@Schema(description = "任务执行时长（秒）")
private Integer durationSeconds;

@Schema(description = "订单金额（元）")
private BigDecimal orderAmount;
\`\`\`

### 11.4 单位转换封装原则

如需频繁转换（m ↔ km、s ↔ min），建议封装为工具类：

\`\`\`java
/**
 * 距离单位转换工具
 * @author xxx
 * @since yyyy-MM-dd
 */
public class DistanceUtils {

    /**
     * 米转千米
     * @param meter 米
     * @return 千米
     */
    public static BigDecimal meterToKilometer(BigDecimal meter) {
        return meter.divide(BigDecimal.valueOf(1000), 6, RoundingMode.HALF_UP);
    }

    /**
     * 千米转米
     * @param kilometer 千米
     * @return 米
     */
    public static BigDecimal kilometerToMeter(BigDecimal kilometer) {
        return kilometer.multiply(BigDecimal.valueOf(1000)).setScale(2, RoundingMode.HALF_UP);
    }
}
\`\`\`

### 11.5 国际化（i18n）

涉及多语言或多币种时，金额、长度、重量等单位需按区域切换；前端展示优先使用 i18n 库（如 \`Intl.NumberFormat\`）做格式化。

---

## 十二、反例 vs 正例

### 12.1 金额精度

\`\`\`java
// ❌ 反例：金额用 double
private Double amount;

// ✅ 正例：金额用 BigDecimal + 显式 scale
@Schema(description = "订单金额（元）")
private BigDecimal amount;
\`\`\`

### 12.2 距离单位

\`\`\`java
// ❌ 反例：距离用 cm 但单位语义不清晰
@Schema(description = "距离")
private Integer distance;  // 是 cm？m？km？

// ✅ 正例：距离用 BigDecimal + 单位标注
@Schema(description = "本次巡查距离（m）")
private BigDecimal inspectionMileage;
\`\`\`

### 12.3 时间精度

\`\`\`java
// ❌ 反例：时间用分钟导致秒级精度丢失
@Schema(description = "任务执行时长")
private Integer duration;  // 单位是分钟？还是秒？

// ✅ 正例：时间用秒 + 单位标注
@Schema(description = "任务执行时长（秒）")
private Integer durationSeconds;
\`\`\`

### 12.4 经纬度精度

\`\`\`java
// ❌ 反例：经纬度用 double
private Double longitude;  // 浮点精度问题

// ✅ 正例：经纬度用 BigDecimal + 6 位精度
@Schema(description = "经度（保留 6 位小数）")
private BigDecimal longitude;
\`\`\`

---

## 十三、设计意图

### 13.1 解决的问题

- **单位混用**：m/km、min/s、cm/mm 等单位混用导致换算错误
- **金额精度丢失**：使用 \`double\` 导致 \`0.1 + 0.2 ≠ 0.3\`
- **经纬度误差**：使用 \`double\` 导致 GPS 坐标偏移 10m+
- **联调成本高**：前后端数据库三方口径不一致，反复确认单位

### 13.2 正面收益（遵循规范）

- **口径一致**：前后端数据库三方统一，避免联调时反复确认单位
- **精度不丢失**：存储精度 ≧ 计算精度 ≧ 展示精度，向上聚合时不会丢失
- **换算零散**：统一单位后无需在业务代码中分散写换算逻辑
- **可演进**：底层用「最小精度 + 充足位数」，业务演进（如从 m 升级到 mm）时改动最小

### 13.3 负面代价（遵循规范）

- **存储精度高于展示精度**：字段更长（如 DECIMAL(18,6) vs DECIMAL(18,2)），但存储成本可接受
- **需要显式标注单位**：每个字段都要写明单位（轻微工作量）

### 13.4 不遵循的后果

- **金额精度问题**：\`0.1 + 0.2 ≠ 0.3\`，财务报表出错
- **GPS 坐标偏移**：经纬度偏移 10m+，应急定位不准确
- **联调成本增加**：前后端反复确认单位，沟通成本高
- **业务计算错误**：混用 m/km 导致里程统计错误

### 13.5 适用边界

> **本规范为参考性规范**，涉及以下场景必须严格遵守，其他场景可酌情变通：

| 场景类型 | 规范要求 |
|----------|----------|
| **法规约束场景** | 必须严格遵守（如财务报表、金融计算） |
| **外部系统对接** | 必须严格遵守（如对接第三方 GPS 系统） |
| **报表精度要求** | 必须严格遵守（如统计数据必须与原始数据一致） |
| **跨系统数据交换** | 必须严格遵守（如微服务间传递经纬度、金额） |
| **纯内部计算的中间值** | 可酌情变通（如计算过程中临时使用的精度） |
| **UI 展示用的草率计算** | 可酌情变通（如调试用的临时变量） |
`,M=`# 数据签名设计规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-17
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

---

## 目录

- [一、背景与问题](#一背景与问题)
- [二、双签名架构设计](#二双签名架构设计)
- [三、签名算法](#三签名算法)
- [四、签名 Key 构建规则](#四签名Key构建规则)
- [五、代码实现](#五代码实现)
- [六、版本管理](#六版本管理)
- [七、字段定义速查](#七字段定义速查)

---

## 一、背景与问题

### 1.1 现状

项目对接一体化签名平台进行数据签名，保障数据完整性与防篡改。但一体化签名平台存在以下限制：

- **不提供批量验签接口**：每次验签需单独调用 HTTP 接口
- **列表场景性能瓶颈**：列表展示 N 条数据需要 N 次 HTTP 请求验签，严重影响页面加载性能
- **网络依赖**：验签强依赖外部服务可用性

### 1.2 核心矛盾

| 场景 | 需求 | 一体化签名现状 |
|------|------|---------------|
| 列表批量验签 | 一次请求验签 N 条数据 | ❌ 需 N 次 HTTP 请求 |
| 单条权威校验 | 数据导出、审计、合规 | ✅ 支持 |
| 离线验签 | 内网环境、断网场景 | ❌ 依赖外部服务 |
| 高频验签 | 每次查询都验签 | ❌ 接口调用成本高 |

### 1.3 解决思路

引入本地签名作为**第一道防线**：

- **写入时**：同时计算本地签名和一体化签名，双写保障
- **验签时**：优先本地验签，通过即视为数据可信，避免调用外部接口
- **兜底机制**：仅本地验签失败时调用一体化签名平台，区分"密钥轮换"与"数据篡改"

---

## 二、双签名架构设计

### 2.1 设计思路

在每张表中同时维护两个签名字段：

- **\`local_signature\`**：本地签名，服务端自行计算，用于列表批量验签
- **\`signature\`**：一体化签名，由外部签名平台签发，用于单条权威校验

两个签名各司其职，互不干扰，通过版本号独立管理。

### 2.2 架构总览

\`\`\`
┌─────────────────────────────────────────────────────────────────────┐
│                          数据签名体系                                │
├─────────────────────────────┬───────────────────────────────────────┤
│      本地签名（local_）       │         一体化签名（无前缀）            │
├─────────────────────────────┼───────────────────────────────────────┤
│ 算法：SM2（国密）              │ 算法：由一体化签名平台决定               │
│ 密钥：本地管理（服务端）        │ 密钥：一体化签名平台管理                 │
│ 性能：高性能，本地计算          │ 性能：依赖外部 HTTP 接口                │
│ 用途：列表批量验签             │ 用途：单条数据权威验签                   │
│ 批量验签：✅ 支持（上限1000条） │ 批量验签：❌ 不支持（需逐条调用）        │
│ 场景：前端列表展示验签          │ 场景：数据导出、审计、合规校验           │
│ 验签优先级：🥇 优先            │ 验签优先级：🥈 兜底                     │
└─────────────────────────────┴───────────────────────────────────────┘
\`\`\`

**验签策略**：优先本地验签，通过则无需调用外部接口；仅本地验签失败时才调用一体化签名平台兜底校验。

### 2.3 数据流

\`\`\`
                    ┌──────────────────────────────────┐
                    │           数据写入流程              │
                    └──────────────────────────────────┘

  Service.save(entity) / Service.update(entity)
        │
        ├── 1. 构建签名 Key（业务关键字段拼接）
        │
        ├── 2. 本地签名（SM2，同步，必选）
        │      entity.localSignature = signData(key)
        │      entity.localSignatureVersion = CURRENT_VERSION
        │
        └── 3. 一体化签名（外部接口，同步，必选）
               entity.signature = externalSign(key)
               entity.signatureVersion = CURRENT_VERSION
               │
               ▼
           写入数据库
\`\`\`

\`\`\`
                    ┌──────────────────────────────────┐
                    │           验签流程（优先本地）       │
                    └──────────────────────────────────┘

  查询数据（单条 / 列表）
        │
        ├── 1. 本地签名验签（SM2，优先）
        │      valid = localVerify(key, localSignature)
        │
        ├── 2. 判断结果
        │      ├── ✅ 通过 → 验签完成，无需调用外部接口
        │      │
        │      └── ❌ 失败 → 进入步骤 3
        │
        └── 3. 一体化签名验签（外部接口，兜底）
               valid = externalVerify(key, signature)
               ├── ✅ 通过 → 数据可信（本地密钥可能已轮换）
               └── ❌ 失败 → 数据已被篡改
\`\`\`

**设计要点**：

- **写入时双签**：每次保存/更新同时计算两个签名，确保数据完整性
- **验签时本地优先**：本地验签通过即视为数据可信，避免不必要的外部接口调用
- **外部验签兜底**：仅在本地验签失败时调用，用于区分"密钥轮换"和"数据篡改"
- **列表场景**：先批量本地验签，失败的记录再逐条调用外部验签，大幅减少外部接口调用次数

---

## 三、签名算法

### 3.1 本地签名（SM2）

采用国密 SM2 非对称签名算法，基于 Hutool SmUtil 封装。

- **私钥**：用于签名，Hex 编码（32 字节 D 值）
- **公钥**：用于验签，Hex 编码（64 字节坐标 X||Y）
- **签名值**：Hex 编码，存储于 \`local_signature\` 字段

### 3.2 一体化签名

由一体化签名平台决定具体算法，当前尚未对接。

- **签名值**：存储于 \`signature\` 字段
- **对接方式**：实现 \`ExternalSignatureStrategy\`，继承 \`ISignatureService\`

---

## 四、签名 Key 构建规则

### 4.1 基本原则

签名 Key 由业务关键字段拼接而成，代表一条数据的"业务指纹"：

| 原则 | 说明 |
|------|------|
| 业务唯一性 | 选择能唯一标识业务含义的字段组合 |
| 稳定性 | 避免使用会频繁变更的字段 |
| 可重建性 | 验签时能从数据中还原出相同的 Key |
| 最小化 | 字段越少越好，减少拼接复杂度 |

### 4.2 分隔符

使用 \`SignatureConstants.SEPARATOR\`（\`|\`）作为字段分隔符：

\`\`\`java
public interface SignatureConstants {
    /**
     * 默认密钥版本号
     */
    int DEFAULT_VERSION = 1;

    /**
     * 签名 Key 字段分隔符
     */
    String SEPARATOR = "|";
}
\`\`\`

### 4.3 构建规范

| 要求 | 说明 |
|------|------|
| 接口必选 | \`IService\` 接口中必须声明 \`buildSignatureKey(...)\` 方法 |
| 参数要求 | **参数为业务关键字段（非 Entity 对象）**，如 \`buildSignatureKey(String code, String name)\` |
| 实现必覆写 | \`ServiceImpl\` 中必须 \`@Override public\` 实现该方法，访问权限**必须为 \`public\`** |
| 分隔符常量 | 拼接时**必须**使用 \`SignatureConstants.SEPARATOR\`（值为 \`|\`），禁止使用裸字符串 |
| 零字段保护 | 可选业务字段若为 \`null\`，需转换为空串 \`""\` 后再拼接 |

### 4.4 构建示例

| 业务表 | 签名 Key 构建 | 说明 |
|--------|-------------|------|
| 路段表 | \`buildSignatureKey(String sectionNo, String sectionName)\` | 编号 + 名称 |
| 组织表 | \`buildSignatureKey(String orgCode, String orgName)\` | 编码 + 名称 |
| 用户表 | \`buildSignatureKey(String username, String phone)\` | 用户名 + 手机号 |
| 任务表 | \`buildSignatureKey(String taskNo, String taskName)\` | 任务编号 + 任务名称 |

\`\`\`java
// IService 接口
/**
 * 构建签名 Key
 * @param exampleNo 示例编号
 * @param exampleName 示例名称
 * @return 签名原文
 */
String buildSignatureKey(String exampleNo, String exampleName);

// ServiceImpl 实现
@Override
public String buildSignatureKey(String exampleNo, String exampleName) {
    String no = exampleNo != null ? exampleNo : "";
    String name = exampleName != null ? exampleName : "";
    return no + SignatureConstants.SEPARATOR + name;
}
\`\`\`

---

## 五、代码实现

### 5.1 核心接口

\`\`\`java
public interface ISignatureService {

    // ==================== 本地签名（SM2） ====================

    /**
     * 本地签名单条（使用最新版本密钥）
     * @param message 原文
     * @return 签名结果（含签名值和版本号），签名功能禁用时返回 null
     */
    SignatureResult signLocal(String message);

    /**
     * 本地批量签名（上限 500 条，使用最新版本密钥）
     * @param messageMap 原文 Map
     * @return 签名结果 Map
     */
    Map<String, SignatureResult> signLocalBatch(Map<String, String> messageMap);

    /**
     * 本地验签单条（根据传入的版本号选择密钥）
     * @param message 原文
     * @param signature 签名值
     * @param version 签名版本号（用于选择对应密钥）
     * @return true=通过
     */
    boolean verifyLocal(String message, String signature, int version);

    /**
     * 本地批量验签（上限 500 条）
     * @param signatureMap 验签 Map（key=原文，value=签名结果）
     * @return 验签结果 Map
     */
    Map<String, VerifyResult> verifyLocalBatch(Map<String, SignatureResult> signatureMap);

    // ==================== 一体化签名 ====================

    /**
     * 一体化签名单条（使用最新版本密钥）
     * @param message 原文
     * @return 签名结果，签名功能禁用时返回 null
     */
    SignatureResult signExternal(String message);

    /**
     * 一体化批量签名（上限 50 条）
     * @param messageMap 原文 Map
     * @return 签名结果 Map
     */
    Map<String, SignatureResult> signExternalBatch(Map<String, String> messageMap);

    /**
     * 一体化验签单条
     * @param message 原文
     * @param signature 签名值
     * @return true=通过
     */
    boolean verifyExternal(String message, String signature);

    /**
     * 一体化批量验签（上限 50 条）
     * @param signatureMap 验签 Map（key=原文，value=签名结果）
     * @return 验签结果 Map
     */
    Map<String, VerifyResult> verifyExternalBatch(Map<String, SignatureResult> signatureMap);
}
\`\`\`

### 5.2 签名结果 DTO

\`\`\`java
@Data
@Builder
public class SignatureResult implements Serializable {
    /** 签名值 */
    private String signature;
    /** 签名版本号（用于验签时选择对应密钥） */
    private int version;
    /** 签名算法（如 SM2） */
    private String algorithm;
}
\`\`\`

### 5.3 验签结果 DTO

\`\`\`java
@Data
@Builder
public class VerifyResult implements Serializable {
    /** 是否通过 */
    private boolean passed;
    /** 签名版本号（验签时使用的版本） */
    private int version;
    /** 失败原因（可选） */
    private String reason;
}
\`\`\`

### 5.4 策略模式

\`\`\`
ISignatureService（接口）
    │
    └── SignatureServiceImpl（Spring Bean，自动注入）
            │
            ├── 根据配置选择启用状态
            │
            ├── 本地签名（SM2）
            │   ├── enabled: true → 正常签名/验签
            │   └── enabled: false → 返回 null / false
            │
            └── 一体化签名（待对接）
                ├── enabled: true → 调用外部接口
                └── enabled: false → 返回 null / false
\`\`\`

### 5.5 配置项

\`\`\`yaml
security:
  crypto:
    # ==================== 本地加解密 ====================
    # 是否启用本地加解密功能，默认 true
    local-crypto-enabled: true
    # 本地 SM4 加密密钥（Hex 编码，32字符，16字节）
    local-crypto-key: "224ef329ca746bbd..."
    # 本地批量加解密上限，默认 1000
    local-crypto-batch-max: 1000

    # ==================== 本地签名 ====================
    # 是否启用本地签名功能，默认 true
    local-signature-enabled: true
    # 本地批量签名上限，默认 500
    local-signature-batch-max: 500
    # 本地签名密钥列表（按版本号升序排列，版本号越大表示越新）
    local-signature-keys:
      - version: 1
        private-key: "30819302010030..."
        public-key: "3059301306072a..."
      - version: 2
        private-key: "..."
        public-key: "..."

    # ==================== 一体化加解密 ====================
    # 是否启用一体化加解密功能，默认 false（待对接）
    external-crypto-enabled: false
    # 一体化批量加解密上限，默认 1000
    external-crypto-batch-max: 1000

    # ==================== 一体化签名 ====================
    # 是否启用一体化签名功能，默认 false（待对接）
    external-signature-enabled: false
    # 一体化批量签名上限，默认 50
    external-signature-batch-max: 50
\`\`\`

### 5.6 Service 层签名写入

\`\`\`java
@Slf4j
@Service
@RequiredArgsConstructor
public class FloodExampleServiceImpl
        extends ServiceImpl<FloodExampleMapper, FloodExample>
        implements IFloodExampleService {

    private final ISignatureService signatureService;

    @Transactional(rollbackFor = Exception.class)
    @Override
    public void saveExample(FloodExampleRequest request) {
        FloodExample entity = new FloodExample();
        BeanUtils.copyProperties(request, entity);
        entity.setExampleId(IdGenerator.idKey());

        // 构建签名 Key
        String signatureKey = buildSignatureKey(entity);

        // 本地签名（SM2）
        SignatureResult localResult = signatureService.signLocal(signatureKey);
        if (localResult != null) {
            entity.setLocalSignature(localResult.getSignature());
            entity.setLocalSignatureVersion(localResult.getVersion());
        }

        // 一体化签名（对接后启用）
        // SignatureResult externalResult = signatureService.signExternal(signatureKey);
        // if (externalResult != null) {
        //     entity.setSignature(externalResult.getSignature());
        //     entity.setSignatureVersion(externalResult.getVersion());
        // }

        this.save(entity);
    }

    /**
     * 构建签名 Key
     */
    private String buildSignatureKey(FloodExample entity) {
        return entity.getExampleNo() + SignatureConstants.SEPARATOR + entity.getExampleName();
    }
}
\`\`\`

### 5.7 验签（本地优先、外部兜底）

\`\`\`java
/**
 * 单条验签：本地优先，失败时调用外部兜底
 */
public boolean verify(FloodExample entity) {
    String key = buildSignatureKey(entity);

    // 1. 优先本地验签（SM2）
    boolean localValid = signatureService.verifyLocal(
            key, entity.getLocalSignature(), entity.getLocalSignatureVersion());
    if (localValid) {
        return true;  // 本地通过，无需调用外部接口
    }

    // 2. 本地失败，调用一体化签名平台兜底
    log.warn("本地验签失败，尝试外部验签: id={}", entity.getExampleId());
    boolean externalValid = signatureService.verifyExternal(key, entity.getSignature());
    if (externalValid) {
        log.info("外部验签通过（可能密钥已轮换），建议重签: id={}", entity.getExampleId());
        return true;
    }

    // 3. 两者均失败，数据已被篡改
    log.error("数据签名验证失败（本地+外部均不通过）: id={}", entity.getExampleId());
    return false;
}

/**
 * 批量验签：先批量本地验签，失败记录再逐条外部验签
 */
public List<Long> batchVerify(List<FloodExample> list) {
    // 1. 构建本地验签 Map：key = 原文，value = SignatureResult
    Map<String, SignatureResult> signatureMap = new LinkedHashMap<>();
    Map<String, Long> keyToIdMap = new LinkedHashMap<>();
    Map<String, FloodExample> keyToEntityMap = new LinkedHashMap<>();

    for (FloodExample item : list) {
        String key = buildSignatureKey(item);
        signatureMap.put(key, SignatureResult.builder()
                .signature(item.getLocalSignature())
                .version(item.getLocalSignatureVersion())
                .algorithm("SM2")
                .build());
        keyToIdMap.put(key, item.getExampleId());
        keyToEntityMap.put(key, item);
    }

    // 2. 批量本地验签（单次上限 500 条）
    Map<String, VerifyResult> localResults = signatureService.verifyLocalBatch(signatureMap);

    // 3. 收集本地验签失败的记录，逐条调用外部验签
    List<Long> failedIds = new ArrayList<>();
    int localPassed = 0;
    int externalPassed = 0;

    for (Map.Entry<String, VerifyResult> entry : localResults.entrySet()) {
        String key = entry.getKey();
        Long id = keyToIdMap.get(key);

        if (entry.getValue().isPassed()) {
            localPassed++;
            continue;
        }

        // 本地失败，调用外部验签兜底
        FloodExample entity = keyToEntityMap.get(key);
        boolean externalValid = signatureService.verifyExternal(key, entity.getSignature());
        if (externalValid) {
            externalPassed++;
            log.warn("本地验签失败但外部通过（建议重签）: id={}", id);
        } else {
            failedIds.add(id);
            log.error("数据签名验证失败: id={}", id);
        }
    }

    log.info("批量验签完成: 总数={}, 本地通过={}, 外部兜底通过={}, 失败={}",
            list.size(), localPassed, externalPassed, failedIds.size());

    return failedIds;
}
\`\`\`

### 5.8 验签失败处理

验签失败时直接抛出业务异常，通过统一的 \`ApiResult\` 错误响应返回前端：

\`\`\`java
/**
 * 单条验签，失败时抛出异常
 */
public void verifyOrThrow(FloodExample entity) {
    String key = buildSignatureKey(entity);

    // 1. 优先本地验签
    if (signatureService.verifyLocal(key, entity.getLocalSignature(), entity.getLocalSignatureVersion())) {
        return;
    }

    // 2. 外部验签兜底
    if (signatureService.verifyExternal(key, entity.getSignature())) {
        log.warn("本地验签失败但外部通过，建议重签: id={}", entity.getExampleId());
        return;
    }

    // 3. 两者均失败，抛出异常
    throw new ServiceException("数据签名验证失败，可能已被篡改（ID: " + entity.getExampleId() + "）");
}

/**
 * 批量验签，失败时抛出异常并携带失败 ID
 */
public void batchVerifyOrThrow(List<FloodExample> list) {
    List<Long> failedIds = batchVerify(list);
    if (!failedIds.isEmpty()) {
        throw new ServiceException("检测到 " + failedIds.size() + " 条数据签名异常，可能已被篡改，失败ID: " + failedIds);
    }
}
\`\`\`

**前端响应示例**：

\`\`\`json
{
    "code": 500,
    "message": "检测到 2 条数据签名异常，可能已被篡改，失败ID: [1876544321098765432, 1876544321098765433]",
    "success": false,
    "data": null
}
\`\`\`

---

## 六、版本管理

### 6.1 版本号定义

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| \`DEFAULT_VERSION\` | 1 | 未配置密钥时的默认版本号 |
| \`localSignatureVersion\` | 签名时的版本号 | 存储在 \`local_signature_version\` 字段 |
| \`signatureVersion\` | 签名时的版本号 | 存储在 \`signature_version\` 字段 |

### 6.2 密钥版本升级策略

签名算法升级时的处理流程：

1. **新增密钥配置**：在 \`local-signature-keys\` 列表中新增版本配置

\`\`\`yaml
local-signature-keys:
  - version: 1
    private-key: "..."  # 旧密钥
    public-key: "..."
  - version: 2
    private-key: "..."  # 新密钥
    public-key: "..."
\`\`\`

2. **新版本上线**：\`SignatureResult\` 自动使用版本号最大的密钥（version=2）进行签名

3. **存量迁移**：通过定时任务逐步将旧版本数据重新签名

4. **兼容验签**：验签时根据 \`signature_version\` 字段选择对应版本密钥

\`\`\`
验签流程：
    if (version == 1) → 使用 version=1 的公钥验签
    if (version == 2) → 使用 version=2 的公钥验签
    if (version == null || version == 0) → 跳过验签（存量脏数据）
\`\`\`

---

## 七、字段定义速查

> 详细建表 DDL 见 [数据库设计规范](./数据库设计规范.md) 第三章。

| 字段 | 类型 | 说明 |
|------|------|------|
| \`local_signature\` | VARCHAR(500) | 本地签名值（SM2），用于列表批量验签 |
| \`local_signature_version\` | INTEGER | 本地签名版本号 |
| \`signature\` | VARCHAR(500) | 一体化签名值，用于对接外部签名平台 |
| \`signature_version\` | INTEGER | 一体化签名版本号 |

---

> **相关文档**：
> - [数据库设计规范](./数据库设计规范.md) — 签名字段定义与建表规范
> - [架构设计规范](../微服务架构设计/系统架构设计说明书.md) — 第三章 数据架构
`,_=`# 日志规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-29
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

---

## 目录

- [一、@SysLog 注解定义](#一@SysLog注解定义)
- [二、四维协同关系](#二四维协同关系)
- [三、SubSystemEnum 与 ModuleTypeEnum 关系](#三SubSystemEnum与ModuleTypeEnum关系)
- [四、ModuleTypeEnum 编码规则](#四ModuleTypeEnum编码规则)
- [五、写入链路](#五写入链路)
- [六、敏感数据保护](#六敏感数据保护)
- [七、典型使用示例](#七典型使用示例)
- [八、设计意图](#八设计意图)

---

## 一、@SysLog 注解定义

\`@SysLog\` 注解用于记录操作日志，通过 **四维枚举** 多维刻画操作行为。

### 1.1 注解位置

\`\`\`
com.infoview.common.log.annotation.SysLog
\`\`\`

### 1.2 注解字段

| 字段 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| \`title()\` | \`String\` | \`""\` | 操作标题（日志展示名，建议用动词+名词，如「新增用户」「导出巡查记录」） |
| \`subSystem()\` | \`SubSystemEnum\` | \`COMMON\` | **子系统标识**（必填，产品维度） |
| \`funcType()\` | \`FuncTypeEnum\` | \`OTHER\` | **操作类型**（行为维度） |
| \`moduleType()\` | \`ModuleTypeEnum\` | \`OTHER_TYPE\` | **模块分类**（资源维度） |
| \`operatorType()\` | \`TerminalTypeEnum\` | \`BACKSTAGE\` | **操作端类型**（访问端维度） |
| \`isSaveRequest()\` | \`boolean\` | \`true\` | 是否保存请求参数（GET 截取 query string，POST 截取 JSON body） |
| \`isSaveResponse()\` | \`boolean\` | \`true\` | 是否保存响应数据 |

> **强制要求**：\`subSystem()\` 必须显式指定，禁止依赖默认值。

---

## 二、四维协同关系

四个枚举回答了四个**互相正交**的问题，构成「操作画像」：

\`\`\`
┌──────────────────────────────────────────────────────────────────┐
│                       操作日志四维画像                              │
├──────────────┬──────────────┬─────────────────┬──────────────────┤
│  产品维度      │  行为维度      │   资源维度        │   访问端维度       │
│ subSystem     │  funcType     │   moduleType    │   operatorType   │
├──────────────┼──────────────┼─────────────────┼──────────────────┤
│ 应急值守       │ INSERT 新增   │ DUTY_TYPE      │ BACKSTAGE 后台    │
│ 应急预案       │ UPDATE 修改   │ PLAN_TYPE      │ MOBILE 移动       │
│ 应急事件       │ DELETE 删除   │ EVENT_TYPE     │ LARGE_SCREEN 大屏 │
│ 应急调度       │ GRANT 授权   │ DISPATCH_TYPE  │ HARDWARE 硬件     │
│ 物资管理       │ IMPORT 导入   │ RESOURCE_TYPE  │                  │
│ 辅助决策       │ EXPORT 导出   │ DSS_TYPE       │                  │
│ 数据融合       │ UPLOAD 上传   │ FUSION_TYPE    │                  │
│ 汛期巡查       │ DOWNLOAD 下载 │ FLOOD_*_TYPE   │                  │
│ 第三方服务     │ CLEAN 清空   │ THIRD_PARTY_*  │                  │
│ 后台管理       │ SYNC 同步    │ UPMS_TYPE      │                  │
│ 公共          │ AUTH 认证    │ OTHER_TYPE     │                  │
│ 综合展示       │ OTHER 其他   │ AUTH_TYPE      │                  │
│              │              │ WORKFLOW_TYPE  │                  │
└──────────────┴──────────────┴─────────────────┴──────────────────┘
\`\`\`

### 2.1 各维度职责

| 维度 | 枚举 | 回答的问题 | 编码特点 |
|------|------|-----------|----------|
| **产品** | \`SubSystemEnum\` | 在哪个子系统发生？ | code 与 \`sys_subsystem.subsys_id\` 一致；附带 \`prefix\` 用于 RabbitMQ 路由键统一命名 |
| **行为** | \`FuncTypeEnum\` | 做了什么操作？ | code 0-11（OTHER / AUTH / INSERT / UPDATE / DELETE / GRANT / IMPORT / EXPORT / UPLOAD / DOWNLOAD / CLEAN / SYNC） |
| **资源** | \`ModuleTypeEnum\` | 操作的是哪个资源？ | code 采用 **「大类 × 100 + 子序号」** 编码（如 \`11101 = FLOOD_ORG_TYPE\`，前三位 \`111\` 对应 \`FLOOD_INSPECTION_TYPE\` 大类） |
| **端** | \`TerminalTypeEnum\` | 从哪个端发起？ | code 0-3（BACKSTAGE / MOBILE / LARGE_SCREEN / HARDWARE），默认 BACKSTAGE |

---

## 三、SubSystemEnum 与 ModuleTypeEnum 关系

### 3.1 两者区别

| 维度 | 描述 | 粒度 | 用途 |
|------|------|------|------|
| \`SubSystemEnum\` | 宏观业务域 | 粗粒度 | 跨子系统统计、消息路由、错误码前缀 |
| \`ModuleTypeEnum\` | 具体功能模块 | 细粒度 | 模块级精细化审计、聚合统计 |

### 3.2 联动示例

\`\`\`java
// 汛期巡查子系统的巡查任务模块导出操作
@SysLog(
    title = "导出巡查任务列表",
    subSystem = SubSystemEnum.FLOOD_INSPECTION,   // ① 宏观子系统
    moduleType = ModuleTypeEnum.FLOOD_TASK_TYPE,  // ② 具体资源模块
    funcType = FuncTypeEnum.EXPORT,               // ③ 行为
    operatorType = TerminalTypeEnum.BACKSTAGE     // ④ 访问端
)
\`\`\`

### 3.3 SubSystemEnum.prefix 的复用

\`SubSystemEnum\` 同时承担三重职责：

1. **日志分类**：\`@SysLog.subSystem\` 字段
2. **MQ 路由键命名**：\`SubSystemEnum.prefix\` 用于 RabbitMQ 交换机/队列前缀
3. **错误码前缀**：\`SubSystemEnum.buildErrorCode()\` 生成业务异常错误码

\`\`\`java
// 错误码 = 子系统code + 模块基础错误码
Integer code = SubSystemEnum.FLOOD_INSPECTION.buildErrorCode(20001);
// 结果：9 + "20001" = "920001"
\`\`\`

---

## 四、ModuleTypeEnum 编码规则

### 4.1 编码公式

\`\`\`
大类 × 100 + 子序号 = 子模块编码
\`\`\`

### 4.2 编码示例

\`\`\`
FLOOD_INSPECTION_TYPE = 110
    ↓ × 100
    FLOOD_ORG_TYPE      = 11101  (110 × 100 + 1)
    FLOOD_SYSTEM_TYPE   = 11102  (110 × 100 + 2)
    FLOOD_BASIC_TYPE    = 11103  (110 × 100 + 3)
    ...
    FLOOD_SUMMARY_TYPE  = 11111  (110 × 100 + 11)

THIRD_PARTY_TYPE     = 20
    ↓ × 100
    THIRD_PARTY_SMS_TYPE        = 2001  (20 × 100 + 1)
    THIRD_PARTY_FUSION_COMM_TYPE = 2002  (20 × 100 + 2)
    ...
\`\`\`

### 4.3 编码规则说明

| 规则 | 说明 |
|------|------|
| **大类 × 100 + 子序号** | 保留 2 位子序号空间，单大类最多支持 100 个子模块 |
| **末位 0 预留** | 当前 \`FLOOD_INSPECTION_TYPE\` 已用 11 个子模块，预留 89 个位置 |
| **末位 1 个位起** | 子序号从 \`× 01\` 开始（如 \`11101\`），便于按尾数快速识别 |

### 4.4 聚合统计能力

层级编码支持多维度聚合统计：

- **按大类汇总**：\`code BETWEEN 11000 AND 11999\` → FLOOD_INSPECTION 所有模块
- **按子模块细化**：\`code = 11101\` → FLOOD_ORG_TYPE 单模块
- **空间预留**：末位 0 未使用，未来可新增大类

---

## 五、写入链路

### 5.1 同步写入链路（主路径）

\`\`\`
Controller 方法（标注 @SysLog）
    ↓ LogAspect 切点 @annotation(com.infoview.common.log.annotation.SysLog)
    ↓ 解析注解 4 个枚举值 + HttpServletRequest（IP/UA/Browser/OS/Method/URI）
    ↓ 构造 SysAccessLog（含敏感字段脱敏）
    ↓ RemoteAccessLogService.saveLog(accessLog)   ← Feign 同步调用
    ↓ upms-biz 持久化到 sys_access_log 表
\`\`\`

### 5.2 异步事件链路（预留）

\`\`\`
Controller 执行 → @SysLog 切面 → 发布 SysLogEvent
                                      ↓（异步）
                              SysLogListener → Feign → UPMS → sys_access_log 表
\`\`\`

> **当前状态**：主路径是 \`LogAspect\` 同步调用。\`SysLogEvent\` + \`SysLogListener\` 已预留为异步方案。

---

## 六、敏感数据保护

### 6.1 LogAspect 内置脱敏字段清单

\`LogAspect\` 在记录请求参数和响应数据时，自动对以下敏感字段进行脱敏：

| 字段名（忽略大小写） | 脱敏规则 |
|---------------------|----------|
| \`password\` | 替换为 \`******\` |
| \`pwd\` | 替换为 \`******\` |
| \`oldPwd\` | 替换为 \`******\` |
| \`newPwd\` | 替换为 \`******\` |
| \`token\` | 替换为 \`******\` |
| \`secret\` | 替换为 \`******\` |
| \`loginName\` | 替换为 \`******\` |
| \`phone\` | 部分脱敏（如 \`176****1234\`） |
| \`email\` | 部分脱敏 |
| \`idCard\` | 部分脱敏（身份证号） |
| \`bankCard\` | 部分脱敏（银行卡号） |

### 6.2 脱敏方法

- \`desensitizeQueryString\`：对 GET 请求 query string 脱敏
- \`desensitizeJson\`：对 POST 请求 JSON body 脱敏

### 6.3 最佳实践

1. **避免传输原始密码**：即使日志会脱敏，仍建议避免在请求体中传输原始密码
2. **优先使用加密字段**：敏感数据在业务层加密后传输，日志记录加密值
3. **定期审计日志**：定期检查 \`sys_access_log\` 表，确保无敏感信息泄漏

---

## 七、典型使用示例

### 7.1 新增（INSERT）

\`\`\`java
@SysLog(title = "新增用户", subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.INSERT, moduleType = ModuleTypeEnum.UPMS_TYPE)
@PostMapping("/save")
public ApiResult<Long> save(@RequestBody SysUserSaveRequest request) { ... }
\`\`\`

### 7.2 删除（DELETE）

\`\`\`java
@SysLog(title = "批量删除App信息", subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.DELETE, moduleType = ModuleTypeEnum.UPMS_TYPE)
@PostMapping("/batchDelete")
public ApiResult<Void> batchDelete(@RequestBody AppInfoBatchRequest request) { ... }
\`\`\`

### 7.3 更新（UPDATE）

\`\`\`java
@SysLog(title = "修改巡查任务", subSystem = SubSystemEnum.FLOOD_INSPECTION, funcType = FuncTypeEnum.UPDATE, moduleType = ModuleTypeEnum.FLOOD_TASK_TYPE)
@PutMapping("/update")
public ApiResult<Void> update(@RequestBody FloodTaskUpdateRequest request) { ... }
\`\`\`

### 7.4 导出（EXPORT）

\`\`\`java
@SysLog(title = "导出巡查记录", subSystem = SubSystemEnum.FLOOD_INSPECTION, funcType = FuncTypeEnum.EXPORT, moduleType = ModuleTypeEnum.FLOOD_RECORD_TYPE, operatorType = TerminalTypeEnum.BACKSTAGE)
@GetMapping("/export")
public void export(FloodRecordQueryRequest request, HttpServletResponse response) { ... }
\`\`\`

### 7.5 下载（DOWNLOAD）

\`\`\`java
@SysLog(title = "App更新检查", subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.DOWNLOAD, moduleType = ModuleTypeEnum.UPMS_TYPE)
@GetMapping("/download")
public void download(AppDownloadRequest request, HttpServletResponse response) { ... }
\`\`\`

### 7.6 导入（IMPORT）

\`\`\`java
@SysLog(title = "导入物资清单", subSystem = SubSystemEnum.EMERGENCY_MATERIAL, funcType = FuncTypeEnum.IMPORT, moduleType = ModuleTypeEnum.RESOURCE_TYPE)
@PostMapping("/import")
public ApiResult<ImportResult> import(@RequestParam MultipartFile file) { ... }
\`\`\`

### 7.7 授权（GRANT）

\`\`\`java
@SysLog(title = "分配角色", subSystem = SubSystemEnum.SYSTEM, funcType = FuncTypeEnum.GRANT, moduleType = ModuleTypeEnum.UPMS_TYPE)
@PostMapping("/grant")
public ApiResult<Void> grant(@RequestBody SysUserGrantRequest request) { ... }
\`\`\`

### 7.8 同步（SYNC）

\`\`\`java
@SysLog(title = "同步气象数据", subSystem = SubSystemEnum.DATA_FUSION, funcType = FuncTypeEnum.SYNC, moduleType = ModuleTypeEnum.THIRD_PARTY_HIGHWAY_WEATHER_TYPE)
@PostMapping("/sync")
public ApiResult<Void> sync() { ... }
\`\`\`

### 7.9 认证（AUTH）

\`\`\`java
@SysLog(title = "用户登录", subSystem = SubSystemEnum.COMMON, funcType = FuncTypeEnum.AUTH, moduleType = ModuleTypeEnum.AUTH_TYPE)
@PostMapping("/login")
public ApiResult<LoginResponse> login(@RequestBody LoginRequest request) { ... }
\`\`\`

---

## 八、设计意图

### 8.1 解决的问题

- **操作日志四维枚举混用**：缺少统一规范，导致日志归因困难
- **SubSystemEnum 重复定义**：部分模块自行定义子系统枚举，与 \`SubSystemEnum\` 不一致
- **日志与 MQ 路由键不一致**：两个模块使用不同的命名体系，无法关联分析

### 8.2 正面收益（遵循规范）

- **多维查询能力**：可按「子系统 × 模块 × 操作 × 端」任意组合查询，满足审计追溯需求
- **审计合规**：四维画像满足合规审计要求，便于生成操作轨迹报告
- **MQ 路由键复用**：\`SubSystemEnum.prefix\` 同时用于日志分类和 MQ 命名，日志与消息一体化追溯
- **聚合统计**：\`ModuleTypeEnum\` 层级编码支持按大类/子模块聚合统计操作量
- **扩展友好**：新增业务子系统只需在枚举中添加值，无需改动切面和写入链路

### 8.3 负面代价（遵循规范）

- **\`@SysLog\` 注解每个写接口都要写**：每个 INSERT/UPDATE/DELETE/IMPORT/EXPORT 等操作接口需标注，约 2~3 分钟/接口
- **枚举值需要维护**：新增业务模块时需同时在 \`SubSystemEnum\` + \`ModuleTypeEnum\` 添加枚举值

### 8.4 不遵循的后果

- **审计数据不完整**：缺少 \`@SysLog\` 注解的操作无法追溯
- **无法按子系统统计**：枚举混用导致跨模块统计失效
- **MQ 路由键不一致**：日志与消息无法关联分析
- **敏感数据泄漏**：缺少脱敏机制，操作日志可能包含密码等敏感信息

### 8.5 适用边界

| 场景 | 规范要求 |
|------|----------|
| 新增 / 删除 / 更新 / 导入 / 导出 / 下载 / 上传 / 授权 / 清空 / 同步 / 认证等写操作 | **必须**标注 \`@SysLog\` |
| GET 查询、列表等读操作 | **不强制**标注 |
| 内部接口（Feign 调用） | 视业务需求决定 |
| 临时接口 / 测试接口 | 可酌情省略，但正式接口必须遵守 |
`,A=`# 服务间通信规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-29
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

---

## 目录

- [一、Feign 接口规范](#一feign-接口规范)
- [二、内部接口 @Inner](#二内部接口-inner)
- [三、第三方对接收敛](#三第三方对接收敛)
- [四、幂等设计](#四幂等设计)
- [五、熔断降级 Sentinel](#五熔断降级-sentinel)
- [六、设计意图](#六设计意图)

---

## 一、Feign 接口规范

### 1.1 接口定义位置

Feign 接口统一放置在 \`ecdp-*-api\` 模块中，**禁止**在业务模块中直接定义。

### 1.2 命名规范

Feign 接口命名必须以 \`Remote\` 开头，以 \`Service\` 结尾，格式：\`Remote{功能}Service\`。

| 功能 | 接口名 |
|------|--------|
| 菜单服务 | \`RemoteMenuService\` |
| 用户服务 | \`RemoteUserService\` |
| 应用信息 | \`RemoteAppInfoService\` |

### 1.3 接口定义模板

\`\`\`java
@FeignClient(contextId = "remoteFloodOrgMemberService",
             value = ServiceNameConstants.FLOOD_INSPECTION_SERVICE)
public interface RemoteOrgMemberService {

    @NoToken
    @GetMapping("/inner/member/listOrganizations")
    ApiResult<List<FloodUserOrganizationResponse>> listOrganizations(
            @RequestParam("userId") Long userId);

    @NoToken
    @PostMapping("/inner/member/pageMembers")
    ApiResult<PageResult<MemberResponse>> pageMembers(
            @RequestBody MemberPageRequest request);
}
\`\`\`

### 1.4 关键配置项

| 配置项 | 说明 | 示例 |
|--------|------|------|
| \`contextId\` | Feign Client 唯一标识 | \`"remoteFloodOrgMemberService"\` |
| \`value\` | 目标服务名（与 Nacos 注册名一致） | \`ServiceNameConstants.FLOOD_INSPECTION_SERVICE\` |

### 1.5 imports 自动注册

所有 Feign 接口必须在以下路径创建声明文件：

\`\`\`
META-INF/spring/org.springframework.cloud.openfeign.FeignClient.imports
\`\`\`

文件内容为 Feign 接口的全限定类名，每行一个：

\`\`\`
com.infoview.apis.flood.RemoteOrgMemberService
com.infoview.apis.upms.RemoteMenuService
com.infoview.apis.upms.RemoteUserService
\`\`\`

### 1.6 @NoToken 注解

Feign 调用时不携带用户 Token，用于内部服务间调用：

\`\`\`java
@NoToken
@GetMapping("/inner/member/listOrganizations")
ApiResult<List<OrgResponse>> listOrganizations(@RequestParam("userId") Long userId);
\`\`\`

---

## 二、内部接口 @Inner

### 2.1 @Inner 注解定义

\`\`\`java
@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface Inner {
    /**
     * true=内部接口，false=公开认证接口
     */
    boolean value() default true;
    /**
     * 扩展字段
     */
    String[] field() default {};
}
\`\`\`

### 2.2 使用场景

\`\`\`java
// 场景1：内部 Feign 调用（默认 value=true）
@Inner
@GetMapping("/inner/member/listOrganizations")
public ApiResult<List<OrgResponse>> listOrganizations(@RequestParam Long userId) { ... }

// 场景2：公开认证接口（value=false）
@Inner(value = false)
@PostMapping("/oauth2/token")
public ApiResult<TokenResponse> login(...) { ... }
\`\`\`

### 2.3 类级 vs 方法级

- **类级 \`@Inner\`**：整个 Controller 所有方法均为内部接口
- **方法级 \`@Inner\`**：仅标注的方法为内部接口

\`\`\`java
// 类级标注：整个控制器所有方法都是内部接口
@Inner
@RestController
@RequestMapping("/inner/member")
public class InnerOrgMemberController { ... }

// 方法级标注：仅标注的方法是内部接口
@RestController
@RequestMapping("/inner/member")
public class InnerOrgMemberController {
    @Inner
    @GetMapping("/listOrganizations")
    public ApiResult<List<OrgResponse>> listOrganizations() { ... }
}
\`\`\`

### 2.4 InnerAspect 校验逻辑

\`\`\`java
@Before("@within(inner) || @annotation(inner)")
public void around(JoinPoint point, Inner inner) {
    // value=true 时，要求请求头 from=Y
    if (inner != null && inner.value()
            && !StrUtil.equals(SecurityConstants.FROM_IN,
                request.getHeader(SecurityConstants.FROM))) {
        log.warn("拒绝访问内部接口: class={}, method={}", className, methodName);
        throw new AccessDeniedException("拒绝访问内部接口");
    }
}
\`\`\`

### 2.5 FeignInnerRequestInterceptor

Feign 调用时自动添加 \`from=Y\` 请求头：

\`\`\`java
@Component
public class FeignInnerRequestInterceptor implements RequestInterceptor {
    @Override
    public void apply(RequestTemplate template) {
        template.header(SecurityConstants.FROM, SecurityConstants.FROM_IN);
    }
}
\`\`\`

---

## 三、第三方对接收敛

### 3.1 收敛原则

项目所有外部系统对接（短信、预警、路段、里程桩、第三方接口采集等）**必须收敛到 \`ecdp-services/ecdp-third-party\` 微服务**，由其他模块通过 Feign 统一调用。

### 3.2 强制要求

| 要求 | 说明 |
|------|------|
| 对接请求集中 | 所有第三方 HTTP 调用必须在 \`ecdp-third-party\` 模块内，禁止在 \`ecdp-business/*\` 等业务模块中直接调用 |
| HTTP 工具类位置 | \`HttpUtils\` 不得放入 \`ecdp-common\`，下沉至 \`ecdp-third-party\` 限定使用 |
| 请求日志落库 | 第三方对接产生的请求/响应日志（\`SysHttpLog\`）由 \`HttpUtils\` 自动上报 |
| 跨模块调用方式 | 业务模块通过 \`ecdp-third-party-api\` 中的 \`RemoteXxxService\` Feign 接口调用 |

### 3.3 允许 vs 禁止

| 允许 | 禁止 |
|------|------|
| \`ecdp-third-party/utils/HttpUtils\`（第三方对接，支持日志上报） | \`ecdp-common-core\`、\`ecdp-common-data\` 中扩展第三方对接能力 |
| \`ecdp-common-core/http/HttpUtils\`（通用 HTTP 工具，不写日志） | 业务模块直接调用第三方接口 |
| \`ecdp-third-party-api/.../feign/RemoteXxxService\` | \`HttpUtils\` 跨模块复制（多实例） |

### 3.4 新增第三方对接流程

\`\`\`
步骤 1：在 ecdp-third-party 中创建 service 层实现第三方对接
步骤 2：在 ecdp-third-party-api 中创建 RemoteXxxService Feign 接口
步骤 3：在 META-INF/spring/org.springframework.cloud.openfeign.FeignClient.imports 注册
步骤 4：业务模块通过 @Autowired RemoteXxxService 注入使用
\`\`\`

### 3.5 Feign 接口模板

\`\`\`java
@FeignClient(contextId = "remoteFusionCommService",
             value = ServiceNameConstants.THIRD_PARTY_SERVICE)
public interface RemoteFusionCommService {

    @NoToken
    @PostMapping("/inner/fusion/sendMessage")
    ApiResult<Void> sendMessage(@RequestBody FusionMessageRequest request);
}
\`\`\`

### 3.6 HttpUtils 位置约束

\`\`\`
ecdp-third-party/utils/HttpUtils     ← 第三方对接专用（带日志上报）
ecdp-common-core/http/HttpUtils      ← 通用工具（不带日志）
\`\`\`

---

## 四、幂等设计

### 4.1 幂等原则

所有写操作接口（新增、更新、删除）必须考虑幂等性，防止重复提交导致的数据不一致。

### 4.2 Redis SETNX + 唯一约束

\`\`\`java
public boolean saveRole(SysRoleRequest request) {
    String idempotentKey = "idempotent:role:save:" + request.getEntId() + ":" + request.getCode();

    // Redis SETNX 保证同一请求只执行一次
    Boolean acquired = redisTemplate.opsForValue()
            .setIfAbsent(idempotentKey, "1", Duration.ofMinutes(5));

    if (Boolean.FALSE.equals(acquired)) {
        throw new ServiceException("请勿重复提交");
    }

    try {
        // 业务逻辑
        return roleMapper.insert(role) > 0;
    } catch (DuplicateKeyException e) {
        throw new ServiceException("该角色编码已存在");
    }
}
\`\`\`

### 4.3 数据库唯一约束

\`\`\`sql
-- 表设计时添加唯一约束
CREATE UNIQUE INDEX uk_role_code ON sys_role(ent_id, code, deleted);

-- 实体类对应字段
@TableName("sys_role")
public class SysRole extends Model<SysRole> {
    // 唯一约束字段
    @TableField("code")
    private String code;

    @TableField("ent_id")
    private Long entId;
}
\`\`\`

### 4.4 幂等场景清单

| 场景 | 幂等方案 |
|------|----------|
| 新增角色 | Redis SETNX + 数据库唯一约束 |
| 新增用户 | Redis SETNX + 数据库唯一约束 |
| 第三方数据同步 | Redis SETNX + 业务状态机 |
| 文件上传 | Redis SETNX + 文件 MD5 去重 |

---

## 五、熔断降级 Sentinel

### 5.1 当前状态

\`ecdp-common-feign\` 已引入 \`spring-cloud-starter-alibaba-sentinel\` 依赖，但当前**未配置 FallbackFactory**。Feign 接口未启用熔断降级，仅依赖 Sentinel 的基础限流能力。

### 5.2 熔断降级配置模板

\`\`\`java
@FeignClient(contextId = "remoteXxxService",
             value = "ecdp-xxx",
             fallbackFactory = RemoteXxxServiceFallbackFactory.class)
public interface RemoteXxxService { ... }

// FallbackFactory 实现
@Component
public class RemoteXxxServiceFallbackFactory
        implements FallbackFactory<RemoteXxxService> {

    @Override
    public RemoteXxxService create(Throwable cause) {
        return new RemoteXxxService() {
            @Override
            public ApiResult<XxxResponse> getXxx(Long id) {
                log.error("调用 RemoteXxxService 失败，熔断降级", cause);
                return ApiResult.fail("服务暂时不可用，请稍后重试");
            }
        };
    }
}
\`\`\`

### 5.3 Feign 重试配置

通过 \`application.yml\` 配置 Feign 重试策略：

\`\`\`yaml
feign:
  client:
    config:
      default:
        connectTimeout: 5000
        readTimeout: 10000
        retryer: feign.Retryer.Default
\`\`\`

### 5.4 生产环境待办

> **重要**：所有 \`Remote*Service\` Feign 接口均需在生产环境上线前补充降级逻辑。

---

## 六、设计意图

### 解决的问题

业务模块重复对接第三方（改密钥要改 N 处）、HTTP 工具散落。

### 正面收益（遵循规范）

- **凭据集中管控**：第三方凭据（appKey、appSecret、token）只在 \`ecdp-third-party\` 持有，缩小泄露面
- **第三方日志统一审计**：请求日志统一在 \`ecdp-third-party\` 落库，便于审计、链路追踪、异常归因
- **灰度熔断只改一处**：第三方对接降级、限流、熔断只需在 \`ecdp-third-party\` 集中处理

### 负面代价（遵循规范）

- 第三方新增时需在 third-party 走一遍流程（轻微延迟）
- 需要维护 Feign 接口与实现类的对应关系

### 不遵循的后果

- **密钥泄露面扩大**：每个业务模块都持有第三方凭据，一个模块被攻破则全部泄露
- **日志归属混乱**：HTTP 日志散落在各业务模块，无法统一归因
- **第三方故障时无法统一降级**：各模块自行处理，响应不一致，用户体验差

### 适用边界

- **必须遵守**：所有第三方外部系统对接（短信、预警、路段、里程桩、融合通信等）
- **酌情变通**：纯内部服务间调用（Feign）无需经过 third-party，直接使用 \`RemoteXxxService\`
- **例外**：微服务架构初期、快速原型验证阶段可临时在业务模块直接对接，但需在正式版前迁移

---

> **相关规范**
> - [接口设计规范](./接口设计规范.md) — Feign 接口返回类型约束
> - [异常处理规范](./异常处理规范.md) — 服务韧性、熔断降级
`,O=`# 消息队列规范

> **文档版本**: v1.0
> **编制日期**: 2026-07-29
> **适用版本**: ECDP-Cloud 全版本
> **文档状态**: 正式发布

---

## 目录

- [一、术语（延时队列方案对比）](#一术语延时队列方案对比)
- [二、交换机与队列命名](#二交换机与队列命名)
- [三、消息体规范](#三消息体规范)
- [四、消费者规范](#四消费者规范)
- [五、业务代码位置](#五业务代码位置)
- [六、典型场景](#六典型场景)
- [七、设计意图](#七设计意图)

---

## 一、术语（延时队列方案对比）

### 1.1 延时队列

消息队列支持消息延迟投递的特性，用于解决「定时触发」场景（如订单超时关闭、任务延迟执行等）。

### 1.2 三种实现方案对比

| 方案 | 原理 | 优点 | 缺点 | 适用场景 |
|------|------|------|------|----------|
| **TTL + DLX** | 队列设置 TTL，消息过期后进入死信交换机（DLX）重新路由 | 实现简单，无需插件 | 精度低（秒级），消息堆积时延迟不准 | 简单延迟（5s/30s/1min） |
| **x-delayed-message** | RabbitMQ 延迟消息插件，支持精确毫秒级延迟 | 精度高（毫秒），单条消息独立延迟 | 需要安装插件，集群部署复杂 | 精确延迟（业务定时触发） |
| **数据库轮询** | 定时任务扫描数据库「待执行」状态记录 | 无额外依赖，可靠性高 | 存在轮询开销，延迟取决于定时频率 | 可靠性要求高的业务任务 |

> **项目现状**：当前主要使用 RabbitMQ，消息监听采用 \`@RabbitListener\` + \`@MqConsumerLog\` 自动 ACK 机制。

---

## 二、交换机与队列命名

### 2.1 命名原则

交换机、队列、路由键命名统一采用 **三段式**：\`{prefix}.{module}.{action}\`

- **prefix**：子系统前缀，来源于 \`SubSystemEnum.prefix\`
- **module**：业务模块名
- **action**：操作行为（如 \`created\`、\`exported\`、\`filled\`）

### 2.2 SubSystemEnum 前缀对照

| 枚举值 | prefix | 说明 |
|--------|--------|------|
| \`COMMON\` | \`common\` | 公共模块 |
| \`SYSTEM\` | \`system\` | 系统管理 |
| \`UPMS\` | \`upms\` | 用户权限 |
| \`DUTY\` | \`duty\` | 应急值守 |
| \`PLAN\` | \`plan\` | 应急预案 |
| \`EVENT\` | \`event\` | 应急事件 |
| \`DISPATCH\` | \`dispatch\` | 应急调度 |
| \`RESOURCE\` | \`resource\` | 物资管理 |
| \`EMERGENCY_MATERIAL\` | \`material\` | 应急物资 |
| \`DSS\` | \`dss\` | 辅助决策 |
| \`FUSION\` | \`fusion\` | 数据融合 |
| \`DATA_FUSION\` | \`datafusion\` | 数据融合（新） |
| \`FLOOD_INSPECTION\` | \`flood\` | 汛期巡查 |
| \`THIRD_PARTY\` | \`thirdparty\` | 第三方服务 |
| \`WORKFLOW\` | \`workflow\` | 工作流 |

### 2.3 命名示例

\`\`\`java
// 交换机命名
public static final String TASK_EXCHANGE = "flood.task.exchange";

// 队列命名
public static final String TASK_QUEUE = "flood.task.created.queue";

// 路由键命名（与 @SysLog 的 moduleType 联动）
public static final String TASK_ROUTING_KEY = "flood.task.created";

// 完整链路示例
@Bean
public DirectExchange taskExchange() {
    return new DirectExchange("flood.task.exchange");
}

@Bean
public Queue taskQueue() {
    return QueueBuilder.durable("flood.task.created.queue")
            .withArgument("x-dead-letter-exchange", "flood.task.dlx")
            .withArgument("x-dead-letter-routing-key", "flood.task.created.dlx")
            .build();
}

@Bean
public Binding taskBinding(Queue taskQueue, DirectExchange taskExchange) {
    return BindingBuilder.bind(taskQueue).to(taskExchange).with("flood.task.created");
}
\`\`\`

### 2.4 强制要求

1. **前缀强制**：交换机/队列命名必须以 \`SubSystemEnum.prefix\` 开头
2. **三段式**：格式为 \`{prefix}.{module}.{suffix}\`，禁止随意命名
3. **路由键与模块协同**：路由键格式与 \`@SysLog.moduleType\` 保持一致，便于日志关联

---

## 三、消息体规范

### 3.1 JSON 序列化

消息体统一使用 **JSON 序列化**，禁止使用 Java 原生序列化。

\`\`\`java
@Data
@Schema(description = "任务生成消息")
public class TaskGenerateMessage implements Serializable {

    @Serial
    private static final long serialVersionUID = 1L;

    @Schema(description = "任务ID")
    private Long taskId;

    @Schema(description = "任务名称")
    private String taskName;

    @Schema(description = "创建时间")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createTime;
}
\`\`\`

### 3.2 @Schema 标注

消息类字段必须标注 \`@Schema(description = "...")\`，便于：
- 消息体字段语义清晰
- 日志打印时字段可读
- 消费者和生产者契约明确

### 3.3 serialVersionUID

所有消息类必须实现 \`Serializable\` 并声明 \`serialVersionUID\`：

\`\`\`java
public class XxxMessage implements Serializable {
    @Serial
    private static final long serialVersionUID = 1L;
    // ...
}
\`\`\`

### 3.4 消息体设计原则

1. **最小化字段**：只传递消费者需要的字段，减少消息体大小
2. **避免嵌套**：优先使用扁平的 JSON 结构
3. **时间字段**：统一使用 \`LocalDateTime\`，并配置 \`@JsonFormat\`
4. **ID 字段类型**：主键使用 \`Long\`（雪花算法），避免使用 \`String\`

---

## 四、消费者规范

### 4.1 @RabbitListener 注解

\`\`\`java
@Component
@RequiredArgsConstructor
public class TaskGenerateListener {

    private final ITaskService taskService;

    @MqConsumerLog(description = "任务生成监听器")
    @RabbitListener(queues = AmqpConstants.TASK_QUEUE)
    public void onMessage(Message message, Channel channel) {
        try {
            // 1. 解析消息体
            TaskGenerateMessage msg = JSON.parseObject(message.getBody(), TaskGenerateMessage.class);
            
            // 2. 业务处理
            taskService.processTaskGenerate(msg);
            
            // 3. ACK 由 @MqConsumerLog + MQReceiveLoggerAspect 自动处理
        } catch (Exception e) {
            log.error("任务生成消息处理失败", e);
            throw e; // 抛出异常触发 NackStrategy
        }
    }
}
\`\`\`

### 4.2 @MqConsumerLog 自动 ACK

\`@MqConsumerLog\` 注解配合 \`MQReceiveLoggerAspect\` AOP 切面实现自动 ACK：

| 执行结果 | 处理方式 |
|----------|----------|
| 方法正常返回 | 自动调用 \`RabbitAckUtil.ack(channel, deliveryTag)\` |
| 方法抛出异常 | 根据 \`NackStrategy\` 执行 nack 或 requeue |

**NackStrategy 枚举**：

| 策略 | 说明 |
|------|------|
| \`REQUEUE\` | 重新入队，重试消费 |
| \`NACK\` | 拒绝消息，进入 DLX（死信队列） |
| \`DISCARD\` | 直接丢弃 |

### 4.3 消费日志持久化

消息消费日志通过 \`MqConsumerLog\` 实体持久化到 \`mq_consume_log\` 表，便于：
- 消息消费链路追溯
- 消费失败原因分析
- 消息重复消费幂等校验

### 4.4 消费者规范要求

1. **禁止手动 ACK**：\`@MqConsumerLog\` 已封装自动 ACK，勿重复调用
2. **异常外抛**：业务处理失败时必须抛出异常，由框架决定 NackStrategy
3. **幂等处理**：消费者必须处理重复消息（建议使用 Redis SETNX 幂等锁）
4. **禁止阻塞**：消费者方法必须快速返回，禁止在方法内执行耗时操作

---

## 五、业务代码位置

### 5.1 禁止放 ecdp-common-rabbitmq

**禁止**在 \`ecdp-common-rabbitmq\` 公共模块中编写业务代码，包括：
- 业务消息体定义（应放在对应业务 API 模块）
- 业务消息监听器（应放在对应业务模块）
- 业务交换机/队列声明（应放在对应业务模块）

### 5.2 业务模块 amqp 子包结构

业务微服务中使用 RabbitMQ 时，按以下结构组织：

\`\`\`
com.infoview.business.{module}/
├── amqp/
│   ├── config/                    # 交换机、队列声明配置
│   │   ├── FloodAmqpConfig.java
│   │   └── AmqpConstants.java    # 交换机、队列、路由键常量
│   ├── constant/
│   │   └── RoutingKeyConstants.java
│   ├── listener/                  # 消息监听器（业务逻辑）
│   │   ├── TaskGenerateListener.java
│   │   ├── TaskComplianceListener.java
│   │   ├── PileNoFillCoordinateListener.java
│   │   └── MileageStatisticsListener.java
│   └── message/                   # 消息体定义
│       ├── TaskGenerateMessage.java
│       └── TaskComplianceMessage.java
\`\`\`

### 5.3 依赖引入

业务模块使用 RabbitMQ 时，需要在 \`pom.xml\` 中引入：

\`\`\`xml
<dependency>
    <groupId>com.infoview</groupId>
    <artifactId>ecdp-common-rabbitmq</artifactId>
</dependency>
\`\`\`

---

## 六、典型场景

### 6.1 延时触发（TTL + DLX）

场景：任务创建后延迟 N 分钟触发合规检查。

\`\`\`java
// 1. 配置死信交换机和死信队列
@Bean
public DirectExchange taskDlxExchange() {
    return new DirectExchange("flood.task.dlx");
}

@Bean
public Queue taskDlxQueue() {
    return QueueBuilder.durable("flood.task.dlx.queue").build();
}

@Bean
public Binding taskDlxBinding() {
    return BindingBuilder.bind(taskDlxQueue())
            .to(taskDlxExchange())
            .with("flood.task.created.dlx");
}

// 2. 业务队列设置 TTL，过期消息进入 DLX
@Bean
public Queue delayCheckQueue() {
    return QueueBuilder.durable("flood.task.delaycheck.queue")
            .withArgument("x-message-ttl", 300000)  // 5分钟 TTL
            .withArgument("x-dead-letter-exchange", "flood.task.dlx")
            .withArgument("x-dead-letter-routing-key", "flood.task.created.dlx")
            .build();
}

// 3. 监听死信队列触发合规检查
@RabbitListener(queues = "flood.task.dlx.queue")
public void onDelayCheck(Message message, Channel channel) {
    // 执行合规检查逻辑
}
\`\`\`

### 6.2 异步解耦

场景：任务导出完成后异步发送通知。

\`\`\`java
// 生产者：任务导出完成后发送消息
@RequiredArgsConstructor
public class TaskExportService {

    private final RabbitTemplate rabbitTemplate;

    public void exportTask(Long taskId) {
        // 1. 执行导出逻辑
        byte[] excelData = doExport(taskId);
        
        // 2. 发送异步通知消息
        TaskExportMessage message = new TaskExportMessage();
        message.setTaskId(taskId);
        message.setFileName("任务导出.xlsx");
        message.setExportTime(LocalDateTime.now());
        
        rabbitTemplate.convertAndSend(
            "flood.task.exchange",
            "flood.task.exported",
            JSON.toJSONString(message)
        );
    }
}

// 消费者：监听导出完成消息
@RabbitListener(queues = "flood.task.exported.queue")
public void onTaskExported(Message message, Channel channel) {
    TaskExportMessage msg = JSON.parseObject(message.getBody(), TaskExportMessage.class);
    // 发送通知（邮件/短信/站内信）
}
\`\`\`

### 6.3 延迟补偿

场景：消息处理失败后延迟重试。

\`\`\`java
@MqConsumerLog(description = "合规检查监听器")
@RabbitListener(queues = AmqpConstants.COMPLIANCE_QUEUE)
public void onComplianceCheck(Message message, Channel channel) {
    try {
        TaskComplianceMessage msg = JSON.parseObject(message.getBody(), TaskComplianceMessage.class);
        complianceService.process(msg);
    } catch (RetryableException e) {
        // 抛出 RetryableException，框架自动延迟重试
        throw new RetryableException("处理中，请稍后重试");
    }
}
\`\`\`

---

## 七、设计意图

### 7.1 解决的问题

- **交换机/队列命名混乱**：各业务模块自创格式，无统一规范
- **业务代码侵入 common**：业务监听器、消息体定义错误地放在公共模块
- **路由键无规律**：消费者绑定、消息发送使用不同格式的路由键

### 7.2 正面收益（遵循规范）

- **队列命名可预期**：通过 \`SubSystemEnum.prefix\` 前缀，任何人看一眼队列名就知道归属哪个子系统
- **交换机路由键全局统一**：三段式命名 \`{prefix}.{module}.{action}\` 与 \`@SysLog.moduleType\` 联动，日志与 MQ 一体化追溯
- **common 模块职责清晰**：\`ecdp-common-rabbitmq\` 只提供配置抽象，业务逻辑下沉到业务模块
- **排障效率提升**：消息丢失或消费异常时，可按命名规则快速定位生产者和消费者

### 7.3 负面代价（遵循规范）

- **需要遵守 SubSystemEnum 前缀约束**：新增子系统需要先在枚举中添加 prefix（轻微学习成本）
- **交换机/队列声明代码量增加**：每个业务需要单独配置 Bean（初期开发量略增）

### 7.4 不遵循的后果

- **路由键冲突**：不同模块使用相同路由键导致消息被错误消费者捕获
- **消息丢失**：队列命名不规范导致消费者无法正确绑定
- **排障困难**：消息消费失败时无法按命名追溯到具体业务模块
- **common 膨胀**：业务代码混入公共模块，维护成本增加

### 7.5 适用边界

| 场景 | 规范要求 |
|------|----------|
| 所有 RabbitMQ 业务队列 | 必须遵守三段式命名规则 |
| 所有消息体定义 | 必须放在业务模块 amqp/message 子包 |
| 所有消息监听器 | 必须放在业务模块 amqp/listener 子包 |
| 交换机/队列配置 | 必须放在业务模块 amqp/config 子包 |
| 临时/测试队列 | 可酌情变通，但禁止用于生产环境 |
`,N=`# 广东省应急指挥调度平台（ECDP-Cloud）系统架构设计说明书

> **文档版本**: v1.0  
> **编制日期**: 2026-07-29  
> **适用版本**: ECDP-Cloud 全版本  
> **文档类型**: 架构设计说明书  
> **文档状态**: 正式发布  
> **文档来源**: 本文档描述后端微服务版（ECDP-Cloud）的架构设计，收录于本前端演示仓库 \`docs/\` 作为设计参考资料；其引用的 AGENTS.md、容器化部署文档等位于后端仓库，本仓库未收录。

---

## 目录

- [第一章 文档概述](#第一章-文档概述)
- [第二章 建设背景与架构目标](#第二章-建设背景与架构目标)
- [第三章 总体架构设计](#第三章-总体架构设计)
- [第四章 业务架构设计](#第四章-业务架构设计)
- [第五章 应用架构与模块设计](#第五章-应用架构与模块设计)
- [第六章 数据架构设计](#第六章-数据架构设计)
- [第七章 技术架构设计](#第七章-技术架构设计)
- [第八章 安全架构设计](#第八章-安全架构设计)
- [第九章 集成与服务通信设计](#第九章-集成与服务通信设计)
- [第十章 部署架构与运行环境](#第十章-部署架构与运行环境)
- [第十一章 运维、监控与韧性设计](#第十一章-运维监控与韧性设计)
- [第十二章 架构演进说明](#第十二章-架构演进说明)
- [附录 相关文档](#附录-相关文档)

---

# 第一章 文档概述

## 1.1 文档目的

本文档用于说明 **广东省应急指挥调度平台（ECDP-Cloud）** 的系统架构设计，包括系统建设目标、总体架构、业务架构、应用模块划分、数据架构、安全架构、技术组件、服务通信、部署运行和运维韧性等内容。

本文档从“系统如何设计、为什么这样设计、各组成部分如何协同”的角度进行说明，主要用于帮助项目干系人、架构师、开发人员、测试人员、运维人员理解系统整体结构与设计思路。

## 1.2 文档定位

本文档已由原先的“架构设计规范”调整为“系统架构设计说明书”。调整后的定位如下：

- **架构设计说明书**：描述系统架构方案、模块组成、技术选型、交互关系和部署形态；
- **开发规范类文档**：约束代码命名、接口风格、数据库设计、异常处理、日志处理等实现细节；
- **运维部署类文档**：说明环境准备、容器部署、中间件部署、服务启停和日常运维操作。

因此，本文档不再作为具体编码规范的唯一来源。涉及接口、数据库、日志、异常、服务通信等详细约束时，以对应专项规范文档为准，本文档仅保留架构层面的说明和引用。

## 1.3 适用范围

本文档适用于 ECDP-Cloud 平台的：

- 总体架构评审；
- 微服务模块划分说明；
- 技术选型说明；
- 系统集成设计说明；
- 部署方案设计说明；
- 新模块接入前的架构理解；
- 开发、测试、运维交接。

## 1.4 读者对象

| 读者 | 关注内容 |
| --- | --- |
| 项目负责人 | 系统建设目标、模块边界、部署规模、演进方向 |
| 架构师 | 总体架构、技术选型、服务通信、安全与数据架构 |
| 开发人员 | 模块职责、依赖关系、公共能力、接口协作方式 |
| 测试人员 | 服务边界、接口链路、部署环境、关键业务流程 |
| 运维人员 | 部署架构、端口规划、中间件依赖、日志与监控 |

## 1.5 术语说明

| 术语 | 说明 |
| --- | --- |
| ECDP-Cloud | 广东省应急指挥调度平台微服务版本 |
| Gateway | API 网关服务，统一承接外部请求并转发至后端微服务 |
| Auth | 认证授权服务，负责 OAuth2 登录、Token 颁发和校验 |
| UPMS | 统一权限管理系统，负责用户、角色、菜单、组织等基础权限能力 |
| API 模块 | 仅承载服务间调用契约、DTO、实体、Feign 接口等，不包含业务实现 |
| Biz 模块 | 业务实现模块，承载 Controller、Service、Mapper、业务逻辑等 |
| Nacos | 注册中心与配置中心 |
| OpenFeign | 服务间声明式 HTTP 调用框架 |
| OpenGauss | 系统主数据库 |

---

# 第二章 建设背景与架构目标

## 2.1 建设背景

广东省应急指挥调度平台面向省级应急管理和多部门协同场景，支撑值班值守、事件接报、预案管理、调度指挥、资源管理、辅助决策、数据融合、防汛巡查、第三方系统对接等综合业务。

平台需要面对业务域多、用户角色多、系统集成多、数据安全要求高、运行连续性要求高等特点，因此采用微服务架构进行系统拆分，通过统一网关、统一认证、统一权限、统一配置和统一公共能力降低系统复杂度。

## 2.2 架构目标

系统架构设计目标如下：

| 目标 | 说明 |
| --- | --- |
| 业务解耦 | 按业务域拆分微服务，降低模块间耦合，支持独立开发、测试、部署和扩展 |
| 统一入口 | 通过网关统一承接外部访问，集中处理路由、认证、限流和跨域等入口能力 |
| 统一认证 | 通过认证授权中心统一颁发和校验 Token，保障身份可信 |
| 统一权限 | 通过 UPMS 提供用户、角色、菜单、权限等平台级基础能力 |
| 数据安全 | 通过加密、脱敏、数据签名、权限控制等机制保障数据安全和完整性 |
| 弹性扩展 | 微服务可按业务压力独立扩容，支持容器化部署和后续 Kubernetes 编排 |
| 运维可控 | 通过统一配置、统一日志、服务注册发现和标准化部署降低运维复杂度 |
| 持续演进 | 支持新增业务域、第三方系统接入和基础能力扩展 |

## 2.3 架构设计原则

ECDP-Cloud 的架构设计遵循以下原则：

1. **业务域驱动拆分**：以业务职责和数据边界作为服务划分依据；
2. **公共能力下沉**：认证、安全、日志、数据访问、Feign、Swagger、加密等通用能力沉淀到公共模块；
3. **接口契约前置**：跨服务调用通过 API 模块和 Feign 接口定义契约；
4. **配置外部化**：环境差异、数据库连接、中间件连接、业务开关等配置统一由 Nacos 管理；
5. **安全内建**：认证、权限、数据脱敏、数据签名、内部接口校验作为平台基础能力；
6. **部署可替换**：支持 Docker Compose 部署，并为 Kubernetes 编排预留演进空间；
7. **渐进式治理**：熔断降级、链路追踪、监控告警等治理能力按系统阶段逐步增强。

## 2.4 质量目标

| 质量属性 | 设计说明 |
| --- | --- |
| 可用性 | 核心服务按 7×24 小时运行设计，关键模块目标可用性不低于 99.9% |
| 可维护性 | 通过多模块结构、公共组件和规范化接口降低维护成本 |
| 可扩展性 | 支持按业务域新增服务，支持服务实例水平扩展 |
| 安全性 | 提供认证、授权、数据加密、数据脱敏和数据签名能力 |
| 可观测性 | 通过统一日志、操作日志、健康检查和后续监控体系支撑运维排障 |
| 可部署性 | 通过 Maven Profile、Nacos 配置和容器化部署支持多环境发布 |

---

# 第三章 总体架构设计

## 3.1 总体架构视图

ECDP-Cloud 采用分层微服务架构，整体由接入层、认证与网关层、平台服务层、业务服务层、基础服务层、公共能力层、数据与中间件层组成。

\`\`\`text
┌────────────────────────────────────────────────────────────────────┐
│                            客户端接入层                              │
│        后台管理端 | 移动端 | 指挥大屏 | 第三方系统 | 运维入口          │
└───────────────────────────────┬────────────────────────────────────┘
                                │ HTTPS / HTTP
┌───────────────────────────────▼────────────────────────────────────┐
│                         网关与认证层                                 │
│  ecdp-gateway：统一入口、路由、JWT 校验、限流、跨域、API 聚合          │
│  ecdp-auth：OAuth2 认证授权、Token 颁发、Token 内省、Token 撤销        │
└───────────────────────────────┬────────────────────────────────────┘
                                │ OpenFeign / REST
┌───────────────────────────────▼────────────────────────────────────┐
│                         平台服务层                                   │
│  ecdp-upms-api + ecdp-upms-biz：用户、组织、角色、菜单、权限、日志      │
└───────────────────────────────┬────────────────────────────────────┘
                                │
┌───────────────────────────────▼────────────────────────────────────┐
│                         业务服务层                                   │
│  ecdp-duty        应急值守        ecdp-plan       应急预案             │
│  ecdp-event       应急事件        ecdp-dispatch   调度指挥             │
│  ecdp-resource    应急资源        ecdp-dss        辅助决策             │
│  ecdp-fusion      数据融合        ecdp-flood-inspection 防汛巡查        │
└───────────────────────────────┬────────────────────────────────────┘
                                │
┌───────────────────────────────▼────────────────────────────────────┐
│                         基础服务层                                   │
│  ecdp-third-party：第三方系统集成                                     │
│  ecdp-workflow：工作流引擎与流程能力                                  │
└───────────────────────────────┬────────────────────────────────────┘
                                │
┌───────────────────────────────▼────────────────────────────────────┐
│                         公共能力层                                   │
│  ecdp-common-core | data | security | feign | log | encrypt          │
│  sensitive | swagger | s3 | xxl-job | rabbitmq | wps | bom           │
└───────────────────────────────┬────────────────────────────────────┘
                                │
┌───────────────────────────────▼────────────────────────────────────┐
│                         数据与中间件层                               │
│  OpenGauss | Redis | Nacos | RabbitMQ | XXL-JOB | S3 | WPS 服务       │
└────────────────────────────────────────────────────────────────────┘
\`\`\`

## 3.2 请求处理链路

外部请求统一从 \`ecdp-gateway\` 进入，网关完成基础认证校验和路由转发，业务服务完成方法级权限校验和业务处理。

\`\`\`text
客户端
  │
  │ 1. 携带 Token 发起请求
  ▼
ecdp-gateway
  │ 2. 校验 JWT、匹配路由、转发请求
  ▼
目标业务服务
  │ 3. 通过资源服务器能力进行 Token 内省
  │ 4. 通过 @HasPermission 执行权限校验
  │ 5. 执行业务逻辑、访问数据库或调用其他服务
  ▼
OpenGauss / Redis / 其他微服务
  │
  ▼
统一 ApiResult 响应
\`\`\`

## 3.3 服务协作关系

| 协作关系 | 说明 |
| --- | --- |
| 客户端 → 网关 | 所有外部业务请求统一进入网关，由网关按路由转发 |
| 网关 → 认证服务 | 登录、Token 校验、Token 刷新等认证相关能力由 Auth 提供 |
| 业务服务 → UPMS | 获取用户、组织、角色、权限、日志入库等平台基础能力 |
| 业务服务 → 业务服务 | 通过 API 模块定义契约，通过 OpenFeign 发起调用 |
| 业务服务 → 基础服务 | 第三方系统对接、流程流转、文件处理等能力由基础服务提供 |
| 服务 → 中间件 | 通过 Nacos、Redis、RabbitMQ、XXL-JOB、S3 等组件完成配置、缓存、消息和任务调度 |

## 3.4 架构边界说明

系统通过服务边界控制职责范围：

- \`ecdp-gateway\` 只负责入口治理，不承载业务逻辑；
- \`ecdp-auth\` 只负责认证授权和 Token 生命周期管理；
- \`ecdp-upms-biz\` 承载平台级用户、组织、角色、菜单、权限等能力；
- 业务服务承载各自业务域逻辑，不直接操作其他业务服务的数据表；
- API 模块仅承载接口契约，不包含业务实现；
- 公共模块只提供通用能力，不反向依赖业务模块。

---

# 第四章 业务架构设计

## 4.1 业务域划分

ECDP-Cloud 按应急业务链路划分为平台支撑域、应急业务域、辅助决策域、外部集成域和流程支撑域。

| 业务域 | 对应服务 | 主要职责 |
| --- | --- | --- |
| 平台支撑域 | \`ecdp-upms-biz\` | 用户、组织、角色、菜单、权限、操作日志等平台基础能力 |
| 应急值守域 | \`ecdp-duty\` | 值班值守、值班安排、值守记录等 |
| 应急预案域 | \`ecdp-plan\` | 预案管理、预案版本、预案关联资源等 |
| 应急事件域 | \`ecdp-event\` | 事件接报、事件流转、事件处置记录等 |
| 调度指挥域 | \`ecdp-dispatch\` | 指挥调度、任务派发、处置跟踪等 |
| 应急资源域 | \`ecdp-resource\` | 物资、队伍、装备、资源点等应急资源管理 |
| 辅助决策域 | \`ecdp-dss\` | 决策分析、统计汇总、态势研判等 |
| 数据融合域 | \`ecdp-fusion\` | 多源数据融合、数据治理、数据分析支撑 |
| 防汛巡查域 | \`ecdp-flood-inspection\` | 防汛巡查、巡查任务、隐患问题、业务域权限自治 |
| 外部集成域 | \`ecdp-third-party\` | 天气、高速、里程桩、融合通信等第三方能力对接 |
| 流程支撑域 | \`ecdp-workflow\` | 流程定义、流程实例、审批流转等工作流能力 |

## 4.2 核心业务链路

平台围绕应急事件处置形成业务闭环：

\`\`\`text
事件接报
  │
  ▼
事件研判与分级
  │
  ▼
预案匹配与资源查询
  │
  ▼
调度指挥与任务派发
  │
  ▼
处置过程跟踪
  │
  ▼
结果反馈与复盘分析
\`\`\`

在该链路中：

- \`ecdp-event\` 负责事件接报、事件基础信息和处置过程记录；
- \`ecdp-plan\` 提供应急预案和处置依据；
- \`ecdp-resource\` 提供应急队伍、物资和装备数据；
- \`ecdp-dispatch\` 负责调度指挥和任务派发；
- \`ecdp-dss\` 和 \`ecdp-fusion\` 提供态势分析、辅助决策和数据支撑；
- \`ecdp-third-party\` 补充外部数据和外部系统能力。

## 4.3 多端业务访问

系统面向不同终端提供差异化接口：

| 端类型 | 接口前缀 | 说明 |
| --- | --- | --- |
| 后台管理端 | \`/backend\` | 面向管理员、运维人员和业务管理人员 |
| 移动端 | \`/mobile\` | 面向移动 App、小程序、移动巡查等场景 |
| 指挥大屏端 | \`/screen\` | 面向指挥中心大屏展示和态势展示 |
| 内部服务端 | \`/inner\` | 面向微服务间 Feign 调用 |

UPMS 服务作为统一权限管理系统，其对外接口保留自身模块路径风格，不强制使用 \`/backend\` 前缀。

---

# 第五章 应用架构与模块设计

## 5.1 应用分层

系统应用层按职责划分为基础设施服务、平台服务、业务服务、基础支撑服务、API 契约模块和公共模块。

\`\`\`text
基础设施服务：ecdp-gateway、ecdp-auth
平台服务：    ecdp-upms-api、ecdp-upms-biz
业务服务：    ecdp-duty、ecdp-plan、ecdp-event、ecdp-dispatch、ecdp-resource、ecdp-dss、ecdp-fusion、ecdp-flood-inspection
基础支撑服务：ecdp-third-party、ecdp-workflow
API 契约模块：ecdp-apis/*-api
公共模块：    ecdp-common/*
\`\`\`

## 5.2 模块清单

### 5.2.1 基础设施服务

| 模块 | 职责 | 默认端口 | 说明 |
| --- | --- | --- | --- |
| \`ecdp-gateway\` | 统一网关、路由转发、JWT 校验、限流、接口文档聚合 | 28088 | 系统外部访问入口 |
| \`ecdp-auth\` | OAuth2 认证授权、Token 颁发、Token 内省、Token 撤销 | 25010 | 认证授权中心 |

### 5.2.2 平台服务

| 模块 | 职责 | 默认端口 | 说明 |
| --- | --- | --- | --- |
| \`ecdp-upms-api\` | UPMS 接口契约、实体、DTO、Feign 接口 | — | 被其他服务依赖 |
| \`ecdp-upms-biz\` | 用户、组织、角色、菜单、权限、操作日志 | 25020 | 平台级基础服务 |

### 5.2.3 业务服务

| 模块 | 职责 | 默认端口 | 包路径 |
| --- | --- | --- | --- |
| \`ecdp-duty\` | 应急值守管理 | 25030 | \`com.infoview.business.duty\` |
| \`ecdp-plan\` | 应急预案管理 | 25040 | \`com.infoview.business.plan\` |
| \`ecdp-event\` | 应急事件管理 | 25050 | \`com.infoview.business.event\` |
| \`ecdp-dispatch\` | 智能调度指挥 | 25060 | \`com.infoview.business.dispatch\` |
| \`ecdp-resource\` | 应急物资与资源管理 | 25070 | \`com.infoview.business.resource\` |
| \`ecdp-dss\` | 辅助决策支持 | 25080 | \`com.infoview.business.dss\` |
| \`ecdp-fusion\` | 数据融合分析 | 25090 | \`com.infoview.business.fusion\` |
| \`ecdp-flood-inspection\` | 防汛巡查管理 | 25100 | \`com.infoview.business.flood\` |

### 5.2.4 基础支撑服务

| 模块 | 职责 | 默认端口 | 说明 |
| --- | --- | --- | --- |
| \`ecdp-third-party\` | 天气、高速、里程桩、融合通信等第三方能力对接 | 25510 | 外部系统适配层 |
| \`ecdp-workflow\` | 工作流引擎、流程定义、流程实例和审批流转 | 25520 | 流程支撑服务 |

## 5.3 API 契约模块

\`ecdp-apis\` 目录用于承载各微服务的公共接口契约。API 模块用于解决服务间调用时的契约复用问题，避免业务服务之间直接依赖对方的实现模块。

API 模块通常包含：

- Feign 接口；
- Request / Response / DTO；
- Entity；
- Enum；
- Constant；
- 服务间共享的数据结构。

API 模块的设计目标是保持轻量、稳定、可复用，不承载具体业务逻辑。

## 5.4 公共模块设计

\`ecdp-common\` 目录沉淀平台通用能力，支撑各业务服务快速接入统一能力。

| 模块 | 职责 | 典型能力 |
| --- | --- | --- |
| \`ecdp-common-bom\` | 依赖版本统一管理 | Maven dependencyManagement |
| \`ecdp-common-core\` | 核心基础能力 | \`ApiResult\`、\`ServiceException\`、\`IdGenerator\`、上下文工具 |
| \`ecdp-common-data\` | 数据访问公共能力 | 分页、MyBatis-Plus、Redis、数据转换 |
| \`ecdp-common-security\` | 安全认证公共能力 | \`@HasPermission\`、\`@Inner\`、资源服务器配置 |
| \`ecdp-common-feign\` | 服务调用公共能力 | Feign 拦截器、异常处理、内部调用标识 |
| \`ecdp-common-log\` | 日志公共能力 | \`@SysLog\`、操作日志事件、日志监听器 |
| \`ecdp-common-encrypt\` | 加密与签名能力 | 数据加密、数据签名、验签 |
| \`ecdp-common-sensitive\` | 数据脱敏能力 | \`@Sensitive\`、序列化脱敏 |
| \`ecdp-common-swagger\` | 接口文档能力 | SpringDoc、Knife4j、文档聚合配置 |
| \`ecdp-common-s3\` | 对象存储能力 | 文件上传、下载、预览 |
| \`ecdp-common-xxl-job\` | 定时任务能力 | XXL-JOB 执行器接入 |
| \`ecdp-common-rabbitmq\` | 消息队列能力 | RabbitMQ 配置、消息日志、队列约定 |
| \`ecdp-common-wps\` | 文档处理能力 | WPS 预览、编辑和文档处理集成 |

## 5.5 模块依赖设计

模块依赖关系如下：

\`\`\`text
业务服务 / 平台服务 / 基础支撑服务
          │
          ├── 依赖本服务 API 模块
          ├── 按需依赖其他服务 API 模块
          └── 依赖 ecdp-common 公共能力

API 模块
          └── 仅承载契约对象和 Feign 接口

公共模块
          └── 不依赖具体业务服务
\`\`\`

设计说明：

- 业务服务通过 API 模块进行契约依赖；
- 跨服务调用通过 OpenFeign 完成；
- 公共模块向上提供能力，不承载业务域规则；
- 业务服务之间不直接依赖对方 Biz 模块；
- 对于复杂业务域，可在服务内部进一步按 controller、service、mapper、entity、request、response、config 等分层组织。

## 5.6 重点模块说明：ecdp-flood-inspection

\`ecdp-flood-inspection\` 是当前系统中复杂度较高的业务模块，除了承载防汛巡查业务外，还包含独立的业务域 RBAC 能力，并通过 Feign 与 UPMS 进行用户与组织等基础数据协同。

该模块体现了业务域权限自治的设计思路：平台 UPMS 提供统一身份与基础权限能力，复杂业务域可在自身边界内扩展更贴合业务场景的权限模型。

---

# 第六章 数据架构设计

## 6.1 数据架构概览

系统以 OpenGauss 作为主数据库，Redis 作为缓存与会话存储，RabbitMQ 用于异步消息，S3 用于对象文件存储。各业务服务原则上拥有自身业务数据边界，通过服务接口进行跨域数据访问。

\`\`\`text
业务服务
  │
  ├── OpenGauss：结构化业务数据、权限数据、日志数据
  ├── Redis：Token、Session、缓存、分布式锁、临时状态
  ├── RabbitMQ：异步任务、业务事件、削峰解耦
  └── S3：附件、文档、图片、对象文件
\`\`\`

## 6.2 数据库选型

系统主数据库选用 **OpenGauss 6.0+**，JDBC 驱动为 \`opengauss-jdbc 5.0.0\`。数据访问层使用 MyBatis-Plus，并结合 XML Mapper 支持复杂 SQL 查询。

选型考虑：

- 兼容 PostgreSQL 协议生态；
- 支持企业级数据库能力；
- 适合政企场景下的结构化数据管理；
- 能够配合 MyBatis-Plus 完成常规 CRUD、分页和条件查询。

## 6.3 数据边界设计

系统按服务划分数据边界：

- 平台基础数据由 UPMS 管理；
- 业务域数据由对应业务服务管理；
- 跨服务数据访问通过 Feign 接口完成；
- 业务服务不直接访问其他服务的数据表；
- 共享数据结构通过 API 模块定义。

该设计有利于服务自治、降低数据库耦合，并为后续独立扩展和分库演进保留空间。

## 6.4 数据完整性设计

系统采用数据签名机制保障关键业务数据完整性。核心思路是写入时生成签名，读取或关键业务操作时进行验签，防止数据被未授权篡改。

当前设计采用双签名架构：

| 字段 | 说明 |
| --- | --- |
| \`local_signature\` | 本地签名，用于系统内部高频验签 |
| \`local_signature_version\` | 本地签名版本号 |
| \`signature\` | 一体化签名，用于对接外部签名平台或权威验签 |
| \`signature_version\` | 一体化签名版本号 |

详细字段约束、签名 Key 构建方式和实体映射要求见 [数据签名设计规范](../后端开发规范/数据签名设计规范.md)。

## 6.5 缓存架构

系统采用 Redis 和 Caffeine 组合的缓存设计：

| 缓存组件 | 作用 |
| --- | --- |
| Redis | 分布式缓存、Token/Session 存储、分布式锁、业务缓存 |
| Caffeine | JVM 本地缓存，用于热点数据和低延迟读取场景 |

推荐缓存模式为 Cache-Aside：

\`\`\`text
读流程：查询缓存 → 命中返回 → 未命中查询数据库 → 写入缓存 → 返回
写流程：更新数据库 → 删除缓存 → 下次读取重建缓存
\`\`\`

缓存 Key 命名、TTL、更新策略等详细约束由后端仓库的编码规范文档承载（本前端设计仓库未收录，落地时以后端仓库最新版本为准）。

## 6.6 数据安全设计

数据安全从存储、传输和展示三个环节进行设计：

| 环节 | 设计说明 |
| --- | --- |
| 存储 | 敏感字段使用 \`ICryptoService.encrypt()\` 加密后存储 |
| 传输 | 通过 HTTPS、Token 认证、内部接口标识控制访问来源 |
| 展示 | 响应字段可通过 \`@Sensitive\` 注解进行脱敏 |
| 完整性 | 关键数据通过签名与验签机制保障完整性 |
| 权限 | 通过用户身份、角色权限、数据归属控制访问范围 |

---

# 第七章 技术架构设计

## 7.1 技术栈总览

| 层级 | 组件 | 版本/说明 |
| --- | --- | --- |
| 运行时 | JDK | 17 |
| 应用框架 | Spring Boot | 3.5.13 |
| 微服务框架 | Spring Cloud | 2025.0.1 |
| 微服务生态 | Spring Cloud Alibaba | 2025.0.0.0 |
| 注册与配置 | Nacos | 2.x |
| 网关 | Spring Cloud Gateway | 4.3.2 |
| 认证授权 | Spring Security OAuth2 | Authorization Server / Resource Server |
| ORM | MyBatis-Plus | 3.5.16 |
| 连表查询 | mybatis-plus-join | 1.5.5 |
| 数据库 | OpenGauss | 6.0+ |
| 缓存 | Redis | 7.x |
| 本地缓存 | Caffeine | 3.2.x |
| 分布式锁 | Redisson + Lock4j | 3.39.0 / 2.2.7 |
| 消息队列 | RabbitMQ | 3.x |
| 定时任务 | XXL-JOB | 3.4.0 |
| 熔断降级 | Sentinel | 1.8.x |
| 对象存储 | S3 | 兼容 S3 协议 |
| API 文档 | SpringDoc + Knife4j | 2.8.14 / 4.5.0 |
| 工具库 | Hutool | 5.8.44 |
| JWT | JJWT | 0.12.5 |
| 配置加密 | Jasypt | 3.0.5 |
| 构建工具 | Maven | 3.9.x |
| 容器化 | Docker / Kubernetes | Docker Compose 当前可用，Kubernetes 后续演进 |

## 7.2 技术选型说明

### 7.2.1 Spring Boot + Spring Cloud

系统以 Spring Boot 作为服务应用基础框架，以 Spring Cloud 作为微服务治理基础，配合 Spring Cloud Alibaba 接入 Nacos、Sentinel 等组件。

该组合适合多模块微服务系统，能够提供服务注册发现、配置外部化、网关路由、服务调用、熔断降级等基础能力。

### 7.2.2 Nacos

Nacos 同时承担注册中心和配置中心职责：

- 注册中心：服务启动后注册实例，网关和 Feign 通过服务名发现实例；
- 配置中心：统一管理公共配置、服务配置和环境配置；
- 配置热更新：支持按需刷新动态配置。

### 7.2.3 Spring Cloud Gateway

Gateway 作为统一入口，负责：

- 路由转发；
- JWT 校验；
- 跨域处理；
- 限流控制；
- 接口文档聚合；
- 后续扩展审计、灰度、统一响应处理等入口治理能力。

### 7.2.4 OpenFeign

OpenFeign 用于服务间同步 HTTP 调用。系统通过 API 模块定义 Feign 契约，业务服务依赖 API 模块完成远程调用。

该设计降低了服务实现之间的耦合，同时便于接口契约复用和版本管理。

### 7.2.5 Redis、RabbitMQ、XXL-JOB

| 组件 | 架构作用 |
| --- | --- |
| Redis | 缓存、Token/Session、分布式锁和临时状态存储 |
| RabbitMQ | 异步解耦、削峰填谷、事件驱动扩展 |
| XXL-JOB | 分布式定时任务调度，支持任务统一管理和执行记录 |

## 7.3 依赖版本管理

系统通过 \`ecdp-common-bom\` 统一管理公共依赖版本，业务模块通过 \`<dependencyManagement>\` 引入，避免多个模块之间出现依赖版本漂移。

\`\`\`xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.infoview</groupId>
            <artifactId>ecdp-common-bom</artifactId>
            <version>\${project.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
\`\`\`

## 7.4 配置管理设计

系统采用 Nacos 配置中心管理配置，配置分为共享配置、公共能力配置、服务专属配置和本地引导配置。

\`\`\`yaml
spring:
  config:
    import:
      - optional:nacos:application.yml
      - optional:nacos:common-ds.yml
      - optional:nacos:common-rabbitmq.yml
      - optional:nacos:\${spring.application.name}.yml
\`\`\`

配置分层说明：

| 配置层级 | 示例 | 说明 |
| --- | --- | --- |
| 共享配置 | \`application.yml\` | 所有服务共用的基础配置 |
| 公共能力配置 | \`common-ds.yml\`、\`common-rabbitmq.yml\`、\`common-s3.yml\` | 数据源、消息队列、对象存储等公共配置 |
| 服务配置 | \`ecdp-*.yml\` | 单个服务独有配置 |
| 本地引导配置 | \`bootstrap.yml\` 或本地环境变量 | Nacos 地址、命名空间、账号密码等启动配置 |

---

# 第八章 安全架构设计

## 8.1 安全架构概览

系统安全架构由认证、授权、内部调用校验、数据权限、数据加密、数据脱敏和数据完整性校验组成。

\`\`\`text
客户端
  │ Token
  ▼
ecdp-gateway
  │ JWT 校验、路由控制
  ▼
业务服务
  │ Token 内省、@HasPermission、数据权限校验
  ▼
数据访问层
  │ 加密存储、签名验签、脱敏返回
  ▼
OpenGauss / Redis
\`\`\`

## 8.2 认证设计

\`ecdp-auth\` 作为 OAuth2 认证授权中心，负责用户登录、Token 颁发、Token 刷新、Token 内省和 Token 撤销。

Token 管理设计：

| 能力 | 说明 |
| --- | --- |
| Token 颁发 | 支持密码、手机验证码、Refresh Token、Client Credentials、Authorization Code 等模式 |
| Token 存储 | Token 信息存储在 Redis 中，支持撤销和互斥登录 |
| Token 校验 | 网关校验 JWT，业务服务通过资源服务器能力进行 Opaque Token 内省 |
| Token 有效期 | Access Token 默认 2 小时，Refresh Token 默认 30 天 |

## 8.3 授权设计

系统通过 \`@HasPermission\` 实现方法级权限控制。权限字符串采用四段式结构：

\`\`\`text
{产品}:{模块}:{资源}:{操作}
\`\`\`

示例：

\`\`\`text
umps:system:user:list
flood:org:organization:insert
\`\`\`

权限控制链路：

\`\`\`text
请求进入业务服务
  │
  ▼
解析当前登录用户和权限集合
  │
  ▼
读取 Controller 方法上的 @HasPermission
  │
  ▼
判断用户是否具备对应权限
  │
  ▼
允许访问或返回无权限响应
\`\`\`

## 8.4 内部接口安全设计

系统通过 \`@Inner\` 注解区分内部接口和公开接口。内部接口主要用于 Feign 调用和网关内部路由，调用方通过 Feign 拦截器自动注入内部调用标识。

该设计用于降低内部接口被外部绕过调用的风险，同时配合网关路由、Token 校验和服务间调用约定共同形成内部接口访问边界。

## 8.5 数据权限设计

业务数据访问需要结合用户身份、组织、企业、角色和业务归属进行控制。典型场景包括：

- 用户只能访问所属组织或授权范围内的数据；
- 企业级数据需要校验 \`entId\` 等归属字段；
- 防汛巡查等复杂业务域可在自身服务内扩展业务域权限模型；
- 内部服务调用不能绕过数据权限校验。

## 8.6 数据加密、脱敏与签名

| 安全能力 | 说明 |
| --- | --- |
| 数据加密 | 敏感字段入库前加密存储 |
| 数据脱敏 | 响应给前端或第三方前进行脱敏展示 |
| 数据签名 | 关键数据写入时生成签名，读取或关键操作时验签 |
| 配置加密 | Nacos 中的敏感配置通过 Jasypt 加密存储 |

详细设计见 [数据库设计规范](../后端开发规范/数据库设计规范.md) 和 [数据签名设计规范](../后端开发规范/数据签名设计规范.md)。

---

# 第九章 集成与服务通信设计

## 9.1 服务通信方式

系统内部服务通信以 OpenFeign 同步调用为主，RabbitMQ 异步消息为辅。

| 通信方式 | 使用场景 | 说明 |
| --- | --- | --- |
| REST API | 外部客户端访问业务接口 | 经由 Gateway 统一入口 |
| OpenFeign | 微服务间同步调用 | 通过 API 模块定义契约 |
| RabbitMQ | 异步任务、业务事件 | 用于削峰、解耦和最终一致性 |
| XXL-JOB | 定时任务触发 | 统一调度周期性任务 |
| S3 协议 | 文件上传、下载、预览 | 统一对象存储访问方式 |

## 9.2 Feign 调用设计

Feign 接口放置在 \`ecdp-*-api\` 模块中，命名通常采用 \`Remote{功能}Service\` 形式。业务服务依赖 API 模块后即可注入远程接口完成调用。

Feign 调用链路：

\`\`\`text
调用方业务服务
  │ 注入 RemoteXxxService
  ▼
Feign Client
  │ 注入内部调用标识、传递 Token、负载均衡
  ▼
被调用方业务服务 / 平台服务
  │ @Inner / 权限 / 参数校验
  ▼
返回 ApiResult<T>
\`\`\`

## 9.3 异步消息设计

RabbitMQ 用于异步业务处理、削峰填谷和系统解耦。当前主要用于防汛巡查等业务模块中的异步任务场景，例如任务生成、合规检查、桩号坐标填充、里程统计等。

异步消息设计关注点：

- 交换机、队列、路由键命名保持业务语义清晰；
- 消息体使用稳定 DTO，避免直接暴露内部实体；
- 消费端处理需具备幂等能力；
- 异常消息应具备日志记录和后续补偿能力；
- 重要业务消息需要考虑重试、死信队列或人工处理机制。

## 9.4 第三方系统集成

\`ecdp-third-party\` 作为第三方系统适配层，用于隔离外部系统协议、鉴权方式、字段差异和异常处理。

该服务主要承担：

- 高速天气数据对接；
- 里程桩相关数据对接；
- 融合通信能力对接；
- 外部接口协议适配；
- 第三方调用异常转换；
- 第三方返回数据标准化。

通过独立第三方服务进行集成，可避免外部系统变化直接影响核心业务服务。

## 9.5 API 文档设计

系统使用 SpringDoc + Knife4j 生成 OpenAPI 文档，各服务通过 \`@EnableCustomDoc\` 启用文档能力，网关基于服务发现聚合各微服务接口文档。

该设计便于：

- 前后端联调；
- 测试人员查看接口；
- 第三方系统对接；
- 接口变更评审；
- 生成接口说明资料。

---

# 第十章 部署架构与运行环境

## 10.1 部署架构概览

ECDP-Cloud 支持以容器化方式部署。当前可通过 Docker Compose 编排微服务和运行容器，后续可演进至 Kubernetes 进行弹性伸缩、滚动发布和资源治理。

\`\`\`text
负载入口 / 反向代理
        │
        ▼
ecdp-gateway 容器
        │
        ├── ecdp-auth 容器
        ├── ecdp-upms-biz 容器
        ├── ecdp-duty / ecdp-plan / ecdp-event 等业务容器
        ├── ecdp-third-party 容器
        └── ecdp-workflow 容器
        │
        ▼
Nacos / OpenGauss / Redis / RabbitMQ / XXL-JOB / S3
\`\`\`

## 10.2 环境划分

系统通过 Maven Profile 和 Nacos Namespace 管理不同环境配置。

| 环境 | Maven Profile | Nacos Namespace | 说明 |
| --- | --- | --- | --- |
| 本地开发 | \`dev\` | \`fetch\` | 本地开发与调试 |
| 内网开发 | \`nas_local\` | \`ecdp\` | 内网联调环境 |
| 测试环境 | \`71.95_test\` | \`ecdp\` | 测试验证环境 |
| 生产环境 | \`11.14_prod\` | \`ecdp\` | 正式运行环境 |

## 10.3 服务端口规划

| 服务 | 默认端口 |
| --- | --- |
| \`ecdp-gateway\` | 28088 |
| \`ecdp-auth\` | 25010 |
| \`ecdp-upms-biz\` | 25020 |
| \`ecdp-duty\` | 25030 |
| \`ecdp-plan\` | 25040 |
| \`ecdp-event\` | 25050 |
| \`ecdp-dispatch\` | 25060 |
| \`ecdp-resource\` | 25070 |
| \`ecdp-dss\` | 25080 |
| \`ecdp-fusion\` | 25090 |
| \`ecdp-flood-inspection\` | 25100 |
| \`ecdp-third-party\` | 25510 |
| \`ecdp-workflow\` | 25520 |

## 10.4 容器化设计

微服务容器镜像以 JDK 17 运行环境为基础，应用 JAR、配置文件、依赖库和日志目录通过标准目录组织。

典型容器目录：

\`\`\`text
/{service-name}/
├── {service-name}.jar
├── config/
├── project-libs/
└── logs/
\`\`\`

容器运行设计要点：

- 使用 \`JAVA_OPTS\` 统一设置 JVM 参数；
- 使用 \`-Dloader.path=project-libs\` 支持依赖库外置；
- 日志目录挂载到宿主机，便于收集和排障；
- 配置目录挂载到宿主机，便于环境差异配置管理；
- 通过 Docker Compose 或 Kubernetes 编排服务启动和依赖关系。

容器化微服务部署说明见后端仓库的「容器化部署微服务」文档（本前端设计仓库未收录）。

## 10.5 Kubernetes 演进方向

系统后续可按以下方式演进至 Kubernetes：

| 能力 | 演进说明 |
| --- | --- |
| Deployment | 每个微服务独立 Deployment，支持副本数控制和滚动升级 |
| Service | 每个微服务通过 ClusterIP 暴露集群内部访问地址 |
| Ingress | 网关或外部入口统一暴露服务访问域名 |
| ConfigMap / Secret | 配置和敏感信息纳入 K8s 原生配置管理 |
| Probe | 通过 livenessProbe、readinessProbe 检查服务健康状态 |
| HPA | 根据 CPU、内存或自定义指标自动扩缩容 |
| 日志采集 | 通过标准输出或挂载目录接入日志采集系统 |

---

# 第十一章 运维、监控与韧性设计

## 11.1 运维设计目标

运维设计目标是保证系统可部署、可观测、可恢复和可持续运行。

| 目标 | 说明 |
| --- | --- |
| 可部署 | 服务可通过标准脚本或容器编排快速部署 |
| 可观测 | 日志、健康检查、操作日志和后续监控指标可辅助定位问题 |
| 可恢复 | 服务异常退出后可自动重启，关键数据具备恢复和补偿手段 |
| 可扩展 | 支持按服务维度扩容和独立发布 |
| 可审计 | 操作日志和系统日志支撑问题追踪与安全审计 |

## 11.2 日志设计

系统统一使用 Logback 作为日志实现，日志分为应用日志、错误日志、操作日志和中间件日志。

| 日志类型 | 说明 |
| --- | --- |
| 应用日志 | 记录服务运行过程中的业务和系统日志 |
| 错误日志 | 记录异常堆栈和错误信息 |
| 操作日志 | 通过 \`@SysLog\` 记录用户关键操作 |
| 中间件日志 | 记录数据库、缓存、消息队列、服务注册等相关日志 |

日志设计要求详见 [日志规范](../后端开发规范/日志规范.md)。

## 11.3 健康检查设计

服务可通过 Spring Boot Actuator 暴露健康检查端点，配合容器编排平台进行存活检测和就绪检测。

典型检查类型：

| 类型 | 说明 |
| --- | --- |
| Liveness | 判断进程是否存活，失败时可重启容器 |
| Readiness | 判断服务是否可接收流量，失败时从流量入口摘除 |
| Dependency | 检查数据库、Redis、Nacos 等依赖组件状态 |

## 11.4 异常处理设计

系统通过全局异常处理器统一处理业务异常、参数校验异常、认证异常、权限异常和系统异常，并统一转换为 \`ApiResult<T>\` 响应。

异常处理设计目标：

- 对前端返回稳定、统一、可理解的错误信息；
- 对日志保留完整异常上下文，便于排查；
- 对业务异常和系统异常进行区分；
- 避免敏感信息通过异常响应暴露给前端。

详细设计见 [异常处理规范](../后端开发规范/异常处理规范.md)。

## 11.5 韧性设计

系统韧性设计包括超时控制、重试、熔断降级、幂等、异步补偿和服务自动恢复。

| 能力 | 说明 |
| --- | --- |
| 超时控制 | Feign、数据库、Redis、第三方接口均需要设置合理超时时间 |
| 重试机制 | 对短暂网络异常可结合 LoadBalancer 和 Feign 重试策略进行实例级重试 |
| 熔断降级 | 关键远程调用可接入 Sentinel 和 fallbackFactory |
| 幂等设计 | 关键写操作结合业务唯一键、Redis SETNX 或数据库唯一约束实现幂等 |
| 异步补偿 | 异步消息失败时通过重试、死信或人工处理完成补偿 |
| 自动恢复 | 容器通过 \`restart: always\` 或 K8s 重启策略实现进程级恢复 |

## 11.6 事务一致性设计

单服务内多表写操作使用本地事务 \`@Transactional\` 保证一致性。跨服务业务流程不采用强分布式事务，优先通过以下方式保障最终一致性：

- 接口幂等；
- 业务状态机；
- 消息队列异步驱动；
- 重试与补偿机制；
- 对账与人工干预能力。

---

# 第十二章 架构演进说明

## 12.1 当前架构阶段

当前 ECDP-Cloud 已形成以 Spring Cloud Alibaba 为基础的微服务架构，具备以下能力：

- 微服务模块化拆分；
- 统一网关；
- 统一认证授权；
- UPMS 平台基础服务；
- 公共模块能力沉淀；
- Nacos 注册与配置；
- OpenFeign 服务间调用；
- Redis 缓存与 Token 存储；
- RabbitMQ 异步消息能力；
- Docker Compose 容器化部署能力。

## 12.2 后续演进方向

后续架构可从以下方面持续演进：

| 方向 | 说明 |
| --- | --- |
| Kubernetes 化 | 使用 K8s 管理微服务部署、滚动升级、健康检查和弹性伸缩 |
| 服务治理增强 | 完善 Sentinel 熔断降级、限流、隔离和服务降级策略 |
| 可观测性增强 | 引入指标监控、链路追踪、日志聚合和统一告警 |
| 安全体系增强 | 强化接口审计、数据权限、密钥管理和安全扫描 |
| 数据治理增强 | 完善数据血缘、数据质量、数据共享和数据归档能力 |
| 架构文档体系化 | 将说明书、设计规范、部署手册、运维手册和接口文档形成完整文档体系 |

## 12.3 与规范文档的关系

本文档只描述架构设计思路和系统组成，不替代专项规范文档。开发和实施过程中：

- 编码命名、注释、分层、提交等要求以后端仓库的 AGENTS.md 为准（本前端设计仓库的 agents.md 是前端规范，勿混用）；
- REST API、参数校验、Feign、Swagger 等要求以 [接口设计规范](../后端开发规范/接口设计规范.md) 为准；
- 表设计、字段类型、实体映射、数据签名字段等要求以 [数据库设计规范](../后端开发规范/数据库设计规范.md) 为准；
- 异常处理、错误码、事务和韧性要求以 [异常处理规范](../后端开发规范/异常处理规范.md) 为准；
- 日志输出、操作日志和敏感信息处理以 [日志规范](../后端开发规范/日志规范.md) 为准；
- 服务间调用、第三方系统对接和降级策略以 [服务间通信规范](../后端开发规范/服务间通信规范.md) 为准。

---

# 附录 相关文档

| 文档 | 说明 |
| --- | --- |
| [AGENTS.md]（后端仓库） | 项目编码规范、模块约定和 AI Agent 工作指引（本仓库未收录，前端规范见根目录 [agents.md](../../agents.md)） |
| [接口设计规范](../后端开发规范/接口设计规范.md) | REST API、参数校验、OpenFeign、Swagger、权限和日志注解规范 |
| [数据库设计规范](../后端开发规范/数据库设计规范.md) | 表命名、字段类型、必须字段、实体映射和数据安全要求 |
| [数据签名设计规范](../后端开发规范/数据签名设计规范.md) | 双签名体系、签名字段、签名 Key 构建和验签策略 |
| [异常处理规范](../后端开发规范/异常处理规范.md) | 全局异常、错误码、事务、幂等和韧性处理说明 |
| [日志规范](../后端开发规范/日志规范.md) | 应用日志、错误日志、操作日志和敏感信息处理说明 |
| [服务间通信规范](../后端开发规范/服务间通信规范.md) | Feign 调用、服务降级、第三方系统对接和通信安全说明 |
| [容器化部署微服务]（后端仓库） | 微服务 Docker Compose 部署配置和服务管理脚本说明（本仓库未收录） |
| [消息队列规范](../后端开发规范/消息队列规范.md) | RabbitMQ 交换机与队列命名、消息体、消费者与幂等规范 |
| [数据度量规范](../后端开发规范/数据度量规范.md) | 长度、时间、金额、经纬度等各类数据字段的单位与精度规范 |
`,f={logging:l,"error-handling":E,"database-design":y,"api-design":T,metrics:S,signing:g,"inter-service":m,"message-queue":u,"system-architecture":p};function L(n){return f[n]||l}const c={文档版本:"version",编制日期:"date",适用版本:"applies",文档状态:"status"};function x(n){const a=n.split(`
`),s={};let e=0;for(e+=1;e<a.length;){const i=a[e].trim();if(!i){e++;continue}if(i.startsWith(">")){const r=i.match(/^>\s*\*\*([^*]+)\*\*\s*:?\s*(.*)$/);r&&c[r[1]]&&(s[c[r[1]]]=r[2].trim()),e++;continue}if(i==="---"||i.startsWith("--- ")){e++;continue}break}return{meta:s,body:a.slice(e).join(`
`).trimStart()}}function t(n,a,s,e,i){const{meta:r,body:d}=x(e);return{key:n,title:a,file:s,raw:e,meta:r,body:d,category:i}}const o=[t("api-design","接口设计规范","接口设计规范",b,"backend"),t("error-handling","异常处理规范","异常处理规范",R,"backend"),t("logging","日志规范","日志规范",_,"backend"),t("database-design","数据库设计规范","数据库设计规范",v,"backend"),t("inter-service","服务间通信规范","服务间通信规范",A,"backend"),t("message-queue","消息队列规范","消息队列规范",O,"backend"),t("metrics","数据度量规范","数据度量规范",I,"backend"),t("signing","数据签名设计规范","数据签名设计规范",M,"backend"),t("system-architecture","系统架构设计说明书","系统架构设计说明书",N,"architecture")],D=[{key:"backend",title:"后端开发规范",icon:l,items:o.filter(n=>n.category==="backend")},{key:"architecture",title:"微服务架构设计",icon:p,items:o.filter(n=>n.category==="architecture")}];function P(n){return o.find(a=>a.key===n)}export{L as a,o as b,P as g,D as s};
