const 项目数据 = [
  {
    名称: "AI封面生成器",
    分类: "最好玩",
    图标: "AI",
    周期: "3-5天",
    阶段: "入门友好",
    标签: ["Web 应用", "AI", "可视化"],
    颜色: "#08a64b",
    描述: "输入标题、描述和风格，生成公众号、视频、博客都能用的封面图。",
    GitHub: "https://github.com/chengkaifeng/ai-cover-generator",
    理由: [
      ["实用又有趣", "成品能直接拿去发内容平台，反馈非常快。"],
      ["AI 能力落地", "会练到提示词调优、图片生成 API 和结果展示。"],
      ["可扩展性强", "后续能加模板库、批量生成、历史记录和分享页。"]
    ],
    预览: "封面工坊",
    提示词: `你是一位资深全栈工程师，请帮我从 0 开发一个「AI 封面生成器」Web 应用。
需求：
1. 用户可以输入标题、描述、用途和风格关键词。
2. 调用图片生成模型生成 3-6 张封面候选。
3. 展示成品预览，支持下载、收藏和复制提示词。
4. 页面要适合新手二次开发，结构清晰，有 README。
技术栈建议：Next.js + Tailwind CSS + TypeScript。
请参考这个已跑通的项目思路： https://github.com/chengkaifeng/ai-cover-generator`
  },
  {
    名称: "代码截图美化器",
    分类: "最好玩",
    图标: "</>",
    周期: "2-3天",
    阶段: "入门友好",
    标签: ["Web 应用", "开发工具"],
    颜色: "#8b5cf6",
    描述: "把代码片段排成漂亮截图，适合发教程、朋友圈和作品集。",
    GitHub: "https://github.com/carbon-app/carbon",
    理由: [
      ["展示效果立刻可见", "输入代码后马上得到视觉反馈，调样式很有成就感。"],
      ["练前端基本功", "会做主题、字体、间距、导出图片等真实交互。"],
      ["容易做出个人风格", "可以加水印、模板、背景图和社媒比例。"]
    ],
    预览: "代码影棚",
    提示词: `请参考 Carbon 的产品形态，帮我实现一个「代码截图美化器」。
核心功能：
1. 粘贴代码后自动高亮并渲染在美观窗口里。
2. 支持主题、背景、圆角、阴影、字号和导出 PNG。
3. 提供几个适合中文教程的预设模板。
4. 代码结构要简单，便于新手继续改。
参考项目： https://github.com/carbon-app/carbon`
  },
  {
    名称: "像素宠物值班台",
    分类: "最好玩",
    图标: "PET",
    周期: "1-2天",
    阶段: "熟悉基础",
    标签: ["桌面应用", "小而美"],
    颜色: "#f59e0b",
    描述: "一个会根据待办和天气改变状态的小宠物，适合做桌面陪伴工具。",
    GitHub: "https://github.com/electron/electron-quick-start",
    理由: [
      ["反馈轻松", "动画、状态和提醒能马上看见，做起来不枯燥。"],
      ["能练本地状态", "适合练习数据存储、托盘菜单和通知。"],
      ["二创空间大", "换皮肤、换角色、换提醒规则都很容易。"]
    ],
    预览: "桌面伙伴",
    提示词: `请用 Electron 快速搭建一个「像素宠物值班台」。
需求：
1. 桌面窗口展示一个像素宠物和今日待办。
2. 根据待办数量、时间段和天气切换宠物状态。
3. 支持新增待办、完成待办、本地保存。
4. 托盘菜单提供显示/隐藏和休息提醒。
参考起步项目： https://github.com/electron/electron-quick-start`
  },
  {
    名称: "会议纪要清洗台",
    分类: "最好用",
    图标: "DOC",
    周期: "2-3天",
    阶段: "入门友好",
    标签: ["Web 应用", "效率工具"],
    颜色: "#1269e8",
    描述: "把混乱录音转写稿整理成摘要、待办、风险和邮件草稿。",
    GitHub: "https://github.com/openai/openai-cookbook",
    理由: [
      ["真能进入工作流", "每天会议后都能用，价值不是演示玩具。"],
      ["输入输出清楚", "粘贴文本、选择格式、得到纪要，闭环很短。"],
      ["适合练提示词", "能拆成摘要、行动项、决策和跟进邮件多个模板。"]
    ],
    预览: "纪要清洗台",
    提示词: `请帮我开发一个「会议纪要清洗台」Web 应用。
功能：
1. 粘贴会议转写稿或上传 txt/md。
2. 一键生成会议摘要、待办负责人、风险点、跟进邮件。
3. 支持选择语气：正式、简洁、老板版、执行版。
4. 支持复制每个模块，并保存最近 10 次记录。
参考 OpenAI 示例： https://github.com/openai/openai-cookbook`
  },
  {
    名称: "自动周报助手",
    分类: "最好用",
    图标: "BAR",
    周期: "2-4天",
    阶段: "入门友好",
    标签: ["Web 应用", "效率工具"],
    颜色: "#2563eb",
    描述: "把零散日报、聊天记录和 Git 提交整理成一份清楚周报。",
    GitHub: "https://github.com/langchain-ai/langchainjs",
    理由: [
      ["痛点真实", "写周报是高频小痛点，适合做成自己的工作流。"],
      ["数据源可扩展", "先粘贴文本，后续接飞书、Notion、GitHub 都自然。"],
      ["输出可评估", "生成得好不好，一眼就能判断并迭代。"]
    ],
    预览: "周报装配线",
    提示词: `请做一个「自动周报助手」。
第一版要求：
1. 用户粘贴本周工作记录、会议要点、Git commit 或聊天片段。
2. AI 整理成本周完成、进行中、风险、下周计划四个模块。
3. 支持选择周报风格：简洁、正式、向上管理、复盘版。
4. 提供复制 Markdown、保存历史、重新生成。
参考项目： https://github.com/langchain-ai/langchainjs`
  },
  {
    名称: "网页信息研究助手",
    分类: "最好用",
    图标: "WEB",
    周期: "3-5天",
    阶段: "想进阶",
    标签: ["AI Agent", "研究工具"],
    颜色: "#0ea5e9",
    描述: "输入研究问题后自动打开网页、筛选信息、整理引用和结论。",
    GitHub: "https://github.com/browser-use/browser-use",
    理由: [
      ["贴近真实 AI Agent", "能理解工具调用、浏览器自动化和信息整理。"],
      ["结果有引用", "不是空泛聊天，能输出可追溯资料。"],
      ["进阶空间明显", "可以继续加任务队列、来源评分和报告模板。"]
    ],
    预览: "研究指挥台",
    提示词: `请参考 browser-use，帮我做一个「网页信息研究助手」。
需求：
1. 用户输入研究问题和关键词。
2. 系统自动搜索网页，筛选 5-8 个可信来源。
3. 输出带链接引用的要点、结论和待核实事项。
4. 提供过程日志，让新手看懂 Agent 如何执行。
参考项目： https://github.com/browser-use/browser-use`
  },
  {
    名称: "桌面天气小盒",
    分类: "最好搓",
    图标: "☀",
    周期: "1-2天",
    阶段: "入门友好",
    标签: ["桌面应用", "实用工具"],
    颜色: "#f6b600",
    描述: "用一个小屏或桌面窗口展示天气、日程和一句提醒。",
    GitHub: "https://github.com/adafruit/Adafruit_CircuitPython_ESP32SPI",
    理由: [
      ["实体反馈强", "屏幕亮起来的一刻很有成就感。"],
      ["接口简单", "天气 API、时间、图标都适合新手练手。"],
      ["能长期摆着用", "不是一次性 demo，能放在桌面。"]
    ],
    预览: "天气小屏",
    提示词: `请帮我做一个「桌面天气小盒」项目。
版本一：
1. 使用 ESP32 或桌面 Web 模拟小屏。
2. 展示天气、温度、空气质量、今日提醒。
3. 每 30 分钟自动刷新，网络失败时显示离线状态。
4. 提供硬件接线说明和纯 Web 模拟版本。
参考项目： https://github.com/adafruit/Adafruit_CircuitPython_ESP32SPI`
  },
  {
    名称: "ESP32桌面番茄钟",
    分类: "最好搓",
    图标: "25",
    周期: "3-5天",
    阶段: "熟悉基础",
    标签: ["硬件项目", "IoT"],
    颜色: "#ff5a45",
    描述: "一个能发光、能震动、能统计专注时间的小番茄钟。",
    GitHub: "https://github.com/espressif/arduino-esp32",
    理由: [
      ["动手感很强", "按钮、灯效和蜂鸣器让反馈非常具体。"],
      ["范围可控", "计时、暂停、重置和统计四个核心功能就够用。"],
      ["适合扩展", "后续能接网页面板、蓝牙同步和专注排行榜。"]
    ],
    预览: "专注小盒",
    提示词: `请帮我设计并实现一个「ESP32 桌面番茄钟」。
要求：
1. 25 分钟专注、5 分钟休息，可按钮切换。
2. OLED 屏显示倒计时，LED 显示当前状态。
3. 支持本地记录今日完成次数。
4. 给出硬件清单、接线图说明、Arduino 代码和调试步骤。
参考项目： https://github.com/espressif/arduino-esp32`
  },
  {
    名称: "NFC打卡灯牌",
    分类: "最好搓",
    图标: "NFC",
    周期: "2-3天",
    阶段: "想进阶",
    标签: ["硬件项目", "桌面装置"],
    颜色: "#fb7185",
    描述: "刷 NFC 卡片触发专注、运动、阅读等模式，并点亮对应灯效。",
    GitHub: "https://github.com/miguelbalboa/rfid",
    理由: [
      ["动作很有仪式感", "刷卡后灯牌变化，实体反馈特别明确。"],
      ["练设备交互", "能理解读卡、状态机和灯效控制。"],
      ["生活化场景多", "可以做学习打卡、习惯追踪或桌面状态牌。"]
    ],
    预览: "模式灯牌",
    提示词: `请做一个「NFC 打卡灯牌」硬件小项目。
功能：
1. 使用 NFC/RFID 模块读取不同卡片。
2. 每张卡片对应一个模式：专注、阅读、运动、休息。
3. OLED 或 LED 灯带展示模式和累计次数。
4. 提供接线说明、Arduino 代码、调试 checklist。
参考项目： https://github.com/miguelbalboa/rfid`
  }
];

