import { format } from 'date-fns'

import { legacyParse, convertTokens } from "@date-fns/upgrade/v2";

export function cn (...args) {
  return args.filter(Boolean).join(' ')
}

export function mapEdgesToNodes (data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs ({ slug }) {
  return (slug || {}).current
}

export function getBlogUrl(publishedAt, slug) {
  debugger;
  return `/blog/${format(
    legacyParse(legacyParse(publishedAt)),
    "yyyy'/'LL"

  )}/${slug.current || slug}/`;
}

export function buildImageObj (source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}
