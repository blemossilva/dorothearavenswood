# Deploy para GitHub Pages — Quinta Tia Dorothea Ravenswood

## 🚀 Guia Rápido de Deploy

O site está configurado para ser publicado em:
**https://blemossilva.github.io/dorothearavenswood/**

---

## 📋 Pré-requisitos

1. **Git instalado** ([download aqui](https://git-scm.com/downloads))
2. **Conta GitHub** (github.com/blemossilva)
3. **Pasta `temp/` removida** (já não é necessária)

---

## 🔧 Passo a Passo

### 1. Remover pasta temporária (se ainda não o fez)

```bash
cd C:/dev/dorothearavenswood
rm -rf temp/
```

### 2. Inicializar repositório Git

```bash
cd C:/dev/dorothearavenswood
git init
git add .
git commit -m "Initial commit: Quinta Tia Dorothea Ravenswood microsite"
```

### 3. Criar repositório no GitHub

**Opção A: Via interface web (Recomendado)**

1. Ir a: https://github.com/new
2. **Repository name:** `dorothearavenswood`
3. **Description:** "Microsite premium da Quinta Tia Dorothea Ravenswood — Elegância do Douro desde 1806"
4. **Visibilidade:** Public (para GitHub Pages grátis)
5. **NÃO** marcar "Add README" (já existe)
6. Clicar "Create repository"

**Opção B: Via GitHub CLI (se instalado)**

```bash
gh repo create dorothearavenswood --public --description "Microsite Quinta Tia Dorothea Ravenswood"
```

### 4. Conectar repositório local ao GitHub

```bash
git branch -M main
git remote add origin https://github.com/blemossilva/dorothearavenswood.git
git push -u origin main
```

**Nota:** Se pedir autenticação, usar Personal Access Token (não senha):
- Criar token em: https://github.com/settings/tokens
- Scopes necessários: `repo`, `workflow`

### 5. Ativar GitHub Pages

1. Ir ao repositório: https://github.com/blemossilva/dorothearavenswood
2. Clicar em **Settings** (⚙️)
3. No menu lateral: **Pages**
4. Em **Source**:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clicar **Save**

### 6. Aguardar deploy (1-3 minutos)

O GitHub irá construir e publicar o site automaticamente.

Verificar status em:
- **Actions** tab (https://github.com/blemossilva/dorothearavenswood/actions)

### 7. Aceder ao site

Após deploy completo, o site estará disponível em:

🌐 **https://blemossilva.github.io/dorothearavenswood/**

---

## ✅ Verificação Pós-Deploy

### Testar Funcionalidades

- [ ] **Hero carrega corretamente** (imagem + texto)
- [ ] **Navegação entre secções** funciona (links âncora)
- [ ] **Timeline anima** ao fazer scroll
- [ ] **Accordions abrem/fecham** (ficha técnica do produto)
- [ ] **Imagens carregam** em todas as secções
- [ ] **Responsive** em mobile (testar com Chrome DevTools)
- [ ] **Link de compra** funciona (Astor Wines)

### Validar SEO & Performance

1. **Open Graph:**
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Inserir URL: `https://blemossilva.github.io/dorothearavenswood/`
   - Verificar se imagem OG aparece corretamente

2. **Twitter Card:**
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Verificar preview

3. **Dados Estruturados:**
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - Deve detectar: Winery + Product

4. **Performance:**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - Inserir URL do site
   - **Meta:** Performance 90+, Accessibility 95+

5. **Acessibilidade:**
   - [WAVE](https://wave.webaim.org/)
   - Testar navegação por teclado (Tab, Enter, Esc)

---

## 🔄 Atualizar o Site (Futuras Edições)

Após fazer alterações locais:

```bash
cd C:/dev/dorothearavenswood

# Adicionar ficheiros modificados
git add .

# Criar commit descritivo
git commit -m "Atualizar [descrição das alterações]"

# Enviar para GitHub
git push origin main
```

O GitHub Pages irá **automaticamente redesenhar** o site em 1-3 minutos.

---

## 📊 Google Search Console (Opcional)

Para monitorizar SEO:

1. Ir a: https://search.google.com/search-console
2. **Add property:** `https://blemossilva.github.io/dorothearavenswood/`
3. **Verificar via HTML tag** (copiar meta tag para `<head>`)
4. **Submeter sitemap:**
   ```
   https://blemossilva.github.io/dorothearavenswood/sitemap.xml
   ```

---

## 🎨 Personalização Futura

### Alterar Cores

Editar [assets/css/ravenswood-custom.css](assets/css/ravenswood-custom.css) (linhas 7-28):

```css
:root {
	--cor-escuro1: #333338;
	--cor-claro1: #E6D2AA;
	/* ... */
}
```

### Alterar Textos

Editar [index.html](index.html):
- Hero: linha ~115
- Fundadora: linha ~141
- Cronologia: linha ~201
- Produto: linha ~306

### Substituir Imagens

1. Colocar novas imagens em `assets/img/`
2. **Importante:** Manter nomes ou atualizar referências no HTML
3. Criar versões responsivas:
   - Hero: 480w, 800w, 1200w, 1600w
   - Dorothea: 480w, 800w
   - Produto: 480w, 800w, 1200w

---

## 🐛 Troubleshooting

### Site não aparece após 5 minutos

1. Verificar **Actions** tab: https://github.com/blemossilva/dorothearavenswood/actions
2. Se houver erro, clicar no workflow para ver detalhes
3. Problema comum: ficheiros com caracteres especiais → renomear

### Imagens não carregam

1. Verificar paths no HTML (devem ser relativos: `assets/img/...`)
2. Verificar capitalização (GitHub Pages é case-sensitive)
3. Limpar cache do navegador: Ctrl+Shift+R

### CSS não aplicado

1. Verificar ordem no `<head>`:
   ```html
   <link rel="stylesheet" href="assets/css/main.css" />
   <link rel="stylesheet" href="assets/css/ravenswood-custom.css" />
   ```
2. Limpar cache

### Open Graph não funciona

1. URLs devem ser **absolutas** (já configuradas)
2. Imagem OG deve ter ≥ 200×200px (recomendado 1200×630) ✅
3. Usar [Facebook Debugger](https://developers.facebook.com/tools/debug/) para limpar cache

---

## 📞 Suporte

**Documentação:**
- [README.md](README.md) — Guia completo
- [IMPLEMENTACAO.md](IMPLEMENTACAO.md) — Detalhes técnicos
- [DEPLOY.md](DEPLOY.md) — Métodos alternativos de deploy

**GitHub Pages Docs:**
- https://docs.github.com/en/pages

**Template Ethereal:**
- https://html5up.net/ethereal

---

## ✅ Checklist Final

Antes de considerar o deploy completo:

- [ ] Repositório criado e push feito
- [ ] GitHub Pages ativado (Settings > Pages)
- [ ] Site acessível em https://blemossilva.github.io/dorothearavenswood/
- [ ] Todas as secções carregam corretamente
- [ ] Timeline anima no scroll
- [ ] Accordions funcionam
- [ ] Imagens aparecem (hero, Dorothea, produto, mapa)
- [ ] Responsive em mobile testado
- [ ] Performance testado (PageSpeed Insights)
- [ ] Open Graph testado (Facebook Debugger)
- [ ] Acessibilidade testada (WAVE + navegação teclado)

---

## 🎉 Site Publicado!

**URL final:** https://blemossilva.github.io/dorothearavenswood/

Partilhar nas redes sociais:
- LinkedIn (Open Graph otimizado)
- Facebook (imagem 1200×630)
- Twitter/X (Twitter Cards)
- Email (copiar URL)

🍇 **Elegância do Douro desde 1806**

---

**Desenvolvido por:** Grupo 4 — MBA ISAG Portugal
**Template:** Ethereal by HTML5 UP
**Data:** Novembro 2025