function 补充项目(项目) {
  return {
    ...项目,
    理由: [
      ["反馈清楚", 项目.反馈],
      ["能力可练", 项目.能力],
      ["方便二创", 项目.扩展]
    ],
    提示词: `请帮我开发一个「${项目.名称}」。
项目方向：${项目.描述}
要求：
1. 先做一个新手可完成的 MVP，核心流程必须跑通。
2. 页面或设备要能展示成品预览，并保留清晰的状态反馈。
3. 写出适合继续二创的文件结构、README 和运行步骤。
4. 给我一份任务拆解清单，按第 1 天、第 2 天、第 3 天安排。
参考 GitHub 项目： ${项目.GitHub}`
  };
}

项目数据.push(
  ...[
    {
      名称: "AI声音表情包工厂",
      分类: "最好玩",
      图标: "VOX",
      周期: "2-3天",
      阶段: "入门友好",
      标签: ["Web 应用", "音频 AI"],
      颜色: "#10b981",
      描述: "输入一句台词和情绪，生成短音频、字幕图和可分享的表情包。",
      GitHub: "https://github.com/openai/openai-cookbook",
      预览: "声音贴纸台",
      反馈: "一段音频生成后马上能播放，成品很适合发给朋友试用。",
      能力: "能练到文本转语音、音频播放、下载和历史记录。",
      扩展: "可以继续加角色音色、字幕模板和批量生成。"
    },
    {
      名称: "梦境地图生成器",
      分类: "最好玩",
      图标: "MAP",
      周期: "3-5天",
      阶段: "熟悉基础",
      标签: ["AI", "可视化"],
      颜色: "#14b8a6",
      描述: "把一句奇怪的梦境描述变成可缩放的地图、地点卡和故事线。",
      GitHub: "https://github.com/excalidraw/excalidraw",
      预览: "梦境地图板",
      反馈: "地图节点、路线和地点卡能快速形成视觉冲击。",
      能力: "能练到结构化生成、画布布局和节点交互。",
      扩展: "可以加多人共创、导出海报和随机世界观。"
    },
    {
      名称: "弹幕剧情生成器",
      分类: "最好玩",
      图标: "DAN",
      周期: "2-3天",
      阶段: "入门友好",
      标签: ["Web 应用", "互动叙事"],
      颜色: "#22c55e",
      描述: "输入一个梗，让 AI 生成短剧情和滚动弹幕，做成可播放小剧场。",
      GitHub: "https://github.com/vercel/ai",
      预览: "弹幕小剧场",
      反馈: "播放起来像一个小作品，旁观者很容易给反馈。",
      能力: "能练到流式生成、动画节奏和播放控制。",
      扩展: "可以加角色头像、分镜模板和评论投稿。"
    },
    {
      名称: "复古游戏关卡改造器",
      分类: "最好玩",
      图标: "LVL",
      周期: "3-5天",
      阶段: "想进阶",
      标签: ["小游戏", "关卡编辑"],
      颜色: "#84cc16",
      描述: "用提示词生成 2D 小关卡，再用鼠标拖拽调整地形、金币和障碍。",
      GitHub: "https://github.com/phaserjs/phaser",
      预览: "关卡编辑器",
      反馈: "生成后能立刻试玩，失败和通关都很有反馈。",
      能力: "能练到游戏状态、地图数据和碰撞逻辑。",
      扩展: "可以加关卡分享、排行榜和不同主题皮肤。"
    },
    {
      名称: "头像宇宙生成站",
      分类: "最好玩",
      图标: "PFP",
      周期: "1-2天",
      阶段: "入门友好",
      标签: ["图片 AI", "社交素材"],
      颜色: "#06b6d4",
      描述: "根据昵称、关键词和配色生成一套头像、横幅和个人签名。",
      GitHub: "https://github.com/invoke-ai/InvokeAI",
      预览: "头像宇宙",
      反馈: "用户会立刻拿自己的昵称试，传播感很强。",
      能力: "能练到表单、提示词拼装、图片结果管理。",
      扩展: "可以加风格商店、头像墙和一键换尺寸。"
    },
    {
      名称: "AI塔罗故事机",
      分类: "最好玩",
      图标: "TAR",
      周期: "2-3天",
      阶段: "熟悉基础",
      标签: ["互动内容", "AI"],
      颜色: "#0f766e",
      描述: "抽三张牌生成一段带选择分支的短故事，而不是玄学答案。",
      GitHub: "https://github.com/tldraw/tldraw",
      预览: "故事牌桌",
      反馈: "抽牌、翻牌、生成故事的过程天然有仪式感。",
      能力: "能练到状态机、随机逻辑和结构化文案生成。",
      扩展: "可以加卡面收藏、每日故事和分享长图。"
    },
    {
      名称: "虚拟展厅策展人",
      分类: "最好玩",
      图标: "3D",
      周期: "3-5天",
      阶段: "想进阶",
      标签: ["Three.js", "作品集"],
      颜色: "#059669",
      描述: "上传几张作品图，让 AI 生成展览主题和 3D 展厅动线。",
      GitHub: "https://github.com/mrdoob/three.js",
      预览: "3D 展厅",
      反馈: "能把普通作品集变成可逛空间，展示效果强。",
      能力: "能练到 3D 场景、相机控制和内容编排。",
      扩展: "可以加导览语音、展签编辑和访客留言。"
    },
    {
      名称: "邮件回复润色器",
      分类: "最好用",
      图标: "MAIL",
      周期: "1-2天",
      阶段: "入门友好",
      标签: ["效率工具", "写作"],
      颜色: "#1269e8",
      描述: "粘贴邮件草稿，一键生成礼貌、简洁、强硬或跟进版本。",
      GitHub: "https://github.com/openai/openai-cookbook",
      预览: "邮件润色台",
      反馈: "生成内容可以直接复制到真实工作里，价值立刻可见。",
      能力: "能练到提示词模板、语气切换和剪贴板交互。",
      扩展: "可以加收件人画像、历史模板和双语版本。"
    },
    {
      名称: "Notion资料整理机",
      分类: "最好用",
      图标: "NOT",
      周期: "3-5天",
      阶段: "想进阶",
      标签: ["资料库", "自动化"],
      颜色: "#2563eb",
      描述: "把网页、笔记和链接整理成 Notion 风格的主题资料卡。",
      GitHub: "https://github.com/makenotion/notion-sdk-js",
      预览: "资料收纳台",
      反馈: "零散信息会变成整齐卡片，前后对比非常明显。",
      能力: "能练到 API 接入、信息抽取和标签分类。",
      扩展: "可以加浏览器剪藏、自动摘要和周报导出。"
    },
    {
      名称: "简历岗位匹配器",
      分类: "最好用",
      图标: "CV",
      周期: "2-3天",
      阶段: "入门友好",
      标签: ["求职工具", "AI"],
      颜色: "#1d4ed8",
      描述: "粘贴简历和 JD，输出匹配度、缺口、改写建议和面试题。",
      GitHub: "https://github.com/openai/openai-cookbook",
      预览: "岗位匹配面板",
      反馈: "每次换 JD 都能得到具体建议，很适合真实使用。",
      能力: "能练到文本对比、结构化评分和建议生成。",
      扩展: "可以加多岗位对比、简历版本库和投递追踪。"
    },
    {
      名称: "发票票据整理器",
      分类: "最好用",
      图标: "BILL",
      周期: "3-5天",
      阶段: "熟悉基础",
      标签: ["OCR", "工作流"],
      颜色: "#0ea5e9",
      描述: "上传票据截图，自动提取金额、日期、商户并导出表格。",
      GitHub: "https://github.com/microsoft/markitdown",
      预览: "票据收纳盒",
      反馈: "杂乱截图变成表格，效率提升非常直观。",
      能力: "能练到文件上传、OCR/解析和 CSV 导出。",
      扩展: "可以加报销分类、月度统计和重复票据提醒。"
    },
    {
      名称: "客服FAQ生成器",
      分类: "最好用",
      图标: "FAQ",
      周期: "2-3天",
      阶段: "熟悉基础",
      标签: ["客服", "知识库"],
      颜色: "#0284c7",
      描述: "导入产品说明和聊天记录，生成常见问题、标准回答和标签。",
      GitHub: "https://github.com/langchain-ai/langchainjs",
      预览: "FAQ 工作台",
      反馈: "生成的问答能直接给团队试用和修正。",
      能力: "能练到知识切片、检索问答和批量编辑。",
      扩展: "可以加人工审核、命中统计和客服插件。"
    },
    {
      名称: "读书笔记压缩机",
      分类: "最好用",
      图标: "BOOK",
      周期: "1-2天",
      阶段: "入门友好",
      标签: ["阅读", "总结"],
      颜色: "#3b82f6",
      描述: "把长篇读书笔记压缩成金句、行动清单和复习卡片。",
      GitHub: "https://github.com/microsoft/markitdown",
      预览: "阅读复盘台",
      反馈: "长文会变成可复习卡片，用户能马上判断好不好。",
      能力: "能练到长文本分段、摘要和卡片化展示。",
      扩展: "可以加间隔复习、标签书架和导出 Anki。"
    },
    {
      名称: "内容选题雷达",
      分类: "最好用",
      图标: "IDEA",
      周期: "3-5天",
      阶段: "想进阶",
      标签: ["内容运营", "趋势"],
      颜色: "#2563eb",
      描述: "输入领域后抓取公开趋势，生成选题、标题和内容大纲。",
      GitHub: "https://github.com/browser-use/browser-use",
      预览: "选题雷达",
      反馈: "每天都能产出可用选题，适合内容工作流。",
      能力: "能练到网页检索、聚类整理和标题生成。",
      扩展: "可以加平台热榜、选题日历和爆款复盘。"
    },
    {
      名称: "桌面像素时钟牌",
      分类: "最好搓",
      图标: "CLK",
      周期: "1-2天",
      阶段: "入门友好",
      标签: ["硬件项目", "显示屏"],
      颜色: "#f97316",
      描述: "用 LED 点阵或网页模拟一个像素风时钟、日期和提醒牌。",
      GitHub: "https://github.com/FastLED/FastLED",
      预览: "像素时钟",
      反馈: "时间、动画和颜色变化很直观，第一次点亮就有成就感。",
      能力: "能练到定时器、显示刷新和简单动画。",
      扩展: "可以加天气、节日动画和专注模式。"
    },
    {
      名称: "迷你电子墨水日历",
      分类: "最好搓",
      图标: "INK",
      周期: "3-5天",
      阶段: "熟悉基础",
      标签: ["电子墨水", "桌面设备"],
      颜色: "#fb923c",
      描述: "电子墨水屏显示今日日程、天气和一句 AI 生成提醒。",
      GitHub: "https://github.com/ZinggJM/GxEPD2",
      预览: "墨水日历",
      反馈: "屏幕刷新慢但很有实体感，适合摆在桌面。",
      能力: "能练到低功耗显示、版式排版和数据刷新。",
      扩展: "可以加 Google Calendar、二维码和每日诗句。"
    },
    {
      名称: "USB状态旋钮",
      分类: "最好搓",
      图标: "USB",
      周期: "2-3天",
      阶段: "熟悉基础",
      标签: ["小设备", "HID"],
      颜色: "#ef4444",
      描述: "一个能切换勿扰、录制、直播状态的桌面旋钮。",
      GitHub: "https://github.com/arduino/Arduino",
      预览: "状态旋钮",
      反馈: "旋钮转动会直接改变屏幕状态和灯效，手感反馈强。",
      能力: "能练到按键输入、串口通信和桌面联动。",
      扩展: "可以加快捷键映射、音量控制和状态同步。"
    },
    {
      名称: "植物浇水提醒器",
      分类: "最好搓",
      图标: "PLT",
      周期: "2-3天",
      阶段: "入门友好",
      标签: ["传感器", "IoT"],
      颜色: "#65a30d",
      描述: "土壤湿度过低时亮灯或发通知，顺便记录植物状态。",
      GitHub: "https://github.com/espressif/arduino-esp32",
      预览: "植物看护器",
      反馈: "湿度变化和提醒灯能马上验证，调试不抽象。",
      能力: "能练到传感器读取、阈值判断和通知逻辑。",
      扩展: "可以加自动浇水、植物档案和生长曲线。"
    },
    {
      名称: "蓝牙翻页脚踏板",
      分类: "最好搓",
      图标: "BT",
      周期: "3-5天",
      阶段: "想进阶",
      标签: ["蓝牙", "输入设备"],
      颜色: "#0ea5e9",
      描述: "脚踩按钮控制 PPT、乐谱或文档翻页，适合演示和练琴。",
      GitHub: "https://github.com/h2zero/NimBLE-Arduino",
      预览: "蓝牙脚踏板",
      反馈: "踩下后电脑翻页，输入反馈非常明确。",
      能力: "能练到 BLE HID、按键消抖和设备配对。",
      扩展: "可以加长按模式、双踏板和快捷键配置。"
    },
    {
      名称: "门口快递提醒灯",
      分类: "最好搓",
      图标: "BOX",
      周期: "2-3天",
      阶段: "熟悉基础",
      标签: ["传感器", "生活工具"],
      颜色: "#ff5a45",
      描述: "检测门口有物体停留后点亮提醒灯，避免忘拿快递。",
      GitHub: "https://github.com/olikraus/u8g2",
      预览: "快递提醒灯",
      反馈: "物体靠近、灯亮、消息提醒的链路很容易验证。",
      能力: "能练到距离传感器、状态判断和屏幕提示。",
      扩展: "可以加拍照记录、家庭共享和夜间静音。"
    },
    {
      名称: "迷你空气质量站",
      分类: "最好搓",
      图标: "AIR",
      周期: "3-5天",
      阶段: "想进阶",
      标签: ["传感器", "数据看板"],
      颜色: "#f59e0b",
      描述: "采集温湿度、CO2 或 PM2.5，做一个桌面空气质量小站。",
      GitHub: "https://github.com/blynkkk/blynk-library",
      预览: "空气小站",
      反馈: "传感器数据会持续变化，适合做长期可用设备。",
      能力: "能练到数据采集、图表展示和联网同步。",
      扩展: "可以加阈值提醒、历史趋势和手机看板。"
    }
  ].map(补充项目)
);

