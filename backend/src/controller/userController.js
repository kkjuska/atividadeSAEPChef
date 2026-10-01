import { userRepository } from "../repository/userRepository";

export const userController = {
    async getByLogin(req, res){
        try {
            const {email, senha} = req.body
            if(!email){
                return res.status(400).json({erro: 'Email vazio'})
            }
            if(!senha){
                return res.status(400).json({erro: 'Senha vazia'})
            }
            const usuario = await userRepository.getByLogin(req.body)
            if(!usuario){
                return res.status(404).json({erro: 'Usuário não encontrado ou dados incorretos!'})
            }else{
                return res.status(200).json({
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email,
                    senha: usuario.senha
                })
            }
        } catch (error) {
            
        }
    }   
}