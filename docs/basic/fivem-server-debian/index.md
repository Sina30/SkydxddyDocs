# FiveM Server unter Debian installieren inkl. txAdmin

> Anleitung zur Installation eines FiveM Servers auf einem Debian-basierten Linux-System inklusive txAdmin.

## Voraussetzungen

- Debian 11 oder 12 (frische Installation empfohlen)
- Root-Zugriff per SSH
- Mindestens 2 GB RAM, 2 CPU-Kerne

---

## Schritt 1 – System aktualisieren

```bash
apt update && apt upgrade -y
```

---

## Schritt 2 – Abhängigkeiten installieren

```bash
apt install -y curl wget git unzip screen xz-utils
```

---

## Schritt 3 – FiveM Artifacts herunterladen

```bash
mkdir -p /home/fivem/server
cd /home/fivem/server

# Aktuelle Artifacts von der FiveM Website herunterladen
wget https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/XXXX-XXXXXXX/fx.tar.xz

tar xf fx.tar.xz
rm fx.tar.xz
```

> **Hinweis:** Ersetze die URL mit dem aktuellen Build von [runtime.fivem.net](https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/)

---

## Schritt 4 – Server-Daten vorbereiten

```bash
mkdir -p /home/fivem/server-data
cd /home/fivem/server-data

# CFX Default-Configs herunterladen
git clone https://github.com/citizenfx/cfx-server-data.git .
```

---

## Schritt 5 – server.cfg erstellen

```bash
nano /home/fivem/server-data/server.cfg
```

Minimale `server.cfg`:

```
endpoint_add_tcp "0.0.0.0:30120"
endpoint_add_udp "0.0.0.0:30120"

sv_maxclients 48
sv_hostname "Mein FiveM Server"

set sv_licenseKey "deine-lizenz-hier"

add_principal identifier.fivem:DEINEID group.admin

start mapmanager
start chat
start spawnmanager
start sessionmanager
start basic-gamemode
start hardcap
start rconlog
```

---

## Schritt 6 – Server starten mit txAdmin

```bash
cd /home/fivem/server
screen -S fivem ./run.sh +exec ../server-data/server.cfg
```

txAdmin ist automatisch unter `http://DEINE-IP:40120` erreichbar.

---

## Screen-Befehle

| Befehl | Funktion |
|--------|----------|
| `screen -S fivem` | Neue Session erstellen |
| `CTRL + A, D` | Session im Hintergrund lassen |
| `screen -r fivem` | Session wieder öffnen |
| `screen -ls` | Alle Sessions anzeigen |
