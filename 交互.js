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
3. 展示生成结果，支持下载、收藏和复制提示词。
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
2. 页面或设备要能展示运行结果，并保留清晰的状态反馈。
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
  ["1", "Agent-Reach", "让 AI 智能体看到整个互联网", "+4.8k", "Python", "一键读取 Twitter、Reddit、GitHub 等平台，无需 API 费用。AI 智能体的信息获取基础设施。", "AI 工具"],
  ["2", "design.md", "为 AI 编码助手描述视觉设计的规范", "+4.2k", "TypeScript", "给 coding agent 一份 DESIGN.md，它就能持续理解你的设计系统。直接提升 AI 生成质量。", "开发工具"],
  ["3", "cognee", "开源 AI 记忆平台，给智能体持久记忆", "+3.9k", "Python", "跨会话长期记忆 + 知识图谱引擎，自部署。适合理解 AI 记忆系统如何工作。", "适合复刻"],
  ["4", "voicebox", "开源 AI 语音工作室", "+3.4k", "TypeScript", "克隆声音、听写、生成语音。全功能语音工具，前端 + AI 的典型项目。", "适合复刻"],
  ["5", "ai-website-cloner-template", "用 AI 编码助手一键克隆网站", "+3.1k", "TypeScript", "输入 URL，AI 自动分析并克隆网站前端。适合新手理解 AI 编码工作流。", "适合复刻"],
  ["6", "Open WebUI", "本地大模型的通用聊天与工具面板", "+2.9k", "Svelte", "界面完整、模型接入清楚，适合拆解一个 AI 产品从设置到对话的全流程。", "AI 工具"],
  ["7", "Dify", "可视化搭建 AI 应用和工作流", "+2.7k", "TypeScript", "把提示词、知识库、工具调用和发布流程放在一起，适合学习 AI 应用平台结构。", "AI 工具"],
  ["8", "Flowise", "拖拽式 LLM 工作流构建器", "+2.5k", "TypeScript", "节点画布和工作流执行都很直观，新手能快速复刻一个轻量版流程编排器。", "AI 工具"],
  ["9", "LiteLLM", "统一调用不同大模型 API 的网关", "+2.2k", "Python", "多模型路由、限流和成本记录都很实用，适合做团队内部 AI 网关。", "AI 工具"],
  ["10", "ComfyUI", "节点式 AI 图像生成工作台", "+2.1k", "Python", "视觉反馈强，适合新手观察复杂 AI 工作流如何被拆成可组合节点。", "AI 工具"],
  ["11", "Ollama", "本地运行和管理大模型", "+2.0k", "Go", "本地模型体验门槛低，适合作为所有离线 AI 工具项目的基础设施。", "AI 工具"],
  ["12", "browser-use", "让 AI 自动操作浏览器完成任务", "+1.9k", "Python", "能看到智能体如何观察页面、执行动作和整理结果，Agent 练手价值高。", "AI 工具"],
  ["13", "Khoj", "个人知识库 AI 助手", "+1.8k", "Python", "把聊天、文件、搜索和记忆结合起来，适合学习个人 AI 助手的产品形态。", "AI 工具"],
  ["14", "LangGraph", "构建可控 AI 智能体流程", "+1.7k", "Python", "用图结构管理多步骤 Agent，非常适合进阶理解状态和工具调用。", "AI 工具"],
  ["15", "OpenHands", "开源软件工程智能体", "+1.6k", "Python", "把代码编辑、终端执行和任务规划串起来，适合拆解 AI 编码助手。", "AI 工具"],
  ["16", "Codex Starter Kits", "面向 Codex 的入门项目模板集合", "+1.5k", "TypeScript", "项目结构清楚、任务边界明确，适合新手直接换题材复刻。", "开发工具"],
  ["17", "SuperClaude Framework", "给 Claude Code 的角色和命令工作流", "+1.4k", "Markdown", "把 AI 编码协作拆成命令、角色和流程，对提示词工程很有参考价值。", "开发工具"],
  ["18", "shadcn-ui", "可复制进项目的组件系统", "+1.3k", "TypeScript", "组件代码透明、样式可控，是新手快速搭建专业界面的好底座。", "开发工具"],
  ["19", "Vite", "极速前端开发构建工具", "+1.2k", "TypeScript", "启动快、配置少，适合新手用来搭建各种小型 Web 项目。", "开发工具"],
  ["20", "Turborepo", "前端与全栈 monorepo 工具链", "+1.1k", "TypeScript", "适合拆解多应用、多包项目如何组织，进阶后很有用。", "开发工具"],
  ["21", "Biome", "快速代码格式化与 lint 工具", "+1.0k", "Rust", "配置简单、速度快，适合给自己的项目加上工程质量检查。", "开发工具"],
  ["22", "Drizzle ORM", "类型安全的 TypeScript ORM", "+980", "TypeScript", "数据库模型和查询都很直观，适合从小项目过渡到真实数据应用。", "开发工具"],
  ["23", "Playwright MCP", "让智能体通过浏览器验证页面", "+940", "TypeScript", "把自动化测试和 AI 代理连接起来，适合做可视化 QA 工作流。", "开发工具"],
  ["24", "MarkItDown", "把 Office/PDF/网页转成 Markdown", "+900", "Python", "文件解析需求真实，非常适合做资料整理、知识库导入类工具。", "开发工具"],
  ["25", "TanStack Start", "类型友好的全栈 React 框架", "+860", "TypeScript", "路由、数据和服务端能力一体化，适合学习现代前端项目结构。", "开发工具"],
  ["26", "Open Lovable", "开源版 AI 网站生成器", "+820", "TypeScript", "目标清楚、展示强，很适合复刻一个只做单页生成的轻量版本。", "适合复刻"],
  ["27", "Sim Studio", "可视化 AI Agent 流程设计器", "+780", "TypeScript", "画布、节点、运行日志都有成品感，适合做一个简化版流程编辑器。", "适合复刻"],
  ["28", "n8n", "开源自动化工作流平台", "+740", "TypeScript", "真实工作流价值高，新手可以先复刻三节点自动化任务。", "适合复刻"],
  ["29", "Excalidraw", "手绘风白板协作工具", "+710", "TypeScript", "画布体验直观，适合做一个极简草图板或提示词画板。", "适合复刻"],
  ["30", "tldraw", "可扩展的网页白板 SDK", "+680", "TypeScript", "交互细节丰富，但 MVP 可以很小，适合练画布和对象选择。", "适合复刻"],
  ["31", "Supabase", "开源 Firebase 替代方案", "+640", "TypeScript", "数据库、认证和存储都能拆成小项目练习，适合做工具后台。", "适合复刻"],
  ["32", "Twenty CRM", "开源现代 CRM", "+610", "TypeScript", "业务模型真实，适合新手复刻联系人、机会和看板三个核心模块。", "适合复刻"]
];

