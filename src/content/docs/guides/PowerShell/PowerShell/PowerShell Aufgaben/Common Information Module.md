---
title: "Common Information Module"
description: "Common Information Module"
---

# Common Information Module

Tags: Datentypen, cmi
Schwierigkeit: Komplexer

# Fragestellung:

Erstellen Sie ein PowerShell-Skript, das verschiedene Aufgaben rund um das Common Information Model (CIM) erledigt und die Ergebnisse in einer menschenlesbaren Formatierung anzeigt. Das Skript sollte die folgenden Aufgaben erledigen:

1. Liste alle CIM-Klassen im Namespace "root\cimv2" auf.
2. Zeige die Eigenschaften und Methoden der CIM-Klasse "Win32_OperatingSystem".
3. Erhalte Informationen über das Betriebssystem und gib diese aus.
4. Erhalte Informationen über den Arbeitsspeicher des Systems und gib diese aus.

# (Optional) Hilfestellung zur Bearbeitung:

Die folgenden Cmdlets und Funktionen könnten hilfreich sein:

- **`Get-CimClass`** (zum Auflisten von CIM-Klassen)
- **`Get-CimInstance`** (zum Abrufen von CIM-Instanzen)
- **`Write-Host`** (zum Anzeigen von Informationen in der Konsole)

# Musterlösung:

```powershell
# Aufgabe 1: Liste alle CIM-Klassen im Namespace "root\cimv2" auf
$CimClasses = Get-CimClass -Namespace "root\cimv2"
Write-Host "CIM-Klassen im Namespace 'root\cimv2':" -ForegroundColor Green
foreach ($CimClass in $CimClasses) {
    Write-Host $CimClass.CimClassName
}

# Aufgabe 2: Zeige die Eigenschaften und Methoden der CIM-Klasse "Win32_OperatingSystem"
$Win32_OperatingSystem_Class = Get-CimClass -Namespace "root\cimv2" -ClassName "Win32_OperatingSystem"
Write-Host "`nEigenschaften der CIM-Klasse 'Win32_OperatingSystem':" -ForegroundColor Green
foreach ($Property in $Win32_OperatingSystem_Class.CimClassProperties) {
    Write-Host $Property.Name
}

Write-Host "`nMethoden der CIM-Klasse 'Win32_OperatingSystem':" -ForegroundColor Green
foreach ($Method in $Win32_OperatingSystem_Class.CimClassMethods) {
    Write-Host $Method.Name
}

# Aufgabe 3: Erhalte Informationen über das Betriebssystem und gib diese aus
$OperatingSystemInfo = Get-CimInstance -Namespace "root\cimv2" -ClassName "Win32_OperatingSystem"
Write-Host "`nInformationen über das Betriebssystem:" -ForegroundColor Green
Write-Host "Name: $($OperatingSystemInfo.Caption)"
Write-Host "Version: $($OperatingSystemInfo.Version)"
Write-Host "Architektur: $($OperatingSystemInfo.OSArchitecture)"
Write-Host "Anzahl der installierten Service Packs: $($OperatingSystemInfo.ServicePackMajorVersion)"

# Aufgabe 4: Erhalte Informationen über den Arbeitsspeicher des Systems und gib diese aus
$MemoryInfo = Get-CimInstance -Namespace "root\cimv2" -ClassName "Win32_PhysicalMemory"
Write-Host "`nInformationen über den Arbeitsspeicher:" -ForegroundColor Green
foreach ($MemoryModule in $MemoryInfo) {
    Write-Host "Bank: $($MemoryModule.DeviceLocator)"
    Write-Host "Kapazität (in GB): $($MemoryModule.Capacity / 1GB)"
    Write-Host "Geschwindigkeit (in MHz): $($MemoryModule.Speed)`n"
}
```