const 明星数据 = [
  ["1", "Agent-Reach", "让 AI 智能体看到整个互联网", "本周热门", "Python", "一键读取 Twitter、Reddit、GitHub 等平台，无需 API 费用。AI 智能体的信息获取基础设施。", "AI 工具"],
  ["2", "design.md", "为 AI 编码助手描述视觉设计的规范", "本周热门", "TypeScript", "给 coding agent 一份 DESIGN.md，它就能持续理解你的设计系统。直接提升 AI 生成质量。", "开发工具"],
  ["3", "cognee", "开源 AI 记忆平台，给智能体持久记忆", "本周热门", "Python", "跨会话长期记忆 + 知识图谱引擎，自部署。适合理解 AI 记忆系统如何工作。", "适合复刻"],
  ["4", "voicebox", "开源 AI 语音工作室", "本周热门", "TypeScript", "克隆声音、听写、生成语音。全功能语音工具，前端 + AI 的典型项目。", "适合复刻"],
  ["5", "ai-website-cloner-template", "用 AI 编码助手一键克隆网站", "本周热门", "TypeScript", "输入 URL，AI 自动分析并克隆网站前端。适合新手理解 AI 编码工作流。", "适合复刻"]
];

const 状态 = {
  分类: "最好玩",
  阶段: "全部",
  周期: "全部",
  项目名: "AI封面生成器",
  详情页: "why",
  明星过滤: "本周增长"
};

