import LogoIcon from "./LogoIcon";
import LogoWordmark from "./LogoWordmark";

type LogoProps = {
  minimal?: boolean;
};

export default function Logo({ minimal = false }: LogoProps) {
  return (
    <div className="flex items-center gap-4">
      <LogoIcon />

      {!minimal && <LogoWordmark />}
    </div>
  );
}
