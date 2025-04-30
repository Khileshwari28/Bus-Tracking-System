# 🚌 Bus Tracking System (BTS)

A full-stack web application that enables real-time tracking of buses on a dynamic map interface. The goal is to provide users with accurate and updated bus locations, reducing wait time and improving commute planning.

Built using modern technologies including **React.js**, **Spring Boot**, and **Leaflet**, this project combines powerful backend data handling with an interactive and user-friendly frontend.


## 📝 Description

This is a Bus Tracking System (BTS) designed specifically for college students, staff, and faculty members. The main goal of the project is to ensure that no one misses their bus and no one arrives late due to uncertainty about bus locations. With real-time tracking and bus information, users can plan accordingly and stay informed about their transportation.

## 📂 Project Structure
Final BTS Backend/
├── BusTracking/
│ ├── src/ # Java source files (Spring Boot)
│ ├── pom.xml # Maven dependencies
│ └── ... # Spring Boot config and utils

Final BTS Frontend/
├── Frontend/
│ ├── src/ # React source files
│ ├── public/
│ ├── package.json # Frontend dependencies
│ └── vite.config.js # Vite config (for React build)


## ⚙️ Technologies Used

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

## 📦 Backend Dependencies (in pom.xml)
Includes:
- Spring Boot Starter Web
- Spring Boot Starter Data JPA
- Spring Boot Starter Security
- MySQL Connector
- Lombok
- JWT (io.jsonwebtoken)
- Spring Boot Test & Security Test

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone <repo-url>
2. Backend Setup
bash
cd Final\ BTS\ Backend/BusTracking
Update application.properties:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/bts
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
Run backend:

bash
./mvnw spring-boot:run
Backend will run at http://localhost:8080

3. Frontend Setup
bash
cd Final\ BTS\ Frontend/BTS/Frontend
npm install
npm run dev
Frontend will run at http://localhost:5173

🌐 API Endpoints
Method	Endpoint	Description
GET	/buses	Get all buses
GET	/buses/{busNumber}	Get bus by number
GET	/buses/nearby	Get nearby buses
POST	/buses	Add new bus info


✅ Features
🔍 Search Bus by Number

📍 Show Nearby Buses

📊 Display All Bus Records

🔒 JWT-based Authentication

🛡️ Secure REST APIs

🔮 Future Enhancements
🗺️ Google Maps Integration

📱 Mobile Responsive Design

🧑‍💼 Admin Panel

📡 Live Location Updates

👨‍💻 Author
Your Name — Full Stack Developer
📧 yourname@example.com