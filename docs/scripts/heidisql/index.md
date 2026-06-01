# HeidiSQL – Tool für die Datenbank

> HeidiSQL ist ein kostenloses Windows-Tool zur Verwaltung von MySQL/MariaDB Datenbanken – ideal für FiveM Server.

## Download

[heidisql.com/download.php](https://www.heidisql.com/download.php)

Portable Version empfohlen – kein Setup nötig.

---

## Verbindung herstellen

### Lokale Verbindung (direkt auf dem Server)

Falls du HeidiSQL auf dem gleichen Windows-Rechner nutzt wo MySQL läuft:

| Feld | Wert |
|------|------|
| Netzwerktyp | MySQL (TCP/IP) |
| Hostname | 127.0.0.1 |
| Benutzer | root |
| Passwort | dein Passwort |
| Port | 3306 |

### Remote-Verbindung (externer Server)

> **Wichtig:** MariaDB muss Remote-Verbindungen erlauben und der Port 3306 muss offen sein.

MariaDB für Remote öffnen:

```bash
nano /etc/mysql/mariadb.conf.d/50-server.cnf
```

Zeile ändern:
```
bind-address = 0.0.0.0
```

```bash
systemctl restart mariadb
```

Benutzer für Remote freigeben:

```sql
GRANT ALL PRIVILEGES ON fivem_db.* TO 'fivem'@'%' IDENTIFIED BY 'passwort';
FLUSH PRIVILEGES;
```

---

## Nützliche Funktionen

### Datenbank exportieren (Backup)

1. Datenbank rechtsklick → **Datenbank als SQL exportieren**
2. Format: SQL
3. Speichern als `.sql` Datei

### SQL-Datei importieren

1. Datenbank auswählen
2. **Datei** → **SQL-Datei laden**
3. Datei auswählen → **Ausführen**

### Tabellen durchsuchen

- Tabelle anklicken → Reiter **Daten**
- Oben rechts Filterfeld für schnelle Suche

---

## Tipps

- Regelmäßige Backups vor Updates machen
- Für große Datenbanken den Export als `.sql.gz` komprimieren
- Passwörter nie im Klartext in der Session speichern
