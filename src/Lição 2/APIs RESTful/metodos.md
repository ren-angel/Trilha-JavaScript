# O que são os **métodos HTTP**?

Os **métodos HTTP** são verbos que indicam as ações que podem ser realizadas em uma API ou em um servidor web.

### **Métodos HTTP para CRUD**
| Operação CRUD | Método HTTP | Descrição                                                                                   |
|---------------|-------------|-----------------------------------------------------------------------------------------------|
| **Create**    | `POST`      | Usado para criar novos recursos no servidor. Geralmente, envia dados no corpo da requisição.  |
| **Read**      | `GET`       | Usado para recuperar dados de um servidor sem alterar nada. Não envia dados no corpo.         |
| **Update**    | `PUT` ou `PATCH` | Atualiza recursos existentes. **PUT** substitui completamente, enquanto **PATCH** faz alterações parciais. |
| **Delete**    | `DELETE`    | Remove um recurso do servidor.                                                               |

---

### **Detalhes dos Métodos HTTP**

#### 1. **GET**
- **Objetivo**: Recuperar informações sem alterar o estado do servidor.
- **Exemplo**: Consultar informações de um usuário.
```http
GET /users/123
Host: example.com
```

#### 2. **POST**
- **Objetivo**: Criar um novo recurso no servidor.
- **Exemplo**: Adicionar um novo usuário.
```http
POST /users
Host: example.com
Content-Type: application/json

{
    "name": "João",
    "email": "joao@example.com"
}
```

#### 3. **PUT**
- **Objetivo**: Atualizar completamente um recurso existente.
- **Exemplo**: Atualizar todas as informações de um usuário.
```http
PUT /users/123
Host: example.com
Content-Type: application/json

{
    "name": "João Atualizado",
    "email": "joao.atualizado@example.com"
}
```

#### 4. **PATCH**
- **Objetivo**: Atualizar parcialmente um recurso.
- **Exemplo**: Atualizar apenas o e-mail do usuário.
```http
PATCH /users/123
Host: example.com
Content-Type: application/json

{
    "email": "novo.email@example.com"
}
```

#### 5. **DELETE**
- **Objetivo**: Remover um recurso.
- **Exemplo**: Deletar um usuário.
```http
DELETE /users/123
Host: example.com
```