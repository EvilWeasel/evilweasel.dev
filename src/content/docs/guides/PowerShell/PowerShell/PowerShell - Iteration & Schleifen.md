---
title: "PowerShell - Iteration & Schleifen"
description: "PowerShell - Iteration & Schleifen"
---

# PowerShell - Iteration & Schleifen

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

## Iteration

In PowerShell können wir Arrays verwenden, um eine Sammlung von Werten in einer einzigen Variablen zu speichern. Wenn wir dann auf jedes Element des Arrays zugreifen möchten, können wir eine Schleife verwenden. Eine Schleife ist ein Codeblock, der wiederholt ausgeführt wird, bis eine bestimmte Bedingung erfüllt ist.
Eine besondere Art der Schleife ist die `foreach`-Schleife. Diese Schleife durchläuft jedes Element des Arrays und führt für jedes Element denselben Code aus. Zum Beispiel können wir mit einer `foreach`-Schleife alle Elemente des `$namen`-Arrays ausgeben:

```powershell
$namen = @("Max", "Peter", "Anna")
foreach ($name in $namen) {
    Write-Output $name
}
```

Hier wird für jedes Element des `$namen`-Arrays eine Variable `$name` erstellt und der Wert des Elements zugewiesen. Der Code innerhalb der Schleife wird dann für jedes Element ausgeführt, wobei `$name` den aktuellen Wert des Elements enthält. In diesem Beispiel wird der Wert jedes Elements mit `Write-Output` ausgegeben.

Ein praktisches Beispiel für die `foreach`-Schleife in PowerShell ist das Durchlaufen eines Arrays von Dateinamen und das Ausführen einer Aktion für jede Datei. Zum Beispiel können wir mit der folgenden Schleife alle Dateien in einem bestimmten Verzeichnis ausgeben:

```powershell
$verzeichnis = "C:\\Users\\Max\\Documents"
$dateien = Get-ChildItem $verzeichnis

foreach ($datei in $dateien) {
    Write-Output $datei.Name
}
```

Hier wird zuerst das Verzeichnis `"C:\Users\Max\Documents"` in der Variable `$verzeichnis` gespeichert. Dann wird mit dem Cmdlet `Get-ChildItem` eine Liste aller Dateien im Verzeichnis abgerufen und in der Variable `$dateien` gespeichert. Schließlich wird eine `foreach`-Schleife verwendet, um jedes Element des `$dateien`-Arrays zu durchlaufen und den Namen jeder Datei mit `Write-Output` auszugeben.

## Varianten der Schleife

### For-Schleife

Die For-Schleife ist eine der grundlegenden Schleifenarten in PowerShell. Sie durchläuft eine Sammlung von Elementen und führt für jedes Element denselben Code aus. Eine typische Verwendung der For-Schleife besteht darin, ein bestimmtes Skript für jedes Element in einem Array auszuführen.

```powershell
$namen = @("Max", "Peter", "Anna")
for ($i = 0; $i -lt $namen.Length; $i++) {
    Write-Output "Name: $($namen[$i]), Index: $i"
}
```

In diesem Beispiel wird die For-Schleife verwendet, um jedes Element des `$namen`-Arrays zu durchlaufen. Die Schleife beginnt bei `$i = 0` und endet, wenn `$i` größer als oder gleich der Länge des Arrays ist. Der Code innerhalb der Schleife gibt den aktuellen Namen und den Index des Elements aus.

### While-Schleife

Die While-Schleife ist eine Schleifenart, die eine Bedingung prüft und solange ausgeführt wird, wie die Bedingung erfüllt ist. Eine typische Verwendung der While-Schleife besteht darin, eine Aktion so lange auszuführen, bis eine bestimmte Bedingung erfüllt ist.

```powershell
$zahl = 0
while ($zahl -lt 10) {
    Write-Output $zahl
    $zahl++
}
```

In diesem Beispiel wird die While-Schleife verwendet, um die Zahlen von 0 bis 9 auszugeben. Die Schleife beginnt bei `$zahl = 0` und wird solange ausgeführt, wie `$zahl` kleiner als 10 ist. Der Code innerhalb der Schleife gibt den aktuellen Wert von `$zahl` aus und erhöht ihn dann um 1.

### Do-While-Schleife

Die Do-While-Schleife ist eine Schleifenart, die ähnlich wie die While-Schleife funktioniert, aber anders aufgebaut ist. Sie prüft die Bedingung am Ende der Schleife und wird daher mindestens einmal ausgeführt. Eine typische Verwendung der Do-While-Schleife besteht darin, eine Aktion mindestens einmal auszuführen und dann zu prüfen, ob eine bestimmte Bedingung erfüllt ist, um fortzufahren.

```powershell
$zahl = 0
do {
    Write-Output $zahl
    $zahl++
} while ($zahl -lt 10)
```

In diesem Beispiel wird die Do-While-Schleife verwendet, um die Zahlen von 0 bis 9 auszugeben. Die Schleife beginnt bei `$zahl = 0` und wird solange ausgeführt, wie `$zahl` kleiner als 10 ist. Der Code innerhalb der Schleife gibt den aktuellen Wert von `$zahl` aus und erhöht ihn dann um 1. Da die Bedingung am Ende der Schleife geprüft wird, wird der Code innerhalb der Schleife mindestens einmal ausgeführt.

### ForEach-Object-Schleife

Die ForEach-Object-Schleife ist eine Schleifenart, die eine Aktion für jedes Element in einer Sammlung ausführt. Sie ähnelt der For-Schleife, ist aber einfacher zu verwenden, da sie weniger Code erfordert. Eine typische Verwendung der ForEach-Object-Schleife besteht darin, eine Aktion für jedes Element in einem Array oder einer anderen Sammlung auszuführen.

```powershell
$namen = @("Max", "Peter", "Anna")
$namen | ForEach-Object {
    Write-Output "Name: $_"
}
```

In diesem Beispiel wird die ForEach-Object-Schleife verwendet, um jedes Element des `$namen`-Arrays zu durchlaufen. Der Code innerhalb der Schleife gibt den aktuellen Namen aus, indem er auf die automatische Variable `$_` zugreift. Beachten Sie, dass in diesem Beispiel keine explizite Schleifenvariable verwendet wird, da die ForEach-Object-Schleife automatisch eine solche Variable erstellt.
