# LLM layer (llms.txt + markdown mirrors)

## Cel
Dodać warstwę łatwego pobierania treści przez modele (LLM retrieval), bez modyfikowania HTML.

## Jak wygenerowano
- Źródło: istniejące pliki `.html` w repo.
- Dla każdej strony mirror `.md` zawiera: identyfikator URL, krótki opis, sekcje faktów w punktach.
- `llms.txt`: krótki opis serwisu + polityki danych i RSP + kluczowe linki absolutne.
- `llms-full.txt`: rozszerzona mapa serwisu, reguły retrieval i utrzymania.

## Checklist utrzymania
- [ ] Po każdej zmianie rankingu odśwież odpowiadający plik `.md`.
- [ ] Po dodaniu nowej karty produktu dodaj jej mirror `.md`.
- [ ] Zweryfikuj, że linki w `llms.txt` i `llms-full.txt` są absolutne i działają.
- [ ] Sprawdź spójność polityki RSP (`numeric` / `check` / `missing`).
- [ ] Nie modyfikuj HTML w ramach utrzymania warstwy LLM.
