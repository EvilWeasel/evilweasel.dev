---
title: "Was ist PowerShell?"
description: "Was ist PowerShell?"
---

# Was ist PowerShell?

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:50
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

Haben Sie sich jemals gefragt, was PowerShell ist und wie es das Leben als Systemadministrator vereinfachen kann? In diesem Artikel werden wir die Grundlagen dessen untersuchen, was PowerShell ist und warum es ein unverzichtbares Werkzeug für jeden IT-Professionellen ist.

PowerShell ist eine Shell und Skriptsprache, die für Systemverwaltungsaufgaben konzipiert wurde. Es bietet eine effiziente Möglichkeit, sich wiederholende Aufgaben wie die Konfiguration von Servern oder die Verwaltung von Windows-Diensten zu automatisieren. Mit PowerShell können Sie problemlos Remote-Systeme verwalten, Skripte ausführen und Systeminformationen abrufen, alles von einer einzigen Befehlszeilenschnittstelle aus.

Neben seiner Befehlszeilenschnittstelle enthält PowerShell auch eine Skriptsprache, mit der Sie komplexe Aufgaben automatisieren können.

# Was ist eine Shell

Eine Shell ist eine Schnittstelle, die es Benutzern ermöglicht, mit einem Betriebssystem zu interagieren, indem sie Befehle eingeben oder Skripte ausführen. Im Kontext von PowerShell beziehen wir uns auf eine Befehlszeilenshell, die eine textbasierte Schnittstelle zum Ausführen von Befehlen und Skripten auf dem Windows Betriebssystem bietet.

Es gibt verschiedene Arten von Shells, wie die auf Unix basierende Bash-Shell oder die Windows-Befehlszeile (cmd.exe). PowerShell ist jedoch speziell für das Windows-Betriebssystem konzipiert, obwohl es jetzt auch auf anderen Plattformen wie macOS und Linux verfügbar ist.

