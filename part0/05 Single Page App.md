```mermaid
sequenceDiagram
    participant selain
    participant palvelin

    selain->>palvelin: GET spa.html
    palvelin->>selain: spa.html
    selain->>palvelin: GET main.css
    palvelin->>selain: main.css
    selain->>palvelin: GET spa.js
    palvelin->>selain: spa.js
    selain->>palvelin: GET data.json
    palvelin->>selain: data.json
```