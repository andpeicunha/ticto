import React, { ChangeEvent, FormEvent, useState } from "react";
import FormContainer, { BackgroundOpacity, FormBox } from "../css/FormCadastroStyled";

export interface FormCadastroProps {
  onClick: () => void;
}

const FormCadastro: React.FC<FormCadastroProps> = (props) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("");

  const handleDescricaoChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Descr...", event.target.value);
    setDescricao(event.target.value);
  };
  const handleValorChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Valor...", event.target.value);
    setValor(event.target.value);
  };
  const handleCategoriaChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("Categoria...", event.target.value);
    setCategoria(event.target.value);
  };
  const handleTipoChange = (tipoSelecionado: string) => {
    console.log("Tipo...", tipoSelecionado);
    setTipo(tipoSelecionado);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/Cadastro", {
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
              id="entrada"
              className={tipo === "entrada" ? "active" : ""}
              onClick={() => handleTipoChange("entrada")}
            >
              Entrada
            </button>

            <button
              type="button"
              id="saida"
              className={tipo === "saida" ? "active" : ""}
              onClick={() => handleTipoChange("saida")}
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
