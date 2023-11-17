---
title: "PowerShell - Funktionen"
description: "PowerShell - Funktionen"
---

# PowerShell - Funktionen

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

Funktionen sind eines der Hauptelemente, die die Arbeit mit PowerShell so einfach und effizient gestalten. In diesem Abschnitt erfahren Sie, wie Sie PowerShell-Funktionen erstellen und nutzen können. Dabei konzentrieren wir uns auf praxisnahe Beispiele, die Ihnen helfen, das Beste aus PowerShell herauszuholen.

# **Grundlagen von PowerShell-Funktionen**

Funktionen sind benutzerdefinierte Codeblöcke, die eine bestimmte Aufgabe ausführen. Sie bieten Wiederverwendbarkeit, bessere Strukturierung und einfachere Wartung des Codes. Hier ist ein Beispiel für eine einfache PowerShell-Funktion:

```powershell
function Show-IPAddress {
    $IPAddresses = (Get-NetIPAddress -AddressFamily IPv4).IPAddress
    foreach ($IPAddress in $IPAddresses) {
        Write-Host $IPAddress
    }
}

Show-IPAddress
```

Die Funktion **`Show-IPAddress`** verwendet das Cmdlet **`Get-NetIPAddress`**, um alle IPv4-Adressen des aktuellen Computers abzurufen und sie auf dem Bildschirm anzuzeigen. 

Der Vorteil einer Funktion besteht darin, dass wir diesen Code-Block, nachdem er einmal definiert wurde, immer wieder ausführen können. Falls wir außerdem einen Fehler machen, und unser Script abstürzt/abbricht, dann können wir leicht nachvollziehen, an welcher Stelle es passiert ist, und wie wir das Problem lösen können.

Ein Beispiel für eine leicht komplexere Funktion ist:

```powershell
function Get-LargestFileSize {
		$FolderPath = $FolderPath = "C:\Windows\System32"
    $LargestSize = 0
    $LargestFile = $null

    $Files = Get-ChildItem -Path $FolderPath -File

    foreach ($File in $Files) {
        if ($File.Length -gt $LargestSize) {
            $LargestSize = $File.Length
            $LargestFile = $File
        }
    }

    return $LargestFile
}

$LargestFile = Get-LargestFileSize
Write-Host "Die größte Datei in C:\Windows\System32 ist $($LargestFile.Name) mit einer Größe von $($LargestFile.Length) Bytes."
```

Die Funktion **`Get-LargestFileSize`** gibt die größte Datei im angegebenen Verzeichnis zurück. Das kann hilfreich sein, um Speicherplatzprobleme oder große Dateien zu identifizieren.

# **Parameter in Funktionen**

Parameter sind eine Möglichkeit, Daten an Funktionen zu übergeben. Mit Parametern können Funktionen flexibler und wieder verwendbarer gestaltet werden. Schauen wir uns ein Beispiel an, das zeigt, wie Parameter in PowerShell-Funktionen verwendet werden:

```powershell
function Greet-User {
    param (
        [string]$Name
    )

    Write-Host "Hallo, $Name!"
}

Greet-User -Name "John Doe"
```

In diesem Beispiel akzeptiert die Funktion **`Greet-User`** einen Parameter namens **`$Name`** und gibt eine Begrüßung mit dem übergebenen Namen aus. 

Ein weiteres Beispiel, das Parameter verwendet, ist die Funktion **`Get-LargestFileSize`.** Diese können wir leicht abändern, damit diese den Pfad als Parameter entgegen nimmt. Dadurch wird die Funktion **wieder verwendbar**, indem wir den Pfad beim Aufrufen der Funktion übergeben.

```powershell
function Get-LargestFileSize {
    param (
        [string]$FolderPath
    )

    $LargestSize = 0
    $LargestFile = $null

    $Files = Get-ChildItem -Path $FolderPath -File

    foreach ($File in $Files) {
        if ($File.Length -gt $LargestSize) {
            $LargestSize = $File.Length
            $LargestFile = $File
        }
    }

    return $LargestFile
}

$FolderPath = "C:\Windows\System32"
$LargestFile = Get-LargestFileSize -FolderPath $FolderPath
Write-Host "Die größte Datei in $FolderPath ist $($LargestFile.Name) mit einer Größe von $($LargestFile.Length) Bytes."
```