const 状态 = {
  分类: "最好玩",
  阶段: "全部",
  周期: "全部",
  项目名: "AI封面生成器",
  详情页: "why",
  明星过滤: "本周增长",
  语言: localStorage.getItem("vibe-radar-language") === "en" ? "en" : "zh"
};

const 元素 = {
  项目列表: document.querySelector("#项目列表"),
  详情图标: document.querySelector("#详情图标"),
  详情标题: document.querySelector("#详情标题"),
  详情标签: document.querySelector("#详情标签"),
  详情难度: document.querySelector("#详情难度"),
  项目详情: document.querySelector(".项目详情"),
  理由列表: document.querySelector("#理由列表"),
  阶段面板: document.querySelector("#阶段面板"),
  项目提示词: document.querySelector("#项目提示词"),
  GitHub链接: document.querySelector("#GitHub链接"),
  阶段筛选: document.querySelector("#阶段筛选"),
  周期筛选: document.querySelector("#周期筛选"),
  提示浮层: document.querySelector("#提示浮层"),
  明星表: document.querySelector("#明星表"),
  雷达精选标题: document.querySelector("#雷达精选标题"),
  雷达精选描述: document.querySelector("#雷达精选描述"),
  语言切换: document.querySelector("#语言切换"),
  周报提示词预览: document.querySelector("#周报提示词预览")
};

