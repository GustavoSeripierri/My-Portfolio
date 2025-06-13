# Meu Portfolio - React.js

## 🚀 Como executar o projeto

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo de desenvolvimento:**
   ```bash
   npm start
   ```

3. **Construir para produção:**
   ```bash
   npm run build
   ```

## 📚 Entendendo o React.js

### O que é React?
React é uma biblioteca JavaScript para criar interfaces de usuário (UI). Ela usa um conceito chamado "componentes" - pequenos pedaços de código reutilizáveis.

### Conceitos Fundamentais:

#### 1. **Componentes**
- São como funções que retornam HTML (JSX)
- Exemplo: `Header.js`, `About.js`, `Skills.js`
- Cada componente tem uma responsabilidade específica

#### 2. **JSX**
- É uma sintaxe que mistura HTML com JavaScript
- Permite escrever HTML dentro do JavaScript
- Exemplo: `<h1>Olá Mundo</h1>`

#### 3. **Props**
- São dados passados de um componente pai para filho
- Como parâmetros de uma função
- Tornam os componentes reutilizáveis

#### 4. **State (Estado)**
- São dados que podem mudar ao longo do tempo
- Quando o state muda, o componente re-renderiza
- Usado no `Contact.js` para o formulário

#### 5. **Hooks**
- `useState`: Para gerenciar estado
- `useEffect`: Para efeitos colaterais
- Sempre começam com "use"

### Estrutura do Projeto:

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.js       # Cabeçalho e navegação
│   ├── About.js        # Seção sobre mim
│   ├── Skills.js       # Habilidades técnicas
│   ├── Projects.js     # Portfolio de projetos
│   └── Contact.js      # Formulário de contato
├── App.js              # Componente principal
├── index.js            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎯 Próximos Passos:

1. **Personalizar o conteúdo** com suas informações
2. **Adicionar estilos CSS** para cada componente
3. **Implementar responsividade** para mobile
4. **Adicionar animações** e transições
5. **Conectar formulário** a um serviço de email
6. **Deploy** para GitHub Pages ou Netlify

## 💡 Dicas de React:

- **Sempre** importe React no topo do arquivo
- **Nomeie** componentes com PascalCase (ex: `Header`)
- **Um componente** = um arquivo
- **Use** comentários para explicar código complexo
- **Mantenha** componentes pequenos e focados

## 🛠️ Comandos Úteis:

- `npm start` - Inicia servidor de desenvolvimento
- `npm run build` - Cria versão otimizada para produção
- `npm test` - Executa testes
- `Ctrl+C` - Para o servidor de desenvolvimento
