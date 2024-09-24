<!-- Lazy Load Images -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lazy Load</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>

<body>
  <main>
    <section id="sec-header">Lazy Loading Panel</section>
    <section class="section-lazy">
      <div class="content">
        In a golden afternoon glow, a cat perches on a rustic birdhouse, its gaze sharp and focused. With its fur
        catching the warm sunlight, the cat seems lost in thought, perhaps eyeing a distant bird or simply enjoying the
        peaceful surroundings. A perfect blend of curiosity and calm, the cat embodies the quiet magic of the
        outdoors.
      </div>
      <div>
        <img class="lazy-img" src="images/cat-small.jpg" data-src="images/cat.jpg" />
      </div>
    </section>
    <section class="section-lazy">
      <div>
        <img class="lazy-img" src="images/swan-small.jpg" data-src="images/swan.jpg" />
      </div>
      <div class="content">
        In the calm stillness of the evening, a graceful swan glides effortlessly across the glassy surface of the
        water. The soft blues of the twilight reflect off the lake, creating a mirror-like image of the swan, as if the
        world itself is holding its breath. Every gentle ripple of the water adds to the beauty of the scene, where the
        swan's elegant silhouette stands out in perfect contrast. 

      </div>
    </section>
    <section class="section-lazy">
      <div class="content">
        Active listening is more than just hearing words—it's about fully engaging with the speaker, understanding their
        message, and responding thoughtfully. When we practice active listening, we foster better communication, build
        stronger relationships, and create environments where everyone feels heard.
      </div>
      <div>
        <img class="lazy-img" src="images/listen-small.jpg" data-src="images/listen.jpg" />
      </div>
    </section>
    <section class="section-lazy">
      <div>
        <img class="lazy-img" src="images/understand-small.jpg" data-src="images/understand.jpg" />
      </div>
      <div class="content">
        This image embodies the delicate balance between introspection and ambition, reminding us that true growth
        happens both within and without. As we nurture our inner world, we're empowered to pursue our dreams, fueled by
        passion and determination. This symbolizes the constant flow of ideas, dreams, and aspirations that occupy our
        minds. 
    </section>
    <section class="section-lazy">
      <div class="content">
        This captivating image embodies the delicate balance between introspection and ambition. A human profile, split
        open like a doorway, reveals a winding staircase ascending into the mind, symbolizing the journey within.
        Thoughts and ideas take flight, dispersing into the vast expanse of a cloudy sky. 
      </div>
      <div>
        <img class="lazy-img" src="images/implement-small.jpg" data-src="images/implement.jpg" />
      </div>
    </section>
  </main>
  <footer></footer>
</body>

</html>
