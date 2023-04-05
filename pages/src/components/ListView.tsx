import React from "react";
import SContainer from "./ListViewSt";
import { IRegistro } from "@/pages/api/cadastro";

const ListView: React.FC<IRegistro> = (props) => {
  return (
    <>
      <SContainer>
        {props.descricao}
        {props.valor}
        {props.categoria}
      </SContainer>
    </>
  );
};

export default ListView;
