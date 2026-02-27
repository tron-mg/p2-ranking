# URL map proposal for fast-v1 (based on wybieramykolagen.pl)

## 1) Primary architecture

- `/` — Home (entry hub)
  - Purpose: route users to ranking intent + trust proof + latest expert content

- `/rankingi/` — Rankings hub (recommended new parent in fast-v1)
  - `/rankingi/kolagen-do-picia/`
  - `/rankingi/kolagen-rybi/`
  - `/rankingi/kolagen-na-stawy/`
  - `/rankingi/kolagen-w-proszku/`

- `/wiedza/` — Knowledge hub
  - `/wiedza/hydrolizat-kolagenu/`
  - `/wiedza/daltony-kolagenu/`
  - `/wiedza/kiedy-pic-kolagen/`
  - `/wiedza/efekty-kolagenu-do-picia/`
  - `/wiedza/typy-kolagenu/`
  - `/wiedza/kolagen-w-jedzeniu/`

- `/metodologia/` — Scoring transparency hub
  - `/metodologia/jak-oceniamy/`
  - `/metodologia/kolagen-uroda/`
  - `/metodologia/kolagen-stawy/`

- `/produkty/` — Product/brand pages (existing store layer)
  - `/produkty/{brand}/{product}/`

## 2) Current-to-fast-v1 URL mapping (focused subset)

- `/` → `/`
- `/kolagen-do-picia` → `/rankingi/kolagen-do-picia/`
- `/kolagen-rybi` → `/rankingi/kolagen-rybi/`
- `/kolagen-na-stawy` → `/rankingi/kolagen-na-stawy/`
- `/kolagen-w-proszku` → `/rankingi/kolagen-w-proszku/`
- `/jak-oceniamy` → `/metodologia/jak-oceniamy/`
- `/hydrolizat-kolagenu-rodzaje-jaki-wybrac` → `/wiedza/hydrolizat-kolagenu/`
- `/wyjasniamy-daltony` → `/wiedza/daltony-kolagenu/`
- `/kiedy-pic-kolagen-jak-dlugo-stosowac` → `/wiedza/kiedy-pic-kolagen/`
- `/kolagen-do-picia-efekty` → `/wiedza/efekty-kolagenu-do-picia/`
- `/kolagen-typu-1-2-3-i-inne` → `/wiedza/typy-kolagenu/`
- `/kolagen-w-jedzeniu` → `/wiedza/kolagen-w-jedzeniu/`

## 3) Ranking page IA blueprint (for all 4 ranking URLs)

1. Hero + intent qualifier (uroda / stawy)
2. Quick chooser (who this ranking is for)
3. Top picks snapshot (3–5)
4. Full comparison module
5. Scoring logic summary + link to methodology
6. Buyer education mini-cluster links
7. FAQ
8. Last update + editorial accountability

## 4) Homepage IA blueprint

1. Main value proposition
2. 4 ranking tiles (primary routes)
3. “How we evaluate” block (trust)
4. Beginner knowledge paths
5. Latest updates/articles
6. Popular product entities

## 5) Cluster taxonomy for internal consistency

- **Intent cluster A: Uroda**
  - Ranking cores: do picia, rybi, w proszku
  - Supporting guides: efekty, daltony, hydrolizat, typy

- **Intent cluster B: Stawy**
  - Ranking core: na stawy
  - Supporting guides: kiedy stosować, typy, hydrolizat, dieta

- **Trust cluster**
  - metodologia/jak oceniamy
  - category scoring docs

## 6) Migration/SEO notes

- Keep 301 map from legacy slugs to new directories.
- Preserve canonical equivalents and update internal links to new targets.
- Avoid duplicate ranking URLs under both old and new paths.
- Keep Polish-language slugs user-readable, short, and intent-specific.