const 元素 = {
  项目列表: document.querySelector("#项目列表"),
  详情图标: document.querySelector("#详情图标"),
  详情标题: document.querySelector("#详情标题"),
  详情标签: document.querySelector("#详情标签"),
  详情难度: document.querySelector("#详情难度"),
  理由列表: document.querySelector("#理由列表"),
  成品预览: document.querySelector("#成品预览"),
  项目提示词: document.querySelector("#项目提示词"),
  GitHub链接: document.querySelector("#GitHub链接"),
  阶段筛选: document.querySelector("#阶段筛选"),
  周期筛选: document.querySelector("#周期筛选"),
  提示浮层: document.querySelector("#提示浮层"),
  明星表: document.querySelector("#明星表"),
  雷达精选标题: document.querySelector("#雷达精选标题"),
  雷达精选描述: document.querySelector("#雷达精选描述")
};

function 当前项目列表() {
  return 项目数据.filter((项目) => {
    const 分类命中 = 项目.分类 === 状态.分类;
    const 阶段命中 = 状态.阶段 === "全部" || 项目.阶段 === 状态.阶段;
    const 周期命中 = 状态.周期 === "全部" || 项目.周期 === 状态.周期;
    return 分类命中 && 阶段命中 && 周期命中;
  });
}

function 当前项目() {
  return 项目数据.find((项目) => 项目.名称 === 状态.项目名) || 当前项目列表()[0] || 项目数据[0];
}

