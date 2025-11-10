@echo off
REM Script de Deploy para GitHub Pages (Windows)
REM Quinta Tia Dorothea Ravenswood
REM https://blemossilva.github.io/dorothearavenswood/

echo ================================================================
echo.
echo    DEPLOY: Quinta Tia Dorothea Ravenswood
echo.
echo ================================================================
echo.

REM Verificar se estamos no diretório correto
if not exist "index.html" (
    echo ERRO: Execute este script a partir da pasta do projeto!
    pause
    exit /b 1
)

REM 1. Remover pasta temp se ainda existir
echo Verificando pasta temp...
if exist "temp" (
    echo    - Removendo pasta temp/
    rmdir /s /q temp
    echo    OK: Pasta temp removida
) else (
    echo    OK: Pasta temp ja nao existe
)
echo.

REM 2. Verificar se Git está instalado
where git >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERRO: Git nao esta instalado!
    echo Baixe em: https://git-scm.com/downloads
    pause
    exit /b 1
)

REM 3. Inicializar Git se necessário
echo Configurando Git...
if not exist ".git" (
    echo    - Inicializando repositorio Git
    git init
    git branch -M main
    echo    OK: Git inicializado
) else (
    echo    OK: Git ja inicializado
)
echo.

REM 4. Configurar remote se necessário
git remote | findstr "origin" >nul
if %ERRORLEVEL% neq 0 (
    echo    - Adicionando remote origin
    git remote add origin https://github.com/blemossilva/dorothearavenswood.git
    echo    OK: Remote adicionado
) else (
    echo    OK: Remote ja configurado
)
echo.

REM 5. Adicionar ficheiros
echo Adicionando ficheiros ao Git...
git add .
echo    OK: Ficheiros adicionados
echo.

REM 6. Criar commit
echo Criando commit...
if "%~1"=="" (
    set "COMMIT_MSG=Deploy: Atualizacao do microsite Ravenswood (%date% %time%)"
) else (
    set "COMMIT_MSG=%~1"
)

git commit -m "%COMMIT_MSG%" || echo    INFO: Nada para commitar (sem alteracoes)
echo.

REM 7. Push para GitHub
echo Enviando para GitHub...
git push -u origin main
if %ERRORLEVEL% equ 0 (
    echo    OK: Push concluido
) else (
    echo    ERRO: Falha no push. Verifique suas credenciais.
    pause
    exit /b 1
)
echo.

REM 8. Informações finais
echo ================================================================
echo.
echo    DEPLOY CONCLUIDO COM SUCESSO!
echo.
echo ================================================================
echo.
echo URL do site: https://blemossilva.github.io/dorothearavenswood/
echo.
echo O GitHub Pages ira processar o deploy em 1-3 minutos.
echo Verificar status em:
echo https://github.com/blemossilva/dorothearavenswood/actions
echo.
echo Apos o deploy, testar:
echo   - Performance: https://pagespeed.web.dev/
echo   - Open Graph: https://developers.facebook.com/tools/debug/
echo   - Acessibilidade: https://wave.webaim.org/
echo.
echo Elegancia do Douro desde 1806
echo.
pause
