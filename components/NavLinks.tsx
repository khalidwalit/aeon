interface NavLinksProps {
  links: { label: string; href: string }[];
  className?: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, className }) => {
  return (
    <div className={className}>
      {links.map((link, index) => (
        <a href={link.href} className="text-gray-500 hover:text-gray-800">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
