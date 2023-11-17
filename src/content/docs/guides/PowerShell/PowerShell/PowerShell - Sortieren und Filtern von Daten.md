---
title: "PowerShell - Sortieren und Filtern von Daten"
description: "PowerShell - Sortieren und Filtern von Daten"
---

# PowerShell - Sortieren und Filtern von Daten

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:50
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# Beispiel-Dateien

Erstelle die folgenden Dateien auf deinem Dateisystem, um die Übungen unten nachzustellen

`$HOME\data.csv`

```
Vorname,Nachname,Benutzername,E-Mail,Abteilung
Max,Mustermann,mmustermann,max.mustermann@beispiel.com,Vertrieb
Anna,Musterfrau,amusterfrau,anna.musterfrau@beispiel.com,Marketing
Peter,Schmidt,pschmidt,peter.schmidt@beispiel.com,IT
Mona,Lisa,mlisa,mona.lisa@beispiel.com,Personal
John,Doe,jdoe,john.doe@beispiel.com,Finanzen
```

`$HOME\sshd_log.txt`

```
Apr  1 10:00:00 server sshd[1234]: Accepted publickey for user1 from 192.168.1.100 port 12345 ssh2: RSA SHA256:abcdefg
Apr  1 10:01:00 server sshd[5678]: Accepted password for user2 from 192.168.1.101 port 54321 ssh2
Apr  1 10:02:00 server sshd[9012]: Failed password for invalid user admin from 192.168.1.102 port 9876 ssh2
Apr  1 10:03:00 server sshd[3456]: Disconnecting invalid user user3 192.168.1.103 port 13579: Too many authentication failures
Apr  1 10:04:00 server sshd[7890]: Received disconnect from 192.168.1.104 port 24680: disconnected by user
Apr  1 10:05:00 server sshd[2345]: Connection closed by 192.168.1.105 port 36901 [preauth]
```

# Filtern und Sortieren von Daten

In PowerShell können wir Daten aus verschiedenen Quellen importieren und sie dann filtern und sortieren, um nur die benötigten Informationen anzuzeigen. Folgend einige praktische Anwendungsbeispiele für die folgenden CMDlets:

- `Where-Object` ⇒ Filtern
- `Sort-Object` ⇒ Sortieren
- `Select-Object` ⇒ Selektieren von Eigenschaften von Objekten
    - Beispiel: von einem Prozess-Objekt nur die `PID` Eigenschaft ausgeben

## Filtern nach Dateiendung und sortieren:

```powershell
Get-ChildItem $HOME | Where-Object {$_.Name -like "*.txt"} | Sort-Object -Property LastWriteTime -Descending
```

Dieser Befehl ruft alle Dateien und Ordner im `$HOME` Verzeichnis des Benutzers ab, filtert dann nur die Dateien, deren Name mit `.txt` endet, und sortiert sie nach dem `LastWriteTime` in absteigender Reihenfolge.

Das Cmdlet `Where-Object` wird verwendet, um Daten basierend auf einem bestimmten Kriterium zu filtern. In diesem Beispiel filtern wir nach Dateien, deren Name mit `.txt` endet. 

Das Cmdlet `Sort-Object` sortiert die Daten basierend auf dem angegebenen Eigenschaftsnamen und der Sortierreihenfolge.

## Filtern nach RAM-Usage und Selektieren von Ausgabeparametern:

Das Arbeitsset (`Working Set`) ist ein Begriff aus der Informatik, der sich auf den Speicher bezieht, den ein Prozess aktuell im Arbeitsspeicher belegt. Es umfasst sowohl den Code als auch die Daten, die der Prozess zur Ausführung benötigt.

```powershell
Get-Process | Where-Object {$_.WorkingSet -gt 100MB} | Sort-Object -Property CPU -Descending | Select-Object -Property Name, CPU, WorkingSet
```

Dieser Befehl ruft alle laufenden Prozesse ab, filtert dann nur diejenigen, deren Arbeitsset größer als 100 MB ist, sortiert sie nach der CPU-Auslastung in absteigender Reihenfolge und wählt schließlich nur die Spalten Name, CPU und Arbeitsset aus.

