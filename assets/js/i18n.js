// i18n.js — dictionary + switching + attribute translation + CV file swap
(function () {
  const I18N = {
    en: {
      "meta.title": "Georgios Sidiropoulos | Portfolio",
      "meta.description": "Portfolio of Georgios Sidiropoulos — Robotics & ML projects, experience, skills, and contact.",

      // Generic / Buttons
      "skip.toMain": "Skip to main content",
      "buttons.cv": "⬇️ Download CV",
      "buttons.top": "↑ Top",
      "buttons.topTitle": "Go to top",
      "buttons.topAria": "Scroll to top",

      // ARIA / labels
      "aria.kaggle": "Kaggle Profile",
      "theme.toggle": "Toggle theme",
      "aria.sidebar": "Sidebar",
      "aria.navPrimary": "Primary navigation",
      "aria.language": "Language",
      "aria.social": "Social links",
      "aria.skillsList": "Skills list with links",
      "aria.github": "GitHub Profile",
      "aria.linkedin": "LinkedIn Profile",
      "aria.email": "Email Georgios",
      "aria.welcome": "Welcome",
      "alt.profilePic": "Portrait of Georgios Sidiropoulos",

      // Nav
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.education": "Education",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.hobbies": "Hobbies",
      "nav.contact": "Contact",

      // Hero
      "hero.subtitle": "<strong>🤖 Robotics Software Engineer</strong> — 💼 Intern at Parity Platform, 📍 Athens, Greece.",

      // Sections (chips)
      "sections.about": "About",
      "sections.experience": "Experience",
      "sections.education": "Education",
      "sections.projects": "Projects",
      "sections.skills": "Skills",
      "sections.hobbies": "Hobbies",
      "sections.contact": "Contact",

      // Overlay
      "overlay.title": "Welcome <span class='wave' aria-hidden='true'>👋</span>",
      "overlay.line1": "I'm Georgios Sidiropoulos",
      "overlay.line2": "A Computer Science Engineer with a passion for Robotics and Machine Learning.",

      // About
      "about.p1": "I am a Computer Science and Engineering graduate from the University of Ioannina, currently working as a Robotics Software Engineering Intern at Parity Platform. My main interests include robotics, artificial intelligence, and machine learning.",
      "about.p2": "My diploma thesis, <strong>“Navigation of a Mobile Manipulator in a Dynamic Environment”</strong>, focused on motion planning and avoidance of dynamic obstacles.",

      // Experience
      "experience.subtitle": "Here is a quick summary of my most recent experiences:",
      "experience.parity.title": "Robotics Engineer Intern <span class='card-meta'>Jul 2025 – Present</span>",
      "experience.parity.place": "<em>Parity Platform — Athens, Greece</em>",
      "experience.parity.li1": "Contributing to the software implementation and system integration of a 6-DOF robotic arm intended for deployment in a production line for composite materials.",
      "experience.parity.li2": "Supporting system architecture, creating automation routines, and ensuring the robot integrates effectively with connected sensors.",
      "experience.parity.li3": "Collaborating closely with the Robotics Department team to build a reliable robotic system.",
      "experience.uoi.title": "Robotics Lab Presenter & Demonstrator <span class='card-meta'>Oct 2024 – Jun 2025</span>",
      "experience.uoi.place": "<em>University of Ioannina</em>",
      "experience.uoi.li1": "Presented and showcased Robotics Laboratory work to middle/high-school students and guests.",
      "experience.uoi.li2": "Explained how robotic systems function, demonstrated real-world use cases, and inspired younger audiences to pursue computer science and robotics.",

      // Education
      "education.subtitle": "My academic background and qualifications:",
      "education.degreeHTML":
      "<span class='edu-line'>" +
        "<img class='edu-logo' src='media/education/cs_uoi_logo.png' alt='University of Ioannina – CSE logo' width='38' height='38'/>" +
        "<strong><a href='https://www.cse.uoi.gr/' target='_blank' rel='noopener noreferrer'>University of Ioannina — Department of Computer Science &amp; Engineering</a></strong>" +
      "</span><br/>" +
      "Integrated Master (BSc/MEng) in Computer Science &amp; Engineering<br/>" +
      "2019 – 2025 &nbsp;|&nbsp; Grade: <strong>7.8 / 10</strong><br/>" +
      "Thesis: “Navigation of a Mobile Manipulator in a Dynamic Environment”.",

      // Projects
      "projects.subtitle": "A selection of my recent projects:",
      "projects.p1.title": "Navigation of a Mobile Manipulator in a Dynamic Environment",
      "projects.p1.meta": "<em>October 2024 – Present &nbsp;|&nbsp; Diploma Thesis in Robotics</em>",
      "projects.p1.li1": "Modeled and simulated Kinova Gen3 Lite (6-DOF) kinematics.",
      "projects.p1.li2": "Implemented Traditional Artificial Potential Field (T-APF) with control-point force mapping.",
      "projects.p1.li3": "Integrated dynamic repulsive fields for real-time avoidance of moving obstacles.",
      "projects.p1.li4": "Validated via extensive simulation experiments in dynamic environments.",
      "projects.p2.title": "Handwritten Digit Classification",
      "projects.p2.meta": "<em>December 2024 – January 2025</em>",
      "projects.p2.li1": "Built models using k-NN, Logistic Regression, PCA, DNN, and MLP on MNIST.",
      "projects.p2.li2": "Used Python, Scikit-Learn, and PyTorch for development and evaluation.",
      "projects.p3.title": "Diploma Projects Management Application",
      "projects.p3.meta": "<em>April 2023 – May 2023</em>",
      "projects.p3.li1": "Web system for diploma project management and evaluation workflow.",
      "projects.p3.li2": "Student–professor interactions, authentication, and grading.",
      "projects.p3.li3": "Built with Java, Spring Boot, and MySQL (Scrum).",
      "projects.p4.title": "Artificial Intelligence Projects",
      "projects.p4.meta": "<em>April 2023 – May 2023</em>",
      "projects.p4.li1": "Implemented UCS and A* for labyrinth pathfinding.",
      "projects.p4.li2": "Two-player strategy game using Minimax (adversarial search).",
      "projects.p5.title": "CutePy Compiler",
      "projects.p5.meta": "<em>April 2023 – May 2023</em>",
      "projects.p5.li1": "Compiler for the CutePy educational language (Python).",
      "projects.p5.li2": "Supported functions, loops, conditionals; generated RISC-V assembly.",
      "projects.p6.title": "Sales Commission Management Application",
      "projects.p6.meta": "<em>December 2022 – January 2023</em>",
      "projects.p6.li1": "Java GUI app for managing sales agent data and commission reports.",
      "projects.p6.li2": "Emphasized modular design and multi-format export with clean architecture.",

      // Skills
      "skills.subtitle": "The skills, tools and technologies I am really good at.",

      // Hobbies
      "hobbies.subtitle": "What I do in my free time:",
      "hobbies.hiking.title": "Hiking",
      "hobbies.hiking.catch": "I love getting out into nature and chasing summits — want to join for a hike sometime?",
      "hobbies.hiking.sub": "Tap a map marker to see photos from that place. Swipe the carousel or click a photo to view fullscreen. 🥾",
      "hobbies.chess.title": "Chess",
      "hobbies.chess.sub": "Chess is my favorite search problem — <strong>minimax in real time</strong>. I mostly play 10-minute rapid and solve puzzles to sharpen pattern recognition. If you’re up for a friendly rapid or a faster bullet game, click the logo and send a challenge. ♟️🙂",
      "hobbies.basket.title": "Basketball",
      "hobbies.basket.sub": "I try to shoot some hoops every week.",

      // Contact / Footer
      "contact.subtitle": "Feel free to reach out for collaboration or inquiries:",
      "contact.emailLabel": "Email:",
      "contact.githubLabel": "GitHub:",
      "contact.linkedinLabel": "LinkedIn:",
      "footer.text": "© 2025 Georgios Sidiropoulos. All rights reserved."
    },

    el: {
      "meta.title": "Georgios Sidiropoulos | Portfolio",
      "meta.description": "Portfolio του Γεώργιου Σιδηρόπουλου — Έργα Ρομποτικής & ML, εμπειρία, δεξιότητες και επικοινωνία.",
      // inside I18N.el
      "aria.kaggle": "Προφίλ Kaggle",
      // Generic / Buttons
      "skip.toMain": "Μετάβαση στο κυρίως περιεχόμενο",
      "buttons.cv": "⬇️ Λήψη Βιογραφικού",
      "buttons.top": "↑ Κορυφή",
      "buttons.topTitle": "Μετάβαση στην κορυφή",
      "buttons.topAria": "Μετακίνηση στην κορυφή",

      // ARIA / labels
      "theme.toggle": "Εναλλαγή θέματος",
      "aria.sidebar": "Πλαϊνό μενού",
      "aria.navPrimary": "Κύριο μενού",
      "aria.language": "Γλώσσα",
      "aria.social": "Κοινωνικοί σύνδεσμοι",
      "aria.skillsList": "Λίστα δεξιοτήτων με συνδέσμους",
      "aria.github": "Προφίλ GitHub",
      "aria.linkedin": "Προφίλ LinkedIn",
      "aria.email": "Αποστολή email στον Γεώργιο",
      "aria.welcome": "Καλώς ορίσατε",
      "alt.profilePic": "Πορτρέτο του Γεώργιου Σιδηρόπουλου",

      // Nav
      "nav.about": "Σχετικά",
      "nav.experience": "Εμπειρία",
      "nav.education": "Σπουδές",
      "nav.projects": "Έργα",
      "nav.skills": "Δεξιότητες",
      "nav.hobbies": "Χόμπι",
      "nav.contact": "Επικοινωνία",

      // Hero
      "hero.subtitle": "<strong>🤖 Μηχανικός Λογισμικού Ρομποτικής</strong> — 💼 Πρακτική στο Parity Platform, 📍 Αθήνα, Ελλάδα.",

      // Sections (chips)
      "sections.about": "Σχετικά",
      "sections.experience": "Εμπειρία",
      "sections.education": "Σπουδές",
      "sections.projects": "Έργα",
      "sections.skills": "Δεξιότητες",
      "sections.hobbies": "Χόμπι",
      "sections.contact": "Επικοινωνία",

      // Overlay
      "overlay.title": "Καλώς ήρθατε <span class='wave' aria-hidden='true'>👋</span>",
      "overlay.line1": "Είμαι ο Γεώργιος Σιδηρόπουλος",
      "overlay.line2": "Μηχανικός Πληροφορικής με πάθος για Ρομποτική και Μηχανική Μάθηση.",

      // About
      "about.p1": "Είμαι απόφοιτος Μηχανικός Πληροφορικής και Επικοινωνιών του Πανεπιστημίου Ιωαννίνων και εργάζομαι ως Intern Μηχανικός Λογισμικού Ρομποτικής στο Parity Platform. Τα ενδιαφέροντά μου περιλαμβάνουν ρομποτική, τεχνητή νοημοσύνη και μηχανική μάθηση.",
      "about.p2": "Η διπλωματική μου εργασία, <strong>«Πλοήγηση Κινητού Βραχίονα σε Δυναμικό Περιβάλλον»</strong>, εστιάζει στον σχεδιασμό κίνησης και στην αποφυγή δυναμικών εμποδίων.",

      // Experience
      "experience.subtitle": "Μια σύντομη σύνοψη από τις πιο πρόσφατες εμπειρίες μου:",
      "experience.parity.title": "Robotics Engineer Intern <span class='card-meta'>Ιουλ 2025 – Σήμερα</span>",
      "experience.parity.place": "<em>Parity Platform — Αθήνα, Ελλάδα</em>",
      "experience.parity.li1": "Συμβολή στην υλοποίηση λογισμικού και την ενοποίηση συστημάτων για έναν ρομποτικό βραχίονα 6 βαθμών ελευθερίας, με στόχο την εγκατάσταση σε γραμμή παραγωγής σύνθετων υλικών.",
      "experience.parity.li2": "Υποστήριξη αρχιτεκτονικής συστήματος, δημιουργία ρουτινών αυτοματισμού και διασφάλιση αποτελεσματικής διασύνδεσης του ρομπότ με τους συνδεδεμένους αισθητήρες.",
      "experience.parity.li3": "Στενή συνεργασία με την ομάδα του Τμήματος Ρομποτικής για την ανάπτυξη αξιόπιστου ρομποτικού συστήματος.",
      "experience.uoi.title": "Παρουσιαστής & Επιδεικτικός Εργαστηρίου Ρομποτικής <span class='card-meta'>Οκτ 2024 – Ιουν 2025</span>",
      "experience.uoi.place": "<em>Πανεπιστήμιο Ιωαννίνων</em>",
      "experience.uoi.li1": "Παρουσίαση και επίδειξη του έργου του Εργαστηρίου Ρομποτικής σε μαθητές Γυμνασίου/Λυκείου και επισκέπτες.",
      "experience.uoi.li2": "Εξήγηση της λειτουργίας ρομποτικών συστημάτων, επίδειξη πραγματικών εφαρμογών και έμπνευση νεότερων ακροατηρίων να ασχοληθούν με την πληροφορική και τη ρομποτική.",

      // Education
      "education.subtitle": "Το ακαδημαϊκό μου υπόβαθρο και προσόντα:",
      "education.degreeHTML":
      "<span class='edu-line'>" +
        "<img class='edu-logo' src='media/education/cs_uoi_logo.png' alt='Πανεπιστήμιο Ιωαννίνων – Λογότυπο Τμήματος Πληροφορικής' width='38' height='38'/>" +
        "<strong><a href='https://www.cse.uoi.gr/' target='_blank' rel='noopener noreferrer'>Πανεπιστήμιο Ιωαννίνων — Τμήμα Πληροφορικής &amp; Μηχανικών Η/Υ</a></strong>" +
      "</span><br/>" +
      "Ενιαίο Δίπλωμα (BSc/MEng) στην Επιστήμη &amp; Μηχανική Υπολογιστών<br/>" +
      "2019 – 2025 &nbsp;|&nbsp; Βαθμός: <strong>7.8 / 10</strong><br/>" +
      "Διπλωματική: «Πλοήγηση Κινητού Βραχίονα σε Δυναμικό Περιβάλλον».",

      // Projects
      "projects.subtitle": "Επιλογή από πρόσφατα έργα μου:",
      "projects.p1.title": "Πλοήγηση Κινητού Βραχίονα σε Δυναμικό Περιβάλλον",
      "projects.p1.meta": "<em>Οκτώβριος 2024 – Σήμερα &nbsp;|&nbsp; Διπλωματική εργασία στη Ρομποτική</em>",
      "projects.p1.li1": "Μοντελοποίηση και προσομοίωση της κινηματικής του Kinova Gen3 Lite (6-DOF).",
      "projects.p1.li2": "Υλοποίηση του παραδοσιακού Artificial Potential Field (T-APF) με αντιστοίχιση δυνάμεων σε σημεία ελέγχου.",
      "projects.p1.li3": "Ενσωμάτωση δυναμικών απωθητικών πεδίων για αποφυγή κινούμενων εμποδίων σε πραγματικό χρόνο.",
      "projects.p1.li4": "Επικύρωση μέσω εκτεταμένων πειραμάτων προσομοίωσης σε δυναμικά περιβάλλοντα.",
      "projects.p2.title": "Αναγνώριση Χειρόγραφων Ψηφίων",
      "projects.p2.meta": "<em>Δεκέμβριος 2024 – Ιανουάριος 2025</em>",
      "projects.p2.li1": "Ανάπτυξη μοντέλων k-NN, Λογιστικής Παλινδρόμησης, PCA, DNN και MLP στο MNIST.",
      "projects.p2.li2": "Χρήση Python, Scikit-Learn και PyTorch για ανάπτυξη και αξιολόγηση.",
      "projects.p3.title": "Εφαρμογή Διαχείρισης Διπλωματικών Εργασιών",
      "projects.p3.meta": "<em>Απρίλιος 2023 – Μάιος 2023</em>",
      "projects.p3.li1": "Διαδικτυακό σύστημα για διαχείριση διπλωματικών και ροής αξιολόγησης.",
      "projects.p3.li2": "Αλληλεπίδραση φοιτητή-καθηγητή, αυθεντικοποίηση και βαθμολόγηση.",
      "projects.p3.li3": "Υλοποίηση με Java, Spring Boot και MySQL (Scrum).",
      "projects.p4.title": "Έργα Τεχνητής Νοημοσύνης",
      "projects.p4.meta": "<em>Απρίλιος 2023 – Μάιος 2023</em>",
      "projects.p4.li1": "Υλοποίηση UCS και A* για εύρεση διαδρομής σε λαβύρινθο.",
      "projects.p4.li2": "Παιχνίδι δύο παικτών με Minimax (adversarial search).",
      "projects.p5.title": "Μεταγλωττιστής CutePy",
      "projects.p5.meta": "<em>Απρίλιος 2023 – Μάιος 2023</em>",
      "projects.p5.li1": "Μεταγλωττιστής για την εκπαιδευτική γλώσσα CutePy (Python).",
      "projects.p5.li2": "Υποστήριξη συναρτήσεων, βρόχων, συνθηκών· παραγωγή assembly RISC-V.",
      "projects.p6.title": "Εφαρμογή Διαχείρισης Προμηθειών Πωλήσεων",
      "projects.p6.meta": "<em>Δεκέμβριος 2022 – Ιανουάριος 2023</em>",
      "projects.p6.li1": "Εφαρμογή Java GUI για διαχείριση δεδομένων πωλητών και αναφορών προμηθειών.",
      "projects.p6.li2": "Έμφαση στη δομοστοιχειωτή σχεδίαση και σε εξαγωγές πολλαπλών μορφών με καθαρή αρχιτεκτονική.",

      // Skills
      "skills.subtitle": "Οι δεξιότητες, τα εργαλεία και οι τεχνολογίες στις οποίες είμαι πραγματικά καλός.",

      // Hobbies
      "hobbies.subtitle": "Τι κάνω στον ελεύθερο χρόνο μου:",
      "hobbies.hiking.title": "Πεζοπορία",
      "hobbies.hiking.catch": "Μου αρέσει να βγαίνω στη φύση και να κυνηγάω κορυφές — πάμε για μια πεζοπορία κάποια φορά;",
      "hobbies.hiking.sub": "Πάτησε έναν δείκτη στον χάρτη για να δεις φωτογραφίες από εκείνο το μέρος. Σύρε το καρουζέλ ή πάτησε μια φωτογραφία για πλήρη οθόνη. 🥾",
      "hobbies.chess.title": "Σκάκι",
      "hobbies.chess.sub": "Το σκάκι είναι το αγαπημένο μου πρόβλημα αναζήτησης — <strong>minimax σε πραγματικό χρόνο</strong>. Παίζω κυρίως rapid 10' και λύνω γρίφους για να βελτιώνω την αναγνώριση μοτίβων. Θες μια φιλική παρτίδα rapid ή πιο γρήγορο bullet; Πάτα το λογότυπο και στείλε πρόκληση. ♟️🙂",
      "hobbies.basket.title": "Μπάσκετ",
      "hobbies.basket.sub": "Προσπαθώ να ρίχνω μερικά σουτ κάθε εβδομάδα.",

      // Contact / Footer
      "contact.subtitle": "Επικοινωνήστε μαζί μου για συνεργασία ή απορίες:",
      "contact.emailLabel": "Email:",
      "contact.githubLabel": "GitHub:",
      "contact.linkedinLabel": "LinkedIn:",
      "footer.text": "© 2025 Georgios Sidiropoulos. Με επιφύλαξη παντός δικαιώματος."
    }
  };

  const CV_FILES = {
    en: "media/cv/Georgios_Sidiropoulos_CV_EN.pdf",
    el: "media/cv/Georgios_Sidiropoulos_CV_GR.pdf"
  };

  const langBtns = Array.from(document.querySelectorAll(".lang-btn"));
  const cvLink  = document.getElementById("cv-download");

  // default EN if nothing saved
  let currentLang = localStorage.getItem("lang") || "en";
  setLang(currentLang);

  langBtns.forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  function applyAttributes(lang) {
    const attrTargets = document.querySelectorAll(
      "[data-i18n-title], [data-i18n-aria-label], [data-i18n-placeholder], [data-i18n-alt], [data-i18n-content]"
    );
    attrTargets.forEach(node => {
      const map = [
        ["title", "i18nTitle"],
        ["aria-label", "i18nAriaLabel"],
        ["placeholder", "i18nPlaceholder"],
        ["alt", "i18nAlt"],
        ["content", "i18nContent"]
      ];
      map.forEach(([attr, ds]) => {
        const dsKey = node.dataset[ds];
        if (dsKey && I18N[lang][dsKey]) node.setAttribute(attr, I18N[lang][dsKey]);
      });
    });
  }

  function setLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    // expose current language for other scripts
    window.currentLang = currentLang;

    // pressed state on buttons
    langBtns.forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    // swap CV link
    if (cvLink) cvLink.href = CV_FILES[lang] || CV_FILES.en;

    // apply text/HTML translations
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const key = node.getAttribute("data-i18n");
      const value = I18N[lang][key];
      if (!value) return;
      if (value.includes("<")) node.innerHTML = value;
      else node.textContent = value;
    });

    // apply attribute translations
    applyAttributes(lang);

    // Notify listeners (compat: fire both events)
    // Old listeners used window "i18n:changed"; newer code might use "lang:changed".
    const detail = { lang };
   // window.dispatchEvent(new CustomEvent("i18n:changed", { detail }));
    //document.dispatchEvent(new CustomEvent("lang:changed", { detail }));

  }

  // expose for other modules
  window.setLang = setLang;
  window.__i18n = { I18N, currentLang: () => currentLang };
})();
