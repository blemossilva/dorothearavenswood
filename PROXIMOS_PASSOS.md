# 🚀 Próximos Passos — Deploy do Microsite

## ✅ URLs Configurados

Todos os URLs foram atualizados para:
**https://blemossilva.github.io/dorothearavenswood/**

Ficheiros atualizados:
- ✅ `index.html` (Open Graph, Twitter Cards, JSON-LD, Canonical)
- ✅ `sitemap.xml` (todas as secções)
- ✅ `robots.txt` (referência ao sitemap)

---

## 📦 Opção 1: Deploy Automatizado (Recomendado)

### Windows (PowerShell ou CMD)

```cmd
cd C:\dev\dorothearavenswood
deploy.bat
```

### Mac/Linux (Terminal)

```bash
cd /caminho/para/dorothearavenswood
./deploy.sh
```

**O script irá:**
1. ✅ Remover pasta `temp/` automaticamente
2. ✅ Inicializar Git (se necessário)
3. ✅ Adicionar remote do GitHub
4. ✅ Fazer commit de todos os ficheiros
5. ✅ Push para GitHub
6. ✅ Mostrar URL final e próximos passos

---

## 🔧 Opção 2: Deploy Manual

Se preferir fazer manualmente, siga os passos em:
**[GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md)**

### Resumo rápido:

```bash
# 1. Remover temp
rm -rf temp/

# 2. Inicializar Git
git init
git add .
git commit -m "Initial commit: Quinta Tia Dorothea Ravenswood"

# 3. Conectar ao GitHub
git branch -M main
git remote add origin https://github.com/blemossilva/dorothearavenswood.git
git push -u origin main

# 4. Ativar GitHub Pages
# Ir a: https://github.com/blemossilva/dorothearavenswood
# Settings > Pages > Source: main / (root) > Save
```

---

## 🌐 Após o Deploy

### Aguardar 1-3 minutos

O GitHub Pages irá processar automaticamente.

**Verificar status:**
https://github.com/blemossilva/dorothearavenswood/actions

### Aceder ao site

🌐 **https://blemossilva.github.io/dorothearavenswood/**

---

## ✅ Checklist de Validação

Após o site estar online, testar:

### Funcionalidades
- [ ] Hero carrega (imagem + texto)
- [ ] Navegação entre secções funciona (âncoras)
- [ ] Timeline anima no scroll
- [ ] Accordions abrem/fecham (produto)
- [ ] Todas as imagens aparecem
- [ ] Responsive em mobile (Chrome DevTools)
- [ ] Link "Comprar em Astor Wines" funciona

### Performance & SEO
- [ ] **PageSpeed Insights** (meta: 90+ performance)
  → https://pagespeed.web.dev/

- [ ] **Open Graph** (imagem aparece ao partilhar)
  → https://developers.facebook.com/tools/debug/

- [ ] **Twitter Card** (preview correto)
  → https://cards-dev.twitter.com/validator

- [ ] **Dados Estruturados** (Winery + Product detectados)
  → https://search.google.com/test/rich-results

- [ ] **Acessibilidade** (sem erros)
  → https://wave.webaim.org/

- [ ] **Navegação por teclado** (Tab, Enter, Esc)

---

## 📊 Submeter ao Google (Opcional)

### Google Search Console

1. Ir a: https://search.google.com/search-console
2. **Adicionar propriedade:** `https://blemossilva.github.io/dorothearavenswood/`
3. **Verificar** (método HTML tag ou DNS)
4. **Submeter sitemap:**
   ```
   https://blemossilva.github.io/dorothearavenswood/sitemap.xml
   ```

Permite monitorizar:
- Indexação no Google
- Palavras-chave que trazem tráfego
- Erros de crawling
- Performance de pesquisa

---

## 🔄 Atualizar o Site no Futuro

### Editar Conteúdo

1. **Textos:** Editar `index.html`
2. **Cores:** Editar `assets/css/ravenswood-custom.css`
3. **Imagens:** Substituir em `assets/img/`

### Fazer Deploy das Alterações

