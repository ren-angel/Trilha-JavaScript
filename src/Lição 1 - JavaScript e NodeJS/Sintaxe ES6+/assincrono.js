// 'Async/Await' são utilizadas para trabalhar com programação assíncrona, permitindo a execução de tarefas de forma simultânea e não bloqueante.

// Async: Define uma função como assíncrona, ou seja, uma função que pode conter operações que podem ser pausadas e retomadas mais tarde (geralmente, operações de I/O como leitura de arquivos ou requisições de rede, como uma requisição a uma API).

// Await: Usada dentro de uma função assíncrona para pausar a execução até que uma operação assíncrona seja concluída, permitindo que o programa execute outras tarefas enquanto espera.
const getGithubUsersInfo = async (user) => {
    
    try {

        const response = await fetch(`https://api.github.com/users/${user}`);

        const info = response.json();

        return info;
    } catch (error) {

        console.error(error);
        return null;
    }
}

const logUserInfo = async () => {
    const eu = await getGithubUsersInfo("ren-angel");
    console.log(eu);
}

logUserInfo();