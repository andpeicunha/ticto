import { NextApiRequest, NextApiResponse } from 'next'

interface Registro {
  id: number
  descricao: string
  valor: string
  categoria: string
}

const registros: Registro[] = [
  {
    id: 1,
    descricao: 'Curso NextJs',
    valor: '899,00',
    categoria: 'Educação',
  },
  {
    id: 2,
    descricao: 'Registro 2',
    valor: '200',
    categoria: 'Categoria B',
  },
  {
    id: 3,
    descricao: 'Registro 3',
    valor: '300',
    categoria: 'Categoria C',
  },
  {
    id: 4,
    descricao: 'Registro 4',
    valor: '400',
    categoria: 'Categoria A',
  },
  {
    id: 5,
    descricao: 'Registro 5',
    valor: '500',
    categoria: 'Categoria B',
  },
]

// Função auxiliar para encontrar o índice de um registro pelo ID
const findRegistroIndex = (id: number): number => {
  return registros.findIndex((registro) => registro.id === id)
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query, body } = req

  if (method === 'GET') {
    // Endpoint para obter todos os registros
    res.status(200).json(registros)
  } else if (method === 'POST') {
    // Endpoint para criar um novo registro
    const novoRegistro: Registro = {
      id: registros.length + 1, // Gere um novo ID baseado no tamanho do array
      descricao: body.descricao,
      valor: body.valor,
      categoria: body.categoria,
    }
    registros.push(novoRegistro)
    res.status(201).json(novoRegistro)
  } else if (method === 'PUT') {
    // Endpoint para atualizar um registro existente pelo ID
    const id = Number(query.id)
    const index = findRegistroIndex(id)
    if (index !== -1) {
      const registroAtualizado: Registro = {
        id: id,
        descricao: body.descricao,
        valor: body.valor,
        categoria: body.categoria,
      }
      registros[index] = registroAtualizado
      res.status(200).json(registroAtualizado)
    } else {
      res.status(404).json({ error: 'Registro não encontrado.' })
    }
  } else if (method === 'DELETE') {
    // Endpoint para excluir um registro existente pelo ID
    const id = Number(query.id)
    const index = findRegistroIndex(id)
    if (index !== -1) {
      registros.splice(index, 1)
      res.status(200).json({ message: 'Registro excluído com sucesso.' })
    } else {
      res.status(404).json({ error: 'Registro não encontrado.' })
    }
  } else {
    res.status(400).json({ error: 'Método inválido.' })
  }
}
