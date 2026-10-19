# Solution page translations

Solution pages use the locale selected in the existing language menu, including Hindi.

To add Hindi content, add a `Solutions` object to `messages/hi.json`, using `messages/en.json` as the structure. Each key is a solution slug, for example `data-center-solutions` or `application-modernization`.

- Add the translated hero, expertise, delivery approach and business outcome text.
- Keep card and step array positions aligned with the English source.
- Links, icons, identifiers and numbers stay in `data/solutions`.
- Missing pages and individual fields use the English source until translations are supplied. Omit untranslated keys instead of adding empty strings.
- New translations appear automatically; no route, selector or layout changes are required.

The same fallback applies to all supported languages. Arabic keeps the existing text direction and alignment rules.
