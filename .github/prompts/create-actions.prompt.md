# create-actions

## Передумови
Наявні package.json і робочі локальні скрипти ci.

## Дії
Викликати github-actions і створити .github/workflows/ci.yml.

## Очікувані файли
.github/workflows/ci.yml

## Перевірка
Перевірити три ОС, checkout, setup-node і виклик ci-скрипта.

## Помилка
Не вважати workflow готовим після структурного припущення; показати відсутню частину матриці або конфігурації.
