import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full max-w-400",
        "mx-auto",
        "px-6 md:px-10 xl:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
