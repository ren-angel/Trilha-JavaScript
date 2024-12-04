O **Domain-Driven Design (DDD)** é uma abordagem para modelar sistemas de software complexos, focando em alinhar o modelo de software ao domínio do negócio que ele pretende resolver. Criado por Eric Evans, o DDD prioriza a colaboração entre desenvolvedores e especialistas no domínio, promovendo uma linguagem comum (Ubiquitous Language) e organização clara para o código.

---

### **1. Entidades**
**O que são:**  
Entidades são objetos que possuem uma identidade única ao longo de sua vida. Mesmo que os atributos mudem, a identidade permanece constante.

**Exemplo:**  
No contexto de um e-commerce, um **Usuário** é uma entidade. Mesmo que o nome ou o endereço do usuário mude, ele ainda é identificado pelo seu ID único.

**Características:**  
- Possuem **identidade única**.
- Representam objetos do mundo real ou conceitual que têm ciclo de vida.

---

### **2. Value Objects**
**O que são:**  
Value Objects representam um conceito ou valor do domínio que não possui identidade própria. Eles são definidos exclusivamente por seus atributos.

**Exemplo:**  
Um **Endereço** pode ser modelado como um Value Object, contendo atributos como rua, número, cidade e CEP. Dois endereços com os mesmos valores são considerados iguais.

**Características:**  
- **Imutáveis**: após criados, seus valores não devem ser alterados.  
- São comparados por **igualdade de valores**, não por identidade.

---

### **3. Aggregates**
**O que são:**  
Aggregates são grupos de objetos (Entidades e Value Objects) que são tratados como uma unidade. Eles garantem consistência e encapsulam regras de negócio.

**Exemplo:**  
No domínio de pedidos, um **Pedido** pode ser um Aggregate Root, contendo itens do pedido (Entidades), informações de endereço (Value Objects), e garantindo que não se possa adicionar um item com quantidade negativa.

**Características:**  
- Possuem um **Aggregate Root**: a entidade principal que controla o acesso às demais partes do Aggregate.  
- Isolam alterações e mantêm a consistência interna.

---

### **4. Repositories**
**O que são:**  
Repositories fornecem uma abstração para acessar coleções de Aggregates persistidos no banco de dados. Eles permitem buscar ou salvar Aggregates sem expor detalhes do armazenamento.

**Exemplo:**  
Um `PedidoRepository` pode oferecer métodos como `findById(pedidoId)` ou `save(pedido)`.

**Características:**  
- São interfaces ou classes que isolam o domínio da lógica de persistência.  
- Devem operar apenas no nível de **Aggregates**.

---

### **5. Domain Services**
**O que são:**  
Domain Services encapsulam lógica de negócio que não pertence claramente a uma Entidade ou Value Object. Eles representam operações do domínio que envolvem múltiplas Entidades/Aggregates ou conceitos externos.

**Exemplo:**  
No caso de um e-commerce, o cálculo de frete pode ser um Domain Service, pois envolve regras externas, como tabelas de preço por região.

**Características:**  
- Não possuem estado próprio.  
- Focam em **comportamentos do domínio**, não em dados.  
- Utilizam Entidades, Value Objects ou Aggregates para realizar suas operações.

---

### **Exemplo Integrado: Sistema de E-commerce**
1. **Entidade**:  
   - `Pedido` com ID único.
2. **Value Object**:  
   - `Endereço` associado ao pedido.
3. **Aggregate**:  
   - `Pedido`, que controla os `Itens do Pedido`.
4. **Repository**:  
   - `PedidoRepository` para salvar e buscar pedidos.
5. **Domain Service**:  
   - `CalculadorFreteService` para determinar o custo de entrega.