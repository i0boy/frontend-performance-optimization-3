/*
 * 영문자, 숫자, 밑줄(\w), 하이픈(-), 콜론(:)을 클래스 명으로 사용하는 경우
 */
module.exports = {
  defaultExtractor: (content) => content.match(/[\w-/:]+/g) || [],
};
