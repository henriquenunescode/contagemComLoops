# 🔢 Contador com Loops

Projeto de exercício em JavaScript puro que implementa um **contador interativo** com contagem crescente ou decrescente, controlada pelo usuário por meio de três parâmetros: início, fim e passo.

---

## 📁 Estrutura do Projeto

```
contagemComLoops/
├── index.html   → Estrutura da página
├── style.css    → Estilização visual
└── script.js    → Lógica de contagem com loops
```

---

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno.
2. Preencha os três campos:
   - **Início** — número de onde a contagem começa
   - **Fim** — número onde a contagem termina
   - **Passo** — de quanto em quanto o contador avança ou recua
3. Clique em **Enviar**.
4. O resultado aparece logo abaixo no formato: `1 👉 2 👉 3 👉 ... FIM!`

---

## 🗂️ Descrição dos Arquivos

### `index.html`

Estrutura principal da página em HTML5, configurada para português (`lang="pt-BR"`).

- **`<h1>`** — Título "Contador" exibido no topo da página.
- **`<section>`** — Contém dois `<div>`:
  - `#div1` — Formulário com os campos de **Inicio**, **Fim** e **Passo** (todos do tipo `number`) e o botão **Enviar**.
  - `#div2` — Área de resultado onde a sequência gerada é exibida dinamicamente. Inclui um exemplo padrão (`ex: 1 > 2 > 3 > 4...`).
- **`<footer>`** — Rodapé com crédito do autor: *Henrique Bonito*.
- O script é carregado com `defer`, garantindo que o DOM esteja pronto antes da execução.

---

### `script.js`

Contém toda a lógica do contador, acionada pelo clique no botão **Enviar**.

#### Seleção de elementos

```js
const inputInicio  = document.querySelector("#inicio")
const inputFim     = document.querySelector("#fim")
const inputPasso   = document.querySelector("#passo")
const inputButton  = document.querySelector("#btnEnviar")
const divResultado = document.querySelector("#div2")
```

#### Fluxo de execução ao clicar em Enviar

1. **Leitura dos valores** — Os três inputs são convertidos para `Number`.
2. **Validações** (com `alert` e `return` para interromper):
   - Campos vazios → `"Insira valores em TODOS os campos!"`
   - Passo igual a zero → `"Impossivel percorrer!"` (evita loop infinito)
   - Passo maior que a diferença entre início e fim → `"Impossivel percorrer!"` (evita pular o intervalo inteiro)
3. **Limpeza do resultado anterior** — `divResultado.innerHTML = ""`
4. **Loop de contagem:**
   - Se `início < fim` → loop **crescente** (`index += p`)
   - Se `início > fim` → loop **decrescente** (`index -= p`)
   - Cada valor é adicionado ao `innerHTML` com o separador `👉`
5. **Finalização** — Adiciona `" FIM!"` ao resultado.
6. **Reset** — Limpa os três campos e retorna o foco para o input de início.

---

### `style.css`

Define a identidade visual do projeto, com tons de azul e sombras para dar profundidade.

| Seletor      | Descrição                                                                 |
|--------------|---------------------------------------------------------------------------|
| `body`       | Fundo azul vibrante (`rgb(84, 84, 255)`)                                  |
| `h1`         | Título branco, centralizado, tamanho 50px com sombra azul-escura          |
| `section`    | Card central com fundo cinza claro, bordas arredondadas e sombra lateral  |
| `#btnEnviar` | Botão estilizado em azul com sombra, bordas arredondadas e cursor pointer  |
| `#div2`      | Área de resultado com margem superior e texto em itálico                  |
| `#div2 p`    | Texto de exemplo em cinza, fonte Franklin Gothic, tamanho reduzido        |
| `footer`     | Rodapé centralizado, fonte Courier New, itálico e cor branca              |

> **Observação:** O bloco `#div1 { text-shadow: ... }` está presente no CSS, porém **comentado** — indica um estilo testado e desativado durante o desenvolvimento.

---

## 🧠 Conceitos Praticados

- Manipulação do DOM com `querySelector` e `innerHTML`
- Loops `for` com incremento e decremento dinâmico
- Validação de entradas do usuário
- Eventos com `addEventListener`
- Conversão de tipos com `Number()`
- Estilização com CSS puro (sombras, bordas, fontes, layout centralizado)

