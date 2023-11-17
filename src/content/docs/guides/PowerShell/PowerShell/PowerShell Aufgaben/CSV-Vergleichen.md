---
title: "CSV-Vergleichen"
description: "CSV-Vergleichen"
---

# CSV-Vergleichen

Tags: csv, diff
Schwierigkeit: Komplexer

In dieser Übungsaufgabe sollen Sie ein PowerShell-Skript erstellen, das zwei CSV-Dateien ausliest und miteinander vergleicht.

# Anforderungen:

1. Der Benutzer soll dem Skript beim Aufruf beide Dateipfade als Parameter übergeben.
2. Es soll ein optionaler Parameter **`SyncColumn`** existieren.
3. Wenn das Skript nur mit den beiden Dateipfaden aufgerufen wird, soll es in der Konsole alle Zeilen anzeigen, die in der anderen Datei nicht enthalten sind, zusammen mit einer Zeilenangabe, wo die Differenz ist.
4. Wenn **`SyncColumn`** zusammen mit der Bezeichnung einer Spalte übergeben wird, die in beiden CSV-Dateien existiert, sollen alle Datensätze, die nicht in einer der Dateien enthalten sind, automatisch in die andere übernommen werden.

# Hilfsmittel:

Zur Bearbeitung der Aufgabe können die folgenden PowerShell-Cmdlets hilfreich sein:

1. **`Import-Csv`**: Liest die Daten aus einer CSV-Datei und erstellt dafür Objekte.
Beispiel: **`$csv1 = Import-Csv -Path "Pfad\zur\Datei1.csv"`**
2. **`Compare-Object`**: Vergleicht zwei Eingabeobjekte und gibt die Unterschiede zurück.
Beispiel: **`$differences = Compare-Object -ReferenceObject $csv1 -DifferenceObject $csv2`**
3. **`Export-Csv`**: Exportiert Objekte in eine CSV-Datei.
Beispiel: **`$updatedCsv | Export-Csv -Path "Pfad\zur\aktualisierten\Datei.csv" -NoTypeInformation`**
4. **`ForEach-Object`**: Führt für jedes Element einer Sammlung eine Aktion aus.
Beispiel: **`$differences | ForEach-Object { Aktion }`**
5. **`Select-Object`**: Wählt Eigenschaften von Objekten aus oder erweitert sie.
Beispiel: **`$csv1 | Select-Object -Property "Spalte1", "Spalte2"`**
6. **`Where-Object`**: Filtert Objekte aus einer Sammlung basierend auf einer Bedingung.
Beispiel: **`$csv1 | Where-Object { Bedingung }`**

# Musterlösung

```powershell
param(
    [Parameter(Mandatory=$true)][string]$csvPath1,
    [Parameter(Mandatory=$true)][string]$csvPath2,
    [Parameter()][string]$SyncColumn
)

# CSV-Dateien importieren
$csv1 = Import-Csv -Path $csvPath1
$csv2 = Import-Csv -Path $csvPath2

if ($SyncColumn) {
    # Spalte für die Synchronisierung verwenden
    $syncProperty = $csv1[0].PSObject.Properties | Where-Object { $_.Name -eq $SyncColumn }
    
    if ($syncProperty -ne $null) {
        $updatedCsv2 = $csv2.Clone()
        
        # Zeilen finden, die in CSV1 vorhanden sind, aber nicht in CSV2
        $csv1 | ForEach-Object {
            $currentRow = $_
            $matchingRow = $csv2 | Where-Object { $_.$SyncColumn -eq $currentRow.$SyncColumn }
            if (-not $matchingRow) {
                $updatedCsv2 += $currentRow
            }
        }

        # Aktualisierte CSV2-Datei speichern
        $updatedCsv2 | Export-Csv -Path $csvPath2 -NoTypeInformation

        Write-Host "CSV-Dateien wurden synchronisiert."
    } else {
        Write-Host "Die angegebene SyncColumn '$SyncColumn' wurde in den CSV-Dateien nicht gefunden."
    }
} else {
    # Unterschiede zwischen den CSV-Dateien anzeigen
    $differences = Compare-Object -ReferenceObject $csv1 -DifferenceObject $csv2 -Property Hostname, IP, OS, Memory

    if ($differences) {
        $csv1Lines = Get-Content $csvPath1
        $csv2Lines = Get-Content $csvPath2
        foreach ($difference in $differences) {
            $csv = if ($difference.SideIndicator -eq "<=") { $csv1Lines } else { $csv2Lines }
            $currentCsvPath = if ($difference.SideIndicator -eq "<=") { $csvPath1 } else { $csvPath2 }
            $lineNumber = ($csv | Select-String -Pattern $($difference.Hostname)).LineNumber
            Write-Host "Unterschied gefunden in Datei '$currentCsvPath' (Zeile $lineNumber): $($difference.Hostname)"
        }
    } else {
        Write-Host "Keine Unterschiede gefunden."
    }
}
```
