---
title: "PowerShell - Das Common Information Model (CIM)"
description: "PowerShell - Das Common Information Model (CIM)"
---

# PowerShell - Das Common Information Model (CIM)

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

Das Common Information Model (CIM) ist ein offener Standard, der von der Distributed Management Task Force (DMTF) entwickelt und gepflegt wird. Es definiert, wie Computersysteme und Netzwerkgeräte Informationen darstellen und austauschen sollten. In diesem Artikel werden wir einen kurzen Überblick über das Common Information Model in PowerShell geben, erklären wie es mit Windows Management Instrumentation (WMI) zusammenhängt und wie man damit auf einfache Weise Systeminformationen abfragen kann.

# **Das Common Information Model (CIM) in PowerShell**

CIM-Instanzen sind Objekte, die den aktuellen Zustand einer verwalteten Ressource, wie beispielsweise Hardware, Software oder Betriebssysteme, in PowerShell darstellen. Sie basieren auf CIM-Klassen, welche im Wesentlichen Vorlagen sind, die die Struktur und Eigenschaften einer verwalteten Ressource definieren.

Um eine CIM-Instanz einer bestimmten Klasse abzurufen, verwenden Sie in PowerShell das Cmdlet **`Get-CimInstance`**. Hier sind einige Beispiele, die Sie in Ihrer PowerShell-Konsole ausprobieren können:

1. Informationen über das Betriebssystem abrufen:
    
    ```powershell
    Get-CimInstance -ClassName Win32_OperatingSystem
    ```
    
2. Informationen über die Prozessoren des Systems abrufen:
    
    ```powershell
    Get-CimInstance -ClassName Win32_Processor
    ```
    
3. Informationen über die logischen Laufwerke des Systems abrufen:
    
    ```powershell
    Get-CimInstance -ClassName Win32_LogicalDisk
    ```
    
4. Informationen über die Dienste des Systems abrufen:
    
    ```powershell
    Get-CimInstance -ClassName Win32_Service
    ```
    

# **CIM vs WMI**

Windows Management Instrumentation (WMI) ist ein Windows-basiertes Verwaltungs-Framework, das Administratoren den Zugriff auf, die Überwachung und Verwaltung verschiedener Systemkomponenten ermöglicht. Es ist auf dem Common Information Model (CIM) aufgebaut und stellt somit eine Windows-Implementierung des CIM-Standards dar.

PowerShell stellt zwei Arten von Cmdlets zur Verfügung, um mit WMI zu interagieren:

1. Die älteren WMI-Cmdlets, wie **`Get-WmiObject`**, verwenden die .NET-Klasse **`System.Management.ManagementObject`**. Diese Cmdlets basieren nicht auf der CIM-Infrastruktur und sind im Vergleich zu den neueren CIM-Cmdlets weniger effizient, sicher und flexibel.
2. Die neueren CIM-Cmdlets, wie **`Get-CimInstance`**, verwenden die .NET-Klasse **`Microsoft.Management.Infrastructure.CimInstance`**. Diese Cmdlets nutzen die CIM-Infrastruktur und bieten eine bessere Sicherheit und Kompatibilität mit neuen sowie alten Systemen.

Es wird empfohlen, die CIM-Cmdlets (wie **`Get-CimInstance`**) zu verwenden, da sie einen moderneren und effizienteren Ansatz bieten.

# Übersicht über alle CIM Namespaces und Klassen

[Namespace root/cimv2 - powershell.one](https://powershell.one/wmi/root/cimv2)

## Hinweis:

Beim Abfragen von Informationen aus dem `cimv2` Namespace (eg. OS Infos), muss dieser nicht explicit mit angegeben werden, da dieser der Standartnamespace für das `Get-CimInstance` CMDlet ist.

## **Zusammenfassung**

PowerShell ermöglicht die Verwaltung und Automatisierung von Computersystemen und Netzwerkgeräten durch das Common Information Model (CIM). Es bietet eine standardisierte und plattformübergreifende Möglichkeit, Informationen darzustellen und auszutauschen.

Durch den Einsatz von PowerShell und CIM können Administratoren und Entwickler problemlos auf Informationen über Betriebssysteme, Hardwarekomponenten und Software zugreifen und diese verwalten. Dies erleichtert die Verwaltung und Automatisierung von IT-Infrastrukturen und hilft, Arbeitsabläufe zu optimieren.
