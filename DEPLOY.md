# Guia Rápido de Deploy — Quinta Tia Dorothea Ravenswood

## 🚀 Deploy Rápido (5 minutos)

### Opção 1: GitHub Pages (Grátis, Recomendado)

1. **Criar repositório no GitHub:**
   ```bash
   cd C:/dev/dorothearavenswood
   git init
   git add .
   git commit -m "Initial commit - Quinta Ravenswood"
   git branch -M main
   git remote add origin https://github.com/SEU-USERNAME/ravenswood.git
   git push -u origin main
   ```

2. **Ativar GitHub Pages:**
   - Ir a: `Settings` > `Pages`
   - Source: `Deploy from a branch`
   - Branch: `main` / `root`
   - Guardar

3. **Aceder ao site:**
   - URL: `https://SEU-USERNAME.github.io/ravenswood/`

4. **Atualizar URLs no código:**
   - Editar `index.html` (linhas 19, 22, 26-29, 32):
     ```html
     <link rel="canonical" href="https://SEU-USERNAME.github.io/ravenswood/" />
     <meta property="og:url" content="https://SEU-USERNAME.github.io/ravenswood/" />
     <meta property="og:image" content="https://SEU-USERNAME.github.io/ravenswood/assets/img/og-hero-1200x630.jpg" />
     ```

---

### Opção 2: Netlify (Grátis, Deploy Instantâneo)

1. **Ir a [Netlify Drop](https://app.netlify.com/drop)**

2. **Arrastar a pasta `dorothearavenswood` para a página**

3. **Aguardar deploy (30-60 segundos)**

4. **Obter URL:**
   - Netlify gera automaticamente: `https://nome-aleatorio.netlify.app`
   - Pode personalizar em: `Site settings` > `Change site name`

5. **Atualizar URLs no `index.html` conforme acima**

---

### Opção 3: Vercel (Grátis, Deploy via Git)

1. **Instalar Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd C:/dev/dorothearavenswood
   vercel
   ```

3. **Seguir instruções no terminal**

4. **URL gerado automaticamente:** `https://ravenswood.vercel.app`

---

### Opção 4: Hosting Tradicional (cPanel, FTP)

1. **Ligar via FTP ao servidor:**
   - Cliente: FileZilla, WinSCP, ou painel web

2. **Fazer upload de todos os ficheiros para `public_html` ou `www`:**
   ```
   public_html/
   ├── index.html
   ├── robots.txt
   ├── sitemap.xml
   ├── assets/
   └── (todos os ficheiros)
   ```

3. **Garantir que `index.html` está na raiz**

4. **Aceder via domínio:** `https://seudominio.pt`

5. **Atualizar URLs no `index.html` com o domínio real**

---

## ✅ Checklist Pré-Deploy

Antes de fazer deploy, verificar:

- [ ] **Remover pasta `temp/`:**
  ```bash
  rm -rf C:/dev/dorothearavenswood/temp
  ```

- [ ] **Atualizar URLs:**
  - Linha 19: `<link rel="canonical" href="https://SEU-DOMINIO/" />`
  - Linha 22: `<meta property="og:image" content="https://SEU-DOMINIO/assets/img/og-hero-1200x630.jpg" />`
  - Linha 63: `"url": "https://SEU-DOMINIO"`
  - `sitemap.xml`: substituir todas as URLs

- [ ] **Validar HTML:**
  - [W3C Validator](https://validator.w3.org/)

- [ ] **Testar em mobile:**
  - Chrome DevTools > Device Mode
  - Testar em dispositivo real

- [ ] **Verificar imagens:**
  - Todas carregam corretamente?
  - Lazy loading funciona?

- [ ] **Testar acessibilidade:**
  - Navegação por teclado (Tab, Enter)
  - Contraste de cores (WAVE, axe)

---

## 🔧 Configurações Opcionais Pós-Deploy

### Custom Domain (Domínio Próprio)

#### GitHub Pages
1. `Settings` > `Pages` > `Custom domain`
2. Adicionar: `ravenswood.pt`
3. Configurar DNS:
   ```
   Tipo  Nome   Valor
   A     @      185.199.108.153
   A     @      185.199.109.153
   A     @      185.199.110.153
   A     @      185.199.111.153
   CNAME www    SEU-USERNAME.github.io
   ```

#### Netlify
1. `Domain settings` > `Add custom domain`
2. Seguir instruções DNS

### HTTPS (SSL)
- **GitHub Pages:** Automático após configurar domínio
- **Netlify/Vercel:** Automático (Let's Encrypt)
- **Hosting tradicional:** Usar Let's Encrypt ou SSL do painel

### Google Search Console
1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Adicionar propriedade (URL do site)
3. Verificar via HTML tag ou DNS
4. Submeter sitemap: `https://SEU-DOMINIO/sitemap.xml`

### Google Analytics (Opcional)
Adicionar antes de `</head>` em `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📊 Testar Após Deploy

### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

**Métricas esperadas:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### SEO
- [Schema Validator](https://validator.schema.org/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Acessibilidade
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- Navegação por teclado manual

---

## 🐛 Troubleshooting

### Imagens não aparecem
- Verificar paths (devem ser relativos: `assets/img/...`)
- Verificar capitalização (Linux é case-sensitive)
- Limpar cache do navegador (Ctrl+Shift+R)

### CSS não aplicado
- Verificar link no `<head>`: `<link rel="stylesheet" href="assets/css/ravenswood-custom.css" />`
- Verificar ordem (custom.css deve vir DEPOIS de main.css)
- Limpar cache

### Timeline não anima
- Verificar console do navegador (F12)
- Verificar se `ravenswood-custom.js` está carregado
- Testar em navegador moderno (Chrome, Firefox, Edge)

### Open Graph não funciona
- URLs devem ser absolutas: `https://dominio.pt/assets/img/og-hero.jpg`
- Imagem OG deve ser ≥ 200x200px (recomendado 1200x630)
- Testar em [opengraph.xyz](https://www.opengraph.xyz/)
- Facebook cache: usar [Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

## 📞 Suporte

**Documentação completa:** Ver [README.md](README.md)
**Detalhes de implementação:** Ver [IMPLEMENTACAO.md](IMPLEMENTACAO.md)

**Template Ethereal:**
- [HTML5 UP](https://html5up.net)
- [Documentação](https://html5up.net/ethereal)

---

## 🎉 Deploy Completo!

Após seguir um dos métodos acima, o site estará acessível publicamente.

**Próximos passos:**
1. Partilhar URL com a equipa
2. Submeter sitemap ao Google
3. Monitorizar Analytics (se configurado)
4. Partilhar nas redes sociais

🍇 **Elegância do Douro desde 1806**
