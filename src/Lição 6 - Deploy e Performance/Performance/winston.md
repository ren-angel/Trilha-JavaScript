Winston é uma biblioteca de registro de logs para Node.js amplamente utilizada devido à sua flexibilidade e suporte para diferentes formatos e destinos de logs (chamados de **transports**). Ela permite armazenar logs em arquivos, bases de dados ou sistemas de gerenciamento de logs externos.

---

### **2. Instalação**  
```bash
npm install winston
```

---

### **3. Configuração Básica**  

#### Criando um Logger Simples
```javascript
const winston = require('winston');

// Configuração básica
const logger = winston.createLogger({
  level: 'info',  // Nível mínimo de registro
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),  // Exibe no console
    new winston.transports.File({ filename: 'app.log' })  // Salva em arquivo
  ]
});

// Registrando logs
logger.info('Log de informação');
logger.warn('Log de aviso');
logger.error('Log de erro');
```

---

### **4. Níveis de Logs**  
Winston segue os níveis padrão do npm para logs:  

| Nível  | Prioridade | Descrição             |
|--------|-------------|-----------------------|
| error  | 0           | Erros graves         |
| warn   | 1           | Alertas e avisos     |
| info   | 2           | Informações gerais   |
| http   | 3           | Logs de requisições  |
| verbose| 4           | Mensagens detalhadas |
| debug  | 5           | Logs de depuração    |
| silly  | 6           | Logs mais detalhados |

---

### **5. Formatação de Logs**  

#### Formatos Comuns
```javascript
const { combine, timestamp, printf, colorize } = winston.format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: 'debug',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    colorize(),
    customFormat
  ),
  transports: [new winston.transports.Console()]
});

logger.debug('Log formatado');
```

---

### **6. Transports (Destinos de Logs)**  

#### Logs em Arquivos
```javascript
new winston.transports.File({ filename: 'errors.log', level: 'error' })
```

#### Logs no Console
```javascript
new winston.transports.Console()
```

#### Logs em Serviços Externos
Há suporte para serviços como AWS CloudWatch, Graylog e Loggly através de plugins adicionais.

---

### **7. Manipulando Exceções e Rejeições de Promessas**  
Winston pode capturar exceções e rejeições não tratadas:  
```javascript
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'exceptions.log' })
  ],
  exceptionHandlers: [
    new winston.transports.File({ filename: 'exceptions.log' })
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: 'rejections.log' })
  ]
});
```

---

### **8. Boas Práticas**
- **Defina Níveis de Logs:** Ajuste o nível de acordo com o ambiente (debug para desenvolvimento, info para produção).
- **Rotação de Arquivos:** Use bibliotecas como `winston-daily-rotate-file`.
- **Formate os Logs:** Use formatos legíveis para humanos e estruturados (JSON).
- **Centralize Logs:** Considere serviços de gerenciamento de logs para produção.