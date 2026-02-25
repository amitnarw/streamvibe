import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-light': 'var(--color-surface-light)',
        border: 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
      },
    },
  },
};

export default config;
