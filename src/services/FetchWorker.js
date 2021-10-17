export default async function getWorkerInfo() {
  try {
    const response = await fetch('http://localhost:3000/worker');
    const data = await response.json();
    return data;
  }
  catch {
    return {
      "first_name": "Yuji",
      "last_name": "Itadori",
      "picture": "https://nacao42.com.br/wp-content/uploads/2020/12/yuji-Itadori.jpg",
      "height": "173",
      "size": "M",
      "shoe": "37",
      "role": "Exorcista Jujutsu",
      "created_at": "2019-10-26T14:40:13.365Z"
    }
  }
}

// fiz a requisição usando o json server para fazer a simulação de uma requisição ,sendo que o 
// link da "API" é o meu próprio localhost na porta 3000. Para que a aplicação continue funcionando
// coloquei que o erro (catch) vai retornar o mesmo objeto que a requisição retornaria se não falhasse,
// porém em uma aplicação real não ficaria dessa forma visto que nós teriamos uma API real.
