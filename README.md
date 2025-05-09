# Lima Timer

## Sobre o Projeto

Lima Timer é um aplicativo de gerenciamento de tempo baseado na técnica Pomodoro, desenvolvido para ajudar usuários a manter o foco e aumentar a produtividade. O aplicativo permite criar ciclos de trabalho cronometrados, acompanhar o histórico de atividades e alternar entre temas claro e escuro.

## Funcionalidades

- ⏲️ **Cronômetro Pomodoro**: Crie ciclos de trabalho personalizados entre 5 e 60 minutos
- 📊 **Histórico de Ciclos**: Visualize todos os ciclos já realizados, incluindo ciclos completos, interrompidos e em andamento
- 🌓 **Temas Claro/Escuro**: Alterne entre tema escuro (padrão) e tema claro conforme sua preferência
- 💾 **Persistência de Dados**: Seus ciclos e preferências de tema são salvos automaticamente
- 🔄 **Interface Responsiva**: Experiência consistente em diferentes dispositivos

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário
- **TypeScript**: Tipagem estática para desenvolvimento mais seguro
- **Styled Components**: Estilização baseada em componentes com suporte a temas
- **React Router DOM**: Navegação entre páginas
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de esquemas
- **Phosphor React**: Biblioteca de ícones
- **Date-fns**: Manipulação de datas

## Estrutura do Projeto

```
src/
├── @types/            # Definições de tipos para TypeScript
├── assets/            # Arquivos estáticos (imagens, logos)
├── components/        # Componentes reutilizáveis
├── contexts/          # Contextos React para estado global
├── layouts/           # Layouts compartilhados entre páginas
├── pages/             # Páginas da aplicação
├── reducers/          # Lógica de estado com useReducer
├── styles/            # Estilos globais e temas
├── App.tsx            # Componente principal
└── main.tsx           # Ponto de entrada da aplicação
```

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/lima-timer.git
   cd lima-timer
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:5173` no seu navegador

## Como Usar

1. Na página inicial, defina um nome para sua tarefa
2. Escolha a duração do ciclo (entre 5 e 60 minutos)
3. Clique em "Começar" para iniciar o cronômetro
4. O timer mostrará o tempo restante para concluir o ciclo
5. Você pode interromper um ciclo em andamento clicando em "Interromper"
6. Para ver o histórico de todas as tarefas, acesse a página "Histórico"

## Personalização

O Lima Timer permite que você alterne entre temas claro e escuro:

- Clique no ícone de sol/lua no canto superior direito da aplicação para alternar entre os temas
- Sua preferência de tema será salva localmente e mantida entre sessões

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

Desenvolvido como parte dos estudos de React na trilha Ignite.
