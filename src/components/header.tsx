import { SafeArea } from "./safe-area";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <header className="h-16 border-b shadow-sm">
      <SafeArea className="flex h-full items-center justify-between">
        <Logo />
        <nav className="flex h-full items-center justify-between">
          <ModeToggle />
        </nav>
      </SafeArea>
    </header>
  );
};
