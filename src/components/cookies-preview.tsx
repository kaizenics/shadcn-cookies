"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CookieIcon, CopyIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CookiesPreview() {
  const codeSnippet1 = `import { CookieConsent } from "@/components/ui/cookie-consent"

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
}`;

  const codeSnippet2 = `import { CookieConsent } from "@/components/ui/cookie-consent"

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
}`;

  const codeSnippet3 = `import { CookieConsent } from "@/components/ui/cookie-consent"

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
}`;

  return (
    <>
      <Container variant={"fullMobileConstrainedPadded"} className="border-x">
        <div className="py-10 flex flex-col justify-center items-center">
          <div className="md:w-1/2">
            <div className="flex flex-col gap-2 mb-6">
              <h1 className="text-lexend text-2xl font-bold">Default</h1>
              <p className="text-sm text-muted-foreground">
                The default variant is the most common and is used to display a
                cookie consent banner.
              </p>
            </div>
            <Tabs defaultValue="preview">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="preview">Preview</TabsTrigger>

                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>

              <TabsContent value="preview">
                <div className="flex justify-center border border-border rounded-md py-10">
                  <div className="w-full sm:max-w-md duration-700 transition-[opacity,transform] translate-y-0 opacity-100">
                    <div className="dark:bg-card bg-background rounded-md m-3 border border-border shadow-lg">
                      <div className="grid gap-2">
                        <div className="border-b border-border h-14 flex items-center justify-between p-4">
                          <h1 className="text-lg font-medium">
                            We use cookies
                          </h1>
                          <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                        </div>
                        <div className="p-4">
                          <p className="text-sm font-normal text-start">
                            We use cookies to ensure you get the best experience
                            on our website. For more information on how we use
                            cookies, please see our cookie policy.
                            <br />
                            <br />
                            <span className="text-xs">
                              By clicking
                              <span className="font-medium opacity-80">
                                {" "}
                                Accept
                              </span>
                              , you agree to our use of cookies.
                            </span>
                            <br />
                            <a href="#" className="text-xs underline">
                              Learn more.
                            </a>
                          </p>
                        </div>
                        <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
                          <Button className="w-full">Accept</Button>
                          <Button className="w-full" variant="secondary">
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code">
                <div className="relative">
                  <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                    <code
                      className="text-sm font-mono language-tsx text-foreground"
                      data-language="tsx"
                    >
                      <span className="text-muted-foreground">
                        {codeSnippet1}
                      </span>
                    </code>
                  </pre>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4"
                    onClick={() => {
                      navigator.clipboard.writeText(codeSnippet1);
                    }}
                  >
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container variant={"fullMobileConstrainedPadded"} className="border-x">
          <div className="py-10 flex flex-col justify-center items-center">
            <div className="md:w-1/2">
              <div className="flex flex-col gap-2 mb-6">
                <h1 className="text-lexend text-2xl font-bold">Small</h1>
                <p className="text-sm text-muted-foreground">
                  The small variant is a smaller version of the default variant
                  and is used to display a cookie consent banner in a smaller
                  container.
                </p>
              </div>

              <Tabs defaultValue="preview">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="preview">Preview</TabsTrigger>

                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                  <div className="flex justify-center border border-border rounded-md py-10">
                    <div className="w-full sm:max-w-md duration-700 transition-[opacity,transform] translate-y-0 opacity-100">
                      <div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
                        <div className="flex items-center justify-between p-3">
                          <h1 className="text-lg font-medium">
                            We use cookies
                          </h1>
                          <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
                        </div>
                        <div className="p-3 -mt-2">
                          <p className="text-sm text-left text-muted-foreground">
                            We use cookies to ensure you get the best experience
                            on our website. For more information on how we use
                            cookies, please see our cookie policy.
                          </p>
                        </div>
                        <div className="p-3 flex items-center gap-2 mt-2 border-t">
                          <Button className="w-full h-9 rounded-full">
                            Accept
                          </Button>
                          <Button
                            className="w-full h-9 rounded-full"
                            variant="outline"
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="code">
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                      <code
                        className="text-sm font-mono language-tsx text-foreground"
                        data-language="tsx"
                      >
                        <span className="text-muted-foreground">
                          {codeSnippet2}
                        </span>
                      </code>
                    </pre>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4"
                      onClick={() => {
                        navigator.clipboard.writeText(codeSnippet2);
                      }}
                    >
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-border">
        <Container variant={"fullMobileConstrainedPadded"} className="border-x">
          <div className="py-10 flex flex-col justify-center items-center">
            <div className="md:w-1/2">
              <div className="flex flex-col gap-2 mb-6">
                <h1 className="text-lexend text-2xl font-bold">Minimal</h1>
                <p className="text-sm text-muted-foreground">
                  The minimal variant is a minimal version of the default
                  variant and is used to display a cookie consent banner in a
                  minimal container.
                </p>
              </div>
              <Tabs defaultValue="preview">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="preview">Preview</TabsTrigger>

                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                <TabsContent value="preview">
                  <div className="flex justify-center border border-border rounded-md py-10">
                    <div className="m-3 dark:bg-card bg-background border border-border rounded-lg shadow-lg">
                      <div className="p-3 flex items-center justify-between border-b border-border">
                        <div className="flex items-center gap-2">
                          <CookieIcon className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            Cookie Notice
                          </span>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-muted-foreground">
                          We use cookies to enhance your browsing experience.
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <Button
                            size="sm"
                            className="h-7 text-xs px-3 rounded-full"
                          >
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-7 text-xs px-3 rounded-full"
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="code">
                  <div className="relative">
                    <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                      <code
                        className="text-sm font-mono language-tsx text-foreground"
                        data-language="tsx"
                      >
                        <span className="text-muted-foreground">
                          {codeSnippet3}
                        </span>
                      </code>
                    </pre>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-4 right-4"
                      onClick={() => {
                        navigator.clipboard.writeText(codeSnippet3);
                      }}
                    >
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
