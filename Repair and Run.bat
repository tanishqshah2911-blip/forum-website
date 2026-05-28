@echo off
REM ============================================
REM  THE FORUM (React) - Repair & Run
REM
REM  Use this if "Run Dev Server.bat" fails with
REM  dependency errors (rollup / vite / module
REM  not found). It deletes the dependency folder,
REM  reinstalls everything cleanly, then starts
REM  the dev server.
REM
REM  Your website source code is NOT touched.
REM ============================================

cd /d "%~dp0"

REM Check Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Node.js is not installed.
    echo Install the LTS version from https://nodejs.org
    echo then double-click this file again.
    echo.
    pause
    exit /b 1
)

echo.
echo ============================================
echo  Step 1 of 3 - Cleaning old dependencies
echo ============================================
if exist "node_modules" (
    echo Removing node_modules ...
    rmdir /s /q "node_modules"
)
if exist "package-lock.json" (
    echo Removing package-lock.json ...
    del /q "package-lock.json"
)
echo Done.

echo.
echo ============================================
echo  Step 2 of 3 - Installing dependencies
echo  This takes about a minute. Please wait.
echo ============================================
call npm install
if %errorlevel% neq 0 (
    echo.
    echo Install failed. Copy the error above and send it.
    pause
    exit /b 1
)
echo Done.

echo.
echo ============================================
echo  Step 3 of 3 - Starting dev server
echo  The site opens at http://localhost:5173
echo  Press Ctrl+C in this window to stop.
echo ============================================
echo.
call npm run dev
pause
