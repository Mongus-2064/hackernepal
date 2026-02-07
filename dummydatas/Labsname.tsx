import { Bug, CloudUpload, Computer, Database, FingerprintPatternIcon, ShieldAlert } from "lucide-react";

export const labs = [
  {
    id: 1,
    name: "SQL Injection",
    slug: "Authenticationlab",
    intro: "Break login systems by manipulating database queries.",
    description:
      "SQL Injection happens when user input is directly placed into a SQL query. Attackers can bypass authentication, dump data, or even delete tables by injecting malicious SQL code.",
    icon: <Database size={50} className="bg-purple-950  p-2 rounded-md text-purple-600" />,
  },
  {
    id: 2,
    name: "Cross-Site Scripting (XSS)",
    slug: "xss",
    intro: "Execute malicious JavaScript in a victim’s browser.",
    description:
      "XSS allows attackers to inject scripts into trusted web pages. These scripts can steal cookies, deface websites, or perform actions as the victim.",
    icon: <Bug size={50} className="bg-red-950 p-2 rounded-md text-red-500"/>,
  },
  {
    id: 3,
    name: "Cross-Site Request Forgery (CSRF)",
    slug: "csrf",
    intro: "Force a logged-in user to perform unwanted actions.",
    description:
      "CSRF tricks a user’s browser into sending authenticated requests to a vulnerable site. The server thinks the request is legit because it comes from the victim’s session.",
    icon: <Computer size={50} className="bg-cyan-950 text-cyan-500 p-2 rounded-md" />,
  },
  {
    id: 4,
    name: "Authentication Bypass",
    slug: "auth-bypass",
    intro: "Access protected areas without valid credentials.",
    description:
      "Authentication bypass occurs when login logic is flawed. Attackers can skip checks, reuse tokens, or manipulate requests to gain unauthorized access.",
    icon: <FingerprintPatternIcon size={50} className="bg-green-950 text-green-500 p-2 rounded-md" />,
  },
  {
    id: 5,
    name: "Insecure Direct Object Reference (IDOR)",
    slug: "idor",
    intro: "Access other users’ data by changing IDs.",
    description:
      "IDOR happens when applications trust user-controlled IDs. By changing a parameter, attackers can view or modify data that does not belong to them.",
    icon: <ShieldAlert size={50} className="bg-blue-950 text-blue-500 p-2 rounded-md" />,
  },
  {
    id: 6,
    name: "File Upload Vulnerability",
    slug: "file-upload",
    intro: "Upload malicious files to gain server access.",
    description:
      "Improper file validation lets attackers upload scripts instead of images or documents. This can lead to remote code execution on the server.",
    icon: <CloudUpload size={50} className="bg-yellow-950 text-yellow-500 p-2 rounded-md" />,
  },
];
