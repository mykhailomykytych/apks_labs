# Лабораторна робота №1: AI-агент для автоматизації розробки та CI/CD

- Студент: **[ПІП студента]**
- Група: **[група]**
- Варіант: **6 — TypeScript, npm scripts, Vitest**

## Опис

Мінімальний кросплатформний проєкт Hello World із функцією додавання та тестами Vitest. Репозиторій містить AI-агент manifest, три skills, п'ять окремих commands та orchestrator init.

## Локальний запуск

```bash
npm ci
npm run build
npm run start
npm run test
npm run ci
npm run check
```

Windows: `ci.bat`  
Linux/macOS: `sh ci.sh`

## Структура агента

- `.github/agents/build-engineer.agent.md` — manifest.
- `.github/skills/` — skills створення, складання і CI.
- `.github/prompts/` — окремі commands і init-orchestrator.
- `.github/workflows/ci.yml` — matrix для трьох ОС.

Деталі: [docs/architecture.md](docs/architecture.md), [docs/usage.md](docs/usage.md).
