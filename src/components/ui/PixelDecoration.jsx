export function PixelDecoration({ type, className = "", color = "bg-coral" }) {
  const patterns = {
    cursor: [
      "10000000",
      "11000000",
      "11100000",
      "11110000",
      "11111000",
      "11111100",
      "11111110",
      "11111111",
      "11111000",
      "11011000",
      "10001100",
      "00001100"
    ],
    plus: [
      "010",
      "111",
      "010"
    ],
    square: [
      "1111",
      "1001",
      "1001",
      "1111"
    ],
    sparkle: [
      "00100",
      "01110",
      "11111",
      "01110",
      "00100"
    ]
  };

  const pattern = patterns[type] || patterns.plus;

  return (
    <div className={`flex flex-col gap-[2px] pointer-events-none opacity-20 ${className}`}>
      {pattern.map((row, i) => (
        <div key={i} className="flex gap-[2px]">
          {row.split('').map((cell, j) => (
            <div 
              key={j} 
              className={`w-3 h-3 md:w-4 md:h-4 ${cell === '1' ? color : 'bg-transparent'}`}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}
