@echo off
REM ============================================
REM  THE FORUM (React) — Local dev launcher
REM  Installs dependencies on first run,
REM  then starts the Vite dev server.
REM  Browser opens automatically at localhost:5173
REM ============================================

cd /d "%~dp0"

REM Check Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Node.js is not installed.
    echo.
    echo Please install Node.js from https://nodejs.org
    echo Pick the LTS version. Then double-click this file again.
    echo.
    pause
    exit /b 1
)

REM First-time install if node_modules is missing
if not exist "node_modules" (
    echo.
    echo First-time setup — installing dependencies...
    echo This will take a minute.
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo Install failed. Please check the error above.
        pause
        exit /b 1
    )
)

echo.
echo Starting dev server...
echo The site will open in your browser at http://localhost:5173
echo Press Ctrl+C in this window to stop.
echo.
call npm run dev
pause
