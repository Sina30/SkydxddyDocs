# DebugPrint

> `DebugPrint` ist eine hilfreiche Funktion zum Debuggen von Lua-Scripts in FiveM/RedM ohne die Konsole mit Ausgaben zu fluten.

## Das Problem mit `print()`

`print()` gibt immer aus – auch im Produktivbetrieb. Das macht die Konsole unübersichtlich und kann Performance kosten.

---

## DebugPrint implementieren

### Einfache Version

```lua
local debugMode = true  -- auf false setzen für Produktion

local function DebugPrint(...)
    if debugMode then
        print('[DEBUG]', ...)
    end
end
```

### Mit Timestamp

```lua
local debugMode = true

local function DebugPrint(...)
    if debugMode then
        local time = os.date('%H:%M:%S')
        print(('[DEBUG %s]'):format(time), ...)
    end
end
```

### Mit Resource-Name

```lua
local debugMode = true
local resourceName = GetCurrentResourceName()

local function DebugPrint(...)
    if debugMode then
        print(('[%s]'):format(resourceName), ...)
    end
end
```

---

## Verwendung

```lua
DebugPrint('Spieler verbunden:', playerId)
DebugPrint('Job gesetzt:', jobName, jobGrade)
DebugPrint('Wert:', someVariable)
```

---

## Per ConVar steuerbar machen

Noch besser: Debug-Modus per `server.cfg` ein/ausschalten ohne Code-Änderung:

```lua
-- client.lua / server.lua
local function DebugPrint(...)
    if GetConvar('debug_meinscript', 'false') == 'true' then
        print('[DEBUG]', ...)
    end
end
```

In der `server.cfg`:

```
set debug_meinscript "true"   # aktiviert
set debug_meinscript "false"  # deaktiviert
```

---

## Globale DebugPrint Funktion (shared)

In einer `shared.lua` die in `fxmanifest.lua` ganz oben geladen wird:

```lua
-- shared.lua
_G.DebugPrint = function(...)
    if GetConvar('debug_' .. GetCurrentResourceName(), 'false') == 'true' then
        print('[' .. GetCurrentResourceName() .. ']', ...)
    end
end
```

`fxmanifest.lua`:

```lua
shared_scripts {
    'shared.lua',
    -- andere shared scripts
}
```

Dann in jeder Datei der Ressource einfach `DebugPrint(...)` nutzen.
