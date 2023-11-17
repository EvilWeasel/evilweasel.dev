---
title: "PowerShell - Dateisystem"
description: "PowerShell - Dateisystem"
---

# PowerShell - Dateisystem

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# Navigation des Dateisystems

Die Arbeit mit dem Dateisystem in PowerShell beginnt mit der Navigation durch die Ordnerstruktur. Die Cmdlets `Get-ChildItem` und `Set-Location` sind hierbei besonders nützlich.

Das Cmdlet `Get-ChildItem` gibt eine Liste aller Dateien und Ordner im aktuellen Verzeichnis zurück.

```powershell
Get-ChildItem C:\\Windows
```

Das Cmdlet `Set-Location` ändert das aktuelle Arbeitsverzeichnis.

```powershell
Set-Location C:\\Windows\\System32
```

# Dateien und Ordner kopieren, verschieben und umbenennen

PowerShell bietet verschiedene Cmdlets zum Kopieren, Verschieben und Umbenennen von Dateien und Ordnern. Hier sind einige Beispiele:

## `Copy-Item`: Kopiert eine Datei oder einen Ordner.

```powershell
Copy-Item $HOME\\example.txt C:\\\\Temp
```

## `Move-Item`: Verschiebt eine Datei oder einen Ordner.

```powershell
Move-Item $HOME\example.txt $HOME\Test\example.txt
```

## `Rename-Item`: Benennt eine Datei oder einen Ordner um.

```powershell
Rename-Item $HOME\\example.txt new-example.txt
```

# Suchen von Dateien und Ordnern

PowerShell bietet das Cmdlet `Get-ChildItem` auch zum Suchen von Dateien und Ordnern anhand von Suchmustern. Siehe [PowerShell - RegEx und Pattern-Matching](http://localhost:4321/guides/powershell%20-%20regex%20und%20pattern-matching%20a5a189ca7ebb4ec695514d2ee919223f.md/) 

## Suche nach Dateien, die mit "example" beginnen:

```powershell
Get-ChildItem $HOME -Recurse -Filter "example*"
```

# Erstellen und Löschen von Dateien und Ordnern

PowerShell bietet verschiedene Cmdlets zum Erstellen, Umbenennen und Löschen von Dateien und Ordnern. Hier sind einige Beispiele:

## `New-Item`: Erstellt eine neue Datei oder einen neuen Ordner.

```powershell
New-Item -ItemType File -Path $HOME\example.txt
```

```powershell
New-Item -ItemType Directory -Path $HOME\\neuer_ordner
```

## `Remove-Item`: Löscht eine Datei oder einen Ordner.

```powershell
Remove-Item $HOME\\example.txt
```

```powershell
Remove-Item $HOME\\\\neuer_ordner -Recurse
```

# Lesen und Schreiben von Dateien

Das Lesen und Schreiben von Dateien ist ein weiterer wichtiger Aspekt der Arbeit mit dem Dateisystem in PowerShell. PowerShell bietet hierfür die Cmdlets `Get-Content`, `Add-Content` und `Set-Content`.

## Lesen des Inhalts einer Datei:

```powershell
Get-Content $HOME\example.txt
```

## Schreiben in eine Datei:

```powershell
Set-Content $HOME\example.txt "This is the new content"
```

## Hinzufügen von neuem Inhalt zu einer Datei:

```powershell
Add-Content $HOME\example.txt "This is the additional content"
```

# Datei und Ordnerberechtigungen

In PowerShell kann man die Berechtigungen von Dateien und Ordnern mithilfe des Cmdlets `Get-Acl` überprüfen und mit dem Cmdlet `Set-Acl` ändern.

## Überprüfen der Berechtigungen einer Datei:

```powershell
Get-Acl $HOME\example.txt
```

## Ändern der Berechtigungen einer Datei (Setzt natürlich voraus, dass `User1` existiert):

```powershell
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule("User1","ReadAndExecute","Allow")
$acl = Get-Acl $HOME\example.txt
$acl.SetAccessRule($rule)
Set-Acl C:\\Temp\\example.txt $acl
```

# File System Providers

PowerShell bietet sogenannte "File System Providers", die es ermöglichen, auf andere Dateisysteme als das lokale Dateisystem zuzugreifen. Ein Beispiel hierfür ist das Cmdlet `New-PSDrive`, mit dem man eine Verbindung zu einem Netzwerklaufwerk herstellen kann.

Ein Beispiel für das Herstellen einer Verbindung zu einem Netzwerklaufwerk:

```powershell
New-PSDrive -Name "N" -PSProvider FileSystem -Root "\\\\Server\\Share"
```

Ein weiteres Beispiel für einen File System Provider ist der Registry Provider, mit dem man auf die Windows-Registrierung zugreifen kann. Ein Beispiel hierfür ist das Cmdlet `Set-ItemProperty`, mit dem man den Wert eines Registrierungseintrags ändern kann.

Ein Beispiel für das Ändern des Wertes eines Registrierungseintrags:

```powershell
Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced" -Name "Hidden" -Value 1
```

Ein weiteres Beispiel für einen File System Provider ist der Certificate Provider, mit dem man auf Zertifikate im Zertifikatspeicher zugreifen kann. Ein Beispiel hierfür ist das Cmdlet `Get-ChildItem`, mit dem man alle Zertifikate im Zertifikatspeicher anzeigen kann.

Ein Beispiel für das Anzeigen aller Zertifikate im Zertifikatspeicher:

```powershell
Get-ChildItem Cert:\\\\CurrentUser\\\\My
```
