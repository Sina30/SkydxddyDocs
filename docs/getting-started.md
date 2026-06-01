# Erste Schritte

## Einführung

Skydxddy-Ressourcen sind modulare, leistungsorientierte RedM-Skripte, die für immersive Rollenspielserver entwickelt wurden.

Jede Ressource ist eigenständig und kann unabhängig installiert werden.

Diese Dokumentation enthält Installationsanleitungen, Konfigurationshinweise und eine API-Dokumentation für alle offiziellen Skydxddy-Skripte.

---

## Anforderungen

Bevor Sie Skydxddy-Ressourcen installieren, stellen Sie sicher, dass Ihr Server die folgenden Anforderungen erfüllt:

- Aktiver RedM-Server
- Neueste empfohlene Serverartefakte
- Erforderliches framework falls zutreffend)
- Erforderliches Abhängigkeiten (in jedem Skriptabschnitt aufgeführt)
- MariaDB oder MySQL (falls das Skript eine Datenbank als Speicher verwendet)

---

## Grundlegender Installationsablauf

Alle Skydxddy-Skripte folgen dem gleichen Installationsmuster:

1. Laden Sie die Ressource herunter.
2. Platzieren Sie den Ressourcenordner in Ihrem resources/Verzeichnis.
3. Fügen Sie den Ressourcennamen zu Ihrem hinzu server.cfg.
4. Konfigurieren Sie die Einstellungen innerhalb von config.lua.
5. Starten Sie Ihren Server neu.

Detaillierte Konfigurationsanweisungen finden Sie im Dokumentationsbereich jedes Skripts.

---

## Ordnerstrukturübersicht

Eine typische Skydxddy-Ressource ist wie folgt strukturiert:

```
skydxddy_scriptname/
│
├─ client/
├─ server/
├─ shared/
├─ config.lua
└─ fxmanifest.lua
```

- `client/` – Clientseitige Logik  
- `server/` – Serverseitige Logik  
- `shared/` – Gemeinsame Hilfsprogramme und Konfiguration  
- `config.lua` – Skriptkonfiguration  
- `fxmanifest.lua` – Ressourcenmanifest  

Diese Struktur gewährleistet Modularität, Übersichtlichkeit und Wartungsfreundlichkeit.

---

## Nächste Schritte

Navigieren Sie im Abschnitt **Scripts** zu dem Skript, das Sie installieren möchten, und folgen Sie der detaillierten Installations- und Konfigurationsanleitung.