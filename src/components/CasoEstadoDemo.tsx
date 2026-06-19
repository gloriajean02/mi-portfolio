import { useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const S = {
    card: {
        borderRadius: 12,
        border: "1px solid #3f3f46",
        background: "#18181b",
        color: "#f4f4f5",
        fontFamily: "'Manrope', sans-serif",
        fontSize: 14,
        boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
    } as React.CSSProperties,
    header: {
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        borderBottom: "1px solid #3f3f46",
        fontWeight: 600,
        fontSize: 14,
        color: "#ffffff",
    } as React.CSSProperties,
    body: {
        padding: 16,
        display: "flex",
        flexDirection: "column" as const,
        gap: 16,
    },
    bars: {
        display: "flex",
        gap: 4,
    } as React.CSSProperties,
    barBtn: {
        flex: 1,
        height: 32,
        display: "flex",
        alignItems: "center",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
    } as React.CSSProperties,
    row: {
        display: "flex",
        alignItems: "center",
        gap: 6,
    } as React.CSSProperties,
    navBtn: (disabled: boolean): React.CSSProperties => ({
        background: "none",
        border: "none",
        cursor: disabled ? "default" : "pointer",
        padding: 2,
        color: disabled ? "transparent" : "#52525b",
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        transition: "color 0.15s",
    }),
    cardActive: {
        position: "relative" as const,
        overflow: "hidden",
        borderRadius: 8,
        border: "1px solid rgba(59,130,246,0.3)",
        background: "rgba(59,130,246,0.1)",
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column" as const,
        gap: 12,
    },
    cardPast: {
        borderRadius: 8,
        border: "1px solid #3f3f46",
        background: "#27272a",
        padding: "10px 12px",
    },
    dot: {
        position: "relative" as const,
        width: 10,
        height: 10,
        flexShrink: 0,
        marginTop: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    label: { fontSize: 12, color: "#a1a1aa", marginBottom: 1 } as React.CSSProperties,
    title: { fontSize: 15, fontWeight: 700, color: "#ffffff" } as React.CSSProperties,
    titlePast: { fontSize: 15, fontWeight: 600, color: "#e4e4e7" } as React.CSSProperties,
    desc: { marginTop: 3, fontSize: 12, color: "#a1a1aa" } as React.CSSProperties,
    hr: { margin: "8px 0", border: "none", borderTop: "1px solid #3f3f46" } as React.CSSProperties,
    hrBlue: { margin: "8px 0", border: "none", borderTop: "1px solid rgba(59,130,246,0.25)" } as React.CSSProperties,
    date: { fontSize: 12, color: "#a1a1aa" } as React.CSSProperties,
};

function ChevronLeft() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}

function ChevronRight() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}

