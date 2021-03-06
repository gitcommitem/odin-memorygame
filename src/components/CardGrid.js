import '../styles/CardGrid.css';
import Card from '../components/Card';

const CardGrid = ({ onClick, clickedEmojis }) => {
  const emojiList = [
    '๐ ',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐คฃ',
    '๐ฅฒ',
    'โบ๏ธ',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐ฅฐ',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐คช',
    '๐คจ',
    '๐ง',
    '๐ค',
    '๐',
    '๐ฅธ',
    '๐คฉ',
    '๐ฅณ',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    '๐',
    'โน๏ธ',
    '๐ฃ',
    '๐',
    '๐ซ',
    '๐ฉ',
    '๐ฅบ',
    '๐ข',
    '๐ญ',
    '๐ค',
    '๐ ',
    '๐ก',
    '๐คฌ',
    '๐คฏ',
    '๐ณ',
    '๐ฅต',
    '๐ฅถ',
    '๐ฑ',
    '๐จ',
    '๐ฐ',
    '๐ฅ',
    '๐',
    '๐ค',
    '๐ค',
    '๐คญ',
    '๐คซ',
    '๐คฅ',
    '๐ถ',
    '๐',
    '๐',
    '๐ฌ',
    '๐',
    '๐ฏ',
    '๐ฆ',
    '๐ง',
    '๐ฎ',
    '๐ฒ',
    '๐ฅฑ',
    '๐ด',
    '๐คค',
    '๐ช',
    '๐ต',
    '๐ค',
    '๐ฅด',
    '๐คข',
    '๐คฎ',
    '๐คง',
    '๐ท',
    '๐ค',
    '๐ค',
    '๐ค',
    '๐ค ',
    '๐',
    '๐ฟ',
    '๐น',
    '๐บ',
    '๐คก',
    '๐ฉ',
    '๐ป',
    '๐',
    'โ ๏ธ',
    '๐ฝ',
    '๐พ',
    '๐ค',
    '๐',
    '๐บ',
    '๐ธ',
    '๐น ',
    '๐ป',
    '๐ผ',
    '๐ฝ',
    '๐',
    '๐ฟ',
    '๐พ'
  ];

  const generatedCards = [];

  const randomIndex = array => {
    return Math.floor(Math.random() * array.length);
  };

  const randomLength = () => {
    return Math.floor(Math.random() * (15 - 0 + 1) + 0);
  };

  const length = randomLength();

  const randomEmoji = () => {
    let index, randomEmoji;

    if (clickedEmojis.length >= 16 && generatedCards.length === length) {
      // Make sure to include one unclicked emoji in a random position
      const unclickedEmojis = emojiList.filter(
        emoji => clickedEmojis.indexOf(emoji) === -1
      );

      if (unclickedEmojis.length === 0) {
        alert('You clicked all emojis only once!');
      }

      index = randomIndex(unclickedEmojis);
      randomEmoji = unclickedEmojis[index];
    } else {
      index = randomIndex(emojiList);
      randomEmoji = emojiList[index];

      //Remove emoji from array so it cannot be picked twice
      emojiList.splice(index, 1);
    }

    return randomEmoji;
  };

  for (let i = 0; i < 16; i++) {
    generatedCards.push(<Card emoji={randomEmoji()} key={i} />);
  }

  return (
    <div onClick={onClick} id='card-grid'>
      {generatedCards}
    </div>
  );
};

export default CardGrid;
