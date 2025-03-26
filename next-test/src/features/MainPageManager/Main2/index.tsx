import { Main2Styled } from "./styled";
interface MainProps {
  id: any;
  name: string;
  age: number;
  gender: "male" | "female";
}

const Main2 = ({ id, name, age, gender }: MainProps) => {
  return (
    <Main2Styled>
      <div></div>
    </Main2Styled>
  );
};
export default Main2;
