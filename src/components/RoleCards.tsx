import { Container, SectionHeading } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { getIcon } from "@/lib/icons";
import { roles } from "@/lib/content";

export function RoleCards({ heading = true }: { heading?: boolean }) {
  return (
    <Container>
      {heading && (
        <SectionHeading
          eyebrow="Role-based by design"
          title="Everyone sees exactly their slice"
          description="Access is granted per role and scoped per institute. No one sees more than their job needs."
          className="mb-14"
        />
      )}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role, i) => {
          const Icon = getIcon(role.icon);
          return (
            <Reveal key={role.name} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-muted text-violet">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-display text-base leading-tight">{role.name}</h3>
                    <p className="text-xs text-muted-foreground">{role.scope}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {role.can.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-signal" aria-hidden />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
