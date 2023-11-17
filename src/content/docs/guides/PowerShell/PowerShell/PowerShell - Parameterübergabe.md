---
title: "PowerShell - Parameterübergabe"
description: "PowerShell - Parameterübergabe"
---

# PowerShell - Parameterübergabe

Owner: Tobias Wehrle
Last edited time: 27. Juli 2023 11:53
Category: PowerShell (https://www.notion.so/PowerShell-506e36a7b830465a95ab72189058c56f?pvs=21)
Created time: 21. Juli 2023 15:29

# Seite in Arbeit.

---

In PowerShell arbeiten wir viel mit den Vorgegebenen CMDlet’s von Microsoft. Nahezu alle CMDlet’s oder Methoden von Objekten haben zusätzliche Parameter. In diesem Abschnitt werden wir uns anhand einiger Beispiele folgende Fragen beantworten:

1. Wo finde ich heraus, welche Parameter es gibt und was diese genau machen?
2. Was, wenn mein Parameter keinen einzelnen Wert erwartet, sondern eine Liste mit Werten?
3. Was ist der Unterschied zwischen Keyword-Arguments und Positional-Arguments?

# Welche Parameter kann ich verwenden?

Die beste Methode um herauszufinden, welche (optionalen) Parameter ein CMDlet oder eine Funktion akzeptiert, ist die Online Dokumentation von Microsoft.

```powershell
Get-Help Get-Process -Online
```

# Eine Liste als Parameter

# Keyword-Arguments vs Positional
