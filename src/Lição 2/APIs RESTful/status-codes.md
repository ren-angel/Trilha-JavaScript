# O que são os **Status Codes**?

**Status Codes** são códigos de resposta enviados por um servidor HTTP ao cliente para indicar o resultado de uma requisição. Eles são fundamentais para a comunicação entre cliente e servidor, permitindo que aplicações saibam se a operação foi bem-sucedida, falhou ou se há necessidade de outra ação.

Os códigos de status são divididos em cinco categorias:

---

### **Categorias de Status Codes**

1. **1xx (Informativos)**  
   Indicam que a requisição foi recebida e está sendo processada. Raramente utilizados em APIs RESTful.  
   Exemplo:  
   - `100 Continue`: O servidor recebeu os headers e o cliente pode enviar o corpo da requisição.

2. **2xx (Sucesso)**  
   Indicam que a requisição foi bem-sucedida.  
   Exemplos:  
   - `200 OK`: Requisição realizada com sucesso e dados retornados.  
   - `201 Created`: Um recurso foi criado com sucesso (usado, por exemplo, em `POST`).  
   - `204 No Content`: Requisição bem-sucedida, mas sem conteúdo no corpo da resposta (geralmente usado em `DELETE`).

3. **3xx (Redirecionamentos)**  
   Indicam que é necessário mais ação para concluir a requisição.  
   Exemplos:  
   - `301 Moved Permanently`: O recurso foi movido permanentemente para outra URL.  
   - `304 Not Modified`: Indica que o recurso não mudou desde a última requisição (usado com caching).

4. **4xx (Erros do Cliente)**  
   Indicam que houve um problema com a requisição feita pelo cliente.  
   Exemplos:  
   - `400 Bad Request`: A requisição é inválida ou malformada.  
   - `401 Unauthorized`: A autenticação é necessária ou falhou.  
   - `403 Forbidden`: O cliente não tem permissão para acessar o recurso.  
   - `404 Not Found`: O recurso solicitado não foi encontrado.  
   - `422 Unprocessable Entity`: A requisição está correta, mas há algo errado no conteúdo enviado.

5. **5xx (Erros do Servidor)**  
   Indicam falhas no servidor ao processar a requisição.  
   Exemplos:  
   - `500 Internal Server Error`: Erro genérico do servidor.  
   - `502 Bad Gateway`: O servidor recebeu uma resposta inválida ao tentar processar a requisição.  
   - `503 Service Unavailable`: O servidor está temporariamente indisponível.

---

### **Boas Práticas em Endpoints**

1. **Escolha Correta de Status Codes**  
   - Sempre use códigos que representem adequadamente o estado da requisição.  
   - Evite usar apenas `200 OK` para tudo. Por exemplo:
     - `POST /users`: Retorne `201 Created` ao criar um novo usuário.
     - `DELETE /users/123`: Use `204 No Content` se o usuário for deletado sem erro.

2. **Design de Endpoints Baseado em Recursos**  
   - Utilize nomes de recursos no plural e estruturados de forma lógica:
     ```
     GET /products
     POST /products
     GET /products/{id}
     PUT /products/{id}
     DELETE /products/{id}
     ```

3. **Idempotência nos Métodos HTTP**  
   - **GET**: Sempre seguro e idempotente (não altera dados).  
   - **POST**: Não idempotente (cada chamada cria algo novo).  
   - **PUT/PATCH**: Idempotente (várias chamadas resultam no mesmo estado do recurso).  
   - **DELETE**: Idempotente (apagar algo já apagado não causa erro).

4. **Erro Detalhado no Corpo da Resposta**  
   Retorne informações úteis ao cliente no corpo da resposta ao tratar erros:  
   ```json
   {
     "error": "Erro de Validação",
     "details": [
       "O campo 'email' é necessário",
       "O campo 'senha' deve ter pelo menos 8 caracteres"
     ]
   }
   ```

5. **Versão da API**  
   Inclua a versão no endpoint para evitar problemas de compatibilidade:  
   ```
   GET /v1/products
   ```

6. **Paginação, Filtros e Ordenação**  
   - Para respostas volumosas, implemente paginação e filtros:  
     ```
     GET /products?page=2&limit=10&sort=price&filter=category:electronics
     ```

7. **Segurança**  
   - Sempre exija autenticação e use HTTPS.  
   - Utilize códigos como `401` para requisições não autenticadas e `403` para não autorizadas.

8. **Consistência**  
   Mantenha padrões consistentes em todos os endpoints.  
   Exemplo: Se `GET /products/{id}` retorna um erro `404`, `GET /orders/{id}` também deve.

9. **Documentação**  
   Documente sua API com ferramentas como Swagger para facilitar o uso e entendimento.