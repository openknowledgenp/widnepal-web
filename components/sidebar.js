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
    data: '7.8%',
    story: 'of researchers in Nepal are female.',
    data_source: 'UNESCO, 2018',
  },
  {
    data: '41%',
    story: 'of countries regularly produce data on violence against women.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '59.72%',
    story: 'of the female population in Nepal are literate.',
    data_source: 'UNESCO, 2018',
  },
  {
    data: '81%',
    story: 'of the female population in Nepal aged 15 or above are economically active.',
    data_source: 'Nepal Labour Force Survey, 2008',
  },
  {
    data: '80%',
    story: 'of SDG indicators for gender equality are lacking data.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '71%',
    story: 'is the percentage by which Nepal decreased it’s maternal mortality rate between 1990 and 2015.',
    data_source: 'World Health Organisation, 2018',
  },
  {
    data: '23%',
    story: 'is the global gender pay gap between women and men.',
    data_source: 'UNDP, 2018',
  },
  {
    data: '51.5%',
    story: 'of people in Nepal are female.',
    data_source: 'Nepal Census, 2019',
  },
  {
    data: '15%',
    story: 'of countries mandate specialized gender surveys.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '13%',
    story: 'of countries have a dedicated gender statistics budget.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '0.3%',
    story: 'of official development assistance is focused on data collection.',
    data_source: 'Open Data Watch, 2018',
  },
  {
    data: '80%',
    story: 'of SDG indicators for gender equality are lacking data.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '33%',
    story: 'is the percentage of parliamentarians in Nepal who are female.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '20%',
    story: 'is the average percentage of parliamentarians in Asia who are female.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '8%',
    story: 'is the percentage that women are more likely to live in extreme poverty than men.',
    data_source: 'UN Women, 2018',
  },
  {
    data: '81%',
    story: 'of the female population in Nepal aged 15 or above are economically active.',
    data_source: 'Nepal Labour Force Survey, 2008',
  },
  {
    data: '28.8%',
    story: 'of researchers in the world are female.',
    data_source: 'Unesco, 2018',
  },
  {
    data: '7.8%',
    story: 'of researchers in Nepal are female.',
    data_source: 'Unesco, 2018',
  },
  {
    data: '7.8%',
    story: 'of researchers are  globally working in science, technology women.',
    data_source: 'Unesco, 2015',
  },
  {
    data: '16%',
    story: 'of data scientists globally are women.',
    data_source: 'Kaggle, 2018',
  },
  {
    data: '23%',
    story: 'is the global gender pay gap between women and men.',
    data_source: 'UNDP, 2018',
  },
  {
    data: '100 years',
    story: 'are needed to close the gender pay gap at the current global rate of change.',
    data_source: 'UNDP, 2018',
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
    this.state = { loaded: false, selectedQuote: undefined, selectedImage: undefined, selectedFacts: undefined }
  }
  componentDidMount() {
    this.setState({})
  }
  render() {
    if (!this.state.loaded) {
      this.setState({
        loaded: true,
        selectedQuote: Quotes[Math.floor(Math.random() * Quotes.length)],
        selectedImage: Images[Math.floor(Math.random() * Images.length)],
        selectedFacts: getRandom(Facts, 3)
      })
      this.state.selectedQuote = Quotes[Math.floor(Math.random() * Quotes.length)];
      this.state.selectedImage = Images[Math.floor(Math.random() * Images.length)];
      this.state.selectedFacts = getRandom(Facts, 3);
    }
    const {selectedQuote, selectedImage,selectedFacts} = this.state
    return(
    <div
      style={pageStyles.mainContainer}
    >
        <div style={pageStyles.quoteContainer(selectedImage)}>
          <div style={pageStyles.quote}>
            <div>{`"${selectedQuote.quote}"`}</div>
            <br/>
            <div>{`- ${selectedQuote.by}`}</div>
          </div>
        </div>
        <Image src={QuickFacts}/>
        <div style={pageStyles.factContainer}>
          {selectedFacts.map((fact, idx)=>{
            return(
              <div key={idx} style={pageStyles.fact}>
                <div>
                <span style={pageStyles.factData(idx)}>{fact.data}</span>
                <span>{fact.story}</span>
                </div>
                <div style={pageStyles.dataSource}><small>- {fact.data_source}</small></div>
                <br/>
              </div>
            )
          })}
        </div>
    </div>
    )
  }
}

const FONT_SIZE = 17
const pageStyles = {
  mainContainer: {
    fontSize: FONT_SIZE,
    // position: '-webkit-sticky',
    // position: 'sticky',
    paddingLeft: 30,
    paddingTop: 80,
    top: 20,
  },
  quoteContainer: (selectedImage)=>{return {
    backgroundImage: `url('${selectedImage}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    fontSize: FONT_SIZE,
    marginBottom: 20
  }},
  quote: { backgroundColor: 'rgba(0,0,0,0.5)', minHeight: 100, height: '100%', width: '100%', color: 'white', fontWeight: 'bold', padding: 50 },
  factContainer: { paddingTop: 10 },
  fact: { paddingBottom: 10, paddingTop: 10 },
  factData: (idx) => {return { fontWeight: 'bold', fontSize: 20, marginRight: 6, color: idx % 2 === 0 ? '#1B9EFF':'#FCCA35' }},
  dataSource: { color: '#999', float: 'right' },
}
