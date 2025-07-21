"use client";

import { Container } from "@/components/ui/container";
import { CopyIcon } from "lucide-react";

export function Hero() {
  return (
    <div className="border-b border-border">
      <Container variant={"fullMobileConstrainedPadded"} className="border-x">
        <div className="flex flex-col min-h-[50vh] justify-center items-center gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-lexend text-center text-4xl sm:text-6xl font-semibold">
              shadcn/ui cookie consent
            </h1>

            <p className="font-sans text-center text-lg">
              Sleek and flexible cookie consent component, designed with
              shadcn/ui
            </p>
          </div>

          <div className="flex bg-muted rounded-lg overflow-hidden w-full max-w-full sm:max-w-fit">
            <pre
              className="text-muted-foreground text-sm p-2 cursor-pointer overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-border scrollbar-track-muted hover:scrollbar-thumb-muted-foreground/20"
              onClick={() => {
                navigator.clipboard.writeText(
                  "npx shadcn@latest add http://shadcn-cookies.vercel.app/r/cookie-consent.json"
                );
              }}
            >
              npx shadcn@latest add
              http://shadcn-cookies.vercel.app/r/cookie-consent.json
            </pre>
            <button
              className="m-2 shrink-0"
              onClick={() => {
                navigator.clipboard.writeText(
                  "npx shadcn@latest add http://shadcn-cookies.vercel.app/r/cookie-consent.json"
                );
              }}
            >
              <CopyIcon className="text-muted-foreground w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
