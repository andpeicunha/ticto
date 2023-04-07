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
                console.log('# CONECTANDO');
                await connectMongo();
                console.log('## CONECTADO!!!');
                const cadastros = await CadastroModel.find();
                console.log('### DOCUMENTOS ENCONTRADOS');
                res.json({ cadastros });
            } catch (error) {
                console.log(error);
                res.json({ error });
            }
            break;
        case 'POST':
            try {
                const { descricao, valor, categoria, tipo } = req.body;
                console.log('# CONECTANDO');
                await connectMongo();
                console.log('## CONECTADO!!!');
                const cadastro = await CadastroModel.create(req.body);
                console.log('### DOCUMENTO CRIADO');
                res.json({ cadastro });
            } catch (error) {
                console.log(error);
                res.json({ error });
            }
            break;
        default:
            res.status(405).json({ error: 'Method Not Allowed' });
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