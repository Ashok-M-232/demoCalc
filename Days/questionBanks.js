const questionBanks = {
   day1: [
  // 1-5: Cyber Security Basics
  {
    question: "Primary purpose of Cyber Security?",
    options: ["Decoration", "Protecting systems & data", "Speed", "Fun"],
    answer: 1,
    explanation: "Cyber Security professionals protect an organization’s information systems, networks, applications, data, and digital infrastructure from cyber threats."
  },
  {
    question: "CIA Triad - C stands for?",
    options: ["Control", "Confidentiality", "Central", "Configuration"],
    answer: 1,
    explanation: "Confidentiality ensures only authorized users can access information."
  },
  {
    question: "CIA Triad - I stands for?",
    options: ["Integrity", "Inspection", "Information", "Interface"],
    answer: 0,
    explanation: "Integrity ensures data remains accurate and unaltered."
  },
  {
    question: "CIA Triad - A stands for?",
    options: ["Availability", "Access", "Audit", "Authentication"],
    answer: 0,
    explanation: "Availability ensures systems remain operational and accessible without disruption."
  },
  {
    question: "Who protects organization from hackers?",
    options: ["HR", "Blue Team / SOC", "Developers", "Sales"],
    answer: 1,
    explanation: "The Blue Team / SOC monitors, defends, and responds to cyber threats to protect the organization."
  },

  // 6-10: SOC and Blue Team
  {
    question: "Blue Team is responsible for?",
    options: ["Defensive security", "Creating malware", "Hacking competitors", "Sales"],
    answer: 0,
    explanation: "Blue Team focuses on defending an organization’s systems and networks from cyber attacks."
  },
  {
    question: "SOC stands for?",
    options: ["System Operations Center", "Security Operations Center", "Service Operations Center", "Security Office Control"],
    answer: 1,
    explanation: "SOC is a centralized team that continuously monitors and secures an organization’s IT environment."
  },
  {
    question: "Incident Response Team handles?",
    options: ["Confirmed security incidents", "Sales reports", "HR tasks", "Software bugs"],
    answer: 0,
    explanation: "Incident Response Team mitigates, contains, and recovers from confirmed security incidents."
  },
  {
    question: "Main tools used by SOC/Blue Team?",
    options: ["SIEM, Threat Intelligence, Security Policies", "Spreadsheet, PowerPoint, Email", "Fire extinguishers", "Routers only"],
    answer: 0,
    explanation: "SOC/Blue Team operates using SIEM tools, threat intelligence, and security controls/policies."
  },
  {
    question: "SIEM stands for?",
    options: ["Security Info Event Management", "System Inspection", "Service Internet", "None"],
    answer: 0,
    explanation: "SIEM stands for Security Information and Event Management."
  },

  // 11-15: SIEM Functions
  {
    question: "SIEM collects logs from?",
    options: ["Multiple devices", "Single server", "Paper documents", "External emails only"],
    answer: 0,
    explanation: "SIEM collects logs from multiple devices across the organization."
  },
  {
    question: "SIEM correlates security events to?",
    options: ["Detect suspicious activity", "Print reports", "Organize spreadsheets", "Send emails"],
    answer: 0,
    explanation: "Event correlation helps detect suspicious or malicious activities."
  },
  {
    question: "Example SIEM platforms?",
    options: ["Microsoft Sentinel, Splunk, IBM QRadar, ArcSight", "Word, Excel, PowerPoint", "Google Chrome, Firefox", "AWS S3 only"],
    answer: 0,
    explanation: "Microsoft Sentinel, Splunk, IBM QRadar, and ArcSight are popular SIEM tools."
  },
  {
    question: "SIM stands for?",
    options: ["Security Information Management", "System Inspection Module", "Software Integrity Monitor", "Security Internet Management"],
    answer: 0,
    explanation: "SIM provides long-term log storage, audits, and historical data analysis."
  },
  {
    question: "SEM stands for?",
    options: ["Security Event Management", "System Event Monitor", "Software Event Module", "Security Email Manager"],
    answer: 0,
    explanation: "SEM focuses on real-time monitoring, alert generation, and event correlation."
  },

  // 16-20: SIEM Data Sources
  {
    question: "Examples of SIEM data sources?",
    options: ["Endpoints, Servers, Network Devices, Cloud, Security Tools, Applications", "Only servers", "Only laptops", "Only routers"],
    answer: 0,
    explanation: "SIEM collects logs from endpoints, servers, network devices, cloud platforms, security tools, and applications."
  },
  {
    question: "Centralized Log Management is?",
    options: ["Collecting all logs in one system for analysis", "Distributing logs manually", "Deleting logs", "Printing logs"],
    answer: 0,
    explanation: "Centralized Log Management helps analyze large volumes of raw security data efficiently."
  },
  {
    question: "Logs are usually?",
    options: ["Huge in volume and critical for analysis", "Small and insignificant", "Printed on paper", "Not stored anywhere"],
    answer: 0,
    explanation: "Security logs are large, raw data critical for monitoring and incident response."
  },
  {
    question: "SIEM core functions include?",
    options: ["Collection, Detection, Investigation, Response", "Monitoring emails only", "Sales analysis", "Printing reports"],
    answer: 0,
    explanation: "SIEM performs log collection, threat detection, investigation of alerts, and response actions."
  },
  {
    question: "Detection in SIEM uses?",
    options: ["Correlation rules, Use cases, Threat Intelligence", "HR forms", "Payroll software", "Excel sheets"],
    answer: 0,
    explanation: "Detection leverages correlation rules, use cases, and threat intelligence to identify threats."
  },

  // 21-25: SOC Roles
  {
    question: "SOC L1 analyst role?",
    options: ["Monitor alerts 24/7, initial triage, report preparation", "Develop software", "Network installation", "Marketing"],
    answer: 0,
    explanation: "SOC L1 monitors SIEM alerts, performs initial triage, identifies false positives, and prepares incident reports."
  },
  {
    question: "SOC L2 analyst role?",
    options: ["Deep investigation, correlation, detection rules, KQL queries", "Marketing", "Finance", "HR"],
    answer: 0,
    explanation: "SOC L2 performs deep-dive investigations, writes detection rules, and guides L1 analysts."
  },
  {
    question: "SOC L3 role?",
    options: ["SIEM configuration, log onboarding, automation", "Email management", "Payroll processing", "Network cabling only"],
    answer: 0,
    explanation: "SOC L3 handles SIEM architecture, automation (SOAR), alert fine-tuning, and advanced integrations."
  },
  {
    question: "MSSP stands for?",
    options: ["Managed Security Service Provider", "Microsoft Security System Platform", "Monitoring System Software", "None"],
    answer: 0,
    explanation: "MSSP is a third-party company providing managed security services."
  },
  {
    question: "In-House SOC means?",
    options: ["Security handled internally within the organization", "Outsourced security", "Cloud-only monitoring", "Firewall only"],
    answer: 0,
    explanation: "In-House SOC is an internal team that manages all security operations."
  },

  // 26-30: SOC Deployment Models Summary
  {
    question: "Which SOC model is cost-effective for small-medium companies?",
    options: ["MSSP", "In-House SOC", "No SOC", "Firewall only"],
    answer: 0,
    explanation: "MSSPs reduce cost and provide expertise without hiring full internal staff."
  },
  {
    question: "Which SOC model gives maximum control?",
    options: ["In-House SOC", "MSSP", "No SOC", "Cloud-only SOC"],
    answer: 0,
    explanation: "In-House SOC allows maximum visibility and control over security events."
  },
  {
    question: "Hybrid SOC approach?",
    options: ["Combination of internal staff and MSSP", "Only internal", "Only third-party", "No monitoring"],
    answer: 0,
    explanation: "Some organizations combine internal SOC staff with MSSPs to balance cost, expertise, and control."
  },
  {
    question: "Normal event example?",
    options: ["User login during office hours", "Multiple failed login attempts", "Unauthorized access", "Hacking attempt"],
    answer: 0,
    explanation: "Normal events are routine and expected behavior, forming a baseline for monitoring."
  },
  {
    question: "Abnormal event example?",
    options: ["Multiple failed logins, unusual access, traffic spikes", "Routine backup", "Standard file access", "Office email sent"],
    answer: 0,
    explanation: "Abnormal events are suspicious activities requiring SOC investigation."
  },

  // 31-35: Kill Chain & MITRE
  {
    question: "Cyber Kill Chain helps SOC teams?",
    options: ["Understand attacker tactics, techniques, procedures", "Write emails", "Run backups", "Monitor only sales data"],
    answer: 0,
    explanation: "Cyber Kill Chain outlines stages of a cyber attack for proactive detection and response."
  },
  {
    question: "MITRE ATT&CK is?",
    options: ["Framework describing attacker techniques", "Firewall brand", "Network router", "Email client"],
    answer: 0,
    explanation: "MITRE ATT&CK helps map attacker techniques, tactics, and procedures for SOC analysis."
  },
  {
    question: "Initial Access in Kill Chain means?",
    options: ["Gaining entry into the system (phishing, exploits, credentials)", "Exfiltrating data", "Installing antivirus", "Creating users"],
    answer: 0,
    explanation: "Initial Access is the attacker gaining entry into the target system using phishing, exploits, or stolen credentials."
  },
  {
    question: "Privilege Escalation in Kill Chain?",
    options: ["Attacker gains higher access rights", "Normal login", "Routine backup", "Network check"],
    answer: 0,
    explanation: "Privilege escalation allows attackers to increase access rights to compromise more systems."
  },
  {
    question: "Lateral Movement in Kill Chain?",
    options: ["Moving across network to find critical assets", "User login", "File deletion", "Firewall update"],
    answer: 0,
    explanation: "Lateral movement is when attackers move across the network to target critical resources."
  },

  // 36-40: Exfiltration & Brute Force Example
  {
    question: "Exfiltration means?",
    options: ["Stealing data from the organization", "Normal backup", "Email sending", "Patch updates"],
    answer: 0,
    explanation: "Exfiltration is the unauthorized transfer of data out of an organization."
  },
  {
    question: "Brute Force Attack example?",
    options: ["User RAJESH43 multiple failed logins then sudden success", "Normal login", "Routine backup", "Firewall check"],
    answer: 0,
    explanation: "Brute force involves repeated login attempts; SIEM alerts the SOC for investigation."
  },
  {
    question: "Key takeaway about normal events?",
    options: ["Establish baseline of expected behavior", "Ignore them", "Delete logs", "Print them"],
    answer: 0,
    explanation: "Normal events form a baseline that helps identify abnormal events."
  },
  {
    question: "Key takeaway about abnormal events?",
    options: ["Early indicators of potential attacks", "Routine activity", "System updates", "Sales data"],
    answer: 0,
    explanation: "Abnormal events are early warning signs that help SOC proactively respond to attacks."
  }
],

  day2: [
    {question:"What is phishing?",options:["Fishing game","Cyber attack via emails","Cooking method","Data backup"],answer:1, explanation:"Phishing is a cyber attack via emails."},
    {question:"Ransomware does?",options:["Encrypts data for ransom","Deletes network","Speeds system","Creates accounts"],answer:0, explanation:"Ransomware encrypts data to demand ransom."}
  ]
 
};
