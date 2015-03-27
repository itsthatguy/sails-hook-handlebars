# sails-hook-handlebars

Allows using handlebars on the backend for templating dynamic data. (for use with sailsjs)

## installation:

```
npm install sails-hook-handlebars --save
```

## usage:

```javascript
sails.hook.handlebars.render(<templatePath>, <context>);
```


## example:

### template file


```handlebars
{{!-- assets/templates/myTemplate.hbs --}}

Hello. My name is {{name}}.
```

### javascript file

```javascript
sails.hook.handlebars.render('myTemplate', {name: "Kevin"});
```
