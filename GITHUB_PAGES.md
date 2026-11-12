# Corrigir o erro 404 do GitHub Pages

## O que significa o erro

Mensagem típica:

`Failed to create deployment (status: 404)`  
`Ensure GitHub Pages has been enabled`

O **build** (npm install + build) já está OK. O GitHub **ainda não ligou o Pages** neste repositório, ou a fonte está errada.

O aviso `punycode is deprecated` é **normal** — podes ignorar.

---

## Passo a passo (recomendado)

Este projeto publica o site na branch **`gh-pages`**. Não uses a opção “GitHub Actions” como fonte — usa **branch**.

### 1) Fazer o workflow correr (cria a branch `gh-pages`)

1. Abre: https://github.com/VictorHGutierrez-cloud/ansa/actions/workflows/deploy-pages.yml  
2. **Run workflow** → **Run workflow** (branch `main`).  
3. Espera ficar **verde**.  
   - Se falhar no npm, diz-me.  
   - Se ficar verde, a branch `gh-pages` já existe com o site compilado.

### 2) Ligar o Pages no repositório (obrigatório)

1. Abre: https://github.com/VictorHGutierrez-cloud/ansa/settings/pages  
2. Em **Build and deployment** → **Source**, escolhe **Deploy from a branch**.  
3. **Branch:** `gh-pages` · pasta **`/ (root)`** → **Save**.  
4. Espera 1–3 minutos.

### 3) Ver o site

**https://victorhgutierrez-cloud.github.io/ansa/**

---

## Se não vires a branch `gh-pages` no passo 2

Corre primeiro o workflow (passo 1). Só depois volta a **Settings → Pages**.

---

## Atualizar o site no futuro

```powershell
cd "c:\Users\victo\Documents\Projetos Random\Ultimate_Collector_Limpo\clients\ansa-mcal\apresentacao"
git add .
git commit -m "Describe your change"
git push
```

Cada push na `main` volta a correr o workflow e actualiza `gh-pages`.

---

## Opcional — GitHub CLI (se fizeres login)

```powershell
gh auth login
gh workflow run deploy-pages.yml -R VictorHGutierrez-cloud/ansa
```

Depois fazes sempre o **passo 2** na web (Settings → Pages).
