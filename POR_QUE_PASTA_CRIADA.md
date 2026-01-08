# 🔍 POR QUE A PASTA CÓDIGOS/HAAST/HSF2 É CRIADA NO GITHUB?

## Explicação Simples

### O Que Aconteceu:

1. **Você (ou alguém) executou `git init` em `D:/`** (raiz do disco)
2. **Seu projeto está em:** `D:/CÓDIGOS/HAAST/HSF2/`
3. **Quando você faz commit:** Git salva o caminho RELATIVO à raiz do repositório
4. **Resultado:** Git salva `CÓDIGOS/HAAST/HSF2/package.json` em vez de `package.json`

### Por Que Isso Acontece?

**Git funciona assim:**
- A raiz do repositório é onde você executa `git init`
- Todos os caminhos são relativos a essa raiz
- Se você inicializa em `D:/` e seus arquivos estão em `D:/CÓDIGOS/HAAST/HSF2/`
- Git salva: `CÓDIGOS/HAAST/HSF2/arquivo.txt`

### Visualização:

```
D:/                          ← Git foi inicializado AQUI
├── .git/                    ← Repositório Git está AQUI
├── CÓDIGOS/
│   └── HAAST/
│       └── HSF2/            ← Seu projeto está AQUI
│           ├── package.json
│           └── app/
```

**Quando você faz commit:**
- Git vê: `D:/CÓDIGOS/HAAST/HSF2/package.json`
- Relativo à raiz (`D:/`): `CÓDIGOS/HAAST/HSF2/package.json`
- **Salva no Git:** `CÓDIGOS/HAAST/HSF2/package.json`

**No GitHub:**
```
horizonte/
  └── CÓDIGOS/
      └── HAAST/
          └── HSF2/
              ├── package.json  ❌
              └── app/
```

## Por Que o Vercel Não Funciona?

**Vercel espera:**
```
horizonte/
  ├── package.json  ✅ (na raiz)
  └── app/
```

**Mas encontra:**
```
horizonte/
  └── CÓDIGOS/HAAST/HSF2/package.json  ❌ (em subpasta)
```

**Resultado:** Não encontra `package.json` na raiz → Não detecta Next.js → 404

## Solução: Criar Novo Repositório Limpo

Vou criar um script que:
1. Remove o Git atual
2. Inicializa novo Git na pasta correta
3. Faz commit limpo
4. Você pode criar novo repositório GitHub ou fazer force push
