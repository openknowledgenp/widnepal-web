import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router'
import React from 'react'
import { EVENT_WITH_SLUG } from '../../graphql/event.queries';
import { PageLayout } from '../../components/pageLayout'
import { Loading } from '../../components/loading'
import HeaderImg from '../../assets/detail_img_header.svg'
import BannerImage from '../../assets/WIDC/9.jpg'
import D4DLogo from '../../assets/WIDC/D4D Logo.png'
import GITLogo from '../../assets/WIDC/GIT_Logo_Chapter_Primary_Nepal_WEB.png'
import OKNLogo from '../../assets/WIDC/OK_LG_LOGO_NEPAL_RGB.png'
import WiSteamLogo from '../../assets/WIDC/WiSTEAM Logo.png'
import WLiTLogo from '../../assets/WIDC/WLiT_logo.png'
import TheAsiaFoundationLogo from '../../assets/WIDC/TAFVLogoTag-ai.png'
import UKAIDLogo from '../../assets/WIDC/UKaid Logo High Resolution for PRINT purposes.png'
import DevelopmentInitiativeLogo from '../../assets/WIDC/Development_Initiatives_Primary Logo_RGB-ai.png'
import Jyoti from '../../assets/WIDC/Jyoti Upadhyaya.jpg'
import Sumana from '../../assets/WIDC/Sumana Shrestha.jpg'
import Jamie from '../../assets/WIDC/Jamie Holton.jpg'
import Aradhana from '../../assets/WIDC/aradhana.jpg'
import Princi from '../../assets/WIDC/Princi.jpeg'
import Rumee from '../../assets/WIDC/rumee.png'
import Meghan from '../../assets/WIDC/Meghan Nalbo.jpg'
import Binita from '../../assets/WIDC/Binita.jpg'
import Carolyn from '../../assets/WIDC/Carolyn.jpg'
import {
  Grid,
  Image,
  Button,
  Popup
} from 'semantic-ui-react';

const DAY_MAP = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

const ConferenceHero = () => {
  return(
    <div style={pageStyles.conferenceHero}>
      <div><div style={pageStyles.titleBorderRight}><div style={pageStyles.titleBorderBottom}>
        <div style={pageStyles.boxLeft}/>
        <br/>
        <h1 style={pageStyles.categoryTitle}>WOMEN IN DATA VIRTUAL CONFERENCE</h1>
        <h2>"Leveraging the Power of Women,<br/> Data and Technology"</h2>
        <br/>
        <div><Button color="blue" as="a" size="large" href="https://asiafoundation.zoom.us/meeting/register/tJYode2orjoqE92wbQZVUY0Bdoa4KWN2w4Pr">REGISTER HERE</Button></div>
        <br/>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <div><b>WHEN</b></div>
              <br/>
              <div>
                <div>
                  <b>20th March, 2021</b>
                </div>
                <div>
                  <b>Saturday</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={6}>
              <div><b>TIME</b></div>
              <br/>
              <div>
                <b>
                  12:30 PM - 06:00 PM
                </b>
              </div>
            </Grid.Column>
            <Grid.Column width={5}>
              <div><b>CONFERENCE AT</b></div>
              <br/>
              <div>
                <b>
                  ZOOM
                </b>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
      </div></div></div>
    </div>
  )

}

const AboutEvent = () => {
  return(
    <div>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.subtitle}>About the Conference</div>
      <div style={pageStyles.middleTitleUnderline}/>
      <br/>
        <div style={pageStyles.description}>
          This virtual, half conference will feature an all-female lineup of panelists from academia to entrepreneurs, to talk about the latest experiences in a number of domains and the opportunities women have in this ever booming industry in Nepal and the global field. With this year’s theme being Leveraging the Power Women, Data and Technology, the conference will include panel discussions with prevalent women working from Nepal’s expanding data and tech sector and a short presentation covering the state of STEM education for females in Nepal.
        </div>
        <br/>
        <br/>
        <br/>
    </div>
  )
}

