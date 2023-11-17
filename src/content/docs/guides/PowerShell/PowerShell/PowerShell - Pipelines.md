---
title: "PowerShell - Pipelines"
description: "PowerShell - Pipelines"
---

# PowerShell - Pipelines

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# **Was sind PowerShell-Pipelines?**

PowerShell-Pipelines ermöglichen es Ihnen, mehrere Befehle miteinander zu verketten. Das bedeutet, dass **die Ausgabe eines Befehls** direkt als **Eingabe für den nächsten Befehl** übergeben wird. Diese Funktion kann komplexe Aufgaben vereinfachen, den Bedarf an temporären Dateien reduzieren und Ihren Code lesbarer machen. Es spart viel Zeit!

# **Der Syntax**

Das Hauptkomponente einer Pipeline ist das Pipe-Symbol `|`. Die Syntax ist sehr einfach:

```powershell
Befehl1 | Befehl2
```

Befehl1 erzeugt eine Ausgabe, die dann als Eingabe für Befehl2 übergeben wird.

## **Praktische Beispiele**

Lassen Sie uns einige Beispiele betrachten, um besser zu verstehen, wie Pipelines funktionieren:

### Filtern von Prozessen nach Name:

Angenommen, Sie möchten eine Liste aller laufenden Prozesse mit dem Namen "chrome" sehen. Sie können die folgende Pipeline verwenden:

```powershell
Get-Process | Where-Object { $_.Name -eq "chrome" }
```

In diesem Beispiel ruft **`Get-Process`** die Liste aller laufenden Prozesse ab, und **`Where-Object`** filtert die Ausgabe basierend auf der angegebenen Bedingung. Das Symbol **`$_`** repräsentiert das aktuelle Objekt, das verarbeitet wird. 

Der Output von `Get-Process` ist eine Liste mit Prozessen, welche dann von `Where-Object` **Iteriert** wird. Somit haben wir in den **geschweiften Klammern von `Where-Object`** Zugriff auf das Objekt für **jeden einzelnen Prozess**, wobei wir auf den `Namen` zugreifen und einen einfachen String-Vergleich `-eq` mit “chrome” machen.

### Zählen von Dateien in einem Verzeichnis:

Angenommen, Sie möchten die Anzahl der Dateien im Verzeichnis `C:\Windows\System32` zählen. Hier ist eine einfache Pipeline, um das zu erledigen:

```powershell
Get-ChildItem -Path 'C:\Windows\System32' -File | Measure-Object | Select-Object -ExpandProperty Count
```

**`Get-ChildItem`** listet die Dateien im angegebenen Verzeichnis auf, **`-File`** stellt sicher, dass nur Dateien berücksichtigt werden, **`Measure-Object`** zählt sie und **`Select-Object`** zeigt die endgültige Anzahl an.

### Stoppen von nicht reagierenden Prozessen:

Stellen Sie sich vor, Sie möchten alle nicht reagierenden Prozesse auf Ihrem System stoppen. Diese Pipeline wird Ihnen dabei helfen, den Job zu erledigen:

```powershell
Get-Process | Where-Object { $_.Responding -eq $false } | Stop-Process -Force
```

**`Get-Process`** ruft die Liste aller laufenden Prozesse ab, **`Where-Object`** filtert die nicht reagierenden Prozesse, und **`Stop-Process`** stoppt sie mit dem Flag **`-Force`**.
