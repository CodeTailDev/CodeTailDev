function parseNestedArrayFromString(input) {
    // 去掉 "ppp(" 和 ")"，只保留列表内容
    const startIndex = input.indexOf('[');
    const endIndex = input.lastIndexOf(']');
    // 解析嵌套数组并返回结果
    return input.substring(startIndex, endIndex + 1);
}
export default parseNestedArrayFromString