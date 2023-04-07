import { render, fireEvent, screen } from "@testing-library/react";
import List from "../pages/components/Lista";
import React from "react";

// Mock dos dados retornados pela API
jest.mock("@tanstack/react-query", () => ({
  useQuery: () => ({
    data: [
      { id: 1, descricao: "Compra no mercado", valor: "50,00", categoria: "Alimentação", tipo: "Saida" },
      { id: 2, descricao: "Salário", valor: "2000,00", categoria: "Salário", tipo: "Entrada" },
      { id: 3, descricao: "Aluguel", valor: "800,00", categoria: "Moradia", tipo: "Saida" },
    ],
  }),
}));

describe("List component", () => {
  test("Valida se renderizou o Header com o Logo e Botão", () => {
    render(<List />);
    expect(screen.getByTestId("logotipo")).toBeInTheDocument();
    expect(screen.getByTestId("botao-nova-transacao")).toBeInTheDocument();
  });

  test("Renderizou o componente Balance - com o Titulo e valor", () => {
    render(<List />);
    expect(screen.getByTestId("balance-saldo")).toBeInTheDocument();
    expect(screen.getByTestId("title-balance-saldo")).toBeInTheDocument();
    expect(screen.getByTestId("value-balance-saldo")).toBeInTheDocument();
  });

  test("should render the list of items", () => {
    render(<List />);
    expect(screen.getByText(/Compra no mercado/i)).toBeInTheDocument();
    //! revisar expect(screen.getByText(/Salário/i)).toBeInTheDocument();
    expect(screen.getByText(/Aluguel/i)).toBeInTheDocument();
  });

  // test("should show form when 'Adicionar' button is clicked", () => {
  //   render(<List />);
  //   revisar const addBtn = screen.getByText(/Adicionar/i);
  //   fireEvent.click(addBtn);
  //   expect(screen.getByText(/Descrição/i)).toBeInTheDocument();
  // });

  // test("should hide form when 'Cancelar' button is clicked", () => {
  //   render(<List />);
  //   const addBtn = screen.getByText(/Adicionar/i);
  //   fireEvent.click(addBtn);
  //   const cancelBtn = screen.getByText(/Cancelar/i);
  //   fireEvent.click(cancelBtn);
  //   expect(screen.queryByText(/Descrição/i)).not.toBeInTheDocument();
  // });

  // test("should toggle form visibility when 'Adicionar' button is clicked twice", () => {
  //   render(<List />);
  //   const addBtn = screen.getByText(/Adicionar/i);
  //   fireEvent.click(addBtn);
  //   fireEvent.click(addBtn);
  //   expect(screen.queryByText(/Descrição/i)).not.toBeInTheDocument();
  // });
});
