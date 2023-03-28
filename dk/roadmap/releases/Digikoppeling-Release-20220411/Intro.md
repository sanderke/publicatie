# DEMO Respec

## Gegevensuitwisseling Standaarden 

### Standaarden

* OIN (Organisatie Identificatie Nummer)
* Digikoppeling
    * WUS (WSDL, UDDI en SOAP)
    * EBMS (ebXML Messaging Service)
    * REST API (Representational State Transfer - Application Programming Interface)
    * Grote Berichten
* API
    * ADR ( (REST) API Design Rules)
    * OAuth (Open Authorization)
    * OIDC (OpenID Connect)
* DMKS (Digimelding Koppevlak Specificatie)

### Documentatie


#### Voorbeeld Digikoppeling

![Spec](media/DK_Specificatie_structuur.svg "Documentatie Digikoppeling")

#### Overige

[Publicatie Standaarden](https://publicatie.centrumvoorstandaarden.nl/)


## Respec

Quote:

_ReSpec makes it easier to write technical documents. It was originally designed for writing W3C specifications, but now supports many output formats._

### Voorbeeld Respec document

[Digikoppeling Architectuur Document](https://publicatie.centrumvoorstandaarden.nl/dk/architectuur/2.0vv/)


### Werking

In:
* config bestand
* content (in markdown)
* afbeeldingen/media

Verwerking:
* conform parameters in config bestand
* conform style en template configuratie

Uit:
* Respec document in HTML formaat

Weergegeven in tabel:
|In| Verwerking| Uit| 
|---| ---|---| 
| config bestand, content (in markdown), afbeeldingen/media       | conform parameters in config bestand & conform style en template configuratie  |  Respec document in HTML formaat | 




### Specifieke Functies

Enkele specifieke functies van Respec:
#### Demo Controle


<!--
// #### Title
// #### Subtitle
// #### Editors & Authors
// #### Sections
// #### Table of Contents
// #### Figures & table of figure
-->

#### Examples

<aside class="example" title="Dit is een voorbeeld">
  <p>
    Een voorbeeld kan op deze manier getoond worden.
  <p>
  <pre class="js">
    function myFunction() {
      // stuff goes here...
    }
  </pre>
</aside>

<!-- #### External Includes --> 
#### Conformance section

Controle op keywords conform:
[[RFC2119]] / [[RFC8174]]

 <p>A user agent MUST do something.</p>

#### Abbreviations

<p>
 The <abbr title="World Wide Web">WWW</abbr> for example.
</p>
<p>
 ReSpec will automatically wrap this WWW in an abbr.
</p>

#### Inline Code

`````
  function myFunction() {
      // stuff goes here...
    }
`````
#### Definitions and linking

Gebruik [=Respec=] voor het publiceren van documenten

#### Automatic pluralization

[=Standards=] are important in ICT

#### Aliases and synonyms

[=API=] of [=REST API=] of [=WEB API=]

#### References

[[WebIDL]]
[[NEN3610]]


<script>
  var respecConfig = {
    xref: ["WebIDL", "PaymentRequest"],
  };
</script>


  <!-- We also define a concept "feline", and an interface "Cat". -->
  <p>A <dfn>feline</dfn> has 4 legs and makes sound.</p>

  <p>A <dfn>cat</dfn> has 4 legs and makes sound.</p>

  <pre class="idl">
  interface Cat {}
  </pre>

  <!-- ...and we can reference them as: -->
  <p>A {{Cat}} is a [=feline=] if it meows.</p>


<dfn>PaymentRequest</dfn>

{{PaymentRequest}}

<dfn>link</dfn>

<aside class="example" title="Dit is een voorbeeld">

<script>
  var respecConfig = {
    xref: ["HTML", "link"],
  };
</script>


The [^link^] element is defined in the [[HTML]] spec.
</aside>

<!--
// #### Escaping references


// #### Adding missing references
// #### Extra links at top of the document
// #### Custom Styles

-->

### Definities

<dfn>Respec</dfn>
Tool voor het publiceren van specificatie documenten

<dfn>Standard</dfn>
Explicit set of agreements and rules

<dfn
data-lt="API|WEB API|REST API">
REST API</dfn>
Representational State Transfer, Application Programming Interface)



