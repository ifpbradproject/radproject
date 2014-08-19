# Savely

### É CoC - Convention over configuration

### Generators

```sh
$ sails generate model users
```

```sh
$ sails generate model messages
```

```sh
$ sails generate controller messages
```

```sh
$ sails generate controller main
```

```sh
$ sails generate controller main index show
```

### ORM e Models
Possui uma ORM própria [Waterline](https://github.com/balderdashy/waterline)

ORM se personaliza de acordo com os atributos

i.e: Para o Model ```Users```

```js
attribtues: {
	name: 'STRING'
	urldId: 'INT'
}
```

Temos os seguintes métodos automaticamente
ie: Users.findByUrlId(), Users.findOneByUrlId() 

ORM já adicona metadados de criaçao.
```created_at``` e ```updated_at```

### Validations

Validations feitas no Model. Possui quase todas as validaçoes que o Rails possui.

```js
attributes: {
  firstName: {
    type: 'string',
    required: true,
    minLength: 5,
    maxLength: 15
  },
  lastName: {
    type: 'string',
    required: true,
    minLength: 5,
    maxLength: 100
  }
}
```

### Filtros de Controllers

Possui Filtros, de Controllers

Crie um filtro customizado no api/policies, e depois configure o config/policies
dizendo em quais controllers e actions aquele filtro se aplica.



### Model Hooks 

Exemplos:

```beforeCreate```
```beforeValidate```


### Model methods (rails scope)

Model ```User```

```js
attributes: {

  firstName: {
    type: 'string',
    required: true,
    minLength: 5,
    maxLength: 15
  },
  lastName: {
    type: 'string',
    required: true,
    minLength: 5,
    maxLength: 100
  },
  // Custom Method !
  fullName: function() {
    return this.firstName + ' ' + this.lastname
  }
}

```

#Console

```sh
$ sails console
```

#Layout e Partials

Insere automaticamente arquivos de css e javascript se copiados para dentro do diretório de assets.
ie: copiar arquivos .css e .js para a pasta publica é automaticamente 
escrito nos arquivos de layout.

Arquivo de layout é por default ```layout.ejs```, mas pode ser alterado nos arquivos de 
consiguraçao. E é opcional.

partials através do ```<% include partial_name %>```

### Messagens Flash

Sao geradas nos controllers -> 

```js
req.flash('notFoundMsg', 'user not found')
res.redirect('/route')
```

E recuperadas nas views ->

```ejs
<%- req.flash('notFoundMsg') %>
```

### Migrations

Quando rodamos o servidor , ele dá 3 opçoes de migration.

safe:  Fazer migration na mao.
alter: ele TENTA fazer a migraçao automaticamente sem perda de dados. 
drop:  Limpa o banco de dados e reconstroi fazendo todas as migracoes necessarias.