const 语言文案 = {
  zh: {
    title: "Vibe Coding雷达",
    brand: "Vibe Coding雷达",
    navProjects: "项目雷达",
    navPrompt: "开工提示词",
    navStars: "明星项目",
    navStage: "新手阶段",
    heroEyebrow: "暗场扫描控制台 · 为 Codex / Claude Code 新手准备",
    heroTitle: "工具都装好了，下一步做什么？",
    heroText: "从好玩、好用、好搓三个方向，找到值得做、做得出来、做完有反馈的 AI 项目。",
    heroPrimary: "开始扫雷达",
    heroSecondary: "查看开工提示词",
    promiseA: "从零开始",
    promiseB: "项目可落地",
    promiseC: "快速获得反馈",
    radarTitle: "项目雷达",
    scanning: "扫描中...",
    refresh: "刷新",
    beginner: "新手友好",
    days35: "3-5天可完成",
    loopA: "完整体验闭环",
    loopB: "AI 能力可见",
    loopC: "容易二创",
    detailButton: "查看项目详情",
    filter: "筛选",
    all: "全部",
    fun: "最好玩",
    useful: "最好用",
    buildable: "最好搓",
    directionTitle: "第一步：用雷达找方向",
    directionText: "三条轴，帮你快速定位适合现在的项目。",
    funCardText: "有探索感、能激发创意的项目。",
    funCardA: "新奇有趣的交互",
    funCardB: "创意驱动",
    funCardC: "成就感强",
    usefulCardText: "解决实际问题，能长期使用的项目。",
    usefulCardA: "提升效率",
    usefulCardB: "真实需求",
    usefulCardC: "持续价值",
    buildCardText: "偏硬件、实体、小设备，适合动手党。",
    buildCardA: "技术门槛低",
    buildCardB: "范围可控",
    buildCardC: "快速交付",
    projectTitle: "挑一个能做完的项目",
    projectText: "每个项目都带理由、阶段判断和可复制的开工提示词。",
    stage: "阶段",
    cycle: "周期",
    allStages: "全部阶段",
    allCycles: "全部周期",
    beginnerStage: "入门友好",
    basicsStage: "熟悉基础",
    advancedStage: "想进阶",
    days12: "1-2天",
    days23: "2-3天",
    reset: "重置",
    difficulty: "难度",
    stagePanelTitle: "适合谁来做",
    stagePanelTimeline: "建议周期",
    stagePanelLevel: "新手阶段",
    stagePanelPrerequisite: "动手前准备",
    stagePanelGoal: "完成标准",
    stageEntryPrep: "会使用 Codex/Claude Code，能打开项目并按 README 运行即可。",
    stageBasicPrep: "已经做过一个小网页或脚本，知道如何修改组件、样式和本地数据。",
    stageAdvancedPrep: "愿意处理 API、状态流、文件读写或硬件调试，能接受一点排错时间。",
    stageFunGoal: "做出可展示的互动成品，能让别人输入内容并看到明显变化。",
    stageUsefulGoal: "跑通一个真实工作流，输出结果能被复制、下载或继续处理。",
    stageBuildGoal: "做出可摆放或可操作的实体/模拟设备，有清楚的状态反馈。",
    why: "为什么值得做",
    stageFit: "适合阶段",
    startPrompt: "开工提示词",
    promptTitle: "开工提示词（复制可用）",
    copyPrompt: "复制提示词",
    githubSource: "原项目 GitHub",
    emptyTitle: "没找到想做的？",
    emptyText: "换个筛选试试",
    starsTitle: "本周 GitHub 明星项目",
    starsText: "自动追踪增长最快的开源项目，挑出适合 Vibe Coding 新手拆解、复刻和二创的灵感。",
    viewGithub: "查看 GitHub",
    addRadar: "加入雷达",
    weeklyGrowth: "本周增长",
    cloneable: "适合复刻",
    aiTools: "AI 工具",
    devTools: "开发工具",
    tableRank: "#",
    tableProject: "项目",
    tableGrowth: "本周增长",
    tableLang: "主要语言",
    tableWhy: "为什么值得关注",
    tableAction: "新手行动",
    cloneThis: "复刻这个",
    readoutTitle: "本周雷达读数",
    weekRange: "6月22日 - 6月28日",
    readoutA: "AI 智能体平台化",
    readoutAText: "本周 Agent-Reach 和 cognee 爆发，说明 AI 智能体正从演示走向基础设施。",
    readoutB: "设计即代码",
    readoutBText: "design.md 走红代表 AI 编码正在催生「给 AI 看的设计规范」新品类。",
    readoutC: "语音与克隆热门",
    readoutCText: "voicebox 和 AI 网站克隆类项目增长快，适合新手快速复刻练手。",
    copyWeekly: "复制本周入门提示词",
    actionTitle: "复制本周入门提示词，快速开始你的第一个项目",
    actionText: "基于热门项目生成可直接使用的 Starter Prompt。",
    copy: "复制",
    footerBrand: "Vibe Coding 雷达",
    footerText: "不背技术栈，不排学习路径，只帮你找到值得做、做得出来、做完有反馈的项目。",
    footerExplore: "本周榜单",
    footerLibrary: "项目库",
    footerSubscribe: "订阅更新",
    footerSubmit: "提交项目",
    footerGuide: "新手指南",
    footerPrompts: "提示词库",
    toastCopied: "提示词已复制",
    toastProjectCopied: "项目提示词已复制",
    toastRadar: "雷达已刷新",
    toastWeekly: "本周提示词已复制",
    toastClone: "复刻提示词已复制",
    autoUpdatePrompt: "复制自动更新提示词",
    toastAutoPrompt: "自动更新提示词已复制",
    languageAria: "切换到英文",
    weeklyPromptPreview: "用 Agent-Reach 或 cognee 的架构思路，实现一个能跨平台收集信息并持久记忆的 AI 研究助手。"
  },
  en: {
    title: "Vibe Coding Radar",
    brand: "Vibe Coding Radar",
    navProjects: "Radar",
    navPrompt: "Starter Prompts",
    navStars: "Star Projects",
    navStage: "Beginner Stages",
    heroEyebrow: "Dark scan console · Built for Codex / Claude Code beginners",
    heroTitle: "Tools installed. What should you build next?",
    heroText: "Scan fun, useful, and hands-on AI projects that are worth building, realistic to finish, and rewarding to share.",
    heroPrimary: "Start scanning",
    heroSecondary: "View starter prompts",
    promiseA: "Start from zero",
    promiseB: "Buildable projects",
    promiseC: "Fast feedback",
    radarTitle: "Project Radar",
    scanning: "Scanning...",
    refresh: "Refresh",
    beginner: "Beginner friendly",
    days35: "3-5 days",
    loopA: "Complete product loop",
    loopB: "Visible AI capability",
    loopC: "Easy to remix",
    detailButton: "View project details",
    filter: "Filter",
    all: "All",
    fun: "Most Fun",
    useful: "Most Useful",
    buildable: "Most Buildable",
    directionTitle: "Step 1: Pick your radar direction",
    directionText: "Three axes help you find a project that fits your current stage.",
    funCardText: "Creative projects with instant wow-factor and playful interaction.",
    funCardA: "Novel interactions",
    funCardB: "Creative driven",
    funCardC: "High delight",
    usefulCardText: "Workflow projects that solve real problems and keep paying off.",
    usefulCardA: "Boost efficiency",
    usefulCardB: "Real needs",
    usefulCardC: "Lasting value",
    buildCardText: "Hardware, physical devices, and small builds for people who want to tinker.",
    buildCardA: "Low technical barrier",
    buildCardB: "Controlled scope",
    buildCardC: "Quick delivery",
    projectTitle: "Pick a project you can finish",
    projectText: "Every project includes why it matters, who it fits, and a copy-ready starter prompt.",
    stage: "Stage",
    cycle: "Timeline",
    allStages: "All stages",
    allCycles: "All timelines",
    beginnerStage: "Beginner friendly",
    basicsStage: "Has basics",
    advancedStage: "Ready to level up",
    days12: "1-2 days",
    days23: "2-3 days",
    reset: "Reset",
    difficulty: "Difficulty",
    stagePanelTitle: "Who should build this",
    stagePanelTimeline: "Suggested timeline",
    stagePanelLevel: "Beginner stage",
    stagePanelPrerequisite: "Before you start",
    stagePanelGoal: "Done means",
    stageEntryPrep: "You can use Codex or Claude Code, open a project, and run README steps.",
    stageBasicPrep: "You have built a small page or script and can edit components, styles, and local data.",
    stageAdvancedPrep: "You are willing to handle APIs, state flow, file I/O, or hardware debugging.",
    stageFunGoal: "Ship a playful interactive result that changes clearly when someone tries it.",
    stageUsefulGoal: "Complete a real workflow whose output can be copied, downloaded, or reused.",
    stageBuildGoal: "Build a physical or simulated device with clear state feedback.",
    why: "Why build it",
    stageFit: "Best stage",
    startPrompt: "Starter prompt",
    promptTitle: "Starter prompt (copy-ready)",
    copyPrompt: "Copy prompt",
    githubSource: "Source GitHub",
    emptyTitle: "Nothing matched yet",
    emptyText: "Try another filter",
    starsTitle: "This Week's GitHub Star Projects",
    starsText: "Track fast-growing open-source projects and surface ideas beginners can study, remix, and ship.",
    viewGithub: "View GitHub",
    addRadar: "Add to radar",
    weeklyGrowth: "This week",
    cloneable: "Good to remix",
    aiTools: "AI tools",
    devTools: "Dev tools",
    tableRank: "#",
    tableProject: "Project",
    tableGrowth: "Weekly lift",
    tableLang: "Language",
    tableWhy: "Why it matters",
    tableAction: "Beginner action",
    cloneThis: "Remix this",
    readoutTitle: "Radar Readout",
    weekRange: "June 22 - June 28",
    readoutA: "AI agents becoming platforms",
    readoutAText: "Agent-Reach and cognee show agents moving from demos toward infrastructure.",
    readoutB: "Design as code context",
    readoutBText: "design.md points to a new category: design specs written for AI coding agents.",
    readoutC: "Voice and cloning are hot",
    readoutCText: "voicebox and website-cloning projects are rising fast and are great remix targets.",
    copyWeekly: "Copy this week's starter prompt",
    actionTitle: "Copy a weekly starter prompt and launch your first build",
    actionText: "Generate a ready-to-use Starter Prompt from hot projects.",
    copy: "Copy",
    footerBrand: "Vibe Coding Radar",
    footerText: "No stack memorization. No rigid learning path. Just projects worth doing, realistic to finish, and satisfying to share.",
    footerExplore: "Weekly list",
    footerLibrary: "Project library",
    footerSubscribe: "Subscribe",
    footerSubmit: "Submit project",
    footerGuide: "Beginner guide",
    footerPrompts: "Prompt library",
    toastCopied: "Prompt copied",
    toastProjectCopied: "Project prompt copied",
    toastRadar: "Radar refreshed",
    toastWeekly: "Weekly prompt copied",
    toastClone: "Remix prompt copied",
    autoUpdatePrompt: "Copy update prompt",
    toastAutoPrompt: "Auto-update prompt copied",
    languageAria: "Switch to Chinese",
    weeklyPromptPreview: "Use the architecture ideas from Agent-Reach or cognee to build an AI research assistant that collects cross-platform information and keeps long-term memory."
  }
};

