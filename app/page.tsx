"use client";

import { useState } from "react";
import Image from "next/image";
import { contact, projects, services, type Service } from "./data";

type Page = "home" | "services" | "work" | "contact";

const Icon = ({ name, size = 24 }: { name: string; size?: number }) => {
  const paths: Record<string, React.ReactNode> = {
    whatsapp: (
      <path
        fill="currentColor"
        stroke="none"
        d="M12.04 2a9.9 9.9 0 0 0-8.5 14.98L2 22l5.16-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.02a8.1 8.1 0 0 1-4.14-1.14l-.3-.18-3.06.89.95-2.98-.2-.31a8.1 8.1 0 1 1 6.75 3.72Zm4.45-6.06c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-1.4-.7-2.32-1.25-3.25-2.83-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.52.58.18 1.1.15 1.52.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"
      />
    ),
    menu: (
      <>
        <path d="M3 6h18M3 12h18M3 18h18" />
      </>
    ),
    close: (
      <>
        <path d="m5 5 14 14M19 5 5 19" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    mic: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M6.5 11a5.5 5.5 0 0 0 11 0M12 17v4M8 21h8" />
      </>
    ),
    sliders: (
      <>
        <path d="M5 4v16M12 4v16M19 4v16" />
        <path d="M3 8h4M10 15h4M17 10h4" />
      </>
    ),
    wave: <path d="M3 13h4l2-8 4 15 3-10h5" />,
    music: (
      <>
        <path d="M9 18V6l10-2v12" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="16" cy="16" r="3" />
      </>
    ),
    arrange: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M12 4v16M4 10h8m0 4h8" />
      </>
    ),
    scissors: (
      <>
        <circle cx="6" cy="7" r="3" />
        <circle cx="6" cy="17" r="3" />
        <path d="m8.5 8.5 10 10M8.5 15.5l10-10" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6m-6 4h6" />
      </>
    ),
    keys: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M7 4v10m3-10v10m4-10v10m3-10v10M4 14h16" />
      </>
    ),
    home: <path d="m3 10 9-7 9 7v10h-6v-6H9v6H3z" />,
    headphones: (
      <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14v4h3v-5H4m16 2v4h-3v-5h3" />
    ),
    equalizer: <path d="M5 8v8m4-12v16m5-12v8m5-13v18" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    play: <path fill="currentColor" stroke="none" d="m9 6 9 6-9 6z" />,
    external: (
      <>
        <path d="M14 4h6v6M20 4l-9 9" />
        <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

const WhatsAppButton = () => (
  <a
    className="whatsapp-btn"
    href={contact.whatsappUrl}
    target="_blank"
    rel="noreferrer"
  >
    <Icon name="whatsapp" size={19} />
    Chat on WhatsApp
  </a>
);
const SectionIntro = ({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) => (
  <div className="intro">
    <span className="eyebrow">{eyebrow}</span>
    <h1>{title}</h1>
    <i />
    <p>{text}</p>
  </div>
);

export default function Site() {
  const [page, setPage] = useState<Page>("home");
  const [menu, setMenu] = useState(false);
  const go = (to: Page) => {
    setPage(to);
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Header page={page} go={go} openMenu={() => setMenu(true)} />
      {page === "home" && <Home go={go} />}{" "}
      {page === "services" && <Services />} {page === "work" && <Work />}{" "}
      {page === "contact" && <Contact />}
      <Footer go={go} />
      {menu && <MobileMenu close={() => setMenu(false)} go={go} />}
    </>
  );
}

function Header({
  page,
  go,
  openMenu,
}: {
  page: Page;
  go: (x: Page) => void;
  openMenu: () => void;
}) {
  return (
    <header>
      <button className="brand" onClick={() => go("home")}>
        THIRD EYE MUSIC
      </button>
      <nav>
        {(["home", "services", "work", "contact"] as Page[]).map((x) => (
          <button
            className={page === x ? "active" : ""}
            onClick={() => go(x)}
            key={x}
          >
            {x === "home" ? "Home" : x[0].toUpperCase() + x.slice(1)}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <a className="header-whatsapp" href={contact.whatsappUrl}>
          <Icon name="whatsapp" size={18} />
          WhatsApp
        </a>
        <button
          className="menu-btn"
          onClick={openMenu}
          aria-label="Open navigation"
        >
          <Icon name="menu" size={31} />
        </button>
      </div>
    </header>
  );
}

function Hero({ page }: { page: Page }) {
  const copy =
    page === "services"
      ? [
          "SERVICES",
          "What we do",
          "Professional music services to help bring your ideas to life.",
        ]
      : page === "work"
        ? [
            "OUR WORK",
            "Selected work",
            "A collection of music produced, recorded and crafted at Third Eye Music.",
          ]
        : [
            "CONTACT",
            "Have a project in mind?",
            "Let’s talk about your music. Reach out on WhatsApp or drop us an email. We’ll get back to you as soon as possible.",
          ];
  return (
    <section className={"inner-hero " + page}>
      <SectionIntro eyebrow={copy[0]} title={copy[1]} text={copy[2]} />
    </section>
  );
}

function Home({ go }: { go: (x: Page) => void }) {
  return (
    <main>
      <section className="home-hero">
        <div>
          <h1>
            THIRD EYE
            <br />
            MUSIC
          </h1>
          <i />
          <p>
            Music, recorded and
            <br />
            produced with intention.
          </p>
          <span>Recording　•　Music Production　•　Vocal Pitching</span>
          <div className="hero-buttons">
            <WhatsAppButton />
            <button className="text-link" onClick={() => go("work")}>
              View our work <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
      </section>
      <section className="services-preview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Services</h2>
          </div>
          <div>
            <button className="text-link" onClick={() => go("services")}>
              View all services <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
        <div className="service-cards">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))}
        </div>
      </section>
      <Studio />
      <Cta />
    </main>
  );
}
function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="service-card">
      <Icon name={s.icon} size={40} />
      <h3>{s.title}</h3>
      <p>{s.description}</p>
    </article>
  );
}
function Studio() {
  return (
    <section className="studio">
      <div className="studio-head">
        <span className="eyebrow">
          <h1>OUR STUDIO</h1>
        </span>
        <p>
          A glimpse of the space
          <br />
          where ideas turn into music.
        </p>
      </div>
      <div className="gallery">
        <Image
          src="/e4953881-4c8f-459f-ae61-11c55f777240.png"
          alt="Music studio"
          width={600}
          height={400}
        />
        <Image
          src="/third-eye-music-recording-microphone.png"
          alt="Recording microphone"
          width={600}
          height={400}
        />
        <div className="video">
          <Image
            src="/third-eye-music-studio-wide.png"
            alt="Studio"
            fill
            sizes="(max-width: 700px) 90vw, 900px"
          />
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <main>
      <Hero page="services" />
      <section className="service-list">
        {services.map((s) => (
          <a
            className="service-list-item"
            href={`${contact.whatsappUrl}?text=${encodeURIComponent(s.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            key={s.number}
          >
            <span>{s.number}</span>
            <div className="service-icon">
              <Icon name={s.icon} size={29} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
            <Icon name="arrow" size={19} />
          </a>
        ))}
      </section>
      <Cta />
    </main>
  );
}
function Work() {
  return (
    <main>
      <Hero page="work" />
      <section className="work">
        <div className="projects">
          {projects.map((p) => (
            <article
              className={"project" + (p.url ? " has-link" : "")}
              key={p.title}
            >
              <div className="project-media">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 42vw, 225px"
                />
                {p.duration && <b>{p.duration}</b>}
              </div>
              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.artist}</p>
                <p>Type of work:　{p.work}</p>
              </div>
              {p.url && (
                <a
                  className="watch"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.platform === "YouTube"
                    ? "▰　Watch on YouTube"
                    : "◉　 Listen on Spotify"}
                  <Icon name="external" size={16} />
                </a>
              )}
            </article>
          ))}
        </div>
        <p className="more">✦　More projects coming soon.</p>
      </section>
      <Cta />
    </main>
  );
}
function Contact() {
  return (
    <main>
      <Hero page="contact" />
      <section className="contact-cards">
        <ContactCard icon="whatsapp" title="WhatsApp">
          <strong>{contact.phone}</strong>
          <WhatsAppButton />
        </ContactCard>
        <ContactCard icon="mail" title="Email">
          <p><a href={"mailto:" + contact.email}>{contact.email}</a></p>
        </ContactCard>
        <ContactCard icon="instagram" title="Instagram">
          <p>{contact.instagram}</p>
          <a
            className="visit"
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit Instagram <Icon name="external" size={16} />
          </a>
        </ContactCard>
      </section>
      <div className="collaboration">
        <span>
          <Icon name="equalizer" />
        </span>
        <p>
          We&apos;re always open to new ideas and collaborations.
          <br />
          Let&apos;s create something that connects.
        </p>
      </div>
    </main>
  );
}
function ContactCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="contact-card">
      <span>
        <Icon name={icon} size={31} />
      </span>
      <h2>{title}</h2>
      {children}
    </article>
  );
}
function Cta() {
  return (
    <section className="cta">
      <div>
        <h2>Have a project in mind?</h2>
        <p>Let&apos;s create something great together.</p>
      </div>
      <WhatsAppButton />
    </section>
  );
}
function Footer({ go: _go }: { go: (x: Page) => void }) {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-wordmark">THIRD EYE MUSIC</div>
        <div className="footer-links">
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" />
          </a>
          <a href={"mailto:" + contact.email}>
            <Icon name="mail" />
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            <Icon name="instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © Third Eye Music. All rights reserved.
      </div>
    </footer>
  );
}
function MobileMenu({
  close,
  go,
}: {
  close: () => void;
  go: (x: Page) => void;
}) {
  const links: [Page, string, string][] = [
    ["home", "home", "Home"],
    ["services", "headphones", "Services"],
    ["work", "equalizer", "Work"],
    ["contact", "mail", "Contact"],
  ];
  return (
    <div className="menu-overlay">
      <aside>
        <div className="drawer-brand">
          THIRD EYE MUSIC{" "}
          <button onClick={close}>
            <Icon name="close" size={35} />
          </button>
        </div>
        <div className="drawer-links">
          {links.map(([id, icon, label]) => (
            <button key={id} onClick={() => go(id)}>
              <Icon name={icon} size={34} />
              {label}
            </button>
          ))}
        </div>
        <WhatsAppButton />
        <div className="drawer-bottom">
          © Third Eye Music. All rights reserved.
        </div>
      </aside>
      <button aria-label="Close menu" onClick={close} />
    </div>
  );
}
