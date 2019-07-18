let id = 1;
const proximoId = () => id++

const usuarios = [
    {
        id: proximoId(),
        nome: "Rafael",
        email: "rafa@uol.com.br",
        perfil_id: 1,
        status:"BLOQUEADO"

    },
    {
        id: proximoId(),
        nome: "Pedro",
        email: "pedroca@hotmail.com",
        perfil_id: 2,
        status: "ATIVO"
    },
    {
        id: proximoId(),
        nome: "João",
        email: "jj@gmail.com",
        perfil_id: 1,
        status:"INATIVO"
    }

]

const perfis = [
    {
        id: 1,
        descricao: "Comum"
    },
    {
        id: 2,
        descricao: "Administrador"
    }
]

module.exports = { usuarios, perfis, proximoId };