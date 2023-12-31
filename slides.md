---
theme: apple-basic
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: \.\.
mdc: true
layout: intro
---


# 电子信息专业介绍
电子信息2022级3班团支部

<div class="absolute bottom-10">
  <span class="font-400">
    吴双 2023.12.01
  </span>
</div>

---
layout: quote
title: \.
---

# Part0. 目录

<Toc maxDepth="2"></Toc>

---
layout: quote
---

# Part1. 本专业概述

- **简单概括**：数学；电路；设计；程序。
- **复杂点说**：在电学情景下的大学数学应用：我真的好喜欢微积分、线性代数、逻辑代数、数学物理方法和信号与系统（但是啥也学不懂啊哈哈哈哈）这是什么？方案设计原理验证做一下。这是什么？打样验证不通过重做一下。这是什么？玄学问题没解决却要做新功能。太好了，摆一下……

<br>

> 啊，这页PPT好像**放错了**。点下一页试试。

---
layout: quote
---

**Part1. 本专业概述**

- **简单概括**：~~数学~~；电路；设计；程序。 
- **复杂点说**：就是集电子技术与信息处理技术于一体，研究利用电子技术来处理和传输信息的学科。

<br>

> 本讲旨在**概览全貌**。撇去多余的细枝末节，尽量让非本专业的同学了解本专业。


---
layout: two-cols-header
---

## 培养方案简介

::left::

### 为什么是电子+信息？

信息的载体不只是电，为什么要选择电子信息？

~~因为我们的主要信息科技树只点好了电子一条。~~

主要是因为下面几点：

- **高效性**：电子信息以电磁波传输，速度快，信息传递几乎瞬时；

- **高可控性**：物理电路可以操作电子信息，易实现多需求下的信号控制和处理；

- **高集成度**：现代微电子技术可在极小的芯片上集成大量的电子元件，电子设备可以小型化、便携化；

- **较低成本**：随制造技术的发展，电子元件的生产成本大幅降低，其制品在许多领域都有较高的性价比。

::right::

### 工程体现在哪里呢？

~~学了那么多数学，但不只是数学的理论而是应用。~~ 把各种理论知识应用于实际问题的解决上：可以近到手机金属边框天线，也可远到航天探测器上的所有电子传感、通信器件。

工程师是解决大家的实际问题的，可能去做通信设备当宽带工人做好通信基础设施，做电子器械装置与交叉领域利用信号处理提供分析解决问题的工具，设计制造真正的中国高端芯片，~~造赛博义体或得赛博飞升~~等。

### 没戴眼镜听不清？

我们偏弱电——能比较有条理地理解日常使用的高精密电子设备的原理，也很可能会掌握设计、制造或维修技能。（有比较高的概率会修手机电脑、会安宽带打螺丝）

---
layout: quote
---

# Part2. 从医学方向交叉了解电子信息工程专业

### 从医学视角来看，我们专业能干啥

- **交叉学科**：医学信息工程、医疗器械制造等专业。

- **交叉视角**：使用电子设备处理医学信息，使用电子设备辅助治疗。

---
layout:quote
---

## 1. 医学诊断视角下的信号分析

医学信号如心电信号、脑电信号、诱发电位信号、肌电信号、胃电信号、心音信号等能够通过电子方式采集，并且通过物理电路处理后反馈给医生用于辅助诊断手段：

- 医学信号
- 设计采集装置
- 分析处理，设计处理装置
- 反馈至医生

> 电子信号分析用到前述的部分数学专业知识。电子专业应该熟练掌握，并做好电路和程序实现。

---


## 2. 医学视角下产生的医疗器械：

### 偏听力言语康复侧的应用

辅助听力：

- **助听设备**：一般助听器信号传输过程

```mermaid
  graph LR
  外界声音-->助听器-->听觉相关的器官或部位
```

```mermaid
  graph LR
    外界声音-->传声器-->|拾音|放大器-. 增益、削峰等 .->换能器-->听觉相关的器官或部位
    style 传声器 stroke:#F0F0F0;
    style 放大器 stroke:#F0F0F0;
    style 换能器 stroke:#F0F0F0;
```

检测听力：

- **听力评估设备**：以ABR新生儿听力筛查为例

  通过耳机给声音刺激信号，声音在耳蜗转化为神经电信号，神经电信号在往大脑高级听觉中枢传播的路径中经过的若干关键节点，这些时候可以通过贴在皮肤的电极采集到相关的电信号，表现为一个突起的波形。

```mermaid
  graph LR
    听觉神经小信号==>皮肤表面电极-->|小电位|放大器,ADC,etc.-->|增益处理模数转换等操作|后续分析处理
    style 皮肤表面电极 stroke:#F0F0F0;
    style 放大器,ADC,etc. stroke:#F0F0F0;
```

---

### 偏眼视光侧的应用

检测视力：

- **检查视力的验光仪器**：以电脑验光仪为例，忽略光学结构。其中电子相关的结构如下：

```mermaid
  graph LR
    光源-->光学结构==>CCD-->控制装置-->|调整光学结构，连续测量|结果输出
    style CCD stroke:#F0F0F0;
    style 控制装置 stroke:#F0F0F0;
```


辅助视力：（暂时没想到啥好的例子？）

> 似乎有人工视网膜植入技术、电子助视器等，相对较多此处不一一列举。

- 此处略。

---
layout: center
---

# 感谢观看