## Adding third party css files
* Take for example we want to bring in Font Awesome to our project

1. First install font awesome
```
npm install --save font-awesome
```

2. Add Font awesome css to .angular-cli.json so it compiles
```
...
  "styles": [
        "styles.scss",
        "../node_modules/font-awesome/scss/font-awesome.scss"
      ],
...
```
