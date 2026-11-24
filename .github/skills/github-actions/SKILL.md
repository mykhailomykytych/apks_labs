# github-actions

## Призначення
Створювати CI workflow для усіх підтримуваних ОС.

## Вхід
- scripts ci з package.json
- ci.bat та ci.sh

## Виконання
1. Створити .github/workflows/ci.yml.
2. Додати matrix ubuntu-latest, windows-latest, macos-latest.
3. Виконати checkout і setup-node.
4. Викликати ci.bat у Windows і ci.sh у решті систем.

## Вихід
- .github/workflows/ci.yml

## Перевірки
- Workflow запускається для push і pull_request до develop або master.
- Matrix містить усі три операційні системи.
- Кожне завдання викликає тільки вже наявний скрипт збірки.
- Не використано secrets і токени.

## Типова помилка
Якщо ci.yml синтаксично неправильний, перевірити відступи та shell-команди, виправити файл і повторно виконати check.