const 静态文案绑定 = [
  [".品牌 > span:last-child", "brand"],
  [".导航 a[href='#项目雷达']", "navProjects"],
  [".导航 a[href='#开工提示词']", "navPrompt"],
  [".导航 a[href='#明星项目']", "navStars"],
  [".导航 a[href='#新手阶段']", "navStage"],
  [".首屏眉标", "heroEyebrow"],
  [".首屏文案 h1", "heroTitle"],
  [".首屏说明", "heroText"],
  [".首屏按钮组 .主要按钮", "heroPrimary"],
  [".首屏按钮组 .次要按钮", "heroSecondary"],
  [".承诺清单 span:nth-child(1)", "promiseA"],
  [".承诺清单 span:nth-child(2)", "promiseB"],
  [".承诺清单 span:nth-child(3)", "promiseC"],
  [".工作台头部 strong", "radarTitle"],
  [".扫描状态", "scanning"],
  ["#刷新雷达", "refresh"],
  [".精选卡 .标签行 span:nth-child(1)", "beginner"],
  [".精选卡 .标签行 span:nth-child(2)", "days35"],
  [".精选卡 li:nth-child(1)", "loopA"],
  [".精选卡 li:nth-child(2)", "loopB"],
  [".精选卡 li:nth-child(3)", "loopC"],
  [".精选卡 .主要按钮", "detailButton"],
  [".雷达筛选条 > span", "filter"],
  [".筛选丸[data-radar='全部']", "all"],
  [".筛选丸[data-radar='最好玩'], .轴标签[data-radar='最好玩']", "fun"],
  [".筛选丸[data-radar='最好用'], .轴标签[data-radar='最好用']", "useful"],
  [".筛选丸[data-radar='最好搓'], .轴标签[data-radar='最好搓']", "buildable"],
  ["#方向标题", "directionTitle"],
  [".方向区 .区块标题 p", "directionText"],
  [".方向卡.好玩 h3", "fun"],
  [".方向卡.好玩 p", "funCardText"],
  [".方向卡.好玩 li:nth-child(1)", "funCardA"],
  [".方向卡.好玩 li:nth-child(2)", "funCardB"],
  [".方向卡.好玩 li:nth-child(3)", "funCardC"],
  [".方向卡.好用 h3", "useful"],
  [".方向卡.好用 p", "usefulCardText"],
  [".方向卡.好用 li:nth-child(1)", "usefulCardA"],
  [".方向卡.好用 li:nth-child(2)", "usefulCardB"],
  [".方向卡.好用 li:nth-child(3)", "usefulCardC"],
  [".方向卡.好搓 h3", "buildable"],
  [".方向卡.好搓 p", "buildCardText"],
  [".方向卡.好搓 li:nth-child(1)", "buildCardA"],
  [".方向卡.好搓 li:nth-child(2)", "buildCardB"],
  [".方向卡.好搓 li:nth-child(3)", "buildCardC"],
  ["#项目标题", "projectTitle"],
  [".项目区 .区块标题 p", "projectText"],
  [".分类标签[data-category='最好玩']", "fun"],
  [".分类标签[data-category='最好用']", "useful"],
  [".分类标签[data-category='最好搓']", "buildable"],
  [".过滤栏 label:nth-child(1) span", "stage"],
  [".过滤栏 label:nth-child(2) span", "cycle"],
  ["#阶段筛选 option[value='全部']", "allStages"],
  ["#阶段筛选 option[value='入门友好']", "beginnerStage"],
  ["#阶段筛选 option[value='熟悉基础']", "basicsStage"],
  ["#阶段筛选 option[value='想进阶']", "advancedStage"],
  ["#周期筛选 option[value='全部']", "allCycles"],
  ["#周期筛选 option[value='1-2天']", "days12"],
  ["#周期筛选 option[value='2-3天']", "days23"],
  ["#周期筛选 option[value='3-5天']", "days35"],
  ["#重置筛选", "reset"],
  [".难度盒 span", "difficulty"],
  [".详情页签[data-detail='why']", "why"],
  [".详情页签[data-detail='stage']", "stageFit"],
  [".详情页签[data-detail='prompt']", "startPrompt"],
  [".提示词头 strong", "promptTitle"],
  ["#复制项目提示词", "copyPrompt"],
  ["#复制自动更新提示词", "autoUpdatePrompt"],
  [".GitHub行 span", "githubSource"],
  ["#明星标题", "starsTitle"],
  [".明星区 .区块标题 p", "starsText"],
  [".明星动作 a", "viewGithub"],
  [".明星动作 button", "addRadar"],
  [".榜单按钮[data-star-filter='本周增长']", "weeklyGrowth"],
  [".榜单按钮[data-star-filter='适合复刻']", "cloneable"],
  [".榜单按钮[data-star-filter='AI 工具']", "aiTools"],
  [".榜单按钮[data-star-filter='开发工具']", "devTools"],
  [".雷达读数 h3", "readoutTitle"],
  [".周范围", "weekRange"],
  [".读数组 article:nth-child(1) strong", "readoutA"],
  [".读数组 article:nth-child(1) p", "readoutAText"],
  [".读数组 article:nth-child(2) strong", "readoutB"],
  [".读数组 article:nth-child(2) p", "readoutBText"],
  [".读数组 article:nth-child(3) strong", "readoutC"],
  [".读数组 article:nth-child(3) p", "readoutCText"],
  ["#复制周报提示词", "copyWeekly"],
  [".行动条 strong", "actionTitle"],
  [".行动条 p", "actionText"],
  ["#复制行动提示词", "copy"],
  [".页脚品牌 strong", "footerBrand"],
  [".页脚品牌 p", "footerText"],
  [".页脚列:nth-child(2) a:nth-child(1)", "footerExplore"],
  [".页脚列:nth-child(2) a:nth-child(2)", "footerLibrary"],
  [".页脚列:nth-child(3) a:nth-child(1)", "footerSubscribe"],
  [".页脚列:nth-child(3) a:nth-child(2)", "footerSubmit"],
  [".页脚列:nth-child(4) a:nth-child(1)", "footerGuide"],
  [".页脚列:nth-child(4) a:nth-child(2)", "footerPrompts"],
  ["#提示浮层 span", "toastCopied"]
];

const 分类英文 = {
  最好玩: "Most Fun",
  最好用: "Most Useful",
  最好搓: "Most Buildable",
  全部: "All"
};

const 阶段英文 = {
  入门友好: "Beginner friendly",
  熟悉基础: "Has basics",
  想进阶: "Ready to level up",
  全部: "All stages"
};

