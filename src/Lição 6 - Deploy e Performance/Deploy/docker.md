**Docker** é uma plataforma que permite criar, gerenciar e executar aplicações em contêineres, facilitando o deploy e a configuração de ambientes de maneira consistente.

---

### **1. Conceitos Básicos**  
- **Imagem Docker**: Um modelo imutável que contém tudo o que sua aplicação precisa para ser executada (código, bibliotecas, dependências).  
- **Contêiner**: Uma instância em execução de uma imagem Docker.  
- **Dockerfile**: Um arquivo que descreve como criar uma imagem Docker.  
- **Docker Compose**: Uma ferramenta para definir e gerenciar aplicações multi-contêiner.

---

### **2. Criando um Dockerfile**  
Exemplo para uma aplicação Node.js:  

```dockerfile
# Usando uma imagem base oficial
FROM node:14

# Configurando o diretório de trabalho
WORKDIR /app

# Copiando arquivos de dependências
COPY package*.json ./

# Instalando dependências
RUN npm install

# Copiando o código para o contêiner
COPY . .

# Expondo a porta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
```

---

### **3. Configurando Ambientes**  
Você pode definir variáveis de ambiente usando:  

- **Dockerfile (não recomendado para dados sensíveis)**:  
  ```dockerfile
  ENV NODE_ENV=production
  ```
  
- **Arquivo `.env`** (mais seguro):  
  ```
  NODE_ENV=production
  PORT=3000
  ```

- **Docker Compose (com suporte a `.env`)**:  
  ```yaml
  version: "3.8"
  services:
    app:
      build: .
      ports:
        - "${PORT}:3000"
      environment:
        - NODE_ENV=${NODE_ENV}
      volumes:
        - .:/app
        - /app/node_modules
  ```

---

### **4. Deploy com Docker**  

1. **Build da Imagem**:  
   ```bash
   docker build -t minha-app .
   ```

2. **Executando o Contêiner**:  
   ```bash
   docker run -d -p 3000:3000 --env-file .env minha-app
   ```

3. **Usando Docker Compose**:  
   ```bash
   docker-compose up -d
   ```

---

### **5. Melhorando a Configuração de Ambiente**  
- Use **Docker Secrets** para dados sensíveis em produção.  
- Implemente **volumes** para persistir dados.  
- Use um **orquestrador de contêineres** como Kubernetes para aplicações escaláveis.