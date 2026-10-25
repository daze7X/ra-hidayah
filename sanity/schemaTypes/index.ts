import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {galleryType} from './galleryType'
import {orgStructureType} from './orgStructureType'
import {schoolProfileType} from './schoolProfileType'
import {principalWelcomeType} from './principalWelcomeType'
import {siteSettingsType} from './siteSettingsType'
import {fasilitasType} from './fasilitasType'
import {featuredProgramType} from './featuredProgramType'
import {featuredProgramSettingsType} from './featuredProgramSettingsType'
import {programType} from './programType'
import {testimonialType} from './testimonialType'
import {institutionProfileType} from './institutionProfileType'
import {orgPageSettingsType} from './orgPageSettingsType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, 
    categoryType, 
    postType, 
    authorType, 
    galleryType, 
    orgStructureType, 
    orgPageSettingsType,
    schoolProfileType,
    institutionProfileType,
    principalWelcomeType,
    siteSettingsType,
    fasilitasType,
    featuredProgramType,
    featuredProgramSettingsType,
    programType,
    testimonialType
  ],
}
