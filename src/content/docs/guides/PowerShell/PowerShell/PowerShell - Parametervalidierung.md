---
title: "PowerShell - Parametervalidierung"
description: "PowerShell - Parametervalidierung"
---

# PowerShell - Parametervalidierung

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:52
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# **Advanced Functions und Validierungsattribute**

Advanced Functions sind eine Möglichkeit, Ihre PowerShell-Skripte zu strukturieren und Parameter effektiv zu nutzen. Eine einfache Advanced Function sieht beispielsweise so aus:

```powershell
function Get-Foo {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Name
    )

    # ...
}
```

In diesem Beispiel sehen Sie, dass der Parameter **`$Name`** als verpflichtend (**`Mandatory = $true`**) markiert ist. Aber was ist, wenn wir zusätzliche Einschränkungen oder Validierungsmethoden hinzufügen möchten? Hier kommen Validierungsattribute ins Spiel. Sie ermöglichen es, die zulässigen Werte und Anforderungen an die Eingabe eines Parameters zu beschränken.

# **Beispiele für Validierungsattribute**

**ValidateNotNullOrEmpty**: Prüft, ob der Parameterwert weder Null noch leer ist.

```powershell
param (
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$Name
)
```

**ValidatePattern**: Prüft, ob der Parameterwert einem bestimmten regulären Ausdruck entspricht.

```powershell
param (
    [Parameter(Mandatory = $true)]
    [ValidatePattern("^\d{3}-\d{2}-\d{4}$")]
    [string]$SocialSecurityNumber
)
```

**ValidateRange**: Beschränkt numerische Parameterwerte auf einen bestimmten Bereich.

```powershell
param (
    [Parameter(Mandatory = $true)]
    [ValidateRange(1, 100)]
    [int]$Percentage
)
```

**ValidateSet**: Beschränkt Parameterwerte auf eine vorgegebene Liste zulässiger Werte.

```powershell
param (
    [Parameter(Mandatory = $true)]
    [ValidateSet("Red", "Green", "Blue")]
    [string]$Color
)
```

**ValidateScript**: Führt ein benutzerdefiniertes Skript aus, um den Parameterwert zu validieren.

```powershell
param (
    [Parameter(Mandatory = $true)]
    [ValidateScript({
        if ($_ -eq $_.ToLower()) { $true }
        else { throw "Value must be lowercase." }
    })]
    [string]$LowerCaseString
)
```

# **Fazit**

Die Validierung von Parametern und Argumenten in PowerShell ist ein wichtiger Schritt, um Ihre Skripte robuster und benutzerfreundlicher zu gestalten. Durch den Einsatz von Advanced Functions und Validierungsattributen können Sie die Eingabeanforderungen für Ihre Parameter leicht anpassen und einschränken.
