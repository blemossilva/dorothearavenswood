#!/bin/bash

# Script de Deploy para GitHub Pages
# Quinta Tia Dorothea Ravenswood
# https://blemossilva.github.io/dorothearavenswood/

set -e  # Parar em caso de erro

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                                                                ║"
echo "║   🍇 Deploy: Quinta Tia Dorothea Ravenswood                   ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Verificar se estamos no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute este script a partir da pasta do projeto!"
    exit 1
fi

# 1. Remover pasta temp se ainda existir
echo "📦 Verificando pasta temp..."
if [ -d "temp" ]; then
    echo "   → Removendo pasta temp/"
    rm -rf temp/
    echo "   ✅ Pasta temp removida"
else
    echo "   ✅ Pasta temp já não existe"
fi
echo ""

# 2. Verificar se Git está inicializado
echo "🔧 Configurando Git..."
if [ ! -d ".git" ]; then
    echo "   → Inicializando repositório Git"
    git init
    git branch -M main
    echo "   ✅ Git inicializado"
else
    echo "   ✅ Git já inicializado"
fi
echo ""

# 3. Verificar se remote origin existe
if ! git remote | grep -q "origin"; then
    echo "   → Adicionando remote origin"
    git remote add origin https://github.com/blemossilva/dorothearavenswood.git
    echo "   ✅ Remote adicionado"
else
    echo "   ✅ Remote já configurado"
fi
echo ""

# 4. Adicionar todos os ficheiros
echo "📝 Adicionando ficheiros ao Git..."
git add .
echo "   ✅ Ficheiros adicionados"
echo ""

# 5. Criar commit
echo "💾 Criando commit..."
if [ -z "$1" ]; then
    COMMIT_MSG="Deploy: Atualização do microsite Ravenswood ($(date '+%Y-%m-%d %H:%M'))"
else
    COMMIT_MSG="$1"
fi

git commit -m "$COMMIT_MSG" || echo "   ℹ️  Nada para commitar (sem alterações)"
echo ""

# 6. Push para GitHub
echo "🚀 Enviando para GitHub..."
git push -u origin main
echo "   ✅ Push concluído"
echo ""

# 7. Informações finais
echo "╔════════════════════════════════════════════════════════════════╗"
echo "║                                                                ║"
echo "║   ✅ DEPLOY CONCLUÍDO COM SUCESSO!                            ║"
echo "║                                                                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "🌐 URL do site: https://blemossilva.github.io/dorothearavenswood/"
echo ""
echo "⏳ O GitHub Pages irá processar o deploy em 1-3 minutos."
echo "   Verificar status em:"
echo "   https://github.com/blemossilva/dorothearavenswood/actions"
echo ""
echo "📊 Após o deploy, testar:"
echo "   • Performance: https://pagespeed.web.dev/"
echo "   • Open Graph: https://developers.facebook.com/tools/debug/"
echo "   • Acessibilidade: https://wave.webaim.org/"
echo ""
echo "🍇 Elegância do Douro desde 1806"
echo ""