const 标签英文 = {
  "Web 应用": "Web app",
  AI: "AI",
  可视化: "Visualization",
  开发工具: "Dev tool",
  桌面应用: "Desktop app",
  小而美: "Tiny app",
  效率工具: "Productivity",
  "AI Agent": "AI Agent",
  研究工具: "Research",
  实用工具: "Utility",
  硬件项目: "Hardware",
  IoT: "IoT",
  桌面装置: "Desk device",
  "音频 AI": "Audio AI",
  互动叙事: "Interactive story",
  小游戏: "Mini game",
  关卡编辑: "Level editor",
  "图片 AI": "Image AI",
  社交素材: "Social assets",
  互动内容: "Interactive content",
  "Three.js": "Three.js",
  作品集: "Portfolio",
  写作: "Writing",
  资料库: "Knowledge base",
  自动化: "Automation",
  求职工具: "Job search",
  OCR: "OCR",
  工作流: "Workflow",
  客服: "Support",
  知识库: "Knowledge base",
  阅读: "Reading",
  总结: "Summaries",
  内容运营: "Content ops",
  趋势: "Trends",
  显示屏: "Display",
  电子墨水: "E-ink",
  桌面设备: "Desktop device",
  小设备: "Small device",
  HID: "HID",
  传感器: "Sensor",
  蓝牙: "Bluetooth",
  输入设备: "Input device",
  生活工具: "Life tool",
  数据看板: "Dashboard"
};

const 项目英文 = {
  AI封面生成器: ["AI Cover Generator", "Generate polished covers for blogs, videos, and social posts from a title, purpose, and style."],
  代码截图美化器: ["Code Shot Beautifier", "Turn raw code snippets into shareable screenshots with themes, spacing, export, and polish."],
  像素宠物值班台: ["Pixel Pet Desk Buddy", "A desktop companion that changes mood based on todos, time, and weather."],
  会议纪要清洗台: ["Meeting Notes Cleaner", "Clean messy meeting transcripts into summaries, actions, risks, and follow-up emails."],
  自动周报助手: ["Auto Weekly Report Assistant", "Turn scattered notes, chats, and commits into a clear weekly report."],
  网页信息研究助手: ["Web Research Assistant", "Search the web, collect trusted sources, and produce a cited research brief."],
  桌面天气小盒: ["Desktop Weather Box", "Display weather, schedule, and reminders on a small desktop screen or web simulator."],
  ESP32桌面番茄钟: ["ESP32 Desk Pomodoro", "Build a focus timer with a screen, button states, lights, and daily focus stats."],
  NFC打卡灯牌: ["NFC Check-in Light Sign", "Tap NFC cards to switch modes like focus, reading, workout, and rest with light feedback."],
  AI声音表情包工厂: ["AI Voice Meme Factory", "Create short voice clips, captions, and shareable meme assets from one line and an emotion."],
  梦境地图生成器: ["Dream Map Generator", "Transform strange dream notes into a zoomable map with places, routes, and story cards."],
  弹幕剧情生成器: ["Bullet Comment Story Maker", "Generate a short skit and rolling comments from a meme idea, then play it as a tiny theater."],
  复古游戏关卡改造器: ["Retro Game Level Remixer", "Generate a 2D level with prompts, then edit terrain, coins, and obstacles by dragging."],
  头像宇宙生成站: ["Avatar Universe Studio", "Create a matching avatar, banner, and signature set from a nickname and color mood."],
  AI塔罗故事机: ["AI Tarot Story Machine", "Draw three cards and turn them into a branching short story instead of a fortune answer."],
  虚拟展厅策展人: ["Virtual Gallery Curator", "Upload works and let AI build an exhibition theme plus a 3D gallery route."],
  邮件回复润色器: ["Email Reply Polisher", "Rewrite draft emails into polite, concise, firm, or follow-up versions."],
  Notion资料整理机: ["Notion Resource Organizer", "Organize links, notes, and webpages into Notion-style topic cards."],
  简历岗位匹配器: ["Resume-JD Matcher", "Compare a resume with a job description and output fit, gaps, edits, and interview prep."],
  发票票据整理器: ["Receipt Organizer", "Extract amount, date, merchant, and category from receipt screenshots and export a table."],
  客服FAQ生成器: ["Support FAQ Generator", "Turn product docs and chat logs into FAQs, standard answers, and tags."],
  读书笔记压缩机: ["Reading Notes Compressor", "Compress long reading notes into quotes, action items, and review cards."],
  内容选题雷达: ["Content Topic Radar", "Scan public trends for a niche and generate topics, titles, and outlines."],
  桌面像素时钟牌: ["Desktop Pixel Clock Sign", "Build a pixel-style clock sign with date, reminders, colors, and small animations."],
  迷你电子墨水日历: ["Mini E-ink Calendar", "Show today's schedule, weather, and an AI-generated note on an e-ink display."],
  USB状态旋钮: ["USB Status Knob", "Use a physical knob to switch focus, recording, streaming, and do-not-disturb states."],
  植物浇水提醒器: ["Plant Watering Reminder", "Read soil moisture and trigger a light or notification when a plant needs water."],
  蓝牙翻页脚踏板: ["Bluetooth Page-Turn Pedal", "Control slides, sheet music, or documents with a Bluetooth foot pedal."],
  门口快递提醒灯: ["Doorstep Parcel Alert Light", "Detect parcels at the door and light up a reminder so you do not forget them."],
  迷你空气质量站: ["Mini Air Quality Station", "Collect temperature, humidity, CO2, or PM2.5 data for a small desktop dashboard."]
};

const 英文理由 = {
  最好玩: [
    ["Instant wow factor", "The result is visible fast, so it is easy to show, test, and improve."],
    ["Good AI practice", "You practice prompt design, generation flow, state handling, and result presentation."],
    ["Easy to remix", "Templates, sharing, history, and new styles can all become natural second versions."]
  ],
  最好用: [
    ["Real workflow value", "The input and output match a real recurring task, so the tool can enter daily work."],
    ["Short feedback loop", "Users can quickly tell whether the generated result is useful and refine it."],
    ["Strong upgrade path", "You can add integrations, history, export, review, and automation after the MVP."]
  ],
  最好搓: [
    ["Tangible feedback", "Screens, buttons, lights, sensors, or device state make progress feel concrete."],
    ["Manageable scope", "The first version can stay small while still feeling like a complete object."],
    ["Easy to extend", "Later versions can add data sync, modes, dashboards, notifications, or a web control panel."]
  ]
};

