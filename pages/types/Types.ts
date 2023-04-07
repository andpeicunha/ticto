export interface IRegistros {
  descricao: string;
  valor: string;
  categoria: string;
  tipo: string;
  _id: string;
  id?: string;
  onClick?: () => void;
}
