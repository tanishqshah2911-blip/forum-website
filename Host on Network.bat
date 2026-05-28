@echo off
setlocal EnableExtensions

REM Force the window to stay open even if something exits early
if "%~1"=="__inner" goto :inner
cmd /k "%~f0" __inner
exit /b

:inner

cd /d "%~dp0"

echo ============================================
echo  THE FORUM (React) - Network Host Launcher
echo ============================================
echo.
echo Working folder: %CD%
echo.

REM --- Node.js check ---
echo [1/4] Checking for Node.js...
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Node.js is NOT installed or not in PATH.
    echo.
    echo FIX:
    echo   1. Download Node.js LTS from: https://nodejs.org
    echo   2. Install it (use defaults, click Next on everything)
    echo   3. CLOSE this window
    echo   4. RESTART your computer (important - PATH needs to refresh)
    echo   5. Double-click this .bat file again
    echo.
    pause
    exit /b 1
)
echo Node.js found:
node -v
npm -v
echo.

REM --- First-time install ---
echo [2/4] Checking dependencies...
if not exist "node_modules" (
    echo node_modules folder is missing - running npm install...
    echo This will take a minute or two on first run.
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: npm install failed. See message above.
        pause
        exit /b 1
    )
) else (
    echo Dependencies already installed - skipping.
)
echo.

REM --- Build ---
echo [3/4] Building production site...
echo.
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Build failed. See message above.
    pause
    exit /b 1
)
echo.

REM --- Show network IPs ---
echo [4/4] Starting network host...
echo.
echo ============================================
echo  YOUR COMPUTER'S NETWORK ADDRESSES
echo ============================================
ipconfig | findstr /R /C:"IPv4 Address"
echo.
echo Share one of those IPs with port 4173 to your colleagues.
echo Example:  http://192.168.1.5:4173
echo.
echo NOTE: First-time only - Windows Firewall may pop up asking
echo       for permission. Click "Allow access" on Private networks.
echo.
echo Press Ctrl+C to stop the server.
echo ============================================
echo.

call npm run preview

echo.
echo Server stopped.
pause
