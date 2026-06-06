# esx:getSharedObject Deprecation

> `esx:getSharedObject` ist veraltet und sollte nicht mehr verwendet werden. Diese Seite erklärt wie du deinen Code migrierst.

## Was ist das Problem?

Der alte Weg um ESX in einem Client-Script zu laden:

```lua
-- ALT (veraltet)
ESX = nil

TriggerEvent('esx:getSharedObject', function(obj)
    ESX = obj
end)
```

Dieser Event-basierte Ansatz ist deprecated und funktioniert in neueren ESX-Versionen nicht mehr zuverlässig.

---

## Die neue Methode

### Client-seitig

```lua
-- NEU (empfohlen)
ESX = exports['es_extended']:getSharedObject()
```

Einfach direkt am Anfang des Scripts, kein Event nötig.

### Server-seitig

```lua
-- NEU (empfohlen)
ESX = exports['es_extended']:getSharedObject()
```

---

## Vollständiges Beispiel

### Alt

```lua
ESX = nil

TriggerEvent('esx:getSharedObject', function(obj)
    ESX = obj
end)

RegisterNetEvent('meinScript:beispiel')
AddEventHandler('meinScript:beispiel', function()
    local playerData = ESX.GetPlayerData()
    print(playerData.job.name)
end)
```

### Neu

```lua
ESX = exports['es_extended']:getSharedObject()

RegisterNetEvent('meinScript:beispiel')
AddEventHandler('meinScript:beispiel', function()
    local playerData = ESX.GetPlayerData()
    print(playerData.job.name)
end)
```

---

## Massenersatz mit VS Code

Falls du viele Dateien hast, nutze **Suchen & Ersetzen** in VS Code:

1. `CTRL + SHIFT + H` öffnen
2. Suchen nach:
```
TriggerEvent('esx:getSharedObject'
```
3. Manuell pro Datei anpassen (automatischer Ersatz nicht empfohlen da die Struktur variiert)

---

## Hinweis für FXManifest

Stelle sicher dass `es_extended` als Abhängigkeit eingetragen ist:

```lua
dependencies {
    'es_extended'
}
```
