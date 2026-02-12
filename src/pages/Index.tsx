import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import couple1 from "@/assets/image_1.jpeg";
import couple2 from "@/assets/image_2.jpeg";
import couple3 from "@/assets/image_3.jpeg";
import couple4 from "@/assets/image_4.jpg";
import couple5 from "@/assets/image_5.jpeg";
import couple6 from "@/assets/image_6.jpeg";

const images = [couple1, couple2, couple3, couple4, couple5, couple6];

const Index = () => {
  const navigate = useNavigate();
  const [yesPos, setYesPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  const fleeButton = useCallback(() => {
    const x = Math.random() * 60 - 30; // -30vw to 30vw
    const y = Math.random() * 50 - 25; // -25vh to 25vh
    setYesPos({ x, y });
    setHasMoved(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Collage background */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 opacity-30">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={src}
              alt={`Romantic couple ${i + 1}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Floating hearts decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="absolute animate-bounce text-primary/20"
              style={{
                left: `${8 + i * 8}%`,
                top: `${10 + (i % 3) * 30}%`,
                fontSize: `${1.5 + (i % 3)}rem`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            >
              ♥
            </span>
          ))}
        </div>

        <div className="rounded-2xl bg-card/80 px-8 py-12 text-center shadow-2xl backdrop-blur-sm sm:px-16 sm:py-16">
          <h1 className="mb-4 text-4xl font-bold italic text-primary sm:text-6xl">
            Do you want to be my valentine?
          </h1>

          {/* Placeholder line — edit this later */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl">
            Your special message goes here ✨
          </p>

          <div className="flex items-center justify-center gap-6">
            {/* YES button — flees on hover/touch */}
            <Button
              size="lg"
              className="px-8 text-lg transition-transform duration-300"
              style={{
                transform: hasMoved
                  ? `translate(${yesPos.x}vw, ${yesPos.y}vh)`
                  : undefined,
                position: hasMoved ? "fixed" : undefined,
                zIndex: 50,
              }}
              onMouseEnter={fleeButton}
              onTouchStart={fleeButton}
              onClick={() => navigate("/yes")}
            >
              Yes 💕
            </Button>

            {/* NO button */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary px-8 text-lg text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => navigate("/no")}
            >
              No 💔
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
