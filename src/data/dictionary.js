export const DATA = [
  {
    term: "Accessibility",
    aliases: ["Tilgjengelighet", "a11y"],
    category: "Web",
    description:
      "Praksis for å gjøre nettsteder brukbare for alle (tastaturnavigasjon, kontraster, ARIA, semantikk).",
    description_en:
      "Practices to make websites usable for everyone (keyboard navigation, contrast, ARIA, semantics).",

    link: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility",
  },
  {
    term: "API",
    aliases: ["REST API", "Endpoint"],
    category: "Web",
    description:
      "Grensesnitt for å hente/sende data mellom klient og server (f.eks. via HTTP).",
    description_en:
      "An interface to fetch/send data between client and server (e.g. over HTTP).",

    example: `fetch('https://api.example.com/items')\n  .then(r => r.json())\n  .then(data => console.log(data));`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
  },
  {
    term: "Async/Await",
    aliases: ["Asynkron"],
    category: "JavaScript",
    description:
      "Moderne syntaks for å jobbe med asynkrone operasjoner på en lesbar måte.",
    description_en:
      "Modern syntax for working with asynchronous operations in a readable way.",

    example: `async function load(){\n  const res = await fetch('/data');\n  const json = await res.json();\n  console.log(json);\n}`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await",
  },
  {
    term: "Box Model",
    aliases: [],
    category: "CSS",
    description:
      "Beskriver hvordan margin, border, padding og innhold utgjør størrelsen på et element.",
    description_en:
      "Describes how margin, border, padding and content make up an element’s total size.",

    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model",
  },
  {
    term: "Bundler",
    aliases: ["Webpack", "Vite", "Parcel"],
    category: "Verktøy",
    description:
      "Verktøy som pakker og optimaliserer kildekode (JS/CSS/bilder) for levering til nettleseren.",
    description_en:
      "Tools that bundle and optimize source code (JS/CSS/images) for the browser.",

    link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Build_tools",
  },
  {
    term: "CI/CD",
    aliases: ["Continuous Integration", "Continuous Deployment"],
    category: "DevOps",
    description:
      "Praksis for å automatisere testing, bygging og deploy av kode.",
    description_en:
      "Practices to automate testing, building, and deploying code.",

    link: "https://en.wikipedia.org/wiki/CI/CD",
  },
  {
    term: "Component",
    aliases: ["Komponent"],
    category: "React",
    description:
      "En gjenbrukbar byggestein som returnerer UI. I React er en komponent som regel en funksjon som returnerer JSX.",
    description_en:
      "A reusable building block that returns UI. In React, a component is usually a function returning JSX.",

    example: `function Button({ label }) {\n  return <button>{label}</button>;\n}`,
    link: "https://react.dev/learn/your-first-component",
  },
  {
    term: "Context",
    aliases: ["React Context"],
    category: "React",
    description:
      "Mekanisme for å dele data gjennom komponenttreet uten å sende props manuelt på hver nivå.",
    description_en:
      "A mechanism for sharing data through the component tree without passing props at every level.",

    example: `const ThemeContext = React.createContext('light');\nfunction App(){\n  return <ThemeContext.Provider value="dark"><Page/></ThemeContext.Provider>;\n}`,
    link: "https://react.dev/learn/passing-data-deeply-with-context",
  },
  {
    term: "CSR",
    aliases: ["Client-Side Rendering"],
    category: "Arkitektur",
    description:
      "Rendring skjer i nettleseren (typisk SPA). Serveren sender mest statiske ressurser + JSON.",
    description_en:
      "Rendering happens in the browser (typical for SPA). The server sends most static resources + JSON.",
    link: "https://web.dev/articles/rendering-on-the-web#client-rendering",
  },
  {
    term: "CSS Variables",
    aliases: ["Custom properties"],
    category: "CSS",
    description:
      "Variabler i CSS som starter med -- og kan gjenbrukes på tvers av stiler.",
    description_en:
      "Variables in CSS that start with -- and can be used across styles.",
    example: `:root { --main-color: #333; }\n.box { color: var(--main-color); }`,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
  },
  {
    term: "Cypress",
    aliases: [],
    category: "Testing",
    description:
      "End-to-end testverktøy for webapplikasjoner der man simulerer ekte brukerinteraksjoner.",
    description_en:
      "End-to-end test tool for web applications where you simulate real user interactions.",
    link: "https://docs.cypress.io/guides/overview/why-cypress",
  },
  {
    term: "Debounce",
    aliases: [],
    category: "JavaScript",
    description:
      "Mønster for å begrense hvor ofte en funksjon kjører ved rask gjentatt trigging, f.eks. ved søk.",
    description_en:
      "Pattern for limiting how often a function runs when triggered repeatedly, e.g. for searching.",
    example: `function debounce(fn, delay){\n  let timeout;\n  return (...args) => {\n    clearTimeout(timeout);\n    timeout = setTimeout(() => fn(...args), delay);\n  }\n}`,
    link: "https://lodash.com/docs/4.17.15#debounce",
  },
  {
    term: "Docker",
    aliases: [],
    category: "DevOps",
    description:
      "Plattform for å kjøre applikasjoner i containere slik at de kjører likt uansett miljø.",
    description_en:
      "Platform for running applications in containers so that they run the same regardless of environment.",
    example: `docker run -p 3000:3000 my-app`,
    link: "https://docs.docker.com/get-started/overview/",
  },
  {
    term: "DOM",
    aliases: ["Document Object Model"],
    category: "Web",
    description:
      "Representasjon av HTML-dokumentet som et tre av noder som kan manipuleres via JavaScript.",
    description_en:
      "Representation of an HTML document as a tree of nodes that can be manipulated via JavaScript.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
  },
  {
    term: "ESLint",
    aliases: ["Linting"],
    category: "Verktøy",
    description:
      "Statisk analyseverktøy som finner feil og sikrer konsistent kode-stil.",
    description_en:
      "Static analysis tool that finds errors and ensures consistent code style.",
    link: "https://eslint.org/docs/latest/",
  },
  {
    term: "Express",
    aliases: ["Express.js"],
    category: "Backend",
    description:
      "Populært backend-rammeverk for Node.js som forenkler oppsett av API-er og servere.",
    description_en:
      "Popular backend framework for Node.js that makes it easier to set up APIs and servers.",
    link: "https://expressjs.com/",
  },
  {
    term: "Fetch API",
    aliases: [],
    category: "Web API",
    description: "Moderne måte å hente ressurser via HTTP i nettleseren.",
    description_en:
      "The modern way to fetch resources via HTTP in the browser.",
    example: `fetch('/api/data').then(res => res.json()).then(console.log);`,
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
  },
  {
    term: "Flexbox",
    aliases: [],
    category: "CSS",
    description:
      "Et CSS-layoutsystem som gjør det enkelt å plassere og justere elementer fleksibelt i rader eller kolonner.",
    description_en:
      "A CSS layout system that makes it easy to arrange and align elements flexibly in rows or columns.",
    example: `.container { display: flex; justify-content: space-between; }`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox",
  },
  {
    term: "GraphQL",
    aliases: [],
    category: "Web",
    description:
      "Spørringsspråk for API-er der klienten selv definerer hvilke data den vil ha, i stedet for faste endepunkt.",
    description_en:
      "Query language for APIs where the client defines which data it wants, instead of fixed endpoints.",
    example: `query {\n  user(id: 1) {\n    name\n    email\n  }\n}`,
    link: "https://graphql.org/learn/",
  },
  {
    term: "Grid",
    aliases: ["CSS Grid"],
    category: "CSS",
    description: "Et kraftig CSS-layoutsystem basert på rader og kolonner.",
    description_en: "A powerful CSS layout system based on rows and columns.",
    example: `.container { display: grid; grid-template-columns: 1fr 2fr; }`,
    link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids",
  },
  {
    term: "Hook",
    aliases: ["Hooks"],
    category: "React",
    description:
      "Spesialfunksjoner (f.eks. useState, useEffect) som lar funksjonskomponenter bruke React-funksjonalitet.",
    description_en:
      "Special functions (e.g. useState, useEffect) that let functional components use React functionality.",
    example: `import { useEffect } from 'react';\n\nuseEffect(() => {\n  // kjør etter første render og når avhengigheter endres\n}, []);`,
    link: "https://react.dev/learn/hooks-overview",
  },
  {
    term: "Hydration",
    aliases: [],
    category: "React",
    description:
      "Prosessen der klienten kobler React-logikk på HTML generert av serveren (SSR).",
    description_en:
      "The process where the client connects React logic to HTML generated by the server (SSR).",
    link: "https://react.dev/reference/react-dom/client/hydrateRoot",
  },
  {
    term: "Jest",
    aliases: [],
    category: "Testing",
    description:
      "Populært test-rammeverk for JavaScript som støtter mocking og snapshot-testing.",
    description_en:
      "Popular test framework for JavaScript that supports mocking and snapshot testing.",
    link: "https://jestjs.io/docs/getting-started",
  },
  {
    term: "JSX",
    aliases: ["TSX"],
    category: "React",
    description:
      "Syntaks som lar deg skrive HTML-lignende kode i JavaScript. Transpileres til React.createElement-kall.",
    description_en:
      "Syntax that lets you write HTML-like code in JavaScript. Transpiled to React.createElement calls.",
    example: `const ui = <h1 className="title">Hei</h1>;`,
    link: "https://react.dev/learn/writing-markup-with-jsx",
  },
  {
    term: "JWT",
    aliases: ["JSON Web Token"],
    category: "Web",
    description:
      "Standard for å overføre sikker informasjon mellom klient og server som en signert token.",
    description_en:
      "Standard for transmitting secure information between client and server as a signed token.",
    example: `Authorization: Bearer <jwt-token>`,
    link: "https://jwt.io/introduction",
  },
  {
    term: "Lighthouse",
    aliases: [],
    category: "Verktøy",
    description:
      "Google sitt verktøy for å måle ytelse, tilgjengelighet og SEO for en nettside.",
    description_en:
      "Google's tool for measuring performance, accessibility, and SEO for a website.",
    link: "https://developer.chrome.com/docs/lighthouse/overview/",
  },
  {
    term: "LocalStorage",
    aliases: [],
    category: "Web API",
    description:
      "Nettleser-API for å lagre data lokalt hos brukeren som nøkkel-verdi-par.",
    description_en:
      "Browser API for storing data locally on the user as key-value pairs.",
    example: `localStorage.setItem('theme', 'dark');\nconst t = localStorage.getItem('theme');`,
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
  },
  {
    term: "Media Query",
    aliases: ["Media Queries"],
    category: "CSS",
    description:
      "CSS-teknikk for å endre stil basert på skjermstørrelse eller enhet.",
    description_en:
      "CSS technique for changing style based on screen size or unit.",
    example: `@media (max-width: 600px) { body { font-size: 14px; } }`,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",
  },
  {
    term: "MongoDB",
    aliases: [],
    category: "Database",
    description:
      "Dokumentbasert NoSQL-database som lagrer data i JSON-lignende dokumenter.",
    description_en:
      "Document-based NoSQL database that stores data in JSON-like documents.",
    example: `db.users.insertOne({ name: "Ola", age: 30 })`,
    link: "https://www.mongodb.com/docs/manual/introduction/",
  },
  {
    term: "Next.js",
    aliases: [],
    category: "React Framework",
    description:
      "Fullstack React-rammeverk med støtte for SSR, SSG, API routes og mye mer.",
    description_en:
      "Fullstack React framework with support for SSR, SSG, API routes, and much more.",
    link: "https://nextjs.org/docs",
  },
  {
    term: "Node.js",
    aliases: ["Node"],
    category: "Backend",
    description:
      "JavaScript-runtime basert på V8-motoren. Lar deg kjøre JS på serveren.",
    description_en:
      "JavaScript runtime based on V8 engine. Lets you run JS on the server.",
    link: "https://nodejs.org/en/learn",
  },
  {
    term: "PostgreSQL",
    aliases: ["Postgres"],
    category: "Database",
    description:
      "Relasjonsdatabase med støtte for avanserte spørringer, JSON-felt og høy pålitelighet.",
    description_en:
      "Relational database with support for advanced queries, JSON field, and high availability.",
    example: `SELECT * FROM users WHERE age > 18;`,
    link: "https://www.postgresql.org/docs/current/index.html",
  },
  {
    term: "Prettier",
    aliases: ["Formatter"],
    category: "Verktøy",
    description:
      "Automatisk kodeformatering for jevn stil uansett hvem som skriver koden.",
    description_en:
      "Automatic code formatting for even style regardless of who is writing the code.",
    link: "https://prettier.io/docs/en/",
  },
  {
    term: "Promise",
    aliases: [],
    category: "JavaScript",
    description:
      "Et objekt som representerer en verdi som blir tilgjengelig nå, senere eller aldri (pending, fulfilled, rejected).",
    description_en:
      "An object that represents a value that may be available now, later, or never (pending, fulfilled, rejected).",
    example: `const promise = new Promise((resolve, reject) => {\n  if (success) {\n    resolve('Success!');\n  } else {\n    reject('Failure!');\n  }\n});`,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",
  },
  {
    term: "Props",
    aliases: ["Egenskaper"],
    category: "React",
    description:
      "Data som sendes inn til en komponent utenfra (som parametere). Props er immutable i komponenten som mottar dem.",
    description_en:
      "Data sent in to a component from outside (as parameters). Props are immutable in the component that receives them.",
    example: `function Greeting({ name }) {\n  return <h1>Hei, {name}!</h1>;\n}`,
    link: "https://react.dev/learn/passing-props-to-a-component",
  },
  {
    term: "Pseudo-classes",
    aliases: [":hover", ":focus"],
    category: "CSS",
    description:
      "Spesielle tilstander på elementer som kan styles, f.eks. når en knapp hovres eller har fokus.",
    description_en:
      "Special states on elements that can be styled, e.g. when a button is hovered or has focus.",
    example: `button:hover { background: blue; }`,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",
  },
  {
    term: "Redux",
    aliases: [],
    category: "State Management",
    description:
      "Populært bibliotek for global state-håndtering med en streng dataflyt (actions, reducers, store).",
    description_en:
      "Popular library for global state management with a string data flow (actions, reducers, store).",
    link: "https://redux.js.org/introduction/getting-started",
  },
  {
    term: "REST",
    aliases: ["RESTful API"],
    category: "Web",
    description:
      "Arkitekturstil for API-er som bruker HTTP-metoder (GET, POST, PUT, DELETE) for å manipulere ressurser.",
    description_en:
      "Architecture style for APIs that use HTTP methods (GET, POST, PUT, DELETE) to manipulate resources.",
    link: "https://restfulapi.net/",
  },
  {
    term: "Sass/SCSS",
    aliases: ["SASS", "Syntactically Awesome Stylesheet", "SCSS"],
    category: "CSS",
    description:
      "CSS-preprosessor som gir variabler, nesting, mixins m.m. og kompileres til vanlig CSS.",
    description_en:
      "CSS preprocessor that gives variables, nesting, mixins, etc. and compiles to regular CSS.",
    example: `$primary: #0ea5e9;\n.button {\n  color: $primary;\n  &:hover { text-decoration: underline; }\n}`,
    link: "https://sass-lang.com/guide/",
  },
  {
    term: "SEO",
    aliases: ["Search Engine Optimization"],
    category: "Web",
    description:
      "Tiltak for å gjøre en nettside lettere å finne og rangere høyt i søkemotorer.",
    description_en:
      "Strategies for making a website easier to find and rank high in search engines.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/SEO",
  },
  {
    term: "SessionStorage",
    aliases: [],
    category: "Web API",
    description:
      "Ligner LocalStorage, men data slettes når fanen eller nettleseren lukkes.",
    description_en:
      "Similar to LocalStorage, but data is deleted when the tab or browser window is closed.",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage",
  },
  {
    term: "SPA",
    aliases: ["Single Page Application"],
    category: "Arkitektur",
    description:
      "App som laster én HTML-side og oppdaterer innhold dynamisk uten full sideskift.",
    description_en:
      "App that loads an HTML page and updates content dynamically without full page reload.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/SPA",
  },
  {
    term: "SSR",
    aliases: ["Server-Side Rendering"],
    category: "Arkitektur",
    description:
      "HTML genereres på serveren for rask first paint og bedre SEO; hydreres av klienten etterpå.",
    description_en:
      "HTML is generated on the server for fast first paint and better SEO; hydrates on the client afterwards.",
    link: "https://web.dev/articles/rendering-on-the-web#server-rendering",
  },
  {
    term: "State",
    aliases: ["Tilstand"],
    category: "React",
    description:
      "Internt minne i en komponent som kan endres over tid og trigger re-render når det oppdateres.",
    description_en:
      "Internal state in a component that can be changed over time and trigger re-render when updated.",
    example: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Klikk: {count}</button>;\n}`,
    link: "https://react.dev/learn/state-a-components-memory",
  },
  {
    term: "Tailwind CSS",
    aliases: ["Tailwind"],
    category: "CSS",
    description:
      "Utility-first CSS-rammeverk der du styler med klasser direkte i markup (f.eks. p-4, rounded-xl).",
    description_en:
      "Utility-first CSS framework where you style with classes directly in markup (e.g. p-4, rounded-xl).",
    example: `<button className="px-4 py-2 rounded-xl shadow">Lagre</button>`,
    link: "https://tailwindcss.com/docs/utility-first",
  },
  {
    term: "Throttling",
    aliases: [],
    category: "JavaScript",
    description:
      "Mønster som sørger for at en funksjon kun kjører maks én gang per tidsintervall.",
    description_en:
      "Pattern that ensures a function runs at most once per time interval.",
    example: `import { throttle } from 'lodash';\n\nconst throttled = throttle(() => console.log('Throttled!'), 1000);\nthrottled();`,
    link: "https://lodash.com/docs/4.17.15#throttle",
  },
  {
    term: "TypeScript",
    aliases: ["TS"],
    category: "JavaScript",
    description:
      "Et superset av JavaScript som legger til statiske typer og gjør koden mer robust.",
    description_en:
      "A superset of JavaScript that adds static types and makes code more robust.",
    example: `function add(a: number, b: number): number {\n  return a + b;\n}`,
    link: "https://www.typescriptlang.org/docs/handbook/intro.html",
  },
  {
    term: "Unit Test",
    aliases: ["Enhetstest"],
    category: "Testing",
    description:
      "Test av en isolert funksjon eller komponent for å verifisere at den fungerer som forventet.",
    description_en:
      "Test of an isolated function or component to verify that it works as expected.",
    example: `test('2 + 2 = 4', () => {\n  expect(2 + 2).toBe(4);\n});`,
    link: "https://en.wikipedia.org/wiki/Unit_testing",
  },
  {
    term: "useEffect",
    aliases: [],
    category: "React",
    description:
      "Hook som kjører side-effekter i komponenter, f.eks. datahenting eller manipulering av DOM etter render.",
    description_en:
      "Hook that runs side-effects in components, e.g. data fetching or DOM manipulation after render.",
    example: `useEffect(() => {\n  document.title = 'Ny tittel';\n}, []);`,
    link: "https://react.dev/reference/react/useEffect",
  },
  {
    term: "useMemo",
    aliases: [],
    category: "React",
    description:
      "Hook som memoriserer verdier for å unngå unødvendige beregninger mellom renders.",
    description_en:
      "Hook that memoizes values to avoid unnecessary calculations between renders.",
    example: `const expensive = useMemo(() => compute(data), [data]);`,
    link: "https://react.dev/reference/react/useMemo",
  },
  {
    term: "useReducer",
    aliases: [],
    category: "React",
    description:
      "Hook for state management i en komponent med mer kompleks logikk enn useState.",
    description_en:
      "Hook for state management in a component with more complex logic than useState.",
    example: `const [state, dispatch] = useReducer(reducer, initialState);\n\nfunction reducer(state, action) {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + 1 };\n    default:\n      return state;\n  }\n}`,
    link: "https://react.dev/reference/react/useReducer",
  },
  {
    term: "useRef",
    aliases: [],
    category: "React",
    description:
      "Hook som brukes til å lagre mutable verdier som ikke trigger re-render, eller for å referere til DOM-elementer.",
    description_en:
      "Hook used to store mutable values that don't trigger re-render, or for referencing DOM elements.",
    example: `import { useRef } from 'react';\n\nfunction InputFocus() {\n  const inputRef = useRef();\n  return (\n    <>\n      <input ref={inputRef} />\n      <button onClick={() => inputRef.current.focus()}>Fokuser</button>\n    </>\n  );\n}`,
    link: "https://react.dev/reference/react/useRef",
  },
  {
    term: "Vite",
    aliases: [],
    category: "Verktøy",
    description:
      "Byggeverktøy for moderne frontend-prosjekter som gir rask utviklingsserver og optimalisert build.",
    description_en:
      "Build tool for modern frontend projects that gives fast development server and optimized build.",
    link: "https://vitejs.dev/guide/",
  },
  {
    term: "Virtual DOM",
    aliases: ["VDOM"],
    category: "React",
    description:
      "Et lettvekts-objekttre av UI-et som React bruker for å finne minimale endringer som må gjøres i ekte DOM.",
    description_en:
      "A lightweight object of UI that React uses to find minimal changes that must be made to the real DOM.",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/Virtual_DOM",
  },
  {
    term: "Webpack",
    aliases: [],
    category: "Verktøy",
    description:
      "Modul-bundler for JavaScript som lar deg bruke import/eksport og pakke alt i en fil for nettleseren.",
    description_en:
      "Module bundler for JavaScript that lets you use import/export and package everything into a file for the browser.",
    link: "https://webpack.js.org/concepts/",
  },
  {
    term: "Zustand",
    aliases: [],
    category: "State Management",
    description:
      "Et lettvekts state management-bibliotek for React som er enklere enn Redux.",
    description_en:
      "A lightweight state management library for React that is easier than Redux.",
    link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
];
