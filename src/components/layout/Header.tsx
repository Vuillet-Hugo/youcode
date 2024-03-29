import Link from 'next/link';
import { Typography } from '../ui/typography';
import { SiteConfig } from '@/lib/site-config';
import { ThemeToggle } from '../theme/ThemeToggle';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="item-center flex gap-2">
          <Typography variant="h3" as={Link} href="/">
            <Image src="/images/logo.svg" alt="Logo" width={50} height={35} />
            {SiteConfig.title}
          </Typography>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}