**Clean Architecture** é um modelo de arquitetura de software criado por Robert C. Martin (Uncle Bob), que organiza o código em camadas para facilitar a manutenção, escalabilidade e teste. Seu principal objetivo é desacoplar regras de negócio de detalhes técnicos, como frameworks e bancos de dados, promovendo sistemas mais flexíveis e resistentes a mudanças. 

## **Camadas da Clean Architecture**  

1. **Domínio (Core Business Rules):**  
   - Contém as regras de negócio e a lógica central do sistema.  
   - Independente de detalhes externos como frameworks ou bancos de dados.  
   - **Elementos principais:**  
     - **Entidades:** Representam os conceitos principais do domínio com regras de negócio complexas.  
     - **Value Objects:** Objetos imutáveis que representam valores específicos.  
     - **Repositórios (Interfaces):** Definem contratos para acessar dados.  

2. **Aplicação (Application Business Rules):**  
   - Define como as regras de negócio são aplicadas em cenários específicos.  
   - Orquestra o uso das entidades e repositórios.  
   - **Elementos principais:**  
     - **Casos de Uso (Use Cases):** Contêm fluxos de operações específicas do sistema.  
     - **Serviços de Aplicação:** Processam lógica intermediária.  

3. **Interface de Usuário (Interface Adapters):**  
   - Traduz dados para serem usados por controladores, interfaces gráficas ou APIs.  
   - **Exemplos:**  
     - Controllers de APIs.  
     - Views e apresentadores.  

4. **Infraestrutura (Frameworks & Drivers):**  
   - Contém detalhes técnicos como bibliotecas, frameworks e persistência de dados.  
   - Implementa interfaces definidas nas camadas superiores.  
   - **Exemplos:**  
     - Banco de dados.  
     - Serviços externos.  