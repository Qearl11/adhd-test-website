// ADHD测试系统
class ADHDTest {
  constructor() {
    this.currentTest = null;
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.initializeEventListeners();
  }

  // 儿童版测试题目 - 基于ADHD-RS量表
  childrenQuestions = [
    // 注意力不集中症状 (1-9)
    {
      text: "孩子在学习、工作或其他活动中，经常无法注意到细节或因粗心而犯错",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子在做功课或游戏时，经常难以保持注意力",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "别人对孩子说话时，孩子经常看起来没在听",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常不能按照指令完成功课、家务或工作职责",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常在组织任务和活动方面有困难",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常回避、不喜欢或不愿意参加需要持续精神努力的任务",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常遗失任务或活动所需的物品",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常容易被外界刺激分散注意力",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子在日常活动中经常健忘",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    // 多动冲动症状 (10-18)
    {
      text: "孩子经常手脚动个不停或在座位上扭来扭去",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "在需要保持坐着的场合，孩子经常离开座位",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常在不适当的场合跑来跑去或爬上爬下",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常无法安静地参加游戏或休闲活动",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常处于活跃状态，好像'有马达在推动'",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常话太多",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "问题还没说完，孩子经常脱口说出答案",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常无法等待轮到自己",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
    {
      text: "孩子经常打断或干扰别人的活动",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "偶尔", value: 1 },
        { text: "经常", value: 2 },
        { text: "总是", value: 3 },
      ],
    },
  ];

  // 成人版测试题目 - 基于成人ADHD自评量表(ASRS)
  adultQuestions = [
    // 注意力不集中症状
    {
      text: "我很难专注于工作或任务的细节，经常出现粗心的错误",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我很难在工作或娱乐活动中保持注意力",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "当有人直接对我说话时，我似乎没有在听",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我经常无法完成工作、家务或其他职责",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我在组织任务和活动方面有困难",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我避免、不喜欢或不愿意进行需要持续精神努力的任务",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我经常遗失工作或活动所需的物品",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我容易被外界刺激分散注意力",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我在日常活动中经常健忘",
      type: "inattention",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    // 多动冲动症状
    {
      text: "我在座位上坐立不安，摆弄手脚",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "在需要保持坐着的情况下，我感到不安或想要起来走动",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我感到过度活跃和被驱使去做事情",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我很难安静地参加休闲活动或娱乐活动",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我说话过多",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "问题还没问完，我就脱口说出答案",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我很难等待轮到自己",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我经常打断或干扰别人",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
    {
      text: "我很难放松和冷静下来",
      type: "hyperactivity",
      options: [
        { text: "从不", value: 0 },
        { text: "很少", value: 1 },
        { text: "有时", value: 2 },
        { text: "经常", value: 3 },
        { text: "总是", value: 4 },
      ],
    },
  ];

  initializeEventListeners() {
    // 首页测试选择
    document.querySelectorAll(".test-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        const testType = card.dataset.test;
        this.startTest(testType);
      });
    });

    // 导航按钮
    document.getElementById("backBtn").addEventListener("click", () => {
      this.showPage("homepage");
    });

    document.getElementById("resultBackBtn").addEventListener("click", () => {
      this.showPage("homepage");
    });

    document.getElementById("prevBtn").addEventListener("click", () => {
      this.previousQuestion();
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
      this.nextQuestion();
    });

    document.getElementById("submitBtn").addEventListener("click", () => {
      this.showResults();
    });

    document.getElementById("retakeBtn").addEventListener("click", () => {
      this.showPage("homepage");
    });

