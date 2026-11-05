'use client';

import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import type { ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { legalDocuments, type LegalBlock, type LegalDocId } from '@/data/legal';

const LINK_PATTERN =
  /(https?:\/\/[^\s]+|[\w.+-]+@[\w.-]+\.[a-z]{2,})/gi;

function renderText(text: string): ReactNode[] {
  const parts = text.split(LINK_PATTERN);

  return parts.map((part, index) => {
    if (index % 2 === 0) return part;

    if (part.includes('@')) {
      return (
        <a
          key={index}
          href={`mailto:${part}`}
          className="font-medium text-jade-900 underline decoration-clay-500/50 underline-offset-2 transition-colors hover:text-clay-600"
        >
          {part}
        </a>
      );
    }

    return (
      <a
        key={index}
        href={part}
        className="font-medium text-jade-900 underline decoration-clay-500/50 underline-offset-2 transition-colors hover:text-clay-600"
      >
        {part}
      </a>
    );
  });
}

function renderBlock(block: LegalBlock, index: number): ReactNode {
  if (block.type === 'h3') {
    return (
      <h3
        key={index}
        className="pt-2 font-display text-[1.05rem] font-medium text-jade-900"
      >
        {block.text}
      </h3>
    );
  }

  if (block.type === 'ul') {
    return (
      <ul
        key={index}
        className="list-disc space-y-2 pl-5 text-[0.92rem] leading-relaxed text-jade-900/75 marker:text-clay-500"
      >
        {block.items.map((item) => (
          <li key={item}>{renderText(item)}</li>
        ))}
      </ul>
    );
  }

  return (
    <p key={index} className="text-[0.92rem] leading-relaxed text-jade-900/75">
      {renderText(block.text)}
    </p>
  );
}

export function LegalPage({ docId }: { docId: LegalDocId }) {
  const { locale, t } = useLanguage();
  const document = legalDocuments[docId][locale];

  return (
    <>
      <section className="relative overflow-hidden bg-jade-950 pb-14 pt-32 text-cream-100 md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(234,182,76,0.14),transparent_38%),radial-gradient(circle_at_10%_85%,rgba(200,90,58,0.16),transparent_40%)]" />
        <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full border border-cream-100/10" />
        <div className="container-tgv relative">
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream-100/20 bg-cream-100/5 text-maize-300">
            <FileText className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.8rem,6.5vw,5.4rem)] font-medium leading-[0.95] tracking-[-0.045em] text-cream-50">
            {document.title}
          </h1>
          <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-cream-100/60">
            {t('legal.updated')} · {document.updated}
          </p>
        </div>
      </section>

      <section className="section bg-cream-100">
        <div className="container-tgv">
          <article className="mx-auto max-w-3xl rounded-[2rem] border border-jade-900/10 bg-cream-50 px-6 py-10 md:px-12 md:py-14">
            <div className="space-y-4">
              {document.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[0.95rem] leading-relaxed text-jade-900/80"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 space-y-10">
              {document.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-[1.35rem] font-medium leading-snug text-jade-900">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.blocks.map((block, index) =>
                      renderBlock(block, index)
                    )}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-12 border-t border-jade-900/10 pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-jade-900 transition-colors hover:text-clay-600"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
                {t('legal.back')}
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
