import { ExternalLinkIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-20 mb-4">
      <div className="flex w-full mx-4 rounded-2xl bg-background/80 backdrop-blur-sm items-center justify-center h-full border border-border/50">
        <div className="flex items-center justify-center mx-4">
          <p className="text-sm text-primary-foreground">
            An{" "}
            <a
              href="https://imoogleai.xyz"
              className="cursor-pointer no-underline text-foreground hover:text-foreground/70 duration-300 transition-colors ease-out inline-flex items-center font-semibold focus-ring rounded-lg"
            >
              Imoogle Technology
              <ExternalLinkIcon
                className="ml-1 mt-0.5"
                size={14}
                strokeWidth={2.5}
              />
            </a>
            {" "}product, developed by{" "}
            <a
              href="https://github.com/sidicode"
              className="cursor-pointer no-underline text-foreground hover:text-foreground/70 duration-300 transition-colors ease-out inline-flex items-center font-semibold focus-ring rounded-lg"
            >
              sidicode
              <ExternalLinkIcon
                className="ml-1 mt-0.5"
                size={14}
                strokeWidth={2.5}
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
