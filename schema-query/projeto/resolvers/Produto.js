module.exports = {
    precoComDesconto(produto) {
        if (produto.preco > 0) {
            if (produto.desconto > 0 && produto.desconto < 100) {
                return produto.preco - produto.preco * (produto.desconto / 100)
            } else {
                return produto.preco;
            }
        }
    }
}