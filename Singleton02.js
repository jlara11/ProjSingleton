const Carrinho = (function () {
    let instance; // Variável que armazenará a única instância da classe

    // Função interna para criar a instância única
    function createInstance() {
        let produtos = []; // Array que armazenará os produtos no carrinho

        // Método para adicionar um produto ao carrinho
        function addProduto(produto) {
            produtos.push(produto);
        }

        // Método para obter a lista de produtos no carrinho
        function getProduto() {
            return produtos;
        }

        // Método para limpar o carrinho (remover todos os produtos)
        function clearCarrinho() {
            produtos = [];
        }

        return {
            addProduto,
            getProduto,
            clearCarrinho,
        };
    }

    // Função externa que retorna um objeto com o método getInstance
    return {
        getInstance: function () {
            // Se a instância ainda não existir, crie-a
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

//EX DE USO

const carrinhoInstance1 = Carrinho.getInstance();
const carrinhoInstance2 = Carrinho.getInstance();

console.log(carrinhoInstance1 === carrinhoInstance2); // Verifica se as duas instâncias são iguais

carrinhoInstance1.addProduto({ id: 1, nome: "Produto 1", preco: 10.00 });
carrinhoInstance2.addProduto({ id: 2, nome: "Produto 2", preco: 20.00 });

console.log(carrinhoInstance1.getProduto()); // Mostra os produtos no carrinho da instância 1
console.log(carrinhoInstance2.getProduto()); // Mostra os produtos no carrinho da instância 2

carrinhoInstance1.clearCarrinho(); // Limpa o carrinho da instância 1

console.log(carrinhoInstance1.getProduto()); // Carrinho da instância 1 está vazio
console.log(carrinhoInstance2.getProduto()); // Carrinho da instância 2 ainda possui produtos
