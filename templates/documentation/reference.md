{{#sections}}
## {{this.id}}

{{this.description}}

**direct import**:

```javascript
    import * as helpers from 'myrmidon/{{this.id}}'
```

{{#this.values}}
### {{this.name}}

{{this.type}}:
{{this.description}}

[Source]({{@root.info.repository.url}}/blob/{{@root.commit}}/{{this.file}}#L{{this.position}})

{{#if this.testFile}}
[Tests]({{@root.info.repository.url}}/blob/{{@root.commit}}/{{this.testFile}})
{{/if}}

{{#is this.type 'function'}}

**Parameters**

{{#this.params}}
    - `{{name}}` **{{type}}** {{description}}
{{/this.params}}

{{/is}}

{{#if this.returns}}
**Returns**

Returns **{{this.returns.type}}** {{this.returns.description}}
{{/if}}

{{#any this.examples}}
**Examples**
{{#this.examples}}
{{text}} *\({{type}}\)*
```javascript
{{this.code}}
```
{{/this.examples}}
{{/any}}

{{/this.values}}

{{/sections}}


