---
title: "PowerShell - Automatisches Ausführen von Scripts mit Task Scheduler"
description: "PowerShell - Automatisches Ausführen von Scripts mit Task Scheduler"
---

# PowerShell - Automatisches Ausführen von Scripts mit Task Scheduler

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

In diesem Abschnitt schauen wir uns an, wie man mit PowerShell-Skripten Tasks im Task Scheduler erstellen, ändern und ausführen können.

# Task Scheduling mit PowerShell

Zunächst sollten sollte erwähnt werden, dass man es für den Task-Scheduler auch eine Grafische Benutzeroberfläche gibt. Wir wollen uns jedoch anschauen, wie wir das Automatisieren von Tasks mit PowerShell automatisieren können.

```powershell
$Action = New-ScheduledTaskAction -Execute 'Powershell.exe' -Argument '-File C:\Beispiel\Pfad\MeinSkript.ps1'
$Trigger = New-ScheduledTaskTrigger -Daily -At 9am
$Settings = New-ScheduledTaskSettingsSet
$Task = New-ScheduledTask -Action $Action -Trigger $Trigger -Settings $Settings
$Task | Register-ScheduledTask -TaskName "MeinAutomatisierterTask"
```

Dieser Code erstellt einen neuen Task, der täglich um 9 Uhr morgens das Skript `MeinSkript.ps1` ausführt.

# Task-Scheduler-Trigger anpassen

Sie können den Trigger anpassen, um Ihren Anforderungen gerecht zu werden.

1. Täglich zu einer bestimmten Zeit:
    
    ```powershell
    $Trigger = New-ScheduledTaskTrigger -Daily -At 2pm
    ```
    
2. Wöchentlich an bestimmten Wochentagen:
    
    ```powershell
    $Trigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday, Wednesday, Friday -At 10am
    ```
    
3. Einmalig zu einem bestimmten Datum und einer bestimmten Uhrzeit:
    
    ```powershell
    $Trigger = New-ScheduledTaskTrigger -Once -At '2023-04-12T14:00:00'
    ```
    

# Task Scheduler-Tasks verwalten

Das Hinzufügen, Ändern und Löschen von Tasks kann ebenfalls mit PowerShell-Skripten erledigt werden. Hier einige Beispiele:

1. Einen Task abrufen:
    
    ```powershell
    $Task = Get-ScheduledTask -TaskName "MeinAutomatisierterTask"
    ```
    
2. Einen Task deaktivieren:
    
    ```powershell
    Disable-ScheduledTask -TaskName "MeinAutomatisierterTask"
    ```
    
3. Einen Task aktivieren:
    
    ```powershell
    Enable-ScheduledTask -TaskName "MeinAutomatisierterTask"
    ```
    
4. Einen Task löschen:
    
    ```powershell
    Unregister-ScheduledTask -TaskName "MeinAutomatisierterTask" -Confirm:$false
    ```
    

PowerShell und der Task Scheduler sind mächtige Werkzeuge für SysAdmins, die Zeit sparen indem Sie regelmäßige oder auch unregelmäßige Aufgaben automatisieren. Viel Erfolg bei der Automatisierung Ihrer täglichen Aufgaben!
