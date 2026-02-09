import React from "react";

type CustomScreenLoadingProps = {
  title?: string;
  message?: string;
  progress?: number; // 0 - 100 (opcional)
  fullscreen?: boolean; // por defecto true
};

export const CustomScreenLoading: React.FC<CustomScreenLoadingProps> = ({
  title = "Cargando…",
  message = "Estamos preparando todo para ti",
  progress,
  fullscreen = true,
}) => {
  return (
    <div
      className={[
        "bg-gradient-to-b from-slate-50 via-white to-slate-100",
        fullscreen
          ? "fixed inset-0 z-[9999] flex items-center justify-center"
          : "w-full flex items-center justify-center py-10",
      ].join(" ")}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      {/* Card */}
      <div className="relative w-[92%] max-w-md rounded-2xl border border-slate-200 bg-white/75 p-6 shadow-xl backdrop-blur">
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Spinner */}
          <div className="relative">
            <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-slate-200 border-t-slate-900" />
            <div className="absolute inset-0 h-12 w-12 rounded-full bg-slate-900/5 blur-md" />
          </div>

          <div className="flex-1">
            <h2 className="text-base font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{message}</p>
          </div>
        </div>

        {/* Shimmer skeleton */}
        <div className="mt-5 space-y-3">
          <div className="h-3 w-3/4 rounded-full bg-slate-200/80 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.35s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
          <div className="h-3 w-full rounded-full bg-slate-200/80 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.35s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
          <div className="h-3 w-5/6 rounded-full bg-slate-200/80 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.35s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>
        </div>

        {/* Progress (opcional) */}
        {typeof progress === "number" && (
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-600">
              <span>Progreso</span>
              <span className="tabular-nums">{Math.max(0, Math.min(100, progress))}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-slate-900 transition-all duration-500"
                style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
              />
            </div>
          </div>
        )}

        {/* Barrita animada */}
        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/3 animate-[slide_1.1s_ease-in-out_infinite] rounded-full bg-slate-900" />
        </div>

        <p className="mt-4 text-xs text-slate-500">
          Tip: si tarda, revisa tu conexión o vuelve a intentar.
        </p>

        {/* Keyframes inline (sin tocar tailwind.config) */}
        <style>{`
          @keyframes shimmer {
            100% { transform: translateX(100%); }
          }
          @keyframes slide {
            0% { transform: translateX(-40%); }
            50% { transform: translateX(160%); }
            100% { transform: translateX(160%); }
          }
        `}</style>
      </div>
    </div>
  );
};
