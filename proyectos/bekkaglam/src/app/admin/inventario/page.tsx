"use client";

import { useState, useRef } from "react";
import { Upload, FileSpreadsheet, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function InventarioPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    success?: boolean;
    total?: number;
    creados?: number;
    actualizados?: number;
    errores?: string[];
    error?: string;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/inventario/importar", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "Error al subir archivo" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text mb-1">Inventario</h1>
      <p className="text-text-muted mb-8">Importa tu catálogo desde Excel</p>

      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <div className="max-w-xl">
          <h2 className="text-lg font-semibold text-text mb-4">Importar desde Excel</h2>
          
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
            <FileSpreadsheet className="w-12 h-12 text-text-muted mx-auto mb-4" />
            <p className="text-sm text-text-muted mb-4">
              Arrastra un archivo .xlsx o haz clic para seleccionar
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="btn-primary px-6 py-2.5 text-sm"
            >
              <Upload className="w-4 h-4" />
              Seleccionar archivo
            </button>
          </div>

          {file && (
            <div className="mt-4 p-4 bg-primary-light/20 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileSpreadsheet className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-text">{file.name}</p>
                  <p className="text-xs text-text-muted">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={handleUpload}
                disabled={loading}
                className="btn-primary px-6 py-2 text-sm disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Importar
                  </>
                )}
              </button>
            </div>
          )}

          {result && (
            <div className={`mt-6 p-4 rounded-xl ${
              result.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
            }`}>
              {result.success ? (
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-green-800">Importación completada</p>
                    <p className="text-sm text-green-700 mt-1">
                      Total: {result.total} | Creados: {result.creados} | Actualizados: {result.actualizados}
                    </p>
                    {result.errores && result.errores.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm font-medium text-yellow-700">
                          {result.errores.length} errores:
                        </p>
                        <ul className="text-xs text-yellow-600 mt-1 space-y-1">
                          {result.errores.slice(0, 5).map((err, i) => (
                            <li key={i}>• {err}</li>
                          ))}
                          {result.errores.length > 5 && (
                            <li>... y {result.errores.length - 5} más</li>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Error</p>
                    <p className="text-sm text-red-700 mt-1">{result.error}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 p-4 bg-gray-50 rounded-xl">
            <h3 className="text-sm font-medium text-text mb-2">Formato esperado del Excel:</h3>
            <div className="text-xs text-text-muted space-y-1">
              <p><strong>Columnas:</strong> Código, Referencia, Categoría, Color, Precio, Total Unidades, TALLA</p>
              <p><strong>Ejemplo:</strong> BK0001 | SUNNY | SET | BEIGE | 65000 | 1 | L</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
