import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <p className="text-2xl font-bold">
        Daily<span className="text-primary">Movies</span>
      </p>
    </Link>
  );
};
