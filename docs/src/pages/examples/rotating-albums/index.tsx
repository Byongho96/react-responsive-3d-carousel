import { useState } from "react";
import Layout from "@theme/Layout";
import blindingLightsCover from './images/Blinding_Lights.png';
import shapeOfYouCover from './images/Shape_Of_You.png';
import levitatingCover from './images/Levitating.png';
import uptownFunkCover from './images/Uptown_Funk.png';
import asItWasCover from './images/As_It_Was.png';
import stayCover from './images/Stay.png';
import badGuyCover from './images/Bad_Guy.png';
import shallowCover from './images/Shallow.png';
import someoneYouLovedCover from './images/Someone_You_Loved.png';
import antiHeroCover from './images/Anti-Hero.png';
import useIsMobile from "@site/src/hooks/useIsMobile";
import CodeLink from "@site/src/atoms/CodeLink";
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';
import styles from './styles.module.scss'

const albums = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    cover: blindingLightsCover,
    description: 'Blending retro synth-pop with modern production, “Blinding Lights” captures a rush of emotion, nostalgia, and adrenaline. Its pulsing beat and soaring melody evoke late-night drives and desperate longing for a lost connection. The lyrics speak of emptiness and craving someone\'s presence to feel truly alive again.',
  },
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    cover: shapeOfYouCover,
    description: 'This catchy, rhythmic track combines pop with tropical house elements. It tells the story of two people who meet and quickly fall into a passionate relationship. While initially driven by physical attraction, the song subtly hints at emotional connection building underneath. It\'s playful, romantic, and irresistibly danceable.',
  },
  {
    title: 'Levitating',
    artist: 'Dua Lipa',
    cover: levitatingCover,
    description: 'A feel-good disco-pop anthem, “Levitating” radiates confidence and joy. Dua sings about being swept off her feet by someone who feels like a perfect match, taking her to new heights emotionally and spiritually. The upbeat tempo, funky bass, and cosmic metaphors make it perfect for any party or mood boost.'
  },
  {
    title: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    cover: uptownFunkCover,
    description: 'With explosive energy and a throwback vibe, this funky hit channels 80s and 90s influences with modern swagger. Bruno Mars delivers smooth vocals full of charisma, and the track\'s infectious rhythm makes it a timeless dance-floor favorite. It\'s bold, brassy, and unapologetically stylish.',
  },
  {
    title: 'As It Was',
    artist: 'Harry Styles',
    cover: asItWasCover,
    description: 'A contemplative and emotionally raw synth-pop tune, “As It Was” reflects on personal transformation, emotional distance, and the inevitability of change. Its melancholic lyrics contrast with the upbeat instrumental, creating a bittersweet tone. It invites listeners into Harry\'s introspection while remaining widely relatable.',
  },
  {
    title: 'Stay',
    artist: 'The Kid LAROI ft. Justin Bieber',
    cover: stayCover,
    description: '\"Stay\" is a high-energy, emotionally charged track about desperation, regret, and the fear of losing someone. The lyrics are a plea to a lover to stay despite past mistakes. With punchy synths and a fast-paced beat, the song captures the chaotic rush of young love and emotional vulnerability.',
  },
  {
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    cover: badGuyCover,
    description: 'This minimalist, edgy pop hit subverts expectations with its sinister undertone and whispery vocals. Billie plays with the idea of being the “bad guy” in a relationship, flipping traditional gender dynamics and adding irony to pop norms. Its bold production and quirky style made it a global sensation.',
  },
  {
    title: 'Shallow',
    artist: 'Lady Gaga, Bradley Cooper',
    cover: shallowCover,
    description: 'From the film A Star Is Born, this duet explores emotional depth, vulnerability, and the search for authenticity. Gaga\'s powerhouse vocals and Cooper\'s raw delivery create a stunning contrast. The song builds from quiet reflection to a soaring climax, symbolizing the leap from fear to freedom.',
  },
  {
    title: 'Someone You Loved',
    artist: 'Lewis Capaldi',
    cover: someoneYouLovedCover,
    description: 'A heartbreak anthem built around a simple piano melody, this ballad explores grief, loneliness, and the struggle to move on. Capaldi\'s emotional delivery adds rawness to the lyrics, which reflect the emptiness left behind when someone you leaned on disappears. It\'s haunting, relatable, and deeply human.',
  },
  {
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    cover: antiHeroCover,
    description: 'Anti-Hero” is an introspective pop track where Taylor Swift candidly explores her inner doubts and insecurities. With self-deprecating humor and vulnerability, she highlights the feeling of being one\'s own worst enemy. Its catchy hook contrasts with its deeply personal message, making it both fun and meaningful.',
  },
]

