interface DFArchonLogoProps {
  className?: string;
  decorative?: boolean;
}

const GRID = [
  "o......oo......o",
  "opp.pppppppp.ppo",
  ".ppppoooooopppp.",
  "..pppooooooppp..",
  "..poppooooppop..",
  "..oooppppppooo..",
  ".oooooooooooooo.",
  ".ooppppppppppoo.",
  ".oooooooooooooo.",
  ".ooppppppppppoo.",
  ".ooppppppppppoo.",
  ".ooppppppppppoo.",
  ".ooppppppppppoo.",
  "...ooppppppoo...",
  ".pppoppppppoppp.",
  "ppppppoooopppppp",
] as const;

const COLORS: Record<string, string> = {
  o: "#FFFFFF",
  p: "#FFB7C5",
};

export default function DFArchonLogo({
  className,
  decorative = false,
}: DFArchonLogoProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      shapeRendering="crispEdges"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : "DFArchon"}
    >
      {GRID.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "." ? null : (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1"
              height="1"
              fill={COLORS[cell]}
            />
          )
        )
      )}
    </svg>
  );
}