function 渲染项目列表() {
  const 列表 = 当前项目列表();
  if (!列表.some((项目) => 项目.名称 === 状态.项目名) && 列表[0]) {
    状态.项目名 = 列表[0].名称;
  }

  元素.项目列表.innerHTML = 列表.map((项目) => `
    <button class="项目项 ${项目.名称 === 状态.项目名 ? "当前" : ""}" type="button" data-project="${项目.名称}">
      <span class="项目图标" style="background:${项目.颜色}">${项目.图标}</span>
      <span>
        <h3>${项目.名称}</h3>
        <span class="标签行">${项目.标签.map((标签) => `<span class="项目标签">${标签}</span>`).join("")}</span>
      </span>
      <span class="项目周期">${项目.周期}</span>
    </button>
  `).join("");

  if (!列表.length) {
    元素.项目列表.innerHTML = `<div class="项目项"><span></span><span><h3>没找到想做的？</h3><span class="项目标签">换个筛选试试</span></span></div>`;
  }

  渲染项目详情();
}

function 渲染项目详情() {
  const 项目 = 当前项目();
  元素.详情图标.textContent = 项目.图标;
  元素.详情图标.style.background = 项目.颜色;
  元素.详情标题.textContent = 项目.名称;
  元素.详情标签.innerHTML = 项目.标签.map((标签) => `<span>${标签}</span>`).join("");
  元素.详情难度.textContent = 项目.阶段;
  元素.详情难度.style.color = 项目.颜色;
  元素.理由列表.innerHTML = 项目.理由.map(([标题, 文案]) => `
    <div class="理由项">
      <svg><use href="#图标-雷达" /></svg>
      <div>
        <h4>${标题}</h4>
        <p>${文案}</p>
      </div>
    </div>
  `).join("");
  元素.成品预览.innerHTML = `
    <div class="预览设备">
      <div class="预览栏">
        <span>${项目.预览}</span>
        <span>${项目.阶段}</span>
      </div>
      <div class="预览内容">
        <div class="预览侧栏">
          <span class="预览线" style="width:88%"></span>
          <span class="预览线" style="width:62%"></span>
          <span class="预览线" style="width:74%"></span>
          <span class="预览按钮" style="background:${项目.颜色}"></span>
        </div>
        <div class="预览画廊">
          <span class="预览缩略图" style="background:linear-gradient(135deg, ${项目.颜色}, rgba(18,105,232,.18))"></span>
          <span class="预览缩略图" style="background:linear-gradient(135deg, rgba(16,19,26,.78), ${项目.颜色})"></span>
          <span class="预览缩略图" style="background:linear-gradient(135deg, rgba(246,182,0,.75), ${项目.颜色})"></span>
          <span class="预览缩略图" style="background:linear-gradient(135deg, #dbeafe, ${项目.颜色})"></span>
          <span class="预览缩略图" style="background:linear-gradient(135deg, #eef2ff, rgba(16,19,26,.72))"></span>
          <span class="预览缩略图" style="background:linear-gradient(135deg, ${项目.颜色}, #fff0ed)"></span>
        </div>
      </div>
    </div>
  `;
  元素.项目提示词.textContent = 项目.提示词;
  元素.GitHub链接.textContent = 项目.GitHub.replace("https://github.com/", "");
  元素.GitHub链接.href = 项目.GitHub;
  元素.雷达精选标题.textContent = 项目.名称;
  元素.雷达精选描述.textContent = 项目.描述;
}

