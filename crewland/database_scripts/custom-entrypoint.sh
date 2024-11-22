#!/bin/bash

# Modificar el archivo pg_hba.conf para permitir conexiones desde la red Docker
echo "host    all             all             172.29.0.0/16            md5" >> /var/lib/postgresql/data/pg_hba.conf

# Iniciar el servidor PostgreSQL
exec docker-entrypoint.sh "$@"