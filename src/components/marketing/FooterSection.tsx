import { appConfig as siteConfig } from "@/constants/app-config";
import { useTheme } from "@/providers/ThemeProvider";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FlickeringGrid } from "./FlickeringGrid";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ChevronRightIcon, Github, Linkedin, Twitter } from "lucide-react";

export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");
  const { theme: resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mount, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = !mounted
    ? "/sana-logo.svg"
    : resolvedTheme === "dark"
      ? "/sana-logo-white.svg"
      : "/sana.svg";

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between p-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <Link to="/" className="flex items-center gap-2">
            <img src={logoSrc} alt="Sana logo" width={122} height={22} />
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium">
            {siteConfig.hero.description}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/souravsspace/sana.diy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="size-5 text-muted-foreground" />
            </a>
            <a
              href="https://x.com/souravsspace"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <Twitter className="size-5 text-muted-foreground" />
            </a>
            <a
              href="https://www.linkedin.com/company/souravsspace/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5 text-muted-foreground" />
            </a>
          </div>
        </div>
        <div className="pt-5 md:w-1/2">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between gap-y-5 lg:pl-10">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-2">
                <li className="mb-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                  >
                    <Link href={link.url}>{link.title}</Link>
                    <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRightIcon className="h-4 w-4 " />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <a
        href="https://www.youtube.com/watch?v=nuf5BF1jvjQ"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-48 md:h-64 relative mt-24 z-0 cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 ">
          <FlickeringGrid
            text={tablet ? "Sana" : "Sana DIY"}
            fontSize={tablet ? 60 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="var(--primary)"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </a>
    </footer>
  );
}
