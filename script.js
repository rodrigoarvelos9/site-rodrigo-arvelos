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
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const objetivo = document.getElementById("objetivo").value;
    const patrimonio = document.getElementById("patrimonio").value;

    // Registra o lead no Notion em segundo plano — sendBeacon garante
    // que o envio continua mesmo com o redirecionamento pro WhatsApp
    // acontecendo na sequência.
    try {
      const payload = JSON.stringify({ nome, whatsapp, objetivo, patrimonio });
      navigator.sendBeacon("/api/lead", new Blob([payload], { type: "application/json" }));
    } catch (err) {
      console.error("Não foi possível registrar o lead:", err);
    }

    const mensagem =
      `Olá, Rodrigo! Me chamo ${nome}.\n` +
      `Meu WhatsApp: ${whatsapp}.\n` +
      `Objetivo principal: ${objetivo}.\n` +
      (patrimonio ? `Faixa de patrimônio: ${patrimonio}.\n` : "") +
      `Vim pelo site e gostaria de agendar uma conversa.`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    document.getElementById("form-state").style.display = "none";
    const thanks = document.getElementById("thanks");
    thanks.style.display = "block";
    document.getElementById("waFallback").href = url;

    // tenta abrir automaticamente
    window.location.href = url;
  });
}

// ============================================================
// Mobile nav: simplifica header em telas pequenas (sem JS extra necessário
// hoje, mas o hook fica pronto caso adicione um menu hamburguer depois)
// ============================================================
