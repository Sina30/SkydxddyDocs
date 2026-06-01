# Apache2, PHP 8.3, MariaDB und phpMyAdmin

> Installation des kompletten Web-Stacks auf einem Debian-Server.

## Apache2 installieren

```bash
apt install -y apache2
systemctl enable apache2
systemctl start apache2
```

Erreichbar unter `http://DEINE-IP`

---

## PHP 8.3 installieren

```bash
apt install -y lsb-release apt-transport-https ca-certificates
wget -qO /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/php.list

apt update
apt install -y php8.3 php8.3-cli php8.3-mysql php8.3-mbstring php8.3-xml php8.3-curl php8.3-zip libapache2-mod-php8.3
```

PHP-Version prüfen:

```bash
php -v
```

---

## MariaDB installieren

```bash
apt install -y mariadb-server
systemctl enable mariadb
systemctl start mariadb

# Sicherheitseinrichtung
mysql_secure_installation
```

### Datenbank & Benutzer anlegen

```sql
mysql -u root -p

CREATE DATABASE fivem_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'fivem'@'localhost' IDENTIFIED BY 'sicherespasswort';
GRANT ALL PRIVILEGES ON fivem_db.* TO 'fivem'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

---

## phpMyAdmin installieren

```bash
apt install -y phpmyadmin
```

> Beim Setup: Apache2 auswählen, dbconfig-common aktivieren, Passwort vergeben.

Falls der Link nicht automatisch gesetzt wird:

```bash
ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

Erreichbar unter `http://DEINE-IP/phpmyadmin`

---

## Apache2 neu laden

```bash
systemctl reload apache2
```
