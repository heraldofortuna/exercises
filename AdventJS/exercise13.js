function wrapGifts(gifts) {
  const cover = ["*".repeat(gifts[0].length + 2)];
  let gift = [];

  for (let i = 0; i < gifts.length; i++) {
    gift.push(`*${gifts[i]}*`);
  }

  return cover.concat(gift).concat(cover);
}

console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
