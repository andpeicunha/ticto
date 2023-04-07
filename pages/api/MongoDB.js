import connectMongo from '../lib/dbConnect';
import CadastroModel from '../models/CadastroModel'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function Cadastro(req, res) {
    switch (req.method) {
        case 'GET':
            try {
                await connectMongo();
                const cadastros = await CadastroModel.find();
                res.json({ cadastros });
            } catch (error) {
                res.json({ error });
            }
            break;

        case 'POST':
            try {
                // const { descricao, valor, categoria, tipo } = req.body;
                await connectMongo();
                const cadastro = await CadastroModel.create(req.body);
                res.json({ cadastro });
            } catch (error) {
                res.json({ error });
            }
            break;
        default:
            res.status(405).json({ error: 'Method Not Allowed' });
            break;

        case 'PUT':
            try {
                const { descricao, valor, categoria, tipo } = req.body;
                await connectMongo();
                const registro = await CadastroModel.findByIdAndUpdate(req.params.id, { descricao, valor, categoria, tipo }, { new: true });
                res.json({ registro });
            } catch (error) {
                res.json({ error });
            }
            break;
    }
}



// export default async function Cadastro(req, res) {
//     try {
//         const { descricao, valor, categoria, tipo } = req.body;
//         console.log('# CONECTANDO');

//         await connectMongo();
//         console.log('## CONECTADO!!!');

//         const cadastro = await CadastroModel.create(req.body)
//         console.log('### DOCUMENTO CRIADO')

//         res.json({ cadastro })
//     } catch (error) {
//         console.log(error);
//         res.json({ error });
//     }

// }