**Método Rápido (script):**
```bash
./deploy.sh "Descrição da alteração"
```

**Ou manualmente:**
```bash
git add .
git commit -m "Atualização: [descrição]"
git push origin main
```

O site atualiza automaticamente em 1-3 minutos.

---

## 📚 Documentação Disponível

- **[README.md](README.md)** — Guia completo de utilização
- **[IMPLEMENTACAO.md](IMPLEMENTACAO.md)** — Checklist técnica
- **[DEPLOY.md](DEPLOY.md)** — Métodos alternativos de deploy
- **[GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md)** — Guia específico GitHub Pages
- **Este ficheiro** — Próximos passos rápidos

---

## 🎨 Personalizações Futuras

### Alterar Paleta de Cores

Editar `assets/css/ravenswood-custom.css` (linhas 7-28):

```css
:root {
	--cor-escuro1: #333338;  /* Texto principal */
	--cor-claro1: #E6D2AA;   /* Fundo */
	--cor-escuro2: #5F2520;  /* Títulos (vinho) */
	--acc-1: #BA9256;        /* Dourado claro */
	--acc-2: #A37A3E;        /* Dourado queimado */
	/* ... */
}
```

### Adicionar Secção Nova

No `index.html`, duplicar uma `<section class="panel">` existente e adaptar.

### Substituir Imagens

1. Colocar novas em `assets/img/`
2. Criar versões responsivas (480w, 800w, 1200w, 1600w)
3. Atualizar paths no HTML

**Nota:** Usar ferramentas como `cwebp` ou `avif-cli` para gerar AVIF/WebP.

---

## 🐛 Resolução de Problemas Comuns

### Site não aparece após 5 minutos
→ Verificar **Actions**: https://github.com/blemossilva/dorothearavenswood/actions
→ Se erro vermelho, clicar para ver detalhes

### Imagens não carregam
→ Paths devem ser relativos: `assets/img/...` (não absolutos)
→ GitHub Pages é case-sensitive (verificar maiúsculas/minúsculas)
→ Limpar cache: Ctrl+Shift+R

### CSS não aplica
→ Verificar ordem no `<head>`: `main.css` ANTES de `ravenswood-custom.css`
→ Limpar cache do navegador

### Open Graph não mostra imagem
→ URL da imagem deve ser **absoluta**: `https://blemossilva.github.io/...` ✅
→ Usar [Facebook Debugger](https://developers.facebook.com/tools/debug/) para limpar cache
→ Imagem deve ter ≥ 200×200px (recomendado 1200×630) ✅

---

## 📞 Recursos Adicionais

### GitHub Pages
- https://docs.github.com/en/pages

### Template Ethereal
- https://html5up.net/ethereal

### Web Performance
- https://web.dev/measure/
- https://gtmetrix.com/

### Acessibilidade
- https://www.w3.org/WAI/WCAG22/quickref/
- https://www.deque.com/axe/

### SEO
- https://developers.google.com/search/docs
- https://schema.org/

---

## ✅ Resumo: O Que Fazer Agora

1. **Executar script de deploy** (`deploy.bat` ou `deploy.sh`)
2. **Aguardar 3 minutos** (GitHub Pages processar)
3. **Aceder ao site:** https://blemossilva.github.io/dorothearavenswood/
4. **Testar todas as funcionalidades** (checklist acima)
5. **Validar performance e SEO** (ferramentas linkadas)
6. **Partilhar nas redes sociais!** 🎉

---

## 🎉 Está Pronto!

O microsite **Quinta Tia Dorothea Ravenswood** está completo e configurado para deploy.

Basta executar o script de deploy e o site estará online em minutos.

---

🍇 **"Não é o tempo que faz o vinho, é o respeito por ele."**
— Dorothea Ravenswood (1780–1847)

---

**Projeto:** Microsite Quinta Tia Dorothea Ravenswood
**Equipa:** Grupo 4 — MBA ISAG Portugal
**Template:** Ethereal by HTML5 UP
**URL:** https://blemossilva.github.io/dorothearavenswood/
