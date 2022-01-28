# {{info.name}}
{{info.description}}

<!-- #include ../badges.md -->

## Table of Contents
<!-- START doctoc -->
<!-- END doctoc -->

<!-- #include ../requirements.md -->
<!-- #include ../installation.md -->

## Usage
Read full [Reference](reference.html)

{{#sections}}
### {{this.id}}
{{this.description}}
{{#this.values}}
* [**{{this.name}}**]({{@root.info.homepage}}/en/latest/reference/#{{lowercase this.name}}) - {{this.description}}
{{/this.values}} 
{{/sections}}

## Contribute
Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](CONTRIBUTING.html) for details.
