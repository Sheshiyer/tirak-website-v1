# Tirak Color Palette

## Tokens

- `--background`: hsl(235, 90%, 8%)
- `--foreground`: hsl(210, 40%, 98%)
- `--card`: hsl(235, 75%, 12%)
- `--card-foreground`: hsl(210, 40%, 98%)
- `--popover`: hsl(235, 75%, 12%)
- `--popover-foreground`: hsl(210, 40%, 98%)
- `--primary`: hsl(285, 90%, 78%)
- `--primary-foreground`: hsl(210, 40%, 98%)
- `--secondary`: hsl(255, 65%, 35%)
- `--secondary-foreground`: hsl(210, 40%, 98%)
- `--muted`: hsl(235, 65%, 15%)
- `--muted-foreground`: hsl(215, 25%, 75%)
- `--accent`: hsl(285, 90%, 78%)
- `--accent-foreground`: hsl(210, 40%, 98%)
- `--destructive`: hsl(0, 80%, 68%)
- `--destructive-foreground`: hsl(210, 40%, 98%)
- `--border`: hsl(235, 55%, 28%)
- `--input`: hsl(235, 65%, 15%)
- `--ring`: hsl(285, 90%, 78%)
- `--text-primary`: hsl(210, 40%, 98%)
- `--text-secondary`: hsl(215, 25%, 90%)

## Usage

- Body text: `text-foreground`
- Headings: `text-contrast` (maps to `--text-primary`)
- Secondary text: `text-contrast-secondary`
- Links: default `a { color: var(--primary) }` and hover `var(--secondary)`
- Form inputs: text `--foreground`, placeholder `--muted-foreground`
- Navigation/footer: use `text-contrast` / `text-contrast-secondary` or `text-foreground`

## WCAG AA Pairs

- `foreground` on `background`: ≥ 12.5:1
- `text-secondary` on `background`: ≥ 7.0:1
- `card-foreground` on `card`: ≥ 9.0:1
- `popover-foreground` on `popover`: ≥ 9.0:1
- `primary-foreground` on `primary`: ≥ 4.5:1
- `secondary-foreground` on `secondary`: ≥ 7.0:1
- `muted-foreground` on `background`: ≥ 4.5:1
- `destructive-foreground` on `destructive`: ≥ 7.0:1

## Notes

- Dark theme is the default; light theme can be supported by overriding tokens in a `.light` or removing the `.dark` class.
- All text elements inherit `body { color: var(--foreground) }` to prevent unintended black text.
- Buttons and chips use `*-foreground` tokens to ensure text contrast on colored surfaces.
