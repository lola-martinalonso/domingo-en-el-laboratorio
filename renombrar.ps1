# Pon las carpetas con corchetes en su sitio.
# Uso: click derecho sobre este archivo - Ejecutar con PowerShell
# o desde PowerShell, dentro de la carpeta astro-site:  .\renombrar.ps1

$ErrorActionPreference = "Stop"
Set-Location -LiteralPath $PSScriptRoot

if (Test-Path -LiteralPath "src\pages\-lang-") {
  if (Test-Path -LiteralPath "src\pages\[lang]") {
    Remove-Item -LiteralPath "src\pages\[lang]" -Recurse -Force
  }
  Rename-Item -LiteralPath "src\pages\-lang-" -NewName "[lang]"
  Write-Host "Renombrado: src\pages\[lang]" -ForegroundColor Green
}

if (Test-Path -LiteralPath "src\pages\[lang]\blog\-slug-.astro") {
  if (Test-Path -LiteralPath "src\pages\[lang]\blog\[slug].astro") {
    Remove-Item -LiteralPath "src\pages\[lang]\blog\[slug].astro" -Force
  }
  Rename-Item -LiteralPath "src\pages\[lang]\blog\-slug-.astro" -NewName "[slug].astro"
  Write-Host "Renombrado: [slug].astro" -ForegroundColor Green
}

Write-Host ""
Write-Host "Listo. Ahora:  npm install   y luego   npm run dev" -ForegroundColor Cyan
