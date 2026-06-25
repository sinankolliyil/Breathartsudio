# Album Component Code Backup

This file contains the code for the 3D flipping album component (`PageFlipDemo`) and its associated CSS, preserved here before we remove it to redesign the hero section.

## `PageFlipDemo.js`

```jsx
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
```

## Associated CSS (`globals.css`)

```css
/* --- PAGE-FLIP DEMO REDESIGN --- */
.page-flip-demo {
    position: relative;
    width: 420px;
    margin: 0;
    color: #555;
    text-align: center;
}

.page-flip-demo .imgLoader {
    position: fixed;
    -webkit-animation: preLoad 1s steps(1);
            animation: preLoad 1s steps(1);
    width: 1px;
    height: 1px;
    opacity: 0;
    pointer-events: none;
}
@-webkit-keyframes preLoad {
  0%   { background-image: url('/assets/gallery/wedding/wedding_color.png'); }
  10%  { background-image: url('/assets/gallery/newborn/00117.jpg'); }
  20%  { background-image: url('/assets/gallery/family/IMG_9601.jpg'); }
  30%  { background-image: url('/assets/gallery/real-estate/0014.jpg'); }
  40%  { background-image: url('/assets/services/service_event.png'); }
  100% { display: none; }
}
@keyframes preLoad {
  0%   { background-image: url('/assets/gallery/wedding/wedding_color.png'); }
  10%  { background-image: url('/assets/gallery/newborn/00117.jpg'); }
  20%  { background-image: url('/assets/gallery/family/IMG_9601.jpg'); }
  30%  { background-image: url('/assets/gallery/real-estate/0014.jpg'); }
  40%  { background-image: url('/assets/services/service_event.png'); }
  100% { display: none; }
}

.page-flip-demo .container {
    position: relative;
    width: 420px;
    border: #fff solid 2px;
    border-radius: 4px;
    height: 420px;
    margin: 0;
    padding: 0;
    max-width: none;
    background: transparent;
    overflow: visible;
    transform: scale(0.92);
    transform-origin: center top;
}

.page-flip-demo .title {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    font-size: 2em;
    font-weight: normal;
    line-height: 1;
    color: #555;
    font-family: "Indie Flower", cursive !important;
}

.page-flip-demo .book {
    position: relative;
    width: 420px;
    height: 300px;
    margin-top: 105px;
    perspective: 630px;
    perspective-origin: center 50px;
    transform: scale(1.05);
    filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.25));
}

.page-flip-demo .page {
    width: 210px;
    height: 300px;
    background-color: #bbb;
    position: absolute;
    top: 0px;
    right: 50%;
    transform-origin: 100% 100%;
    border: solid #555 2px;
    background-size: 420px 300px;
    background-position: center;
    transform-style: preserve-3d;
}
.page-flip-demo .page:nth-child(1) { transform: rotateX(45deg) rotateY(3deg); }
.page-flip-demo .page:nth-child(2) { transform: rotateX(45deg) rotateY(4.5deg); }
.page-flip-demo .page:nth-child(3) {
    transform: rotateX(45deg) rotateY(6deg);
    -webkit-animation: nextPage 25s infinite -24s steps(1);
            animation: nextPage 25s infinite -24s steps(1);
    background-size: 420px 300px;
    background-position: -2px -2px;
}
.page-flip-demo .page:nth-child(4) { transform: rotateX(45deg) rotateY(177deg); }
.page-flip-demo .page:nth-child(5) { transform: rotateX(45deg) rotateY(175.5deg); }
.page-flip-demo .page:nth-child(6) {
    transform: rotateX(45deg) rotateY(174deg);
    overflow: hidden;
}
.page-flip-demo .page:nth-child(6)::after {
    content: "";
    width: 210px;
    height: 300px;
    position: absolute;
    top: 0px;
    right: 0%;
    transform-origin: center;
    transform: rotateY(180deg);
    -webkit-animation: nextPage 25s -20s infinite steps(1);
            animation: nextPage 25s -20s infinite steps(1);
    background-size: 420px 300px;
    background-position: 100% -2px;
}
@-webkit-keyframes nextPage {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); }
  80% { background-image: url('/assets/services/service_event.png'); }
}
@keyframes nextPage {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); }
  80% { background-image: url('/assets/services/service_event.png'); }
}

.page-flip-demo .gap {
    width: 10px;
    height: 300px;
    background: none;
    transform: rotateX(45deg);
    transform-origin: bottom;
    position: absolute;
    top: 0px;
    left: calc(50% - 5px);
}
.page-flip-demo .gap::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #555;
    width: 10px;
    height: 5px;
    border-radius: 50%;
}

.page-flip-demo .pages, .page-flip-demo .flips { transform-style: preserve-3d; }

.page-flip-demo .flip {
    width: 32px;
    height: 300px;
    position: absolute;
    top: 0px;
    transform-origin: 100% 100%;
    right: 100%;
    border: solid #555;
    border-width: 2px 0px;
    perspective: 4200px;
    perspective-origin: center;
    transform-style: preserve-3d;
    background-size: 420px 300px;
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.page-flip-demo .flip::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0%;
    width: 100%;
    height: 100%;
    transform-origin: center;
    background-size: 420px 300px;
    will-change: transform;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.page-flip-demo .flip.flip1 {
    right: 50%;
    -webkit-animation: flip1 5s infinite ease-in-out;
            animation: flip1 5s infinite ease-in-out;
    border-width: 2px 2px 2px 0;
}
.page-flip-demo .flip.flip1::after {
    -webkit-animation: nextFlip1 25s -20s infinite steps(1);
            animation: nextFlip1 25s -20s infinite steps(1);
}
.page-flip-demo .flip:not(.flip1) {
    right: calc(100% - 2px);
    top: -2px;
    transform-origin: right;
    -webkit-animation: flip2 5s ease-in-out infinite;
            animation: flip2 5s ease-in-out infinite;
}
.page-flip-demo .flip.flip2::after { -webkit-animation: nextFlip2 25s -20s infinite steps(1); animation: nextFlip2 25s -20s infinite steps(1); }
.page-flip-demo .flip.flip3::after { -webkit-animation: nextFlip3 25s -20s infinite steps(1); animation: nextFlip3 25s -20s infinite steps(1); }
.page-flip-demo .flip.flip4::after { -webkit-animation: nextFlip4 25s -20s infinite steps(1); animation: nextFlip4 25s -20s infinite steps(1); }
.page-flip-demo .flip.flip5::after { -webkit-animation: nextFlip5 25s -20s infinite steps(1); animation: nextFlip5 25s -20s infinite steps(1); }
.page-flip-demo .flip.flip6::after { -webkit-animation: nextFlip6 25s -20s infinite steps(1); animation: nextFlip6 25s -20s infinite steps(1); }
.page-flip-demo .flip.flip7::after { -webkit-animation: nextFlip7 25s -20s infinite steps(1); animation: nextFlip7 25s -20s infinite steps(1); }
.page-flip-demo .flip.flip7 { width: 30px; border-width: 2px 0px 2px 2px; }

@-webkit-keyframes flip1 {
  0%, 20%   { transform: rotateX(45deg) rotateY(6deg); }
  80%, 100% { transform: rotateX(45deg) rotateY(174deg); }
}
@keyframes flip1 {
  0%, 20%   { transform: rotateX(45deg) rotateY(6deg); }
  80%, 100% { transform: rotateX(45deg) rotateY(174deg); }
}
@-webkit-keyframes flip2 {
  0%, 20%   { transform: rotateY(0deg) translateY(0px); }
  50%       { transform: rotateY(-15deg) translateY(0px); }
  80%, 100% { transform: rotateY(0deg) translateY(0px); }
}
@keyframes flip2 {
  0%, 20%   { transform: rotateY(0deg) translateY(0px); }
  50%       { transform: rotateY(-15deg) translateY(0px); }
  80%, 100% { transform: rotateY(0deg) translateY(0px); }
}

@-webkit-keyframes nextFlip1 {
  0%   { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -178px -2px; transform: rotateY(0deg); }
  10%  { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -210px -2px; transform: rotateY(180deg); }
  20%  { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -178px -2px; transform: rotateY(0deg); }
  30%  { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -210px -2px; transform: rotateY(180deg); }
  40%  { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -178px -2px; transform: rotateY(0deg); }
  50%  { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -210px -2px; transform: rotateY(180deg); }
  60%  { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -178px -2px; transform: rotateY(0deg); }
  70%  { background-image: url('/assets/services/service_event.png'); background-position: -210px -2px; transform: rotateY(180deg); }
  80%  { background-image: url('/assets/services/service_event.png'); background-position: -178px -2px; transform: rotateY(0deg); }
  90%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -210px -2px; transform: rotateY(180deg); }
}
@keyframes nextFlip1 {
  0%   { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -178px -2px; transform: rotateY(0deg); }
  10%  { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -210px -2px; transform: rotateY(180deg); }
  20%  { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -178px -2px; transform: rotateY(0deg); }
  30%  { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -210px -2px; transform: rotateY(180deg); }
  40%  { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -178px -2px; transform: rotateY(0deg); }
  50%  { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -210px -2px; transform: rotateY(180deg); }
  60%  { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -178px -2px; transform: rotateY(0deg); }
  70%  { background-image: url('/assets/services/service_event.png'); background-position: -210px -2px; transform: rotateY(180deg); }
  80%  { background-image: url('/assets/services/service_event.png'); background-position: -178px -2px; transform: rotateY(0deg); }
  90%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -210px -2px; transform: rotateY(180deg); }
}
@-webkit-keyframes nextFlip2 {
  0%    { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -148px -2px; transform: rotateY(0deg); }
  10.5% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -238px -2px; transform: rotateY(180deg); }
  20%   { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -148px -2px; transform: rotateY(0deg); }
  30.5% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -238px -2px; transform: rotateY(180deg); }
  40%   { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -148px -2px; transform: rotateY(0deg); }
  50.5% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -238px -2px; transform: rotateY(180deg); }
  60%   { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -148px -2px; transform: rotateY(0deg); }
  70.5% { background-image: url('/assets/services/service_event.png'); background-position: -238px -2px; transform: rotateY(180deg); }
  80%   { background-image: url('/assets/services/service_event.png'); background-position: -148px -2px; transform: rotateY(0deg); }
  90.5% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -238px -2px; transform: rotateY(180deg); }
}
@keyframes nextFlip2 {
  0%    { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -148px -2px; transform: rotateY(0deg); }
  10.5% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -238px -2px; transform: rotateY(180deg); }
  20%   { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -148px -2px; transform: rotateY(0deg); }
  30.5% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -238px -2px; transform: rotateY(180deg); }
  40%   { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -148px -2px; transform: rotateY(0deg); }
  50.5% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -238px -2px; transform: rotateY(180deg); }
  60%   { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -148px -2px; transform: rotateY(0deg); }
  70.5% { background-image: url('/assets/services/service_event.png'); background-position: -238px -2px; transform: rotateY(180deg); }
  80%   { background-image: url('/assets/services/service_event.png'); background-position: -148px -2px; transform: rotateY(0deg); }
  90.5% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -238px -2px; transform: rotateY(180deg); }
}
@-webkit-keyframes nextFlip3 {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -118px -2px; transform: rotateY(0deg); }
  11% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -268px -2px; transform: rotateY(180deg); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -118px -2px; transform: rotateY(0deg); }
  31% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -268px -2px; transform: rotateY(180deg); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -118px -2px; transform: rotateY(0deg); }
  51% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -268px -2px; transform: rotateY(180deg); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -118px -2px; transform: rotateY(0deg); }
  71% { background-image: url('/assets/services/service_event.png'); background-position: -268px -2px; transform: rotateY(180deg); }
  80% { background-image: url('/assets/services/service_event.png'); background-position: -118px -2px; transform: rotateY(0deg); }
  91% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -268px -2px; transform: rotateY(180deg); }
}
@keyframes nextFlip3 {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -118px -2px; transform: rotateY(0deg); }
  11% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -268px -2px; transform: rotateY(180deg); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -118px -2px; transform: rotateY(0deg); }
  31% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -268px -2px; transform: rotateY(180deg); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -118px -2px; transform: rotateY(0deg); }
  51% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -268px -2px; transform: rotateY(180deg); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -118px -2px; transform: rotateY(0deg); }
  71% { background-image: url('/assets/services/service_event.png'); background-position: -268px -2px; transform: rotateY(180deg); }
  80% { background-image: url('/assets/services/service_event.png'); background-position: -118px -2px; transform: rotateY(0deg); }
  91% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -268px -2px; transform: rotateY(180deg); }
}
@-webkit-keyframes nextFlip4 {
  0%    { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -88px -2px; transform: rotateY(0deg); }
  11.5% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -298px -2px; transform: rotateY(180deg); }
  20%   { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -88px -2px; transform: rotateY(0deg); }
  31.5% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -298px -2px; transform: rotateY(180deg); }
  40%   { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -88px -2px; transform: rotateY(0deg); }
  51.5% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -298px -2px; transform: rotateY(180deg); }
  60%   { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -88px -2px; transform: rotateY(0deg); }
  71.5% { background-image: url('/assets/services/service_event.png'); background-position: -298px -2px; transform: rotateY(180deg); }
  80%   { background-image: url('/assets/services/service_event.png'); background-position: -88px -2px; transform: rotateY(0deg); }
  91.5% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -298px -2px; transform: rotateY(180deg); }
}
@keyframes nextFlip4 {
  0%    { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -88px -2px; transform: rotateY(0deg); }
  11.5% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -298px -2px; transform: rotateY(180deg); }
  20%   { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -88px -2px; transform: rotateY(0deg); }
  31.5% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -298px -2px; transform: rotateY(180deg); }
  40%   { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -88px -2px; transform: rotateY(0deg); }
  51.5% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -298px -2px; transform: rotateY(180deg); }
  60%   { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -88px -2px; transform: rotateY(0deg); }
  71.5% { background-image: url('/assets/services/service_event.png'); background-position: -298px -2px; transform: rotateY(180deg); }
  80%   { background-image: url('/assets/services/service_event.png'); background-position: -88px -2px; transform: rotateY(0deg); }
  91.5% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -298px -2px; transform: rotateY(180deg); }
}
@-webkit-keyframes nextFlip5 {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -58px -2px; transform: rotateY(0deg); }
  12% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -328px -2px; transform: rotateY(180deg); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -58px -2px; transform: rotateY(0deg); }
  32% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -328px -2px; transform: rotateY(180deg); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -58px -2px; transform: rotateY(0deg); }
  52% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -328px -2px; transform: rotateY(180deg); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -58px -2px; transform: rotateY(0deg); }
  72% { background-image: url('/assets/services/service_event.png'); background-position: -328px -2px; transform: rotateY(180deg); }
  80% { background-image: url('/assets/services/service_event.png'); background-position: -58px -2px; transform: rotateY(0deg); }
  92% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -328px -2px; transform: rotateY(180deg); }
}
@keyframes nextFlip5 {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -58px -2px; transform: rotateY(0deg); }
  12% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -328px -2px; transform: rotateY(180deg); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -58px -2px; transform: rotateY(0deg); }
  32% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -328px -2px; transform: rotateY(180deg); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -58px -2px; transform: rotateY(0deg); }
  52% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -328px -2px; transform: rotateY(180deg); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -58px -2px; transform: rotateY(0deg); }
  72% { background-image: url('/assets/services/service_event.png'); background-position: -328px -2px; transform: rotateY(180deg); }
  80% { background-image: url('/assets/services/service_event.png'); background-position: -58px -2px; transform: rotateY(0deg); }
  92% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -328px -2px; transform: rotateY(180deg); }
}
@-webkit-keyframes nextFlip6 {
  0%    { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -28px -2px; transform: rotateY(0deg); }
  12.5% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -358px -2px; transform: rotateY(180deg); }
  20%   { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -28px -2px; transform: rotateY(0deg); }
  32.5% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -358px -2px; transform: rotateY(180deg); }
  40%   { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -28px -2px; transform: rotateY(0deg); }
  52.5% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -358px -2px; transform: rotateY(180deg); }
  60%   { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -28px -2px; transform: rotateY(0deg); }
  72.5% { background-image: url('/assets/services/service_event.png'); background-position: -358px -2px; transform: rotateY(180deg); }
  80%   { background-image: url('/assets/services/service_event.png'); background-position: -28px -2px; transform: rotateY(0deg); }
  92.5% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -358px -2px; transform: rotateY(180deg); }
}
@keyframes nextFlip6 {
  0%    { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -28px -2px; transform: rotateY(0deg); }
  12.5% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -358px -2px; transform: rotateY(180deg); }
  20%   { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -28px -2px; transform: rotateY(0deg); }
  32.5% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -358px -2px; transform: rotateY(180deg); }
  40%   { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -28px -2px; transform: rotateY(0deg); }
  52.5% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -358px -2px; transform: rotateY(180deg); }
  60%   { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -28px -2px; transform: rotateY(0deg); }
  72.5% { background-image: url('/assets/services/service_event.png'); background-position: -358px -2px; transform: rotateY(180deg); }
  80%   { background-image: url('/assets/services/service_event.png'); background-position: -28px -2px; transform: rotateY(0deg); }
  92.5% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -358px -2px; transform: rotateY(180deg); }
}
@-webkit-keyframes nextFlip7 {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -2px -2px; transform: rotateY(0deg); }
  13% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -388px -2px; transform: rotateY(180deg); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -2px -2px; transform: rotateY(0deg); }
  33% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -388px -2px; transform: rotateY(180deg); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -2px -2px; transform: rotateY(0deg); }
  53% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -388px -2px; transform: rotateY(180deg); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -2px -2px; transform: rotateY(0deg); }
  73% { background-image: url('/assets/services/service_event.png'); background-position: -388px -2px; transform: rotateY(180deg); }
  80% { background-image: url('/assets/services/service_event.png'); background-position: -2px -2px; transform: rotateY(0deg); }
  93% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -388px -2px; transform: rotateY(180deg); }
}
@keyframes nextFlip7 {
  0%  { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -2px -2px; transform: rotateY(0deg); }
  13% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -388px -2px; transform: rotateY(180deg); }
  20% { background-image: url('/assets/gallery/newborn/00117.jpg'); background-position: -2px -2px; transform: rotateY(0deg); }
  33% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -388px -2px; transform: rotateY(180deg); }
  40% { background-image: url('/assets/gallery/family/IMG_9601.jpg'); background-position: -2px -2px; transform: rotateY(0deg); }
  53% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -388px -2px; transform: rotateY(180deg); }
  60% { background-image: url('/assets/gallery/real-estate/0014.jpg'); background-position: -2px -2px; transform: rotateY(0deg); }
  73% { background-image: url('/assets/services/service_event.png'); background-position: -388px -2px; transform: rotateY(180deg); }
  80% { background-image: url('/assets/services/service_event.png'); background-position: -2px -2px; transform: rotateY(0deg); }
  93% { background-image: url('/assets/gallery/wedding/wedding_color.png'); background-position: -388px -2px; transform: rotateY(180deg); }
}

@media (max-width: 1200px) {
    .page-flip-demo { width: 360px; }
    .page-flip-demo .container { transform: scale(0.82); }
}

@media (max-width: 991px) {
    .page-flip-demo { width: 420px; }
    .page-flip-demo .container { margin: 0 auto; transform: scale(0.9); }
}

@media (max-width: 480px) {
    .page-flip-demo {
        height: 270px !important;
    }
    .page-flip-demo .container {
        width: 420px;
        height: 420px;
        left: 50% !important;
        margin: 0 0 0 -210px !important; /* Shift left by half width to center on screen */
        transform: scale(0.72) !important;
        transform-origin: center top !important;
    }

    .page-flip-demo .book {
        transform: scale(1.05) !important;
        margin-top: 105px;
    }

    .page-flip-demo .title {
        font-size: 2em;
    }
}
```
