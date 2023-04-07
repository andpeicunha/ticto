import React from "react";
import SContainer from "../css/ListViewStyled";

const Item: React.FC<IRegistro> = (props) => {
  return (
    <>
      <SContainer>
        <div>{props.descricao}</div>
        <div>{props.valor}</div>
        <div>{props.categoria}</div>
        <button onClick={props.onClick}>Editar</button>
        <button>Excluir</button>
      </SContainer>
    </>
  );
};

export default Item;
