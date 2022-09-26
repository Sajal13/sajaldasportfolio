import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiBootstrap,
    DiReact,
    DiSass,
    DiGithubFull,
    DiLinux,
    DiWindows,
    DiMysql,
    DiVisualstudio,
    DiPython
  } from 'react-icons/di';
  import {
    SiRedux,
    SiReactrouter,
    SiMicrosoftoffice,
    SiFirebase,
    SiDjango,
    SiNetlify,
    SiHeroku
} from 'react-icons/si';
import {FaLanguage,FaNpm} from 'react-icons/fa';
import {BsFillPeopleFill,BsCode} from 'react-icons/bs'
  
    const frontEnd=[
        {
          id: 1,
          classNames:'front_end',
          languages:'Html',
          icon : <DiHtml5 />,
          values: 90
        },
        {
          id: 2,
          classNames:'front_end',
          languages: 'CSS',
          icon : <DiCss3 />,
          values: 80
        },
        {
            id: 3,
            classNames:'front_end',
            languages: 'Sass',
            icon : <DiSass />,
            values: 70
        },
        {
          id: 4,
          classNames:'front_end',
          languages:'JavaScript',
          icon : <DiJavascript1 />,
          values: 80
        },
        {
          id: 5,
          classNames:'front_end',
          languages: 'Bootstrap',
          icon : <DiBootstrap />,
          values: 80
        },
        {
            id: 6,
            classNames:'front_end',
            languages: 'ReactJS',
            icon : <DiReact />,
            values: 80
        },
        {
            id: 7,
            classNames:'front_end',
            languages: 'React-redux',
            icon : <SiRedux />,
            values: 60
        },
        {
            id: 8,
            classNames:'front_end',
            languages: 'React-router',
            icon : <SiReactrouter />,
            values: 60
        },
    ]

    const backEnd=[
        {
          id: 1,
          classNames:'Back_end',
          languages:'mySQL',
          icon : <DiMysql />,
          values: 40
        },
        {
            id: 2,
            classNames:'Back_end',
            languages:'Python django',
            icon : <SiDjango />,
            values: 40
          },
          {
            id: 3,
            classNames:'Back_end',
            languages:'Firebase',
            icon : <SiFirebase />,
            values: 60
        },
        {
          id: 4,
          classNames:'Back_end',
          languages:'python',
          icon : <DiPython />,
          values: 60
      },
    ]

    const operatingSystem=[
        {
          id: 1,
          classNames:'Operating_system',
          languages:'Windows',
          icon : <DiWindows />,
          values: 70
        },
        {
            id: 2,
            classNames:'Operating_system',
            languages:'Linux',
            icon : <DiLinux />,
            values: 70
          },
    ]
    const Technologies=[
        {
          id: 1,
          classNames:'technologies',
          languages:'GIT & Github',
          icon : <DiGithubFull />,
          values: 60
        },
        {
            id: 2,
            classNames:'techonologies',
            languages:'Firebase',
            icon : <SiFirebase />,
            values: 60
        },
        {
            id: 3,
            classNames:'techonologies',
            languages:'npm',
            icon : <FaNpm />,
            values: 70
        },
        {
          id: 4,
          classNames:'techonologies',
          languages:'Netlify',
          icon : <SiNetlify />,
          values: 50
        },
        {
          id: 5,
          classNames:'techonologies',
          languages:'Heroku',
          icon : <SiHeroku />,
          values: 50
        },
        {
            id: 6,
            classNames:'techonologies',
            languages:'VS Code',
            icon : <DiVisualstudio />,
            values: 70
        },
        {
            id: 7,
            classNames:'techonologies',
            languages:'Microsoft Office',
            icon : <SiMicrosoftoffice />,
            values: 70
        },
    ]
    const language = [
        {
            id: 1,
            classNames:'languages',
            languages:'English',
            icon : <FaLanguage />,
            values: 80
          },
          {
              id: 2,
              classNames:'languages',
              languages:'Bengali',
              icon : <FaLanguage />,
              values: 95
          },
          {
            id: 3,
            classNames:'languages',
            languages:'Hindi',
            icon : <FaLanguage />,
            values: 70
        }
    ]

    const others = [
        {
            id: 1,
            classNames:'others',
            languages:'Team Work',
            icon : <BsFillPeopleFill />,
            values: 70
          },
          {
              id: 2,
              classNames:'others',
              languages:'Team Management',
              icon : <BsFillPeopleFill />,
              values: 70
          },
          {
            id: 3,
            classNames:'others',
            languages:'Problem Solving',
            icon : <BsCode />,
            values: 70
        },
        ]
export {frontEnd,backEnd,operatingSystem, Technologies, language, others}