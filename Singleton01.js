class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this; // Se não houver uma instância Singleton, atribui a instância atual a Singleton.instance
            this.value = 0; // Define um atributo "value" na instância
        }
    
        return Singleton.instance; // Retorna a instância Singleton (se já existir) ou a instância atual (se ainda não existir)
    }
    
    increment() {
      this.value++;
      console.log(`Value: ${this.value}`);
    }
  }
  
  // CLIENTE
  
  const s1 = new Singleton(); // Cria a primeira instância de Singleton
  const s2 = new Singleton();
  const s3 = new Singleton();
  
   // Tenta criar outra instância, mas obtém a mesma instância já criada
  
  console.log(s1 === s2); // Verifica se s1 e s2 referem-se à mesma instância (true)
  
  s1.increment(); // Incrementa o valor na instância s1
  s2.increment(); // Incrementa o valor na instância s2
  s3.increment();
  