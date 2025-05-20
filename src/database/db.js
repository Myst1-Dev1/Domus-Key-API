import { connect } from 'mongoose';

export const connectToDb = async() => {
    try {
        await connect(process.env.MONGO_URI);

        console.log('Conectado no banco de dados do mongodb com sucesso!');
    } catch (error) {
        console.log('Falha ao conectar ao mongodb', error);
        process.exit(1);
    }
}