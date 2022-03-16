import React from 'react'
import { PageLayout } from '../../components/pageLayout'
import HeaderImg from '../../assets/detail_img_header.svg'
import BannerImage from '../../assets/WIDC/9.jpg'
import GitTimeline from '../../assets/WIDC/timeline.png'
import ShequalLogo from '../../assets/WIDC/shequalLogo.png'
import D4DLogo from '../../assets/WIDC/D4D Logo.png'
import GITLogo from '../../assets/WIDC/GIT_Logo_Chapter_Primary_Nepal_WEB.png'
import OKNLogo from '../../assets/WIDC/OK_LG_LOGO_NEPAL_RGB.png'
import WiSteamLogo from '../../assets/WIDC/WiSTEAM Logo.png'
import WLiTLogo from '../../assets/WIDC/WLiT_logo.png'
import TheAsiaFoundationLogo from '../../assets/WIDC/TAFVLogoTag-ai.png'
import UKAIDLogo from '../../assets/WIDC/UKaid Logo High Resolution for PRINT purposes.png'
import DevelopmentInitiativeLogo from '../../assets/WIDC/Development_Initiatives_Primary Logo_RGB-ai.png'
import Abhishek from '../../assets/WIDC/Abhishek paudel.jpeg'
import Astha from '../../assets/WIDC/Astha Sharma.jpg'
import Melisha from '../../assets/WIDC/Melisha Ghimire.jpg'
import Shreyasha from '../../assets/WIDC/Shreyasha.jpg'
import Sachin from '../../assets/WIDC/Sachin Karanjit.png'
import Rakesh from '../../assets/WIDC/Rakesh Katuwal.jpg'
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
        <br/>
        <h1 style={pageStyles.categoryTitle}>Women in Data Conference</h1>
        <br/>
        <br/>
        <h2>Celebrating Women’s History Month and Open Data Day 2022</h2>
        {/* <div><Button color="blue" as="a" size="large" href="https://asiafoundation.zoom.us/meeting/register/tJYode2orjoqE92wbQZVUY0Bdoa4KWN2w4Pr">REGISTER HERE</Button></div> */}
        <br/>
        <h4>MARCH 16 - 20 | KATHMANDU, NEPAL | VIRTUAL + IN-PERSON</h4>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <div><b><u><a style={pageStyles.eventLink} href="#first">Gender Data 101: Bootcamp</a></u></b></div>
              <br/>
              <div>
                <div>
                  <b>March 16-17, 2022</b>
                </div>
                <div>
                  <b>3:00 - 5:00 PM</b>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
            <div><b><u><a style={pageStyles.eventLink} href="#second">Making Sense of Data with Visualization: Workshop</a></u></b></div>
              <br/>
              <div>
                <div>
                  <b>March 19, 2022</b>
                </div>
                <div>
                  <b>12:00 - 4:30 PM</b>
                </div>
              </div>
            </Grid.Column> 
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <div><b><u><a style={pageStyles.eventLink} href="#third">Panel Discussion: Need of Women in Data Against Gender Bias in AI</a></u></b></div>
              <br/>
              <div>
                <div>
                  <b>March 20, 2022</b>
                </div>
                <div>
                  <b>3:00 - 6:15 PM </b>
                </div>
              </div>
            </Grid.Column> 
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
        <div style={pageStyles.boxRight}/>
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
          Women in Data conference is a celebration marking Women's History Month and Open Data Day 2022 featuring a gender data boot camp, workshop on data visualization, a panel discussion on gender bias in AI, and a networking event for female professionals and enthusiasts in data. The conference has been organized by The Asia Foundation (TAF) under its project “Data for Development Nepal” in partnership with Girls in Tech - Nepal, Open Knowledge Nepal (OKN), Women Leaders in Technology (WLiT), and Women in Science, Technology, Engineering, Art, and Mathematics (WiSTEAM) to promote inclusive ecosystem in data development for Nepal.
      </div>
      <br/>
      <br/>
      <br/>
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
              <Grid.Column width={3} style={pageStyles.organizingMember}>
                    <Image src={ShequalLogo} style={pageStyles.orgImage}/>
                  </Grid.Column>
                  <Grid.Column width={3} style={pageStyles.organizingMember}>
                    <Image src={GITLogo} style={pageStyles.orgImage}/>
                  </Grid.Column>
                  <Grid.Column width={3} style={pageStyles.organizingMember}>
                    <Image src={OKNLogo} style={pageStyles.orgImage}/>
                  </Grid.Column>
                  <Grid.Column width={3} style={pageStyles.organizingMember}>
                    <Image src={WiSteamLogo} style={pageStyles.orgImage}/>
                  </Grid.Column>
                  <Grid.Column width={3} style={pageStyles.organizingMember}>
                    <Image src={WLiTLogo} style={pageStyles.orgImage}/>
                  </Grid.Column>
                <Grid.Column width={1} />
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
const GenderEvent = () => {
  const [eventsEnabled, setEventsEnabled] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  return(
    <div style={pageStyles.sectionEvent}>
      <div style={pageStyles.eventBanner}>
      <div><div style={pageStyles.titleBorderRight}><div style={pageStyles.titleBorderBottom}>
        <div style={pageStyles.boxLeft}/>
        <br/>
        <br/>
        <h1 style={pageStyles.categoryTitle}>Gender Data 101: Bootcamp</h1>
        <br/>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <div><b><u>Date</u></b></div>
              <br/>
              <div>
                <div>
                  <b>March 16 - 17, 2022</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Time</u></b></div>
              <br/>
              <div>
                <div>
                  <b>3:00 - 5:00 PM</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Platform</u></b></div>
              <br/>
              <div>
                <div>
                  <b>Microsoft Teams</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Type</u></b></div>
              <br/>
              <div>
                <div>
                  <b>Invitees Only</b>
                </div>
              </div>
            </Grid.Column>  
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
        <div>
          <br/>
          <Grid>
            <Grid.Row>
              <h4 style={pageStyles.categoryTitle}>Organized By: </h4>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Image src={OKNLogo} style={pageStyles.logoImage}/>
              </Grid.Column>
              <Grid.Column width={8}>
                <Image src={WLiTLogo} style={pageStyles.logoImage}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div style={pageStyles.boxRight}/>
      </div></div></div>
      </div>
      <div>
        <br/>
        <div style={pageStyles.subtitle}>About the Bootcamp</div>
        <div style={pageStyles.middleTitleUnderline}/>
        <br/>
        <div style={pageStyles.description}>
          Gender Data 101 Bootcamp is 5 hours long rigorous training camp, where participants will go through a contextualized Gender Data 101 training course compiled by Open Knowledge Nepal for university students, civil society, government, and private sector; preliminary based on the Gender Data 101 MOCC developed by Ladysmith.     
        </div>
        <br/>
      </div>
      <div>
      <h4 style={pageStyles.description}>The course has been divided into four modules</h4>
      <br/>
      <Grid stackable >
        <Grid.Row>
          <Grid.Column width={16}> 
          <h4 style={pageStyles.description}>Bootcamp Day 1 (March 16, 2022)</h4>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={6} style={pageStyles.peopleDetail}>
          <div>
            <b>Module 1</b>
            <div style={pageStyles.peopleDetailDesignation}>Fundamentals of Gender and Data</div>
          </div>
          </Grid.Column>
          <Grid.Column width={6} style={pageStyles.peopleDetail}>
          <div>
            <b>Module 2</b>
            <div style={pageStyles.peopleDetailDesignation}>Gender Data Collection and Processing</div>
          </div>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}> 
            <h4 style={pageStyles.description}>Bootcamp Day 2 (March 17, 2022)</h4>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          <Grid.Column width={6} style={pageStyles.peopleDetail}>
          <div>
            <b>Module 3</b>
            <div style={pageStyles.peopleDetailDesignation}>Gender Data Analysis</div>
          </div>
          </Grid.Column>
          <Grid.Column width={6} style={pageStyles.peopleDetail}>
          <div>
            <b>Module 4</b>
            <div style={pageStyles.peopleDetailDesignation}>Gender Data Visualization and Uptake</div>
          </div>
          </Grid.Column>
          <Grid.Column width={2} style={pageStyles.peopleDetail}/>
        </Grid.Row>
      </Grid>
      </div>
    </div>
  )

}
const VisualizationEvent = () => {
  const [eventsEnabled, setEventsEnabled] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  return(
    <div style={pageStyles.sectionEvent}>
      <div style={pageStyles.eventBanner}>
      <div><div style={pageStyles.titleBorderRight}><div style={pageStyles.titleBorderBottom}>
        <div style={pageStyles.boxLeft}/>
        <br/>
        <br/>
        <h1 style={pageStyles.categoryTitle}>Making Sense of Data with Visualization</h1>
        <br/>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <div><b><u>Date</u></b></div>
              <br/>
              <div>
                <div>
                  <b>March 19, 2022</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Time</u></b></div>
              <br/>
              <div>
                <div>
                  <b>12:00 - 4:30 PM</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Location</u></b></div>
              <br/>
              <div>
                <div>
                  <b><u><a href="https://g.page/WiSTEAM?share" target="_blank" style={pageStyles.eventLink}>WiSTEAM Office,</a></u></b>
                </div>
                <div>
                  <b>Gairidhara, Kathmandu</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Type</u></b></div>
              <br/>
              <div>
                <div>
                  <b>Open to Register (Free)</b>
                </div>
                <div>
                  <b>(Seats Full)</b>
                </div>
              </div>
            </Grid.Column>  
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
        <div><Button disabled color="yellow" as="a" size="large" href="https://asiafoundation.zoom.us/meeting/register/tJYode2orjoqE92wbQZVUY0Bdoa4KWN2w4Pr" target="_blank">REGISTER HERE</Button></div>
        <br/>
        <br/>
        <div>
          <br/>
          <Grid>
            <Grid.Row>
              <h4 style={pageStyles.categoryTitle}>Organized By: </h4>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <a href="https://www.wisteamnepal.org/about/about-us" target="_blank"><Image src={WiSteamLogo} style={pageStyles.logoImage}/> </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div style={pageStyles.boxRight}/>
      </div></div></div>
      </div>
      <div>
        <br/>
        <div style={pageStyles.subtitle}>About the Workshop</div>
        <div style={pageStyles.middleTitleUnderline}/>
        <br/>
          <div style={pageStyles.description}>
            Making Sense of Data with Visualization is an introductory training/workshop targeted to data enthusiasts/students at the beginner level to use open data and its visualizations using existing sample datasets related to girls/women.  
            The participants with basic programming knowledge are encouraged to apply for these workshops where they will be using python programming language to visualize CSV or excel datasets, as well as the story, telling their output comparing major changes.
        </div>
        <br/>
      </div>
      <div>
        <h4 style={pageStyles.description}>This workshop has been divided into three modules</h4>
        <Grid stackable >
          <Grid.Row>
            <Grid.Column width={2} style={pageStyles.peopleDetail}/>
            <Grid.Column width={4} style={pageStyles.peopleDetail}>
              <div>
                <b>Module 1</b>
                <div style={pageStyles.peopleDetailDesignation}>Open Data and Types</div>
              </div>
            </Grid.Column>
            <Grid.Column width={4} style={pageStyles.peopleDetail}>
              <div>
                <b>Module 2</b>
                <div style={pageStyles.peopleDetailDesignation}>Data visualizations</div>
              </div>  
            </Grid.Column>
            <Grid.Column width={4} style={pageStyles.peopleDetail}>
              <div>
                <b>Module 3</b>
                <div style={pageStyles.peopleDetailDesignation}>Storytelling via data visualizations</div>
              </div>
            </Grid.Column>
            <Grid.Column width={2} style={pageStyles.peopleDetail}/>
          </Grid.Row>
        </Grid>
        <br/>
      </div>
      <div>
        <br/>
        <div style={pageStyles.peopleDescription}>Know Your Trainers</div>
        <div style={pageStyles.middleTitleUnderline}/>
        <br/>
        <Grid stackable >
          <Grid.Row>
            <Grid.Column width={16} style={pageStyles.peopleDetail}>
              <Popup
                style={pageStyles.popupStyle}
                content={<div style={pageStyles.bio}>
                  Mr. Abhisekh Poudel is currently working as an Associate Software Developer at Deerwalk Institute and has completed his BSc (Hons) Computing at Leeds Beckett University (The British College). Being an IT professional, he has an immense passion for programming and data that keeps him motivated to explore new day-to-day problems and solve them using emerging data tools-trends. He has also worked as a data analyst at KaaiKaas Technologies Pvt. Ltd in the past.                    
                </div>}
                eventsEnabled={eventsEnabled}
                onClose={() => setOpen({abhishek: false})}
                onOpen={() => setOpen({abhishek: true})}
                open={open.abhishek}
                position='bottom center'
                trigger={
                  <div>
                    <Image src={Abhishek} style={pageStyles.peopleImage} circular/>
                    <b>Abhishek Paudel</b>
                    <div style={pageStyles.peopleDetailDesignation}>Associate Software Developer</div>
                    <div style={pageStyles.peopleDetailDesignation}>Deerwalk Institute</div>
                  </div>
                }
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
      </div>
    </div>
  )

}
const GITEvent = () => {
  const [eventsEnabled, setEventsEnabled] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  return(
    <div style={pageStyles.sectionEvent}>
      <div style={pageStyles.eventBanner}>
      <div><div style={pageStyles.titleBorderRight}><div style={pageStyles.titleBorderBottom}>
        <div style={pageStyles.boxLeft}/>
        <br/>
        <br/>
        <h1 style={pageStyles.categoryTitle}>Need of Women in Data Against Gender Bias in AI: Panel Discussion</h1>
        <br/>
        <br/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <div><b><u>Date</u></b></div>
              <br/>
              <div>
                <div>
                  <b>March 20, 2022</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Time</u></b></div>
              <br/>
              <div>
                <div>
                  <b>3:00 - 6:15 PM</b>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <div><b><u>Location</u></b></div>
              <br/>
              <div>
                <div>
                  <b><u><a href="https://maps.app.goo.gl/L7qzKqepJyPmyCLdA" style={pageStyles.eventLink} target="_blank">Vivanta,</a></u></b>
                </div>
                <div>
                  <b>Lalitpur</b>
                </div>
              </div>
            </Grid.Column>  
            <Grid.Column width={4}>
              <div><b><u>Type</u></b></div>
              <br/>
              <div>
                <div>
                  <b>Invitees only</b>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
        <div><Button color="yellow" as="a" size="large" href="https://forms.gle/XDJSNB8mfeQQTdSYA" target="_blank">REGISTER HERE</Button></div>
        <br/>
        <br/>
        <div>
          <br/>
          <Grid>
            <Grid.Row>
              <h4 style={pageStyles.categoryTitle}>Organized By: </h4>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <a href="https://nepal.girlsintech.org/" target="_blank"><Image src={GITLogo} style={pageStyles.logoImage}/></a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div style={pageStyles.boxRight}/>
      </div></div></div>
      </div>
      <div>
        <br/>
        <div style={pageStyles.subtitle}>About the Panel Discussion</div>
        <div style={pageStyles.middleTitleUnderline}/>
        <br/>
        <div style={pageStyles.description}>
        Girls in Tech Nepal as part of the Women in Data Conference is organizing a panel discussion on the title ‘Need of Women in Data Against Gender Bias in AI’. Bias in algorithms exists because we, as humans, are the ones that are biased. The goal of this panel discussion is to discuss why gender bias exists in technology, and how having more women in data science teams can help to mitigate it.
        Join us to celebrate Women’s History Month and Open Data Day 2022 with conversations on open data and gender bias in AI from amazing speakers and panels. Also, connect and network with peers and mentors in Data.
        </div>
        <br/>
      </div>
      <div>
        <br/>
        <div style={pageStyles.subtitle}>Timeline</div>
        <br/>
        <Image src={GitTimeline} style={pageStyles.timelineImage}/>
        <br/>
      </div>
      <div>
        <br/>
        <div style={pageStyles.peopleDescription}>Keynote Speaker</div>
        <div style={pageStyles.middleTitleUnderline}/>
        <br/>
          <Grid stackable >
            <Grid.Row>
              <Grid.Column width={8} style={pageStyles.peopleDetail}>
                <Popup
                  style={pageStyles.popupStyle}
                  content={<div style={pageStyles.bio}>
                    Managing Director, Shequal Foundation and Girls in Tech Nepal
                    </div>}
                  eventsEnabled={eventsEnabled}
                  onClose={() => setOpen({keynoteGIT: false})}
                  onOpen={() => setOpen({keynoteGIT: true})}
                  open={open.keynoteGIT}
                  position='right center'
                  trigger={
                    <div>
                      <Image src={Astha} style={pageStyles.peopleImage} circular/>
                      <b>Astha Sharma</b>
                      <div style={pageStyles.peopleDetailDesignation}>Managing Director</div>
                      <div style={pageStyles.peopleDetailDesignation}>Shequal Foundation and Girls in Tech Nepal </div>
                    </div>
                  }
                />
              </Grid.Column>
              <Grid.Column width={8} style={pageStyles.peopleDetail}>
                <Popup
                  style={pageStyles.popupStyle}
                  content={<div style={pageStyles.bio}>
                    Managing Director, Shequal Foundation and Girls in Tech Nepal
                    </div>}
                  eventsEnabled={eventsEnabled}
                  onClose={() => setOpen({keynoteGIT2: false})}
                  onOpen={() => setOpen({keynoteGIT2: true})}
                  open={open.keynoteGIT2}
                  position='left center'
                  trigger={
                    <div>
                      <Image src={Melisha} style={pageStyles.peopleImage} circular/>
                      <b>Melisha Ghimire</b>
                      <div style={pageStyles.peopleDetailDesignation}>Managing Director</div>
                      <div style={pageStyles.peopleDetailDesignation}>Shequal Foundation and Girls in Tech Nepal </div>
                    </div>
                  }
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        <br/>
      </div>
      <div>
        <br/>
        <div style={pageStyles.peopleDescription}>Panelists</div>
        <div style={pageStyles.middleTitleUnderline}/>
        <br/>
        <Grid stackable >
        <Grid.Row>
          <Grid.Column width={5} style={pageStyles.peopleDetail}>
            <Popup
              style={pageStyles.popupStyle}
              content={<div style={pageStyles.bio}>
                 Rakesh Katuwal is the manager of AI Services and Products department at Fusemachines. He received his Ph.D. from Nanyang Technological University (NTU) Singapore in 2020. He has more than 8 years of experience designing and building AI solutions in academia and industry.                 </div>}
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({rakesh: false})}
              onOpen={() => setOpen({rakesh: true})}
              open={open.rakesh}
              position='right center'
              trigger={
                <div>
                  <Image src={Rakesh} style={pageStyles.peopleImage} circular/>
                  <b>Rakesh Katuwal</b>
                  <div style={pageStyles.peopleDetailDesignation}>Ph.D.</div>
                </div>
              }
            />
          </Grid.Column>
          <Grid.Column width={6} style={pageStyles.peopleDetail}>
            <Popup
              style={pageStyles.popupStyle}
              content={<div style={pageStyles.bio}>
                Sachin Karanjit is responsible for the Nepal operations of Deerhold. His experience and leadership have been focused on developing and delivering technology-driven business services and solutions, providing outstanding client service, and driving profitable revenue growth. He brings in extensive knowledge of software development, finances, human resources management and nuances of doing business in Nepal.
                <br/>
                Prior to Deerhold he was Managing Director at Deerwalk Compware where he led company strategy and business development. He also served as Director of Services at Deerwalk Services and was responsible for overseeing and accountability for the entire services department, developing new business, maximizing growth and managing client accounts at Deerwalk's office in Kathmandu, Nepal.
                <br/>
                Sachin graduated with a Bachelors in Computer Engineering and an MBA from Kathmandu University.    
              </div>}
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({sachin: false})}
              onOpen={() => setOpen({sachin: true})}
              open={open.sachin}
              position='right center'
              trigger={
                <div>
                  <Image src={Sachin} style={pageStyles.peopleImage} circular/>
                  <b>Sachin Karanjit</b>
                  <div style={pageStyles.peopleDetailDesignation}>Director of Nepal Operations</div>
                  <div style={pageStyles.peopleDetailDesignation}>Deerhold</div>
                </div>
              }
            />

          </Grid.Column>
          <Grid.Column width={5} style={pageStyles.peopleDetail}>
            <Popup
              style={pageStyles.popupStyle}
              content={<div style={pageStyles.bio}>
                Shreyasha is a researcher and technologist with expertise in computer vision, robotics, and human-computer interaction. She has more than 5 years of experience developing cutting-edge AI algorithms for self-driving cars, and until recently, was leading a team to detect bias, robustness, and validate the safety of such algorithms in Palo Alto, California. Recently, she has moved back to Nepal and is working on research projects under Nepal Applied Mathematics and Informatics Institute (NAAMII), that study the ethical and social impacts of automation, digitization, and data in a developing country like Nepal.
              </div>}
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({shreyasha: false})}
              onOpen={() => setOpen({shreyasha: true})}
              open={open.shreyasha}
              position='right center'
              trigger={
                <div>
                  <Image src={Shreyasha} style={pageStyles.peopleImage} circular/>
                  <b>Shreyasha Paudel</b>
                  <div style={pageStyles.peopleDetailDesignation}>Research Fellow</div>
                  <div style={pageStyles.peopleDetailDesignation}>NAAMII</div>
                </div>
              }
            />
          </Grid.Column>
          {/* <Grid.Column width={4} style={pageStyles.peopleDetail}>
            <Popup
              style={pageStyles.popupStyle}
              content={<div style={pageStyles.bio}>
              In this customer facing role, Tina is responsible for helping SAP customers drive data innovation typically as an important component of an enterprise wide transformation initiative. As a business strategy professional, Tina has more than 25 years of experience in business process re-engineering, defining business impact and leading transformation programs.<br/><br/>When Tina moved to Paris in 2016 she extended her Chief Data Officer practitioner role to become the head of data innovation, where she works directly with senior business executives to design a data management approach, future state information management capabilities and consult with executives on the design and execution of their data strategy. Tina led SAP’s own enterprise data strategy and helped build the organization which has delivered over 75 million euros of benefit to SAP. Her expertise ranges from building best practice enterprise programs, defining data management innovations, driving data technology development, and managing teams of data stewards and data operations.
              A recognized expert in information management, Tina is regularly requested to speak at industry events. She spends a significant amount of time presenting SAP’s point of view on the power of data and a data-driven culture. Tina has two big passions: data and diversity.


              </div>}
              eventsEnabled={eventsEnabled}
              onClose={() => setOpen({tinaGIT: false})}
              onOpen={() => setOpen({tinaGIT: true})}
              open={open.tinaGIT}
              position='right center'
              trigger={
                <div>
                  <Image src={Tina} style={pageStyles.peopleImage} circular/>
                  <b>Tina Rosario</b>
                  <div style={pageStyles.peopleDetailDesignation}>Head of Data Innovation</div>
                  <div style={pageStyles.peopleDetailDesignation}>Chief Data Officer, Europe</div>
                </div>
              }
            />
          </Grid.Column> */}
        </Grid.Row>
      </Grid>
      <br/>
      </div>
    </div>
  )

}