const layout = {
  "default": {
    "translate": {
      "x": 0,
      "y": 0,
      "z": 0,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "offset": {
      "x": 0,
      "y": 0,
      "z": 0
    }
  },
  "0": {
    width: 'clamp(30%, 350px, 500px)',
    "translate": {
      "x": 0.5,
      "y": -0.1,
      "z": 0,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "offset": {
      "x": -1,
      "y": 0,
      "z": 0
    }
  }
}

const mobileLayout = {
  "default": {
    "translate": {
      "x": 0,
      "y": 0,
      "z": 0,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "offset": {
      "x": 0,
      "y": 0,
      "z": 0
    }
  },
  "0": {
    width: 'clamp(200px, 90%, 300px)',
    "translate": {
      "x": 0,
      "y": -0.2,
      "z": 0,
    },
    "rotate": {
      "x": 0,
      "y": 0,
      "z": 0
    },
    "offset": {
      "x": 0,
      "y": 0,
      "z": 0
    }
  }
}

for (let i = 1; i < albums.length; i++) {
  layout[i] = {
    "width": "clamp(150px, 20%, 250px)",
    "translate": {
      "x": Math.cos(2 * Math.PI * i / albums.length) * 0.15 - 0.2,
      "y": 0.1,
      "z": Math.sin(2 * Math.PI * i / albums.length) * 0.15 - 0.3,
    },
    "rotate": {
      "x": 0,
      "y": - 360 * i / albums.length,
      "z": 0,
    },
    "offset": {
      "x": 0,
      "y": 0,
      "z": 0,
    }
  }

  mobileLayout[i] = {
    "width": "clamp(80px, 20%, 200px)",
    "translate": {
      "x": Math.cos(2 * Math.PI * i / albums.length) * 0.15,
      "y": 0.28,
      "z": Math.sin(2 * Math.PI * i / albums.length) * 0.15 - 0.1,
    },
    "rotate": {
      "x": 0,
      "y": - 360 * i / albums.length,
      "z": 0,
    },
    "offset": {
      "x": 0,
      "y": 0,
      "z": 0,
    }
  }

}

function Item({album}) {

  return (
    <article className={styles['item']}>
      <img src={album.cover} alt={album.title}/>
      <img src={album.cover} className={styles['reflection']}/>
    </article>
  )
}

export default function RotatingAlbumsPage(): JSX.Element {
  const isMobile = useIsMobile()
  
  const [curIndex, setCurIndex] = useState(0)

  const handleChange = (currentIndex: number) => {
    setCurIndex(currentIndex)
  }

  const items = albums.map((album) => {
    return <Item key={album.title} album={album}/>
  })

  return (
    <Layout
      title="Layout Editor"
      description="Effortlessly arrange your carousel using a 3D editor tool.">
      <main className={styles['wrapper']}>
        <Carousel
          items={items}
          layout={isMobile ? mobileLayout : layout}
          startIndex={0}
          infiniteLoop={false}
          autoPlay={false}
          onChange={handleChange}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          containerHeight='100%'
          width="30%"
          height="auto"
          aspectRatio={1}
          boxShadow='none'
          perspectiveOrigin={isMobile ? 'center' : 'left'}
        />
        <div className={styles['background']}>
          <img src={albums[curIndex].cover}/>
        </div>
        <div className={styles['gradation']}/>
        <div className={styles['info']}>
          <h2>{albums[curIndex].title}</h2>
          <p>{albums[curIndex].artist}</p>
          {isMobile || <p>{albums[curIndex].description}</p>}
        </div>
        <CodeLink href="https://github.com/Byongho96/react-responsive-3d-carousel/blob/main/docs/src/pages/examples/rotating-albums/index.tsx" />
      </main>
    </Layout>
  )
}

