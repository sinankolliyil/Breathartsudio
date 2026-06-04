export default function PageFlipDemo() {
  return (
    <div className="page-flip-demo">
      <div style={{ width: 0, height: 0, overflow: 'hidden', position: 'absolute', zIndex: -1, opacity: 0 }}>
        {/* Preload images to prevent flip glitch/lag */}
        <img src="/assets/animation/wedding.png" alt="preload" fetchPriority="high" />
        <img src="/assets/animation/portrait.png" alt="preload" fetchPriority="high" />
        <img src="/assets/animation/nature.png" alt="preload" fetchPriority="high" />
        <img src="/assets/animation/candid.png" alt="preload" fetchPriority="high" />
        <img src="/assets/animation/camera.png" alt="preload" fetchPriority="high" />
      </div>
      <div className="imgLoader"></div>

      <div className="container">
        <h1 className="title">
          Turn pages<br />with us
        </h1>

        <div className="book">
          <div className="gap"></div>
          <div className="pages">
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
            <div className="page"></div>
          </div>
          <div className="flips">
            <div className="flip flip1">
              <div className="flip flip2">
                <div className="flip flip3">
                  <div className="flip flip4">
                    <div className="flip flip5">
                      <div className="flip flip6">
                        <div className="flip flip7"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
