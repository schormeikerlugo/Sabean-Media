// Scroll-reveal + magnetic hover + parallax utilities.

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const initReveal = () => {
  const reveals = document.querySelectorAll<HTMLElement>(".reveal");
  if (!reveals.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  reveals.forEach((el) => io.observe(el));
};

const initCountUp = () => {
  const counters = document.querySelectorAll<HTMLElement>("[data-countup]");
  if (!counters.length || prefersReducedMotion) {
    counters.forEach((el) => {
      el.textContent = el.dataset.countup ?? el.textContent;
    });
    return;
  }

  const animate = (el: HTMLElement) => {
    const target = parseInt(el.dataset.countup ?? "0", 10);
    const suffix = el.dataset.suffix ?? "";
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toString() + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toString() + suffix;
    };
    requestAnimationFrame(step);
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => io.observe(el));
};

const initParallax = () => {
  if (prefersReducedMotion) return;
  const items = document.querySelectorAll<HTMLElement>("[data-parallax]");
  if (!items.length) return;

  const onScroll = () => {
    const y = window.scrollY;
    items.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax ?? "0.2");
      el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
};

const initNav = () => {
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!nav) return;
  const update = () => {
    if (window.scrollY > 40) nav.dataset.scrolled = "true";
    else delete nav.dataset.scrolled;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();

  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-nav-menu]");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.dataset.open === "true";
      menu.dataset.open = (!open).toString();
      toggle.setAttribute("aria-expanded", (!open).toString());
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.dataset.open = "false";
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }
};

const initCursor = () => {
  if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
  const cursor = document.querySelector<HTMLElement>("[data-cursor]");
  if (!cursor) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;

  window.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  });

  const loop = () => {
    x += (tx - x) * 0.15;
    y += (ty - y) * 0.15;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();

  document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
  });
};

const onReady = (fn: () => void) => {
  if (document.readyState !== "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
};

onReady(() => {
  initReveal();
  initCountUp();
  initParallax();
  initNav();
  initCursor();
});
