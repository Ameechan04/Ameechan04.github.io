import SystemReadout from "../components/SystemReadout";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0d0d0d] px-6 py-24 text-white mt-15"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-20 border-b border-neutral-800 pb-6">
          <span className="font-mono text-sm text-neutral-500">
            /about
          </span>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-7xl">
            Andrew Meechan
          </h1>

           <div className="hidden pt-1 sm:block">
            <SystemReadout />
          </div>
        </div>

        {/* Main content */}
        <div className="grid gap-16 md:grid-cols-[1.4fr_0.6fr]">

          {/* Bio */}
          <div>
            <p className="max-w-3xl text-2xl leading-relaxed text-neutral-200 md:text-3xl">
              I'm a software engineer who likes understanding what happens
              underneath the interface.
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
              Most of my work sits somewhere between full-stack development
              and lower-level systems work. I've worked with web interfaces,
              APIs, Linux, networking, embedded software and the bits in
              between that usually become somebody else's problem.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              I tend to enjoy projects most when I can follow something from
              the button a user presses all the way down to what the machine
              actually does with it.
            </p>
          </div>

          {/* Facts */}
          <div className="font-mono text-sm">
            <div className="border-t border-neutral-800">
              <InfoRow label="ROLE" value="Software Engineer" />
              <InfoRow label="FOCUS" value="Full-stack / Embedded" />
              <InfoRow label="BASED" value="Scotland" />
              <InfoRow label="SYSTEM" value="Linux / Windows" />
              <InfoRow label="LANGUAGES" value="C, C++, TS, Java, Python" />
            </div>
          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-28 border-t border-neutral-800 pt-8">
          <p className="font-mono text-sm text-neutral-500">
            $ interests
          </p>

          <p className="mt-4 max-w-4xl text-xl leading-8 text-neutral-300">
            Embedded systems, frontend engineering, networking, weird bugs,
            hardware I probably shouldn't be touching, and building software
            that feels good to use.
          </p>
        </div>

      </div>
    </section>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-neutral-800 py-4">
      <span className="text-neutral-600">
        {label}
      </span>

      <span className="text-neutral-300">
        {value}
      </span>
    </div>
  );
}