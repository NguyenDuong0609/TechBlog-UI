import React from 'react'; 
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/portfolio/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

  const VisuallyHidden = React.forwardRef(({ children, ...props }, ref) => (
  <span
    ref={ref}
    {...props}
    style={{
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '1px',
      whiteSpace: 'nowrap',
      wordWrap: 'normal',
    }}
  >{children}
</span>
));
VisuallyHidden.displayName = 'VisuallyHidden';

const MobileNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild onClick={() => setIsOpen(true)}>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
        </SheetTitle>
        <SheetDescription>
           <VisuallyHidden>Navigation links and social media profiles</VisuallyHidden> {/* Add a description */}
        </SheetDescription>
        <div className="flex flex-col items-center justify-between h-full py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Logo />
            <Nav 
              containerStyles="flex flex-col items-center gap-y-6"
              linkStyles="text-2xl"
              onLinkClick={() => setIsOpen(false)}
            />
            <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl"/>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
