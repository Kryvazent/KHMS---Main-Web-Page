export type TeachingCategoryId = "assessment" | "simulation" | "collaboration" | "digital";

export type TeachingMethod = {
  number: number;
  id: string;
  title: string;
  image: string;
  category: TeachingCategoryId;
  summary: string;
  tags: string[];
  what: string;
  how: string[];
  why: string;
  highlights: string[];
};

export const teachingCategories: {
  id: "all" | TeachingCategoryId;
  label: string;
}[] = [
  { id: "all", label: "All Methods" },
  { id: "assessment", label: "Assessment" },
  { id: "simulation", label: "Simulation" },
  { id: "collaboration", label: "Collaboration" },
  { id: "digital", label: "Digital & Visual" },
];

export const innovativeTeachingMethods: TeachingMethod[] = [
  {
    number: 1,
    id: "one-minute-viva",
    title: "One Minute Viva",
    image: "/innovative-teaching/one-minute-viva.jpeg",
    category: "assessment",
    summary:
      "A rapid oral drill that asks learners to commit, defend their logic, and receive instant clinical pearls.",
    tags: ["Viva", "Rapid recall", "Clinical reasoning"],
    what: "A high-pressure assessment tool that mimics the real-time cognitive demands of a chaotic resuscitation bay.",
    how: [
      "The learner gets 0-15 seconds for a quick commitment: immediate diagnosis and plan.",
      "From 16-60 seconds, the learner defends the logic, evidence, and clinical priorities behind that plan.",
      "From 60-120 seconds, the trainer gives concise feedback and the key clinical pearl.",
    ],
    why: "It reduces fence-sitting, forces a clear clinical path, and makes reasoning visible under time pressure.",
    highlights: [
      "Works well as a quick brainstorming format that captures the essentials.",
      "Can be repeated back to back as a one-hour crash course across multiple EM topics.",
    ],
  },
  {
    number: 2,
    id: "dual-lens-repetition",
    title: "Dual Lens Repetition",
    image: "/innovative-teaching/dual-lens-repetition.jpeg",
    category: "collaboration",
    summary:
      "Two expert lenses connect focused topic knowledge with clinical application in the same teaching block.",
    tags: ["Repetition", "Two experts", "Application"],
    what: "A learning framework that bridges textbook knowledge and real-time clinical execution.",
    how: [
      "Lens 1 builds focused knowledge around the topic, including key evidence and principles.",
      "Lens 2 immediately pivots to bedside application, clinical judgement, and practical interpretation.",
      "The same concept is revisited from different angles, creating deliberate repetition without feeling repetitive.",
    ],
    why: "It helps learners convert memorized protocols into clinical understanding while hearing the same topic interpreted through more than one expert lens.",
    highlights: [
      "Balances evidence, experience, and practical decision-making.",
      "Useful when learners need both conceptual clarity and operational confidence.",
    ],
  },
  {
    number: 3,
    id: "stratified-multidisciplinary-simulation",
    title: "Stratified Multidisciplinary Simulation",
    image: "/innovative-teaching/stratified-multidisciplinary-simulation.jpeg",
    category: "simulation",
    summary:
      "A tiered simulation model that grows from procedure skills to complex multi-specialty crises.",
    tags: ["Simulation", "Trauma", "Teamwork"],
    what: "A scaffolded, multi-layered approach to trauma and resuscitation training with multidisciplinary participation.",
    how: [
      "Level 1 covers foundational competence, such as airway and individual procedure drills.",
      "Level 2 develops coordinated teamwork, standard arrest flows, handoffs, and role clarity.",
      "Level 3 adds advanced system integration through evolving trauma and multi-specialty scenarios.",
    ],
    why: "It prevents cognitive overload by building core skills before learners enter complex, chaotic scenarios.",
    highlights: [
      "Combines different candidate groups to build team spirit and realistic ED behavior.",
      "Reveals practical barriers and quality-improvement opportunities from daily practice.",
    ],
  },
  {
    number: 4,
    id: "cross-department-teaching",
    title: "Cross-Department Teaching",
    image: "/innovative-teaching/cross-department-teaching.jpeg",
    category: "collaboration",
    summary:
      "Joint teaching that carries emergency care quality beyond the ED doors and into the wider hospital.",
    tags: ["Departments", "Handover", "Patient safety"],
    what: "An educational initiative that breaks hospital silos and aligns emergency physicians with other specialties.",
    how: [
      "Teams use joint case discussions, shared didactics, and simulations with departments outside the ED.",
      "The teaching focuses on emergency knowledge, quality of care, and patient safety across the continuum.",
    ],
    why: "When teams understand each other's workflows and expectations, handoffs become smoother and real-time consult friction falls.",
    highlights: [
      "Fills the silent phase between ED stabilization and ward care.",
      "Expands EMerge teaching to everyone interested in emergencies, not only ED staff.",
    ],
  },
  {
    number: 5,
    id: "high-impact-crash-courses",
    title: "High-Impact Crash Courses",
    image: "/innovative-teaching/high-impact-crash-courses.jpeg",
    category: "digital",
    summary:
      "Ultra-focused boot camps, such as a three-hour ECG course, built for fast mastery of high-yield skills.",
    tags: ["Crash course", "ECG", "High yield"],
    what: "A concise workshop format designed to rapidly build competence in specific clinical skills.",
    how: [
      "Time-blocked sessions skip low-yield content and focus on life-threatening patterns and decisions.",
      "Clinical experience is compressed into memorable teaching moments and take-home bundles.",
    ],
    why: "It gives busy doctors and residents a fast confidence boost in a condensed, practical format.",
    highlights: [
      "Best for narrow, urgent competencies such as ECG, airway, or emergency procedures.",
      "Uses a multi-method approach to create a concise brain-storming and revision experience.",
    ],
  },
  {
    number: 6,
    id: "interprofessional-training",
    title: "Interprofessional Training",
    image: "/innovative-teaching/interprofessional-training.jpeg",
    category: "simulation",
    summary:
      "Whole-team training that flattens hierarchy and rehearses the way teams actually respond in emergencies.",
    tags: ["Team training", "Communication", "Roles"],
    what: "A training model for the entire resuscitation team, using the same team composition seen in real life.",
    how: [
      "Doctors, nurses, paramedics, respiratory therapists, and other team members train together.",
      "Drills focus on communication, role clarity, mutual respect, and shared mental models.",
    ],
    why: "Many clinical errors come from teamwork breakdown rather than missing knowledge. This format targets that failure point directly.",
    highlights: [
      "Builds psychological safety and a clearer team structure.",
      "Helps junior and senior staff practise speaking up during critical moments.",
    ],
  },
  {
    number: 7,
    id: "harnessing-clinical-blunders",
    title: "Harnessing Clinical Blunders",
    image: "/innovative-teaching/harnessing-clinical-blunders.jpeg",
    category: "collaboration",
    summary:
      "A blame-free forum that turns near misses and mistakes into shared learning and better systems.",
    tags: ["Error log", "Debrief", "Safety culture"],
    what: "A psychologically safe teaching forum for clinical missteps, near misses, and common errors.",
    how: [
      "Real errors are converted into objective learning pearls, workflow changes, and safer practice patterns.",
      "Trainers use a synchronized error-log discussion that invites learners to self-reflect without blame.",
    ],
    why: "True mastery comes from studying where things go wrong and replacing shame with collective growth.",
    highlights: [
      "Makes common errors visible before they repeat at the bedside.",
      "Links education with quality improvement and defensive clinical practice.",
    ],
  },
  {
    number: 8,
    id: "rapid-fire-question-sessions",
    title: "Rapid-Fire Question Sessions",
    image: "/innovative-teaching/rapid-fire-question-sessions.jpeg",
    category: "assessment",
    summary:
      "A competitive, timer-driven question format that trains instant recall of critical EM protocols.",
    tags: ["Questions", "Competition", "Recall"],
    what: "A high-energy, gamified drill for fast retrieval of emergency medicine facts and protocols.",
    how: [
      "Two experts demonstrate a fast-paced question-and-answer sequence while the audience follows the reasoning.",
      "Countdown timers, sequential prompts, and visible momentum keep the session active.",
    ],
    why: "Healthy peer competition and time pressure help lock in fast retrieval of life-saving information.",
    highlights: [
      "Useful for revision, morning teaching, and protocol refreshers.",
      "Works best when questions are short, clinically decisive, and immediately explained.",
    ],
  },
  {
    number: 9,
    id: "em-decision-matrix",
    title: "The EM Decision Matrix",
    image: "/innovative-teaching/em-decision-matrix.jpeg",
    category: "collaboration",
    summary:
      "Bedside grand rounds that move teaching from the lecture hall back to the patient care bay.",
    tags: ["Grand rounds", "Bedside", "Decision-making"],
    what: "A bedside teaching model built around active case observation, differential diagnosis, and management decisions.",
    how: [
      "Emergency physicians lead small groups with consultants, trainees, and ED staff in active care bays.",
      "The team discusses differentials, management, patient communication, and immediate feedback in real time.",
    ],
    why: "It contextualizes learning around a living patient and pushes learners to read the room, communicate clearly, and think on their feet.",
    highlights: [
      "Strong format for grand rounds, registrar teaching, and consultant-led bedside learning.",
      "Connects clinical reasoning with the operational reality of the ED.",
    ],
  },
  {
    number: 10,
    id: "true-false-feedback-questionnaires",
    title: "True/False Feedback Questionnaires",
    image: "/innovative-teaching/true-false-feedback-questionnaires.jpeg",
    category: "assessment",
    summary:
      "A fast post-session feedback tool that catches misconceptions before they become habits.",
    tags: ["Feedback", "Questionnaires", "Bias"],
    what: "A low-stakes, rapid analytical tool for checking specific clinical decisions and cognitive biases.",
    how: [
      "Short printed or digital true/false questions are deployed immediately after a shift, simulation, or teaching block.",
      "Answers are paired with instant targeted rationale so misconceptions are corrected early.",
    ],
    why: "Immediate clarity helps stop bad habits from becoming part of routine clinical practice.",
    highlights: [
      "Easy to repeat across cohorts and topics.",
      "Works well for decisions where a simple true/false statement exposes a dangerous assumption.",
    ],
  },
  {
    number: 11,
    id: "gamification-of-em-education",
    title: "Gamification of EM Education",
    image: "/innovative-teaching/gamification-of-em-education.jpeg",
    category: "simulation",
    summary:
      "Game mechanics bring energy, competition, and voluntary practice into high-stakes clinical revision.",
    tags: ["Gamification", "Puzzles", "Retention"],
    what: "A teaching approach that adds game-design mechanics to emergency medicine learning.",
    how: [
      "Learners work through timed clinical puzzles, riddles, escape-room style cases, or table-top simulations.",
      "Sessions can be self-played or competitive, with leaderboards and team-based challenges.",
    ],
    why: "It turns demanding protocol review into a high-engagement loop that improves retention and voluntary study time.",
    highlights: [
      "Best when the fun reinforces core decisions rather than distracting from them.",
      "Can be used for emergency presentations, toxicology, trauma, ECG, and protocol revision.",
    ],
  },
  {
    number: 12,
    id: "ai-driven-em-education",
    title: "AI-Driven EM Education",
    image: "/innovative-teaching/ai-driven-em-education.jpeg",
    category: "digital",
    summary:
      "Personalized case simulation, debrief support, and adaptive assessment through AI-assisted learning.",
    tags: ["AI", "Simulation", "Adaptive learning"],
    what: "A 24/7 personalized clinical coach that adapts to each learner's pace and knowledge gaps.",
    how: [
      "LLM-driven cases evolve in real time based on the learner's orders, decisions, and missed traps.",
      "AI debrief support reviews diagnostic speed, resource use, and protocol adherence after a case.",
      "Learner assessment maps weak spots over time and adjusts future case difficulty.",
    ],
    why: "It gives learners infinite, risk-free practice without requiring a physical simulation lab or an attending at every hour.",
    highlights: [
      "Strong fit for autonomous learning and post-session revision.",
      "Can support formative assessment when paired with human oversight.",
    ],
  },
  {
    number: 13,
    id: "focused-forge",
    title: "The Focused Forge",
    image: "/innovative-teaching/focused-forge.jpeg",
    category: "assessment",
    summary:
      "A silent, high-tension visual diagnostic drill for rapid pattern recognition and honest self-calibration.",
    tags: ["Spot diagnosis", "Visual drill", "Cognitive resilience"],
    what: "A rapid-iteration visual diagnostic drill that recreates split-second pattern recognition in a busy ED.",
    how: [
      "Learners see back-to-back ECGs, X-rays, CT slices, or clinical signs with strict time limits.",
      "There is no discussion during the drill, only quick clues from the instructor.",
      "Each learner silently categorizes the internal response as knew it or did not know it.",
    ],
    why: "It removes the ability to talk around a diagnosis and helps learners identify silent knowledge gaps before they reach the bedside.",
    highlights: [
      "Useful before a teaching session to prime attention and reveal weak areas.",
      "Builds cognitive honesty under time pressure.",
    ],
  },
  {
    number: 14,
    id: "dos-and-donts",
    title: "Dos & Don'ts",
    image: "/innovative-teaching/dos-and-donts.jpeg",
    category: "digital",
    summary:
      "Visual micro-learning that places the correct action beside the dangerous reflex it replaces.",
    tags: ["Micro-learning", "Myth busting", "Public education"],
    what: "A high-impact visual teaching tool that communicates emergency actions while debunking common medical myths.",
    how: [
      "Each topic uses a side-by-side DO and DON'T layout.",
      "The DO panel models the evidence-based action, such as direct pressure or correct EpiPen use.",
      "The DON'T panel shows the common harmful action clearly crossed out.",
    ],
    why: "Simple, high-contrast imagery is easier to recall during panic and helps overwrite dangerous instincts.",
    highlights: [
      "Accessible to beginners, the public, and mixed-language audiences.",
      "Strong memory hook through right-versus-wrong contrast.",
    ],
  },
  {
    number: 15,
    id: "em-algos",
    title: "EM Algos",
    image: "/innovative-teaching/em-algos.jpeg",
    category: "digital",
    summary:
      "Step-by-step ED pathways that help clinicians rule out killers and standardize critical care decisions.",
    tags: ["Algorithms", "Decision trees", "Governance"],
    what: "A practical decision-pathway method for high-stakes emergency presentations.",
    how: [
      "Clear branching algorithms translate undifferentiated complaints into actionable roadmaps.",
      "Each pathway forces clinicians to rule out life threats at critical nodes before moving forward.",
    ],
    why: "Algorithms reduce cognitive overload, standardize care, and accelerate time to critical interventions.",
    highlights: [
      "Supports safe differential diagnosis exclusion.",
      "Improves governance and consistency across different clinicians and shifts.",
      "Helps teams move faster from first assessment to disposition.",
    ],
  },
];

export const findTeachingMethod = (id: string) =>
  innovativeTeachingMethods.find((method) => method.id === id);

export const getTeachingMethodIndex = (id: string) =>
  innovativeTeachingMethods.findIndex((method) => method.id === id);
