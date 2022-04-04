// https://github.com/unocss/unocss/blob/main/packages/core/src/utils/helpers.ts
export const validateFilterRE = /(?!\d|-{2}|-\d)[a-zA-Z0-9\u00A0-\uFFFF-_:%-?]/
export function isValidSelector(selector = ''): selector is string {
    return validateFilterRE.test(selector)
}

// https://github.com/unocss/unocss/blob/main/packages/core/src/utils/helpers.ts
export const attributifyRE = /^\[(.+?)~?="(.*)"\]$/
export function isAttributifySelector(selector: string) {
    return selector.match(attributifyRE)
}