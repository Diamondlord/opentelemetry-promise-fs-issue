# Example of issue in "fs/promise" with OpenTelemetry

## Installation

```bash
$ npm install
```

## Running the app

```bash
# without tracing
$ ts-node ./src/main.ts
[Nest] 80821  - 02/05/2023, 7:34:55 PM     LOG [NestFactory] Starting Nest application...
# with tracing - it will fail
$ ts-node --require './tracing.ts' ./src/main.ts

no original function accessSync to wrap
no original function appendFileSync to wrap
no original function chmodSync to wrap
no original function chownSync to wrap
no original function copyFileSync to wrap
no original function cpSync to wrap
no original function existsSync to wrap
no original function lchownSync to wrap
no original function linkSync to wrap
no original function lstatSync to wrap
no original function lutimesSync to wrap
no original function mkdirSync to wrap
no original function mkdtempSync to wrap
no original function opendirSync to wrap
no original function openSync to wrap
no original function readdirSync to wrap
no original function readFileSync to wrap
no original function readlinkSync to wrap
no original function realpathSync to wrap
no original function renameSync to wrap
no original function rmdirSync to wrap
no original function rmSync to wrap
no original function statSync to wrap
no original function symlinkSync to wrap
no original function truncateSync to wrap
no original function unlinkSync to wrap
no original function utimesSync to wrap
no original function writeFileSync to wrap
no original function exists to wrap
TypeError: Cannot read properties of undefined (reading 'access')




