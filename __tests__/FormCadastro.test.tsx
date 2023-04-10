import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { FormCadastro } from '../pages/components/FormCadastro';

describe('COMPONENTE FORM CADASTRO', () => {
  const mockOnClick = jest.fn();
  const mockOnSubmit = jest.fn();

  it('VALIDA RENDERIZAÇÃO', () => {
    const { getByText, getByPlaceholderText } = render(<FormCadastro onClick={mockOnClick} />);
    expect(getByText('Cadastrar Transação')).toBeInTheDocument();
    expect(getByPlaceholderText('Nome')).toBeInTheDocument();
    expect(getByPlaceholderText('Preço')).toBeInTheDocument();
    expect(getByPlaceholderText('Categoria')).toBeInTheDocument();
  });

  it('FAZ O TESTE DO SUBMIT', () => {
    const data = new Date().setSeconds(0);

    const { getByText, getByPlaceholderText } = render(
      <FormCadastro onClick={mockOnClick} onSubmit={mockOnSubmit} />,
    );
    fireEvent.change(getByPlaceholderText('Nome'), { target: { value: 'Teste' } });
    fireEvent.change(getByPlaceholderText('Preço'), { target: { value: '10.00' } });
    fireEvent.change(getByPlaceholderText('Categoria'), { target: { value: 'Teste categoria' } });
    fireEvent.click(getByText('Entrada'));
    fireEvent.submit(getByText('Cadastrar'));

    expect(mockOnSubmit).toHaveBeenCalledWith({
      descricao: 'Teste',
      valor: '1000',
      categoria: 'Teste categoria',
      tipo: 'Entrada',
      data: new Date().toString(),
    });
  });

  it('TESTA O ALERT', () => {
    const mockAlert = jest.fn();
    jest.spyOn(window, 'alert').mockImplementation(mockAlert);

    const { getByText } = render(<FormCadastro onClick={mockOnClick} onSubmit={mockOnSubmit} />);
    fireEvent.submit(getByText('Cadastrar'));

    expect(mockOnSubmit).toHaveBeenCalled();
    expect(alert).toHaveBeenCalledWith('Selecione o Tipo Entrada ou Saída.');
  });
});
