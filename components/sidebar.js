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

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const selectedQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
    const selectedImage = Images[Math.floor(Math.random() * Images.length)];
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
    </div>
    )
  }
}
