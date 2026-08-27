// ============================================================
// Número de WhatsApp de contato (código do país + DDD + número)
// ============================================================
const WHATSAPP_NUMBER = "5521992371317";

// Botão "Falar no WhatsApp" (contato direto, fora do formulário)
const waDirect = document.getElementById("waDirect");
if (waDirect) {
  const msg = "Olá, Rodrigo! Vim pelo site e gostaria de falar sobre planejamento patrimonial.";
  waDirect.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const form = document.getElementById("leadForm");
if (form) {
  const fields = {
    nome: document.getElementById("nome"),
    whatsapp: document.getElementById("whatsapp"),
    objetivo: document.getElementById("objetivo"),
  };
  const consent = document.getElementById("consent");
  const submitBtn = form.querySelector("button[type='submit']");

  const wrapOf = (el) => el.closest(".field") || el.closest(".consent");
  const clear = (el) => { const w = wrapOf(el); if (w) w.classList.remove("bad"); el.removeAttribute("aria-invalid"); };
  const flag = (el) => { const w = wrapOf(el); if (w) w.classList.add("bad"); el.setAttribute("aria-invalid", "true"); };

  Object.values(fields).forEach((el) => {
    el.addEventListener("input", () => clear(el));
    el.addEventListener("change", () => clear(el));
  });
  consent.addEventListener("change", () => clear(consent));

  // Só dígitos contam: (21) 9 9999-9999 tem 11; sem o 9 extra, 10.
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

    // Registra o lead no Notion (base "Leads — Site") via /api/lead.
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

    submitBtn.setAttribute("aria-busy", "true");
    submitBtn.textContent = "Abrindo WhatsApp…";

    document.getElementById("form-state").style.display = "none";
    const thanks = document.getElementById("thanks");
    thanks.style.display = "block";
    document.getElementById("waFallback").href = url;
    thanks.querySelector("h2").focus();

    // tenta abrir automaticamente
    window.location.href = url;
  });
}

// ============================================================
// Mobile nav: simplifica header em telas pequenas (sem JS extra necessário
// hoje, mas o hook fica pronto caso adicione um menu hamburguer depois)
// ============================================================
