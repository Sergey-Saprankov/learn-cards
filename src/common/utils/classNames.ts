type ModsType = Record<string, boolean | string>

export const classNames = (cls: string, mods: ModsType, additional: string[] = []): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => !!value)
      .map(([cls, value]) => cls),
    ...additional.filter(Boolean),
  ].join(' ')
}
