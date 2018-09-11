# DecisionApp
SEE SCREENSHOT FILE.
simple CRUD, note-taking app using React

Add tasks.
Delete tasks.
Let computer tell you what to do.
As simple as that :)

Notes below to make sure you have all the libraries:

index.html: placed in body -
<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>


npm install -S babel-preset-env
npm install -S babel-preset-react@6.24.1

npm install - g live-server
npm run serve = live-server public

npm run build = babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

npm uninstall -g babel-cli live-server || yarn global remove babel-cli live-server
npm install live-server babel-cli@6.24.1 || yarn add live-server babel-cli@6.24.1
yarn run serve

npm install webpack@3.1.0 || yarn add webpack@3.1.0
node webpack.config.js
npm install validator@8.0.0
npm install react@16.0.0 react-dom@16.0.0
npm install babel-core@6.25.0 
npm install babel-loader@7.1.1
npm install babel-preset-env
npm install webpack-dev-server@2.5.1
npm i babel-preset-stage-2 || npm i babel-plugin-transform-class-properties@6.24.1 || npm install --save-dev babel-plugin-transform-class-prc
npm i react-modal@2.2.2
npm init (populates new .json file)
npm i style-loader@0.18.2 css-loader@0.28.4
npm i sass-loader@6.0.6 node-sass@4.5.3
npm i normalize.css@7.0.0
