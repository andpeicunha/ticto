export interface IRegistros {
  descricao: string;
  valor: string;
  categoria: string;
  tipo: string;
  data: string;
  _id?: string;
  id?: string;
  onClick?: () => void;
  showForm?: (_id?: string) => void;
  deleteRegistro?: (_id?: string) => void;
}
