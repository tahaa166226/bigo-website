@echo off
title BIGO STORE — Official Storefront Server
echo ===================================================
echo   BIGO STORE - Official E-Commerce Storefront
echo ===================================================
echo.
cd /d "%~dp0new project"
echo Starting local web server on http://localhost:8080/01-motion/index.html ...
start "" "http://localhost:8080/01-motion/index.html"
python -m http.server 8080
pause
