/// <reference types="@docusaurus/module-type-aliases" />
/// <reference types="@docusaurus/theme-classic" />


declare module '*.module.scss' {
  const classes: {readonly [key: string]: string};
  export default classes;
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*webp' {
  const src: string
  export default src
}

declare module '*mp4' {
  const src: string
  export default src
}

declare module '*webm' {
  const src: string
  export default src
}
