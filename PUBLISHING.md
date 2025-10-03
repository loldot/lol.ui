# NPM Publishing Setup

This repository includes a GitHub Action workflow that automatically publishes the package to NPM when you create a release or manually trigger the workflow.

## Setup Instructions

### 1. Create NPM Access Token

1. Go to [npmjs.com](https://npmjs.com) and log in to your account
2. Click on your profile picture → "Access Tokens"
3. Click "Generate New Token" → "Granular Access Token"
4. Configure the token:
   - **Name**: `lol.ui-github-actions` (or any descriptive name)
   - **Expiration**: Choose appropriate duration (90 days, 1 year, etc.)
   - **Packages and scopes**: Select your organization/user and the specific package
   - **Permissions**: Select "Read and write"
5. Click "Generate Token" and copy the token

### 2. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click "New repository secret"
4. Name: `NPM_TOKEN`
5. Value: Paste your NPM access token
6. Click "Add secret"

### 3. Publishing Methods

#### Method 1: Create a GitHub Release

1. Go to your repository → **Releases** → **Create a new release**
2. Create a new tag (e.g., `v1.0.1`)
3. Add release title and description
4. Click "Publish release"
5. The GitHub Action will automatically build and publish to NPM

#### Method 2: Manual Workflow Trigger

1. Go to **Actions** tab in your repository
2. Select "Publish to NPM" workflow
3. Click "Run workflow"
4. Optionally specify a version or leave empty to use package.json version
5. Click "Run workflow"

### 4. Verification

After the workflow completes:

- Check the Actions tab for build logs
- Verify the package appears on [npmjs.com](https://npmjs.com/package/@loldot/lol.ui)
- Test installation: `npm install @loldot/lol.ui`

### 5. Package Configuration

The workflow automatically:

- ✅ Installs dependencies
- ✅ Runs tests (if present)
- ✅ Builds all library formats (ES, CJS, UMD)
- ✅ Verifies all required files exist
- ✅ Publishes with npm provenance for security
- ✅ Sets public access for scoped packages
- ✅ Creates deployment summary

## Troubleshooting

**Token Issues**: Ensure the NPM_TOKEN secret has the correct permissions and hasn't expired.

**Build Failures**: Check the Actions logs for specific error messages. Common issues:

- Missing dependencies
- TypeScript compilation errors
- Build output verification failures

**Publishing Errors**: Verify package name is available and you have publish permissions.
