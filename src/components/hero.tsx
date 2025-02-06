"use client";

import { Container } from "@/components/ui/container";
import { CopyIcon } from "lucide-react";


export function Hero() {
  return (
    <div className="border-b border-border">
      <Container variant={"fullMobileConstrainedPadded"} className="border-x">
        <div className="flex flex-col min-h-[50vh] justify-center items-center gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-lexend text-center text-5xl sm:text-6xl font-semibold">
              shadcn/ui cookie consent
            </h1>

            <p className="font-sans text-center text-lg">
              Sleek and flexible cookie consent solution for the web, designed
              with shadcn/ui
            </p>
          </div>
         

          <div className="flex bg-muted rounded-lg overflow-hidden">
            <pre 
              className="text-muted-foreground text-sm p-2 cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("npm i react-code-blocks");
              }}
            >
              npm i react-code-blocks
            </pre>
            <button 
              className="m-2"
              onClick={() => {
                navigator.clipboard.writeText("npm i react-code-blocks");
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
