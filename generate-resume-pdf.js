const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const resume = {
  name: "Anthony Mekwunye",
  title: "Software Engineer",
  location: "Open to global teams",
  email: "anthonymekwunye95@gmail.com",
  website: "",
  linkedin: "https://www.linkedin.com/in/anthony-mekwunye-68a265237/",
  github: "https://github.com/",
  summary:
    "Software engineer focused on designing clean systems, shipping dependable applications, and turning complex business requirements into smooth user experiences.",
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Accessibility", "Performance optimization"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "REST APIs", "Authentication", "PostgreSQL", "Redis"],
    },
    {
      title: "Mobile",
      items: ["Capacitor", "Push notifications (FCM)", "Kotlin Multiplatform (KMP)", "Flutter fundamentals"],
    },
    {
      title: "Cloud & DevOps",
      items: ["Docker", "CI/CD", "Monitoring", "Logging", "Deployment pipelines"],
    },
    {
      title: "Engineering Practice",
      items: ["System design", "Testing", "Debugging", "Code reviews", "Technical documentation", "Agile delivery"],
    },
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      period: "2024 — Present",
      bullets: [
        "Leading feature delivery, architecture decisions, and technical collaboration on product initiatives serving growing user needs at CidiPay.",
      ],
    },
    {
      role: "Technical Support Engineer",
      period: "2022 — 2026",
      bullets: [
        "Provide front-line technical support for Microsoft Dynamics 365 CRM, handling configuration, integration, data migration, and performance troubleshooting.",
        "Investigate customer-reported issues to identify root causes and recommend fixes aligned to product and platform best practices.",
      ],
    },
    {
      role: "Technical Support Specialist",
      period: "2021 — 2022",
      bullets: [
        "Delivered end-user support for hardware and software issues via phone, email, and in-person assistance to minimize downtime.",
      ],
    },
  ],
  projects: [
    {
      title: "CidiPay Mobile (Android/iOS)",
      year: "2026",
      description:
        "Built and shipped a mobile wallet app with deposits, transfers, P2P trading chat, escrow flows, and in-app KYC verification—focused on polished UX, real-time updates, and reliable transaction handling.",
      link: "https://www.cidipay.com",
      stack: ["React", "Capacitor", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Socket.IO", "Firebase (FCM)"],
    },
    {
      title: "Analytics Dashboard for Operations Teams",
      year: "2026",
      description:
        "Built a responsive dashboard with role-based access, real-time metrics, and data-heavy UI flows that improved decision-making speed for internal stakeholders.",
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      title: "High-Throughput Order Processing Service",
      year: "2025",
      description:
        "Designed and shipped backend services for transaction workflows, improving reliability and reducing manual operational handling through better automation and validation.",
      stack: ["Node.js", "Express", "Redis", "Docker"],
    },
    {
      title: "Internal CI Visibility Tool",
      year: "2024",
      description:
        "Created an internal tool to visualize pipeline health, flag failures earlier, and reduce the time engineers spent debugging avoidable deployment issues.",
      stack: ["Next.js", "CI/CD", "Observability"],
    },
  ],
};

function safeText(value) {
  if (value === null || value === undefined) return "";
  return String(value);
}

function writeHeading(doc, text) {
  doc.font("Helvetica-Bold").fontSize(22).fillColor("#0f172a").text(text, { align: "left" });
}

function writeSubheading(doc, text) {
  doc.font("Helvetica").fontSize(11).fillColor("#334155").text(text, { align: "left" });
}

function writeSectionTitle(doc, text) {
  doc.moveDown(0.9);
  doc.font("Helvetica-Bold").fontSize(13).fillColor("#0f172a").text(text.toUpperCase());
  doc.moveDown(0.3);
  doc.strokeColor("#e2e8f0").lineWidth(1).moveTo(doc.page.margins.left, doc.y).lineTo(doc.page.width - doc.page.margins.right, doc.y).stroke();
  doc.moveDown(0.6);
}

