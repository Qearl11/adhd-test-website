#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# 读取原文件
with open(
    "/Users/qearl/Desktop/ADHD test/complex-version.html", "r", encoding="utf-8"
) as f:
    content = f.read()

# 读取新题目
with open(
    "/Users/qearl/Desktop/ADHD test/new_42_questions.txt", "r", encoding="utf-8"
) as f:
    new_questions = f.read()

# 找到题目数组的开始和结束位置
start_marker = "        complex: [\n"
end_marker = "\n        ],"

start_pos = content.find(start_marker)
if start_pos == -1:
    print("找不到题目数组开始位置")
    exit(1)

start_pos += len(start_marker)

end_pos = content.find(end_marker, start_pos)
if end_pos == -1:
    print("找不到题目数组结束位置")
    exit(1)

# 替换题目内容
new_content = content[:start_pos] + new_questions + content[end_pos:]

# 写入新文件
with open(
    "/Users/qearl/Desktop/ADHD test/complex-version.html", "w", encoding="utf-8"
) as f:
    f.write(new_content)

print("题目替换完成！")
print("新题目数量：42题")
