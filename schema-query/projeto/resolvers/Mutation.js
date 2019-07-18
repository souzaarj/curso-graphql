const { usuarios, proximoId } = require('../data/db');

module.exports = {
    //novoUsuario(_, args) {
    novoUsuario(_, { dados }) {
        //const emailJaExiste = usuarios.some(usuario => usuario.email === args.email);
        const emailJaExiste = usuarios.some(usuario => usuario.email === dados.email);
        if (emailJaExiste) {
            throw new Error(`Email (${dados.email}) já existe.`)
        }
        const novoUsuario = {
            id: proximoId,
            ...dados,
            perfil_id: 1,
            status: 'ATIVO'
        }
        usuarios.push(novoUsuario);
        return novoUsuario;

    },
    excluirUsuario(_, { id }) {
        const indexUsuario = usuarios.findIndex(usuario => usuario.id == id);

        console.log(indexUsuario);

        if (indexUsuario < 0) return null

        const excluidos = usuarios.splice(indexUsuario, 1);

        return excluidos ? excluidos[0] : null;
    },

    alteraUsuario(_, args) {
        const indexUsuario = usuarios.findIndex(usuario => usuario.id == args.id);

        if (indexUsuario < 0) return null

        const usuario = {
            ...usuarios[indexUsuario],
            ...args
        }

        usuarios.splice(indexUsuario, 1, usuario);

        return usuario;

    }
}