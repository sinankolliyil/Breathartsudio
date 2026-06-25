export default function PageFlipDemo() {
  return (
    <div className="page-flip-demo">
      <div style={{ width: 0, height: 0, overflow: 'hidden', position: 'absolute', zIndex: -1, opacity: 0 }}>
        {/* Preload images to prevent flip glitch/lag */}
        <img src="/assets/gallery/wedding/wedding_color.png" alt="preload" fetchPriority="high" />
        <img src="/assets/gallery/newborn/00117.jpg" alt="preload" fetchPriority="high" />
        <img src="/assets/gallery/family/IMG_9601.jpg" alt="preload" fetchPriority="high" />
        <img src="/assets/gallery/real-estate/0014.jpg" alt="preload" fetchPriority="high" />
        <img src="/assets/services/service_event.png" alt="preload" fetchPriority="high" />
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