const 明星英文 = {
  "Agent-Reach": ["Lets AI agents see the broader internet", "+4.8k", "One interface for Twitter, Reddit, GitHub, and more without API costs. Useful infrastructure for AI agents.", "AI tools"],
  "design.md": ["A visual design spec format for AI coding assistants", "+4.2k", "Give a coding agent a DESIGN.md and it can keep understanding your design system.", "Dev tools"],
  cognee: ["Open-source AI memory platform", "+3.9k", "Long-term memory plus a knowledge graph engine. Great for understanding AI memory systems.", "Good to remix"],
  voicebox: ["Open-source AI voice studio", "+3.4k", "Voice cloning, transcription, and speech generation in one product-shaped AI tool.", "Good to remix"],
  "ai-website-cloner-template": ["Clone websites with AI coding assistants", "+3.1k", "Enter a URL and let AI analyze and recreate the frontend. Great for learning AI coding workflows.", "Good to remix"],
  "Open WebUI": ["Universal local LLM chat and tool console", "+2.9k", "A complete product surface for model setup, chat, and tools. Great for studying AI app structure.", "AI tools"],
  Dify: ["Visual AI app and workflow builder", "+2.7k", "Connect prompts, knowledge bases, tool calls, and publishing in one beginner-readable platform.", "AI tools"],
  Flowise: ["Drag-and-drop LLM workflow builder", "+2.5k", "Node canvas plus execution flow makes it a strong reference for a lightweight workflow builder.", "AI tools"],
  LiteLLM: ["Unified gateway for different model APIs", "+2.2k", "Routing, rate limits, and cost tracking are practical patterns for an internal AI gateway.", "AI tools"],
  ComfyUI: ["Node-based AI image generation studio", "+2.1k", "The visual workflow is concrete and useful for learning how complex AI flows become nodes.", "AI tools"],
  Ollama: ["Run and manage local LLMs", "+2.0k", "A low-friction base for offline AI tools and local model experiments.", "AI tools"],
  "browser-use": ["Let AI operate browsers to complete tasks", "+1.9k", "Shows how agents observe pages, take actions, and summarize results.", "AI tools"],
  Khoj: ["Personal knowledge-base AI assistant", "+1.8k", "Combines chat, files, search, and memory into a useful personal assistant pattern.", "AI tools"],
  LangGraph: ["Build controllable AI agent workflows", "+1.7k", "Graph-based agent state is a strong next step for learning tool use and control flow.", "AI tools"],
  OpenHands: ["Open-source software engineering agent", "+1.6k", "Links code editing, terminal execution, and task planning into one coding-agent workflow.", "AI tools"],
  "Codex Starter Kits": ["Beginner project templates for Codex", "+1.5k", "Clear structure and scoped tasks make it easy to swap the topic and ship quickly.", "Dev tools"],
  "SuperClaude Framework": ["Roles and command workflows for Claude Code", "+1.4k", "A useful reference for turning AI coding into roles, commands, and repeatable workflows.", "Dev tools"],
  "shadcn-ui": ["Copy-and-own component system", "+1.3k", "Transparent component code and controllable styles make it a strong UI foundation.", "Dev tools"],
  Vite: ["Fast frontend build tool", "+1.2k", "Quick startup and little configuration make it ideal for small beginner web projects.", "Dev tools"],
  Turborepo: ["Monorepo tooling for web apps", "+1.1k", "A good reference for organizing multiple apps and packages as projects grow.", "Dev tools"],
  Biome: ["Fast formatter and linter", "+1.0k", "Simple setup and high speed make it useful for adding quality checks to any starter project.", "Dev tools"],
  "Drizzle ORM": ["Type-safe TypeScript ORM", "+980", "Readable schemas and queries help beginners move from demos to real data apps.", "Dev tools"],
  "Playwright MCP": ["Browser verification for AI agents", "+940", "Connects automated testing with AI workflows, useful for visual QA and regression checks.", "Dev tools"],
  MarkItDown: ["Convert Office, PDF, and web files to Markdown", "+900", "Real file parsing needs make it a good base for knowledge-base import tools.", "Dev tools"],
  "TanStack Start": ["Type-friendly full-stack React framework", "+860", "Routes, data, and server features in one place help learners study modern app structure.", "Dev tools"],
  "Open Lovable": ["Open-source AI website generator", "+820", "A clear product goal with strong visual output; beginners can build a single-page version first.", "Good to remix"],
  "Sim Studio": ["Visual AI agent flow designer", "+780", "Canvas, nodes, and run logs create a polished product shape with a small MVP path.", "Good to remix"],
  n8n: ["Open-source automation workflow platform", "+740", "High real-world value; a beginner can remix a three-node automation flow first.", "Good to remix"],
  Excalidraw: ["Hand-drawn collaborative whiteboard", "+710", "Canvas interactions are direct, and a tiny sketch board is a realistic first remix.", "Good to remix"],
  tldraw: ["Extensible web whiteboard SDK", "+680", "Rich interactions, but a simple canvas with object selection is a doable MVP.", "Good to remix"],
  Supabase: ["Open-source Firebase alternative", "+640", "Database, auth, and storage patterns can become many small practical starter projects.", "Good to remix"],
  "Twenty CRM": ["Open-source modern CRM", "+610", "Real business objects make it great for remixing contacts, opportunities, and kanban views.", "Good to remix"]
};

function 文案(键) {
  return 语言文案[状态.语言][键] || 语言文案.zh[键] || 键;
}

function 写入文案(元素节点, 内容) {
  if (!元素节点) return;
  const 文字节点 = Array.from(元素节点.childNodes).find((节点) => 节点.nodeType === Node.TEXT_NODE && 节点.textContent.trim());
  if (元素节点.children.length && 文字节点) {
    文字节点.textContent = ` ${内容}`;
    return;
  }
  元素节点.textContent = 内容;
}

function 应用静态文案() {
  document.title = 文案("title");
  document.documentElement.lang = 状态.语言 === "en" ? "en" : "zh-CN";
  静态文案绑定.forEach(([选择器, 键]) => {
    document.querySelectorAll(选择器).forEach((节点) => 写入文案(节点, 文案(键)));
  });
  if (元素.语言切换) {
    元素.语言切换.dataset.current = 状态.语言;
    元素.语言切换.setAttribute("aria-label", 文案("languageAria"));
    元素.语言切换.setAttribute("aria-pressed", String(状态.语言 === "en"));
  }
  if (元素.周报提示词预览) {
    元素.周报提示词预览.textContent = 文案("weeklyPromptPreview");
  }
}

function 分类显示(分类) {
  return 状态.语言 === "en" ? 分类英文[分类] || 分类 : 分类;
}

function 阶段显示(阶段) {
  return 状态.语言 === "en" ? 阶段英文[阶段] || 阶段 : 阶段;
}

function 周期显示(周期) {
  return 状态.语言 === "en" ? 周期.replace("天", " days") : 周期;
}

function 标签显示(标签) {
  return 状态.语言 === "en" ? 标签英文[标签] || 标签 : 标签;
}

