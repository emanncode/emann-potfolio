import Logo from "@/components/branding/Logo";

export default function NavLogo() {
  return (
    <a
      href="#"
      className="
        transition-transform
        duration-300
        hover:scale-[1.03]
      "
    >
      <Logo />
    </a>
  );
}
