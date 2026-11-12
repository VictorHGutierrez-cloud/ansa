# ANSA McAL — apresentação Factorial IT

Página para mostrar ao cliente o **pacote de implementação v2.4**.

Segue a mesma ideia visual da proposta da Security Associates (cores Factorial, menu que acompanha o scroll). **Não tem calculadora de ROI.** O conteúdo segue o documento: propósito, escopo, arquitetura, fases, calendário por trimestre (TQ0), segurança e investimento.

O texto da página está em **inglês**, porque o pacote enviado à ANSA está em inglês.

---

## O que precisas no computador (uma vez)

1. Instalar **Node.js** versão 20 ou superior: https://nodejs.org  
   Escolhe a versão **LTS**.
2. Fecha e abre de novo o terminal do Cursor.
3. Confirma:

```powershell
node -v
npm -v
```

Se aparecerem números, está pronto.

---

## Ver o site no teu PC

1. Abre o terminal.
2. Entra nesta pasta:

```powershell
cd "c:\Users\victo\Documents\Projetos Random\Ultimate_Collector_Limpo\clients\ansa-mcal\apresentacao"
```

3. Instala as peças do site (só na primeira vez, ou se o `package.json` mudar):

```powershell
npm install
```

4. Liga o site:

```powershell
npm run dev
```

5. Abre no browser o endereço que o terminal mostrar. Nesta máquina a porta fixa é:

`http://localhost:5181`

6. Para desligar: no terminal, prime `Ctrl + C`.

---

## Site online (GitHub Pages)

Repositório: [VictorHGutierrez-cloud/ansa](https://github.com/VictorHGutierrez-cloud/ansa)

**URL pública (depois do primeiro deploy):**  
https://victorhgutierrez-cloud.github.io/ansa/

### Publicar alterações

1. Faz commit e push para a branch `main` **neste repositório** (`ansa`).
2. O workflow **Deploy to GitHub Pages** corre sozinho, faz `npm run build` e publica na branch `gh-pages`.
3. No GitHub: **Settings → Pages** → **Source** = **Deploy from a branch** → branch **`gh-pages`**, pasta **`/ (root)`**.

Se o deploy falhar com **404**, lê o ficheiro **`GITHUB_PAGES.md`** (passo a passo completo).

### Build local com o mesmo caminho do Pages

```powershell
$env:VITE_BASE="/ansa/"
npm run build
```

### PDF para o cliente

1. Abre o site no browser.  
2. `Ctrl + P` → **Save as PDF**.