Die Funktion **`Get-LargestFileSize`** akzeptiert nun einen Parameter **`$FolderPath`** und gibt die größte Datei im angegebenen Verzeichnis zurück. Dies kann für Sysadmins hilfreich sein, um Speicherplatzprobleme oder große Dateien zu identifizieren. Weil wir den Pfad als Parameter übergeben, können wir jetzt in allen Verzeichnissen auf unserem Dateisystem diese Funktion anwenden, ohne den Code im Script anfassen zu müssen.

```powershell
Get-LargestFileSize -FolderPath $HOME
```

Als drittes Beispiel erstellen wir eine Funktion, die zwei Parameter akzeptiert und die Summe dieser Zahlen zurückgibt:

```powershell
function Add-Numbers {
    param (
        [int]$Number1,
        [int]$Number2
    )

    $Sum = $Number1 + $Number2
    return $Sum
}

$Result = Add-Numbers -Number1 5 -Number2 7
Write-Host "Die Summe von 5 und 7 ist: $Result"
```

In diesem Beispiel akzeptiert die Funktion **`Add-Numbers`** zwei Parameter, **`$Number1`** und **`$Number2`**, addiert diese beiden Zahlen und gibt die Summe zurück.

# **Funktionen mit Pipeline-Unterstützung**

Die Pipeline ist ein Konzept in PowerShell, das die Ausgabe eines Befehls als Eingabe für einen anderen Befehl verwendet. Um eine Funktion pipeline-fähig zu machen, muss sie so gestaltet sein, dass sie mit dem Pipeline-Objekt arbeiten kann. In diesem Abschnitt werden wir drei Beispiele untersuchen, die unterschiedliche Aspekte der Arbeit mit der Pipeline in PowerShell-Funktionen demonstrieren. Davor sollten wir allerdings mit einigen neuen Keywords vertraut sein:

## Begin, Process und End

PowerShell unterstützt drei wichtige Keywords, die zur Kontrolle des Verhaltens von Skripten und Funktionen verwendet werden können: Begin, Process und End. Jedes dieser Keywords definiert einen Block innerhalb der Funktion, in dem Code ausgeführt werden kann, und beeinflusst, wie die Funktion Daten empfängt und verarbeitet.

### Begin

Der Begin-Block wird einmal am Anfang der Funktion ausgeführt und dient dazu, Initialisierungsaufgaben auszuführen, z.B. das Setzen von Variablen oder das Validieren von Eingabeparametern. Dieser Block wird vor dem Verarbeiten von Daten in der Pipeline ausgeführt.

```powershell
function Count-Files {
    param([string]$Path)

    begin {
        $fileCount = 0
        Write-Host "Begin-Block: Zähler initialisiert"
    }
}
```

### Process

Der Process-Block ist das Herzstück der Funktion und wird für jeden einzelnen Eintrag, der über die Pipeline empfangen wird, ausgeführt. Dies ist der Hauptblock für die Verarbeitung von Daten und für die Arbeit mit dem Input.

```powershell
function Count-Files {
    param([string]$Path)

    begin {
        $fileCount = 0
        Write-Host "Begin-Block: Zähler initialisiert"
    }

    process {
        $files = Get-ChildItem -Path $Path -File
        $fileCount += $files.Count
        Write-Host "Process-Block: Aktuelles Verzeichnis ($Path) enthält $($files.Count) Dateien"
    }
}
```

### End

Der End-Block wird am Ende der Funktion aufgerufen, nachdem alle Eingaben aus der Pipeline verarbeitet wurden. Dies ist der ideale Ort, um Zusammenfassungen oder abschließende Aktionen durchzuführen.

```powershell
function Count-Files {
    param([string]$Path)

    begin {
        $fileCount = 0
        Write-Host "Begin-Block: Zähler initialisiert"
    }

    process {
        $files = Get-ChildItem -Path $Path -File
        $fileCount += $files.Count
        Write-Host "Process-Block: Aktuelles Verzeichnis ($Path) enthält $($files.Count) Dateien"
    }

		end {
        Write-Host "End-Block: Gesamtzahl der Dateien: $fileCount"
    }
```

### Zusammenfassung

Im oben gezeigten Beispiel **`Count-Files`** haben wir eine PowerShell-Funktion erstellt, die die Anzahl der Dateien in verschiedenen Verzeichnissen zählt und die Gesamtzahl am Ende ausgibt. Die Funktion verwendet die **Begin**, **Process** und **End** Keywords, um verschiedene Aufgaben auszuführen:

