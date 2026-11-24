# Журнал взаємодії з AI

## Запит 1
Визначити вимоги варіанта 6 з PDF методичних вказівок.

Рішення: обрано TypeScript, npm scripts і Vitest; виділено manifest, три skills, шість prompt-команд, orchestrator init і matrix CI.

## Запит 2
Створити мінімальний TypeScript Hello World-проєкт.

Рішення: створено src/greeting.ts, src/hello.ts, unit-тест Vitest і скрипти збірки для Windows та Unix.

## Помилка і виправлення
На початку перевірки автоматичного Vitest може стати неможливим запустити модуль через неправильне NodeNext імпортування `.js` у вихідному TypeScript-файлі.

Виправлення: у src/greeting.ts/hello.ts та тестах імпорти узгоджені з NodeNext через `./greeting.js`; TypeScript генерує сумісний шлях у dist.

## Запит 3
Додати локальний check і CI.

Рішення: створено scripts/check.mjs і workflow з ubuntu-latest, windows-latest і macos-latest. Після перевірки структури check запускає npm run ci.
