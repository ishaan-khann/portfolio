import React from "react";

// Official GitHub Octocat
export function GithubIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// Official LinkedIn Mark
export function LinkedinIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// Official React Atom Logo
export function ReactIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// Official Next.js Logo
export function NextjsIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 180 180"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="var(--background)"
      />
      <path d="M115 54H127V126H115V54Z" fill="var(--background)" />
    </svg>
  );
}

// Official TypeScript Logo
export function TypescriptIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, borderRadius: "2px", ...style }}
      aria-hidden="true"
    >
      <rect width="24" height="24" rx="4" fill="#3178c6" />
      <path d="M11.5 9H6.5V10.5H8.25V18H9.75V10.5H11.5V9Z" fill="white" />
      <path
        d="M13.5 15.5C13.9 16.2 14.6 16.6 15.6 16.6C16.8 16.6 17.6 16 17.6 15.1C17.6 14.2 17 13.7 15.5 13.1C13.6 12.3 12.8 11.6 12.8 10.2C12.8 8.7 14 7.7 15.7 7.7C17 7.7 18 8.3 18.6 9.4L17.2 10.3C16.8 9.6 16.3 9.2 15.6 9.2C14.7 9.2 14.3 9.6 14.3 10.2C14.3 10.8 14.7 11.1 16 11.7C17.9 12.5 19.1 13.3 19.1 15C19.1 16.8 17.7 18 15.6 18C14.1 18 13 17.3 12.3 16.1L13.5 15.5Z"
        fill="white"
      />
    </svg>
  );
}

// Official Python Dual-Snake Logo
export function PythonIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M11.922 2c-3.109 0-2.915 1.348-2.915 1.348l.004 1.396h2.955v.42H6.01s-1.99.227-1.99 2.923c0 2.696 1.737 2.825 1.737 2.825h1.036v-1.488s-.057-1.745 1.717-1.745h2.956V6.262S11.66 4.34 14.63 4.34h.02s1.716.035 1.716-1.688C16.366 1.487 14.996 2 11.922 2zm-1.65 1.018a.64.64 0 110 1.28.64.64 0 010-1.28z"
        fill="#3776ab"
      />
      <path
        d="M12.078 22c3.109 0 2.915-1.348 2.915-1.348l-.004-1.396h-2.955v-.42h5.956s1.99-.227 1.99-2.923c0-2.696-1.737-2.825-1.737-2.825h-1.036v1.488s-.057 1.745-1.717 1.745H12.53v2.417s-.194 1.922-3.164 1.922h-.02s-1.716-.035-1.716 1.688c0 1.165 1.37.652 4.448.652zm1.65-1.018a.64.64 0 110-1.28.64.64 0 010 1.28z"
        fill="#ffd43b"
      />
    </svg>
  );
}

// Official Node.js Logo
export function NodeIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path d="M12 2L3 7.2v10.4L12 22.8l9-5.2V7.2L12 2z" fill="#339933" />
      <path d="M12 4.1L5 8.1v8.6l7 4.1 7-4.1V8.1L12 4.1z" fill="#026e00" />
      <path
        d="M12 17.5c-2.8 0-4.5-1.4-4.5-3.5h2c0 1.2.9 1.8 2.5 1.8 1.5 0 2.3-.6 2.3-1.6 0-.9-.7-1.3-2.1-1.6l-1.1-.3C9.3 11.9 8.2 11 8.2 9.5c0-1.8 1.6-3.2 3.8-3.2 2.4 0 4.1 1.2 4.2 3.1h-2c-.1-1-.8-1.5-2.2-1.5-1.3 0-2.1.6-2.1 1.5 0 .8.6 1.2 1.8 1.5l1.2.3c2.1.5 3.1 1.4 3.1 3 0 2-1.7 3.3-4 3.3z"
        fill="white"
      />
    </svg>
  );
}

// Official n8n Workflow Automation Logo
export function N8nIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <circle cx="5" cy="12" r="3" fill="#ea4b71" />
      <circle cx="19" cy="6" r="3" fill="#ea4b71" />
      <circle cx="19" cy="18" r="3" fill="#ea4b71" />
      <path d="M5 12h6.5l4-6h3.5M11.5 12l4 6h3.5" stroke="#ea4b71" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Official Tailwind CSS Logo
export function TailwindIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38bdf8"
      />
    </svg>
  );
}

// Official Vite Logo
export function ViteIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path d="M21.5 4.5l-9.3 17.2a.5.5 0 01-.9 0L2.5 4.5a.5.5 0 01.6-.7l8.6 3.7a.5.5 0 00.4 0l8.8-3.7a.5.5 0 01.6.7z" fill="#bd34fe" />
      <path d="M12.9 8.2l-3.5 6.9 2.8-.5-1.5 4.6 5.3-7.2-3.1.6 1.8-4.4z" fill="#ffea83" />
    </svg>
  );
}

// Official PostgreSQL Elephant Logo
export function PostgresIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 3.8 2.1 7.1 5.3 8.7.4.1.6-.2.6-.4v-1.5c-2.3.5-2.8-1.1-2.8-1.1-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7.1-.5.3-.9.5-1.1-1.8-.2-3.7-.9-3.7-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3.7 0 1.4.1 2 .3 1.5-1 2.2-.8 2.2-.8.5 1.2.2 2 .1 2.2.6.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.6V20c0 .2.2.5.6.4C19.9 19.1 22 15.8 22 12c0-5.52-4.48-10-10-10z"
        fill="#336791"
      />
    </svg>
  );
}

// Crisp Vector Mail Icon
export function MailIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// Crisp Vector Phone Icon
export function PhoneIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

// AI Sparkles / Autonomous Agents Icon
export function SparklesIcon({ size = 16, className = "", style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0, ...style }}
      aria-hidden="true"
    >
      <path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4L12 2z" />
    </svg>
  );
}
