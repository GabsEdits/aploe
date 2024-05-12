import 'fs';

interface UserConfig {
    buildFrom?: string;
}

let userConfig: UserConfig = {};
try {
    userConfig = require('./aploe.config.json');
} catch (error) {
    console.log('No Aploe configuration file found. Using default configuration.');
}

const defaultConfig = {
    buildFrom: 'today'
};

const config: UserConfig = {
    ...defaultConfig,
    ...userConfig
};

export default config;