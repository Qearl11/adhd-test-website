#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 读取原文件
with open(
    "/Users/qearl/Desktop/ADHD test/complex-version.html", "r", encoding="utf-8"
) as f:
    content = f.read()

# 读取新的42个题目
with open(
    "/Users/qearl/Desktop/ADHD test/final_42_questions.txt", "r", encoding="utf-8"
) as f:
    new_questions = f.read().strip()

# 找到题目数组的精确开始和结束位置
start_marker = "        complex: [\n"
end_marker = "\n        ],"

start_pos = content.find(start_marker)
if start_pos == -1:
    print("找不到开始标记")
    exit(1)

# 移动到数组内容开始位置
start_pos += len(start_marker)

end_pos = content.find(end_marker, start_pos)
if end_pos == -1:
    print("找不到结束标记")
    exit(1)

# 替换题目内容
new_content = content[:start_pos] + new_questions + content[end_pos:]

# 写入文件
with open(
    "/Users/qearl/Desktop/ADHD test/complex-version.html", "w", encoding="utf-8"
) as f:
    f.write(new_content)

print("题目数组替换完成！")
print("替换了42个题目，按照用户提供的顺序")
