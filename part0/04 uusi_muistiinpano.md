```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: POST new_note, tekstikenttään syötetty tieto
    palvelin->>selain: GET notes
    selain->>palvelin: GET main.css
    palvelin->>selain: main.css
    selain->>palvelin: GET main.js
    palvelin->>selain: main.js
    selain->>palvelin: GET data.json
    palvelin->>selain: data.json
```