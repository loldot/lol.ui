# TODO: Make lol.ui Compatible with React, Vue, and Plain JavaScript

## 1. Build System Setup

- [ ] Create `vite.config.ts` with library build configuration
  - [ ] Configure entry point as `src/index.ts`
  - [ ] Set up multiple output formats (ES, UMD, CJS)
  - [ ] Configure external dependencies (lit, lit-html)
  - [ ] Set up global variables for UMD build

- [ ] Update build scripts in `package.json`
  - [ ] Add `build:types` script for TypeScript declarations
  - [ ] Update existing `build` script to include type generation
  - [ ] Add `preview` script for testing built library

## 2. Package Configuration

- [ ] Update `package.json` with proper library configuration
  - [ ] Change `type` to `"module"`
  - [ ] Fix `main` entry point to `./dist/lol-ui.cjs.js`
  - [ ] Fix `module` entry point to `./dist/lol-ui.es.js`
  - [ ] Fix `types` entry point to `./dist/index.d.ts`
  - [ ] Add comprehensive `exports` map for different import paths
  - [ ] Add `files` array to include only `dist` folder
  - [ ] Convert `dependencies` to `peerDependencies`
  - [ ] Add framework dev dependencies (React, Vue types)

## 3. Project Structure Reorganization

- [x] Create `src/` directory
- [x] Move `components/` folder to `src/components/`
- [x] Move `styles/` folder to `src/styles/`
- [x] Create main entry point `src/index.ts`
- [x] Update all import paths to use `.js` extensions
- [x] Update relative imports in all component files

## 4. TypeScript Configuration

- [x] Update `tsconfig.json` for library build
  - [x] Change `target` to `"ES2020"`
  - [x] Change `moduleResolution` to `"bundler"`
  - [x] Enable `declaration` and `declarationMap`
  - [x] Set `rootDir` to `"./src"`
  - [x] Update `include` to `["src/**/*"]`
  - [x] Add `dist` to `exclude` array

## 5. Main Entry Point

- [x] Create `src/index.ts`
  - [x] Export all components (Card, Tabs, TabPanel, NotificationBuilder)
  - [x] Export utilities (Reset CSS)
  - [x] Re-export lit essentials for convenience

## 6. Framework Integration

### React Support

- [ ] Create `src/react.ts`
  - [ ] Add TypeScript declarations for JSX intrinsic elements
  - [ ] Create `defineCustomElements()` helper function
  - [ ] Add proper type annotations for component props

### Vue Support

- [ ] Create `src/vue.ts`
  - [ ] Create Vue plugin with `install` method
  - [ ] Configure `isCustomElement` compiler option
  - [ ] Export default plugin object

## 7. CSS Variables Documentation

- [ ] Create `src/styles/variables.css`
  - [ ] Document all CSS custom properties used
  - [ ] Provide default values for theming
  - [ ] Add comments explaining usage

## 8. Build Output Verification

- [ ] Test ESM build works with modern bundlers
- [ ] Test CJS build works with Node.js require()
- [ ] Test UMD build works in browser via script tag
- [ ] Verify TypeScript declarations are generated correctly
- [ ] Test tree-shaking works properly

## 9. Framework Integration Testing

### React Testing

- [ ] Test components render correctly in React
- [ ] Test prop binding works (e.g., `checked` attribute)
- [ ] Test event handling works properly
- [ ] Test TypeScript intellisense works

### Vue Testing

- [ ] Test components render correctly in Vue 3
- [ ] Test v-model and prop binding
- [ ] Test event handling with Vue syntax
- [ ] Test plugin installation works

### Vanilla JS Testing

- [ ] Test direct import works
- [ ] Test components work without framework
- [ ] Test in browser environment
- [ ] Test with different module systems

## 10. Documentation and Examples

- [ ] Create framework-specific usage examples
- [ ] Document CSS custom properties
- [ ] Add installation instructions for each framework
- [ ] Create migration guide from current setup
- [ ] Add troubleshooting section

## 11. Package Publishing Preparation

- [ ] Test package locally with `npm pack`
- [ ] Verify all necessary files are included
- [ ] Test installation from tarball
- [ ] Update README with new usage instructions
- [ ] Prepare CHANGELOG for version update

## 12. Optional Enhancements

- [ ] Add Storybook for component documentation
- [ ] Set up automated testing with Vitest
- [ ] Add ESLint configuration for consistency
- [ ] Set up GitHub Actions for CI/CD
- [ ] Add semantic versioning automation
- [ ] Create component playground/demo site

## Priority Order

1. **High Priority**: Items 1-5 (Build system, package config, project structure)
2. **Medium Priority**: Items 6-8 (Framework integration, CSS docs, build verification)  
3. **Low Priority**: Items 9-12 (Testing, documentation, publishing, enhancements)

## Notes

- Keep `lit` as peer dependency to avoid version conflicts
- Maintain backward compatibility where possible
- Consider semantic versioning for breaking changes
- Test with multiple Node.js versions if targeting broad compatibility
