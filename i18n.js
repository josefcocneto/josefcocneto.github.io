// Site-wide language switcher: PT (default, matches the text already in
// index.html) / EN / FR. Every translatable node in index.html carries a
// data-i18n="section.key" attribute; this file maps each key to its
// English and French strings and swaps textContent on demand. The
// original Portuguese is read straight from the DOM the first time each
// language loads, so PT never needs to be duplicated here — only EN/FR.

const translations = {
  en: {
    "nav.sobre": "About",
    "nav.formacao": "Education",
    "nav.pesquisa": "Research",
    "nav.ensino": "Teaching",
    "nav.distincoes": "Honors",
    "nav.competencias": "Skills",
    "nav.cultura": "Culture",
    "nav.contato": "Contact",

    "hero.subtitle": "Computer Engineering Student — UFPE",
    "hero.meta": "Recife, Brazil",

    "sobre.eyebrow": "01 — About",
    "sobre.title": "About",
    "sobre.p1": "Computer Engineering student at UFPE (6th semester), working in research, teaching and science outreach. My interests sit at the intersection of artificial intelligence, computational linear algebra, bioinformatics and EdTech.",
    "sobre.p2": "I do bioinformatics research on the ReGeNE project, teaching assistant work in Fundamentals of Linear Algebra, Vector and Linear Algebra for Computing, and Computer Organization and Architecture at CIn/UFPE, and academic support for high school students in math, physics and chemistry.",
    "sobre.p3": "Multi-medalist in science and technology olympiads, with honors in geography, astronomy, science, chemistry and mathematics. Member of the Brazilian Physical Society (SBF), the Brazilian Society for the Progress of Science (SBPC) and the Brazilian Computer Society (SBC).",

    "formacao.eyebrow": "02 — Education",
    "formacao.title": "Education",
    "formacao.e1.h": "B.Sc. in Computer Engineering",
    "formacao.e1.date": "2024 – 2028 (expected)",
    "formacao.e1.sub": "Federal University of Pernambuco (UFPE), Recife, Brazil",
    "formacao.e1.p1": "6th semester (3rd year) of the program; 42.5% of the required credit hours completed as of 2026.1.",
    "formacao.e1.p2": "Extension course \"Mathematical Principles for Computing\" (40h), CIn/UFPE, 2024.",
    "formacao.e2.h": "High school",
    "formacao.e2.date": "completed in 2023",
    "formacao.e2.sub": "Centro Pessoense de Educação (Colégio Motiva), João Pessoa, Brazil",
    "formacao.e3.h": "Music Theory and Classical Guitar",
    "formacao.e3.date": "700h+",
    "formacao.e3.sub": "Anthenor Navarro State School of Music",
    "formacao.e3.p1": "Vocational training in advanced music theory, sight-reading and classical guitar performance.",

    "pesquisa.eyebrow": "03 — Research",
    "pesquisa.title": "Research",
    "pesquisa.e1.h": "Undergraduate Research (volunteer) — Bioinformatics",
    "pesquisa.e1.date": "since 07/2026",
    "pesquisa.e1.sub": "Northeast Genome Network project (ReGeNE), CIn/UFPE in partnership with the Oswaldo Cruz Foundation (Fiocruz) — advised by Prof. Silvio de Barros Melo",
    "pesquisa.e1.p1": "Automatic computation of vectorcardiographic representations from 12-lead electrocardiogram signals.",

    "ensino.eyebrow": "04 — Teaching",
    "ensino.title": "Teaching and TA work",
    "ensino.e1.h": "Volunteer TA — Fundamentals of Linear Algebra",
    "ensino.e1.date": "2025.1 – 2025.2",
    "ensino.e1.sub": "CIn/UFPE — advised by Prof. Silvio de Barros Melo",
    "ensino.e1.p1": "Volunteer teaching assistant; vector spaces, linear transformations, eigenvalues and eigenvectors.",
    "ensino.e2.h": "Scholarship TA — Fundamentals of Linear Algebra",
    "ensino.e2.date": "2025.2 – 2026.2",
    "ensino.e2.sub": "CIn/UFPE — advised by Prof. Silvio de Barros Melo",
    "ensino.e2.p1": "Selected through a competitive process for a paid TA position, starting November 2025; vector spaces, linear transformations, eigenvalues and eigenvectors. 12h/week.",
    "ensino.e3.h": "Volunteer TA — Computer Organization and Architecture",
    "ensino.e3.date": "2025.2 – 2026.2",
    "ensino.e3.sub": "CIn/UFPE — advised by Prof. Edna Natividade da Silva Barros",
    "ensino.e3.p1": "Theory; processor architecture, data representation and instruction sets.",
    "ensino.e4.h": "Volunteer TA — Computer Organization and Architecture Lab",
    "ensino.e4.date": "2025.2 – 2026.2",
    "ensino.e4.sub": "CIn/UFPE — advised by Prof. Edna Natividade da Silva Barros and Prof. Victor W. C. de Medeiros",
    "ensino.e4.p1": "Lab component of the Computer Organization and Architecture course; hands-on work with processor architecture, data representation and instruction sets.",
    "ensino.e5.h": "Tutor and academic mentor — Colégio Motiva",
    "ensino.e5.date": "since 2024",
    "ensino.e5.sub": "Ambiental, Oriental and Miramar units, João Pessoa, Brazil",
    "ensino.e5.p1": "Academic support for students in math, physics and chemistry, on demand.",
    "ensino.e6.h": "Founder and mentor — \"A Tropa – Assessoria Personalizada\"",
    "ensino.e6.date": "since 2024",
    "ensino.e6.sub": "Independent academic coaching practice, João Pessoa, Brazil",
    "ensino.e6.p1": "Individualized teaching strategies and performance analysis to prepare students for Brazil's national and university entrance exams.",
    "ensino.e7.h": "Volunteer TA — Vector and Linear Algebra for Computing",
    "ensino.e7.date": "2026.2",
    "ensino.e7.sub": "CIn/UFPE — advised by Prof. Fernando Maciano de Paula Neto",
    "ensino.e7.p1": "Support for Computer Science and Data Science & Artificial Intelligence students; vectors, vector spaces, linear transformations and computing applications.",

    "nav.extensao": "Outreach",
    "extensao.eyebrow": "05 — Outreach",
    "extensao.title": "University outreach",
    "extensao.e1.h": "Project team member — EnvelheSER Digital",
    "extensao.e1.date": "2026.2",
    "extensao.e1.sub": "Digital inclusion and computing literacy for older adults — CIn/UFPE, coord. Prof. Carina Frota Alves",
    "extensao.e1.p1": "Digital literacy project for older adults (4th edition), with workshops and mentoring on devices, the internet and digital communication; I teach smartphone classes.",
    "extensao.e2.h": "Project team member — Cin-Ergia Musical",
    "extensao.e2.date": "2026.2 – 2027.1",
    "extensao.e2.sub": "Pedagogical Studies and Support Unit, CIn/UFPE — coord. Rivanildo Valerino de S. Junior",
    "extensao.e2.p1": "Project that forms bands with students, staff, faculty and external members, bringing art and technology together at the Centro de Informática; I play guitar.",
    "distincoes.eyebrow": "06 — Honors",
    "distincoes.title": "Academic honors",
    "distincoes.lead": "Participation in several science and technology olympiads throughout my school years. Highlighted are the main honors earned.",
    "distincoes.gold": "Gold",
    "distincoes.silver": "Silver",
    "distincoes.bronze": "Bronze",
    "distincoes.honor": "Mentions",
    "distincoes.honor1": "Merit Award — Brazilian Technology Olympiad",
    "distincoes.honor2": "Honorable Mention — Species Biology Olympiad",
    "distincoes.m.geo": "Brazilian Geography Olympiad",
    "distincoes.m.oba": "Brazilian Astronomy and Astronautics Olympiad",
    "distincoes.m.onc": "National Science Olympiad",
    "distincoes.m.opq": "Paraíba State Chemistry Olympiad",
    "distincoes.m.opi": "Paraíba State Informatics Olympiad",
    "distincoes.m.obr": "Brazilian Robotics Olympiad",
    "distincoes.m.canguru": "Kangaroo Mathematics Competition",
    "distincoes.m.oicee": "International Olympiad of Space Science and Engineering",
    "distincoes.m.iaac": "International Astronomy and Astrophysics Competition",
    "distincoes.m.ocm": "Campina Grande Mathematics Olympiad",

    "competencias.eyebrow": "07 — Skills",
    "competencias.title": "Skills and languages",
    "competencias.tecnicas.h": "Technical",
    "competencias.tecnicas.i2": "Algorithms and data structures",
    "competencias.tecnicas.i3": "Scientific writing in LaTeX",
    "competencias.tecnicas.i4": "Preparation of teaching materials",
    "competencias.idiomas.h": "Languages",
    "competencias.idiomas.i1": "Portuguese — native",
    "competencias.idiomas.i2": "English — advanced level",
    "competencias.idiomas.i3": "French — currently learning, aiming for TCF/DELF certification (BRAFITEC)",
    "competencias.interesses.h": "Interests",
    "competencias.interesses.i1": "Bioinformatics",
    "competencias.interesses.i2": "Artificial intelligence",
    "competencias.interesses.i3": "Computational linear algebra",

    "cultura.eyebrow": "08 — Music and Culture",
    "cultura.title": "Music and popular culture",
    "cultura.p1": "700+ hours of training in music theory and classical guitar at the Anthenor Navarro State School of Music, combining technical instrument discipline with advanced sheet-music reading.",
    "cultura.p2": "Independent author of cordel literature and cantoria — a Northeast Brazilian cultural tradition — under the guidance of Prof. Cidoval Morais de Sousa (UEPB) and Prof. João Morais de Sousa (UFRPE). An interest that runs alongside my technical training: the same attention to structure and meter I apply in mathematics finds, in cantoria, a form of improvised, popular expression.",

    "contato.eyebrow": "09 — Contact",
    "contato.title": "Contact",

    "footer.name": "José Francisco Cruz Neto",
    "footer.place": "Recife, Brazil",
  },

  fr: {
    "nav.sobre": "À propos",
    "nav.formacao": "Formation",
    "nav.pesquisa": "Recherche",
    "nav.ensino": "Enseignement",
    "nav.distincoes": "Distinctions",
    "nav.competencias": "Compétences",
    "nav.cultura": "Culture",
    "nav.contato": "Contact",

    "hero.subtitle": "Étudiant en Génie Informatique — UFPE",
    "hero.meta": "Recife, Brésil",

    "sobre.eyebrow": "01 — À propos",
    "sobre.title": "À propos",
    "sobre.p1": "Étudiant en Génie Informatique à l'UFPE (6e semestre), engagé dans la recherche, l'enseignement et la diffusion scientifique. Mes intérêts se situent à l'intersection de l'intelligence artificielle, de l'algèbre linéaire computationnelle, de la bio-informatique et de l'EdTech.",
    "sobre.p2": "Je mène des recherches en bio-informatique dans le cadre du projet ReGeNE, j'assure le monitorat en Fondements d'Algèbre Linéaire, en Algèbre Vectorielle et Linéaire pour l'Informatique et en Organisation et Architecture des Ordinateurs au CIn/UFPE, ainsi qu'un accompagnement pédagogique d'élèves du secondaire en mathématiques, physique et chimie.",
    "sobre.p3": "Multi-médaillé aux olympiades scientifiques, avec des distinctions en géographie, astronomie, sciences, chimie et mathématiques. Membre de la Société Brésilienne de Physique (SBF), de la Société Brésilienne pour le Progrès de la Science (SBPC) et de la Société Brésilienne d'Informatique (SBC).",

    "formacao.eyebrow": "02 — Formation",
    "formacao.title": "Formation",
    "formacao.e1.h": "Licence en Génie Informatique",
    "formacao.e1.date": "2024 – 2028 (prévu)",
    "formacao.e1.sub": "Université Fédérale de Pernambuco (UFPE), Recife, Brésil",
    "formacao.e1.p1": "6e semestre (3e année) du cursus ; 42,5 % de la charge horaire requise validée à l'issue du semestre 2026.1.",
    "formacao.e1.p2": "Cours d'extension « Principes Mathématiques pour l'Informatique » (40h), CIn/UFPE, 2024.",
    "formacao.e2.h": "Lycée",
    "formacao.e2.date": "diplômé en 2023",
    "formacao.e2.sub": "Centro Pessoense de Educação (Colégio Motiva), João Pessoa, Brésil",
    "formacao.e3.h": "Théorie musicale et guitare classique",
    "formacao.e3.date": "700h+",
    "formacao.e3.sub": "École d'État de Musique Anthenor Navarro",
    "formacao.e3.p1": "Formation musicale en théorie avancée, lecture de partitions et interprétation à la guitare classique.",

    "pesquisa.eyebrow": "03 — Recherche",
    "pesquisa.title": "Recherche",
    "pesquisa.e1.h": "Initiation à la recherche (bénévole) — Bio-informatique",
    "pesquisa.e1.date": "depuis 07/2026",
    "pesquisa.e1.sub": "Projet Rede Genoma do Nordeste (ReGeNE), CIn/UFPE en partenariat avec la Fondation Oswaldo Cruz (Fiocruz) — sous la direction du Pr Silvio de Barros Melo",
    "pesquisa.e1.p1": "Obtention automatique de représentations vectocardiographiques à partir de signaux d'électrocardiogramme à 12 dérivations.",

    "ensino.eyebrow": "04 — Enseignement",
    "ensino.title": "Enseignement et monitorat",
    "ensino.e1.h": "Moniteur bénévole — Fondements d'Algèbre Linéaire",
    "ensino.e1.date": "2025.1 – 2025.2",
    "ensino.e1.sub": "CIn/UFPE — sous la direction du Pr Silvio de Barros Melo",
    "ensino.e1.p1": "Monitorat bénévole ; espaces vectoriels, applications linéaires, valeurs propres et vecteurs propres.",
    "ensino.e2.h": "Moniteur boursier — Fondements d'Algèbre Linéaire",
    "ensino.e2.date": "2025.2 – 2026.2",
    "ensino.e2.sub": "CIn/UFPE — sous la direction du Pr Silvio de Barros Melo",
    "ensino.e2.p1": "Sélectionné par concours pour un monitorat boursier, à partir de novembre 2025 ; espaces vectoriels, applications linéaires, valeurs propres et vecteurs propres. 12h/semaine.",
    "ensino.e3.h": "Moniteur bénévole — Organisation et Architecture des Ordinateurs",
    "ensino.e3.date": "2025.2 – 2026.2",
    "ensino.e3.sub": "CIn/UFPE — sous la direction de la Pr Edna Natividade da Silva Barros",
    "ensino.e3.p1": "Théorie ; architecture des processeurs, représentation des données et jeu d'instructions.",
    "ensino.e4.h": "Moniteur bénévole — Laboratoire d'Organisation et Architecture des Ordinateurs",
    "ensino.e4.date": "2025.2 – 2026.2",
    "ensino.e4.sub": "CIn/UFPE — sous la direction de la Pr Edna Natividade da Silva Barros et du Pr Victor W. C. de Medeiros",
    "ensino.e4.p1": "Volet pratique du cours d'Organisation et Architecture des Ordinateurs ; travaux pratiques sur l'architecture des processeurs, la représentation des données et le jeu d'instructions.",
    "ensino.e5.h": "Tuteur et mentor pédagogique — Colégio Motiva",
    "ensino.e5.date": "depuis 2024",
    "ensino.e5.sub": "Unités Ambiental, Oriental et Miramar, João Pessoa, Brésil",
    "ensino.e5.p1": "Accompagnement pédagogique d'élèves en mathématiques, physique et chimie, sur demande.",
    "ensino.e6.h": "Fondateur et mentor — « A Tropa – Assessoria Personalizada »",
    "ensino.e6.date": "depuis 2024",
    "ensino.e6.sub": "Structure indépendante d'accompagnement scolaire, João Pessoa, Brésil",
    "ensino.e6.p1": "Stratégies pédagogiques individualisées et analyse de performance pour préparer les examens d'entrée à l'université.",
    "ensino.e7.h": "Moniteur bénévole — Algèbre Vectorielle et Linéaire pour l'Informatique",
    "ensino.e7.date": "2026.2",
    "ensino.e7.sub": "CIn/UFPE — sous la direction du Pr Fernando Maciano de Paula Neto",
    "ensino.e7.p1": "Accompagnement des étudiants d'Informatique et de Science des Données et Intelligence Artificielle ; vecteurs, espaces vectoriels, applications linéaires et applications en informatique.",

    "nav.extensao": "Extension",
    "extensao.eyebrow": "05 — Extension",
    "extensao.title": "Extension universitaire",
    "extensao.e1.h": "Membre de l'équipe du projet — EnvelheSER Digital",
    "extensao.e1.date": "2026.2",
    "extensao.e1.sub": "Inclusion et littératie numérique pour les personnes âgées — CIn/UFPE, coord. Pr Carina Frota Alves",
    "extensao.e1.p1": "Projet de littératie numérique pour personnes âgées (4e édition), avec ateliers et mentorats sur l'usage des appareils, d'internet et de la communication numérique ; j'y donne des cours d'utilisation du smartphone.",
    "extensao.e2.h": "Membre de l'équipe du projet — Cin-Ergia Musical",
    "extensao.e2.date": "2026.2 – 2027.1",
    "extensao.e2.sub": "Núcleo de Estudos e Assessoria Pedagógica, CIn/UFPE — coord. Rivanildo Valerino de S. Junior",
    "extensao.e2.p1": "Projet qui forme des groupes musicaux réunissant étudiants, personnels, enseignants et membres externes, alliant art et technologie au Centre d'Informatique ; j'y joue de la guitare.",
    "distincoes.eyebrow": "06 — Distinctions",
    "distincoes.title": "Distinctions académiques",
    "distincoes.lead": "Participation à plusieurs olympiades et compétitions scientifiques tout au long de ma scolarité. En vedette, les principales distinctions obtenues.",
    "distincoes.gold": "Or",
    "distincoes.silver": "Argent",
    "distincoes.bronze": "Bronze",
    "distincoes.honor": "Mentions",
    "distincoes.honor1": "Mention de mérite — Olympiade Brésilienne de Technologie",
    "distincoes.honor2": "Mention honorable — Olympiade de Biologie Species",
    "distincoes.m.geo": "Olympiade Brésilienne de Géographie",
    "distincoes.m.oba": "Olympiade Brésilienne d'Astronomie et d'Astronautique",
    "distincoes.m.onc": "Olympiade Nationale des Sciences",
    "distincoes.m.opq": "Olympiade Paraïbaine de Chimie",
    "distincoes.m.opi": "Olympiade Paraïbaine d'Informatique",
    "distincoes.m.obr": "Olympiade Brésilienne de Robotique",
    "distincoes.m.canguru": "Concours Kangourou de Mathématiques",
    "distincoes.m.oicee": "Olympiade Internationale des Sciences et de l'Ingénierie Spatiale",
    "distincoes.m.iaac": "International Astronomy and Astrophysics Competition",
    "distincoes.m.ocm": "Olympiade de Mathématiques de Campina Grande",

    "competencias.eyebrow": "07 — Compétences",
    "competencias.title": "Compétences et langues",
    "competencias.tecnicas.h": "Techniques",
    "competencias.tecnicas.i2": "Algorithmes et structures de données",
    "competencias.tecnicas.i3": "Rédaction scientifique en LaTeX",
    "competencias.tecnicas.i4": "Préparation de matériel pédagogique",
    "competencias.idiomas.h": "Langues",
    "competencias.idiomas.i1": "Portugais — langue maternelle",
    "competencias.idiomas.i2": "Anglais — niveau avancé",
    "competencias.idiomas.i3": "Français — en apprentissage, en vue de la certification TCF/DELF (BRAFITEC)",
    "competencias.interesses.h": "Centres d'intérêt",
    "competencias.interesses.i1": "Bio-informatique",
    "competencias.interesses.i2": "Intelligence artificielle",
    "competencias.interesses.i3": "Algèbre linéaire computationnelle",

    "cultura.eyebrow": "08 — Musique et Culture",
    "cultura.title": "Musique et culture populaire",
    "cultura.p1": "Plus de 700 heures de formation en théorie musicale et guitare classique à l'École d'État de Musique Anthenor Navarro, alliant discipline technique de l'instrument et lecture avancée de partitions.",
    "cultura.p2": "Auteur indépendant de littérature de cordel et de cantoria — tradition culturelle du Nordeste brésilien — accompagné par le Pr Cidoval Morais de Sousa (UEPB) et le Pr João Morais de Sousa (UFRPE). Un intérêt qui accompagne ma formation technique : la même attention à la structure et à la métrique que j'applique en mathématiques se retrouve, dans la cantoria, comme une forme d'expression populaire et improvisée.",

    "contato.eyebrow": "09 — Contact",
    "contato.title": "Contact",

    "footer.name": "José Francisco Cruz Neto",
    "footer.place": "Recife, Brésil",
  },
};

