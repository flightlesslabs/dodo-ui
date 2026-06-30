export const INPUT_ENCLOSURE_OUTLINE_VARIANT = {
  all: ['default', 'light', 'dark'],
} as const;

export type InputEnclosureOutlineVariant = (typeof INPUT_ENCLOSURE_OUTLINE_VARIANT.all)[number];

// Flat options (for Storybook, selects, etc.)
export const inputEnclosureOutlineVariantOptions = INPUT_ENCLOSURE_OUTLINE_VARIANT.all;

export const INPUT_ENCLOSURE_BACKGROUND = {
  all: ['none', 'neutral'],
} as const;

export type InputEnclosureBackground = (typeof INPUT_ENCLOSURE_BACKGROUND.all)[number];

// Flat options (for Storybook, selects, etc.)
export const inputEnclosureBackgroundOptions = INPUT_ENCLOSURE_BACKGROUND.all;
