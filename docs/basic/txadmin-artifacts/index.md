# txAdmin: Server Artifacts aktualisieren

> Anleitung zum Aktualisieren der FiveM Server Artifacts ohne Datenverlust.

## Wann aktualisieren?

- Bei kritischen Sicherheitsupdates
- Wenn neue Features benötigt werden
- Bei Fehlern die in neueren Builds gefixt wurden

Aktuelle Builds: [runtime.fivem.net](https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/)

---

## Schritt 1 – Server stoppen

In der txAdmin-Oberfläche den Server stoppen, oder per Screen:

```bash
screen -r fivem
# Dann im Server-Terminal:
quit
```

---

## Schritt 2 – Alten Build sichern (optional)

```bash
cp -r /home/fivem/server /home/fivem/server_backup
```

---

## Schritt 3 – Neuen Build herunterladen

```bash
cd /home/fivem/server

# Alte Dateien löschen (außer server.cfg und Ressourcen)
rm -f fx.tar.xz

# Neue Artifacts herunterladen
wget https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/XXXX-XXXXXXX/fx.tar.xz
tar xf fx.tar.xz
rm fx.tar.xz
```

> **Wichtig:** Nur die Artifact-Dateien ersetzen, nicht den `server-data` Ordner!

---

## Schritt 4 – Server neu starten

```bash
screen -S fivem ./run.sh +exec ../server-data/server.cfg
```

Oder über txAdmin → **Server neu starten**.

---

## Via txAdmin (einfacher Weg)

txAdmin hat eine eingebaute Artifact-Verwaltung:

1. txAdmin öffnen → **Settings**
2. **FXServer** → **Server Data Folder**
3. Unter **Artifacts** die neue Version eintragen
4. Server neu starten

---

## Tipps

- Immer auf dem **recommended** Channel bleiben, nicht optional
- Vor Updates Backups der Datenbank machen
- Nach dem Update Ressourcen auf Fehler prüfen