function 渲染明星表() {
  const 数据 = 明星数据.filter((项目) => 状态.明星过滤 === "本周增长" || 项目[6] === 状态.明星过滤);
  元素.明星表.innerHTML = `
    <div class="明星行 表头" role="row">
      <span>#</span><span>项目</span><span>本周增长</span><span>主要语言</span><span>为什么值得关注</span><span>新手行动</span>
    </div>
    ${数据.map((项目) => `
      <div class="明星行" role="row">
        <span class="排名">${项目[0]}</span>
        <span class="项目名块">
          <span class="明星图标">${项目[1].slice(0, 1)}</span>
          <span><strong>${项目[1]}</strong><span>${项目[2]}</span></span>
        </span>
        <span><strong class="增长">${项目[3]}</strong><span class="迷你折线"></span></span>
        <span class="语言点 ${项目[4]}">${项目[4]}</span>
        <span class="明星说明">${项目[5]}</span>
        <span><button class="小按钮" type="button" data-star-copy="${项目[1]}"><svg><use href="#图标-复制" /></svg>复刻这个</button></span>
      </div>
    `).join("")}
  `;
}

function 设置分类(分类) {
  状态.分类 = 分类;
  document.querySelectorAll(".分类标签").forEach((按钮) => {
    const 选中 = 按钮.dataset.category === 分类;
    按钮.classList.toggle("当前", 选中);
    按钮.setAttribute("aria-selected", String(选中));
  });
  渲染项目列表();
}

