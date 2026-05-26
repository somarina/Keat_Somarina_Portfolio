import {
  useEffect,
  useRef,
  useState,
  type PointerEvent,
  type WheelEvent,
} from "react";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const LOOP_COUNT = 3;
const AUTO_SCROLL_SPEED = 0.05;

const getLoopWidth = (scroller: HTMLDivElement) =>
  scroller.scrollWidth / LOOP_COUNT;

const normalizeScrollPosition = (scroller: HTMLDivElement) => {
  const loopWidth = getLoopWidth(scroller);

  if (!loopWidth) {
    return;
  }

  if (scroller.scrollLeft <= 0) {
    scroller.scrollLeft += loopWidth;
  }

  if (scroller.scrollLeft >= loopWidth * 2) {
    scroller.scrollLeft -= loopWidth;
  }
};

const Tech = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const isPausedRef = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const repeatedTechnologies = Array.from(
    { length: LOOP_COUNT },
    () => technologies,
  ).flat();

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return undefined;
    }

    let animationFrameId = 0;
    let lastFrameTime = performance.now();
    let scrollAccumulator = 0;

    scroller.scrollLeft = getLoopWidth(scroller);

    const scroll = (frameTime: number) => {
      const frameDelta = frameTime - lastFrameTime;
      lastFrameTime = frameTime;

      if (!isDraggingRef.current && !isPausedRef.current) {
        scrollAccumulator += frameDelta * AUTO_SCROLL_SPEED;
        
        if (Math.abs(scrollAccumulator) >= 1) {
          scroller.scrollLeft += Math.trunc(scrollAccumulator);
          scrollAccumulator %= 1;
          normalizeScrollPosition(scroller);
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;
    isDraggingRef.current = false;
    setIsDragging(false);

    if (!scroller) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    normalizeScrollPosition(scroller);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    if (!scroller || event.button !== 0) {
      return;
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartX.current = event.clientX;
    dragStartScrollLeft.current = scroller.scrollLeft;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    if (!scroller || !isDraggingRef.current) {
      return;
    }

    event.preventDefault();
    scroller.scrollLeft =
      dragStartScrollLeft.current - (event.clientX - dragStartX.current);
    normalizeScrollPosition(scroller);
  };

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    event.preventDefault();
    scroller.scrollLeft += event.deltaX || event.deltaY;
    normalizeScrollPosition(scroller);
  };

  return (
    <>
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden py-8">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050816] to-transparent" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050816] to-transparent" />

        {/* Scrolling track */}
        <div
          ref={scrollerRef}
          className={`tech-scroll flex w-full select-none gap-10 overflow-x-auto ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
          onPointerCancel={stopDragging}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onWheel={handleWheel}
        >
          {repeatedTechnologies.map((technology, index) => (
            <div
              key={`${technology.name}-${index}`}
              className="group flex shrink-0 flex-col items-center justify-center gap-3"
            >
              {/* Icon card with glassmorphism */}
              <div className="pointer-events-none flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#915EFF]/50 group-hover:bg-white/10 group-hover:shadow-[0_0_25px_rgba(145,94,255,0.3)]">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  draggable={false}
                  className="h-14 w-14 object-contain"
                />
              </div>
              {/* Label */}
              <span className="pointer-events-none text-sm font-medium text-secondary transition-colors duration-300 group-hover:text-white">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