function 生成英文提示词(项目, 英文名称, 英文描述) {
  return `You are a senior full-stack engineer. Help me build a beginner-friendly "${英文名称}".
Project direction: ${英文描述}
Requirements:
1. Build a small MVP first and make the core flow work end to end.
2. Show a result preview with clear loading, empty, success, and error states.
3. Keep the file structure, README, and setup steps easy for a beginner to modify.
4. Give me a 3-day task breakdown with concrete milestones.
Reference GitHub project: ${项目.GitHub}`;
}

function 本地化项目(项目) {
  if (状态.语言 === "zh") return 项目;
  const 英文 = 项目英文[项目.名称] || [项目.名称, 项目.描述];
  const 英文名称 = 英文[0];
  const 英文描述 = 英文[1];
  return {
    ...项目,
    名称: 英文名称,
    分类: 分类显示(项目.分类),
    周期: 周期显示(项目.周期),
    阶段: 阶段显示(项目.阶段),
    标签: 项目.标签.map(标签显示),
    描述: 英文描述,
    理由: 英文理由[项目.分类] || 英文理由.最好用,
    预览: "Prototype Preview",
    提示词: 生成英文提示词(项目, 英文名称, 英文描述)
  };
}

function 本地化明星(项目) {
  if (状态.语言 === "zh") return 项目;
  const 英文 = 明星英文[项目[1]] || [项目[2], 项目[3], 项目[5], 项目[6]];
  return [项目[0], 项目[1], 英文[0], 英文[1], 项目[4], 英文[2], 英文[3]];
}

function 获取周报提示词() {
  if (状态.语言 === "en") {
    return "Based on this week's fastest-growing GitHub AI and developer-tool projects, pick 3 directions that beginners can remix. For each one, explain why it is worth building, the right skill stage, and a copy-ready starter prompt for Codex. Highlights: AI agent infrastructure (Agent-Reach, cognee), design-as-code context (design.md), voice tools (voicebox), and AI website cloning.";
  }
  return "请基于本周 GitHub 增长最快的 AI/开发工具项目，挑选 3 个适合新手复刻的方向，并分别给出为什么值得做、适合阶段和可直接丢给 Codex 的开工提示词。本周亮点：AI 智能体平台化（Agent-Reach、cognee）、设计即代码（design.md）、语音工具（voicebox）、AI 网站克隆。";
}

function 获取自动更新提示词() {
  if (状态.语言 === "en") {
    return `You are an autonomous coding agent maintaining the "Vibe Coding Radar" website.

Goal: update the project every week so beginners can quickly discover buildable AI projects and trending GitHub inspiration.

Work in the existing project files:
- 首页.html
- 样式.css
- 交互.js
- 自动更新提示词.md
- When automation behavior changes, also update: 自动更新.ps1, 安装自动任务.ps1, 首次设置.ps1

Weekly update tasks:
1. Read the existing code first and preserve the current dark tech-console visual style, bilingual toggle, copy buttons, filters, and tab interactions.
2. Research this week's fast-growing GitHub projects from reliable public sources such as GitHub Trending and repository pages. Prefer AI tools, developer tools, automation tools, design/code tools, and beginner-remixable projects.
3. Update the GitHub star projects section. Keep at least 10 items in each filter: "This week", "Good to remix", "AI tools", and "Dev tools". Each row must include rank, project name, short value proposition, weekly growth label, language, why it matters, and category.
4. Refresh the project radar only when there are better beginner projects. Keep each radar direction at least 10 projects: Most Fun, Most Useful, Most Buildable.
5. For every radar project, keep three clearly different detail surfaces: why build it, best stage, and starter prompt. Include the source GitHub URL inside the starter prompt.
6. Keep Chinese and English content in sync. The language switch must affect navigation, project details, prompts, GitHub star rows, toasts, and copyable automation prompts.
7. Do not remove existing user-facing functionality. Keep copy buttons, category filters, detail tabs, and responsive layout working.
8. Run checks before finishing: JavaScript syntax, category counts, star-filter counts, and a quick UI smoke test when browser access is available.
9. Return a concise update report: data sources used, projects added/removed, count verification, files changed, and any follow-up risks.

Be conservative: make focused edits, avoid unrelated rewrites, and preserve Chinese filenames.`;
  }

  return `你是一个自主执行的 coding agent，负责维护「Vibe Coding 雷达」网站。

目标：每周自动更新项目，让新手快速发现值得做、做得出来、做完有反馈的 AI 项目和 GitHub 趋势灵感。

请在现有项目文件中工作：
- 首页.html
- 样式.css
- 交互.js
- 自动更新提示词.md
- 如果自动化流程发生变化，也要同步更新：自动更新.ps1、安装自动任务.ps1、首次设置.ps1

每周更新任务：
1. 先阅读现有代码，保留当前暗场科技控制台视觉风格、中英文切换、复制按钮、筛选和详情页签交互。
2. 调研本周 GitHub 增长较快的开源项目，优先使用 GitHub Trending、仓库页面、release/star 信息等公开可信来源。重点关注 AI 工具、开发工具、自动化工具、设计即代码工具，以及适合新手复刻的项目。
3. 更新「本周 GitHub 明星项目」区域。每个过滤分类至少 10 条：「本周增长」「适合复刻」「AI 工具」「开发工具」。每行必须包含排名、项目名、短价值描述、本周增长标签、主要语言、为什么值得关注和所属分类。
4. 只有发现更适合新手的项目时，才更新项目雷达。项目雷达三个方向都必须至少 10 个项目：「最好玩」「最好用」「最好搓」。
5. 每个项目详情必须保留三个明显不同的内容面板：为什么值得做、适合阶段、开工提示词。开工提示词里必须附原项目 GitHub 地址。
6. 同步维护中文和英文内容。语言切换必须覆盖导航、项目详情、提示词、GitHub 明星项目、复制反馈和自动更新提示词。
7. 不要移除现有功能。复制按钮、分类筛选、详情页签、响应式布局都要继续可用。
8. 完成前运行检查：JavaScript 语法、项目分类数量、明星项目过滤数量；如果浏览器环境允许，再做一次 UI smoke test。
9. 最后输出简短更新报告：使用的数据来源、新增/移除项目、数量校验、修改文件和剩余风险。

请保守修改，避免无关重构，并保留中文文件命名。`;
}

