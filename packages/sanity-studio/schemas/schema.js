// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
<<<<<<< HEAD
import annotationShopify from './annotations/shopify'
import annotationShopifyMargin from './annotations/shopifyMargin'
<<<<<<< HEAD

// Document types
=======
=======
import annotationProduct from './annotations/product'
import annotationProductMarginalia from './annotations/productMarginalia'
>>>>>>> 908e655 (refactor(sanity-studio): rename PT annotations, add external URL support on external links)
// Documents
import articleEditorial from './documents/article/editorial'
import articleInfo from './documents/article/info'
>>>>>>> f7e7e67 (feat(sanity-studio): add article document types (info + editorial), remove pages + update desk)
import collection from './documents/collection'
import product from './documents/product'
import productVariant from './documents/productVariant'

// Singleton document types
import home from './singletons/home'
import navigation from './singletons/navigation'

// Object types
import blockImage from './objects/blockImage'
import blockProduct from './objects/blockProduct'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
import productOption from './objects/productOption'
import proxyString from './objects/proxyString'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'


// Build the schemas and export to the Sanity Studio app
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Annotations
    annotationLinkEmail,
    annotationLinkExternal,
    annotationLinkInternal,
<<<<<<< HEAD
    annotationShopify,
    annotationShopifyMargin,
<<<<<<< HEAD
    // Document types
=======
=======
    annotationProduct,
    annotationProductMarginalia,
>>>>>>> 908e655 (refactor(sanity-studio): rename PT annotations, add external URL support on external links)
    // Documents
    articleEditorial,
    articleInfo,
>>>>>>> f7e7e67 (feat(sanity-studio): add article document types (info + editorial), remove pages + update desk)
    collection,
    product,
    productVariant,
    // Singleton document types
    home,
    navigation,
    // Objects
    blockImage,
    blockProduct,
    linkExternal,
    linkInternal,
    productOption,
    proxyString,
    shopifyProduct,
    shopifyProductVariant,
  ])
})
