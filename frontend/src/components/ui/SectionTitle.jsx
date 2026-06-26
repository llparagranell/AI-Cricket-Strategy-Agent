export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black text-text md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{description}</p> : null}
    </div>
  );
}
