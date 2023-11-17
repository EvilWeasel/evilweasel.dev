---
title: "PowerShell - Arbeiten mit JSON-/XML- oder CSV-Dateien"
description: "PowerShell - Arbeiten mit JSON-/XML- oder CSV-Dateien"
---

# PowerShell - Arbeiten mit JSON-/XML- oder CSV-Dateien

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

[ConvertFrom-Json (Microsoft.PowerShell.Utility) - PowerShell](https://learn.microsoft.com/de-de/powershell/module/microsoft.powershell.utility/convertfrom-json?view=powershell-7.3)

## JSON-Dateien

JSON-Dateien sind eine beliebte Möglichkeit, Daten zu speichern und zu übertragen. Sie sind einfach zu lesen und zu schreiben und werden in vielen APIs verwendet. Hier ist ein Beispiel dafür, wie Sie eine JSON-Datei in PowerShell lesen und beschreiben können:

```powershell
$json = Get-Content -Raw -Path "C:\\path\\to\\file.json" | ConvertFrom-Json
$json | Format-Table
```

Die erste Zeile lädt den Inhalt der JSON-Datei in PowerShell und konvertiert ihn in ein PowerShell-Objekt. Die zweite Zeile formatiert das Objekt in einer Tabelle und gibt es aus.

```powershell
Get-ChildItem | ConvertTo-Json | Out-File -Encoding utf8 -FilePath "C:\\\\path\\\\to\\\\output.json"
```

Die erste Zeile gibt eine Liste aller Dateien und Ordner im aktuellen Arbeitsverzeichnis aus und konvertiert diese in ein JSON-Objekt. Die zweite Zeile speichert das JSON-Objekt in einer Datei. Hierbei wird die UTF-8-Kodierung verwendet, um sicherzustellen, dass Sonderzeichen korrekt dargestellt werden.

## XML-Dateien

XML-Dateien werden häufig in der Webentwicklung verwendet und sind eine weitere Möglichkeit, Daten zu speichern und zu übertragen. Hier ist ein Beispiel dafür, wie Sie eine XML-Datei in PowerShell lesen und beschreiben können:

```powershell
$xml = Get-Content -Path "C:\\path\\to\\file.xml" -Raw
[xml]$xmlObject = $xml
$xmlObject | Format-Table
```

Die erste Zeile lädt den Inhalt der XML-Datei in PowerShell. Die zweite Zeile konvertiert den Inhalt in ein PowerShell-Objekt und die dritte Zeile formatiert das Objekt in einer Tabelle und gibt es aus.

## CSV-Dateien

CSV-Dateien sind eine häufige Möglichkeit, Tabelleninformationen zu speichern und zu übertragen. Sie können in Excel oder anderen Programmen geöffnet werden. Hier ist ein Beispiel dafür, wie Sie eine CSV-Datei in PowerShell lesen und beschreiben können:

```powershell
$csv = Import-Csv -Path "C:\\path\\to\\file.csv"
$csv | Format-Table
```

Die erste Zeile lädt den Inhalt der CSV-Datei in PowerShell und konvertiert ihn in ein PowerShell-Objekt. Die zweite Zeile formatiert das Objekt in einer Tabelle und gibt es aus.
