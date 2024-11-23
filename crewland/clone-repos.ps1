# Ruta donde se clonan los repositorios
$targetDirectory = "$PSScriptRoot/cloned-repos"

# Lista de repositorios
$repositories = @(
    "https://github.com/igrowker/i004-crewland-front",
    "https://github.com/igrowker/i004-crewland-back"
)

# Crear el directorio si no existe
if (-Not (Test-Path -Path $targetDirectory)) {
    Write-Host "Creando el directorio: $targetDirectory"
    New-Item -ItemType Directory -Path $targetDirectory | Out-Null
}

# Clonar cada repositorio
foreach ($repo in $repositories) {
    $repoName = $repo.Split('/')[-1] -replace '\.git$', '' # Nombre del repositorio
    $repoPath = Join-Path -Path $targetDirectory -ChildPath $repoName

    if (-Not (Test-Path -Path $repoPath)) {
        Write-Host "Clonando $repo en $repoPath..."
        git clone $repo $repoPath
    } else {
        Write-Host "El repositorio $repoName ya existe en $repoPath. Saltando..."
    }
}

Write-Host "Proceso completado."
