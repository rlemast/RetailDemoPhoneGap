({
    appDir: "../Scripts",
    baseUrl: "./app/",
    dir: "../Scripts-Build",
    mainConfigFile: "app/main.js",
    modules: [{
        name: "main",
        include: ["jquery"]
    }],
    onBuildRead: function (moduleName, path, contents) {
        if (moduleName === "app/common") {
            return contents.replace("Scripts", "Scripts-Build")
        }
        return contents;
    },
})