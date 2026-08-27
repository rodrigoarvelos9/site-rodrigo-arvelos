// ============================================================
// Número de WhatsApp de contato (código do país + DDD + número)
// ============================================================
const WHATSAPP_NUMBER = "5521992371317";

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ============================================================
// O único momento autorado: o estilete percorre o tambor uma vez.
// O traço já está visível no HTML; só armamos a varredura se o
// navegador puder medi-la e o visitante não tiver pedido menos motion.
// ============================================================
if (!reduced) {
  document.querySelectorAll(".trace-figure .trace-line").forEach((path) => {
    if (typeof path.getTotalLength !== "function") return;
    const len = path.getTotalLength();
    if (!len) return;
    path.style.setProperty("--len", len);
    path.closest(".trace-figure").classList.add("armed");
  });
}

// ============================================================
// A linha de posição: diz sempre onde é o agora dentro do registro.
// ============================================================
const now = document.getElementById("now");
if (now) {
  let ticking = false;
  const place = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? window.scrollY / max : 0;
    const travel = window.innerHeight - 2;
    now.style.transform = `translateY(${(pct * travel).toFixed(1)}px)`;
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(place); }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  place();
}

// ============================================================
// Estação ativa na navegação
// ============================================================
const marks = Array.from(document.querySelectorAll("nav.stations a[href^='#']"));
if (marks.length && "IntersectionObserver" in window) {
  const seen = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      marks.forEach((m) => m.classList.toggle("act", m.hash === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  marks.forEach((m) => {
    const sec = document.querySelector(m.hash);
    if (sec) seen.observe(sec);
  });
}

// ============================================================
// Botão "WhatsApp direto" (contato fora do formulário)
// ============================================================
const waDirect = document.getElementById("waDirect");
if (waDirect) {
  const msg = "Olá, Rodrigo! Vim pelo site e gostaria de falar sobre planejamento patrimonial.";
  waDirect.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ============================================================
// Registro de contato: monta a mensagem e abre o WhatsApp.
// ============================================================
const form = document.getElementById("leadForm");
if (form) {
  const fields = {
    nome: document.getElementById("nome"),
    whatsapp: document.getElementById("whatsapp"),
    objetivo: document.getElementById("objetivo"),
  };
  const consent = document.getElementById("consent");
  const submit = form.querySelector("button[type='submit']");

  const wrapOf = (el) => el.closest(".field") || el.closest(".consent");

  const clear = (el) => {
    const w = wrapOf(el);
    if (w) w.classList.remove("bad");
    el.removeAttribute("aria-invalid");
  };
  const flag = (el) => {
    const w = wrapOf(el);
    if (w) w.classList.add("bad");
    el.setAttribute("aria-invalid", "true");
  };

  Object.values(fields).forEach((el) => {
    el.addEventListener("input", () => clear(el));
    el.addEventListener("change", () => clear(el));
  });
  consent.addEventListener("change", () => clear(consent));

  // Só dígitos contam: (21) 9 9999-9999 tem 11, sem o 9 extra tem 10.
  const phoneOk = (v) => v.replace(/\D/g, "").length >= 10;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = fields.nome.value.trim();
    const whatsapp = fields.whatsapp.value.trim();
    const objetivo = fields.objetivo.value;
    const patrimonioEl = document.getElementById("patrimonio");
    const patrimonio = patrimonioEl ? patrimonioEl.value : "";

    let first = null;
    if (!nome) { flag(fields.nome); first = first || fields.nome; }
    if (!phoneOk(whatsapp)) { flag(fields.whatsapp); first = first || fields.whatsapp; }
    if (!objetivo) { flag(fields.objetivo); first = first || fields.objetivo; }
    if (!consent.checked) { flag(consent); first = first || consent; }

    if (first) { first.focus(); return; }

    // Grava o lead no Notion (base "Leads — Site") via /api/lead, em segundo
    // plano. sendBeacon garante o envio mesmo com o redirect pro WhatsApp logo
    // em seguida. Se o backend não estiver configurado, o fluxo não trava.
    try {
      const payload = JSON.stringify({ nome, whatsapp, objetivo, patrimonio });
      navigator.sendBeacon("/api/lead", new Blob([payload], { type: "application/json" }));
    } catch (err) {
      console.error("Não foi possível registrar o lead:", err);
    }

    // Patrimônio é opcional: só entra na mensagem quando informado.
    const mensagem =
      `Olá, Rodrigo! Me chamo ${nome}.\n` +
      `Meu WhatsApp: ${whatsapp}.\n` +
      `Objetivo principal: ${objetivo}.\n` +
      (patrimonio ? `Faixa de patrimônio: ${patrimonio}.\n` : "") +
      `Vim pelo site e gostaria de agendar uma conversa.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    submit.setAttribute("aria-busy", "true");
    submit.textContent = "Abrindo WhatsApp…";

    document.getElementById("form-state").style.display = "none";
    const logged = document.getElementById("logged");
    logged.style.display = "block";
    document.getElementById("waFallback").href = url;
    logged.querySelector("h2").focus();

    // tenta abrir automaticamente
    window.location.href = url;
  });
}