function 应用语言() {
  应用静态文案();
  渲染项目列表();
  渲染明星表();
}

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
        <h3>${本地化项目(项目).名称}</h3>
        <span class="标签行">${本地化项目(项目).标签.map((标签) => `<span class="项目标签">${标签}</span>`).join("")}</span>
      </span>
      <span class="项目周期">${本地化项目(项目).周期}</span>
    </button>
  `).join("");

  if (!列表.length) {
    元素.项目列表.innerHTML = `<div class="项目项"><span></span><span><h3>${文案("emptyTitle")}</h3><span class="项目标签">${文案("emptyText")}</span></span></div>`;
  }

  渲染项目详情();
}

function 渲染阶段面板(原始项目, 项目) {
  const 准备键 = 原始项目.阶段 === "入门友好" ? "stageEntryPrep" : 原始项目.阶段 === "熟悉基础" ? "stageBasicPrep" : "stageAdvancedPrep";
  const 完成键 = 原始项目.分类 === "最好玩" ? "stageFunGoal" : 原始项目.分类 === "最好用" ? "stageUsefulGoal" : "stageBuildGoal";
  元素.阶段面板.innerHTML = `
    <div class="阶段摘要">
      <span class="阶段徽章">${项目.阶段}</span>
      <h4>${文案("stagePanelTitle")}</h4>
      <p>${文案(准备键)}</p>
    </div>
    <div class="阶段指标网格">
      <article class="阶段指标">
        <span>${文案("stagePanelTimeline")}</span>
        <strong>${项目.周期}</strong>
      </article>
      <article class="阶段指标">
        <span>${文案("stagePanelLevel")}</span>
        <strong>${项目.阶段}</strong>
      </article>
      <article class="阶段指标">
        <span>${文案("stagePanelPrerequisite")}</span>
        <strong>${项目.标签.slice(0, 2).join(" / ")}</strong>
      </article>
      <article class="阶段指标">
        <span>${文案("stagePanelGoal")}</span>
        <strong>${文案(完成键)}</strong>
      </article>
    </div>
  `;
}

function 渲染项目详情() {
  const 原始项目 = 当前项目();
  const 项目 = 本地化项目(原始项目);
  元素.项目详情.dataset.activeDetail = 状态.详情页;
  元素.详情图标.textContent = 原始项目.图标;
  元素.详情图标.style.background = 原始项目.颜色;
  元素.详情标题.textContent = 项目.名称;
  元素.详情标签.innerHTML = 项目.标签.map((标签) => `<span>${标签}</span>`).join("");
  元素.详情难度.textContent = 项目.阶段;
  元素.详情难度.style.color = 原始项目.颜色;
  元素.理由列表.innerHTML = 项目.理由.map(([标题, 文案内容]) => `
    <div class="理由项">
      <svg><use href="#图标-雷达" /></svg>
      <div>
        <h4>${标题}</h4>
        <p>${文案内容}</p>
      </div>
    </div>
  `).join("");
  渲染阶段面板(原始项目, 项目);
  元素.项目提示词.textContent = 项目.提示词;
  元素.GitHub链接.textContent = 原始项目.GitHub.replace("https://github.com/", "");
  元素.GitHub链接.href = 原始项目.GitHub;
  元素.雷达精选标题.textContent = 项目.名称;
  元素.雷达精选描述.textContent = 项目.描述;
}

function 渲染明星表() {
  const 数据 = 明星数据.filter((项目) => 状态.明星过滤 === "本周增长" || 项目[6] === 状态.明星过滤);
  元素.明星表.innerHTML = `
    <div class="明星行 表头" role="row">
      <span>${文案("tableRank")}</span><span>${文案("tableProject")}</span><span>${文案("tableGrowth")}</span><span>${文案("tableLang")}</span><span>${文案("tableWhy")}</span><span>${文案("tableAction")}</span>
    </div>
    ${数据.map((原始项目) => {
      const 项目 = 本地化明星(原始项目);
      return `
      <div class="明星行" role="row">
        <span class="排名">${项目[0]}</span>
        <span class="项目名块">
          <span class="明星图标">${项目[1].slice(0, 1)}</span>
          <span><strong>${项目[1]}</strong><span>${项目[2]}</span></span>
        </span>
        <span><strong class="增长">${项目[3]}</strong><span class="迷你折线"></span></span>
        <span class="语言点 ${项目[4]}">${项目[4]}</span>
        <span class="明星说明">${项目[5]}</span>
        <span><button class="小按钮" type="button" data-star-copy="${原始项目[1]}"><svg><use href="#图标-复制" /></svg>${文案("cloneThis")}</button></span>
      </div>
    `;
    }).join("")}
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

function 显示提示(提示文案 = 文案("toastCopied")) {
  元素.提示浮层.querySelector("span").textContent = 提示文案;
  元素.提示浮层.classList.add("显示");
  window.clearTimeout(显示提示.计时器);
  显示提示.计时器 = window.setTimeout(() => {
    元素.提示浮层.classList.remove("显示");
  }, 1700);
}

async function 复制文本(文本, 提示文案) {
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
  显示提示(提示文案);
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
    元素.项目详情.dataset.activeDetail = 状态.详情页;
    元素.项目详情.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

document.querySelector("#复制项目提示词").addEventListener("click", () => {
  复制文本(本地化项目(当前项目()).提示词, 文案("toastProjectCopied"));
});

document.querySelector("#刷新雷达").addEventListener("click", () => {
  const 同类项目 = 项目数据.filter((项目) => 项目.分类 === 状态.分类);
  const 当前索引 = 同类项目.findIndex((项目) => 项目.名称 === 状态.项目名);
  const 下一个 = 同类项目[(当前索引 + 1) % 同类项目.length] || 项目数据[0];
  状态.项目名 = 下一个.名称;
  渲染项目列表();
  显示提示(文案("toastRadar"));
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
  const 提示词 = 状态.语言 === "en"
    ? `Use the trending GitHub project ${名称} as a reference. Break down the most beginner-friendly remix version and create a Vibe Coding project plan that can be finished within 3 days.`
    : `请参考 GitHub 热门项目 ${名称}，帮我拆解它最适合新手复刻的一版，并生成一个 3 天内能完成的 Vibe Coding 项目计划。`;
  复制文本(提示词, 文案("toastClone"));
});

元素.语言切换?.addEventListener("click", () => {
  状态.语言 = 状态.语言 === "zh" ? "en" : "zh";
  localStorage.setItem("vibe-radar-language", 状态.语言);
  应用语言();
  显示提示(状态.语言 === "en" ? "English enabled" : "已切换中文");
});

document.querySelector("#复制自动更新提示词")?.addEventListener("click", () => {
  复制文本(获取自动更新提示词(), 文案("toastAutoPrompt"));
});

document.querySelector("#复制周报提示词").addEventListener("click", () => 复制文本(获取周报提示词(), 文案("toastWeekly")));
document.querySelector("#复制行动提示词").addEventListener("click", () => 复制文本(获取周报提示词(), 文案("toastWeekly")));

应用语言();