1. **Begin**: Im Begin-Block initialisieren wir einen Zähler (**`$fileCount`**) auf **`0`**. Dieser Block wird nur einmal am Anfang der Funktion aufgerufen und dient zur Vorbereitung der Funktion.
2. **Process**: Im Process-Block verwenden wir **`Get-ChildItem`**-Cmdlet, um alle Dateien im übergebenen Verzeichnispfad (**`$Path`**) zu erhalten und deren Anzahl dem Dateizähler hinzuzufügen. Dieser Block wird für jeden Pfad ausgeführt, der über die Pipeline an die Funktion übergeben wird.
3. **End**: Schließlich verwenden wir den End-Block, um die Gesamtzahl der Dateien `$fileCount` auszugeben. Dieser Block wird einmal aufgerufen, nachdem alle Elemente in der Pipeline verarbeitet wurden.

## **Beispiel 1: Funktion zum Filtern von Dateien nach Dateityp**

```powershell
function Get-FilesByExtension {
    param (
        [Parameter(ValueFromPipeline = $true)]
        [System.IO.FileInfo]$File,
        [string]$Extension
    )

    process {
        if ($File.Extension -eq $Extension) {
            $File
        }
    }
}

Get-ChildItem -Path $HOME -File | Get-FilesByExtension -Extension ".txt"
```

In diesem Beispiel erstellen wir eine Funktion, die Dateien nach ihrer Dateierweiterung filtert. Die Funktion **`Get-FilesByExtension`** akzeptiert einen Dateityp als Parameter und gibt Dateien mit dieser Erweiterung aus. Der Parameter **`ValueFromPipeline`** gibt an, dass das **`$File`**-Objekt von der Pipeline erwartet wird. Das process Keyword steht hier für den Anweisungsblock, in dem jedes Item, welches durch die Pipe kommt, verarbeitet wird.

## **Beispiel 2: Berechnen des Durchschnittsalters einer Liste von Personen**

```powershell
function Get-AverageAge {
    param (
        [Parameter(ValueFromPipeline = $true)]
        [int]$Age
    )

    begin {
        $totalAge = 0
        $count = 0
    }

    process {
        $totalAge += $Age
        $count++
    }

    end {
        $averageAge = $totalAge / $count
        return $averageAge
    }
}

$ages = @(23, 30, 45, 38, 28)
$averageAge = $ages | Get-AverageAge
Write-Host "Das Durchschnittsalter beträgt: $averageAge"
```

In diesem Beispiel erstellen wir eine Funktion, die das Durchschnittsalter einer Liste von Personen berechnet. Die Funktion **`Get-AverageAge`** verarbeitet Alterswerte aus der Pipeline und verwendet die Blöcke **`begin`**, **`process`** und **`end`**, um die Berechnung durchzuführen.

## **Beispiel 3: Anzeigen von Prozessinformationen**

```powershell
function Show-ProcessInfo {
    param (
        [Parameter(ValueFromPipeline = $true)]
        [System.Diagnostics.Process]$Process
    )

    process {
        Write-Host "Process Name: $($Process.ProcessName)"
        Write-Host "Process ID: $($Process.Id)"
        Write-Host "Working Set: $($Process.WorkingSet64) Bytes"
        Write-Host ""
    }
}

Get-Process | Sort-Object -Property WorkingSet64 -Descending | Select-Object -First 5 | Show-ProcessInfo
```

In diesem Beispiel erstellen wir eine Funktion, die Informationen zu Prozessen anzeigt. Die Funktion **`Show-ProcessInfo`** nimmt Prozessobjekte aus der Pipeline entgegen und zeigt deren Name, Prozess-ID und Arbeitssatz (Speicherverbrauch) an. Im Beispiel verwenden wir **`Get-Process`**, um alle laufenden Prozesse zu erhalten, sortieren sie nach Arbeitssatz, wählen die fünf Prozesse mit dem höchsten Speicherverbrauch aus und geben die Informationen mit `

# **Advanced Functions**

Advanced Functions erweitern die Möglichkeiten von PowerShell-Funktionen, indem sie eine einfachere Syntax, erweiterte Fehlerbehandlung und Unterstützung für gemeinsame Parameter bieten. Hier ist ein Beispiel für eine Advanced Function:

```powershell
function Test-IsEven {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory=$true)]
        [int]$Number
    )

    $IsEven = $Number % 2 -eq 0
	  return $IsEven
}

