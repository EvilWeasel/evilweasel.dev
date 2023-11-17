---
title: "PowerShell - Objekte & Klassen"
description: "PowerShell - Objekte & Klassen"
---

# PowerShell - Objekte & Klassen

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

Ein Objekt ist wie ein **Container** für mehrere andere Daten und Funktionen. Diese Informationen können zum Beispiel der Name einer Person, ihr Alter oder ihre Adresse sein. Objekte können in PowerShell auch Funktionen enthalten, die bestimmte Aktionen ausführen können. Zum Beispiel könnte ein Katzen-Objekt eine Funktion haben, um zu *miauen*. 

```powershell
$katze = @{
    Name = "Minka"
    Alter = 3
    Farbe = "schwarz"
    Miauen = {
        Write-Output "Miau!"
    }
}

# Zugriff auf Eigenschaften der Katze
Write-Output "Name: $($katze.Name)"
Write-Output "Alter: $($katze.Alter)"
Write-Output "Farbe: $($katze.Farbe)"

# Aufruf der Miau-Funktion der Katze
$katze.Miauen()
```

In diesem Beispiel wird ein neues Katzen-Objekt als Hashtable mit den Eigenschaften `Name`, `Alter`, `Farbe` und `Miauen` erstellt. 

Die Eigenschaften können über ihre **Schlüssel** (**keys** / also die Namen der Variablen) zugegriffen werden, z.B. `$katze.Name` für den Namen der Katze. Die `Miauen`-Eigenschaft enthält eine Funktion, die mit `$katze.Miauen()` aufgerufen werden kann, um die Katze miauen zu lassen.

## Klassen und Instanzen

Objekte sind sehr praktisch, aber was, wenn wir ein Objekt mehrmals benötigen? Was wenn wir ein Fantasy-Rollenspiel programmieren und wir gegen eine Armee an Orks kämpfen wollen. In solchen (oder auch weniger dramatischen) Szenarios lohnt es sich, eine Klasse für die Objekte zu definieren.

Eine Klasse ist wie eine **Blaupause** für ein Objekt. Sie *definiert*, welche `Eigenschaften` und `Funktionen` das Objekt haben soll. Nehmen wir ein einfaches Beispiel. Wenn wir eine Klasse für eine Katze definieren, könnte sie folgendermaßen aussehen:

```powershell
# Klassendefinition für 'Katze'
class Katze {
    [string] $Name
    [int] $Alter
    [string] $Farbe

		# In der Objektorientierung sprechen wir von Methoden, wenn
		# wir eine Funktion meinen, welche einer Klasse, oder der Instanz
		# einer Klasse, zugehörig ist. Einen wesentlichen Unterschied zwischen
		# Funktionen und Methoden gibt es demnach nicht.
    [void] Miauen() {
        Write-Output "Miau!"
    }
}

# Erstellen einer neuen Katzen-Instanz
$katze1 = [Katze]::new()
$katze1.Name = "Minka"
$katze1.Alter = 3
$katze1.Farbe = "schwarz"

# Zugriff auf Eigenschaften der Katze
Write-Output "Name: $($katze1.Name)"
Write-Output "Alter: $($katze1.Alter)"
Write-Output "Farbe: $($katze1.Farbe)"

# Aufruf der Miau-Funktion der Katze
$katze1.Miauen()

# Erstellen weiterer Katze
$katze2 = [Katze]::new()
# ...
```

In diesem Beispiel wird eine neue Klasse `Katze` definiert, die die Eigenschaften `Name`, `Alter`, `Farbe` und die Funktion `Miauen` enthält. Um eine neue Katzen-Instanz zu erstellen, verwenden wir die `new()`-Methode der Klasse. Dann können wir die Eigenschaften der Katze wie gewohnt festlegen und auf ihre Funktionen zugreifen.

Klassen sind sehr nützlich, wenn wir viele Objekte desselben Typs benötigen. Wir können eine Klasse einmal definieren und dann beliebig viele Instanzen dieser Klasse erstellen. Jede Instanz enthält ihre eigenen Werte für die Eigenschaften der Klasse und kann ihre eigenen Funktionen aufrufen.

Zu beachten ist hier, das `Katze` nun lediglich auf die **Klassendefinition** zeigt, was bedeutet, dass Katze keine Werte abgespeichert hat. Wie es sich für einen Bauplan gehört.

## Vererbung

Eine weitere nützliche Funktion von Klassen ist die Vererbung. Wenn wir eine Klasse erstellen, die von einer anderen Klasse erbt, übernimmt sie alle Eigenschaften und Funktionen der Elternklasse. Wir können dann nur die Eigenschaften und Funktionen hinzufügen oder überschreiben, die spezifisch für die Kind-Klasse sind.

Ein Beispiel für Vererbung in PowerShell:

```powershell
# Klassendefinition der Basis-/Eltern-Klasse
# Tiere können sprechen, und haben einen Namen und ein Alter 
class Tier {
    [string] $Name
    [int] $Alter

    [void] Sprechen() {
        Write-Output "Ein Tier spricht."
    }
}
# Klassendefinition der Kind-Klasse
# Katzen haben eine Farbe, können Miauen und habn zusätzlich alle Eigenschaften der Parent-Klasse
class Katze : Tier {
    [string] $Farbe

    [void] Miauen() {
        Write-Output "Miau!"
    }
}

# Erstellen einer neuen Katzen-Instanz
$katze2 = [Katze]::new()
$katze2.Name = "Minka"
$katze2.Alter = 3
$katze2.Farbe = "schwarz"

# Zugriff auf Eigenschaften der Katze
Write-Output "Name: $($katze2.Name)"
Write-Output "Alter: $($katze2.Alter)"
Write-Output "Farbe: $($katze2.Farbe)"

# Aufruf der Sprechen-Funktion der Katze
$katze2.Sprechen()
$katze2.Miauen()
```

In diesem Beispiel wird eine neue Klasse `Tier` definiert, die die Eigenschaften `Name`, `Alter` und die Funktion `Sprechen` enthält. Dann wird eine neue Klasse `Katze` definiert, die alle Eigenschaften und Funktionen von `Tier` erbt und zusätzlich die Eigenschaft `Farbe` und die Funktion `Miauen` enthält.
