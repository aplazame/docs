---
sidebar_position: 1
---
# Introducción al tutorial

Descubramos **Docusaurus en menos de 5 minutos**.

## Empezando

Comience por **crear un nuevo sitio**.

O **prueba Docusaurus inmediatamente** con **[docusaurus.new](https://docusaurus.new)**.

### Lo que necesitarás

- [Node.js](https://nodejs.org/en/download/) versión 16.14 o superior:
  - Al instalar Node.js, se recomienda marcar todas las casillas de verificación relacionadas con las dependencias.

## Generar un nuevo sitio

Genere un nuevo sitio de Docusaurus utilizando la **plantilla clásica**.

La plantilla clásica se agregará automáticamente a su proyecto después de ejecutar el comando:

```bash
npm init docusaurus@latest mi sitio web clásico
```

Puede escribir este comando en el Símbolo del sistema, Powershell, Terminal o cualquier otro terminal integrado de su editor de código.

El comando también instala todas las dependencias necesarias que necesita para ejecutar Docusaurus.

## Inicie su sitio

Ejecute el servidor de desarrollo:

```bash
cd mi sitio web
npm inicio de ejecución
```

El comando `cd` cambia el directorio con el que está trabajando. Para trabajar con su sitio de Docusaurus recién creado, deberá navegar por la terminal allí.

El comando `npm run start` construye su sitio web localmente y lo sirve a través de un servidor de desarrollo, listo para que lo vea en http://localhost:3000/.

Abra `docs/intro.md` (esta página) y edite algunas líneas: el sitio **se recarga automáticamente** y muestra sus cambios.