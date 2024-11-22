#!/bin/bash

# Ruta donde se clonan los repositorios
targetDirectory="$(pwd)/cloned-repos"

# Lista de repositorios
repositories=(
    "https://github.com/igrowker/i004-crewland-front"
    "https://github.com/igrowker/i004-crewland-back"
)

# Crear el directorio si no existe
if [ ! -d "$targetDirectory" ]; then
    echo "Creando el directorio: $targetDirectory"
    mkdir -p "$targetDirectory"
fi

# Clonar cada repositorio
for repo in "${repositories[@]}"; do
    repoName=$(basename "$repo" .git) # Obtener el nombre del repositorio sin la extensión .git
    repoPath="$targetDirectory/$repoName"

    if [ ! -d "$repoPath" ]; then
        echo "Clonando $repo en $repoPath..."
        git clone "$repo" "$repoPath"
    else
        echo "El repositorio $repoName ya existe en $repoPath. Saltando..."
    fi
done

echo "Proceso completado."
