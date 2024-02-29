<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taverna Catering</title>
</head>
<body>
    <header>
        <h1>Taverna Catering</h1>
        <p>Ihr Partner für exklusive Veranstaltungen in Solothurn.</p>
    </header>
    <nav>
        <a href="#" onclick="loadPage('index.html')">Startseite</a>
        <a href="#" onclick="loadPage('kontakt.html')">Kontakt</a>
        <a href="#" onclick="loadPage('ueber-uns.html')">Über uns</a>
        <a href="#" onclick="loadPage('leistungen.html')">Leistungen</a>
    </nav>
    <section id="content">
        <!-- Hier wird der Inhalt der Seite dynamisch geladen -->
    </section>
    <footer>
        <p>&copy; 2024 Taverna Catering | Solothurn, Schweiz</p>
    </footer>

    <script>
        function loadPage(page) {
            fetch(page)
                .then(response => response.text())
                .then(html => {
                    document.getElementById('content').innerHTML = html;
                })
                .catch(error => console.error('Seite konnte nicht geladen werden:', error));
        }
    </script>
</body>
</html>
