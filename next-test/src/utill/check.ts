// 정규 표현식용 함수 놓고 쓸 수 있음
// 함수도 쓸 수 있음

export const addFunction = (
  number: number,
  type: string,
  typeNumber: number
) => {
  return type === "-" ? (number = -typeNumber) : (number = +typeNumber);
};
