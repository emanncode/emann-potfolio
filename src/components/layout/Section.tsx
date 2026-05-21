import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      <Container>{children}</Container>
    </section>
  );
}
