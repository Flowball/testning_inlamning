import GitHubLogo from "./GitHubLogo";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-5xl py-3">Calculator</h1>
      <GitHubLogo />
    </header>
  );
}