(function () {
  const STORAGE_KEY = "site-lang";
  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
  // Cache each node's original (Portuguese) text once, so switching back
  // to PT never needs its own dictionary entries.
  const originals = new Map(nodes.map((el) => [el, el.textContent]));

  const switcher = document.getElementById("langSwitch");
  const buttons = switcher
    ? Array.from(switcher.querySelectorAll("button[data-lang]"))
    : [];

  function applyLang(lang) {
    const dict = translations[lang];
    nodes.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "pt" || !dict || !dict[key]) {
        el.textContent = originals.get(el);
      } else {
        el.textContent = dict[key];
      }
    });
    document.documentElement.lang =
      lang === "en" ? "en" : lang === "fr" ? "fr" : "pt-BR";
    buttons.forEach((btn) =>
      btn.classList.toggle("active", btn.dataset.lang === lang)
    );
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* private browsing / storage disabled: language just won't persist */
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  let initialLang = "pt";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) initialLang = saved;
  } catch (e) {
    /* ignore */
  }

  if (initialLang !== "pt") applyLang(initialLang);
})();

// Theme toggle: light/dark, manual choice overrides the OS preference
// once used. data-theme="dark" / "light" on <html> drives every color
// in style.css (see the :root[data-theme="dark"] block); leaving the
// attribute off falls back to prefers-color-scheme, matching the OS.
(function () {
  const STORAGE_KEY = "site-theme";
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");

  function systemPrefersDark() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function currentTheme() {
    const explicit = root.getAttribute("data-theme");
    if (explicit === "dark" || explicit === "light") return explicit;
    return systemPrefersDark() ? "dark" : "light";
  }

  function setTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (toggle) {
      toggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
      );
    }
    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {
        /* private browsing / storage disabled: choice just won't persist */
      }
    }
  }

  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }

  // Always set data-theme explicitly on load (even matching the system
  // default) so the rest of the CSS has one source of truth to read.
  setTheme(saved === "dark" || saved === "light" ? saved : currentTheme(), false);

  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      setTheme(next, true);
    });
  }
})();