$Number = 4
if (Test-IsEven -Number $Number) {
		Write-Host "$Number ist gerade."
} else {
		Write-Host "$Number ist ungerade."
}
```

In diesem Beispiel verwendet die Funktion `Test-IsEven` das **CmdletBinding-Attribut**, um erweiterte Funktionen zu aktivieren. Der Parameter `$Number` ist als obligatorisch gekennzeichnet, sodass die Funktion nur aufgerufen werden kann, wenn der Parameter angegeben ist.

Hier ein paar weitere Beispiele für **Advanced Functions**:

```powershell
function Get-FileAge {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory=$true)]
        [string]$FilePath,

        [Parameter(Mandatory=$false)]
        [ValidateSet('Days', 'Hours', 'Minutes', 'Seconds')]
        [string]$TimeUnit = 'Days'
    )

    if (Test-Path -Path $FilePath) {
        $File = Get-Item $FilePath
        $FileAge = (Get-Date) - $File.CreationTime

        switch ($TimeUnit) {
            'Days' { $FileAge = $FileAge.TotalDays }
            'Hours' { $FileAge = $FileAge.TotalHours }
            'Minutes' { $FileAge = $FileAge.TotalMinutes }
            'Seconds' { $FileAge = $FileAge.TotalSeconds }
        }

        return [math]::Round($FileAge, 2)
    } else {
        Write-Error "Datei '$FilePath' nicht gefunden."
    }
}

$FilePath = "$HOME/example.txt"
$FileAge = Get-FileAge -FilePath $FilePath -TimeUnit 'Hours'
Write-Host "Die Datei '$FilePath' ist $FileAge Stunden alt."
```

```powershell

```

- Weitere Vorteile von Advanced Functions
    1. Gemeinsame Parameter: CmdletBinding() ermöglicht die Verwendung von gemeinsamen Parametern wie **`Verbose`**, **`Debug`**, **`ErrorAction`**, **`ErrorVariable`**, **`WarningAction`**, **`WarningVariable`**, **`InformationAction`**, **`InformationVariable`**, **`OutVariable`** und **`OutBuffer`**. Diese Parameter bieten zusätzliche Kontrolle über die Ausführung der Funktion und die Verwaltung von Fehlern, Warnungen und Informationen.
    2. Pipeline-Unterstützung: Mit CmdletBinding() können Sie Parameter so konfigurieren, dass sie Werte aus der Pipeline akzeptieren, indem Sie das **`[Parameter(ValueFromPipeline=$true)]`** Attribut verwenden. Dies ermöglicht eine bessere Integration Ihrer Funktionen in die PowerShell-Pipeline und fördert die Modularität.
    3. Bestätigungsaufforderung (ShouldProcess): Durch Hinzufügen des **`SupportsShouldProcess`** Attributs zum CmdletBinding(), wie **`[CmdletBinding(SupportsShouldProcess=$true)]`**, können Sie die **`ShouldProcess`**Funktionalität verwenden. Dies ermöglicht die Verwendung des **`WhatIf`** und **`Confirm`** Parameters, um potenziell destruktive Aktionen zu überprüfen oder zu bestätigen, bevor sie ausgeführt werden.
    4. Standard-Cmdlet-Ausführungsverhalten: CmdletBinding() ermöglicht es Ihrer Funktion, sich wie ein integriertes Cmdlet zu verhalten. Dadurch wird die Konsistenz zwischen Ihren benutzerdefinierten Funktionen und den integrierten Cmdlets verbessert, was die Benutzerfreundlichkeit und die Skalierbarkeit Ihrer Skripte erhöht.

# Funktionen in Modulen organisieren

Für größere Projekte ist es empfehlenswert, Funktionen in Modulen zu organisieren. Ein PowerShell-Modul ist eine Sammlung von Funktionen, Cmdlets und Variablen, die als Einheit verteilt und wiederverwendet werden können. So erstellen Sie ein einfaches Modul:

1. Erstellen Sie einen Ordner mit dem Namen des Moduls, z. B. `MyModule`.
2. Erstellen Sie im Ordner eine Datei mit dem Namen `MyModule.psm1` und fügen Sie Ihre Funktionen hinzu:
    
    ```powershell
    # MyModule.psm1
    
    function Get-Timestamp {
        return Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    }
    ```
    
3. Importieren Sie das Modul in Ihrem Skript oder Ihrer PowerShell-Sitzung mit **`Import-Module`**:
    
    ```powershell
    Import-Module .\MyModule\MyModule.psm1
    
    $Timestamp = Get-Timestamp
    Write-Host "Aktueller Zeit: $Timestamp"
    ```
    
    In diesem Beispiel haben wir ein Modul **`MyModuleb`** erstellt, das die Funktion **`Get-Timestamp`**
     enthält. Das Modul wird in das Skript importiert, sodass die Funktion verwendet werden kann.
