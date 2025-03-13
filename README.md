# CãoPartilhe 🐶🐱

CãoPartilhe é um sistema desenvolvido para ajudar ONGs e pessoas a encontrarem animais perdidos, anunciarem animais encontrados e disponibilizarem pets para adoção. Com uma interface intuitiva, o sistema permite que os usuários publiquem anúncios, interajam por curtidas e comentários e recebam notificações em tempo real.

## 📌 Funcionalidades
- 📢 **Publicação de Anúncios**: Cadastre animais para adoção, relatar animais perdidos ou encontrados.
- 📸 **Upload de Fotos**: Adicione imagens aos anúncios.
- 💬 **Interação entre Usuários**: Comente e curta publicações de outros usuários.
- 🔔 **Notificações**: Receba alertas quando alguém comentar em seus anúncios.
- 📍 **Localização**: Informe a cidade e o endereço do animal.
- 🔄 **Atualização de Status**: O dono do anúncio pode marcar como "Resolvido" ou "Adotado".

## 🏗️ Tecnologias Utilizadas
- **Frontend**: Next.js / TypeScript / ShadCN UI
- **Backend**: Next.js API Routes / Prisma ORM
- **Banco de Dados**: PostgreSQL
- **Storage**: Supabase
- **Validação**: Zod

## ✅ Requisitos Funcionais

| Código  | Descrição |
|---------|----------|
| RF001   | O sistema deve permitir que usuários se cadastrem e realizem login. |
| RF002   | O usuário deve poder criar anúncios de animais para adoção, perdidos ou encontrados. |
| RF003   | O usuário pode adicionar múltiplas fotos ao anúncio. |
| RF004   | Os anúncios devem permitir curtidas e comentários de outros usuários. |
| RF005   | O usuário deve receber notificações quando alguém comentar em seu anúncio. |
| RF006   | O usuário pode alterar o status de seu anúncio para "Resolvido" ou "Adotado". |
| RF007   | O sistema deve exibir uma timeline com os anúncios mais recentes. |

## 🚀 Requisitos Não Funcionais

| Código  | Descrição |
|---------|----------|
| RNF001  | O sistema deve ser responsivo e acessível em diferentes dispositivos. |
| RNF002  | O tempo de resposta das requisições deve ser inferior a 2 segundos. |
| RNF003  | O armazenamento das imagens deve ser feito via Supabase. |
| RNF004  | A validação dos dados deve ser realizada com Zod. |
| RNF005  | O banco de dados utilizado deve ser PostgreSQL. |
| RNF006  | A arquitetura do sistema deve seguir boas práticas de desenvolvimento, garantindo escalabilidade e manutenibilidade. |

## 📌 Diagrama de Classes
![Diagrama de Classes](./docs/diagrama_classes.png)

## 📌 Diagrama de Casos de Uso
![Diagrama de Casos de Uso](./docs/diagrama_casos_uso.png)

## 🤝 Contribuição
Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um **fork** do projeto.
2. Crie uma **branch** para sua feature (`git checkout -b minha-feature`).
3. **Commit** suas mudanças (`git commit -m 'Adicionando minha feature'`).
4. Faça o **push** para a branch (`git push origin minha-feature`).
5. Abra um **Pull Request**.

## 📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.

---
💡 **CãoPartilhe** - Conectando pessoas e ajudando animais a encontrarem um lar! 🏡🐾
