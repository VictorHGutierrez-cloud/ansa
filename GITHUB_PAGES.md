# Ligar o site online (um passo no GitHub)

O código já está em https://github.com/VictorHGutierrez-cloud/ansa  
O **build** no GitHub Actions já funciona. O **deploy** só falha até ligares o Pages.

## Passo a passo (2 minutos)

1. Abre: https://github.com/VictorHGutierrez-cloud/ansa/settings/pages  
2. Em **Build and deployment** → **Source**, escolhe **GitHub Actions** (não “Deploy from a branch”).  
3. Vai a: https://github.com/VictorHGutierrez-cloud/ansa/actions/workflows/deploy-pages.yml  
4. Clica em **Run workflow** → **Run workflow** (botão verde).

Quando o workflow ficar verde, o site fica em:

**https://victorhgutierrez-cloud.github.io/ansa/**

## Atualizar o site depois

Na pasta do projeto no PC:

```powershell
cd "c:\Users\victo\Documents\Projetos Random\Ultimate_Collector_Limpo\clients\ansa-mcal\apresentacao"
git add .
git commit -m "Describe your change"
git push
```

Cada push na `main` volta a publicar sozinho.
