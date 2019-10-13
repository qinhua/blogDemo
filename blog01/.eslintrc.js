module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "common": true,
        "require": true,
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2016,
        "sourceType": "module"
    },
    "rules": {
        "semi": [2, "always"],//语句强制分号结尾
        "quotes": [2, "single"],//引号类型 `` "" ''
        "no-unused-vars": [2, {
            // 允许声明未使用变量
            "vars": "all",
            // 参数不检查
            "args": "none"
        }],
        "no-multiple-empty-lines": [0, { "max": 100 }],//禁止空行
        "no-var": 0,//禁用var，用let和const代替
        "arrow-parens": 2,//箭头函数用小括号括起来
        "arrow-spacing": 0,//=>的前/后括号        
        "indent": [2, 2],//缩进风格
        // "eqeqeq": true,//强制使用===
        "curly": "error",
    }
};