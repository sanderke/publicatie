# Analyse knelpunten Routering en Intermediairs 


# Introductie


Het is binnen overheidsketens steeds gebruikelijker om gebruik te maken van dienstverlening vanuit de Cloud, en diensten af te nemen van SAAS leveranciers. Dit heeft impact op vragen als wat is het endpoint in een keten, wie is de oorspronkelijker aanbieder of uiteindelijke ontvanger, hoe herken ik die en hoe weet ik dit zeker. Digikoppeling biedt met signing en encryptie tools aan, sommige sectoren hebben voorzieningen ontwikkeld, die bovenstaande vragen deels beantwoorden, andere partijen zijn zoekende hoe om te gaan met de nieuwe situatie.

Dit document gaat in op de knelpunten en oplossingsrichtingen m.b.t. routering.

# Intermediairs & SAAS

## Definitie Intermediair

*Een intermediair is een organisatie **die tussen twee (of meer) partijen berichten via Digikoppeling ontvangt en routeert**. Een intermediair kan dienen als sectoraal knooppunt, waarbij de intermediair meerdere partijen in een samenwerkingsverband ontzorgt en ondersteunt.*

*Een intermediair vormt een schakel in de Digikoppeling-keten tussen serviceaanbieder en serviceafnemer:*

- *Een *transparante* intermediair stuurt berichten door naar het eindpunt (ontvanger) zonder de berichten te bewerken. Een transparante intermediair is zelf dus geen eindpunt in Digikoppeling (1). Het versleutelen van berichtinhoud (berichtenniveau versleuteling) kan worden toegepast indien de intermediair niet vertrouwd wordt.*

- *Een *niet-transparante* intermediair (b.v. een sectoraal knooppunt) bewerkt berichten en is dus een eindpunt binnen Digikoppeling.*

*(1): We beschouwen transparantie hier op de logistieke laag. Op technisch niveau is de intermediair een eindpunt omdat de TLS verbinding tussen twee servers moet worden opgezet.*

*Bron:* [Digikoppeling Architectuur 2.0 ](https://publicatie.centrumvoorstandaarden.nl/dk/architectuur/#intermediairs)

## Definitie van SAAS

_**Software as a service**, vaak afgekort als **SaaS**, ook weleens **software on demand** genoemd, is software die als een online dienst wordt aangeboden. De klant hoeft de software niet aan te schaffen, maar sluit bijvoorbeeld een contract per maand per gebruiker af, eventueel in combinatie met andere parameters. De SaaS-aanbieder zorgt voor installatie, onderhoud en beheer, de gebruiker benadert de software over het internet bij de SaaS-aanbieder._

Kenmerken:

- *De klant hoeft de software en de daarvoor benodigde hardware niet aan te schaffen, maar betaalt slechts voor het gebruik ervan.*

- *De software en hardware wordt niet bij de klant geïnstalleerd, maar bij de ASP / SaaS-aanbieder. De klant heeft toegang tot de software via internet of een privénetwerk.*

# Identificatie van organisaties met OIN

Het OIN (Organisatie Identificatie Nummer) wordt gebruikt om organisaties te identificeren (zie ook [OIN Stelsel](https://publicatie.centrumvoorstandaarden.nl/dk/oin/)
Het SubOIN is een afgeleide van het OIN en is opgesteld volgens de OIN-nummersystematiek en wordt gebruikt voor een organisatieonderdeel, samenwerkingsverband of voorziening. SubOIN's kunnen worden gebruikt om fijnmazig te identificeren. (Aan een OIN kunnen meerdere SubOIN's gekoppeld worden).

# Knelpunten

Knelpunten bij gebruik van intermediairs / SAAS oplossingen zijn:

- Hoe herken je de oorspronkelijke afzender
- Hoe adresseer je de uiteindelijk bestemming
- Hoe regel je identificatie en authenticatie van partijen in een keten

# Oplossingen

## **1 Bevoegdheid intermediair via afspraken**

![intermediair](intermediair.jpg) 

Een intermediair in de rol van 'knooppunt' krijgt de bevoegdheid om dienst van B af te nemen (op basis van of passend in toepasselijke regelgeving). Voor B blijft achterliggende partij A buiten beeld. Of A bevoegd is om de dienst via de Intermediair af te nemen bepaalt de Intermediair op basis van de regelgeving en verantwoordelijkheid;\
(een voorbeeld is een sector loket)

(Bron: [Digikoppeling Identificatie en Authenticatie 1.4.2 ](https://publicatie.centrumvoorstandaarden.nl/dk/idauth/) )

## **2 Bevoegdheid intermediair/SAAS partij door verlenen certificaat**

Organisatie A geeft een certificaat aan de SAAS partij waarmee de SAAS partij zich naar buiten toe identificeert als A. Voor partij B is het dan alsof deze direct met A communiceert

Aandachtspunt:

In de gevallen waarbij certificaten (van A) aan een SAAS leverancier worden afgegeven is dit de manier waarop de SAAS leverancier gemachtigd wordt om namens A te acteren;

Nadeel van deze manier van werken is dat de SAAS leverancier over een 'sleutelbos' van certificaten gaat beschikken wanneer de diensten aan meerdere partijen worden aangeboden.

(Dit vraagt om specifieke aandacht voor certificaatbeheer en beveiligingsaspecten / mogelijk misbruik, denk hierbij bv aan het intrekken van een machtiging)

## **3 Bevoegdheid intermediair/SAAS partij door 'machtigen'**

3a. In dit geval acteert de SAAS partij onder het eigen OIN / SubOIN, Voor partij B is het duidelijk dat zij communiceren met de SAAS partij. Onderlinge afspraken bepalen of de SAAS partij gemachtigd is om namens A bepaalde diensten te gebruiken;

3b. Gebruik van een machtigingen register

De SAAS partij identificeert zich met het eigen OIN / SubOIN. In het machtigingen register kan worden nagegaan of de SAAS partij geautoriseerd is om bepaalde diensten namens een organisatie te verrichten.

![machtigen](machtigen.jpg)

In de handreiking Adressering en Routering zijn de verschillende mogelijkheden meer in detail uitgewerkt:

Zie Handreiking Digikoppeling Adressering en Routering:
https://github.com/Logius-standaarden/Digikoppeling-Handreiking-Adressering-en-Routering/blob/main/main.md
