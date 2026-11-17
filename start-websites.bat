@echo off
title BIGO STORE — Official Storefront Server
echo ===================================================
echo   BIGO STORE - Official E-Commerce Storefront
echo ===================================================
echo.
cd /d "%~dp0\01-motion"
echo Starting local web server on http://localhost:8080/index.html ...
start "" "http://localhost:8080/index.html"
python -m http.server 8080
pause
