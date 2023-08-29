import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Carousel from './Carousel'
import '@testing-library/jest-dom'
import {
  getCurItemStyle,
  getDefaultItemStyle,
  getThreeCarouselNextItemStyle,
  getThreeCarouselPrevItemStyle,
} from '../../utils/getCarouselStyle'

describe('Children of carousel', () => {
  test('render one image', () => {
    render(
      <Carousel>
        <img src="./example" />
      </Carousel>
    )
    const imgElements = screen.getAllByRole('img')
    expect(imgElements).toHaveLength(1)

    for (const imgEle of imgElements) {
      expect(imgEle).toBeInTheDocument()
    }
  })

  test('render three images', () => {
    render(
      <Carousel>
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
      </Carousel>
    )
    const imgElements = screen.getAllByRole('img')
    expect(imgElements).toHaveLength(3)

    for (const imgEle of imgElements) {
      expect(imgEle).toBeInTheDocument()
    }
  })

  test('render five images', () => {
    render(
      <Carousel>
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
      </Carousel>
    )
    const imgElements = screen.getAllByRole('img')
    expect(imgElements).toHaveLength(5)

    for (const imgEle of imgElements) {
      expect(imgEle).toBeInTheDocument()
    }
  })
})

describe('Slide test with four carousel', () => {
  test('carousel auto play', async () => {
    const autoPlay = true
    const interval = 500
    const transitionTime = 200
    const width = '400px'
    const depth = 1.7
    render(
      <Carousel
        autoPlay={autoPlay}
        interval={interval}
        transitionTime={transitionTime}
        width={width}
        depth={depth}
      >
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
      </Carousel>
    )
    const imgElements = screen.getAllByRole('img')

    const firstCarousel = imgElements[0].parentElement
    const secondCarousel = imgElements[1].parentElement
    const thirdCarousel = imgElements[2].parentElement
    const fourthCarousel = imgElements[3].parentElement

    expect(firstCarousel).toHaveStyle(getCurItemStyle())
    expect(secondCarousel).toHaveStyle(
      getThreeCarouselNextItemStyle(width, depth)
    )
    expect(thirdCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
    expect(fourthCarousel).toHaveStyle(
      getThreeCarouselPrevItemStyle(width, depth)
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(secondCarousel).toHaveStyle(getCurItemStyle())
        expect(thirdCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
        expect(fourthCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
      },
      { timeout: interval + transitionTime + 100 }
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
        expect(secondCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(thirdCarousel).toHaveStyle(getCurItemStyle())
        expect(fourthCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
      },
      { timeout: 2 * interval + transitionTime + 100 }
    )
  })

  test('carousel disable auto play', async () => {
    const autoPlay = false
    const interval = 500
    const transitionTime = 200
    const width = '400px'
    const depth = 1.7
    render(
      <Carousel
        autoPlay={autoPlay}
        interval={interval}
        transitionTime={transitionTime}
        width={width}
        depth={depth}
      >
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
      </Carousel>
    )
    const imgElements = screen.getAllByRole('img')

    const firstCarousel = imgElements[0].parentElement
    const secondCarousel = imgElements[1].parentElement
    const thirdCarousel = imgElements[2].parentElement
    const fourthCarousel = imgElements[3].parentElement

    expect(firstCarousel).toHaveStyle(getCurItemStyle())
    expect(secondCarousel).toHaveStyle(
      getThreeCarouselNextItemStyle(width, depth)
    )
    expect(thirdCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
    expect(fourthCarousel).toHaveStyle(
      getThreeCarouselPrevItemStyle(width, depth)
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(getCurItemStyle())
        expect(secondCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
        expect(thirdCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
        expect(fourthCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
      },
      { timeout: interval + transitionTime + 100 }
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(getCurItemStyle())
        expect(secondCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
        expect(thirdCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
        expect(fourthCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
      },
      { timeout: 2 * interval + transitionTime + 100 }
    )
  })

  test('carousel start index', async () => {
    const autoPlay = true
    const interval = 500
    const transitionTime = 200
    const startIndex = 2
    const width = '400px'
    const depth = 1.7
    render(
      <Carousel
        autoPlay={autoPlay}
        interval={interval}
        transitionTime={transitionTime}
        startIndex={startIndex}
        width={width}
        depth={depth}
      >
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
      </Carousel>
    )

    const imgElements = screen.getAllByRole('img')

    const firstCarousel = imgElements[startIndex % 4].parentElement
    const secondCarousel = imgElements[(startIndex + 1) % 4].parentElement
    const thirdCarousel = imgElements[(startIndex + 2) % 4].parentElement
    const fourthCarousel = imgElements[(startIndex + 3) % 4].parentElement

    expect(firstCarousel).toHaveStyle(getCurItemStyle())
    expect(secondCarousel).toHaveStyle(
      getThreeCarouselNextItemStyle(width, depth)
    )
    expect(thirdCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
    expect(fourthCarousel).toHaveStyle(
      getThreeCarouselPrevItemStyle(width, depth)
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(secondCarousel).toHaveStyle(getCurItemStyle())
        expect(thirdCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
        expect(fourthCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
      },
      { timeout: interval + transitionTime + 100 }
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
        expect(secondCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(thirdCarousel).toHaveStyle(getCurItemStyle())
        expect(fourthCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
      },
      { timeout: 2 * interval + transitionTime + 100 }
    )
  })

  test('carousel able infinite loop', async () => {
    const autoPlay = true
    const interval = 500
    const transitionTime = 200
    const width = '400px'
    const depth = 1.7
    const infiniteLoop = true
    render(
      <Carousel
        autoPlay={autoPlay}
        interval={interval}
        transitionTime={transitionTime}
        width={width}
        depth={depth}
        infiniteLoop={infiniteLoop}
      >
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
      </Carousel>
    )

    const imgElements = screen.getAllByRole('img')

    const firstCarousel = imgElements[0].parentElement
    const secondCarousel = imgElements[1].parentElement
    const thirdCarousel = imgElements[2].parentElement
    const fourthCarousel = imgElements[3].parentElement

    expect(firstCarousel).toHaveStyle(getCurItemStyle())
    expect(secondCarousel).toHaveStyle(
      getThreeCarouselNextItemStyle(width, depth)
    )
    expect(thirdCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
    expect(fourthCarousel).toHaveStyle(
      getThreeCarouselPrevItemStyle(width, depth)
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(secondCarousel).toHaveStyle(getCurItemStyle())
        expect(thirdCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
        expect(fourthCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
      },
      { timeout: interval + transitionTime + 100 }
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
        expect(secondCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(thirdCarousel).toHaveStyle(getCurItemStyle())
        expect(fourthCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
      },
      { timeout: 6 * interval + transitionTime + 100 }
    )
  })

  test('carousel disable infinite loop', async () => {
    const autoPlay = true
    const interval = 500
    const transitionTime = 200
    const width = '400px'
    const depth = 1.7
    const infiniteLoop = false
    render(
      <Carousel
        autoPlay={autoPlay}
        interval={interval}
        transitionTime={transitionTime}
        width={width}
        depth={depth}
        infiniteLoop={infiniteLoop}
      >
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
        <img src="./example" />
      </Carousel>
    )

    const imgElements = screen.getAllByRole('img')

    const firstCarousel = imgElements[0].parentElement
    const secondCarousel = imgElements[1].parentElement
    const thirdCarousel = imgElements[2].parentElement
    const fourthCarousel = imgElements[3].parentElement

    expect(firstCarousel).toHaveStyle(getCurItemStyle())
    expect(secondCarousel).toHaveStyle(
      getThreeCarouselNextItemStyle(width, depth)
    )
    expect(thirdCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
    expect(fourthCarousel).toHaveStyle(
      getThreeCarouselPrevItemStyle(width, depth)
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(secondCarousel).toHaveStyle(getCurItemStyle())
        expect(thirdCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
        expect(fourthCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
      },
      { timeout: interval + transitionTime + 100 }
    )
    await waitFor(
      () => {
        expect(firstCarousel).toHaveStyle(
          getThreeCarouselNextItemStyle(width, depth)
        )
        expect(secondCarousel).toHaveStyle(getDefaultItemStyle(width, depth))
        expect(thirdCarousel).toHaveStyle(
          getThreeCarouselPrevItemStyle(width, depth)
        )
        expect(fourthCarousel).toHaveStyle(getCurItemStyle())
      },
      { timeout: 6 * interval + transitionTime + 100 }
    )
  })
})

describe('Show components of carousel', () => {
  test('show status', () => {
    render(
      <Carousel showStatus={true}>
        <img src="./example" />
      </Carousel>
    )

    const statusEle = screen.getByText('1 / 1')
    expect(statusEle).toBeInTheDocument()
  })

  test('do not show status', () => {
    render(
      <Carousel showStatus={false}>
        <img src="./example" />
      </Carousel>
    )
    const statusEle = screen.queryByText('1 / 1')
    expect(statusEle).toEqual(null)
  })

  test('show arrows', () => {
    render(
      <Carousel showArrows={true}>
        <img src="./example" />
      </Carousel>
    )

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(2)

    for (const buttonEle of buttonElements) {
      expect(buttonEle).toBeInTheDocument()
    }
  })

  test('do not show arrows', () => {
    render(
      <Carousel showArrows={false}>
        <img src="./example" />
      </Carousel>
    )
    const buttonElements = screen.queryAllByRole('button')
    expect(buttonElements).toHaveLength(0)
  })

  test('show indicators', () => {
    render(
      <Carousel showIndicators={true}>
        <img src="./example" />
      </Carousel>
    )

    const listElements = screen.getAllByRole('listitem')
    expect(listElements).toHaveLength(1)

    for (const listEle of listElements) {
      expect(listEle).toBeInTheDocument()
    }
  })

  test('do not show indicators', () => {
    render(
      <Carousel showIndicators={false}>
        <img src="./example" />
      </Carousel>
    )
    const buttonElements = screen.queryAllByRole('listitem')
    expect(buttonElements).toHaveLength(0)
  })
})