const People = () => {
  const [eventsEnabled, setEventsEnabled] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  return(
    <div style={pageStyles.people}>
      <div style={pageStyles.peopleDescription}>Opening Remarks</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={4} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage} circular/>
            <b>Lisa Honan</b>
            <div>Development Director</div>
            <div>British Embassy Nepal</div>
          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Meghan W.T. Nalbo is The Asia Foundation’s country representative in Nepal and brings over a decade of experience in governance and development in Asia, the majority of which is focused on Nepal’s political transition.
 <br/>
 <br/>
Prior to joining the Foundation, Meghan was a Foreign Service Officer with the U.S. Agency for International Development (USAID) where she most recently served as director of the Democracy and Governance office at USAID in Nepal. Her work at USAID spanned over nine years during which she held a variety positions, also including as USAID’s Asia regional coordinator for the Global, Regional Policy Team, where for two years she was the technical lead in the Center for Democracy, Human Rights, and Governance in Washington, DC and as a program officer in Bangladesh. During her tenure at USAID, Meghan supported the agency’s evolving work on examining cross-sectoral development programming, thinking and working politically programmatic implementation, as well as various partnerships with academic institutions in order to advance more rigorous development learning and data utilization. In addition to her work at USAID, she has also worked with the UN Development Programme, University of Leeds Law School, and the International Center for Transitional Justice.
</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({meghan: false})}
              onOpen={() => setOpen({meghan: true})}
              open={open.meghan}
              position='right center'
              trigger={
                <div>
                  <Image src={Meghan} style={pageStyles.peopleImage} circular/>
                  <b>Meghan Nalbo</b>
                  <div>Country Representative, Nepal</div>
                  <div>The Asia Foundation</div>
                </div>
              }
            />
          </Grid.Column>
          {/*<Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage} circular/>
            <b>Craig Irwin</b>
            <div>Statistician</div>
            <div>FCDO</div>
          </Grid.Column>*/}
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Introductory Speaker</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage} circular/>
            <b>Tina Rosario</b>
            <div>Women in Big Data</div>
          </Grid.Column>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>The Leadership Panel</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Jyoti U. Devkota, completed Bachelors (Honors) and Masters in Mathematical Statistics from Lady Shriram College, New Delhi India. She completed her PhD.  from the Department of Computer Science and Mathematics, University of Osnabrueck, Germany, with DAAD fellowship. She is a Professor in the Department of Mathematics, Kathmandu University, Nepal. She has a teaching experience of more than 25 years at this university. She has over 25 first authored publications in international peer reviewed journals. She has served as the Head of the Department of Natural Sciences, Kathmandu University from Oct. 2013 to April 2017. She has presented papers in several national and international conferences. Jyoti U Devkota has also written three books on Statistics and Data Analysis.</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({jyoti: false})}
              onOpen={() => setOpen({jyoti: true})}
              open={open.jyoti}
              position='right center'
              trigger={
                <div>
                  <Image src={Jyoti} style={pageStyles.peopleImage} circular/>
                  <b>Jyoti U. Devkota</b>
                  <div>Professor, Department of Mathematics</div>
                  <div>Kathmandu University</div>
                </div>
              }
            />
          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Sumana is the managing partner of Kosi Collaborative. Kosi Collaborative (Kosi) is a technology and management consulting company that works at the intersection of data and research in South Asia, with the objective of helping clients realize the potential of their data and harness the power of data-driven decision making. She has an MBA from MIT Sloan School of Business, and Bachelors in Mathematics and Economics from Bryn Mawr College. She is a published mathematician in Topology and Geometry. Formerly, she was a consultant with the Boston Consulting Group, and financial analyst at Citigroup, NY.</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({sumana: false})}
              onOpen={() => setOpen({sumana: true})}
              open={open.sumana}
              position='right center'
              trigger={
                <div>
                  <Image src={Sumana} style={pageStyles.peopleImage} circular/>
                  <b>Sumana Shrestha</b>
                  <div>Managing Partner</div>
                  <div>Kosi Collaborative</div>
                </div>
              }
            />

          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Jamie Holton is Project Management and Research Officer for Publish What You Fund, the global campaign for aid and development transparency. She oversees the Gender Financing Project, which aims to get a clear picture of funding towards gender equality in Kenya, Nepal and Guatemala so we can hold governments and funders to account on their gender equality commitments and understand which initiatives make societies more equal. Jamie previously worked for Save the Children, UNOCHA, the Dutch MFA and the Dutch National Rapporteur on Trafficking in Human Beings and Sexual Violence against Children. She holds an MSc in International Development & Humanitarian Emergencies from the London School of Economics, and an MA in International Relations from Leiden University in The Netherlands.</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({jamie: false})}
              onOpen={() => setOpen({jamie: true})}
              open={open.jamie}
              position='left center'
              trigger={
                <div>
                  <Image src={Jamie} style={pageStyles.peopleImage} circular/>
                  <b>Jamie Holton</b>
                  <div>Project Management and Research Officer</div>
                  <div>Publish What You Fund</div>
                </div>
              }
            />
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Presentation</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={4} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Binita Shrestha is an IT Engineer, an Educator, and a Social Entrepreneur. She is the Chairman and Managing Director at Women in STEAM, a social enterprise that encourages young girls to learn and lead in computing careers. She has overseen several successful tech philanthropic ventures, including a partnership between WiSTEM Nepal, UNICEF, and the Nepal Telecommunication Authority.</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({binita: false})}
              onOpen={() => setOpen({binita: true})}
              open={open.binita}
              position='right center'
              trigger={
                <div>
                  <Image src={Binita} style={pageStyles.peopleImage} circular/>
                  <b>Binita Shrestha</b>
                  <div>Chairman and Managing Director</div>
                  <div>Women in STEAM</div>
                </div>
              }
            />
          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Image src="https://www.pngitem.com/pimgs/m/375-3757223_free-icon-download-people-avatar-icon-transparent-background.png" style={pageStyles.peopleImage} circular/>
            <b>Craig Irwin</b>
            <div>Statistician</div>
            <div>FCDO</div>
          </Grid.Column>
          <Grid.Column width={3} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Panel Discussion</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Rumee intertwines her love for frontier technology and her passion in communication to focus on social impact. As Rumsan Group’s co-founder, she has launched several initiatives including Hamro LifeBank, a data-informed approach to cut out the stress involved in finding and managing blood for patients; and Katha4Nepal, an online community-driven platform for children to learn through empowering stories during the pandemic. Rumee and her team have also been actively pushing the concept of blockchain technology. She leads the project “Rahat” - a concept of streamlining aid distribution with blockchain. Rumee has over 15 years of experience in leading production teams in the U.S. and has successfully managed educational programs including financial literacy programs featuring Warren Buffett and STEM programs for Intel & Disney. She worked with PepsiCo in the global communication team at New York and led sector PepsiCo consumer relations in Dubai before moving back to Nepal. In January 2021, The Kathmandu Post featured her as one of ten women making a difference with technology in Nepal. She was also listed in the Annual 100 people to watch by Business360.</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({rumee: false})}
              onOpen={() => setOpen({rumee: true})}
              open={open.rumee}
              position='left center'
              trigger={
                <div>
                  <Image src={Rumee} style={pageStyles.peopleImage} circular/>
                  <b>Rumee Singh</b>
                  <div>Co-founder</div>
                  <div>Rumsan Group</div>
                </div>
              }
            />

          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Princi is the co-founder of Moonlit Solutions. Moonlit Solutions has delivered projects in data-driven decision-making. She is an advocate on data for good and agile governance. She has over 8 years of experience in product, design and technology entrepreneurship. She is a passionate teacher and has taught in several business and art schools in Nepal. She is currently delivering classes and workshops on Social Media and Digital Citizenship at Kathmandu University School of Arts. A believer in giving back to the earth, currently she is also exploring the circular economy by researching sustainable green local products.</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({princi: false})}
              onOpen={() => setOpen({princi: true})}
              open={open.princi}
              position='left center'
              trigger={
                <div>
                  <Image src={Princi} style={pageStyles.peopleImage} circular/>
                  <b>Princi Koirala</b>
                  <div>Co-founder</div>
                  <div>Moonlit Solutions</div>
                </div>
              }
            />

          </Grid.Column>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Aradhana Gurung started working in the humanitarian and development sector with the United Nations 15 years ago. For the last 4 years, she was with World Vision as the Lead Manager for their Innovation Lab. She is currently the Country Manager for Viamo, a company that enables the most marginalised to have better access to information and make better decisions  using their mobiles.</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({aradhana: false})}
              onOpen={() => setOpen({aradhana: true})}
              open={open.aradhana}
              position='left center'
              trigger={
                <div>
                  <Image src={Aradhana} style={pageStyles.peopleImage} circular/>
                  <b>Aradhana Gurung</b>
                  <div>Country Manager</div>
                  <div>Viamo</div>
                </div>
              }
            />

          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={pageStyles.peopleDescription}>Closing Remarks</div>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
          <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              content=<div style={pageStyles.bio}>Carolyn O’Donnell joined the Asia Foundation Nepal as the Director for Monitoring, Evaluation, Research and Learning in June 2019. With more than twelve years of experience in M&E, learning and knowledge management, she supports teams in M&E, research methods, and provides on-the-job training and mentoring to M&E officers to build their skills in statistical software, databases, monitoring tools, and evaluation design.
 <br/>
 <br/>
