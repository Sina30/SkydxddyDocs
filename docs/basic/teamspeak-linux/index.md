# TeamSpeak 3 Server unter Linux installieren

> Anleitung zur Installation eines TeamSpeak 3 Servers auf einem Debian/Ubuntu-System.

## Voraussetzungen

- Debian/Ubuntu Server
- Port 9987 (UDP) offen in der Firewall
- Separater Benutzer empfohlen (kein Root)

---

## Schritt 1 – TS3-Benutzer anlegen

```bash
adduser --disabled-login teamspeak
su - teamspeak
```

---

## Schritt 2 – TeamSpeak herunterladen

```bash
cd /home/teamspeak

# Aktuelle Version von der TeamSpeak Website
wget https://files.teamspeak-systems.com/releases/server/3.XX.X/teamspeak3-server_linux_amd64-3.XX.X.tar.bz2

tar xf teamspeak3-server_linux_amd64-3.XX.X.tar.bz2
mv teamspeak3-server_linux_amd64 ts3server
cd ts3server
```

> Aktuelle Version: [teamspeak.com/downloads](https://www.teamspeak.com/en/downloads/#server)

---

## Schritt 3 – Lizenz akzeptieren

```bash
touch .ts3server_license_accepted
```

---

## Schritt 4 – Server starten

```bash
./ts3server_startscript.sh start
```

Beim ersten Start werden **ServerAdmin Token** und **Query-Passwort** angezeigt — unbedingt speichern!

```
------------------------------------------------------------------
I M P O R T A N T
------------------------------------------------------------------
Server Query Admin Account created
loginname= "serveradmin", password= "XXXXXXXXX"

token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------------------------------------------------------------------
```

---

## Schritt 5 – Als Service einrichten (Autostart)

```bash
exit  # Zurück zu root
nano /etc/systemd/system/teamspeak.service
```

```ini
[Unit]
Description=TeamSpeak 3 Server
After=network.target

[Service]
WorkingDirectory=/home/teamspeak/ts3server
User=teamspeak
Group=teamspeak
Type=forking
ExecStart=/home/teamspeak/ts3server/ts3server_startscript.sh start
ExecStop=/home/teamspeak/ts3server/ts3server_startscript.sh stop
ExecReload=/home/teamspeak/ts3server/ts3server_startscript.sh restart
PIDFile=/home/teamspeak/ts3server/ts3server.pid
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
systemctl daemon-reload
systemctl enable teamspeak
systemctl start teamspeak
```

---

## Firewall freischalten

```bash
ufw allow 9987/udp
ufw allow 10011/tcp
ufw allow 30033/tcp
```

---

## Ports Übersicht

| Port | Protokoll | Funktion |
|------|-----------|----------|
| 9987 | UDP | Voice |
| 10011 | TCP | ServerQuery |
| 30033 | TCP | Filetransfer |
