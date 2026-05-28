@echo off
setlocal EnableExtensions

REM Force the window to stay open even if something exits early
if "%~1"=="__inner" goto :inner
cmd /k "%~f0" __inner
exit /b

:inner

cd /d "%~dp0"

echo ============================================
echo  THE FORUM (React) - LIVE Network Host
echo ============================================
echo.
echo This mode auto-reloads when you change files.
echo No need to rebuild every time.
echo.
echo Working folder: %CD%
echo.

REM --- Node.js check ---
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js not found. Install from https://nodejs.org and restart.
    pause
    exit /b 1
)
echo Node.js:
node -v
echo.

REM --- First-time install ---
if not exist "node_modules" (
    echo Installing dependencies (one-time)...
    call npm install
    if %errorlevel% neq 0 (
        echo Install failed. See message above.
        pause
        exit /b 1
    )
)

echo.
echo ============================================
echo  YOUR COMPUTER'S NETWORK ADDRESSES
echo ============================================
ipconfig | findstr /R /C:"IPv4 Address"
echo.
echo Share http://[your-ip]:5173 with colleagues.
echo Example: http://192.168.1.5:5173
echo.
echo Any change to project files auto-reloads in browsers.
echo Press Ctrl+C to stop.
echo ============================================
echo.

call npm run dev -- --host

echo.
echo Server stopped.
pause