Prior to joining the Foundation, Ms. O’Donnell worked as a MEL Fellow at USAID/Nepal for four years. Before that, she was based in Washington, DC with Winrock International as an M&E Advisor, including as key personnel for a child labor policy project. She started her career in M&E in 2008 at the Centre for Development and Population Activities, working on female empowerment and reproductive health.
</div>
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({carolyn: false})}
              onOpen={() => setOpen({carolyn: true})}
              open={open.carolyn}
              position='right center'
              trigger={
                <div>
                  <Image src={Carolyn} style={pageStyles.peopleImage} circular/>
                  <b>Carolyn O’Donnal</b>
                  <div>Monitoring, Evaluation, Research, and Learning Director</div>
                  <div>The Asia Foundation</div>
                </div>
              }
            />
          </Grid.Column>
          <Grid.Column width={6} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Organization = () => {
  return(
    <div style={pageStyles.organization}>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={4}>
            <div><h3>Organized By</h3></div>
            <div style={pageStyles.organizingMember}>
              <br/>
              <Image src={D4DLogo} style={pageStyles.orgImage}/>
            </div>
          </Grid.Column>
          <Grid.Column width={12}>
            <div><h3>In partnership with</h3></div>
            <br/>
            <Grid stackable >
              <Grid.Row>
                {[
                  {logo:GITLogo, name:'Girls in Tech Nepal'},
                  {logo:OKNLogo, name:'Open Knowledge Nepal'},
                  {logo:WiSteamLogo, name:'Women in STEAM'},
                  {logo:WLiTLogo, name:'Women Leader in Technology'},
                ].map((x, idx)=>(
                  <Grid.Column key={idx} width={4} style={pageStyles.organizingMember}>
                    <Image src={x.logo} style={pageStyles.orgImage}/>
                  </Grid.Column>)
                  )
                }
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

const Participants = () => {
  return(
    <div style={pageStyles.participants}>
      <div style={pageStyles.subtitle}>Who can participate</div>
      <br/>
      <br/>
      <div>
        Although named "Women in Data" Conference, the event is open to attendees of any gender. Whether a current worker in Nepal’s data and tech field, or of casual interest, we encourage the participation of individuals from all professions and different sectors with various backgrounds.
      </div>

    </div>
  )
}

const Supporters = ({post}) => {
  return(
    <div style={pageStyles.organization}>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={16}>
            <div><h3>Supported By</h3></div>
            <br/>
            <Grid stackable >
              <Grid.Row>
                {[
                  {logo:TheAsiaFoundationLogo, name:'The Asia Foundation'},
                  {logo:UKAIDLogo, name:'UK AID'},
                  {logo:DevelopmentInitiativeLogo, name:'Development Initiative'},
                ].map((x, idx)=>(
                  <Grid.Column key={idx} width={3} style={pageStyles.organizingMember}>
                    <Image src={x.logo} style={pageStyles.orgImage}/>
                  </Grid.Column>)
                  )
                }
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}


const EventDetail = () => {
  return (
    <PageLayout title="WOMEN IN DATA CONFERENCE" format="conferenceread" headerImage={HeaderImg} noHero>
        <ConferenceHero {...{bgColor: 'rgba(252,202,53,0.80)', bgImageLink: BannerImage}} />
        <AboutEvent />
        <People {...{bgColor:'#F7F7F7'}}/>
        <Organization />
        <Participants {...{bgColor:'#F5BA00'}}/>
        <Supporters />
    </PageLayout>
  );

};

export default EventDetail;

const FONT_SIZE = 17
const pageStyles = {
  conferenceHero: {textAlign: 'center', padding: 50, fontSize: 16},
  description: {fontSize: FONT_SIZE, paddingTop:20, marginTop: 15, textAlign: 'center', lineHeight:1.4},
  subtitle: {fontWeight: 'bold', fontSize: 26, marginTop: 40, textAlign: 'center'},
  peopleDescription: {fontWeight: 'bold', fontSize: 24, marginBottom: 40, textAlign: 'center'},
  middleTitleUnderline: { borderTop: '3px solid #403E3E', width: '100px', marginRight: 'auto', marginLeft: 'auto', marginTop: 15 },
  categoryTitle: {borderBottom: '4px solid #252323', width: 'fit-content', margin: 'auto', paddingBottom: 10},
  people: {marginRight:'auto',marginLeft:'auto',marginTop: 50, paddingTop: 80, paddingBottom: 80, fontSize: FONT_SIZE},
  peopleDetail: {fontSize: FONT_SIZE, textAlign: 'center', lineHeight: 1.4},
  peopleImage: {backgroundColor: 'grey', border: '1px solid #eee', margin:'auto', marginBottom: 10, maxHeight:200},
  organizingMember: {fontSize: FONT_SIZE, textAlign:'center'},
  orgImage: {margin:'auto', maxHeight:200, width:'auto'},
  partnerImage: {maxWidth:200, height: 'auto',  border: '1px solid #eee', margin:'auto'},
  organization: {marginTop: 80, marginBottom: 80},
  participants: {
    lineHeight: 1.4,
    paddingTop: 10,
    paddingBottom: 80,
    textAlign: 'center',
    fontSize: FONT_SIZE
  },
  bio: { fontWeight: 300, fontSize: 14, width: '400px' },
  titleBorderRight: {
    backgroundClip: 'content-box',
    margin:'auto',
    width: '80%',
    borderRight: '10px solid white',
    borderImage: 'linear-gradient(to top, white 25%, rgba(0,0,0,0) 25%',
    borderImageSlice: 1,
  },
  titleBorderBottom: {
    backgroundClip: 'content-box',
    width: '100%',
    borderBottom: '10px solid white',
    borderImage: 'linear-gradient(to Right, rgba(0,0,0,0) 90%, white 90%, white 100%)',
    borderImageSlice: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
  },
  boxLeft: {
    height: 100,
    float: 'left',
    width: 100,
    borderLeft: '10px solid white',
    borderTop: '10px solid white',
    position: 'relative',
    marginLeft: -30,
    marginTop: -30,
  }
}
