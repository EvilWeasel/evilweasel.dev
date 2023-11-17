---
title: "PowerShell - Kontrollstrukturen"
description: "PowerShell - Kontrollstrukturen"
---

# PowerShell - Kontrollstrukturen

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:53
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# **Bedingte Anweisungen - If, ElseIf, Else**

Die If-Anweisung ist wahrscheinlich die bekannteste Kontrollstruktur. Mit If, ElseIf und Else können wir Bedingungen überprüfen und entsprechende Aktionen ausführen.

```powershell
$temperature = 25

if ($temperature -le 0) {
    Write-Host "Es ist sehr kalt!"
} elseif ($temperature -lt 15) {
    Write-Host "Es ist kühl."
} else {
    Write-Host "Die Temperatur ist angenehm."
}
```

In diesem Beispiel überprüfen wir die Variable **`$temperature`**. Wenn die Temperatur kleiner als 0 ist, wird "Es ist sehr kalt!" ausgegeben. Wenn die Temperatur zwischen 0 und 15 liegt, wird "Es ist kühl." ausgegeben, und in allen anderen Fällen wird "Die Temperatur ist angenehm." ausgegeben. Der `else` Block fängt dabei alle anderen Fälle ab, sprich wenn unsere Temperatur der der Sonne ensprechen würde, bliebe die Ausgabe immernoch *Die Temperatur ist angenehm.*

Hier ein weiteres Beispiel:

```powershell
$age = 40

if ($age -lt 18) {
    Write-Host "Du bist minderjährig."
} elseif ($age -lt 60) {
    Write-Host "Du bist im Erwachsenenalter."
} else {
    Write-Host "Du bist im Rentenalter."
}
```

## Switch-Anweisung

Die Switch-Anweisung ist eine Alternative zur Verwendung mehrerer If-ElseIf-Else-Anweisungen. Sie ermöglicht das Testen einer Variable oder eines Ausdrucks gegen mehrere mögliche Werte und führt den entsprechenden Codeblock aus. Diese Variante ist wesentlich einfacher zu lesen, allerdings sollte es auch mit dem `switch` Statement nicht übertreiben.

```powershell
$dayOfWeek = "Montag"

switch ($dayOfWeek) {
    "Montag" {
        Write-Host "Es ist Montag, die Woche beginnt."
    }
    "Freitag" {
        Write-Host "Es ist Freitag, bald Wochenende!"
    }
    "Samstag" -or "Sonntag" {
        Write-Host "Es ist Wochenende, genieße deine freie Zeit!"
    }
    default {
        Write-Host "Ein anderer Wochentag."
    }
}
```

# **Schleifen - For, ForEach, While, Do-While**

Schleifen ermöglichen die Wiederholung von Anweisungen, was nützlich ist, wenn wir über eine Reihe von Objekten iterieren oder eine Aufgabe mehrmals ausführen möchten. Mehr Informationen dazu hier: [PowerShell - Iteration & Schleifen](http://localhost:4321/guides/powershell%20-%20iteration%20&%20schleifen%2044f125a4050e4d8b886c28ab7545e777.md/) 

## **For-Schleife**

Die For-Schleife wird verwendet, wenn Sie wissen, wie oft eine Anweisung ausgeführt werden soll.

```powershell
for ($i = 0; $i -lt 5; $i++) {
    Write-Host "Zählung: $i"
}
```

In diesem Beispiel wird die Zählung fünfmal ausgegeben, wobei der Wert von **`$i`** von 0 bis 4 reicht.

## **ForEach-Schleife**

Die ForEach-Schleife wird verwendet, um über eine Sammlung von Objekten zu iterieren.

```powershell
$names = "Alice", "Bob", "Charlie"

foreach ($name in $names) {
    Write-Host "Hello, $name!"
}
```

In diesem Beispiel geben wir eine Begrüßung für jeden Namen in der **`$names`**-Sammlung aus.

## **While-Schleife**

Die While-Schleife wird ausgeführt, solange eine Bedingung erfüllt ist.

```powershell
$counter = 0

while ($counter -lt 5) {
    Write-Host "Zählung: $counter"
    $counter++
}
```

In diesem Beispiel wird die Zählung ähnlich wie bei der For-Schleife fünfmal ausgegeben.

## **Do-While-Schleife**

Die Do-While-Schleife ist ähnlich wie die While-Schleife, führt aber die Anweisungen mindestens einmal aus, bevor die Bedingung überprüft wird.

```powershell
$counter = 0

do {
Write-Host "Zählung: $counter"
$counter++
} while ($counter -lt 5)
```

In diesem Beispiel wird die Zählung wie bei der While-Schleife fünfmal ausgegeben. Der Unterschied besteht darin, dass die Do-While-Schleife die Anweisungen mindestens einmal ausführt, selbst wenn die Bedingung von Anfang an nicht erfüllt ist.

```powershell
$counter = 0

do {
Write-Host "Zählung: $counter"
$counter++
} while ($counter < 0)
```

Hier wird der `counter` ausgegeben, obwohl die Bedingung falsch ist und quasi nicht iteriert wird.
