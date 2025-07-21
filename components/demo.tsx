"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { CookieConsent } from "./blocks/cookie-consent";

interface DemoProps {
  initialDemo1?: boolean;
  initialDemo2?: boolean;
  initialDemo3?: boolean;
  onDemoClose?: () => void;
}

export function Demo({ 
  initialDemo1 = true, 
  initialDemo2 = true, 
  initialDemo3 = true, 
  onDemoClose 
}: DemoProps) {
  const [demo1, setDemo1] = useState(initialDemo1);
  const [demo2, setDemo2] = useState(initialDemo2);
  const [demo3, setDemo3] = useState(initialDemo3);

  const handleDemoClose = () => {
    if (!demo1 && !demo2 && !demo3 && onDemoClose) {
      onDemoClose();
    }
  };

  useEffect(() => {
    setDemo1(initialDemo1);
    setDemo2(initialDemo2);
    setDemo3(initialDemo3);
  }, [initialDemo1, initialDemo2, initialDemo3]);

  return (
    <Container variant={"fullMobileBreakpointPadded"}>
      {demo1 && (
        <CookieConsent 
          mode={true} 
          variant="default"
          onAcceptCallback={() => { 
            setDemo1(false);
            handleDemoClose();
          }} 
          onDeclineCallback={() => { 
            setDemo1(false);
            handleDemoClose();
          }} 
        />
      )}
      {demo2 && (
        <CookieConsent 
          mode={true} 
          variant="small"
          onAcceptCallback={() => { 
            setDemo2(false);
            handleDemoClose();
          }} 
          onDeclineCallback={() => { 
            setDemo2(false);
            handleDemoClose();
          }} 
        />
      )}
      {demo3 && (
        <CookieConsent 
          mode={true} 
          variant="minimal"
          onAcceptCallback={() => { 
            setDemo3(false);
            handleDemoClose();
          }} 
          onDeclineCallback={() => { 
            setDemo3(false);
            handleDemoClose();
          }} 
        />
      )}
    </Container>
  );
}
