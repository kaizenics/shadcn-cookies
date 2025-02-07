"use client";

import { CookieIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CookieConsent({
  variant = "default",
  mode = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(true);
    }, 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
        if (!mode) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch (error) {
      console.error("Error checking cookie consent:", error);
    }
  }, []);

  return variant === "default" ? (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 p-4 sm:p-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="dark:bg-card bg-background rounded-lg sm:rounded-md border border-border shadow-lg">
        <div className="grid gap-2">
          <div className="border-b border-border h-12 sm:h-14 flex items-center justify-between p-3 sm:p-4">
            <h1 className="text-base sm:text-lg font-medium">We use cookies</h1>
            <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-normal text-start text-muted-foreground">
              We use cookies to ensure you get the best experience on our
              website. For more information on how we use cookies, please see
              our cookie policy.
              <br />
              <br />
              <span className="text-xs">
                By clicking
                <span className="font-medium text-black dark:text-white"> Accept</span>, you
                agree to our use of cookies.
              </span>
              <br />
              <a href="#" className="text-xs underline">
                Learn more.
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 p-3 sm:p-4 sm:py-5 border-t border-border dark:bg-background/20">
            <Button onClick={accept} className="w-full">
              Accept
            </Button>
            <Button onClick={decline} className="w-full" variant="secondary">
              Decline
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : variant === "small" ? (
    <div
      className={cn(
        "fixed z-[200] bottom-0 left-0 right-0 p-4 sm:p-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="m-0 sm:m-3 dark:bg-card bg-background border border-border rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-base sm:text-lg font-medium">We use cookies</h1>
          <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
        </div>
        <div className="p-3 -mt-2">
          <p className="text-xs sm:text-sm text-left text-muted-foreground">
            We use cookies to ensure you get the best experience on our website.
            For more information on how we use cookies, please see our cookie
            policy.
          </p>
        </div>
        <div className="p-3 flex flex-col sm:flex-row items-center gap-2 mt-2 border-t">
          <Button onClick={accept} className="w-full h-8 sm:h-9 text-xs sm:text-sm">
            Accept
          </Button>
          <Button
            onClick={decline}
            className="w-full h-8 sm:h-9 rounded-full text-xs sm:text-sm"
            variant="outline"
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  ) : (
    variant === "minimal" && (
      <div
        className={cn(
          "fixed z-[200] bottom-0 left-0 right-0 p-4 sm:p-0 sm:left-4 sm:bottom-4 w-full sm:max-w-[300px] duration-700",
          !isOpen
            ? "transition-[opacity,transform] translate-y-8 opacity-0"
            : "transition-[opacity,transform] translate-y-0 opacity-100",
          hide && "hidden"
        )}
      >
        <div className="m-0 sm:m-3 dark:bg-card bg-background border border-border rounded-lg shadow-lg">
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
              <Button
                onClick={accept}
                size="sm"
                className="w-full h-6 sm:h-7 text-[11px] sm:text-xs px-2 sm:px-3"
              >
                Accept
              </Button>
              <Button
                onClick={decline}
                size="sm"
                variant="ghost"
                className="w-full h-6 sm:h-7 text-[11px] sm:text-xs px-2 sm:px-3"
              >
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
