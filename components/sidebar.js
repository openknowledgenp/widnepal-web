import {
  Image
} from 'semantic-ui-react'
import React from 'react'
import QuickFacts from '../assets/quick_facts.svg'
import BGFacts1 from '../assets/bgfacts1.jpg'
import BGFacts2 from '../assets/bgfacts2.jpg'
import BGFacts3 from '../assets/bgfacts3.jpg'
import BGFacts4 from '../assets/bgfacts4.jpg'
import BGFacts5 from '../assets/bgfacts5.jpg'

const Images = [
  BGFacts1,
  BGFacts2,
  BGFacts3,
  BGFacts4,
  BGFacts5
]

const Quotes = [
  {
    quote: 'The world cannot be understood without numbers. But the world cannot be understood with numbers alone.',
    by: 'Hans Rosling',
  },
  {
    quote: 'I could trust a fact and always cross-question an assertion.',
    by: 'Michael Faraday',
  },
  {
    quote: 'Data is precious thing and will last longer than the systems themselves.',
    by: 'Sir Tim Berners Lee',
  },
  {
    quote: 'Data are becoming the new raw material of business.',
    by: 'Criag Mundie',
  },
  {
    quote: 'Data that is loved tends to survive.',
    by: 'Kurt Bollacker',
  },
]

const Facts = [
  {
    data: '77 cents',
    story: 'is earned by women for every dollar that men get for the same work.',
    data_source: 'np.undp.org',
  },
  {
    data: '35%',
    story: 'of women have experienced physical and/or sexual violence.',
    data_source: 'np.undp.org',
  },
  {
    data: '13%',
    story: 'of agricultural landholders are women.',
    data_source: 'np.undp.org',
  },
  {
    data: '750 million',
    story: 'women and girls alive today were married before their 18th birthday.',
    data_source: 'np.undp.org',
  },
  {
    data: '2/3',
    story: '(two thirds) of developing countries have achieved gender parity in primary education.',
    data_source: 'np.undp.org',
  },
  {
    data: '24%',
    story: 'of national parliamentarians were women as of November 2018, a small increase from 11.3 percent in 1995.',
    data_source: 'np.undp.org',
  },
]

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const selectedQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    const selectedImage = Images[Math.floor(Math.random() * Images.length)];
    const selectedFacts = getRandom(Facts, 3)
    return(
    <div
      style={{
        fontSize:18,
        // position: '-webkit-sticky',
        // position: 'sticky',
        paddingTop: 30,
        top: 20,
      }}
    >
        <div style={{
          backgroundImage: `url('${selectedImage}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '100%',
          fontSize: 18,
          marginBottom: 20
        }}>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', minHeight: 100, height: '100%', width: '100%', color: 'white', fontWeight: 'bold', padding: 20 }}>
            <div>{`"${selectedQuote.quote}"`}</div>
            <br/>
            <div>{`- ${selectedQuote.by}`}</div>
          </div>
        </div>
        <Image src={QuickFacts}/>
        <div style={{ paddingTop: 10 }}>
          {selectedFacts.map((fact, idx)=>{
            return(
              <div key={idx} style={{ paddingBottom: 10, paddingTop: 10 }}>
                <div>
                <span style={{ fontWeight: 'bold', fontSize: 20, marginRight: 6, color: idx % 2 === 0 ? '#1B9EFF':'#FCCA35' }}>{fact.data}</span>
                <span>{fact.story}</span>
                </div>
                <div style={{ color: '#999', float: 'right' }}><small>Source: {fact.data_source}</small></div>
                <br/>
              </div>
            )
          })}
        </div>
    </div>
    )
  }
}
