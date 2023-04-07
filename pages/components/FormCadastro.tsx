import React, { ChangeEvent, FormEvent, useState } from "react";
import FormContainer, { BackgroundOpacity, FormBox } from "../css/FormCadastroStyled";

export interface FormCadastroProps {
  onClick: () => void;
  _id: string;
}

const FormCadastro: React.FC<FormCadastroProps> = (props) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("");

  const handleDescricaoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
  };
  const handleValorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };
  const handleCategoriaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoria(event.target.value);
  };
  const handleTipoChange = (tipoSelecionado: string) => {
    setTipo(tipoSelecionado);
  };

  const handleSubmitChangeValue = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/MondoDB/${props._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          descricao,
          valor,
          categoria,
          tipo,
        }),
      });

      if (response.ok) {
        const novoRegistro = await response.json();
        console.log("Registro atualizado:", novoRegistro);
        // aqui você pode fazer alguma ação, como redirecionar o usuário para a página de lista de registros
      } else {
        console.error("Erro ao atualizar registro:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao atualizar registro:", error);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/MongoDB", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          descricao,
          valor,
          categoria,
          tipo,
        }),
      });

      if (response.ok) {
        const novoRegistro = await response.json();
        console.log("Novo registro cadastrado:", novoRegistro);
        // aqui você pode fazer alguma ação, como redirecionar o usuário para a página de lista de registros
      } else {
        console.error("Erro ao cadastrar novo registro:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao cadastrar novo registro:", error);
    }
  };

  return (
    <>
      <FormContainer>
        <FormBox>
          <h1>Cadastrar Transação</h1>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="descricao"
              id="descricao"
              placeholder="Descrição"
              onChange={handleDescricaoChange}
            />
            <input type="text" name="valor" id="valor" placeholder="Preço" onChange={handleValorChange} />

            <button
              type="button"
              id="Entrada"
              className={tipo === "Entrada" ? "active" : ""}
              onClick={() => handleTipoChange("Entrada")}
            >
              Entrada
            </button>

            <button
              type="button"
              id="Saida"
              className={tipo === "Saida" ? "active" : ""}
              onClick={() => handleTipoChange("Saida")}
            >
              Saída
            </button>

            <input name="categoria" id="categoria" onChange={handleCategoriaChange} />
            <button type="submit">Cadastrar</button>
          </form>

          <button onClick={props.onClick}>Fechar</button>
        </FormBox>
      </FormContainer>
      <BackgroundOpacity />
    </>
  );
};

export default FormCadastro;
