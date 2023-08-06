@echo off

REM Start ws server
start "wss" cmd /c "echo starting ws server... && pnpm wss"

REM Start nextjs server
start "nextjs" cmd /c "echo starting next server && pnpm start"

REM Continue with rest of the script
echo Both tasks are running. Continuing with the script.
pause

REM Rest of the script...
