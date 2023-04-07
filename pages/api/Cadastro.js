/**
 * @param {import ('next).NextApiRequest} req
 * @param {import ('next').NextApiResponse} res
 */

export default function Cadastro(req, res) {
  res.status(200).json({ name: 'Andre', email: 'andrepeixoto', password: '123456' });
}
