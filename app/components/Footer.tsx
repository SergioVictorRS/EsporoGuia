// app/components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-2xl flex items-center justify-center text-2xl">
            🌿
          </div>
          <span className="text-3xl font-bold tracking-tight">EsporoGuia</span>
        </div>

        <p className="text-emerald-300 mb-8 max-w-md mx-auto">
          Um projeto educativo sobre a esporotricose. 
          Informações baseadas em estudos científicos.
        </p>

        <p className="text-sm text-emerald-400">
          © 2026 EsporoGuia • Feito para conscientização de todos os brasileiros
        </p>
      </div>
    </footer>
  );
}