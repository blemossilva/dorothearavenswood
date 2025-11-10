# Quinta Tia Dorothea Ravenswood — Microsite

**Elegância do Douro desde 1806**

Microsite premium para a Quinta Tia Dorothea Ravenswood, apresentando a história da fundadora Dorothea Ravenswood e o produto emblemático **Ravenswood Tawny 40 Anos**.

---

## 📋 Sobre o Projeto

**Projeto académico:** Trabalho do Grupo 4 — Disciplina de Marketing, 10.º MBA ISAG — Portugal

**Template base:** [Ethereal by HTML5 UP](https://html5up.net/ethereal)
**Licença do template:** Creative Commons Attribution 3.0 (CCA 3.0)

---

## 🎨 Paleta de Cores

A identidade visual reflete a elegância e o legado da quinta:

| Cor               | Hex       | Uso                                    |
|-------------------|-----------|----------------------------------------|
| Escuro 1          | `#333338` | Texto padrão                           |
| Claro 1 (Bege)    | `#E6D2AA` | Fundo principal                        |
| Escuro 2 (Vinho)  | `#5F2520` | Títulos e contraste                    |
| Claro 2 (Dourado) | `#D9BE90` | Fundos suaves                          |
| Acento 1          | `#BA9256` | Dourado claro (destaque)               |
| Acento 2          | `#A37A3E` | Dourado queimado (hover/botões)        |
| Acento 3          | `#7D5B32` | Castanho médio (elementos secundários) |
| Acento 4          | `#C8A773` | Dourado suave (ícones/molduras)        |

As cores estão definidas como variáveis CSS em [assets/css/ravenswood-custom.css](assets/css/ravenswood-custom.css).

---

## 📂 Estrutura do Projeto

```
dorothearavenswood/
├── index.html                    # Página principal
├── robots.txt                    # Regras para crawlers
├── sitemap.xml                   # Mapa do site
├── README.md                     # Este ficheiro
├── assets/
│   ├── css/
│   │   ├── main.css              # CSS do template Ethereal
│   │   ├── ravenswood-custom.css # CSS personalizado (paleta + componentes)
│   │   └── noscript.css          # Fallback sem JavaScript
│   ├── js/
│   │   ├── jquery.min.js         # jQuery (template)
│   │   ├── browser.min.js        # Detecção de browser (template)
│   │   ├── breakpoints.min.js    # Responsive breakpoints (template)
│   │   ├── main.js               # JavaScript principal (template)
│   │   └── ravenswood-custom.js  # JS customizado (timeline, accordions)
│   ├── img/
│   │   ├── hero-quinta-*.jpg     # Imagens hero (responsive)
│   │   ├── dorothea-portrait-*.jpg # Retrato Dorothea (responsive)
│   │   ├── ravenswood-40-*.jpg   # Produto (responsive)
│   │   ├── mapa-douro-static.jpg # Mapa estático
│   │   └── og-hero-1200x630.jpg  # Imagem Open Graph
│   └── webfonts/                 # Fontes Font Awesome
└── temp/                         # [PODE SER REMOVIDA após deploy]
    ├── resumo_história.md
    ├── produto_Ravenswood_Tawny_40_Anos.md
    └── [imagens originais]
```

---

## 🚀 Como Usar

### 1. Visualização Local

Abra o ficheiro `index.html` num navegador moderno (Chrome, Firefox, Edge, Safari).

**Nota:** Para funcionalidades completas (AJAX, fontes externas), recomenda-se servir via HTTP:

```bash
# Opção 1: Python 3
python -m http.server 8000

# Opção 2: Node.js (http-server)
npx http-server -p 8000

# Aceder a: http://localhost:8000
```

### 2. Deployment (Publicação)

#### GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload de todos os ficheiros (exceto `temp/`)
3. Ative GitHub Pages nas configurações do repositório
4. Aceda via `https://<username>.github.io/<repo-name>/`

#### Netlify / Vercel
1. Arraste a pasta do projeto para [Netlify Drop](https://app.netlify.com/drop) ou conecte via Git
2. Deploy automático

#### Hosting tradicional (cPanel, FTP)
1. Faça upload de todos os ficheiros (exceto `temp/`) para o diretório `public_html` ou `www`
2. Certifique-se de que `index.html` está na raiz

---

## ✏️ Atualizar Conteúdo

### Textos

Edite diretamente o ficheiro [index.html](index.html):

- **Hero (linha ~115):** Título e subtítulo
- **Fundadora (linha ~141):** Biografia de Dorothea
- **Cronologia (linha ~201):** Eventos históricos
- **Produto (linha ~306):** Descrição do Tawny 40 Anos
- **Contacto (linha ~382):** Email, telefone, morada

### Cores

Edite as variáveis CSS em [assets/css/ravenswood-custom.css](assets/css/ravenswood-custom.css) (linhas 7-28):

```css
:root {
	--cor-escuro1: #333338;
	--cor-claro1: #E6D2AA;
	/* ... */
}
```

### Imagens

Substitua os ficheiros em `assets/img/`:

- **Hero:** `hero-quinta-*.jpg` (criar versões 480w, 800w, 1200w, 1600w)
- **Dorothea:** `dorothea-portrait-*.jpg` (480w, 800w)
- **Produto:** `ravenswood-40-*.jpg` (480w, 800w, 1200w)

**Importante:** Manter os nomes de ficheiro ou atualizar os paths no HTML.

---

## ♿ Acessibilidade

O site cumpre **WCAG 2.2 Level AA**:

- ✅ **Contraste de texto:** Mínimo 4.5:1 (AA)
- ✅ **Contraste de elementos UI:** Mínimo 3:1
- ✅ **Skip link:** Permite saltar para conteúdo principal
- ✅ **Navegação por teclado:** Todos os elementos interativos acessíveis via Tab
- ✅ **Focus visível:** Outline de 3px em todos os elementos focáveis
- ✅ **ARIA labels:** Accordions e navegação com atributos apropriados
- ✅ **Alt text:** Todas as imagens com descrições

**Testar acessibilidade:**
- [WAVE Extension](https://wave.webaim.org/extension/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Navegação por teclado (Tab, Enter, Space)

---

## ⚡ Performance

### Otimizações Implementadas

- ✅ **Lazy loading** nativo (`loading="lazy"`) em imagens não críticas
- ✅ **Responsive images** com `srcset` e `sizes`
- ✅ **Preload** de CSS e fontes críticas
- ✅ **Minificação** de CSS/JS (template já minificado)
- ✅ **Aspect-ratio** definido para evitar layout shift
- ✅ **Dados estruturados** (JSON-LD) para SEO

### Otimizações Futuras (Opcional)

Para melhorar ainda mais:

1. **Converter imagens para AVIF/WebP:**
   ```bash
   # Instalar cwebp (WebP)
   cwebp -q 85 hero-quinta-1600.jpg -o hero-quinta-1600.webp

   # Instalar avif-cli (AVIF)
   avif --input hero-quinta-1600.jpg --output hero-quinta-1600.avif --quality 80
   ```

2. **Usar elemento `<picture>` para formatos modernos:**
   ```html
   <picture>
     <source srcset="hero-quinta-800.avif" type="image/avif">
     <source srcset="hero-quinta-800.webp" type="image/webp">
     <img src="hero-quinta-800.jpg" alt="...">
   </picture>
   ```

3. **Minificar HTML:**
   ```bash
   npm install -g html-minifier
   html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
   ```

---

## 🔍 SEO

### Metadados Implementados

- ✅ **Title & Description:** Otimizados para motores de busca
- ✅ **Open Graph:** Partilha em redes sociais (Facebook, LinkedIn)
- ✅ **Twitter Cards:** Partilha no Twitter/X
- ✅ **JSON-LD:** Dados estruturados para Google (Winery + Product)
- ✅ **Canonical URL:** Previne conteúdo duplicado
- ✅ **Sitemap.xml:** Mapa do site para crawlers
- ✅ **Robots.txt:** Instruções para motores de busca

### Testar SEO

- [Google Search Console](https://search.google.com/search-console)
- [Schema Markup Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)

---

## 📦 Tecnologias Utilizadas

- **HTML5:** Semântica moderna
- **CSS3:** Variáveis CSS, Grid, Flexbox, animações
- **JavaScript (Vanilla):** Intersection Observer, Smooth Scroll, Accordions
- **jQuery:** Utilizado pelo template Ethereal
- **Font Awesome:** Ícones (incluído no template)
- **Google Fonts:** Source Sans Pro

---

## 📜 Licenças

### Template Base
**Ethereal by HTML5 UP**
Licença: Creative Commons Attribution 3.0 (CCA 3.0)
Autor: [@ajlkn](https://twitter.com/ajlkn)
[html5up.net](https://html5up.net)

**Obrigação:** Manter crédito visível no rodapé (já incluído).

### Conteúdo Customizado
© Quinta Tia Dorothea Ravenswood (conteúdo fictício)
Trabalho académico — Grupo 4, MBA ISAG Portugal

---

## 🛠️ Suporte

Para questões sobre o projeto:

- **Email:** [grupo4@isag.pt](mailto:grupo4@isag.pt) *(exemplo)*
- **Issues:** Criar issue neste repositório (se publicado no GitHub)

Para questões sobre o template Ethereal:
- [HTML5 UP](https://html5up.net)

---

## ✅ Checklist de Deploy

Antes de publicar:

- [ ] Remover pasta `temp/` (imagens já copiadas para `assets/img/`)
- [ ] Atualizar URL canonical em `index.html` (linha 32)
- [ ] Atualizar URLs das imagens Open Graph (linhas 22, 29)
- [ ] Atualizar Sitemap com URL de produção (se diferente)
- [ ] Testar em dispositivos móveis (Chrome DevTools)
- [ ] Validar HTML ([validator.w3.org](https://validator.w3.org/))
- [ ] Validar acessibilidade (WAVE, axe)
- [ ] Testar velocidade (Lighthouse, PageSpeed Insights)
- [ ] Validar dados estruturados (Schema Validator)
- [ ] Configurar Google Analytics (opcional)

---

## 🎓 Créditos

**Projeto:** Microsite Quinta Tia Dorothea Ravenswood
**Equipa:** Grupo 4 — Disciplina de Marketing, 10.º MBA ISAG — Portugal
**Template:** Ethereal by HTML5 UP ([@ajlkn](https://twitter.com/ajlkn))
**Ano:** 2025

---

**Bom trabalho! 🍇**