const EventDetail = () => {
  return (
    <PageLayout title="Women In Data Conference" format="conferenceread" headerImage={HeaderImg} noHero>
        <ConferenceHero {...{bgColor: 'rgba(252,193,15,0.80)', bgImageLink: BannerImage}} />
        <AboutEvent />
        <div id="first">
        <GenderEvent />
        </div>
        <br />
        <div id="second">
        <VisualizationEvent/>
        </div>
        <br/>
        <div id="third">
        <GITEvent/>
        <br/>
        </div>
        <Organization />
        <Participants {...{bgColor:'#F5BA00'}}/>
        <Supporters />
    </PageLayout>
  );

};

export default EventDetail;

const FONT_SIZE = 17
const pageStyles = {
  popupStyle: {minWidth: 400},
  conferenceHero: {textAlign: 'center', padding: 50, fontSize: 16},
  eventBanner: {borderRadius:40, textAlign: 'center', padding: 50, fontSize: 16, color: '#000000', backgroundColor: '#41ade3'},
  description: {fontSize: FONT_SIZE, paddingTop:20, textAlign: 'center', lineHeight:1.4},
  sectionEvent:{borderRadius:40, backgroundColor: 'rgba(252,193,15,1)', padding: 10},
  subtitle: {fontWeight: 'bold', fontSize: 26, textAlign: 'center'},
  peopleDescription: {fontWeight: 'bold', fontSize: 20, textAlign: 'center'},
  middleTitleUnderline: { borderTop: '3px solid #403E3E', width: '100px', marginRight: 'auto', marginLeft: 'auto', marginTop: 15 },
  categoryTitle: {borderBottom: '4px solid #252323', width: 'fit-content', margin: 'auto', paddingBottom: 10},
  eventLink: {fontWeight: 'bold', marginBottom: 40, textAlign: 'center',color: '#111111'},
  people: {marginRight:'auto',marginLeft:'auto', fontSize: FONT_SIZE},
  peopleDetail: {fontSize: FONT_SIZE, textAlign: 'center', lineHeight: 1.4},
  peopleImage: {backgroundColor: 'grey', border: '1px solid #eee', margin:'auto', marginBottom: 10, maxHeight:200},
  organizingMember: {fontSize: FONT_SIZE, textAlign:'center'},
  orgImage: {margin:'auto', maxHeight:200, width:'auto'},
  partnerImage: {maxWidth:200, height: 'auto',  border: '1px solid #eee', margin:'auto'},
  timelineImage: {height: 600, width: 600,  border: '1px solid #eee', margin:'auto'},
  peopleDetailDesignation: {fontSize: 14, textAlign: 'center'},
  logoImage: {height: 200, width: 200, marginLeft:'auto', marginRight: 'auto',marginTop:-60},
  organization: {marginTop: 80, marginBottom: 80},
  participants: {
    lineHeight: 1.4,
    paddingTop: 10,
    paddingBottom: 80,
    textAlign: 'center',
    fontSize: FONT_SIZE
  },
  bio: { fontWeight: 300, fontSize: 14},
  titleBorderRight: {
    backgroundClip: 'content-box',
    margin:'auto',
    width: '80%',
  },
  titleBorderBottom: {
    backgroundClip: 'content-box',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 40,
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
  },
  boxRight: {
    height: 100,
    float: 'right',
    width: 100,
    borderRight: '10px solid white',
    borderBottom: '10px solid white',
    position: 'relative',
    marginRight: -30,
    marginTop: -65,
  }
}
// backgroundImage: 'linear-gradient(to bottom right, rgba(155,32,220,0.20),rgba(186,255,1,0.20),rgba(0,76,255,0.20),rgba(255,133,0,0.20),rgba(255,217,0,0.20),rgba(255,255,255,0.20))'
// backgroundImage: 'linear-gradient(to bottom right, #9b20dc,#004cff,#ff8500,#0086ff,#ff4900)'