    document.getElementById("printBtn").addEventListener("click", () => {
      window.print();
    });
  }

  startTest(testType) {
    this.currentTest = testType;
    this.currentQuestionIndex = 0;
    this.answers = [];

    // 重置答案数组
    const questions =
      testType === "children" ? this.childrenQuestions : this.adultQuestions;
    this.answers = new Array(questions.length).fill(null);

    this.showPage("testpage");
    this.renderQuestion();
  }

  showPage(pageId) {
    document.querySelectorAll(".page").forEach((page) => {
      page.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
  }

  renderQuestion() {
    const questions =
      this.currentTest === "children"
        ? this.childrenQuestions
        : this.adultQuestions;
    const currentQuestion = questions[this.currentQuestionIndex];

    // 更新进度
    const progress = ((this.currentQuestionIndex + 1) / questions.length) * 100;
    document.querySelector(".progress-fill").style.width = progress + "%";
    document.querySelector(".progress-text").textContent = `${
      this.currentQuestionIndex + 1
    } / ${questions.length}`;
    document.getElementById("currentQuestion").textContent =
      this.currentQuestionIndex + 1;

    // 更新问题
    document.getElementById("questionText").textContent = currentQuestion.text;

    // 渲染选项
    const optionsContainer = document.getElementById("answerOptions");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const optionElement = document.createElement("div");
      optionElement.className = "answer-option";

      const radioId = `option-${index}`;
      const isSelected =
        this.answers[this.currentQuestionIndex] === option.value;

      optionElement.innerHTML = `
                <input type="radio" id="${radioId}" name="answer" value="${
        option.value
      }" ${isSelected ? "checked" : ""}>
                <label for="${radioId}">${option.text}</label>
            `;

      if (isSelected) {
        optionElement.classList.add("selected");
      }

      optionElement.addEventListener("click", () => {
        this.selectAnswer(option.value, optionElement);
      });

      optionsContainer.appendChild(optionElement);
    });

    // 更新导航按钮
    document.getElementById("prevBtn").disabled =
      this.currentQuestionIndex === 0;

    const isLastQuestion = this.currentQuestionIndex === questions.length - 1;
    document.getElementById("nextBtn").style.display = isLastQuestion
      ? "none"
      : "block";
    document.getElementById("submitBtn").style.display = isLastQuestion
      ? "block"
      : "none";

    // 检查是否可以前进
    this.updateNavigationState();
  }

  selectAnswer(value, selectedElement) {
    // 移除其他选项的选中状态
    document.querySelectorAll(".answer-option").forEach((option) => {
      option.classList.remove("selected");
      option.querySelector('input[type="radio"]').checked = false;
    });

    // 设置当前选项为选中状态
    selectedElement.classList.add("selected");
    selectedElement.querySelector('input[type="radio"]').checked = true;

    // 保存答案
    this.answers[this.currentQuestionIndex] = parseInt(value);

    // 更新导航状态
    this.updateNavigationState();
  }

  updateNavigationState() {
    const hasAnswer =
      this.answers[this.currentQuestionIndex] !== null &&
      this.answers[this.currentQuestionIndex] !== undefined;
    const questions =
      this.currentTest === "children"
        ? this.childrenQuestions
        : this.adultQuestions;
    const isLastQuestion = this.currentQuestionIndex === questions.length - 1;

    if (isLastQuestion) {
      const allAnswered = this.answers.every(
        (answer) => answer !== null && answer !== undefined
      );
      document.getElementById("submitBtn").disabled = !allAnswered;
    } else {
      document.getElementById("nextBtn").disabled = !hasAnswer;
    }
  }

  nextQuestion() {
    const questions =
      this.currentTest === "children"
        ? this.childrenQuestions
        : this.adultQuestions;
    if (this.currentQuestionIndex < questions.length - 1) {
      this.currentQuestionIndex++;
      this.renderQuestion();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.renderQuestion();
    }
  }

  calculateScores() {
    const questions =
      this.currentTest === "children"
        ? this.childrenQuestions
        : this.adultQuestions;

    let inattentionScore = 0;
    let hyperactivityScore = 0;

    questions.forEach((question, index) => {
      const score = this.answers[index] || 0;
      if (question.type === "inattention") {
        inattentionScore += score;
      } else {
        hyperactivityScore += score;
      }
    });

    const totalScore = inattentionScore + hyperactivityScore;

    return {
      total: totalScore,
      inattention: inattentionScore,
      hyperactivity: hyperactivityScore,
    };
  }

  getResultAnalysis(scores) {
    if (this.currentTest === "children") {
      return this.getChildrenAnalysis(scores);
    } else {
      return this.getAdultAnalysis(scores);
    }
  }

  getChildrenAnalysis(scores) {
    const { total, inattention, hyperactivity } = scores;

    let level, description, recommendations;

    if (total <= 18) {
      level = "低风险";
      description =
        "当前症状表现较轻微，ADHD的可能性较低。孩子的注意力和行为控制能力基本正常。";
      recommendations = `
                <ul>
                    <li>继续保持良好的学习和生活习惯</li>
                    <li>适当增加体育锻炼和户外活动</li>
                    <li>建立规律的作息时间</li>
                    <li>鼓励孩子参与需要专注的活动，如阅读、拼图等</li>
                </ul>
            `;
    } else if (total <= 36) {
      level = "中等风险";
      description =
        "存在一定程度的注意力或行为控制问题，建议密切关注孩子的表现，可考虑咨询专业医生。";
      recommendations = `
                <ul>
                    <li><strong>建议咨询儿童心理医生或发育行为科医生</strong></li>
                    <li>建立更加结构化的日常routine</li>
                    <li>使用明确的指令和视觉提示</li>
                    <li>提供安静、无干扰的学习环境</li>
                    <li>适当分解复杂任务，给予及时的正面反馈</li>
                    <li>与学校老师保持密切沟通</li>
                </ul>
            `;
    } else {
      level = "高风险";
      description =
        "症状表现明显，强烈建议尽快咨询专业医生进行进一步评估和诊断。";
      recommendations = `
                <ul>
                    <li><strong>请尽快咨询儿童精神科医生或发育行为科医生</strong></li>
                    <li>准备详细的症状记录和学校反馈</li>
                    <li>考虑多学科评估（医生、心理师、教师联合评估）</li>
                    <li>了解学校的特殊教育资源和支持服务</li>
                    <li>学习ADHD相关知识，为可能的治疗做好准备</li>
                    <li>保持耐心和理解，避免过度批评孩子</li>
                </ul>
            `;
    }

    return { level, description, recommendations };
  }

  getAdultAnalysis(scores) {
    const { total, inattention, hyperactivity } = scores;

    let level, description, recommendations;

    if (total <= 24) {
      level = "低风险";
      description =
        "当前症状表现较轻微，成人ADHD的可能性较低。您的注意力和冲动控制能力基本正常。";
      recommendations = `
                <ul>
                    <li>保持良好的工作和生活习惯</li>
                    <li>使用时间管理工具提高效率</li>
                    <li>定期进行体育锻炼缓解压力</li>
                    <li>保证充足的睡眠和合理的营养</li>
                </ul>
            `;
    } else if (total <= 48) {
      level = "中等风险";
      description =
        "存在一定程度的注意力缺陷或冲动控制问题，建议关注这些症状对日常生活的影响，可考虑咨询专业医生。";
      recommendations = `
                <ul>
                    <li><strong>建议咨询精神科医生或心理医生</strong></li>
                    <li>使用任务管理app和提醒工具</li>
                    <li>创建无干扰的工作环境</li>
                    <li>学习正念冥想和放松技巧</li>
                    <li>建立规律的日常作息</li>
                    <li>与家人朋友分享您的困扰，获得支持</li>
                </ul>
            `;
    } else {
      level = "高风险";
      description =
        "症状表现明显，强烈建议咨询专业医生进行全面评估。成人ADHD如果得到适当治疗，可以显著改善生活质量。";
      recommendations = `
                <ul>
                    <li><strong>请尽快咨询精神科医生进行专业评估</strong></li>
                    <li>准备详细的症状历史和功能影响记录</li>
                    <li>了解成人ADHD的治疗选项（药物和非药物治疗）</li>
                    <li>考虑认知行为治疗(CBT)等心理治疗</li>
                    <li>寻找ADHD支持小组或在线社区</li>
                    <li>学习ADHD管理策略和生活技能</li>
                    <li>向雇主了解工作场所的合理调整政策</li>
                </ul>
            `;
    }

    return { level, description, recommendations };
  }

  showResults() {
    const scores = this.calculateScores();
    const analysis = this.getResultAnalysis(scores);

    // 计算最大可能分数
    const questions =
      this.currentTest === "children"
        ? this.childrenQuestions
        : this.adultQuestions;
    const maxScore = this.currentTest === "children" ? 54 : 72; // 儿童版：18题×3分，成人版：18题×4分
    const maxInattentionScore = this.currentTest === "children" ? 27 : 36; // 9题×3或4分
    const maxHyperactivityScore = this.currentTest === "children" ? 27 : 36; // 9题×3或4分

    // 更新基本UI
    document.getElementById("totalScore").textContent = scores.total;
    document.getElementById("maxScoreDisplay").textContent = maxScore;
    document.getElementById("scorePercentage").textContent =
      Math.round((scores.total / maxScore) * 100) + "%";
    document.getElementById("resultLevel").textContent = analysis.level;
    document.getElementById("resultDescription").textContent =
      analysis.description;
    document.getElementById("recommendationText").innerHTML =
      analysis.recommendations;

    // 更新分项得分
    document.getElementById(
      "inattentionScore"
    ).textContent = `${scores.inattention} / ${maxInattentionScore}`;
    document.getElementById(
      "hyperactivityScore"
    ).textContent = `${scores.hyperactivity} / ${maxHyperactivityScore}`;

    // 生成详细的分数解读
    this.generateScoreInterpretation(scores, maxScore);

    // 生成分项症状解读
    this.generateSymptomInterpretations(
      scores,
      maxInattentionScore,
      maxHyperactivityScore
    );

    // 生成个性化分析
    this.generatePersonalizedAnalysis(scores);

    // 更新进度条
    const inattentionPercentage =
      (scores.inattention / maxInattentionScore) * 100;
    const hyperactivityPercentage =
      (scores.hyperactivity / maxHyperactivityScore) * 100;

    // 动画效果
    setTimeout(() => {
      document.getElementById("inattentionBar").style.width =
        inattentionPercentage + "%";
      document.getElementById("hyperactivityBar").style.width =
        hyperactivityPercentage + "%";
    }, 500);

    this.showPage("resultpage");
  }

  generateScoreInterpretation(scores, maxScore) {
    const { total } = scores;
    const testType = this.currentTest === "children" ? "儿童" : "成人";
    const percentage = Math.round((total / maxScore) * 100);

    let interpretation = `<p><strong>您的总分为 ${total} 分（满分 ${maxScore} 分），占总分的 ${percentage}%</strong></p>`;

    if (this.currentTest === "children") {
      interpretation += `
        <div class="score-ranges">
          <div class="score-range ${total <= 18 ? "current" : ""}">
            <span class="range">0-18分</span>
            <span class="level low-risk">低风险</span>
            <span class="desc">症状轻微，ADHD可能性较低</span>
          </div>
          <div class="score-range ${
            total > 18 && total <= 36 ? "current" : ""
          }">
            <span class="range">19-36分</span>
            <span class="level medium-risk">中等风险</span>
            <span class="desc">存在明显症状，建议专业评估</span>
          </div>
          <div class="score-range ${total > 36 ? "current" : ""}">
            <span class="range">37-54分</span>
            <span class="level high-risk">高风险</span>
            <span class="desc">症状显著，强烈建议就医</span>
          </div>
        </div>
      `;
    } else {
      interpretation += `
        <div class="score-ranges">
          <div class="score-range ${total <= 24 ? "current" : ""}">
            <span class="range">0-24分</span>
            <span class="level low-risk">低风险</span>
            <span class="desc">症状轻微，ADHD可能性较低</span>
          </div>
          <div class="score-range ${
            total > 24 && total <= 48 ? "current" : ""
          }">
            <span class="range">25-48分</span>
            <span class="level medium-risk">中等风险</span>
            <span class="desc">存在明显症状，建议专业评估</span>
          </div>
          <div class="score-range ${total > 48 ? "current" : ""}">
            <span class="range">49-72分</span>
            <span class="level high-risk">高风险</span>
            <span class="desc">症状显著，强烈建议就医</span>
          </div>
        </div>
      `;
    }

    document.getElementById("scoreInterpretation").innerHTML = interpretation;
  }

  generateSymptomInterpretations(
    scores,
    maxInattentionScore,
    maxHyperactivityScore
  ) {
    const { inattention, hyperactivity } = scores;

    // 注意力不集中症状解读
    const inattentionPercentage = Math.round(
      (inattention / maxInattentionScore) * 100
    );
    let inattentionText = `得分 ${inattentionPercentage}%`;

    if (inattentionPercentage <= 30) {
      inattentionText += "，注意力集中能力良好，很少出现注意力分散的问题。";
    } else if (inattentionPercentage <= 60) {
      inattentionText +=
        "，存在轻到中度的注意力问题，在某些情况下可能难以集中注意力。";
    } else {
      inattentionText +=
        "，注意力问题较为严重，经常出现注意力不集中、容易分心的情况。";
    }

    document.getElementById("inattentionInterpretation").textContent =
      inattentionText;

    // 多动冲动症状解读
    const hyperactivityPercentage = Math.round(
      (hyperactivity / maxHyperactivityScore) * 100
    );
    let hyperactivityText = `得分 ${hyperactivityPercentage}%`;

    if (hyperactivityPercentage <= 30) {
      hyperactivityText += "，行为控制能力良好，很少出现冲动或过度活跃的行为。";
    } else if (hyperactivityPercentage <= 60) {
      hyperactivityText +=
        "，存在轻到中度的冲动控制问题，有时可能表现出坐立不安或冲动行为。";
    } else {
      hyperactivityText +=
        "，冲动控制问题较为严重，经常表现出多动、冲动或难以安静的行为。";
    }

    document.getElementById("hyperactivityInterpretation").textContent =
      hyperactivityText;
  }

  generatePersonalizedAnalysis(scores) {
    const { total, inattention, hyperactivity } = scores;
    const testType = this.currentTest === "children" ? "孩子" : "您";

    let analysis = [];

    // 症状类型分析
    if (inattention > hyperactivity) {
      const diff = inattention - hyperactivity;
      if (diff >= 6) {
        analysis.push(
          `<span class="highlight">注意力不集中</span>是主要表现，${testType}更多地表现为难以集中注意力、容易分心、健忘等问题。`
        );
      } else {
        analysis.push(
          `${testType}的注意力问题和多动冲动问题都有所表现，但<span class="highlight">注意力不集中</span>稍微突出一些。`
        );
      }
    } else if (hyperactivity > inattention) {
      const diff = hyperactivity - inattention;
      if (diff >= 6) {
        analysis.push(
          `<span class="highlight">多动冲动</span>是主要表现，${testType}更多地表现为坐立不安、冲动行为、难以安静等问题。`
        );
      } else {
        analysis.push(
          `${testType}的注意力问题和多动冲动问题都有所表现，但<span class="highlight">多动冲动</span>稍微突出一些。`
        );
      }
    } else {
      analysis.push(
        `${testType}在注意力不集中和多动冲动两方面的表现<span class="highlight">相对均衡</span>，两类症状并存。`
      );
    }

    // 严重程度分析
    if (total >= (this.currentTest === "children" ? 42 : 60)) {
      analysis.push(
        `症状表现<span class="highlight">非常明显</span>，已经达到需要专业医疗干预的程度。`
      );
    } else if (total >= (this.currentTest === "children" ? 30 : 40)) {
      analysis.push(
        `症状表现<span class="highlight">比较明显</span>，建议寻求专业医生的评估和建议。`
      );
    } else if (total >= (this.currentTest === "children" ? 18 : 24)) {
      analysis.push(
        `症状表现<span class="highlight">轻度到中度</span>，需要关注并采取相应的管理措施。`
      );
    } else {
      analysis.push(
        `当前症状表现<span class="highlight">较轻</span>，但仍需保持关注。`
      );
    }

    // 功能影响评估
    if (this.currentTest === "adult") {
      if (total > 36) {
        analysis.push(
          `这些症状很可能已经对您的工作、学习或人际关系造成了<span class="highlight">显著影响</span>。`
        );
      } else if (total > 18) {
        analysis.push(
          `这些症状可能在某些情况下对您的日常生活造成<span class="highlight">一定影响</span>。`
        );
      }
    } else {
      if (total > 36) {
        analysis.push(
          `这些症状很可能已经对孩子的学习、社交或家庭生活造成了<span class="highlight">显著影响</span>。`
        );
      } else if (total > 18) {
        analysis.push(
          `这些症状可能在某些情况下对孩子的日常生活造成<span class="highlight">一定影响</span>。`
        );
      }
    }

    document.getElementById("personalizedAnalysis").innerHTML =
      analysis.join("<br><br>");
  }
}

// 初始化应用
document.addEventListener("DOMContentLoaded", () => {
  new ADHDTest();
});
