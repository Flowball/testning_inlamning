import { IoLogoGithub } from "react-icons/io5";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-5xl py-3">Calculator</h1>
      <a href="https://github.com/Flowball" target="_blank" data-testid="header-icon">
        <IoLogoGithub className="size-10 mx-2" />
      </a>
    </header>
  );
}
