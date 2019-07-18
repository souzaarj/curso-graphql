const { usuarios, perfis } = require('../data/db');
const clubes = require('../data/Clubes');
const liga = require('../data/Liga');

module.exports = {

    ola() {
        return 'Basta retornar uma string';
    },
    horaAtual() {
        return `${new Date().toTimeString()}`;
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'anadaweb@email.com',
            idade: 23,
            salario_real: 28000,
            vip: false
        }
    },
    produtoEmDestaque() {
        return {
            nomeProduto: 'PS4',
            preco: 2500.00,
            desconto: 99,
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b;
        return Array(6).fill(0).map(n => parseInt(Math.random() * 60 + 1)).sort(crescente)

    },
    usuarios() {
        return usuarios;
    },
    clubes() {
        return clubes;
    },
    cartola() {
        console.log(liga.then(response=>console.log(response)))
        return liga.then(response => response);
    },
    usuario(_, { id }) {
        const usuarioSelecionado = usuarios.filter(usuario => usuario.id == id)
        return usuarioSelecionado ? usuarioSelecionado[0] : null;
    },
    perfis() {
        return perfis;
    },
    perfil(_, { id }) {
        const perfilSelecionado = perfis.filter(perfil => perfil.id == id);
        return perfilSelecionado ? perfilSelecionado[0] : null;
    }

}