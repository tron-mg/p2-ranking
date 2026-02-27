# Internal linking plan (fast-v1)

## Objective
Create a clear internal graph that pushes authority from homepage + methodology + educational cluster pages into the 4 ranking money pages, while preserving user intent pathways.

## Priority pages (Tier 1)
- `/rankingi/kolagen-do-picia/`
- `/rankingi/kolagen-rybi/`
- `/rankingi/kolagen-na-stawy/`
- `/rankingi/kolagen-w-proszku/`

## Supporting pages (Tier 2)
- `/metodologia/jak-oceniamy/`
- `/metodologia/kolagen-uroda/`
- `/metodologia/kolagen-stawy/`
- `/wiedza/hydrolizat-kolagenu/`
- `/wiedza/daltony-kolagenu/`
- `/wiedza/kiedy-pic-kolagen/`
- `/wiedza/efekty-kolagenu-do-picia/`
- `/wiedza/typy-kolagenu/`
- `/wiedza/kolagen-w-jedzeniu/`

## Linking rules

### 1) Homepage links
- Link to all 4 ranking pages in above-the-fold ranking block.
- Link to methodology hub from trust section.
- Link to 3–6 beginner guides in knowledge section.

### 2) Ranking-to-ranking mesh
Each ranking page should include:
- 2 contextual links to sibling rankings (same or adjacent intent).
- 1 direct link to `/rankingi/kolagen-na-stawy/` or `/rankingi/kolagen-do-picia/` as switch intent CTA.

### 3) Ranking-to-methodology
- At least 2 links per ranking page:
  - one near scoring summary,
  - one near FAQ/footer trust block.

### 4) Ranking-to-knowledge
- 4–8 contextual links from body sections (e.g., hydrolizat, daltony, efekty, pora stosowania).
- Use section-relevant anchors, avoid repeated exact-match anchor spam.

### 5) Knowledge-to-ranking return links
Every Tier 2 knowledge page should include:
- Primary CTA to most relevant ranking.
- Secondary CTA to alternate ranking intent.

### 6) Methodology-to-ranking links
- From each methodology page, link to all relevant rankings using neutral comparison anchors.

## Recommended anchor strategy

- **Primary exact/near-exact (limited):**
  - „ranking kolagenu do picia”
  - „ranking kolagenu rybiego”
  - „ranking kolagenu na stawy”
  - „ranking kolagenu w proszku”

- **Variant anchors (majority):**
  - „zobacz porównanie produktów”
  - „sprawdź aktualny ranking”
  - „który kolagen wybrać przy [intent]”

- **Context anchors (educational):**
  - „jak działa hydrolizat”
  - „co oznaczają daltony”
  - „kiedy stosować kolagen”

## Suggested per-page outbound internal links

- Homepage: 10–16
- Each ranking page: 12–22
- Each supporting guide: 6–12
- Methodology pages: 8–14

## Crawl-depth targets
- Tier 1 ranking pages reachable in 1 click from homepage.
- Tier 2 pages reachable in max 2 clicks from homepage.
- No orphan pages in ranking/knowledge/methodology clusters.

## Implementation checklist
- Add breadcrumb trails on all ranking + knowledge pages.
- Add “related rankings” module to all 4 ranking pages.
- Add “powiązane poradniki” module to ranking templates.
- Add “najlepsze rankingi dla tego tematu” module to knowledge pages.
- Re-crawl after deployment and verify all Tier 1 URLs gain links from:
  - homepage,
  - minimum 3 Tier 2 pages,
  - minimum 2 sibling ranking pages.