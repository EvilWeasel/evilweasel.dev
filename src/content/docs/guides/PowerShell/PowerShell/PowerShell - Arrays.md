---
title: "PowerShell - Arrays"
description: "PowerShell - Arrays"
---

# PowerShell - Arrays

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# Arrays

Ein Array ist ein Datentyp und eine Möglichkeit, eine Sammlung von Werten in einer einzigen Variablen zu speichern. Ein Array kann aus Werten eines bestimmten Datentyps oder auch aus einer Kombination von Werten verschiedener Datentypen bestehen. Die Elemente eines Arrays sind durchnummeriert und können über den Index angesprochen werden, wobei der Index bei `0` beginnt.

Ein Beispiel für Arrays in PowerShell:

```powershell
$namen = @("Max", "Peter", "Anna")
# Wir zählen zwar Element: 1, 2, 3
# Aber Position/Index sind: 0, 1, 2
# Wenn wir von Index/Position reden, fangen wir bei 0 an
$zahlen = @(1, 2, 3, 4, 5)
$verschiedenes = @(1, "Hallo", $true)
Write-Output $namen[1] # Peter
```

In diesem Beispiel werden drei Arrays deklariert: `$namen`, `$zahlen` und `$verschiedenes`. Die Elemente der Arrays können über den Index angesprochen werden, z.B. `$namen[0]` für das erste Element im Array `$namen`.

## Hinzufügen von Elementen

Arrays können in PowerShell durch Hinzufügen von Elementen erweitert werden. Hierfür gibt es verschiedene Möglichkeiten.

```powershell
$namen += "Lisa"
$namen.Add("Henry")
```

In diesem Beispiel wird ein neues Element mit dem Wert "Lisa" am Ende des Arrays `$namen` hinzugefügt. Es ist auch möglich, ein Array mit einem anderen Array zu kombinieren, indem man die `+`-Operator:

```powershell
$zahlen = @(1, 2, 3)
$neueZahlen = @(4, 5, 6)
$zahlen += $neueZahlen
```

In diesem Beispiel werden die beiden Arrays `$zahlen` und `$neueZahlen` kombiniert und in `$zahlen` gespeichert.

## Entfernen von Elementen

Es ist nicht möglich, ein einzelnes Element aus einem Array in PowerShell zu entfernen. Stattdessen muss man das gesamte Array neu erstellen und dabei das zu entfernende Element weglassen. Alternativ kann man auch das `Where-Object`-Cmdlet verwenden, um alle Elemente zu filtern, die entfernt werden sollen:

```powershell
$namen = @("Max", "Peter", "Anna")
$namenOhnePeter = $namen | Where-Object { $_ -ne "Peter" }
```

In diesem Beispiel wird das Element "Peter" aus dem Array `$namen` entfernt, indem alle Elemente gefiltert werden `-ne`, die nicht gleich "Peter" sind.

## Zugreifen auf einzelne Elemente

Die Elemente eines Arrays sind durchnummeriert und können über den Index angesprochen werden, wobei der Index bei `0` beginnt. Zum Beispiel kann man das erste Element des Arrays `$namen` wie folgt abrufen:

```powershell
$erstesElement = $namen[0] # Max
```

Es ist auch möglich, einen Bereich von Elementen abzurufen. Zum Beispiel gibt der folgende Code die ersten beiden Elemente des Arrays `$namen` zurück:

```powershell
$ersteZweiElemente = $namen[0..1] # Max, Peter
```

In diesem Beispiel wird das Array mit den Elementen "Max" und "Peter" in `$ersteZweiElemente` gespeichert.
