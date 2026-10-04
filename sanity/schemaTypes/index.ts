import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {galleryType} from './galleryType'
import {orgStructureType} from './orgStructureType'
import {schoolProfileType} from './schoolProfileType'
import {siteSettingsType} from './siteSettingsType'
import {fasilitasType} from './fasilitasType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    categoryType, 
    postType, 
    authorType, 
    galleryType, 
    orgStructureType, 
    schoolProfileType,
    siteSettingsType,
    fasilitasType
  ],
}
