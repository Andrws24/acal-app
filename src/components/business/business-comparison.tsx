import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/section";
import { COMPARISON_ROWS, COMPARISON_COLUMNS } from "@/components/business/data";

function CellValue({ value }: { value: string }) {
  const lower = value.toLowerCase();

  if (lower.startsWith("no")) {
    return (
      <span className="inline-flex items-center gap-1.5 text-muted">
        <X className="w-4 h-4 text-red-400" />
        {value}
      </span>
    );
  }

  if (lower.includes("ilimitad") || lower.includes("incluid")) {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-text">
        <Check className="w-4 h-4 text-whatsapp" />
        {value}
      </span>
    );
  }

  return <span className="text-text">{value}</span>;
}

export function BusinessComparison() {
  return (
    <Section id="comparativa" background="white">
      <SectionHeader
        title="Qué incluye cada plan"
        subtitle="Compara de un vistazo y elige según el tamaño y necesidades de tu empresa."
      />

      <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-gray bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-gray">
              <th className="px-5 py-4 text-sm font-semibold text-muted">
                Característica
              </th>
              {COMPARISON_COLUMNS.map((column) => (
                <th
                  key={column.key}
                  className="px-5 py-4 text-base font-semibold text-primary"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((row, index) => (
              <tr
                key={row.label}
                className={cn(
                  "border-b border-gray/60 last:border-0",
                  index % 2 === 1 && "bg-background/60"
                )}
              >
                <td className="px-5 py-4 text-base font-medium text-text">
                  {row.label}
                </td>
                {COMPARISON_COLUMNS.map((column) => (
                  <td
                    key={column.key}
                    className="px-5 py-4 text-base"
                  >
                    <CellValue value={row[column.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-center text-sm text-muted max-w-2xl mx-auto">
        * El desplazamiento está incluido en zona urbana para los planes con
        visitas. Fuera de Bogotá y Medellín aplica recargo logístico.
      </p>
    </Section>
  );
}