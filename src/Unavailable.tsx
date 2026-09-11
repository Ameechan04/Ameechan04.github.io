export default function Unavailable({
  onBack,
}: {
  onBack: () => void
}) {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
      }}
    >
      <div>
        <div style={{ opacity: 0.4, marginBottom: "10px" }}>
          ERROR 503
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 6vw, 5rem)",
          }}
        >
          UNAVAILABLE_
        </h1>

        <p style={{ opacity: 0.5 }}>
          Requested resource is not currently available.
        </p>

        <button
          onClick={onBack}
          style={{
            marginTop: "20px",
            border: "1px solid #555",
            background: "transparent",
            color: "white",
            padding: "10px 18px",
            fontFamily: "inherit",
            cursor: "pointer",
          }}
        >
          ← RETURN
        </button>
      </div>
    </main>
  )
}