# Forgotten Talents Foundation

A modern web platform designed to help identify, protect, and showcase children's talents through a secure moderation process before they are shared publicly.

Built with **React**, **Firebase Authentication**, **Firestore**, and **Firebase Storage**.

> 🚧 **Project Status:** MVP (Minimum Viable Product)

---

## What is it?

Forgotten Talents Foundation is a web application that allows parents, guardians, or sponsors to safely submit children's talents — including music, art, dance, sports, and other creative abilities — for administrative review before publication in a public online gallery.

Unlike an open social media platform, every submission is reviewed by an administrator before becoming publicly visible. This moderation process helps protect children's privacy while ensuring appropriate content is shared.

🌐 **Live website:** https://forgotten-talents-foundation.web.app

---

## Why was it built?

This project began with a personal question: **how many talented children are never discovered simply because they lack opportunities or someone to showcase their abilities?**

As someone with a background in music and currently pursuing a degree in Information Systems, I wanted to combine my passion for the arts with software development to build a platform that could one day help children receive recognition and opportunities, regardless of disability, financial circumstances, or geographic location.

Forgotten Talents Foundation represents more than a technical project — it represents an idea of how technology can be used to create positive social impact, while also demonstrating my ability to design and build a secure, cloud-based web application using modern software engineering practices.

---

## Features

- Secure talent submission workflow, protected by an invitation code
- Image, video, and audio uploads via Firebase Storage
- Firebase Firestore database
- Administrator authentication and moderation dashboard
- Approve & publish, reject, unpublish, or permanently delete submissions and media
- Public gallery displaying approved talents only
- Privacy guidance for parents and sponsors
- Responsive interface, deployed on Firebase Hosting

---

## Technology stack

**Frontend:** React · JavaScript (ES6+) · HTML5 · CSS3
**Backend & cloud:** Firebase Authentication · Firestore · Firebase Storage · Firebase Hosting
**Tools:** Git · GitHub · Visual Studio Code

---

## Installation

Clone the repository:

```bash
git clone https://github.com/mugabebertrand/forgotten-talents-foundation.git
```

Move into the project directory:

```bash
cd forgotten-talents-foundation
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Usage

**Visitors** can browse the public gallery to discover approved talents and learn about the foundation's mission.

**Parents/sponsors** can submit a child's talent through the Upload page using an invitation code. Each submission stays private until reviewed by an administrator.

**Administrators** sign in securely via Firebase Authentication to review, approve and publish, reject, unpublish, or permanently delete submissions and their media.

---

## Contributing

This project is currently maintained by a single developer as a portfolio/MVP project. To suggest a change or report an issue:

1. Open an issue on this repo describing the change or bug
2. Or fork the repo, create a branch (`git checkout -b feature-name`), make your change, and open a pull request

For anything related to the foundation's mission or official content, please reach out directly (see Author, below) rather than opening a PR.

---

## Technical highlights

This project reflects practical software engineering concepts, including:

- Authentication and role-based access control
- Cloud storage and secure file uploads
- Database design and CRUD operations
- Content moderation workflows
- Responsive web design
- Cloud deployment

It also reflects my interest in using technology to solve meaningful real-world problems, not just to demonstrate a skill.

---

## Roadmap

- Foundation registration workflow
- Online donation processing
- Sponsor dashboard
- Talent search and filtering
- Email notifications
- Parent accounts
- Judge and mentor accounts
- Scholarship opportunities
- International expansion
- Mobile application

---

## Screenshots

*(Coming soon as development continues.)*

---

## About the developer

**Jean Jacques Bertrand Mugabe**
Information Systems Student, The University of Texas at Arlington
Associate Degree in Music
Full-Stack Software Engineering Bootcamp Graduate

Forgotten Talents Foundation combines two areas that have shaped my journey: music and technology. It reflects my goal of building software that creates opportunities for people, while demonstrating practical skills in modern web application development.

- GitHub: [github.com/mugabebertrand](https://github.com/mugabebertrand)
- LinkedIn: [linkedin.com/in/jean-j-bertrand-mugabe](https://www.linkedin.com/in/jean-j-bertrand-mugabe)

---

## License

This project is currently an MVP developed for portfolio and demonstration purposes. The long-term vision is to evolve it into a fully operational platform that supports talent discovery while protecting children's privacy and ensuring responsible content moderation.