import { Container, Cta, Eyebrow } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { getIcon } from "@/lib/icons";
import type { Locale } from "@/lib/i18n";
import type { MarketingContent } from "@/lib/localized-content";

export function AudienceSplit({
  locale,
  content,
}: {
  locale: Locale;
  content: MarketingContent;
}) {
  return (
    <Container>
      <div className="grid gap-5 lg:grid-cols-2">
        {content.audiences.map((a, idx) => (
          <Reveal key={a.id} delay={idx * 0.08}>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 sm:p-10">
              <Eyebrow>{a.eyebrow}</Eyebrow>
              <h3 className="text-display mt-4 text-2xl leading-tight sm:text-3xl">{a.title}</h3>
              <p className="mt-3 text-muted-foreground">{a.body}</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {a.points.map((p) => {
                  const Icon = getIcon(p.icon);
                  return (
                    <div key={p.title} className="flex gap-3">
                      <div className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-violet">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{p.title}</p>
                        <p className="text-sm text-muted-foreground">{p.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-2">
                <Cta href={a.href} locale={locale} variant="ghost" size="md" withArrow className="px-0 hover:bg-transparent hover:underline">
                  {content.common.learnMore}
                </Cta>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
