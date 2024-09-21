import Link from "next/link";

interface NavLinksProps {
  links: { label: string; href: string }[];
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className }) => {
  return (
    <div className={className}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-500 hover:text-gray-800"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
