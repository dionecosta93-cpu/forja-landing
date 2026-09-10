# /public/downloads

Coloque aqui o instalador Android:

    forja.apk

Tudo em `public/` é copiado para a raiz do build, então o arquivo fica servido em
`https://<dominio>/downloads/forja.apk` — exatamente o caminho usado por
`APK_URL` em `src/content/links.js`.

Ao publicar uma nova versão, atualize também `APK_SIZE` e `APK_VERSION` no mesmo
arquivo para o tamanho/versão reais aparecerem ao lado do botão de download.

O deploy na Vercel vem do push no GitHub (sem upload de assets à parte), então o
`forja.apk` **precisa** ser commitado junto para ir ao ar.
