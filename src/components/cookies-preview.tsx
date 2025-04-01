"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CookieIcon, CopyIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeHighlighter } from "@/components/ui/code-highlighter";
import { toast } from "sonner";

interface PreviewSectionProps {
  title: string;
  description: string;
  codeSnippet: string;
  children: React.ReactNode;
}

const PreviewSection = ({ title, description, codeSnippet, children }: PreviewSectionProps) => (
  <div className="py-10 flex flex-col justify-center items-center">
    <div className="w-full md:w-2/3 lg:w-1/2">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-lexend text-2xl sm:text-3xl font-bold">{title}</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          {description}
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="flex justify-center border border-border rounded-md p-4 sm:p-10">
            {children}
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative">
            <div className="rounded-lg overflow-x-auto">
              <CodeHighlighter code={codeSnippet} />
            </div>
            <Button
              variant="ghost" 
              size="sm"
              className="absolute top-1 right-1 xs:top-2 xs:right-2 sm:top-4 sm:right-4 p-1 xs:p-2"
              onClick={() => {
                navigator.clipboard.writeText(codeSnippet);
                toast.success("Copied to clipboard!");
              }}
            >
              <CopyIcon className="h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
);

export function CookiesPreview() {
  const codeSnippets = {
    default: `import { CookieConsent } from "@/components/ui/cookie-consent"

export default function Page() {
  return (
    <CookieConsent 
      variant="default"
      onAcceptCallback={() => {
        // Handle accept
      }}
      onDeclineCallback={() => {
        // Handle decline
      }}
    />
  )
}`,
    small: `import { CookieConsent } from "@/components/ui/cookie-consent"

export default function Page() {
  return (
    <CookieConsent 
      variant="small"
      onAcceptCallback={() => {
        // Handle accept
      }}
      onDeclineCallback={() => {
        // Handle decline
      }}
    />
  )
}`,
    minimal: `import { CookieConsent } from "@/components/ui/cookie-consent"

export default function Page() {
  return (
    <CookieConsent 
      variant="minimal"
      onAcceptCallback={() => {
        // Handle accept
      }}
      onDeclineCallback={() => {
        // Handle decline
      }}
    />
  )
}`
  };

  return (
    <>
    {/* Default */}
      <Container variant={"fullMobileConstrainedPadded"} className="border-x">
        <PreviewSection
          title="Default"
          description="The default variant is the most common and is used to display a cookie consent banner."
          codeSnippet={codeSnippets.default}
        >
          <div className="w-full sm:max-w-md">
            <div className="dark:bg-card bg-background rounded-md border border-border shadow-lg">
              <div className="grid gap-2">
                <div className="border-b border-border h-14 flex items-center justify-between p-4">
                  <h1 className="text-base sm:text-lg font-medium">We use cookies</h1>
                  <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
                </div>
                <div className="p-4">
                  <p className="text-xs sm:text-sm font-normal text-start text-muted-foreground">
                    We use cookies to ensure you get the best experience on our website.
                    For more information on how we use cookies, please see our cookie policy.
                    <br /><br />
                    <span className="text-xs">
                      By clicking<span className="font-medium text-black dark:text-white"> Accept</span>,
                      you agree to our use of cookies.
                    </span>
                    <br />
                    <a href="#" className="text-xs underline">Learn more.</a>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                  <Button className="w-full">Accept</Button>
                  <Button className="w-full" variant="secondary">Decline</Button>
                </div>
              </div>
            </div>
          </div>
        </PreviewSection>
      </Container>

      {/* Small */}
      <div className="border-t border-border">
        <Container variant={"fullMobileConstrainedPadded"} className="border-x">
          <PreviewSection

            title="Small"
            description="The small variant is a more compact version with rounded buttons and simplified content."
            codeSnippet={codeSnippets.small}
          >
            <div className="w-full sm:max-w-md">
              <div className="dark:bg-card bg-background border border-border rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-3">
                  <h1 className="text-base sm:text-lg font-medium">We use cookies</h1>
                  <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
                </div>
                <div className="p-3 -mt-2">
                  <p className="text-xs sm:text-sm text-left text-muted-foreground">
                    We use cookies to ensure you get the best experience on our website.
                    For more information on how we use cookies, please see our cookie policy.
                  </p>
                </div>
                <div className="p-3 flex flex-col sm:flex-row items-center gap-2 mt-2 border-t">
                  <Button className="w-full h-8 sm:h-9 text-xs sm:text-sm">
                    Accept
                  </Button>
                  <Button className="w-full h-8 sm:h-9 text-xs sm:text-sm" variant="outline">
                    Decline
                  </Button>
                </div>
              </div>
            </div>
          </PreviewSection>
        </Container>
      </div>

      {/* Minimal */}
      <div className="border-t border-border">
        <Container variant={"fullMobileConstrainedPadded"} className="border-x">
          <PreviewSection
            title="Minimal"
            description="The minimal variant provides a simple and unobtrusive notification."
            codeSnippet={codeSnippets.minimal}
          >
            <div className="w-full sm:max-w-[300px]">
              <div className="dark:bg-card bg-background border border-border rounded-lg shadow-lg">
                <div className="p-3 flex items-center justify-between border-b border-border">
                  <div className="flex items-center gap-2">
                    <CookieIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm font-medium">Cookie Notice</span>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-[11px] sm:text-xs text-muted-foreground">
                    We use cookies to enhance your browsing experience.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-2 mt-3">
                    <Button size="sm" className="w-full h-6 sm:h-7 text-[11px] sm:text-xs px-2 sm:px-3">
                      Accept
                    </Button>
                    <Button size="sm" variant="ghost" className="w-full h-6 sm:h-7 text-[11px] sm:text-xs px-2 sm:px-3">
                      Decline
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </PreviewSection>
        </Container>
      </div>
    </>
  );
}
