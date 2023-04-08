import connectMongo from '../lib/dbConnect';
import CadastroModel from '../models/CadastroModel'
import { ObjectId } from 'mongodb';


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

        case 'PUT':
            try {
                const id = new ObjectId(req.query.id);
                const update = req.body;
                await connectMongo();
                const cadastros = await CadastroModel.findByIdAndUpdate(id, update, { new: true });
                res.json({ cadastros });
            } catch (error) {
                res.json({ error });
            }
            break;

        case 'DELETE':
            try {
                const id = new ObjectId(req.query.id);
                await connectMongo();
                const cadastros = await CadastroModel.findByIdAndDelete(id);
                res.json({ cadastros });
            } catch (error) {
                res.json({ error });
            }
            break;

        case 'POST':
            try {
                const { descricao, valor, categoria, tipo } = req.body;
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


    }
}