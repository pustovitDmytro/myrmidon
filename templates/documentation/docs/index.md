![Logo](logo_250.png "myrmidon")
# {{info.name}}
{{info.description}}

<!-- #include ../badges.md -->


## 🇺🇦 Help Ukraine
I woke up on my 26th birthday at 5 am from the blows of russian missiles. They attacked the city of Kyiv, where I live, as well as the cities in which my family and friends live. Now my country is a war zone. 

We fight for democratic values, freedom, for our future! Once again Ukrainians have to stand against evil, terror, against genocide. The outcome of this war will determine what path human history is taking from now on.

💛💙  Help Ukraine! We need your support! There are [dozen ways][ukr-link] to help us, just do it!

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
