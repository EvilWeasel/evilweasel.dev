---
title: "DatenTypen Konvertieren"
description: "DatenTypen Konvertieren"
---

# DatenTypen Konvertieren

Tags: Datentypen, casting, convertierung, int2bool
Schwierigkeit: Einfach

# Fragestellung:

Erstellen Sie ein PowerShell-Skript, das verschiedene Datentypen konvertiert und die Ergebnisse in einer menschenlesbaren Formatierung anzeigt. Das Skript sollte die folgenden Aufgaben erledigen:

1. Konvertiere einen String in ein Integer.
2. Konvertiere einen Integer in ein Double.
3. Konvertiere einen String in ein DateTime-Objekt.
4. Konvertiere einen String in ein Boolean.

# (Optional) Hilfestellung zur Bearbeitung:

Die folgenden Cmdlets und Funktionen könnten hilfreich sein:

- [int] bzw. [double] (zur Konvertierung von Strings in numerische Datentypen)
- [datetime] (zur Konvertierung eines Strings in ein DateTime-Objekt)
- [bool] (zur Konvertierung eines Strings in ein Boolean)
- **`Write-Host`** (zum Anzeigen von Informationen in der Konsole)

# Musterlösung:

```powershell
# String in Integer konvertieren
$stringToInt = "123"
$int = [int]$stringToInt
Write-Host "String in Integer: $int (Datentyp: $($int.GetType().Name))"

# Integer in Double konvertieren
$double = [double]$int
Write-Host "Integer in Double: $double (Datentyp: $($double.GetType().Name))"

# String in DateTime konvertieren
$stringToDateTime = "2023-04-11"
$dateTime = [datetime]$stringToDateTime
Write-Host "String in DateTime: $dateTime (Datentyp: $($dateTime.GetType().Name))"

# String in Boolean konvertieren
$stringToBool = "True"
$bool = [bool]$stringToBool
Write-Host "String in Boolean: $bool (Datentyp: $($bool.GetType().Name))"
```

Dieses Skript konvertiert die verschiedenen Datentypen wie gefordert und zeigt die Ergebnisse zusammen mit den entsprechenden Datentyp-Namen in einer menschenlesbaren Formatierung an.
