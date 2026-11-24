# Інструкція запуску агента і проєкту

## Запуск агента в VS Code

1. Відкрити репозиторій у VS Code.
2. Відкрити GitHub Copilot Chat у Agent mode.
3. Завантажити `.github/agents/build-engineer.agent.md` як manifest або послати посилання на нього у запиті.
4. Виконати запит: `Виконай init для варіанта 6 за docs/architecture.md`.
5. Переглянути пропоновані зміни перед прийняттям.

Окремі команди:

- `git-init`
- `create-project`
- `create-build`
- `create-actions`
- `check`
- `init`

Відповідні prompts знаходяться у `.github/prompts/`.

## Локальний запуск проєкту

```bash
npm ci
npm run build
npm run start
npm run test
npm run ci
npm run check
```

Очікуваний результат запуску: рядок `Hello, World!` і логічно передане повідомлення `1 + 2 = 3`.

## Повторна перевірка

`npm run check` перевіряє структуру, skills/commands, matrix CI, build і Vitest. Повторний запуск init/check не має видаляти або руйнувати існуючі файли.

## Запуск CI-скриптів

- Windows: `ci.bat`
- Linux/macOS: `sh ci.sh`
