# 🚌 Bus Tracking System (BTS)

A full-stack web application that enables real-time tracking of buses on a dynamic map interface. Built using **React.js**, **Spring Boot**, and **Leaflet**, it helps students and staff monitor bus locations and plan commutes effectively.

Bus Tracking System (BTS) designed specifically for college students, staff, and faculty members. The main goal of the project is to ensure that no one misses their bus and no one arrives late due to uncertainty about bus locations. With real-time tracking and bus information, users can plan accordingly and stay informed about their transportation.

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📝 Project Description](#-project-description)
- [📂 Project Structure](#-project-structure)
- [⚙️ Tech Stack](#️-tech-stack)
- [📦 Backend Dependencies](#-backend-dependencies)
- [🚀 Setup Instructions](#-setup-instructions)
- [🌐 API Endpoints](#-api-endpoints)
- [✅ Features](#-features)
- [🔮 Future Enhancements](#-future-enhancements)
- [👨‍💻 Author](#-author)

---

## 📝 Project Description

The **Bus Tracking System (BTS)** is tailored for college students, faculty, and staff to ensure nobody misses their bus or arrives late. With real-time tracking and live bus data, users stay informed and plan their travel efficiently.

---

## 📂 Project Structure

```
Final BTS Backend/
├── BusTracking/
│   ├── src/                 # Java source files (Spring Boot)
│   ├── pom.xml              # Maven dependencies
│   └── ...                  # Configs and utils

Final BTS Frontend/
├── Frontend/
│   ├── src/                 # React source files
│   ├── public/
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
```

---

## ⚙️ Tech Stack

### 🔧 Backend (Spring Boot)
- Java 21
- Spring Boot 3.4.5
- Spring Data JPA
- Spring Security
- JWT (JSON Web Token)
- MySQL
- Lombok

### 🎨 Frontend (React)
- React.js (with Vite)
- Axios
- CSS/HTML

### 🗄️ Database
- MySQL

---

## 📦 Backend Dependencies (`pom.xml`)
- `spring-boot-starter-web`
- `spring-boot-starter-data-jpa`
- `spring-boot-starter-security`
- `mysql-connector-java`
- `lombok`
- `jjwt` (io.jsonwebtoken)
- `spring-boot-starter-test`
- `spring-security-test`

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone <repo-url>
```

### 2️⃣ Backend Setup
```bash
cd "Backend/BusTracking"
```

Update `application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/bts
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

Run the backend:
```bash
./mvnw spring-boot:run
```
Server runs at: `http://localhost:8080`

### 3️⃣ Frontend Setup
```bash
cd "Frontend/Frontend"
npm install
npm run dev
```
Frontend runs at: `http://localhost:5173`

---

## 🌐 API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| GET    | `/buses`              | Get all buses         |
| GET    | `/buses/{busNumber}`  | Get bus by number     |
| GET    | `/buses/nearby`       | Get nearby buses      |
| POST   | `/buses`              | Add new bus info      |

---

## ✅ Features
- 🔍 Search Bus by Number  
- 📍 Show Nearby Buses  
- 📊 Display All Bus Records  
- 🔒 JWT-based Authentication  
- 🛡️ Secure REST APIs  

---

## 🔮 Future Enhancements
- 🗺️ Google Maps Integration  
- 📱 Mobile Responsive Design  
- 🧑‍💼 Admin Panel  
- 📡 Live Location Updates  

---

## 👨‍💻 Author

**Khileshwari Deshmukh** – Web Developer   
📧 khileshwarideshmukh01@gmail.com
