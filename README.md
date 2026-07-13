# SDD Portal Codebase

![PHP](https://img.shields.io/badge/PHP-7.x/8.x-777BB4?style=for-the-badge\&logo=php\&logoColor=white)
![Drupal](https://img.shields.io/badge/Drupal-CMS-0678BE?style=for-the-badge\&logo=drupal\&logoColor=white)
![XAMPP](https://img.shields.io/badge/XAMPP-Local%20Environment-FB7A24?style=for-the-badge\&logo=xampp\&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge\&logo=mysql\&logoColor=white)
![Apache](https://img.shields.io/badge/Apache-Web%20Server-D22128?style=for-the-badge\&logo=apache\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge\&logo=github)

Welcome to the **SDD Portal** repository. This repository contains the complete source code and database required to set up and run the SDD Portal in a local development environment.

---

# 📑 Table of Contents

* [Prerequisites](#-prerequisites)
* [Installation Guide](#-installation-guide)
* [Branching Strategy](#-branching-strategy)
* [Developer Workflow](#-developer-workflow)
* [Configuration](#-configuration)
* [Troubleshooting](#-troubleshooting)
* [Developer Notes](#-developer-notes)

---

# 📋 Prerequisites

Before installing the project, ensure the following software is available on your system:

* Git
* XAMPP (Apache, PHP & MySQL)
* Web Browser (Chrome, Edge, Firefox, etc.)
* Database dump (`.sql`)

---

# 📂 Repository Structure

```text
SDD/
├── sites/
├── modules/
├── themes/
├── Database dump/
│   └── database.sql
├── index.php
└── README.md
```

---

# 🚀 Installation Guide

## Step 1 – Download the Project

Clone the repository from GitHub.

```bash
git clone <repository-url>
```

Or download the ZIP and extract it.

---

## Step 2 – Create Project Folder

Create a folder for the project and place all downloaded files inside it.

Example:

```text
SDD/
```

---

## Step 3 – Install XAMPP

Install XAMPP to create a local PHP, Apache, and MySQL environment.

---

## Step 4 – Copy Project to XAMPP

Copy the complete project folder into:

```text
C:\xampp\htdocs\SDD
```

---

## Step 5 – Configure XAMPP

If required, update the configuration files:

* `xampp/php/php.ini`
* `xampp/mysql/bin/my.ini`

Configure custom ports only if the default ports are already occupied.

---

## Step 6 – Configure Database

Open:

```text
sites/default/settings.php
```

Update:

* Database Name
* Username
* Password
* Host
* Port

---

## Step 7 – Start Services

Launch the XAMPP Control Panel and start:

* Apache
* MySQL

---

## Step 8 – Create Database

Open:

```text
http://localhost/phpmyadmin
```

Click **New**, create a database (for example, `abm`), and click **Create**.

---

## Step 9 – Import Database

Select the newly created database.

Navigate to **Import**.

Choose the SQL file from:

```text
<Project Folder>/Database dump/
```

Click **Go** and wait for the import to complete.

---

## Step 10 – Launch the Project

Open your browser and navigate to:

```text
http://localhost/<project-folder-name>
```

Example:

```text
http://localhost/SDD
```

---

# 🌿 Branching Strategy

The SDD Portal follows a simple three-environment branching strategy to ensure stable development and controlled deployments.

| Branch   | Environment             | Purpose                                                                                         |
| -------- | ----------------------- | ----------------------------------------------------------------------------------------------- |
| **dev**  | Development             | Active development, feature implementation, bug fixes, and testing by developers.               |
| **uat**  | User Acceptance Testing | Stable code deployed for QA and business user validation before production release.             |
| **prod** | Production              | Production-ready code. Only approved and thoroughly tested changes are merged into this branch. |

## Branch Flow

```text
Feature Branch
      │
      ▼
feature/<feature-name>
      │
      ▼
dev
      │
      ▼
uat
      │
      ▼
prod
```

---

# 👨‍💻 Developer Workflow

1. Pull the latest changes from the **dev** branch.
2. Create a new feature branch.

```bash
git checkout dev
git pull origin dev

git checkout -b feature/<feature-name>
```

3. Complete development and commit changes.

```bash
git add .
git commit -m "Added <feature-name>"
```

4. Push the feature branch.

```bash
git push origin feature/<feature-name>
```

5. Create a Pull Request targeting the **dev** branch.

6. After successful code review and testing:

* Merge **dev** → **uat**
* Perform UAT validation.
* After approval, merge **uat** → **prod** for production deployment.

---

# ⚙️ Configuration

| File                         | Purpose                |
| ---------------------------- | ---------------------- |
| `sites/default/settings.php` | Database configuration |
| `php.ini`                    | PHP configuration      |
| `my.ini`                     | MySQL configuration    |

---

# 🛠 Troubleshooting

### Apache won't start

* Check if Port **80** or **443** is already in use.
* Update Apache ports if necessary.

### MySQL won't start

* Verify Port **3306** is available.
* Check MySQL logs for startup errors.

### Database Connection Error

* Verify database credentials.
* Ensure the database exists.
* Confirm the SQL file has been imported successfully.
* Verify `sites/default/settings.php`.

### Project Not Loading

* Ensure the project exists inside `xampp/htdocs`.
* Verify Apache and MySQL are running.
* Check the URL is correct.

---

# 👨‍💻 Developer Notes

* Always pull the latest code before starting development.
* Never commit sensitive credentials.
* Keep commits small and meaningful.
* Test changes locally before raising a Pull Request.
* Ensure code is validated in the **UAT** environment before promoting it to **Production**.

---

# 📄 License

This repository is intended for the internal development and maintenance of the **SDD Portal** project.