export default function CasoEstadoDemo() {
    const { t } = useLanguage();
    const demo = t.caseDemo;
    const FASES = demo.phases;

    const [idx, setIdx] = useState(FASES.length - 1);
    const [hoveredBar, setHoveredBar] = useState<number | null>(null);
    const [hoveredLeft, setHoveredLeft] = useState(false);
    const [hoveredRight, setHoveredRight] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const fase = FASES[idx];
    const esActual = idx === FASES.length - 1;

    function handleTouchStart(e: React.TouchEvent) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e: React.TouchEvent) {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            setIdx((i) => diff > 0 ? Math.min(i + 1, FASES.length - 1) : Math.max(i - 1, 0));
        }
        touchStartX.current = null;
    }

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');
                @keyframes caso-ping {
                    75%, 100% { transform: scale(2); opacity: 0; }
                }
                .caso-ping { animation: caso-ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }
                @keyframes caso-shimmer {
                    0%   { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .caso-shimmer {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(120deg, transparent 40%, rgba(11,166,223,0.18) 50%, transparent 60%);
                    animation: caso-shimmer 4s infinite;
                    pointer-events: none;
                }
            `}</style>

            <div style={S.card}>
                <div style={S.header}>{demo.header}</div>

                <div style={S.body}>
                    <div
                        role="group"
                        aria-label={demo.ariaNav}
                        tabIndex={0}
                        style={S.bars}
                        onKeyDown={(e) => {
                            if (e.key === "ArrowLeft")  { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
                            if (e.key === "ArrowRight") { e.preventDefault(); setIdx((i) => Math.min(i + 1, FASES.length - 1)); }
                        }}
                    >
                        {FASES.map((_, i) => {
                            const esActualBar    = i === FASES.length - 1;
                            const esSeleccionada = i === idx;
                            const hovered        = hoveredBar === i;
                            return (
                                <button
                                    key={i}
                                    onClick={() => setIdx(i)}
                                    title={FASES[i].titulo}
                                    style={S.barBtn}
                                    onMouseEnter={() => setHoveredBar(i)}
                                    onMouseLeave={() => setHoveredBar(null)}
                                >
                                    <div style={{
                                        height: hovered ? 16 : 8,
                                        width: "100%",
                                        borderRadius: 999,
                                        background: esActualBar ? "#3b82f6" : "rgba(59,130,246,0.25)",
                                        transition: "height 0.15s, box-shadow 0.15s",
                                        boxShadow: esSeleccionada ? "0 0 0 2px #18181b, 0 0 0 4px #60a5fa" : "none",
                                    }} />
                                </button>
                            );
                        })}
                    </div>

                    <div
                        style={S.row}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <button
                            onClick={() => setIdx((i) => Math.max(i - 1, 0))}
                            disabled={idx === 0}
                            style={{ ...S.navBtn(idx === 0), color: hoveredLeft && idx !== 0 ? "#a1a1aa" : idx === 0 ? "transparent" : "#52525b" }}
                            onMouseEnter={() => setHoveredLeft(true)}
                            onMouseLeave={() => setHoveredLeft(false)}
                        >
                            <ChevronLeft />
                        </button>

                        <div style={{ minWidth: 0, flex: 1 }}>
                            {esActual ? (
                                <div style={S.cardActive}>
                                    <div className="caso-shimmer" />
                                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                                        <div style={S.dot}>
                                            <div
                                                className="caso-ping"
                                                style={{
                                                    position: "absolute",
                                                    inset: 0,
                                                    borderRadius: "50%",
                                                    background: "#60a5fa",
                                                    opacity: 0.5,
                                                }}
                                            />
                                            <div style={{
                                                width: 10, height: 10,
                                                borderRadius: "50%",
                                                background: "#60a5fa",
                                                position: "relative",
                                            }} />
                                        </div>
                                        <div style={{ minWidth: 0, flex: 1 }}>
                                            <p style={S.label}>{demo.phaseLabel} {idx + 1}</p>
                                            <p style={S.title}>{fase.titulo}</p>
                                            {fase.descripcion && <p style={S.desc}>{fase.descripcion}</p>}
                                            <hr style={S.hrBlue} />
                                            <p style={S.date}>{fase.entrada}{fase.salida && ` - ${fase.salida}`}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div style={S.cardPast}>
                                    <p style={S.label}>{demo.phaseLabel} {idx + 1}</p>
                                    <p style={S.titlePast}>{fase.titulo}</p>
                                    {fase.descripcion && <p style={S.desc}>{fase.descripcion}</p>}
                                    <hr style={S.hr} />
                                    <p style={S.date}>{fase.entrada}{fase.salida && ` - ${fase.salida}`}</p>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setIdx((i) => Math.min(i + 1, FASES.length - 1))}
                            disabled={idx === FASES.length - 1}
                            style={{ ...S.navBtn(idx === FASES.length - 1), color: hoveredRight && idx !== FASES.length - 1 ? "#a1a1aa" : idx === FASES.length - 1 ? "transparent" : "#52525b" }}
                            onMouseEnter={() => setHoveredRight(true)}
                            onMouseLeave={() => setHoveredRight(false)}
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
