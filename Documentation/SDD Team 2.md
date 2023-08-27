# Contents
```
1. Introduction
2. System Architecture
3. Data Design
4. Component Design
5. Interface Design
6. Algorithm Design
7. Database Design
8. System Control Design
9. System / Software Integration
10. Infrastructure Design
11. Design Considerations
12. Glossary
```

`Team Members:`
1. Darisi Priyatham
2. Yogesh Jhanwar
3. Vivekananda
4. Sudarshan
5. Samriddhi
6. Richa
7. Vishnu
8. Chakradar
9. Ankit Raj

<html><body>
<div style="page-break-after: always;"></div>
</body></html>

# 1. Introduction
## 1.1 Purpose
The purpose of this System Design Document (SDD) is to describe the system design of Placement Management Application.
## 1.2 Scope
The scope of this document is to provide a comprehensive overview of the  Placement Management Application design for Indian Institute of Information Technology Kottayam. It is intended for Placement Coordinators, developers, project managers, Faculty In-charge.
## 1.3 Definitions, Acronyms, and Abbreviations
*SDD* - System Design Document 
*UI* - User Interface 
*DFD* - Data Flow Diagram 
*ERD* - Entity Relationship Diagram
# 2. System Architecture
# 3. Data Design
This section describes the data design of Placement Management application. It includes the data used by system, a data dictionary, and information about data storage, access, and manipulation.
## 3.1 Data Description
The placement management application uses the following data:
* *Student Data:* Information including name, contact details, mail id, educational qualifications, resume.
* *Company Data:* Information including name, company details, location, expecting package, required qualifications.
## 3.2 Data Dictionary
Need to create this...🙂
## 3.3 Data Storage
The data for the Placement Management application will be stored in a Relational Database Management System (RDBMS).
The RDBMS will provide data consistency, data integrity, and data security.
The Interface will allow user to perform CRUD(Create, Read, Update, Delete) operations on the data. Access to data will be controlled through authentication and authorization mechanisms.
## 3.4 Data Access
Data access to the placement management application will be provided through a web-based interface. The interface will allow authorized users (coordiantors) to perform CRUD (Create, Read, Update, Delete) operations on the data.
## 3.5 Data Manipulation
Data Manipulatiton in the placement management application will be performed using SQL (Structured Query Languauge). The system will use stored procedures to ensure data cconsistency and data integrity. The system willl also implement appropriate error handling mechanisms to ensure that invalid data is not entered to the system.

<html><body>
<div style="page-break-after: always;"></div>
</body></html>

# 4. Component Design 
## 4. 1 Component description 
This section provides a detailed description of the components that make up the placement Management application. The system consists of the following components
*User interface component:* This component is responsible for handling all student interactions with the system, including participating in the drive, update profile, registration for student/company.
*Company component:* This section provides information about their company like location, company details, salary expectation range.
*Reporting component:* this sections reports to the student that you are qualified for company or not.
*Student component:* This section provides information about the student educational qualifications, his skills in computers, what role the student is seeking the job, etc.
## 4.2 Component Functionality
This section provides a detailed description of the functionality of each component.
*User interface component:* The user interface component provides a user-friendly interface for customers to interact with the placement cell application. Its main functions include:
 - **Student Registration:** Allows student to provide necessary information such as name, contact information, placement information.
 - **Placement Drive:** The students are allowed to participate in the drives conducted by company's.
 - **Profile:** Every student maintains a profile which is only accessible to him `Confidentiality` he can store all his personal data, eduactional qualifications insterested area in job seeking, resume and other details.
 - **Calander:** Displays the information regarding dates of the drives.
*Reporting component:* If a student gets selected for job then he/she is used to sit for a meet or attend a test on the given date.

<html><body>
<div style="page-break-after: always;"></div>
</body></html>

# 5. Interface Design
## 5.1 User Interface
The user interface design will be based on the principles of usability and student experience. The interface will be intuitive, easy to use, and visually appealing. It will provide students and company people with all the necessary information they need to get placement, their placement status and manage their account.
## 5.2 System to System interface
The interface is common to all the students. The interface is the portion of the system used to connect one system to other systems. So a closed system uses its interface to react or communicate with another closed system.

