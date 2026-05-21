
function App() {
  return (
    <>
      <div id="particles"
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 9999,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="relative px-[3%]" style={{ zIndex: 1 }}>
      </div>
    </>
  );
}

export default App;
