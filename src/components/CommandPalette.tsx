import { useState, useEffect, useRef, useCallback } from "react";
import Fuse from "fuse.js";

type ItemType = "page" | "social" | "project" | "post";

interface PaletteItem {
  id: string;
  label: string;
  description?: string;
  url: string;
  type: ItemType;
  external?: boolean;
}

const ALL_ITEMS: PaletteItem[] = [
  { id: "home", label: "Home", description: "Back to start", url: "/", type: "page" },
  { id: "projects", label: "Projects", description: "Things I've built", url: "/projects/", type: "page" },
  { id: "posts", label: "Blog", description: "Writing & notes", url: "/posts/", type: "page" },
  { id: "about", label: "About", description: "Who I am", url: "/about/", type: "page" },
  { id: "search", label: "Search", description: "Search posts", url: "/search/", type: "page" },
  { id: "proj-tribit", label: "Tribit", description: "Visual git worktree manager with embedded AI terminal", url: "https://github.com/ritikrana4/tribit", type: "project", external: true },
  { id: "proj-mapper", label: "@rtkstack/mapper", description: "React TypeScript component for creating field mappings", url: "/projects/", type: "project" },
  { id: "post-ai", label: "AI Agents Mental Model", description: "A Simple AI Agents Mental Model That Actually Works", url: "/posts/ai-agents-mental-model/", type: "post" },
  { id: "post-headless", label: "Build your own Headless UI Component", description: "Build lightweight, customizable UI components", url: "/posts/create-headless-ui-component/", type: "post" },
  { id: "post-template", label: "JavaScript Template Literals", description: "Explore JavaScript template literals and tagged templates", url: "/posts/javascript-template-literals/", type: "post" },
  { id: "post-engineer", label: "The New Engineer", description: "The future of software engineering in the AI era", url: "/posts/the-new-engineer/", type: "post" },
  { id: "post-rebase", label: "Why git rebase", description: "How git rebase saved my sanity and commit history", url: "/posts/why-git-rebase/", type: "post" },
  { id: "github", label: "GitHub", description: "github.com/ritikrana4", url: "https://github.com/ritikrana4", type: "social", external: true },
  { id: "linkedin", label: "LinkedIn", description: "linkedin.com/in/ritikrana", url: "https://www.linkedin.com/in/ritikrana/", type: "social", external: true },
  { id: "instagram", label: "Instagram", description: "instagram.com/ritik.r9", url: "https://www.instagram.com/ritik.r9/", type: "social", external: true },
  { id: "email", label: "Email", description: "ritikrana4@gmail.com", url: "mailto:ritikrana4@gmail.com", type: "social", external: true },
];

const TYPE_ORDER: ItemType[] = ["page", "project", "post", "social"];
const TYPE_LABELS: Record<ItemType, string> = {
  page: "Navigation",
  social: "Social",
  project: "Projects",
  post: "Posts",
};
const TYPE_ICONS: Record<ItemType, string> = {
  page: "→",
  social: "↗",
  project: "◈",
  post: "✦",
};

const fuse = new Fuse(ALL_ITEMS, {
  keys: ["label", "description"],
  threshold: 0.4,
});

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const results: PaletteItem[] = query
    ? fuse.search(query).map((r) => r.item)
    : ALL_ITEMS;

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSelected(0);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  const navigate = useCallback(
    (item: PaletteItem) => {
      close();
      if (item.external) {
        window.open(item.url, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = item.url;
      }
    },
    [close]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open ? close() : openPalette();
      }
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && results[selected]) {
        navigate(results[selected]);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, selected, results, close, openPalette, navigate]);

  useEffect(() => {
    const handleEvent = () => openPalette();
    window.addEventListener("open-palette", handleEvent);
    return () => window.removeEventListener("open-palette", handleEvent);
  }, [openPalette]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 10);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-idx="${selected}"]`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [selected]);

  if (!open) return null;

  const grouped = !query
    ? TYPE_ORDER.reduce(
        (acc, type) => {
          const items = results.filter((i) => i.type === type);
          if (items.length) acc.push({ type, items });
          return acc;
        },
        [] as { type: ItemType; items: PaletteItem[] }[]
      )
    : null;

  let runningIdx = 0;

  return (
    <>
      <div className="palette-backdrop" onClick={close} />
      <div
        className="palette-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="palette-header">
          <svg
            className="palette-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            ref={inputRef}
            className="palette-input"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="palette-esc-key" onClick={close}>
            esc
          </kbd>
        </div>

        <div className="palette-list" ref={listRef}>
          {results.length === 0 ? (
            <div className="palette-empty">No results for "{query}"</div>
          ) : grouped ? (
            grouped.map(({ type, items }) => (
              <div key={type} className="palette-group">
                <div className="palette-group-label">{TYPE_LABELS[type]}</div>
                {items.map((item) => {
                  const idx = runningIdx++;
                  return (
                    <button
                      key={item.id}
                      data-idx={idx}
                      className={`palette-item${selected === idx ? " palette-item-selected" : ""}`}
                      onClick={() => navigate(item)}
                      onMouseEnter={() => setSelected(idx)}
                    >
                      <span className="palette-item-icon">
                        {TYPE_ICONS[item.type]}
                      </span>
                      <span className="palette-item-content">
                        <span className="palette-item-label">{item.label}</span>
                        {item.description && (
                          <span className="palette-item-desc">
                            {item.description}
                          </span>
                        )}
                      </span>
                      {item.external && (
                        <span className="palette-ext-badge">↗</span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          ) : (
            results.map((item, idx) => (
              <button
                key={item.id}
                data-idx={idx}
                className={`palette-item${selected === idx ? " palette-item-selected" : ""}`}
                onClick={() => navigate(item)}
                onMouseEnter={() => setSelected(idx)}
              >
                <span className="palette-item-icon">
                  {TYPE_ICONS[item.type]}
                </span>
                <span className="palette-item-content">
                  <span className="palette-item-label">{item.label}</span>
                  {item.description && (
                    <span className="palette-item-desc">{item.description}</span>
                  )}
                </span>
                {item.external && (
                  <span className="palette-ext-badge">↗</span>
                )}
              </button>
            ))
          )}
        </div>

        <div className="palette-footer">
          <span>
            <kbd>↑↓</kbd> navigate
          </span>
          <span>
            <kbd>↵</kbd> open
          </span>
          <span>
            <kbd>esc</kbd> close
          </span>
        </div>
      </div>
    </>
  );
}
