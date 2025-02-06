![image](https://github.com/user-attachments/assets/9bada66f-6729-441f-b23f-c907cb0661bb)

<div align="center" style="padding-top: 20px">
  <h1 align="center">shadcn/ui cookies</h1>
  <p align="center">Sleek and flexible cookie consent solution for the web, designed with shadcn/ui.</p>
</div>

## Installation

To install the package, run the following command:

```bash
npx shadcn@latest add http://shadcn-cookies.vercel.app/r/cookie-consent.json
```

## Usage

The `CookieConsent` component provides a simple way to handle cookie consent in your application. It supports multiple variants (`default`, `small`, `minimal`) and allows you to execute custom functions when users accept or decline cookies.

### Default
```tsx
import { CookieConsent } from "@/components/ui/cookie-consent"

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
}
```

### Small
```tsx
import { CookieConsent } from "@/components/ui/cookie-consent"

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
}
```

### Minimal
```tsx
import { CookieConsent } from "@/components/ui/cookie-consent"

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
}
```

## Contributing

We welcome contributions to improve `shadcn/ui cookies`!

### How to Contribute
1. **Fork the Repository** - Click the "Fork" button at the top right of this page.
2. **Clone Your Fork** - Run the following command in your terminal:
```bash
git clone https://github.com/kaizenics/shadcn-cookies.git
cd shadcn-cookies
```
3. **Create a New Branch** - Name it something relevant. e.g., `feature-minimal-variant` or `variant-minimal-added`:
```bash
git checkout -b feature-minimal-variant
```
4. **Make Your Changes** - Implement your improvements or fixes.
5. **Commit & Push**
```bash
git add .
git commit -m "feat: added new cookie consent variant"
git push origin feature-minimal-variant
```
6. **Open a Pull Request** - Go to original repo, click "New Pull Request", and select your branch.