[Installieren von PowerShell unter Linux - PowerShell](https://learn.microsoft.com/de-de/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.3)

# **Vorteile von PowerShell**

PowerShell bietet mehrere Vorteile gegenüber traditionellen Befehlszeilenshells wie cmd.exe:

1. **Objektorientiert:** Im Gegensatz zu anderen Shells, die hauptsächlich mit Text arbeiten, arbeitet PowerShell mit Objekten. Das bedeutet, dass Sie, wenn Sie einen Befehl in PowerShell ausführen, nicht nur plain Text-Ausgabe erhalten; Sie erhalten strukturierte Daten, die Sie manipulieren und zwischen Befehlen übergeben können.
2. **Fast eine Programmiersprache:** PowerShell verwendet eine Skriptsprache, die auf dem .NET Framework basiert und im Vergleich zu Batch-Skripting in cmd.exe komplexere und anspruchsvollere Skripte ermöglicht.
3. **Integriert mit Windows:** PowerShell ist eng in das Windows-Betriebssystem integriert und ermöglicht eine einfache Verwaltung von Windows-Komponenten wie der Registry, Active Directory und Windows Management Instrumentation (WMI).
4. **Konsistenz:** PowerShell folgt einer einheitlichen Syntax und Namenskonvention, was es einfacher macht zu lernen und zu verwenden.
5. **Erweiterbarkeit:** PowerShell ermöglicht die Erstellung und Verwendung von benutzerdefinierten Modulen, die seine Funktionalität noch weiter erweitern können.

# Bevor wir anfangen…

Für die Arbeit mit PowerShell, empfehle ich folgende Anwendungen/Erweiterungen zu verwenden:

## Empfehlenswert zur Arbeit mit PowerShell:

- 🔋PowerShell (am besten die neuste Version aus dem Windows Store, oder von der Website)
    
    [Installing PowerShell on Windows - PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3)
    
- ⌨️Visual Studio Code (nicht mit Visual Studio <Jahreszahl> verwechseln), inklusiver folgender Erweiterungen:
    - 🪄PowerShell Erweiterung ⇒ bietet autocomplete und Syntax-Highlighting
        
        [](https://marketplace.visualstudio.com/items?itemName=ms-vscode.PowerShell)
        
    - ⚠️Statusbar error ⇒ Zeigt fehler am Bildschirmrand an, in der Zeile, wo der Fehler gemacht wurde
        
        [](https://marketplace.visualstudio.com/items?itemName=JoeBerria.statusbarerror)
        
    - 🦘TabOut ⇒ ermöglicht das “herausspringen” des Cursors aus einer Klammer heraus (einfach ausprobieren und genießen 😄)
        
        [](https://marketplace.visualstudio.com/items?itemName=albert.TabOut)
        

## Nicht notwendig, aber sehr Hilfsreiche Tools:

- 🤖ChatGPT ⇒ Kann bei vielen Problemen oder Fragestellungen zu PowerShell helfen und, falls die Anweisungen klar genug definiert sind, den Code sogar selbst schreiben 😮
    
    [](https://chat.openai.com/)
    
- 🤖Github Copilot ⇒ AI-Code-Generation direkt in VSCode
    
    [Quickstart for GitHub Copilot - GitHub Docs](https://docs.github.com/en/copilot/quickstart)
    
- 🔗Pieces for Developers ⇒ Ermöglicht speichern von Code-Snippets, welche durch AI automatisch mit Meta-Daten gefüllt und durchsuchbar gemacht werden. Fügt außerdem zusätzliche Links mit zusätzlichen Informationen hinzu
    
    [Pieces for Developers - Desktop App Home](https://pieces.app/)
    
- 🌍Github ⇒ Ermöglicht das sichern, versionieren und teilen von Code mit Kollegen oder der Welt
    
    [GitHub: Let’s build from here](https://github.com/)
    

# **PowerShell-Komponenten**

PowerShell besteht aus mehreren Komponenten, die zusammenarbeiten, um seine Funktionalität bereitzustellen. Einige der wichtigsten Komponenten sind:

## **Cmdlets**

Cmdlets (ausgesprochen "command-lets") sind einfache, einzelne Funktionen ausführende Befehle, die in PowerShell spezifische Aktionen ausführen. Sie folgen einer Verben-Nomen-Namenskonvention wie **`Get-ChildItem`**, **`New-Item`** oder **`Remove-Item`**. Dies macht es einfach zu verstehen, was ein Cmdlet tut, indem man sich nur seinen Namen ansieht.

## **Aliasse**

Aliasse sind kurze, alternative Namen für Cmdlets, die das Tippen von Befehlen schneller und bequemer machen können. Anstelle von **`Get-ChildItem`** können Sie beispielsweise das Alias **`gci`,** oder auch ls, verwenden. PowerShell verfügt über viele integrierte Aliasse, und Sie können auch eigene benutzerdefinierte Aliasse erstellen.

Um ein eigenes Alias in PowerShell zu erstellen, verwenden Sie das Cmdlet **`New-Alias`**. Verwenden Sie beispielsweise den folgenden Befehl, um ein Alias für **`git commit -m "Initial Commit"`** als **`ginit`** zu erstellen:

```powershell
New-Alias -Name ginit -Value 'git commit -m "Initial Commit"'
```

Nach Ausführung dieses Befehls können Sie **`ginit`** als Abkürzung verwenden.

## **Variablen**

Variablen in PowerShell werden verwendet, um Daten wie Zeichenfolgen, Zahlen oder Objekte zu speichern. Sie werden durch ein Dollarzeichen (**`$`**) gefolgt von einem Variablennamen wie **`$var`** angezeigt. Variablen können in Ausdrücken verwendet oder als Parameter an Cmdlets übergeben werden.

# **PowerShell-Syntax und Konventionen**

PowerShell hat seine eigene einzigartige Syntax und Konventionen, die Benutzern dabei helfen, Befehle und Skripte leicht zu verstehen und zu schreiben. Hier sind einige der wesentlichen Syntax und Konventionen, die Sie kennen müssen:

## **Groß- und Kleinschreibung**

PowerShell ist nicht groß- oder kleinschreibungsempfindlich, was bedeutet, dass Sie Cmdlets, Variablen und andere Elemente entweder in Groß- oder Kleinschreibung eingeben können und PowerShell sie auf dieselbe Weise interpretiert. Zum Beispiel werden **`Get-ChildItem`**, **`get-childitem`** und **`gEt-ChIlDiTeM`** als gleichwertig betrachtet.

## **Befehlsstruktur**

Die grundlegende Struktur eines PowerShell-Befehls besteht aus einem Cmdlet, gefolgt von optionalen Parametern und ihren Werten. Das allgemeine Format lautet:

```powershell
Cmdlet-Name -ParameterName ParameterValue
```

Um beispielsweise den Inhalt des Verzeichnisses **`C:\\Windows`** aufzulisten, können Sie den folgenden Befehl verwenden:

```powershell
Get-ChildItem -Path C:\\Windows
```

Hier ist **`Get-ChildItem`** das Cmdlet, **`-Path`** ein Parameter und **`C:\\Windows`** der Parameterwert.

## **Pipeline**

Die Pipeline-Funktion von PowerShell ermöglicht es Ihnen, die Ausgabe eines Cmdlets als Eingabe an ein anderes Cmdlet zu übergeben. Sie können mehrere Cmdlets durch Verwendung des Pipe-Symbols (**`|`**) miteinander verketten. Dies ermöglicht es Ihnen, komplexe Befehlsfolgen durch Kombination einfacherer Befehle zu erstellen.

Beispielsweise können Sie mit dem folgenden Befehl alle Textdateien im Verzeichnis **`C:\\Windows`** auflisten:

```powershell
Get-ChildItem -Path C:\\Windows | Where-Object { $_.Extension -eq '.txt' }
```

Hier wird die Ausgabe des Cmdlets **`Get-ChildItem`** an das Cmdlet **`Where-Object`** weitergeleitet, das die Ergebnisse basierend auf der angegebenen Bedingung filtert.

## **Anführungszeichen**

In PowerShell können Sie sowohl einfache (**`'`**) als auch doppelte (**`"`**) Anführungszeichen verwenden, um Strings zu definieren. Sie verhalten sich jedoch unterschiedlich:

### Einfache Anführungszeichen (**`'`**):

Diese definieren einen Literal-String, was bedeutet, dass Variablen oder Escape-Zeichen innerhalb des Strings als reiner Text behandelt werden.

Beispiel:

```powershell
$name = 'John'
$greeting = 'Hello, $name'
Write-Host $greeting
```

Ausgabe:

```powershell
Hello, $name
```

### Doppelte Anführungszeichen (**`"`**):

Diese definieren einen erweiterbaren String, was bedeutet, dass Variablen innerhalb des Strings durch ihre Werte ersetzt und Escape-Zeichen verarbeitet werden.

Beispiel:

```powershell
$name = 'John'
$greeting = "Hello, $name"
Write-Host $greeting
```

Ausgabe:

```powershell
Hello, John
```

## **Kommentieren**

In PowerShell können Sie Ihrem Code Kommentare hinzufügen, um Erklärungen oder Anmerkungen bereitzustellen. Kommentare werden nicht als Teil des Codes ausgeführt und helfen dabei, die Lesbarkeit und Wartbarkeit Ihrer Skripte zu verbessern. Es gibt zwei Arten von Kommentaren in PowerShell:

- Einzeilige Kommentare: Um einen einzeiligen Kommentar zu erstellen, verwenden Sie das Hash-Symbol (**`#`**) gefolgt von Ihrem Kommentartext.
    
    ```powershell
    # This is a single-line comment
    Get-ChildItem
    ```
    
- Mehrzeilige Kommentare: Um einen mehrzeiligen Kommentar zu erstellen, verwenden Sie die Symbole **`<#`** und **`#>`**, um Ihren Kommentartext einzuschließen.
    
    ```powershell
    <#
      This is a multi-line comment
      spanning multiple lines
    #>
    Get-ChildItem
    ```
    

## Mehrzeilige einzelne Befehle

Der `Verb-Noun` Syntax von PowerShell, und die “Verbosen” Optionen für Cmdlets (`-Force`, `-Recursive`) machen es zwar einfach zu verstehen, was ein Skript genau macht (vorausgesetzt man ließt die Dokumentation), allerdings führt dies dazu, dass wir regelmäßig einzelne Befehle schreiben, die weitaus länger sind, als wir Platz auf dem Monitor haben.

Wenn wir unseren Befehl in mehreren Zeilen schreiben wollen, funktioniert das zwar meist mit einem einfachen “newline”, um aber sicherzustellen, dass PowerShell unsere Anweisungen nicht Fehlinterpretiert, können wir das ganze auch explizit darstellen, mithilfe des Backtick ``` Characters.
