---
title: "Erstellen und Ausführen von PowerShell Scripts"
description: "Erstellen und Ausführen von PowerShell Scripts"
---

# Erstellen und Ausführen von PowerShell Scripts

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# Erstellen eines PowerShell-Scripts

PowerShell-Scripts sind nützlich, um komplexe Aufgaben und Automatisierung in einer Windows-Umgebung durchzuführen. In diesem Artikel erfahren Sie, wie Sie PowerShell-Scripts erstellen und ausführen.

Erstellen Sie zunächst eine Datei mit der Erweiterung **`.ps1`**. Sie können jeden Texteditor verwenden, wie z. B. Notepad oder Visual Studio Code. Schreiben Sie Ihren PowerShell-Code in die Datei und speichern Sie sie.

```powershell
$currentTime = Get-Date
Write-Host "Aktuelle Zeit: $currentTime"
```

# Ausführen eines PowerShell Scripts

Bevor Sie ein PowerShell-Script ausführen können, stellen Sie sicher, dass die Ausführungsrichtlinie auf Ihrem System die Ausführung von Scripts zulässt. Mehr dazu finden Sie hier: [PowerShell - Execution-Policies](http://localhost:4321/guides/powershell%20-%20execution-policies%20fa49be5ee80947ae8447e9833c8a0413.md/) 

Während unserer Schulung wäre es Sinnvoll diese auf RemoteSigned zu setzen, um sicherzustellen dass unsere Scripte ausführbar sind.

```powershell
Set-ExecutionPolicy RemoteSigned
```

Nun können wir unser Script wie folgt aufrufen:

```powershell
.\MeinScript.ps1
```

## **Beispiel: Automatisches Löschen von temporären Dateien**

Angenommen, Sie möchten ein PowerShell-Script erstellen, um automatisch temporäre Dateien in Ihrem Benutzerprofil zu löschen. Hier ist ein Beispiel für ein solches Script:

```powershell
$tempFolderPath = $env:TEMP
Write-Host "Temporäre Dateien werden gelöscht: $tempFolderPath"

Get-ChildItem -Path $tempFolderPath -Recurse | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue

Write-Host "Temporäre Dateien erfolgreich gelöscht."
```

Speichern Sie das Script als **`CleanTempFiles.ps1`** und führen Sie es in der PowerShell-Konsole aus, wie im vorherigen Abschnitt beschrieben.