function 显示提示(文案 = "提示词已复制") {
  元素.提示浮层.querySelector("span").textContent = 文案;
  元素.提示浮层.classList.add("显示");
  window.clearTimeout(显示提示.计时器);
  显示提示.计时器 = window.setTimeout(() => {
    元素.提示浮层.classList.remove("显示");
  }, 1700);
}

async function 复制文本(文本, 文案) {
  try {
    await navigator.clipboard.writeText(文本);
  } catch (错误) {
    const 输入框 = document.createElement("textarea");
    输入框.value = 文本;
    document.body.appendChild(输入框);
    输入框.select();
    document.execCommand("copy");
    输入框.remove();
  }
  显示提示(文案);
}

document.querySelectorAll("[data-scroll]").forEach((按钮) => {
  按钮.addEventListener("click", () => {
    document.querySelector(按钮.dataset.scroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".分类标签").forEach((按钮) => {
  按钮.addEventListener("click", () => 设置分类(按钮.dataset.category));
});

document.querySelectorAll(".筛选丸, .轴标签").forEach((按钮) => {
  按钮.addEventListener("click", () => {
    const 分类 = 按钮.dataset.radar;
    if (分类 && 分类 !== "全部") {
      设置分类(分类);
      document.querySelector("#项目雷达").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    document.querySelectorAll(".筛选丸").forEach((丸) => 丸.classList.toggle("当前", 丸.dataset.radar === (分类 || "全部")));
  });
});

元素.阶段筛选.addEventListener("change", (事件) => {
  状态.阶段 = 事件.target.value;
  渲染项目列表();
});

元素.周期筛选.addEventListener("change", (事件) => {
  状态.周期 = 事件.target.value;
  渲染项目列表();
});

document.querySelector("#重置筛选").addEventListener("click", () => {
  状态.阶段 = "全部";
  状态.周期 = "全部";
  元素.阶段筛选.value = "全部";
  元素.周期筛选.value = "全部";
  渲染项目列表();
});

元素.项目列表.addEventListener("click", (事件) => {
  const 按钮 = 事件.target.closest("[data-project]");
  if (!按钮) return;
  状态.项目名 = 按钮.dataset.project;
  渲染项目列表();
});

document.querySelectorAll(".详情页签").forEach((按钮) => {
  按钮.addEventListener("click", () => {
    状态.详情页 = 按钮.dataset.detail;
    document.querySelectorAll(".详情页签").forEach((页签) => {
      const 选中 = 页签 === 按钮;
      页签.classList.toggle("当前", 选中);
      页签.setAttribute("aria-selected", String(选中));
    });
    const 目标 = 状态.详情页 === "prompt" ? ".提示词区域" : 状态.详情页 === "preview" ? "#成品预览" : ".详情内容区";
    document.querySelector(目标)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

document.querySelector("#复制项目提示词").addEventListener("click", () => {
  复制文本(当前项目().提示词, "项目提示词已复制");
});

document.querySelector("#刷新雷达").addEventListener("click", () => {
  const 同类项目 = 项目数据.filter((项目) => 项目.分类 === 状态.分类);
  const 当前索引 = 同类项目.findIndex((项目) => 项目.名称 === 状态.项目名);
  const 下一个 = 同类项目[(当前索引 + 1) % 同类项目.length] || 项目数据[0];
  状态.项目名 = 下一个.名称;
  渲染项目列表();
  显示提示("雷达已刷新");
});

document.querySelectorAll(".榜单按钮").forEach((按钮) => {
  按钮.addEventListener("click", () => {
    状态.明星过滤 = 按钮.dataset.starFilter;
    document.querySelectorAll(".榜单按钮").forEach((项) => 项.classList.toggle("当前", 项 === 按钮));
    渲染明星表();
  });
});

元素.明星表.addEventListener("click", (事件) => {
  const 按钮 = 事件.target.closest("[data-star-copy]");
  if (!按钮) return;
  const 名称 = 按钮.dataset.starCopy;
  复制文本(`请参考 GitHub 热门项目 ${名称}，帮我拆解它最适合新手复刻的一版，并生成一个 3 天内能完成的 Vibe Coding 项目计划。`, "复刻提示词已复制");
});

const 周报提示词 = "请基于本周 GitHub 增长最快的 AI/开发工具项目，挑选 3 个适合新手复刻的方向，并分别给出为什么值得做、适合阶段、成品预览描述和可直接丢给 Codex 的开工提示词。本周亮点：AI 智能体平台化（Agent-Reach、cognee）、设计即代码（design.md）、语音工具（voicebox）、AI 网站克隆。";

document.querySelector("#复制周报提示词").addEventListener("click", () => 复制文本(周报提示词, "本周提示词已复制"));
document.querySelector("#复制行动提示词").addEventListener("click", () => 复制文本(周报提示词, "本周提示词已复制"));

渲染项目列表();
渲染明星表();
