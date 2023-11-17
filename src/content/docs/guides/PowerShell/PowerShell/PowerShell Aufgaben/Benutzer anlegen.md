---
title: "Benutzer anlegen"
description: "Benutzer anlegen"
---

# Benutzer anlegen

Tags: csv, json, user-management
Schwierigkeit: Einfach

# **Ziel:**

Erstellen Sie ein PowerShell-Modul, um Benutzerkonten aus einer CSV-Datei zu erstellen und mit einer Konfigurationsdatei spezifische Einstellungen festzulegen.

# **Übung:**

1. Erstellen Sie ein neues Verzeichnis für Ihr Modul:
    
    ```powershell
    New-Item -ItemType Directory -Path .\UserManagement
    ```
    
2. Erstellen Sie innerhalb des Verzeichnisses 'UserManagement' eine neue CSV-Datei namens 'users.csv' mit den folgenden Überschriften und Beispiel-Daten:
    
    ```
    UserName,FirstName,LastName,Role
    jdoe,John,Doe,Administrator
    asmith,Alice,Smith,User
    ```
    
3. Erstellen Sie eine neue JSON-Konfigurationsdatei namens `config.json` innerhalb des Verzeichnisses 'UserManagement' mit folgendem Inhalt:
    
    ```
    {
        "LocalAdminGroup": "Administrators",
        "LocalUserGroup": "Users"
    }
    ```
    
4. Erstellen Sie eine neue PowerShell-Skriptdatei namens `UserManagement.psm1` innerhalb des Verzeichnisses UserManagement. Dies wird Ihre Moduldatei sein.
5. Schreiben Sie in der Datei `UserManagement.psm1` die folgenden Funktionen:
    1. Eine Funktion mit dem Namen **`Import-UserManagementConfig`**, die die Datei `config.json` liest und ihren Inhalt als PowerShell-Objekt zurückgibt.
    2. Eine Funktion mit dem Namen **`Read-UserCsvFile`**, die die Datei `users.csv` liest und ihren Inhalt als PowerShell-Objekte zurückgibt.
    3. Eine Funktion mit dem Namen **`Create-NewUser`**, die ein Benutzerobjekt als Eingabe erhält und ein neues lokales Benutzerkonto mit den bereitgestellten Informationen erstellt. Der Benutzer sollte gemäß den Einstellungen in der `config.json` Datei der Gruppe **"Administrators"** hinzugefügt werden, wenn seine Rolle **"Administrator"** ist, oder der Gruppe **"Users"**, wenn seine Rolle **"User"** ist.
    4. Eine Funktion mit dem Namen **`Invoke-UserManagement`**, die die Konfigurations- und CSV-Datei unter Verwendung der zuvor erstellten Funktionen liest und für jeden Benutzer in der CSV-Datei mit der Funktion **`Create-NewUser`** neue Benutzerkonten erstellt.
6. Erstellen Sie **im gleichen Verzeichnis wie der Ordner 'UserManagement'** eine neue PowerShell-Skriptdatei namens `RunUserManagement.ps1`. Importieren Sie in diesem Skript das `UserManagement`-Modul und rufen Sie die Funktion **`Invoke-UserManagement`** auf.
7. Führen Sie das Skript `RunUserManagement.ps1` aus, um die in der Datei 'users.csv' angegebenen Benutzerkonten mit ihren entsprechenden Rollen aus der Datei 'config.json' zu erstellen.

# Solution:

`UserManagement.psm1`

```powershell
function Import-UserManagementConfig {
    $configPath = ".\UserManagement\config.json"
    return (Get-Content $configPath | ConvertFrom-Json)
}

function Read-UserCsvFile {
    $csvPath = ".\UserManagement\users.csv"
    return (Import-Csv $csvPath)
}

function Create-NewUser {
    param (
        $User,
        $LocalAdminGroup,
        $LocalUserGroup
    )
    $userAccount = New-LocalUser -Name $User.UserName -Password (Read-Host -Prompt "Enter the password for $($User.UserName)" -AsSecureString) -FullName "$($User.FirstName) $($User.LastName)" -Description "$($User.Role)"
    
    if ($User.Role -eq "Administrator") {
				# An dieser Stelle könnte man die Benutzer natürlich auch
					# zu einem Active-Directory hinzufügen
        Add-LocalGroupMember -Group $LocalAdminGroup -Member $userAccount
    } else {
        Add-LocalGroupMember -Group $LocalUserGroup -Member $userAccount
    }
}

function Invoke-UserManagement {
    $config = Import-UserManagementConfig
    $csvUsers = Read-UserCsvFile
    
    foreach ($user in $csvUsers) {
        Create-NewUser -User $user -LocalAdminGroup $config.LocalAdminGroup -LocalUserGroup $config.LocalUserGroup
    }
}
```
