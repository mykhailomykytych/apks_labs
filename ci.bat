@echo off
setlocal
call npm ci || exit /b 1
call npm run ci || exit /b 1
