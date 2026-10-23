import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
    { path: '/', label: 'home' },
    { path: '/projects', label: 'my projects' },
    { path: '/contact', label: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, onLinkClick }) => {
    const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
        {links.map((link, index) => {
            return (
            <Link 
                href={link.path}
                key={index}
                className={`capitalize ${linkStyles} ${link.path === path ? 'text-primary' : ''} focus:text-primary`}
                onClick={() => {
                    if (onLinkClick) {
                        onLinkClick();
                    }
                }}
            >
                {link.path === path && (
                    <motion.span
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween' }}
                        layoutId="underline"
                        className={`${underlineStyles}`}
                    />
                )}
                {link.label}
            </Link>
        );
    })}
    </nav>
  )
}

export default Nav