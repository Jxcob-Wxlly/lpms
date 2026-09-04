# literacy-programme-management-system

Literacy Programme Management System (LPMS); a centralised web platform for **READ Educational Trust**, built for XISD5319 (Work Integrated Learning 3A) and continued into XISD6329.

## Project Background

READ Educational Trust coordinates literacy programmes across multiple schools in South Africa. This system replaces manual and semi-digital processes with a single platform for registering schools, teachers, and learners; scheduling and tracking programme sessions; recording attendance; capturing learner progress; allocating resources; and generating reports for management and donors.

Originally developed by **Team Point Blank** (Percy Dube, Abonga Magugu Nkosi, Siyabonga Ndlovu) for XISD5319. Task 1 of XISD6329 (updated project plan, site map, and wireframes) is submitted individually.

## Folder Structure

```
literacy-programme-management-system/
├── index.html          # login page
├── dashboard.html       # role-based dashboard
├── schools.html          # school registration and list
├── teachers.html         # teacher registration and list
├── learners.html         # learner registration and progress overview
├── programmes.html       # programme list and session scheduling
├── sessions.html          # attendance recording
├── resources.html         # resource allocation
├── reports.html            # report generation and export
├── css/
│   └── style.css          # shared stylesheet
├── js/
│   ├── auth.js
│   ├── dashboard.js
│   ├── schools.js
│   ├── teachers.js
│   ├── learners.js
│   ├── programmes.js
│   ├── sessions.js
│   ├── resources.js
│   └── reports.js
├── assets/
│   └── images/            # image assets
└── docs/
    └── xisd6329-task1.docx   # Task 1 submission (updated project plan, site map, wireframes)
```

All folder and file names use lowercase, hyphen-separated naming with no spaces or special characters, per the module's file/folder naming convention.

## Running Locally

This is a static front-end prototype; no build step required.

1. Clone the repository.
2. Open `index.html` in a browser, **or** serve the folder with a simple local server, e.g.:
   ```
   npx serve .
   ```
3. Log in with any username/password (authentication is a front-end placeholder until the ASP.NET Core backend from the System Design Document is connected).

## Tech Stack

- HTML5, CSS3, vanilla JavaScript (front-end prototype)
- Planned backend: ASP.NET Core + SQL Server (per System Design Document)
- Version control: Git / GitHub, following the DevOps lifecycle documented in the Task 1 submission

## Database

The system is designed around a 3NF relational schema with nine tables: `School`, `Teacher`, `Learner`, `Programme`, `Session`, `Attendance`, `Progress`, `Resource`, and `User`. See the System Design Document for the full ERD.

## Team

| Name | Role |
|---|---|
| Percy Dube | Project Manager / Developer |
| Abonga Magugu Nkosi | System Analyst |
| Siyabonga Ndlovu | Software Designer |
