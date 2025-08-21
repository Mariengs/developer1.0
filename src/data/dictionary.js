export const DATA = [
  {
    term: "Accessibility",
    aliases: ["Tilgjengelighet", "a11y"],
    category: "Web",
    description:
      "Praksis for å gjøre nettsteder brukbare for alle (tastaturnavigasjon, kontraster, ARIA, semantikk).",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility",
  },
  {
    term: "API",
    aliases: ["REST API", "Endpoint"],
    category: "Web",
    description:
      "Grensesnitt for å hente/sende data mellom klient og server (f.eks. via HTTP).",
    example: `fetch('https://api.example.com/items')\n  .then(r => r.json())\n  .then(data => console.log(data));`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
  },
  {
    term: "Async/Await",
    aliases: ["Asynkron"],
    category: "JavaScript",
    description:
      "Moderne syntaks for å jobbe med asynkrone operasjoner på en lesbar måte.",
    example: `async function load(){\n  const res = await fetch('/data');\n  const json = await res.json();\n  console.log(json);\n}`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await",
  },
  {
    term: "Box Model",
    aliases: [],
    category: "CSS",
    description:
      "Beskriver hvordan margin, border, padding og innhold utgjør størrelsen på et element.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
  },
  {
    term: "Bundler",
    aliases: ["Webpack", "Vite", "Parcel"],
    category: "Verktøy",
    description:
      "Verktøy som pakker og optimaliserer kildekode (JS/CSS/bilder) for levering til nettleseren.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Build_tools",
  },
  {
    term: "CI/CD",
    aliases: ["Continuous Integration", "Continuous Deployment"],
    category: "DevOps",
    description:
      "Praksis for å automatisere testing, bygging og deploy av kode.",
    link: "https://en.wikipedia.org/wiki/CI/CD",
  },
  {
    term: "Component",
    aliases: ["Komponent"],
    category: "React",
    description:
      "En gjenbrukbar byggestein som returnerer UI. I React er en komponent som regel en funksjon som returnerer JSX.",
    example: `function Button({ label }) {\n  return <button>{label}</button>;\n}`,
    link: "https://react.dev/learn/your-first-component",
  },
  {
    term: "Context",
    aliases: ["React Context"],
    category: "React",
    description:
      "Mekanisme for å dele data gjennom komponenttreet uten å sende props manuelt på hver nivå.",
    example: `const ThemeContext = React.createContext('light');\nfunction App(){\n  return <ThemeContext.Provider value="dark"><Page/></ThemeContext.Provider>;\n}`,
    link: "https://react.dev/learn/passing-data-deeply-with-context",
  },
  {
    term: "CSR",
    aliases: ["Client-Side Rendering"],
    category: "Arkitektur",
    description:
      "Rendring skjer i nettleseren (typisk SPA). Serveren sender mest statiske ressurser + JSON.",
    link: "https://web.dev/articles/rendering-on-the-web#client-rendering",
  },
  {
    term: "CSS Variables",
    aliases: ["Custom properties"],
    category: "CSS",
    description:
      "Variabler i CSS som starter med -- og kan gjenbrukes på tvers av stiler.",
    example: `:root { --main-color: #333; }\n.box { color: var(--main-color); }`,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
  },
  {
    term: "Cypress",
    aliases: [],
    category: "Testing",
    description:
      "End-to-end testverktøy for webapplikasjoner der man simulerer ekte brukerinteraksjoner.",
    link: "https://docs.cypress.io/guides/overview/why-cypress",
  },
  {
    term: "Debounce",
    aliases: [],
    category: "JavaScript",
    description:
      "Mønster for å begrense hvor ofte en funksjon kjører ved rask gjentatt trigging, f.eks. ved søk.",
    example: `function debounce(fn, delay){\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), delay);\n  }\n}`,
    link: "https://lodash.com/docs/4.17.15#debounce",
  },
  {
    term: "Docker",
    aliases: [],
    category: "DevOps",
    description:
      "Plattform for å kjøre applikasjoner i containere slik at de kjører likt uansett miljø.",
    example: `docker run -p 3000:3000 my-app`,
    link: "https://docs.docker.com/get-started/overview/",
  },
  {
    term: "DOM",
    aliases: ["Document Object Model"],
    category: "Web",
    description:
      "Representasjon av HTML-dokumentet som et tre av noder som kan manipuleres via JavaScript.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
  },
  {
    term: "ESLint",
    aliases: ["Linting"],
    category: "Verktøy",
    description:
      "Statisk analyseverktøy som finner feil og sikrer konsistent kode-stil.",
    link: "https://eslint.org/docs/latest/",
  },
  {
    term: "Express",
    aliases: ["Express.js"],
    category: "Backend",
    description:
      "Populært backend-rammeverk for Node.js som forenkler oppsett av API-er og servere.",
    link: "https://expressjs.com/",
  },
  {
    term: "Fetch API",
    aliases: [],
    category: "Web API",
    description: "Moderne måte å hente ressurser via HTTP i nettleseren.",
    example: `fetch('/api/data').then(res => res.json()).then(console.log);`,
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
  },
  {
    term: "Flexbox",
    aliases: [],
    category: "CSS",
    description:
      "Et CSS-layoutsystem som gjør det enkelt å plassere og justere elementer fleksibelt i rader eller kolonner.",
    example: `.container { display: flex; justify-content: space-between; }`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
  },
  {
    term: "GraphQL",
    aliases: [],
    category: "Web",
    description:
      "Spørringsspråk for API-er der klienten selv definerer hvilke data den vil ha, i stedet for faste endepunkt.",
    example: `query {\n  user(id: 1) {\n    name\n    email\n  }\n}`,
    link: "https://graphql.org/learn/",
  },
  {
    term: "Grid",
    aliases: ["CSS Grid"],
    category: "CSS",
    description: "Et kraftig CSS-layoutsystem basert på rader og kolonner.",
    example: `.container { display: grid; grid-template-columns: 1fr 2fr; }`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",
  },
  {
    term: "Hook",
    aliases: ["Hooks"],
    category: "React",
    description:
      "Spesialfunksjoner (f.eks. useState, useEffect) som lar funksjonskomponenter bruke React-funksjonalitet.",
    example: `import { useEffect } from 'react';\n\nuseEffect(() => {\n  // kjør etter første render og når avhengigheter endres\n}, []);`,
    link: "https://react.dev/learn/hooks-overview",
  },
  {
    term: "Hydration",
    aliases: [],
    category: "React",
    description:
      "Prosessen der klienten kobler React-logikk på HTML generert av serveren (SSR).",
    link: "https://react.dev/reference/react-dom/client/hydrateRoot",
  },
  {
    term: "Jest",
    aliases: [],
    category: "Testing",
    description:
      "Populært test-rammeverk for JavaScript som støtter mocking og snapshot-testing.",
    link: "https://jestjs.io/docs/getting-started",
  },
  {
    term: "JSX",
    aliases: ["TSX"],
    category: "React",
    description:
      "Syntaks som lar deg skrive HTML-lignende kode i JavaScript. Transpileres til React.createElement-kall.",
    example: `const ui = <h1 className="title">Hei</h1>;`,
    link: "https://react.dev/learn/writing-markup-with-jsx",
  },
  {
    term: "JWT",
    aliases: ["JSON Web Token"],
    category: "Web",
    description:
      "Standard for å overføre sikker informasjon mellom klient og server som en signert token.",
    example: `Authorization: Bearer <jwt-token>`,
    link: "https://jwt.io/introduction",
  },
  {
    term: "Lighthouse",
    aliases: [],
    category: "Verktøy",
    description:
      "Google sitt verktøy for å måle ytelse, tilgjengelighet og SEO for en nettside.",
    link: "https://developer.chrome.com/docs/lighthouse/overview/",
  },
  {
    term: "LocalStorage",
    aliases: [],
    category: "Web API",
    description:
      "Nettleser-API for å lagre data lokalt hos brukeren som nøkkel-verdi-par.",
    example: `localStorage.setItem('theme', 'dark');\nconst t = localStorage.getItem('theme');`,
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
  },
  {
    term: "Media Query",
    aliases: ["Media Queries"],
    category: "CSS",
    description:
      "CSS-teknikk for å endre stil basert på skjermstørrelse eller enhet.",
    example: `@media (max-width: 600px) { body { font-size: 14px; } }`,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",
  },
  {
    term: "MongoDB",
    aliases: [],
    category: "Database",
    description:
      "Dokumentbasert NoSQL-database som lagrer data i JSON-lignende dokumenter.",
    example: `db.users.insertOne({ name: "Ola", age: 30 })`,
    link: "https://www.mongodb.com/docs/manual/introduction/",
  },
  {
    term: "Next.js",
    aliases: [],
    category: "React Framework",
    description:
      "Fullstack React-rammeverk med støtte for SSR, SSG, API routes og mye mer.",
    link: "https://nextjs.org/docs",
  },
  {
    term: "Node.js",
    aliases: ["Node"],
    category: "Backend",
    description:
      "JavaScript-runtime basert på V8-motoren. Lar deg kjøre JS på serveren.",
    link: "https://nodejs.org/en/learn",
  },
  {
    term: "PostgreSQL",
    aliases: ["Postgres"],
    category: "Database",
    description:
      "Relasjonsdatabase med støtte for avanserte spørringer, JSON-felt og høy pålitelighet.",
    example: `SELECT * FROM users WHERE age > 18;`,
    link: "https://www.postgresql.org/docs/current/index.html",
  },
  {
    term: "Prettier",
    aliases: ["Formatter"],
    category: "Verktøy",
    description:
      "Automatisk kodeformatering for jevn stil uansett hvem som skriver koden.",
    link: "https://prettier.io/docs/en/",
  },
  {
    term: "Promise",
    aliases: [],
    category: "JavaScript",
    description:
      "Et objekt som representerer en verdi som blir tilgjengelig nå, senere eller aldri (pending, fulfilled, rejected).",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
  },
  {
    term: "Props",
    aliases: ["Egenskaper"],
    category: "React",
    description:
      "Data som sendes inn til en komponent utenfra (som parametere). Props er immutable i komponenten som mottar dem.",
    example: `function Greeting({ name }) {\n  return <h1>Hei, {name}!</h1>;\n}`,
    link: "https://react.dev/learn/passing-props-to-a-component",
  },
  {
    term: "Pseudo-classes",
    aliases: [":hover", ":focus"],
    category: "CSS",
    description:
      "Spesielle tilstander på elementer som kan styles, f.eks. når en knapp hovres eller har fokus.",
    example: `button:hover { background: blue; }`,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",
  },
  {
    term: "Redux",
    aliases: [],
    category: "State Management",
    description:
      "Populært bibliotek for global state-håndtering med en streng dataflyt (actions, reducers, store).",
    link: "https://redux.js.org/introduction/getting-started",
  },
  {
    term: "REST",
    aliases: ["RESTful API"],
    category: "Web",
    description:
      "Arkitekturstil for API-er som bruker HTTP-metoder (GET, POST, PUT, DELETE) for å manipulere ressurser.",
    link: "https://restfulapi.net/",
  },
  {
    term: "Sass/SCSS",
    aliases: ["SASS", "Syntactically Awesome Stylesheet", "SCSS"],
    category: "CSS",
    description:
      "CSS-preprosessor som gir variabler, nesting, mixins m.m. og kompileres til vanlig CSS.",
    example: `$primary: #0ea5e9;\n.button {\n  color: $primary;\n  &:hover { text-decoration: underline; }\n}`,
    link: "https://sass-lang.com/guide/",
  },
  {
    term: "SEO",
    aliases: ["Search Engine Optimization"],
    category: "Web",
    description:
      "Tiltak for å gjøre en nettside lettere å finne og rangere høyt i søkemotorer.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/SEO",
  },
  {
    term: "SessionStorage",
    aliases: [],
    category: "Web API",
    description:
      "Ligner LocalStorage, men data slettes når fanen eller nettleseren lukkes.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",
  },
  {
    term: "SPA",
    aliases: ["Single Page Application"],
    category: "Arkitektur",
    description:
      "App som laster én HTML-side og oppdaterer innhold dynamisk uten full sideskift.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/SPA",
  },
  {
    term: "SSR",
    aliases: ["Server-Side Rendering"],
    category: "Arkitektur",
    description:
      "HTML genereres på serveren for rask first paint og bedre SEO; hydreres av klienten etterpå.",
    link: "https://web.dev/articles/rendering-on-the-web#server-rendering",
  },
  {
    term: "State",
    aliases: ["Tilstand"],
    category: "React",
    description:
      "Internt minne i en komponent som kan endres over tid og trigger re-render når det oppdateres.",
    example: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Klikk: {count}</button>;\n}`,
    link: "https://react.dev/learn/state-a-components-memory",
  },
  {
    term: "Tailwind CSS",
    aliases: ["Tailwind"],
    category: "CSS",
    description:
      "Utility-first CSS-rammeverk der du styler med klasser direkte i markup (f.eks. p-4, rounded-xl).",
    example: `<button className="px-4 py-2 rounded-xl shadow">Lagre</button>`,
    link: "https://tailwindcss.com/docs/utility-first",
  },
  {
    term: "Throttling",
    aliases: [],
    category: "JavaScript",
    description:
      "Mønster som sørger for at en funksjon kun kjører maks én gang per tidsintervall.",
    link: "https://lodash.com/docs/4.17.15#throttle",
  },
  {
    term: "TypeScript",
    aliases: ["TS"],
    category: "JavaScript",
    description:
      "Et superset av JavaScript som legger til statiske typer og gjør koden mer robust.",
    example: `function add(a: number, b: number): number {\n  return a + b;\n}`,
    link: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    term: "Unit Test",
    aliases: ["Enhetstest"],
    category: "Testing",
    description:
      "Test av en isolert funksjon eller komponent for å verifisere at den fungerer som forventet.",
    example: `test('2 + 2 = 4', () => {\n  expect(2 + 2).toBe(4);\n});`,
    link: "https://en.wikipedia.org/wiki/Unit_testing",
  },
  {
    term: "useEffect",
    aliases: [],
    category: "React",
    description:
      "Hook som kjører side-effekter i komponenter, f.eks. datahenting eller manipulering av DOM etter render.",
    example: `useEffect(() => {\n  document.title = 'Ny tittel';\n}, []);`,
    link: "https://react.dev/reference/react/useEffect",
  },
  {
    term: "useMemo",
    aliases: [],
    category: "React",
    description:
      "Hook som memoriserer verdier for å unngå unødvendige beregninger mellom renders.",
    example: `const expensive = useMemo(() => compute(data), [data]);`,
    link: "https://react.dev/reference/react/useMemo",
  },
  {
    term: "useReducer",
    aliases: [],
    category: "React",
    description:
      "Hook for state management i en komponent med mer kompleks logikk enn useState.",
    example: `const [state, dispatch] = useReducer(reducer, initialState);\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n}`,
    link: "https://react.dev/reference/react/useReducer",
  },
  {
    term: "useRef",
    aliases: [],
    category: "React",
    description:
      "Hook som brukes til å lagre mutable verdier som ikke trigger re-render, eller for å referere til DOM-elementer.",
    example: `import { useRef } from 'react';\n\nfunction InputFocus() {\n  const inputRef = useRef();\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={() => inputRef.current.focus()}>Fokuser</button>\n    </>\n  );\n}`,
    link: "https://react.dev/reference/react/useRef",
  },
  {
    term: "Vite",
    aliases: [],
    category: "Verktøy",
    description:
      "Byggeverktøy for moderne frontend-prosjekter som gir rask utviklingsserver og optimalisert build.",
    link: "https://vitejs.dev/guide/",
  },
  {
    term: "Virtual DOM",
    aliases: ["VDOM"],
    category: "React",
    description:
      "Et lettvekts-objekttre av UI-et som React bruker for å finne minimale endringer som må gjøres i ekte DOM.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Virtual_DOM",
  },
  {
    term: "Webpack",
    aliases: [],
    category: "Verktøy",
    description:
      "Modul-bundler for JavaScript som lar deg bruke import/eksport og pakke alt i en fil for nettleseren.",
    link: "https://webpack.js.org/concepts/",
  },
  {
    term: "Zustand",
    aliases: [],
    category: "State Management",
    description:
      "Et lettvekts state management-bibliotek for React som er enklere enn Redux.",
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
];
