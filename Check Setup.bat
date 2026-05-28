@echo off
setlocal EnableExtensions

REM Always keep window open
if "%~1"=="__inner" goto :inner
cmd /k "%~f0" __inner
exit /b

:inner
cd /d "%~dp0"

echo ============================================
echo  SETUP CHECK
echo ============================================
echo.
echo Folder: %CD%
echo.
echo --- Node.js ---
where node
echo Result: %errorlevel%
node -v 2>nul
echo.
echo --- npm ---
where npm
echo Result: %errorlevel%
npm -v 2>nul
echo.
echo --- Files ---
if exist "package.json" (echo package.json: FOUND) else (echo package.json: MISSING)
if exist "vite.config.js" (echo vite.config.js: FOUND) else (echo vite.config.js: MISSING)
if exist "node_modules" (echo node_modules: FOUND) else (echo node_modules: MISSING ^(npm install needed^))
echo.
echo ============================================
echo  Send the output above if anything looks wrong.
echo ============================================
echo.
pause
