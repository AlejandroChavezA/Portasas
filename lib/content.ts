export const identity = {
  name: "José Alejandro Chávez Aguilar",
  short: "SAS",
  role: "Frontend developer",
  location: "Chihuahua, México",
  email: "alex102add@gmail.com",
  phone: "+52 614 208 7271",
  phoneHref: "tel:+526142087271",
  linkedin: "https://linkedin.com/in/jose-alejandro-chavez-aguilar",
} as const

export const nav = [
  { href: "#trabajo", label: "Trabajo" },
  { href: "#oficio", label: "Oficio" },
  { href: "#origen", label: "Origen" },
  { href: "#contacto", label: "Contacto" },
] as const

export const hero = {
  greeting: "Hola — soy",
  line1: "José Alejandro",
  line2: "Chávez Aguilar",
  roles: ["Frontend", "React", "Producto"],
  lede: "Hago interfaces que se sienten hechas a mano: React, Next.js y arquitectura que aguanta uso real.",
  primaryCta: "Ver el trabajo",
  secondaryCta: "Escribirme",
} as const

export const work = [
  {
    index: "01",
    title: "Natal.IA",
    kicker: "Asistente de voz",
    period: "Ene 2025 — presente",
    place: "Freelance · Chihuahua",
    summary:
      "Un asistente de voz con conversación natural. Voz con ElevenLabs, lenguaje con modelos generativos, panel para sesiones y métricas.",
    impact: [
      "Etapa nacional, Concurso de Innovación TECNM 2025",
      "Latencia de respuesta −35% en pruebas piloto",
    ],
  },
  {
    index: "02",
    title: "Keptrack",
    kicker: "Suscripciones y finanzas",
    period: "Oct 2024 — Ene 2025",
    place: "Freelance · Chihuahua",
    summary:
      "MVP para ordenar suscripciones y dinero. Full stack en Next.js, Node y MongoDB, interfaz mínima a partir de usuarios reales.",
    impact: [
      "Tiempo de organización financiera −40%",
      "Carga promedio −30% tras optimizar API y base de datos",
      "Validación temprana ante incubadoras",
    ],
  },
] as const

export const craft = [
  {
    group: "Construir",
    items: [
      { name: "React", use: "Interfaces y estado" },
      { name: "Next.js", use: "Apps y rutas" },
      { name: "TypeScript / JS", use: "Contrato del código" },
      { name: "Tailwind", use: "Sistema visual rápido" },
    ],
  },
  {
    group: "Sostener",
    items: [
      { name: "Node.js", use: "APIs y servicios" },
      { name: "MongoDB / MySQL", use: "Datos" },
      { name: "Firebase", use: "Auth y realtime" },
      { name: "REST", use: "Contratos entre capas" },
    ],
  },
  {
    group: "Hablar con máquinas",
    items: [
      { name: "OpenAI", use: "Lenguaje y agentes" },
      { name: "ElevenLabs", use: "Voz en Natal.IA" },
      { name: "Python", use: "Scripts y prototipos" },
      { name: "Java / C++", use: "Bases de ingeniería" },
    ],
  },
  {
    group: "Oficio",
    items: [
      { name: "Git", use: "Historia del trabajo" },
      { name: "Figma", use: "Antes del pixel" },
      { name: "Postman", use: "Probar contratos" },
      { name: "UI / UX", use: "Que se sienta obvio" },
    ],
  },
] as const

export const origin = {
  title: "Ingeniería en Informática",
  school: "Instituto Tecnológico de Chihuahua",
  period: "2022 — presente",
  gpa: "9.1 / 10",
  notes: [
    "Hackathons: Talent Land 2023, NASA Space Apps y más.",
    "Roles de fullstack y liderazgo técnico bajo presión de reloj.",
  ],
} as const

export const contact = {
  kicker: "Siguiente escena",
  title: "Si hay un producto que construir, hablemos.",
  body: "Proyectos, prototipos, o algo que todavía no tiene nombre.",
} as const