function writeBullets(doc, bullets) {
  const list = Array.isArray(bullets) ? bullets : [];
  for (const b of list) {
    const t = safeText(b).trim();
    if (!t) continue;
    doc.font("Helvetica").fontSize(11).fillColor("#0f172a").text(`• ${t}`, {
      align: "left",
      indent: 10,
      paragraphGap: 4,
    });
  }
}

function writeKeyValueRow(doc, key, value) {
  const k = safeText(key).trim();
  const v = safeText(value).trim();
  if (!k || !v) return;
  doc.font("Helvetica-Bold").fontSize(10).fillColor("#334155").text(`${k}: `, { continued: true });
  doc.font("Helvetica").fontSize(10).fillColor("#0f172a").text(v);
}

function generatePdf(outputPath) {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 48, right: 52, bottom: 54, left: 52 },
    info: {
      Title: `${resume.name} - Resume`,
      Author: resume.name,
    },
  });

  const outStream = fs.createWriteStream(outputPath);
  doc.pipe(outStream);

  writeHeading(doc, resume.name);
  writeSubheading(doc, `${resume.title}${resume.location ? ` • ${resume.location}` : ""}`);
  doc.moveDown(0.4);

  const contactLineParts = [
    resume.email ? `Email: ${resume.email}` : "",
    resume.linkedin ? `LinkedIn: ${resume.linkedin}` : "",
    resume.github ? `GitHub: ${resume.github}` : "",
  ].filter(Boolean);
  doc.font("Helvetica").fontSize(10).fillColor("#334155").text(contactLineParts.join("   |   "));

  writeSectionTitle(doc, "Summary");
  doc.font("Helvetica").fontSize(11).fillColor("#0f172a").text(safeText(resume.summary), { lineGap: 2 });

  writeSectionTitle(doc, "Skills");
  for (const group of resume.skills) {
    const title = safeText(group.title).trim();
    const items = Array.isArray(group.items) ? group.items : [];
    if (!title || items.length === 0) continue;
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text(title);
    doc.font("Helvetica").fontSize(11).fillColor("#0f172a").text(items.join(", "), { lineGap: 1 });
    doc.moveDown(0.4);
  }

  writeSectionTitle(doc, "Experience");
  for (const item of resume.experience) {
    const role = safeText(item.role).trim();
    const period = safeText(item.period).trim();
    if (!role) continue;
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text(role, { continued: !!period });
    if (period) {
      doc.font("Helvetica").fontSize(11).fillColor("#334155").text(`  —  ${period}`);
    } else {
      doc.text("");
    }
    writeBullets(doc, item.bullets);
    doc.moveDown(0.4);
  }

  writeSectionTitle(doc, "Projects");
  for (const p of resume.projects) {
    const title = safeText(p.title).trim();
    if (!title) continue;
    const year = safeText(p.year).trim();
    doc.font("Helvetica-Bold").fontSize(11).fillColor("#0f172a").text(title, { continued: !!year });
    if (year) {
      doc.font("Helvetica").fontSize(11).fillColor("#334155").text(`  —  ${year}`);
    } else {
      doc.text("");
    }
    const desc = safeText(p.description).trim();
    if (desc) {
      doc.font("Helvetica").fontSize(11).fillColor("#0f172a").text(desc, { lineGap: 2 });
    }
    if (p.link) {
      writeKeyValueRow(doc, "Link", p.link);
    }
    const stack = Array.isArray(p.stack) ? p.stack.filter(Boolean) : [];
    if (stack.length > 0) {
      writeKeyValueRow(doc, "Stack", stack.join(", "));
    }
    doc.moveDown(0.6);
  }

  doc.end();

  return new Promise((resolve, reject) => {
    outStream.on("finish", resolve);
    outStream.on("error", reject);
  });
}

async function main() {
  const outDir = path.join(__dirname, "public");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outFile = path.join(outDir, "resume.pdf");
  await generatePdf(outFile);
  process.stdout.write(outFile + "\n");
}

main().catch((err) => {
  process.stderr.write((err && err.stack) ? err.stack + "\n" : String(err) + "\n");
  process.exitCode = 1;
});
