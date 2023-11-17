---
title: "PowerShell - Nützliche CMDlet’s"
description: "PowerShell - Nützliche CMDlet’s"
---

# PowerShell - Nützliche CMDlet’s

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

| Noun | Verb-Cmdlet | Beschreibung |
| --- | --- | --- |
| Process |  |  |
|  | Get-Process | Listet alle laufenden Prozesse auf. |
|  | Stop-Process | Beendet einen oder mehrere Prozesse. |
|  | Start-Process | Startet einen neuen Prozess. |
| Service |  |  |
|  | Get-Service | Ruft Informationen zu Systemdiensten ab. |
|  | Start-Service | Startet einen oder mehrere Dienste. |
|  | Stop-Service | Stoppt einen oder mehrere Dienste. |
|  | Restart-Service | Startet einen oder mehrere Dienste neu. |
| Computer |  |  |
|  | Get-ComputerInfo | Ruft detaillierte Informationen über den Computer ab. |
|  | Restart-Computer | Startet den Computer neu. |
|  | Stop-Computer | Fährt den Computer herunter. |
| Event |  |  |
|  | Get-EventLog | Zeigt Ereignisprotokolleinträge an. |
|  | Clear-EventLog | Löscht Einträge aus einem Ereignisprotokoll. |
|  | Write-EventLog | Schreibt ein Ereignis im Ereignisprotokoll. |
| Item |  |  |
|  | Get-Item | Ruft Informationen zu Dateien und Ordnern ab. |
|  | Copy-Item | Kopiert Dateien und Ordner. |
|  | Move-Item | Verschiebt Dateien und Ordner. |
|  | Remove-Item | Löscht Dateien und Ordner. |
|  | New-Item | Erstellt neue Dateien und Ordner. |
| Content |  |  |
|  | Get-Content | Gibt den Inhalt einer Datei aus. |
|  | Set-Content | Überschreibt den Inhalt einer Datei. |
|  | Add-Content | Fügt Inhalt zu einer Datei hinzu. |
| User |  |  |
|  | Get-LocalUser | Listet lokale Benutzerkonten auf. |
|  | New-LocalUser | Erstellt ein neues lokales Benutzerkonto. |
|  | Remove-LocalUser | Entfernt ein lokales Benutzerkonto. |
| Group |  |  |
|  | Get-LocalGroup | Listet lokale Gruppen auf. |
|  | New-LocalGroup | Erstellt eine neue lokale Gruppe. |
|  | Add-LocalGroupMember | Fügt einem Mitglied zu einer lokalen Gruppe hinzu. |
|  | Remove-LocalGroupMember | Entfernt ein Mitglied aus einer lokalen Gruppe. |
| Module |  |  |
|  | Get-Module | Listet geladene Module auf. |
|  | Import-Module | Importiert ein PowerShell-Modul. |
|  | Remove-Module | Entfernt ein PowerShell-Modul. |
| PSSession |  |  |
|  | New-PSSession | Erstellt eine neue Remote-PowerShell-Sitzung. |
|  | Enter-PSSession | Betritt eine Remote-PowerShell-Sitzung. |
|  | Exit-PSSession | Verlässt eine Remote-PowerShell-Sitzung. |
|  | Remove-PSSession | Entfernt eine Remote-PowerShell-Sitzung. |
| Credential |  |  |
|  | Get-Credential | Eingabeaufforderung für Benutzername und Passwort. |
| Firewall |  |  |
|  | Get-NetFirewallProfile | Ruft Firewallprofile ab. |
|  | Get-NetFirewallRule | Listet Firewallregeln auf. |
|  | New-NetFirewallRule | Erstellt eine neue Firewallregel. |
|  | Remove-NetFirewallRule | Entfernt eine Firewallregel. |
| IPAddress |  |  |
|  | Get-NetIPAddress | Listet IP-Adressen und Konfigurationen auf. |
|  | New-NetIPAddress | Weist eine IP-Adresse einer Schnittstelle zu. |
|  | Remove-NetIPAddress | Entfernt eine IP-Adresse von einer Schnittstelle. |
| Adapter |  |  |
|  | Get-NetAdapter | Listet Netzwerkadapter auf. |
|  | Enable-NetAdapter | Aktiviert einen Netzwerkadapter. |
|  | Disable-NetAdapter | Deaktiviert einen Netzwerkadapter. |
| DNS |  |  |
|  | Get-DnsClientServerAddress | Listet DNS-Serveradressen auf. |
|  | Set-DnsClientServerAddress | Ändert DNS-Serveradressen. |
| ScheduledTask |  |  |
|  | Get-ScheduledTask | Listet geplante Aufgaben auf. |
|  | New-ScheduledTask | Erstellt eine neue geplante Aufgabe. |
|  | Remove-ScheduledTask | Entfernt eine geplante Aufgabe. |
|  | Start-ScheduledTask | Startet eine geplante Aufgabe. |
|  | Stop-ScheduledTask | Stoppt eine geplante Aufgabe. |
| Registry |  |  |
|  | Get-ItemProperty | Ruft Informationen über Registrierungseinträge ab. |
|  | Set-ItemProperty | Ändert Eigenschaften von Registrierungseinträgen. |
|  | Remove-ItemProperty | Entfernt Eigenschaften von Registrierungseinträgen. |
| Environment |  |  |
|  | Get-ChildItem | Listet Umgebungsvariablen auf. |
|  | Set-Variable | Ändert den Wert einer Umgebungsvariablen. |
| Role |  |  |
|  | Get-WindowsFeature | Listet Windows-Serverrollen und Features auf. |
|  | Install-WindowsFeature | Installiert Windows-Serverrollen und Features. |
|  | Uninstall-WindowsFeature | Deinstalliert Windows-Serverrollen und Features. |
| Disk |  |  |
|  | Get-Disk | Listet verfügbare Festplatten auf. |
|  | Initialize-Disk | Initialisiert eine neue Festplatte. |
|  | Clear-Disk | Entfernt Partitionen und Daten von einer Festplatte. |
| Volume |  |  |
|  | Get-Volume | Listet verfügbare Datenträger auf. |
|  | Resize-Partition | Ändert die Größe einer Partition. |
|  | New-Volume | Erstellt einen neuen Datenträger. |
|  | Remove-Volume | Entfernt einen Datenträger. |
| VM |  |  |
|  | Get-VM | Listet virtuelle Maschinen auf. |
|  | Start-VM | Startet eine virtuelle Maschine. |
|  | Stop-VM | Stoppt eine virtuelle Maschine. |
|  | New-VM | Erstellt eine neue virtuelle Maschine. |
|  | Remove-VM | Entfernt eine virtuelle Maschine. |