## 5.3 External interfaces
The external interface is the interface that connects to the Internet or a Wide Area Network (WAN). The external interface must have an IP address to operate correctly. We will assign a static or dynamic IP address to the external interface to protect our system.
# 6. Algorithm Design
This section describes the algorithm design, including the algorithms used in the system, and their implementation details.
## 6.1 AutoFilling Data Algorithm
An algorithm is designed such that while we are applying for a drive then our profile details will be filled in the company's application form.
## 6.2 Timeline Algorithm
An algorithm designed such that, drive dates, Exam dates, other important dates and whenever a student apply for a drive, the dates will be reflected in the calendar so they can have a track of events.
## 6.3 Display Algorithm
Whenever, a company drive is created, it need to be reflected in the drives.
# 7. Database Design
## 7.1 Student Table
Student entered details it will be stored in a database. His personal details, educationmal qualifications, in which domain he wants job,photo,everything about student is stored in database.
## 7.2 Drive Table
Data of company will be stored in this database such as company address, company reputation, company’s details, drive details, ctc offered, deadline, location, type of job.
# 8. System Control Design
This section describes the system control design, including the control flow of the system, and the mechanisms used for error handling and recovery.
## 8.1 Error Handling
*Invalid input:* for any kind of wrong input such as incase of numeric we use alphabets or viseversa.
*Invalid Query:* In a database if a wrong query is written then it will not execute.
## 8.2 Recovery
The data will be successfully saved whenever the user updates . we can get the past saved data upto 7 days.
## 8.3 Control flow of data:
The data is successfully saved in the database whenever you click on proceed the data will be filled in the drive form and will be shared to the comapny.
# 9. System / Software Integration
This section describes the process of integrating the various system components and testing the system as a whole.
The main integration is done between the frontend-backend and the dataase.
To create CRUD apis, and make the endpoints to provide the details to the frontend.
# 10. Infrastructure Design
## 10.1 Software Infrastructure:
The software infrastructure for the placement management application will consist of the following components:
* Operating System: Windows 11, MacOS
* Web Server: Apache HTTP server
* Relational Database Management System: MySQL
* Backend: Django
* Programing languages: HTML, CSS, JS, Python.
## 10.2 Network Infrastructure
The placement cell application will be connected to the local area network (LAN) and will have access to the internet via the wide area network (WAN). The system will require the following networking components:
*Switches:* These will be used to connect the server, workstations, and other networking components to the LAN.
*Router:* This will be used to connect the LAN to the WAN and provide internet access to the system. 
*Firewall:* This will be used to secure the system and prevent unauthorized access.
# 11. Desgin Considerations
This section describes any additional design considerations, such as security, performance, and maintainability.
## Development stakeholder expectations
To provide to take feedback from the students and company people and develop the software with their needs,
## Technical requirements 
Whatever are needed by the technical staff to be provided and make sure there should not be any error and slow down in the system.
## Logical decompositions 
To resolve any algorithmic calculations, logical expressions in the system
## Design Solutions : 
Finding the solutions to design the updated software and design the software . The design solution definition will be used to generate the end product specifications that will be used to produce the product and to conduct product verification. This process may be further refined depending on whether there are additional subsystems of the end product that need to be defined.
## Security Design
To ensure the security of the placement cell application and its data, the following measures will be implemented:
*User authentication:* All users of the system will be required to authenticate themselves using a username and password.
*Data encryption:* All sensitive data, such as student information and placements of students, will be encrypted using industry-standard encryption algorithms.
*Regular backups:* The system will be backed up regularly to prevent data loss in the event of a system failure or other disaster.
*Firewall:* A firewall will be installed to prevent unauthorized access to the system and its data.
# 12. Glossary 
The placement cell application finally concludes that to produce a short path for students for applying/getting jobs. It is a website where students can fill their resume and companies also register and conducts their drive’s to select students.
**Student:** A user of the system, who makes use of software by applying for the drives, organizing his information.
**Placement Coordinator:** A user of the system, who makes use of software by creating, modifying the drive details, getting details of the applied students of a drive.
**Drive:** Drive can be a placement drive after their 4th year or internship drive within their 4 years, which is conducted by companies to recruit students, by help of placement cell.