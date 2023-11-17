---
title: "PowerShell - Variablen"
description: "PowerShell - Variablen"
---

# PowerShell - Variablen

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:53
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

In PowerShell werden Variablen verwendet, um Daten zu speichern. Diese Daten haben immer einen **Datentyp (wie String, Integer, Datum, …)**. Weitere Informationen zu Datentypen finden Sie in diesem Beitrag:

[PowerShell - Daten Typen](http://localhost:4321/guides/powershell%20-%20daten%20typen%20c85f9bec1357444da4c614a11f363193.md/) 

Zur Vereinfachung kann man sich Variablen auch als **Container für Werte** sehen. Ich habe einen Wert (z.B. `“Hello World”`), dem ich ein Label (z.B. `$Greeting`) gebe, damit ich den Wert an mehreren stellen einsetzen kann, ohne diesen erneut tippen zu müssen.

Um der Variablen den Wert wie beschrieben zuzuweisen, nutzen wir das `=` (Assignment/Zuweisungsoperator).

```powershell
$Greeting= "Hello World”
```

## Verwendung von Variablen in PowerShell

Sobald Sie eine Variable erstellt und ihr einen Wert zugewiesen haben, können Sie sie in Ihrem PowerShell-Skript verwenden. Sie können auf die Variable verweisen, indem Sie ihren Namen mit einem Dollarzeichen voranstellen. Wenn Sie beispielsweise den Wert von "myVariable" anzeigen möchten, würden Sie Folgendes eingeben:

```powershell
Write-Output $Greeting
```

# Variablenskope in PowerShell

Haben Sie sich jemals über eine Variable gewundert, die scheinbar ohne ersichtlichen Grund null oder undefiniert ist, obwohl Sie sicher sind, dass Sie ihr einen Wert zugewiesen haben?

Dieses Rätsel kann oft auf das Konzept der Variablenskope in PowerShell zurückgeführt werden. Lassen Sie uns eintauchen und erkunden, wie das Verständnis von Variablenskopen in PowerShell einen Unterschied in Ihrer Skripterfahrung machen kann.

## **Variablenskope in PowerShell**

In PowerShell bestimmt der Skop einer Variablen, wo sie in Ihrem Skript aufgerufen und verwendet werden kann. Variablen können je nach Definitionsort unterschiedliche Skope haben. Wir konzentrieren uns auf zwei Hauptfälle: Variablen, die außerhalb von Funktionen definiert wurden, und Variablen, die innerhalb von Funktionen definiert wurden.

## **Variablen, die außerhalb von Funktionen definiert wurden**

Wenn Sie eine Variable außerhalb einer Funktion definieren, kann sie überall im gleichen Skript aufgerufen und verwendet werden. Erstellen wir eine Variable namens "outsideVariable" und weisen ihr einen Wert zu:

```powershell
$outsideVariable = "Ich bin außerhalb einer Funktion"
```

Wenn wir jetzt eine Funktion namens "ShowOutsideVariable" erstellen, können wir auf den Wert von "outsideVariable" innerhalb der Funktion zugreifen:

```powershell
function ShowOutsideVariable {
    Write-Output $outsideVariable
}
```

Wenn Sie die Funktion "ShowOutsideVariable" aufrufen, wird der Wert von "outsideVariable" angezeigt:

```powershell
ShowOutsideVariable
```

## **Variablen, die innerhalb von Funktionen definiert wurden**

Variablen, die innerhalb einer Funktion definiert wurden, können nur innerhalb dieser Funktion aufgerufen werden und sind außerhalb der Funktion nicht zugänglich. Dies wird als lokaler Skop bezeichnet. Erstellen wir eine Funktion namens "ShowInsideVariable" und definieren innerhalb der Funktion eine Variable namens "insideVariable":

```powershell
function ShowInsideVariable {
    $insideVariable = "Ich bin innerhalb einer Funktion"
    Write-Output $insideVariable
}
ShowInsideVariable
Write-Output $insideVariable # Dies wird keinen Wert anzeigen
```

Wenn Sie die Funktion `ShowInsideVariable` aufrufen, wird der Wert von `insideVariable` angezeigt.

Wenn Sie jedoch versuchen, auf die `insideVariable` außerhalb der `ShowInsideVariable`-Funktion zuzugreifen, erkennt PowerShell sie nicht, da sie nur innerhalb der Funktion zugänglich ist.
