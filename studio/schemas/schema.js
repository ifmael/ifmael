// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import serie from './documents/serie'
import settings from './documents/settings'
import tags from './documents/tags'

// Object types
import localeBlock from './objects/localeBlock'
import localeString from './objects/localeString'
import localeText from './objects/localeText'
import mainImage from './objects/mainImage'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    //Documents
    author,
    category,
    post,
    serie,
    settings,
    tags,

    //Objects
    localeBlock,
    localeString,
    localeText,
    mainImage
    
  ])
})
