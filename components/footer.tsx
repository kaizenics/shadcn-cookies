import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <div className="border-t border-border">
      <Container variant={"fullMobileConstrainedPadded"} className="border-x">
        <div className="flex flex-col justify-center items-center py-5">
          <p className="font-sans text-sm text-muted-foreground">
            Built by <a href="https://www.threads.net/@kaizenics" className="underline" target="_blank" rel="noopener noreferrer">kaizenics</a> / Source code available on <a href="https://github.com/kaizenics/shadcn-cookies" className="underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </Container>
    </div>
  );
}
