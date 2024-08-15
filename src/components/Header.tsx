import GitHubLogo from "./GitHubLogo";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="md:text-5xl text-3xl py-3 px-2">Calculator 🧮</h1>
      <GitHubLogo />
    </header>
  );
}
