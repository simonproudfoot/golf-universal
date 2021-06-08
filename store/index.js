
export const strict = false
export const state = () => ({
  resetKey: 0,
  time: 1000,
  videoMode: false,
  view: 'main',
  story: null,
  interactiveKey: 0,
  iWasThere: [{
    thumb: 'thumbs/Jack_Nicklaus.jpg',
    title: 'Jack Nicklaus v Doug Sanders, 1970',
    heading: `<h1 class="text-7xl year">1979</h1>
      <h1 class="text-9xl font-light">DOUG</h1>
      <h1 class="text-9xl font-bold">SANDERS</h1>
      <h1 class="text-7xl year">v.</h1>
      <h1 class="text-9xl font-light">JACK</h1>
      <h1 class="text-9xl font-bold">NICKLAUS</h1>`,
    video: 'AV 5.1.1_Jack Nicklaus v Doug Sanders, 1970.mp4',
    image: '',
    text: 'A missed putt by Doug Sanders is one of the most famous in the history of The Open.  In the play-off Sanders loses by one shot to Jack Nicklaus, who wins his second Claret Jug.'
  },
  {
    thumb: 'thumbs/Justin_Rose.jpg',
    title: 'Justin Rose, 1998',
    heading: `<h1 class="text-7xl year">1989</h1><h1 class="text-9xl font-light">JUSTIN</h1><h1 class="text-9xl font-bold">ROSE</h1>`,
    video: 'AV 5.1.1_Justin Rose, 1998.mp4',
    image: '',
    text: 'The crowd at Birkdale roars with excitement as 17-year-old amateur Justin Rose birdies the 18th and ties for 4th place.  This is the best British amateur finish since Roger Wethered in 1921.'
  },
  {
    thumb: 'thumbs/Costantino_Rocca.jpg',
    title: 'Constantino Rocca, 1995',
    heading: `<h1 class="text-7xl year">1995</h1><h1 class="text-9xl font-light">CONSTANTINO</h1><h1 class="text-9xl font-bold">ROCCA</h1>`,
    video: 'AV 5.1.1_Constantino Rocca, 1995.mp4',
    image: '',
    text: 'Costantino Rocca fluffs his chip to the 18th and then produces the shot of the Championship, holing a 65-foot putt from the Valley of Sin to tie the eventual winner, John Daly.'
  },
  {
    thumb: 'thumbs/Ballesteros.jpg',
    title: 'Seve Ballesteros, 1984',
    heading: `<h1 class="text-7xl year">1984</h1><h1 class="text-9xl font-light">SEVE</h1><h1 class="text-9xl font-bold">BALLESTEROS</h1>`,
    video: 'AV 5.1.1_Seve Ballesteros, 1984.mp4',
    image: '',
    text: 'Following a wonderful second shot to the last Seve Ballesteros sinks the winning putt to claim his second Open Championship. His joyous fist pump is one of the iconic moments in sport.'
  },
  {
    thumb: 'thumbs/Tiger_Woods.jpg',
    title: 'Tiger Woods, 2006',
    heading: `<h1 class="text-7xl year">2006</h1><h1 class="text-9xl font-light">TIGER</h1><h1 class="text-9xl font-bold">WOODS</h1>`,
    video: 'AV 5.1.1_Tiger Woods, 2006.mp4',
    image: '',
    text: 'Woods claims a second successive victory at Hoylake, ‘blown upon by mighty winds, breeder of mighty champions.’  An emotional victory coming just two months after the death of his father, Earl.'
  },
  {
    thumb: 'thumbs/2009_play_off.jpg',
    title: 'Tom Warson v Stuart Cink, 2009',
    heading: `<h1 class="text-7xl year">2009</h1>
      <h1 class="text-9xl font-light">TOM</h1>
      <h1 class="text-9xl font-bold">WARSON</h1>
      <h1 class="text-7xl year">v.</h1>
      <h1 class="text-9xl font-light">STUART</h1>
      <h1 class="text-9xl font-bold">CINK</h1>`,
    video: 'AV 5.1.1_Tom Warson v Stuart Cink, 2009.mp4',
    image: '',
    text: 'Tom Watson nearly steps into the record books. At 59 years old, he is within one stroke of defeating Stewart Cink, and claiming his sixth Open title.  Watson misses and Cink wins the play-off.'
  },
  {
    thumb: 'thumbs/Rory_Mcllroy.jpg',
    title: 'Rory McIlroy, 2014',
    heading: `<h1 class="text-7xl year">1995</h1><h1 class="text-9xl font-light">RORY</h1><h1 class="text-9xl font-bold">MCILROY</h1>`,
    video: 'AV 5.1.1_Rory McIlroy, 2014.mp4',
    image: '',
    text: 'One of only seven winners to be outright leader after each round, Rory McIlroy dominates the 2014 Open. Aged just 25, he represents the rise of a new generation of champions.'
  },
  {
    thumb: 'thumbs/Jordan_Spieth.jpg',
    title: 'Jordan Spieth, 2017',
    heading: `<h1 class="text-7xl year">1995</h1><h1 class="text-9xl font-light">JORDAN</h1><h1 class="text-9xl font-bold">SPIETH</h1>`,
    video: 'AV 5.1.1_Jordan Spieth, 2017.mp4',
    image: '',
    text: 'After facing trouble at the 13th Jordan Spieth shows remarkable resilience to regain the lead and win the Championship at Birkdale. Spieth’s final round, a stunning performance, is truly inspiring.'
  },
  {
    thumb: 'thumbs/Shane_Lowry.jpg',
    title: 'Shane Lowry, 2019',
    heading: `<h1 class="text-7xl year">1995</h1><h1 class="text-9xl font-light">SHANE</h1><h1 class="font-bold text-9xl">LOWRY</h1>`,
    video: 'AV 5.1.1_Shane Lowry, 2019.mp4',
    image: '',
    text: 'It is 68 years since the Open has been played in Northern Ireland.  On the 18th spectators rush to witness home favourite Shane Lowry sink the winning putt and thrill the crowd.'
  },
  ],
  followTheOneGreen: [{
    thumb: 'thumbs/TomMorris.png',
    title: 'Tom Morris Sr.',
    heading: `<h1 class="text-9xl font-light">TOM</h1><h1 class="text-9xl font-bold">MORRIS SNR.</h1>`,
    video: 'TomMorriss.mp4',
    image: '',
    text: 'A legendary figure, Old Tom Morris as he was known to the golfing world and beyond, is the individual most responsible for shaping the game of golf still familiar to us today.'
  },
  {
    thumb: 'thumbs/HarryVardon.png',
    title: 'Harry Vardon',
    heading: `<h1 class="text-9xl font-light">HARRY</h1><h1 class="font-bold text-9xl">VARDON</h1>`,
    video: 'HarryVardon.mp4',
    image: '',
    text: 'The most celebrated member of The Great Triumvirate and the first player to win a record six Open Championship titles, Harry Vardon’s record has not yet been equaled or bettered.'
  },
  {
    thumb: 'thumbs/PeterThomson.png',
    title: 'Peter Thomson',
    heading: `<h1 class="text-9xl font-light">PETER</h1><h1 class="font-bold text-9xl">THOMSON</h1>`,
    video: 'PeterThomson.mp4',
    image: '',
    text: 'Peter Thomson was Open Champion five times; an impressive record made more notable by his hat-trick of wins in the mid-1950s.  A run of titles not yet matched in either the 20th or 21st centuries.'
  },
  {
    thumb: 'thumbs/ArnoldPalmer.png',
    title: 'Arnold Palmer',
    heading: `<h1 class="text-9xl font-light">ARNOLD</h1><h1 class="font-bold text-9xl">PALMER</h1>`,
    video: 'ArnoldPalmer.mp4',
    image: '',
    text: 'With charisma, skill and incredible strength, Arnold Palmer ‘the King’ won back-to-back in 1961 and 1962.  His ‘army’ of supporters and love of the Open reinvigorated the Championship, especially amongst his fellow Americans.'
  },
  {
    thumb: 'thumbs/JackNicklaus.png',
    title: 'Jack Nicklaus',
    heading: `<h1 class="text-9xl font-light">JACK</h1><h1 class="font-bold text-9xl">NICKLAUS</h1>`,
    video: 'JackNicklaus.mp4',
    image: '',
    text: 'Jack Nicklaus, holder of a record 18 Majors including two St Andrews Opens, was a legendary competitor. ‘The Golden Bear’ remained a dominant force in the game for many years.'
  },
  {
    thumb: 'thumbs/TigerWoods.png',
    title: 'Tiger Woods',
    heading: `<h1 class="text-9xl font-light">TIGER</h1><h1 class="text-9xl font-bold">WOODS</h1>`,
    video: 'TigerWoods.mp4',
    image: '',
    text: 'Three-time winner of the Claret Jug Tiger Woods is a global icon who transcends the game of golf.  Always ambitious, he is one of the most successful golfers of all time.'
  },
  {
    thumb: 'thumbs/TomWatson.png',
    title: 'Tom Watson',
    heading: `<h1 class="text-9xl font-light">TOM</h1><h1 class="text-9xl font-bold">WATSON</h1>`,
    video: 'TomWatson.mp4',
    image: '',
    text: 'Tom Watson won five Opens within nine years. He is the only Champion to have won so many Claret Jugs in so few years and only Harry Vardon won more titles, with six.'
  },
  ],
  eyeOfTheStorm: [{
    thumb: 'test/testThumb.jpg',
    title: 'Tom Kidd, 1873',
    heading: `<h1 class="text-7xl year">1873</h1><h1 class="text-9xl font-light">TOM</h1><h1 class="text-9xl font-bold">KIDD</h1>`,
    video: 'eye_of_the_storm/tom_kidd.mp4',
    image: '',
    text: 'After days of rain and with the course almost unplayable, St Andrews caddie Tom Kidd withstands the difficult conditions and holes his putt to win the Open.  The first player to win on debut.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Bob Ferguson, 1881',
    heading: `<h1 class="text-7xl year">1881</h1><h1 class="text-9xl font-light">BOB</h1><h1 class="text-9xl font-bold">FERGUSON</h1>`,
    video: 'eye_of_the_storm/bob_ferguson.mp4',
    image: '',
    text: 'Severe gales, rain, sleet and snow result in a high scoring Championship.  Despite the terrible conditions Bob Ferguson successfully defends his title, one of only eight players to finish out of a field of 22.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Willie Auchterlonie, 1893',
    heading: `<h1 class="text-7xl year">1893</h1><h1 class="text-9xl font-light">WILLIE</h1><h1 class="font-bold text-9xl">AUCHTERLONIE</h1>`,
    video: 'eye_of_the_storm/willie_auchterlonie.mp4',
    image: '',
    text: 'The first Open to be played over 72 holes is won by Willie Auchterlonie. His victory the result of determination to play on through the worst conditions he and his fellow competitors have ever experienced.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Reg Whitcombe, 1938',
    heading: `<h1 class="text-7xl year">1938</h1><h1 class="fobt-light text-9xl">REG</h1><h1 class="font-bold text-9xl">WHITCOMBE</h1>`,
    video: 'eye_of_the_storm/reg_whitcombe.mp4',
    image: '',
    text: 'Reg Whitcombe plays steadily through one of the worst storms to hit the Open.  One of only three finishers to score under 300, he wins the Claret Jug by two strokes.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Kel Nagle, 1960',
    heading: `<h1 class="text-7xl year">1960</h1><h1 class="text-9xl font-light">KEL</h1><h1 class="text-9xl font-bold">NAGLE</h1>`,
    video: 'eye_of_the_storm/kel_nagle.mp4',
    image: '',
    text: 'Play in the Centenary Open is suspended after torrential rain floods the course. When the Championship resumes the following day Australian Kel Nagle wins, defeating Arnold Palmer by one shot.'
  },

  {
    thumb: 'test/testThumb.jpg',
    title: 'Arnold Palmer, 1961',
    heading: `<h1 class="text-7xl year">1961</h1><h1 class="text-9xl font-light">ARNOLD</h1><h1 class="font-bold text-9xl">PALMER</h1>`,
    video: 'eye_of_the_storm/arnold_palmer.mp4',
    image: '',
    text: 'Wind and rain cause damage and delay in the 1961 Open. Yet third round leader Arnold Palmer, playing his legendary attacking style, persists and wins by the closest of margins.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Greg Norman, 1986',
    heading: `<h1 class="text-7xl year">1986</h1><h1 class="text-9xl font-light">GREG</h1><h1 class="font-bold text-9xl">NORMAN</h1>`,
    video: 'eye_of_the_storm/greg_norman.mp4',
    image: '',
    text: 'Wild weather at Turnberry on the spectacular Ayrshire coast makes for a challenging Championship. Despite this, Greg Norman holds on to his second-round lead to win his only Claret Jug by five strokes.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Louis Oosthuizen, 2010',
    heading: `<h1 class="text-7xl year">2010</h1><h1 class="text-9xl font-light">LOUIS</h1><h1 class="font-bold text-9xl">OOSTHUIZEN</h1>`,
    video: '',
    video: 'eye_of_the_storm/louis.mp4',
    text: 'A calm and composed Louis Oosthuizen wins the 2010 Open by an amazing seven strokes. Amazing given the disruption caused to play by a combination of high winds and heavy rain.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Zach Johnson, 2015',
    heading: `<h1 class="text-7xl year">2015</h1><h1 class="text-9xl font-light">ZACH</h1><h1 class="font-bold text-9xl">JOHNSON</h1>`,
    video: 'eye_of_the_storm/zach_johnson.mp4',
    image: '',
    text: 'Wind, rain, delays and play-offs result in only the second Open to finish on a Monday. Won by Zach Johnson after one of the tensest climaxes in the history of the Championship.'
  }
  ],
  followTheOneYellow: [{
    thumb: 'test/testThumb.jpg',
    title: '1879 – Jamie Anderson',
    heading: `<h1 class="text-7xl year">1879</h1><h1 class="text-9xl font-light">JAMIE</h1><h1 class="text-9xl font-bold">ANDERSON</h1>`,
    video: 'follow_the_one/jamie_anderson.mp4',
    image: '',
    text: 'Jamie Anderson becomes Champion first at Musselburgh, then Prestwick and finally St Andrews in consecutive years, 1877, 1878 and 1879.  A late change of date the following year denying him the chance of winning a fourth.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: '1937 – Henry Cotton',
    heading: `<h1 class="text-7xl year">1937</h1><h1 class="text-9xl font-light">HENRY</h1><h1 class="font-bold text-9xl">COTTON</h1>`,
    video: 'follow_the_one/henry_cotton.mp4',
    image: '',
    text: 'Despite the heavy rain at Carnoustie, which almost floods the course, Henry Cotton needs only 26 putts to complete his fourth round and win his second Open title; the finest performance of his career.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: '1951 – Max Faulkner',
    heading: `<h1 class="text-7xl year">1951</h1><h1 class="text-9xl font-light">MAX</h1><h1 class="font-bold text-9xl">FAULKNER</h1>`,
    video: 'follow_the_one/max_faulkner.mp4',
    image: '',
    text: 'One time winner Max Faulkner, a flamboyant figure who often used unconventional clubs, wins in 1951 with a putter made from driftwood and a billiard cue, fulfilling his own belief he would be Champion Golfer.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: '1957 – Bobby Locke',
    heading: `<h1 class="text-7xl year">1957</h1><h1 class="text-9xl font-light">BOBBY</h1><h1 class="font-bold text-9xl">LOCKE</h1>`,
    video: 'follow_the_one/bobby_locke.mp4',
    image: '',
    text: 'The final stages of the 1957 Open are the first to be broadcast live and viewers spot Bobby Locke fail to replace his marker correctly on the 18th green, but the result stands and he wins his fourth Championship.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: '1967 – Roberto de Vicenzo',
    heading: `<h1 class="text-7xl year">1967</h1><h1 class="text-9xl font-light">ROBERTO</h1><h1 class="font-bold text-9xl">DE VICENZO</h1>`,
    video: 'follow_the_one/roberto_de_vicenzo.mp4',
    image: '',
    text: 'Argentinian Roberto de Vicenzo is the only South American to lift the Claret Jug.  Successful in 1967, ten years after his first Open, at 44 he is the second oldest Champion after Old Tom Morris.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: '1985 – Sandy Lyle',
    heading: `<h1 class="text-7xl year">1985</h1><h1 class="text-9xl font-light">SANDY</h1><h1 class="font-bold text-9xl">LYLE</h1>`,
    video: 'follow_the_one/sandy_lyle.mp4',
    image: '',
    text: 'Open Champion in 1985, Sandy Lyle is the first British winner in 16 years. Masters Champion in 1988, Lyle has played in 42 consecutive Opens from 1977 to 2018, a record beaten only by Gary Player.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: '2013 – Phil Mickelson',
    heading: `<h1 class="text-7xl year">2013</h1><h1 class="text-9xl font-light">PHIL</h1><h1 class="text-9xl font-bold">MICKELSON</h1>`,
    video: 'follow_the_one/phil_mickelson.mp4',
    image: '',
    text: '2013 Champion Phil Mickelson, the second left hander to win, shares the record for competing in the most Opens, 19, before victory.  His final round 66 is the lowest by a Champion at Muirfield.'
  }],
  duels: [
    {
      thumb: 'test/testThumb.jpg',
      title: '1860 – Willie Park Sr v Tom Morris Sr',
      heading: `<h1 class="text-7xl year">1860</h1>
      <h1 class="text-9xl font-light">WILLIE</h1>
      <h1 class="text-9xl font-bold">PARK SR</h1>
      <h1 class="text-7xl year">v.</h1>
      <h1 class="text-9xl font-light">TOM</h1>
      <h1 class="text-9xl font-bold">MORRIS SR</h1>`,
      video: 'duels/willie_park_sr_v_tom_morris_sr.mp4',
      image: '',
      text: ''
    },
    {
      thumb: 'test/testThumb.jpg',
      title: 'Lee Trevino v Tony Jacklin, 1972',
      heading: `<h1 class="text-7xl year">1972</h1>
      <h1 class="text-9xl font-light">LEE</h1>
      <h1 class="text-9xl font-bold">TREVINO</h1>
      <h1 class="text-7xl year">v.</h1>
      <h1 class="text-9xl font-light">TONY</h1>
      <h1 class="text-9xl font-bold">JACKLIN</h1>`,
      video: '',
      image: '',
      text: 'All square with Tony Jacklin at the 17th, Lee Trevino bunkers his drive. He makes par with a miraculous shot from off the green. Jacklin three putts and the title slips away.'
    },
    {
      thumb: 'test/testThumb.jpg',
      title: 'Tom Watson v Jack Nicklaus, 1977',
      heading: `<h1 class="text-7xl year">1977</h1>
      <h1 class="text-9xl uppercase font-light">Tom</h1>
      <h1 class="text-9xl uppercase font-bold">Watson</h1>
      <h1 class="text-7xl year">v.</h1>
      <h1 class="text-9xl uppercase font-light">Jack</h1>
      <h1 class="text-9xl uppercase font-bold">Nicklaus</h1>`,
      video: 'duels/tom_watson_v_jack_nicklaus.mp4',
      image: '',
      text: 'The legendary ‘Duel in the Sun’ sees Watson and Nicklaus match each other stroke for stroke. Victory rests in Watson’s hands as he sinks a two-foot putt for the Championship.'
    },
    {
      thumb: 'test/testThumb.jpg',
      title: 'Nick Price v Jesper Parnevik, 1994',
      heading: `<h1 class="text-7xl year">1994</h1>
      <h1 class="text-9xl uppercase font-light">Nick</h1>
      <h1 class="text-9xl uppercase font-bold">Price</h1>
      <h1 class="text-7xl year">v.</h1>
      <h1 class="text-9xl uppercase font-light">Jesper</h1>
      <h1 class="text-9xl uppercase font-bold">Parnevik</h1>`,
      video: 'duels/nick_price_v_jesper_parnevik.mp4',
      image: '',
      text: 'Twice runner-up, Nick Price becomes Champion Golfer of the Year despite a strong challenge from Jesper Parnevik. The pivotal moment comes at the 17th when Price sinks a stunning 50-foot putt for eagle.'
    },
    {
      thumb: 'test/testThumb.jpg',
      title: 'Henrik Stenson v Phil Michelson, 2016',
      heading: `<h1 class="text-7xl year">2016</h1>
      <h1 class="text-9xl uppercase font-light">Henrik</h1>
      <h1 class="text-9xl uppercase font-bold">Stenson</h1>
      <h1 class="text-7xl year">v.</h1>
      <h1 class="text-9xl uppercase font-light">Phil</h1>
      <h1 class="text-9xl uppercase font-bold">Michelson</h1>`,
      video: 'duels/henrik_stenson_v_phil_michelson.mp4',
      image: '',
      text: 'Spectators witness an epic final round.  Henrik Stenson and Phil Mickelson are locked in battle far ahead of the pack.  Ten birdies secure victory for Stenson, the first Swedish Champion.'
    }
  ],
  makingHistory: [{
    thumb: 'test/testThumb.jpg',
    title: 'Arnaud Massy, 1907',
    heading: `<h1 class="text-7xl year">1907</h1><h1 class="text-9xl uppercase font-light">Arnaud</h1><h1 class="uppercase text-9xl font-bold">Massy</h1>`,
    video: '',
    image: '',
    text: 'Frenchman Arnaud Massy is the first Continental Champion Golfer of the Year.  Able to play either right or left-handed he masters the strong winds on the course at Hoylake and pushes J H Taylor into second place.'
  }, {
    thumb: 'test/testThumb.jpg',
    title: 'Walter Hagen, 1922',
    heading: `<h1 class="text-7xl year">1922</h1><h1 class="text-9xl uppercase font-light">Walter</h1><h1 class="uppercase font-bold text-9xl">Hagen</h1>`,
    video: 'making_history/walter_hagen.mp4',
    image: '',
    text: 'Golf’s earliest showman, Walter Hagen is the first native-born American to take the Claret Jug home across the Atlantic. He would go on to win a further three Open Championships.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Bobby Jones, 1930',
    heading: `<h1 class="text-7xl year">1930</h1><h1 class="text-9xl uppercase font-light">Bobby</h1><h1 class="uppercase text-9xl font-bold">Jones</h1>`,
    video: 'making_history/bobby_jones.mp4',
    image: '',
    text: '1930 Amateur Champion and the only amateur winner of The Open in the 20th century, Bobby Jones wins for the third time.  He later completed the Grand Slam by winning the US Open and Amateur.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Henry Cotton, 1934',
    heading: `<h1 class="text-7xl year">1934</h1><h1 class="text-9xl uppercase font-light">Henry</h1><h1 class="uppercase text-9xl font-bold">Cotton</h1>`,
    video: 'making_history/henry_cotton.mp4',
    image: '',
    text: 'The first British winner since 1923 Henry Cotton ends years of American dominance. Scoring a course record 65, he also had the lowest 36 and 54 holes in the Championship.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Fred Daly, 1947',
    heading: `<h1 class="text-7xl year">1947</h1><h1 class="text-9xl uppercase font-light">Fred</h1><h1 class="uppercase text-9xl font-bold">Daly</h1>`,
    video: 'making_history/fred_daly.mp4',
    image: '',
    text: 'To loud applause from an enthusiastic crowd Fred Daly birdies the last for a score of 293 and the Championship, making history as the first Irish winner of The Open.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Bob Charles, 1963',
    heading: `<h1 class="text-7xl year">1963</h1><h1 class="text-9xl uppercase font-light">Bob</h1><h1 class="uppercase text-9xl font-bold">Charles</h1>`,
    video: 'making_history/bob_charles.mp4',
    image: '',
    text: 'In a tight contest Bob Charles is taken into a play-off by Phil Rodgers. Charles wins convincingly becoming the first left-hander, and so far, the only New Zealander, to be Champion Golfer.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Gary Player, 1974',
    heading: `<h1 class="text-7xl year">1974</h1><h1 class="text-9xl uppercase font-light">Gary</h1><h1 class="uppercase text-9xl font-bold">Player</h1>`,
    video: 'making_history/gary_player.mp4',
    image: '',
    text: 'Forced to putt left-handed inches from the clubhouse wall Gary Player secures an historic victory at Royal Lytham & St Annes, the third of three wins in three separate decades.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Sir Nick Faldo, 1990',
    heading: `<h1 class="text-7xl year">1990</h1><h1 class="text-9xl font-light uppercase">sir</h1><h1 class="text-9xl font-light uppercase">Nick</h1><h1 class="uppercase font-bold text-9xl">Faldo</h1>`,
    video: 'making_history/sir_nick_faldo.mp4',
    image: '',
    text: 'Forced to putt left-handed inches from the clubhouse wall Gary Player secures an historic victory at Royal Lytham & St Annes, the third of three wins in three separate decades.'
  },
  {
    thumb: 'test/testThumb.jpg',
    title: 'Brandon Grace, 2017',
    heading: `<h1 class="text-7xl year">2017</h1><h1 class="text-9xl uppercase font-light">Brandon</h1><h1 class="font-bold uppercase text-9xl">Grace</h1>`,
    video: 'making_history/brandon_grace.mp4',
    image: '',
    text: 'On the third day at Royal Birkdale, South African Branden Grace makes eight birdies and posts a 62, the lowest round in any Major, including the 146 years of the Open.'
  },
  ],
  againstAllOdds: [{
    thumb: 'test/testThumb.jpg',
    title: 'Bob Martin, 1876',
    heading: `<h1 class="text-7xl year">1876</h1><h1 class="font-light text-9xl uppercase">Bob</h1><h1 class="font-bold uppercase text-9xl">Martin</h1>`,
    video: 'against_all_odds/bob_martin.mp4',
    image: '',
    text: 'For the first time a tie is declared when Davie Strath and Bob Martin finish with identical scores.  Strath refuses to take part in the play-off Bob Martin walks the course and is declared Champion.'
  }, {
    thumb: 'test/testThumb.jpg',
    title: 'Tommy Armour, 1931',
    heading: `<h1 class="text-7xl year">1931</h1><h1 class="text-9xl uppercase font-light">Tommy</h1><h1 class="font-bold uppercase text-9xl">Armour</h1>`,
    video: 'against_all_odds/tommy_armour.mp4',
    image: '',
    text: 'Born in Edinburgh Tommy Armour, later an American citizen, wins the day despite having lost the sight in one eye in WW1.  The ‘Silver Scot’ defeats Argentinan Jose Jurado by one stroke.'
  }
    , {
    thumb: 'test/testThumb.jpg',
    title: 'Ben Hogan, 1953',
    heading: `<h1 class="text-7xl year">1953</h1><h1 class="text-9xl uppercase font-light">Ben</h1><h1 class="font-bold uppercase text-9xl">Hogan</h1>`,
    video: 'against_all_odds/ben_hogan.mp4',
    image: '',
    text: 'Battling chills, flu and car crash injuries Ben Hogan is followed by huge galleries in his only Open appearance.  Finishing on 282 his win at Carnoustie is his third Major in one year.',
  }, {
    thumb: 'test/testThumb.jpg',
    title: 'Paul Lawrie, 1999',
    heading: `<h1 class="text-7xl year">1999</h1><h1 class="text-9xl uppercase font-light">Paul</h1><h1 class="font-bold uppercase text-9xl">Lawrie</h1>`,
    video: 'against_all_odds/paul_lawrie.mp4',
    image: '',
    text: 'Jean Van de Velde’s chance of an outright win finishes in the Barry Burn. Scot Paul Lawrie, a qualifier who started the day 10 shots adrift, wins the play-off by three shots.',
  }
    , {
    thumb: 'test/testThumb.jpg',
    title: 'Ben Curtis, 2003',
    heading: `<h1 class="text-7xl year">2003</h1><h1 class="text-9xl uppercase font-light">Ben</h1><h1 class="uppercase font-bold text-9xl">Curtis</h1>`,
    video: 'against_all_odds/ben_curtis.mp4',
    image: '',
    text: 'Ben Curtis, ranked 396th, wins on his Open debut. Following good advice from his caddie he sinks six birdies in 11 holes in the final round causing one of the biggest upsets in Open history.'
  }
    , {
    thumb: 'test/testThumb.jpg',
    title: 'Padraig Harrington, 2007',
    heading: `<h1 class="text-7xl year">2007</h1><h1 class="text-9xl uppercase font-light">Padraig</h1><h1 class="font-bold uppercase text-9xl">Harrington</h1>`,
    video: 'against_all_odds/padraig_harrington.mp4',
    image: '',
    text: 'Having twice put his ball into Carnoustie’s notorious Barry Burn, at the last Padraig Harrington still manages to catch Sergio Garcia and defeat him in the play-off by one shot.'
  }
    , {
    thumb: 'test/testThumb.jpg',
    title: 'Ernie Els, 2012',
    heading: `<h1 class="text-7xl year">2012</h1><h1 class="text-9xl uppercase font-light">Ernie</h1><h1 class="font-bold uppercase text-9xl">Els</h1>`,
    video: 'against_all_odds/ernie_els.mp4',
    image: '',
    text: 'Having never led in any round of the 2012 Open, Ernie Els becomes Champion Golfer ten years after winning his first Claret Jug, following a disastrous collapse by Adam Scott in the final four holes.'
  }
  ]
})

export const getters = {

  againstallodds(state) {
    return state.againstAllOdds
  },
  makinghistory(state) {
    return state.makingHistory
  },
  iwasthere(state) {
    return state.iWasThere
  },
  followtheonegreen(state) {
    return state.followTheOneGreen
  },
  followtheoneyellow(state) {
    return state.followTheOneYellow
  },
  duels(state) {
    return state.duels
  },
  eyeofthestorm(state) {
    return state.eyeOfTheStorm
  },
  videoMode(state) {
    return state.videoMode
  },
}

export const mutations = {

  setSocket(state, val) {
    state.socket = val
  },

  resetAll(state) {
    state.resetKey++
    setTimeout(() => {
      state.view = 'main'
      state.story = null

    }, 1000);

  },
  setVideoMode(state, val) {
    state.videoMode = val
  },
  setView(state, val) {
    state.view = val
  },
  setStory(state, val) {
    state.story = val
  },
  intKey(state, val) {
    state.interactiveKey++
  },
  setTime(state, val) {
    state.time = val
  }

}