Das Cmdlet `Select-Object` wird verwendet, um nur bestimmte Spalten der Daten auszuwählen und anzuzeigen. In diesem Beispiel wählen wir nur die Spalten Name, CPU und Arbeitsset aus.

## CSV auslesen und Output formattieren

```powershell
Import-Csv -Path $HOME\\data.csv | Where-Object {$_.Abteilung -eq "IT"} | Sort-Object -Property Nachname -Descending | Select-Object -Property Vorname, Nachname
```

Dieser Befehl importiert Daten aus der Datei `data.csv`, filtert dann nur die Datensätze, bei denen die Abteilung "IT" ist, sortiert sie nach dem Nachnamen in absteigender Reihenfolge und wählt schließlich nur die Spalten Vorname und Nachname aus.

## Filtern von SSH-Log Einträgen und Selektieren von Ausgabeparametern

```powershell
Get-Content -Path $HOME\\\\sshd_log.txt | Where-Object {$_ -like "*Accepted*"} | Select-Object -Property @{Name="Timestamp";Expression={($_ -split " ")[0..2] -join " "}}, @{Name="User";Expression={($_ -split " ")[9]}}, @{Name="IP-Adresse";Expression={($_ -split " ")[11]}}
```

Dieser Befehl liest den Inhalt der Datei `sshd_log.txt` aus, filtert dann nur die Einträge, die das Wort "Accepted" enthalten, und wählt schließlich nur die Spalten Timestamp, User und IP-Adresse aus.

Das Cmdlet `Select-Object` wird verwendet, um nur bestimmte Spalten der Daten auszuwählen und anzuzeigen. In diesem Beispiel erstellen wir auch benutzerdefinierte Spaltennamen und formatieren den Timestamp, den Benutzernamen und die IP-Adresse entsprechend. Das sieht auf den ersten Blick sehr kompliziert und verwirrend aus, wie wir die einzelnen Spalten selektieren, aber wir können den Befehl einfach auseinander bauen, um es verständlicher zu machen:

```powershell
Get-Content -Path $HOME\\sshd_log.txt | 
Where-Object {
    $_ -like "*Accepted*"
} |
# Bis hierher war's einfach, jetzt kommt einfach nur viel Text.
# Wir müssern hier die Expression angeben, weil wir aus einer CSV-Datei lesen
# und der Text kein Objekt ist. Wir "parsen" hier also unsere Informationen in
# ein selbst definiertes Objekt.
Select-Object -Property @{
    Name="Timestamp";
    Expression={
				# Teilt den Log-Eintrag in ein Array und extrahiert die
				# ersten drei Elemente (Datum und Uhrzeit)
        ($_ -split " ")[0..2] -join " "  
    }
}, @{
    Name="User";
    Expression={
				# Teilt den Log-Eintrag in ein Array und extrahiert das zehnte
				# Element (Benutzername)
        ($_ -split " ")[9]  
    }
}, @{
    Name="IP-Adresse";
    Expression={
				# Teilt den Log-Eintrag in ein Array und 
				# extrahiert das zwölfte Element (IP-Adresse)
        ($_ -split " ")[11]
    }
}
```

Hier ein einfacheres Beispiel:

```powershell
Get-Process | Select-Object -Property Name, CPU, @{Name="Memory (MB)";Expression={$_.WorkingSet/1MB}}
```

Dieser Befehl ruft alle laufenden Prozesse ab und wählt nur die Spalten `Name`, `CPU` und `Memory (MB)` aus.

Die `Expression`-Eigenschaft verwendet die Syntax `{}` und enthält eine oder mehrere Anweisungen, die ausgeführt werden, um den Wert für die neue berechnete Eigenschaft zu generieren. In diesem Beispiel verwenden wir die Arbeitsset-Größe (`WorkingSet`) des Prozesses, teilen sie durch 1MB, um sie in Megabyte umzuwandeln, und geben das Ergebnis als neuen Wert für die "Memory (MB)"-Spalte aus.
