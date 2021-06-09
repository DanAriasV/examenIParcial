import Constant from "expo-constants";

//Ambientes
const ENV = {
    dev: {
        apiUrl: "https://rickandmortyapi.com/api/character",
       
    },
};

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if(__DEV__) return ENV.dev;
    else if(env === "staging") return ENV.dev;
    else if(env === "production" || env === "default") return ENV.dev;
};

export default getEnvVars;