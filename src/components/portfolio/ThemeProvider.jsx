'use client';

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children, ...props }) => {
    return (
        <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
        {...props}
        >
        {children}
        </NextThemesProvider>
    );
 }
export default ThemeProvider;