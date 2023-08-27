```
1. Introduction 
	1.1 Purpose 
	1.2 Scope
	1.3 Definitions, Acronyms, and Abbreviations 
	1.4 References 
	1.5 Overview of document 
2. General Description 
	2.1 Product Perspective 
	2.2 Product Functions 
	2.3 User Characteristics 
	2.4 Assumptions and Dependencies 
	2.5 Apportioning of Requirements
1. Specific Requirements 
	3.1 External Interfaces
	3.2 Functions
	3.3 Performance Requirements
	3.4 Logical Database Requirements
	3.5 Design Constraints 
	3.6 Software System Attributes 
	3.7 Other Requirements
4. Appendices 
	4.1 Appendix A – Glossary 
	4.2 Appendix B – Analysis Models 
	4.3 Appendix C – Supplementary Information	
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
# 1. Introduction
## 1.1 Purpose
This Software Requirements Specifications (SRS) specifies the requirements of Software system, which helps both Students and Placement Coordinator to make the process of creating, modifying, applying easier.
## 1.2 Scope
The software system will provide a web-based interface for the students, to apply for a drive, help them organize their Educational details.
This system will also  provide an administrative interface for creating, updating, drive information and getting details of the students who applied for the drive.
## 1.3 Definitions, Acronyms, and Abbreviations
**Student:** A user of the system, who makes use of software by applying for the drives, organizing his information.
**Placement Coordinator:** A user of the system, who makes use of software by creating, modifying the drive details, getting details of the applied students of a drive.
**Drive:** Drive can be a placement drive after their 4th year or internship drive within their 4 years, which is conducted by companies to recruit students, by help of placement cell.
## 1.4 References
IEEE Std 830-2019: IEEE Recommended Practice for Software Requirements Specifications
## 1.5 Overview of Document
This SRS document is structured into the following sections: 
**Introduction:** Provides an overview of the document and its contents. 
**General Description:** Provides a high-level description of the software system. 
**Specific Requirements:** Provides a detailed description of the software system requirements. 
**Appendices:** Includes additional information that may be helpful for understanding or implementing the SRS.

<html><body>
<div style="page-break-after: always;"></div>
</body></html>

# 2. General Description
## 2.1 Product Perspective
The Software System will be a standalone software application that will be handled by Placement Coordinator. The system will provide a web-based interface that can be accessed by students.
## 2.2 Product Functions
The Software system will provide you with the following functions:
**Student Registration:** Students of Indian Institute of Information Technology Kottayam, will be able to register, and provide all the details that are required. 
(*Authenticated*)
**Applying for a drive:** Students will be able to apply for a drive, and the student information regarding the drive will be shared to the respective company.
**Creating a Drive:** Placement Coordinator will create a new drive, so that interested students can apply for the drive.
**Updating Drive Required Data:** Sometimes, Companies will modify their requirements from the student data, Placement coordinator, should be able to get that data, by modifying drive.
**Updating Drive:** This helps to change the dates, and other details in a particular drive. 
**Profile:** They can store their Educational Details, Personal Details, Certificates, Resume which help them to keep all information at a place private to them, in a organized manner.
**History:** Help them managing previous drives information, experience.
**Placement Calander:** Helps to have a track of all the upcoming and ongoing drives, intership rounds, dates at a place.
**Dashboard:** Displays the list of upcoming, ongoing drives, calander, this is basically the home page of the software.
## 2.3 User Characteristics
**Students:** Students apply for the drive, and use this application to store their details, information, they can have a history of their drives. Students, can use this application with a basic technical knowledge and internet.
**Placement Coordinator:** Placement coordinator, is actually the one who create, modify drives, updates the calander, and take care of other things, they can take care of these things from Placement coordinator interface. They will have admin priviliges, 
(*Authorized*) should have good technical knowledge and internet facility.
## 2.4 Assumptions and Dependencies
The following assumptions are made about the environment in which the Application is used
* The Users have a good internet connection.
* The profile, their drive history, their information is secured and private to them.
## 2.5 Apportioning of Requirements
No specific requirements need to be apportioned among different parts.
# 3. Specific Requirements
## 3.1 External Interfaces
There are no External Interfaces for the Placement Management application.
## 3.2 Functions
The Software system will provide you with the following functions:
**Student Registration:** Students of Indian Institute of Information Technology Kottayam, will be able to register, and provide all the details that are required. 
(*Authenticated*)
**Applying for a drive:** Students will be able to apply for a drive, and the student information regarding the drive will be shared to the respective company.
**Creating a Drive:** Placement Coordinator will create a new drive, so that interested students can apply for the drive.
**Updating Drive Required Data:** Sometimes, Companies will modify their requirements from the student data, Placement coordinator, should be able to get that data, by modifying drive.
**Updating Drive:** This helps to change the dates, and other details in a particular drive. 
**Profile:** They can store their Educational Details, Personal Details, Certificates, Resume which help them to keep all information at a place private to them, in a organized manner.
**History:** Help them managing previous drives information, experience.
**Placement Calander:** Helps to have a track of all the upcoming and ongoing drives, intership rounds, dates at a place.
**Dashboard:** Displays the list of upcoming, ongoing drives, calander, this is basically the home page of the software.
## 3.3 Performance Requirements 
The System software must meet the following performance requirements: 
**Response Time:** The system must respond to student requests within 3 seconds. 
**Concurrent Users:** The system must be able to handle a minimum of 100 concurrent users at any given time. 
**Availability:** The system must have an uptime of at least 99.9
## 3.4 Logical Database Requirements
The Software System will maintain the following data in a logical database: 
**Student Information:** Name, Email address, phone number, 10th grade, 12th grade, Cgpa, Sgpa, rollnumber, login id, password, resume link, certifications link.
**Drive History:** Driveid, drive status, performance, experience
**Company Information:** CompanyId, Company Name, ctc, location, role.
## 3.5 Design Constraints
**Web-based Interface:** The system must be accessible through a web-based interface that is compatible with popular web browsers.
**Security:** The system must incorporate appropriate security measures to protect student personal and educational information.
## 3.6 Software System Attributes
The application must exhibit the following software system attributes: 
**Maintainability**: The system must be easy to maintain and update by Coordinators.
**Usability:** The system must be easy to use for both Students, Coordinators. 
**Portability:** The system must be portable and able to run on different hardware and operating system environments
## 3.7 Other Requirements
**Compliance:** The application must comply with all applicable laws and regulations related to  college, placement cell poilicies.
**Documentation:** The application must be accompanied by appropriate documentation, including user manuals and technical specifications.
# 4. Appendices
## 4.1 Appendix A – Glossary
**Student:** A user of the system, who makes use of software by applying for the drives, organizing his information.
**Placement Coordinator:** A user of the system, who makes use of software by creating, modifying the drive details, getting details of the applied students of a drive.
**Drive:** Drive can be a placement drive after their 4th year or internship drive within their 4 years, which is conducted by companies to recruit students, by help of placement cell.
## 4.2 Appendix B – Analysis Models
**Use Case Model:** The use case model describes the interactions between the website and students. The use cases include applying for a drive, storing information. 
**Data Model:** The data model describes the data elements used by the application including Student, coordinator, drive.
## 4.3 Appendix C – Supplementary Information
**Assumptions:** The application assumes that all students are authorized to apply for the drives and the data of applied students will be shared to company securely.
**Constraints:** The application is subject to constraints related to the capacity of the system to handle multiple users concurrently. 
**Dependencies:** The application rlies on the placement coordinator to update and create the drives , including servers, network infrastructure.
**Operational Scenarios:** The applicatoin will operate 24 hours a day, 7 days a week, and will be accessible to users via a web-based user interface. 
**Security Requirements:** The application must maintain student privacy and prevent unauthorized access to student accounts and personal information. 
**Usability Requirements:** The application must be helping them to save their time, and must include features to store their data more organizedly.