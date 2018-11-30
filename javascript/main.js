var moviesDiv = document.querySelector('#Movies');
var currentDate = new Date();
var currentMonth = currentDate.getMonth() + 1;

if (currentMonth >= 6) {
  moviesDiv.innerHTML = `


  <section id="unique" style="margin-left: 300px; margin-right: 360px" >

    <a href="https://www.youtube.com/watch?v=592EiTD2Hgo" target="_blank">
    <img id="Big T" src="Big T.jpg" alt="Big T"style="width 1%; height 1%">
    </a>
    <h3 style="text-align: center; color: white; font-size: 15px"> <u>Big Trouble in little China</u><br>A rough-and-tumble <br>trucker helps rescue his<br> friend's fiancé from an<br> ancient sorcerer<br>in a supernatural battle <br>beneath Chinatown.</h3>

  </section>

  <section id="unique" style="margin-right: 320px">

    <a href="https://www.youtube.com/watch?v=O2yd4em1I6M" target="_blank">
    <img id="Labyrinth"src="Labyrinth.jpg" alt="Labyrinth"style="width 1%; height 1%">
    <a>
    <h3 style="text-align: center; color: white; font-size: 15px"><u>Labyrinth</u><br>A 16-year-old girl is given<br> 13 hours to solve a <br>labyrinth and rescue her<br> baby brother when her<br> wish for him to be taken <br>away is granted by the <br>Goblin King.</h3>

  </section>

  <section id="unique" style="margin-left: 80px">

    <a href="https://www.youtube.com/watch?v=ESh4t57L4Xs" target="_blank">
    <img id="Werewolf"src="Werewolf.jpg" alt="Werewolf"style="width 1%; height 1%">
    </a>
    <h3 style="text-align: center; color: white; font-size: 15px"> <u>An American Werewolf in <br>London</u><br>Two American college <br>students on a walking tour <br>of Britain are attacked by <br>a werewolf that none of the <br>locals will admit exists.</h3>

  </section>

  `}
  else if (currentMonth <= 7) {
  moviesDiv.innerHTML = `

  <section id="unique" style="margin-left: 200px; margin-right: 360px" >

    <a href="https://www.youtube.com/watch?v=UHl8F60t-ss" target="_blank">
    <img id="Pan" src="Pan.png" alt=""style="width 1%; height 1%;">
    </a>
    <h3 style="text-align: center; color: white; font-size: 15px"> <u>Pans Labyrinth</u><br>In the falangist Spain of 1944, <br>the bookish young stepdaughter <br>of a sadistic army officer <br>escapes into an eerie but captivating <br>fantasy world.</h3>

  </section>

  <section id="unique" style="margin-right: 320px">

    <a href="https://www.youtube.com/watch?v=Q-IZ4AatNa8" target="_blank">
    <img id="Blondes"src="Blondes.png" alt=""style="width 1%; height 1%">
    <a>
    <h3 style="text-align: center; color: white; font-size: 15px"><u>Gentlemen Prefer Blondes</u><br>Showgirls Lorelei Lee and <br>Dorothy Shaw travel to Paris, <br>pursued by a private detective <br>hired by the suspicious father of <br>Lorelei's fiancé, as well as a rich, <br>enamored old man and <br>many other doting admirers.</h3>

  </section>

  <section id="unique" style="margin-left: 80px">

    <a href="https://www.youtube.com/watch?v=YXIr1P9Fm5A" target="_blank">
    <img id="Kane"src="Kane.png" alt=""style="width 1%; height 1%">
    </a>
    <h3 style="text-align: center; color: white; font-size: 15px"> <u>Citizen Kane</u><br>Following the death of a <br>publishing tycoon, news <br>reporters scramble <br>to discover <br>the meaning of his <br>final utterance.</h3>

  </section>
  `}
