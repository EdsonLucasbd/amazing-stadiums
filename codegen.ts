import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/clc5nyfrg0rwp01t6e5zgdakw/master',
  documents: 'src/graphql/queries.ts',
  generates: {
    'src/graphql/generated/': {
      preset: 'client',
      plugins: [
        'typescript',
        {
          add: {
            content: '/* eslint-disable */'
          }
        }
      ]
    }
  }
}

export default config
