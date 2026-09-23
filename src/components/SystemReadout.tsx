import { useEffect, useState } from "react";

export default function SystemReadout() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const formattedDate = time.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="font-mono text-xs text-neutral-500">
      <div className="grid grid-cols-[70px_1fr] gap-x-4 gap-y-1">

        <span>STATUS</span>
        <span className="text-neutral-300">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
          ONLINE
        </span>

        <span>LOCAL</span>
        <span className="tabular-nums text-neutral-300">
          {formattedTime}
        </span>

        <span>DATE</span>
        <span className="tabular-nums text-neutral-300">
          {formattedDate}
        </span>

      </div>
    </div>
  );
}