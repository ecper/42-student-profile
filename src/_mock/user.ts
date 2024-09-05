const userData:{
    [key: string]:{
        intra: string;
        profileImg: string;
        profileDescription: string;
        userPosts: {description: string}[];
    }
} = {
    "001": {
        intra: "hauchida",
        profileImg: "",
        profileDescription: "はじめまして！！hello world",
        userPosts: [
            {
                description: "hello world",
            }
        ]
    },
    "002": {
        intra: "kmoriyam",
        profileImg: "",
        profileDescription: "はじめまして！！hello world",
        userPosts: [
            {
                description: "hello world",
            }
        ]
    },
    "003": {
        intra: "fhoshina",
        profileImg: "",
        profileDescription: "はじめまして！！hello world",
        userPosts: [
            {
                description: "hello world",
            }
        ]
    }
}

export default userData;