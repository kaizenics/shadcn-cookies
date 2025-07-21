import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60">
      <Container variant={"fullMobileConstrainedPadded"} className="border-x">
        <div className="flex h-14 items-center justify-between">
          <div className="flex">
            <Link href="/" className="font-lexend font-medium">

             shadcn/ui cookies
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Button variant={"outline"} asChild>
              <Link href="https://github.com/kaizenics/shadcn-cookies" className="flex items-center gap-2">
                <GithubIcon className="w-4 h-4" />
                Star on GitHub
              </Link>
            </Button>
            <ModeToggle />
          </div>

        </div>

      </Container>
    </header>
  )
}
