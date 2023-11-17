---
title: "PowerShell - Module"
description: "PowerShell - Module"
---

# PowerShell - Module

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

## Module

In PowerShell können wir Funktionen, Variablen oder ganze Klassen in Modulen organisieren. Ein Modul ist eine Sammlung an `code`, die in einer einzigen Datei oder einer Gruppe von Dateien definiert sind. Module sind nützlich, wenn wir eine Sammlung von Funktionen haben, die wir in verschiedenen Skripten verwenden möchten. Wir können die Funktionen in einem Modul definieren und das Modul dann in unseren Skripten importieren. Ein PowerShell Modul hat immer die Dateiendung `.psm1`.

Ein Beispiel für ein PowerShell-Modul:

```powershell
# Datei MyModule.psm1

function Add-Numbers($a, $b) {
    return $a + $b
}

function Subtract-Numbers($a, $b) {
    return $a - $b
}
```

In diesem Beispiel wird ein Modul `MyModule` definiert, das die Funktionen `Add-Numbers` und `Subtract-Numbers` enthält. Jede Funktion nimmt zwei Argumente (Parameter) und gibt das Ergebnis der entsprechenden mathematischen Operation zurück.

Um das Modul in einem Skript zu verwenden, können wir das `Import-Module`-Cmdlet verwenden:

```powershell
Import-Module "Pfad/Zum/Modul"

Write-Output "3 + 4 = $(Add-Numbers 3 4)"
Write-Output "7 - 2 = $(Subtract-Numbers 7 2)"
```

In diesem Beispiel wird das Modul `MyModule` mit dem `Import-Module`-Cmdlet importiert. Dann werden die Funktionen `Add-Numbers` und `Subtract-Numbers` aufgerufen, um die Ergebnisse der entsprechenden mathematischen Operationen auszugeben.
