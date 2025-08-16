#!/bin/bash

echo "🚗 Festival Lowrider & Cultura Chicana - Landing Page"
echo "======================================================"
echo ""
echo "Escolha uma opção:"
echo "1) Desenvolvimento (npm run dev)"
echo "2) Build de Produção (npm run build)"
echo "3) Preview do Build (npm run preview)"
echo "4) Instalar dependências (npm install)"
echo ""
read -p "Digite o número da opção: " option

case $option in
  1)
    echo "Iniciando servidor de desenvolvimento..."
    npm run dev
    ;;
  2)
    echo "Criando build de produção..."
    npm run build
    echo "Build criado em ./dist"
    ;;
  3)
    echo "Iniciando preview do build..."
    npm run preview
    ;;
  4)
    echo "Instalando dependências..."
    npm install
    ;;
  *)
    echo "Opção inválida!"
    ;;
esac