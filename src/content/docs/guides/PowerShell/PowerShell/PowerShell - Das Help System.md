---
title: "PowerShell - Das Help System"
description: "PowerShell - Das Help System"
---

# PowerShell - Das Help System

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:51
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

[Get-Help (Microsoft.PowerShell.Core) - PowerShell](https://learn.microsoft.com/de-de/powershell/module/microsoft.powershell.core/get-help?view=powershell-7.3)

# Get-Help

Eine der größten Herausforderungen für Benutzer, die neu in der PowerShell-Umgebung sind, ist es, den richtigen Befehl oder das richtige Skript für ihre speziellen Anforderungen zu finden. Zum Glück bietet PowerShell ein integriertes Hilfe-System, das hilfreiche Anleitungen, Beispiele und Syntaxinformationen für die verschiedenen Cmdlets und Skripte bereitstellt.

Um das Hilfe-System in PowerShell zu nutzen, verwenden Sie das Cmdlet "Get-Help", gefolgt vom Namen des Cmdlets oder Skripts, für das Sie Hilfe benötigen.

```powershell
Get-Help Get-Process
```

Durch Eingabe dieses Befehls erhalten Sie eine Zusammenfassung der Syntax, der Parameter und der Ausgabe des "Get-Process" Cmdlets.

# Aktualisieren der Hilfe

Um das Help-System von PowerShell auf den neuesten Stand zu bringen, verwenden Sie das Cmdlet "Update-Help". Dies lädt die neuesten Hilfedateien von Microsoft herunter und installiert sie auf Ihrem Computer.

```powershell
Update-Help
```

Nach Eingabe dieses Befehls wird das Help-System automatisch aktualisiert und steht bereit, um Ihnen bei der Arbeit in der PowerShell-Umgebung zu helfen. Gegebenfalls sind nicht alle Help-Seiten auf Deutsch verfügbar. Um dieses Problem zu umgehen, kann man auch die Help-Seiten auch auf englisch herunterladen:

```powershell
Update-Help -UICulture en-US
```

# Zusätzliche Hilfeoptionen

Es gibt einige zusätzliche Optionen, die Sie mit dem "Get-Help" Cmdlet verwenden können, um genauere oder detailliertere Informationen zu erhalten:

1. `Detailed`: Zeigt detailliertere Informationen an, einschließlich der Parameterbeschreibungen, Beispiele und der Eingabe- und Ausgabearten.
    
    ```powershell
    Get-Help Get-Process -Detailed
    ```
    
2. `Examples`: Zeigt Beispiele für die Verwendung des Cmdlets oder Skripts an.
    
    ```powershell
    Get-Help Get-Process -Examples
    ```
    
3. `Full`: Zeigt alle verfügbaren Informationen an, einschließlich technischer Details und Verweise auf weitere Ressourcen.
    
    ```powershell
    Get-Help Get-Process -Full
    ```
    
4. `Online`: Öffnet die Online-Hilfe (z.B. [Microsoft Learn](https://learn.microsoft.com/de-de/)) für das Cmdlet oder Skript in Ihrem Standard-Webbrowser.
    
    ```powershell
    Get-Help Get-Process -Online
    ```
