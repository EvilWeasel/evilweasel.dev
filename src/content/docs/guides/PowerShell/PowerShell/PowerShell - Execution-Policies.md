---
title: "PowerShell - Execution-Policies"
description: "PowerShell - Execution-Policies"
---

# PowerShell - Execution-Policies

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:53
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# Execution-Policies

In Powershell gibt es sogenannte Execution-Policies, die das Ausführen von Skripten und Skriptblöcken regulieren. Diese Policies sind wichtig, um die Sicherheit des Systems zu gewährleisten.

## Wofür sind Execution-Policies da?

Es gibt verschiedene Arten von Execution-Policies, wie z.B. Restricted, AllSigned, RemoteSigned, Unrestricted und Undefined.

- Restricted: Es können nur interaktive Befehle ausgeführt werden.
- AllSigned: Jedes Skript muss signiert werden, bevor es ausgeführt werden kann.
- RemoteSigned: Skripte, die von außerhalb des Systems stammen, müssen signiert sein.
- Unrestricted: Es können alle Skripte ohne Einschränkungen ausgeführt werden.

## Wie sehe ich die Execution-Policies ein?

Um die aktuelle Execution-Policy einzusehen, kann man den folgenden Befehl in der Powershell-Konsole ausführen:

```powershell
Get-ExecutionPolicy
```

## Wie ändere ich die Execution-Policies?

Um die Execution-Policy zu ändern, kann man den folgenden Befehl in der Powershell-Konsole ausführen:

```powershell
Set-ExecutionPolicy <Policy>
```

Dabei wird <Policy> durch die gewünschte Policy ersetzt (`Restricted`, `AllSigned`, `RemoteSigned` oder `Unrestricted`). Wenn man die Policy nur vorübergehend ändern möchte, kann man den Parameter `-Scope` verwenden.

Zum Beispiel:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Unrestricted
```

Dieser Befehl ändert die Execution-Policy nur für den aktuellen Prozess und setzt sie auf `Unrestricted`.
