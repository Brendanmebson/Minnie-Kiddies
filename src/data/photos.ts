import blockSorting from '../assets/photos/block-sorting.jpg'
import childDrawing from '../assets/photos/child-drawing.jpg'
import colouringPencils from '../assets/photos/colouring-pencils.jpg'
import playgroundSlide from '../assets/photos/playground-slide.jpg'
import readBlocks from '../assets/photos/read-blocks.jpg'
import toysOnFloor from '../assets/photos/toys-on-floor.jpg'

export type Photo = {
  src: string
  width: number
  height: number
  alt: string
  credit: string
  source: string
}

export const photos = {
  toysOnFloor: {
    src: toysOnFloor,
    width: 1500,
    height: 1001,
    alt: 'A child sitting on a carpet among colourful building blocks and toys',
    credit: 'Shixart1985, CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Playing_with_colorful_building_blocks_and_toys_on_the_floor_in_a_cozy_indoor_setting.jpg',
  },
  childDrawing: {
    src: childDrawing,
    width: 1500,
    height: 997,
    alt: 'A child drawing in a spiral notebook at a table',
    credit: 'Shixart1985, CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Child_engaged_in_drawing_activity_with_colorful_crayons_at_a_wooden_table.jpg',
  },
  playgroundSlide: {
    src: playgroundSlide,
    width: 1500,
    height: 1000,
    alt: 'A child standing at the top of a yellow slide in an indoor playground',
    credit: 'Shixart1985, CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Child_plays_on_colorful_slides_in_indoor_playground.jpg',
  },
  readBlocks: {
    src: readBlocks,
    width: 1500,
    height: 1000,
    alt: 'Wooden alphabet blocks spelling the word READ',
    credit: 'perpetual.fostering, CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Read%27_Spelled_out_in_wooden_learning_blocks_with_stacked_blocks_in_the_background._-_51070730562.jpg',
  },
  blockSorting: {
    src: blockSorting,
    width: 1500,
    height: 1001,
    alt: 'Colourful wooden shapes being sorted onto a pegboard',
    credit: 'Shixart1985, CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:Child_engaging_in_colorful_wooden_block_sorting_activity.jpg',
  },
  colouringPencils: {
    src: colouringPencils,
    width: 1600,
    height: 1066,
    alt: 'Colouring pencils arranged in a wheel of colour',
    credit: 'MichaelMaggs, CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Colouring_pencils.jpg',
  },
} satisfies Record<string, Photo>

export const allPhotos: Photo[] = Object.values(photos)
