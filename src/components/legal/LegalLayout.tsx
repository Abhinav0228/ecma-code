type Props = {
  title: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, children }: Props) {
  return (
    <section className="relative py-10 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl text-white mb-2">{title}</h1>
        </header>
        <div className="rounded-2xl border border-[#005829] bg-[#0b0f14] p-6 md:p-8">
          <div className="space-y-6 text-[#d9e0d8]">{children}</div>
        </div>
      </div>
    </section>
  );
}
