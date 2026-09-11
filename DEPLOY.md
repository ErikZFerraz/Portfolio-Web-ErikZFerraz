# Como publicar — Erik Zanetti Ferraz

## 1. Enviar este projeto para o GitHub

O repositório de destino é:

`https://github.com/ErikZFerraz/Portfolio-Web-ErikZFerraz`

Como o repositório já possui um README, a forma mais segura é cloná-lo primeiro e depois copiar os arquivos deste projeto para dentro da pasta clonada.

```bash
git clone https://github.com/ErikZFerraz/Portfolio-Web-ErikZFerraz.git
cd Portfolio-Web-ErikZFerraz
```

Copie para essa pasta todos os arquivos do projeto entregue, substituindo o README existente quando solicitado. Depois execute:

```bash
git add .
git commit -m "feat: novo portfolio profissional"
git push origin main
```

## 2. Publicar na Vercel

1. Entre em `vercel.com` usando a conta conectada ao GitHub.
2. Clique em **Add New > Project**.
3. Importe o repositório **ErikZFerraz/Portfolio-Web-ErikZFerraz**.
4. Confirme as configurações:
   - Framework Preset: **Vite**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Não é necessário cadastrar variáveis de ambiente para este projeto.
6. Clique em **Deploy**.

Depois de conectado, novos commits enviados à branch `main` serão publicados automaticamente pela Vercel.

## 3. Rodar no computador antes de publicar

Com Node.js instalado:

```bash
npm install
npm run dev
```

Para testar o build de produção:

```bash
npm run build
npm run preview
```
