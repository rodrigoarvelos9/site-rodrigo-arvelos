// ============================================================
// Recebe os dados do formulário de captura e grava como uma
// página nova na base "Leads — Site" do seu Notion.
//
// Configuração necessária na Vercel (Project Settings > Environment
// Variables) — veja o passo a passo enviado junto com este código:
//   NOTION_TOKEN        -> secret da sua integração interna do Notion
//   NOTION_DATABASE_ID  -> 8c2f2a3ef0b94509a65dbad5480f00ba
//
// A base já foi criada com as colunas certas (Nome, WhatsApp,
// Objetivo, Faixa de patrimônio, Status) — não precisa recriar nada
// no Notion, só compartilhar a base com a integração (passo 3 do guia).
// ============================================================

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  let data = req.body;
  if (typeof data === "string") {
    try { data = JSON.parse(data); } catch { data = {}; }
  }
  data = data || {};

  const { nome, whatsapp, objetivo, patrimonio } = data;

  if (!nome || !whatsapp) {
    return res.status(400).json({ error: "Nome e WhatsApp são obrigatórios" });
  }

  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

  if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
    console.error("Notion não configurado: faltam variáveis de ambiente.");
    // Não trava o fluxo do usuário — o WhatsApp continua funcionando
    // normalmente. Isso só fica registrado no log da Vercel.
    return res.status(200).json({ ok: false, reason: "notion_not_configured" });
  }

  const properties = {
    "Nome": { title: [{ text: { content: String(nome).slice(0, 200) } }] },
    "WhatsApp": { phone_number: String(whatsapp).slice(0, 100) },
  };
  if (objetivo) properties["Objetivo"] = { select: { name: String(objetivo).slice(0, 100) } };
  if (patrimonio) properties["Faixa de patrimônio"] = { select: { name: String(patrimonio).slice(0, 100) } };

  try {
    const notionRes = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties,
      }),
    });

    if (!notionRes.ok) {
      const errText = await notionRes.text();
      console.error("Erro do Notion:", notionRes.status, errText);
      return res.status(200).json({ ok: false, reason: "notion_error" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erro ao chamar o Notion:", err);
    return res.status(200).json({ ok: false, reason: "exception" });
  }
}
