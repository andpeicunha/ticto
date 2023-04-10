import { Schema, model, models } from 'mongoose'

const CadastroSchema = new Schema({
    descricao: {
        type: String,
        required: true,
    },
    valor: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    }
})

export const CadastroModel = models.cadastros || model('cadastros', CadastroSchema)