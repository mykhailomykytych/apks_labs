# build-and-test

## Призначення
Налаштувати складання TypeScript і юніт-тести Vitest.

## Вхід
- package.json
- tsconfig.json
- Функція helloWorld і функція add

## Виконання
1. Встановити TypeScript і Vitest як devDependencies.
2. Створити tests/greeting.test.ts.
3. Створити ci.bat для Windows і ci.sh для Unix-подібних систем.
4. Скрипт ci виконує build і test.

## Вихід
- tests/greeting.test.ts
- package-lock.json
- ci.bat
- ci.sh

## Перевірки
- npm run build завершується успішно.
- npm run test містить і передає тест із назвою BasicAddition.
- node dist/src/hello.js друкує Hello, World!.

## Типова помилка
Якщо тест не знайдено або модуль не скомпільовано, перевірити шлях import і moduleResolution, виправити конфігурацію і повторити перевірку.
