# Mein Microsoft Rechner-Nachbau (mit humorvollem Twist)

Dieses Projekt ist ein Nachbau des Standard-Taschenrechners von Microsoft als Webanwendung. Es wurde im Rahmen eines ein wöchigen Lernfeldes zur Webentwicklung erstellt und legt besonderen Wert auf die Implementierung der mathematischen Logik ohne externe Bibliotheken oder Imports. Es ist ein gescheitertes Projekt da mir die Zeit ausgelaufen ist daher mit bisschen Humor.

## Projekt-Highlights

- **Reiner Vanilla-Stack:** Ausschließlich mit HTML, CSS und nativem JavaScript (ohne Frameworks oder Bibliotheken) entwickelt, um die Grundlagen zu festigen.
- **Eigenständige Logik:** Alle mathematischen Berechnungen und die Rechnerlogik wurden von Grund auf selbst implementiert.
- **Humorvolle Easter Eggs:** Die ursprünglich für "Memory"-Funktionen vorgesehenen Tasten (MC, MR, M+, M-, MS, M˅) sowie die Menü- und Historie-Icons sind nun mit lustigen Memes und Videos verlinkt, um dem Projekt einen persönlichen und unterhaltsamen Touch zu verleihen.

## Funktionen des Rechners

Der Rechner unterstützt die grundlegenden mathematischen Operationen sowie einige erweiterte Funktionen:

- **Zahlen und Dezimalzahlen:** Eingabe von Ganzzahlen und Kommazahlen (mit Komma als Trennzeichen).
- **Grundrechenarten:** Addition (`+`), Subtraktion (`-`), Multiplikation (`×`), Division (`÷`).
- **Spezialfunktionen:**
  - `%`: Prozent (als unärer Operator oder im Kontext einer Operation, z.B. `50 + 10%`).
  - `CE`: Clear Entry (löscht die aktuelle Eingabe).
  - `C`: Clear (setzt den gesamten Rechner zurück).
  - `AC`: All Clear (identisch mit `C` in diesem Projekt).
  - `⌫` (Backspace): Löscht die letzte Ziffer.
  - `+/-`: Wechselt das Vorzeichen der aktuellen Zahl.
  - `¹/ₓ`: Kehrwert der Zahl.
  - `x²`: Quadrat der Zahl.
  - `√x`: Quadratwurzel der Zahl.
- **Gleichheitszeichen (`=`):** Führt die Berechnung aus und ermöglicht die Wiederholung der letzten Operation bei erneutem Drücken.

## Meme-Funktionen (Easter Eggs)

Klicke auf die folgenden Buttons, um lustige Inhalte in einem neuen Tab zu öffnen:

- **MC:** [meme 1](https://i.programmerhumor.io/2025/03/8f21e93be90ac51858707e7895c39fd8.jpeg)
- **MR:** [meme 2](https://i.programmerhumor.io/2025/07/09d9e11323a8f8cea2fe3811b6f0cbe2c88dea2594443f5a3a60ccb2292eb17e.jpeg)
- **M+:** [meme 3](https://i.programmerhumor.io/2025/07/3ee808957428a761073e8abb624a6ef1ad377f3e1e6be5a28e67e2b4b4702dbc.jpeg)
- **M-:** [meme 4](https://i.programmerhumor.io/2023/11/programmerhumor-io-programming-memes-6857797e3f28646.jpg)
- **MS:** [meme 5](https://i.programmerhumor.io/2023/11/programmerhumor-io-programming-memes-4f8d2d4cc668505.png)
- **M˅:** [meme 6](https://i.programmerhumor.io/2025/05/1360af01e5d4e5ee6fc2d6526c0382c83f9bb9d385cb9c2a2488370a39824cc1.gif)
- **☰ (Menü-Icon):** [meme 7](https://i.pinimg.com/originals/38/82/1d/38821d2946fa8e0439aaed83336eb20f.jpg)
- **⟳ (Historie-Icon):** [meme 8](https://i.programmerhumor.io/2023/02/programmerhumor-io-programming-memes-1bba7660f5b757c.jpg)

## Technologie-Stack

- **HTML5:** Für die Struktur und das Markup der Benutzeroberfläche.
- **CSS3:** Für das Styling und Layout, inklusive der Nachbildung des Microsoft-Designs (mit CSS Grid für das Button-Layout).
- **JavaScript (ES6+):** Für die gesamte Rechnerlogik und Interaktivität.

## Installation und Nutzung

1.  **Repository klonen:**

    ```bash
    git clone [https://zgrantelbart.github.io/Testprojekt/]
    ```

    oder lade die Dateien direkt von GitHub herunter.

2.  **Dateien öffnen:**
    Navigiere in das Projektverzeichnis.
    Öffne die Datei `index.html` in deinem bevorzugten Webbrowser (z.B. Chrome, Firefox).

    **Empfehlung:** Nutze die "Live Server" Erweiterung in VS Code, um die Entwicklung zu erleichtern.

## Lokale Entwicklung

Falls du Änderungen vornehmen möchtest:

1.  **VS Code:** Öffne den Projektordner in Visual Studio Code.
2.  **HTML (`index.html`):** Definiert die Elemente des Rechners.
3.  **CSS (`style.css`):** Stellt das Aussehen und Layout bereit.
4.  **JavaScript (`script.js`):** Enthält die gesamte Logik des Rechners und die Meme-Verknüpfungen.

---
