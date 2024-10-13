# Zack Brady's Docs

## About Me

A little bit about me and my history in the industry. If you have any questions, please reach out to me at zbrady@zackbrady.com!

- Former Contractor
- U.S. Military Reservist
- Open-Source Contributor
- Built and Exited a Digital Firm
- Active Volunteer Firefighter/EMT

## Local Development

### Installing Dependencies (docusaurus)

```bash
git clone https://github.com/zackbradys/zackbrady-docs
cd zackbrady-docs

# install docusaurus & dependencies from package.json
npm install # make sure you are in the root of the dir containing `package.json`

# test the installation
npx docusaurus --version
```

### Deploy Locally

```bash
npm run start # this will open your default browser to http://localhost:3000
```

## Creating Content

[Official Docusaurus Documentation](https://docusaurus.io/docs/creating-pages)

## Publishing Content

This docs site is served using github-pages. There is an [action](.github/workflows/deploy.yml) that will trigger upon commit to the `main` branch and deploy the new build to https://rancherfederal.github.io/carbide-docs/.
