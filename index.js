$("#carouselExampleFade img, #carouselExampleFade2 img, #carouselExampleFade3 img, .hero-p").click(function(){
    anime = this.className;
    animeID = this.id;

    switch (anime) {
        case "demon-slayer":
            title = "Demon Slayer";
            description = "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
            imagesrc = "./images/demon-slayer.avif"
            break;
        case "jujutsu-kaison":
            title = "Jujutsu Kaison";
            description = "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself."
            imagesrc = "./images/Jujutsu kaison.jpg"
            break;
        case "aot":
            title = "Attack on Titan";
            description = "Attack on Titan is set in a world where humanity lives inside cities surrounded by enormous Walls that protect them from Titans, gigantic humanoid creatures who devour humans seemingly without reason."
            imagesrc = "./images/AOT.webp"
            break;
        case "blue-giant":
            title = "Blue Giant";
            description = "Dai Miyamoto's life is turned upside down the day he discovers jazz. A former high school basketball player, Dai picks up a saxophone and begins practicing day and night, determined to become one of the greatest of all time."
            imagesrc = "./images/movies/blue giant.jpg"
            break;
        case "death-note":
            title = "Death Note";
            description = "A student who discovers a supernatural notebook that allows him to kill anyone begins a crusade against evil in order to rule the world as a benevolent human god."
            imagesrc = "./images/movies/Death Note.webp"
            break;
        case "gridman-universe":
            title = "Gridman Universe";
            description = "Follows Yuta who repeatedly drew and then erased Gridman in his notebook, which he vaguely remembers. Then he decided to confess his feelings to Rikka, and their life in such a peaceful world begins to crumble with a roar."
            imagesrc = "./images/movies/gridman universe.jpg"
            break;
        case "one-peice":
            title = "One Peice";
            description = "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named One Piece."
            imagesrc = "./images/one-peice.jpe"
            break;
        case "spy":
            title = "Spy X Family";
            description = "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together."
            imagesrc = "./images/spy.jpg"
            break;
        case "castle":
            title = "Castle of Cagliostro";
            description = "A dashing thief, his gang of desperadoes and an intrepid cop struggle to free a princess from an evil count, and learn the secret of a treasure that she holds part of the key to."
            imagesrc = "./images/movies/castle.avif"
            break;
            
        default:
            break;
    }

    switch (animeID) {
        case "demon-slayer":
            title = "Demon Slayer";
            description = "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
            imagesrc = "./images/demon-slayer.avif"
            break;
        case "jujutsu-kaison":
            title = "Jujutsu Kaison";
            description = "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself."
            imagesrc = "./images/Jujutsu kaison.jpg"
            break;
        case "aot":
            title = "Attack on Titan";
            description = "Attack on Titan is set in a world where humanity lives inside cities surrounded by enormous Walls that protect them from Titans, gigantic humanoid creatures who devour humans seemingly without reason."
            imagesrc = "./images/AOT.webp"
            break;
            
        default:
            break;
    }

    // Create a query string with the selected anime's information
    var queryParams = "?anime=" + anime +
                      "&title=" + encodeURIComponent(title) +
                      "&description=" + encodeURIComponent(description) +
                      "&imagesrc=" + encodeURIComponent(imagesrc);

    // Redirect to the info page with the query string
    window.location.href = "./info.html" + queryParams;
});







