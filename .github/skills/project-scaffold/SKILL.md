# project-scaffold

## Призначення
Створювати мінімальний TypeScript Hello World-проєкт і базову документацію.

## Вхід
- Мова: TypeScript
- Назва проєкту: hello-world-typescript
- Система запуску: npm scripts

## Виконання
1. Створити package.json і tsconfig.json.
2. Створити src/greeting.ts і src/hello.ts.
3. Додати README.md та початковий .gitignore.
4. Не змінювати існуючий вихідний код без потреби під час повторного запуску.

## Вихід
- package.json
- tsconfig.json
- src/greeting.ts
- src/hello.ts
- README.md
- .gitignore

## Перевірки
- package.json має scripts build, test, start і ci.
- tsconfig.json компілює src у dist.
- Файл src/hello.ts містить точку запуску.

## Приклад помилки
Якщо npm або TypeScript недоступні, не видаляти згенеровані файли; повідомити точну помилку і наступні кроки.
