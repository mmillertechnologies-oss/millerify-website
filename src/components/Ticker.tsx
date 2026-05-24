'use client'

const tools = [
  'OpenAI', 'Claude', 'HubSpot', 'Salesforce', 'AWS', 'Snowflake',
  'LangChain', 'Power BI', 'Kubernetes', 'Terraform', 'Python',
  'Databricks', 'Azure', 'N8N', 'Zapier', 'Pipedrive', 'Zoho CRM',
  'Slack', 'Google Cloud', 'Stripe', 'QuickBooks', 'Twilio',
  'Monday.com', 'Notion', 'Airtable', 'DocuSign',
]

function Badge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/8 bg-white/[0.03] flex-shrink-0">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-500/60" />
      <span className="text-xs font-semibold tracking-wide uppercase text-[#6b7280]">
        {name}
      </span>
    </div>
  )
}

export default function Ticker() {
  const doubled = [...tools, ...tools]

  return (
    <section className="py-6 relative overflow-hidden bg-[#0a0b0c]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0b0c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0b0c] to-transparent z-10 pointer-events-none" />

      <div className="ticker-track overflow-hidden">
        <div className="flex gap-3 w-max animate-scroll-left">
          {doubled.map((name, i) => (
            <Badge key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  )
}
