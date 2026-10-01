import { query } from "../config/db.js";

export const userRepository = {
    async getByLogin(email, senha){
        const sql = "SELECT * FROM tb_usuario WHERE email = $1 AND senha = $2;"
        const res = await query(sql, [email, senha])
        return res.rows[0]
    }
}