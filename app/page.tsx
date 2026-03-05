const familyMembers = [
  { role: "Father", name: "Sachin Dey" },
  { role: "Mother", name: "Papiya Dey" },
  { role: "Son", name: "Sayan Dey" },
  { role: "Wife", name: "Tiyasha Dey" },
]

function DeyMonogram() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dey family monogram"
      role="img"
    >
      <path
        d="M8 8 C8 8, 8 32, 20 32 C32 32, 32 8, 32 8"
        stroke="#c4bfb8"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M12 8 C12 8, 12 28, 20 28 C28 28, 28 8, 28 8"
        stroke="#c4bfb8"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="6"
        y1="8"
        x2="34"
        y2="8"
        stroke="#c4bfb8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function FamilyMember({ role, name }: { role: string; name: string }) {
  return (
    <div className="mb-7">
      <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
        {role}
      </span>
      <p className="mt-1 text-[1.15rem] text-foreground">{name}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-10">
      <div className="w-full max-w-[600px]">
        <p className="text-lg leading-relaxed text-foreground sm:text-xl">
          <em>Dey Parivar</em> is a family rooted in the soil of Singur,
          Hooghly, West Bengal — present at this address for over 250 years.
          We are a family of four, carrying forward a name, a home, and a bond
          across generations.
        </p>

        <div className="mt-14">
          {familyMembers.map((member) => (
            <FamilyMember
              key={member.name}
              role={member.role}
              name={member.name}
            />
          ))}
        </div>

        <p className="mt-14 text-lg leading-relaxed text-foreground sm:text-xl">
          Some roots run deeper than memory.
        </p>

        <a
          href="mailto:hello@deyparivar.com"
          className="mt-10 inline-block text-base text-foreground underline underline-offset-4 decoration-muted-foreground/50 transition-colors hover:decoration-foreground"
        >
          {'Get in touch \u2192'}
        </a>
      </div>

      <div className="mt-24 mb-4">
        <DeyMonogram />
      </div>
    </main>
  )
}
