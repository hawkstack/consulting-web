import type { Metadata } from "next"

type SeoMetaProps = {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
}

export function seoMeta({
  title,
  description,
  keywords,
  canonical,
}: SeoMetaProps): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
  }
}
