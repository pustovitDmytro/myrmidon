{{#sections}}
# {{this.id}}

{{this.description}}

**direct import**:

```javascript
    import * as helpers from 'myrmidon/{{this.id}}'
```

{{#this.values}}
## {{this.name}}

{{this.type}}:
{{this.description}}

[Source]({{@root.repository.url}}/blob/{{@root.commit}}/{{this.file}}#L{{this.position}})

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
{{/this.values}}

{{/sections}}



