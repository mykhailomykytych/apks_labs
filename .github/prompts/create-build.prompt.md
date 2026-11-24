# create-build

## Передумови
package.json і tsconfig.json вже існують.

## Дії
Викликати build-and-test, налаштувати TypeScript/Vitest і створити ci.bat і ci.sh.

## Очікувані файли
tests/greeting.test.ts, ci.bat, ci.sh, package-lock.json

## Перевірка
Виконати npm run ci.

## Помилка
Зупинитися при помилці встановлення, складання або тестування і показати її текст.
