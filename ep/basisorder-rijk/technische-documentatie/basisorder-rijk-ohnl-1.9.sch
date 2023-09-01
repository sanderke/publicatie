<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <title>Extra validatie behorend bij de basisorder Rijk - versie voor UBL-OHNL-1.9 (ORDER ONLY)</title>
  <!--
  
    Schematron voor validatie eOrder UBL-OHNL-1.9
    
    Versie basisorder Rijk   - 0.9.0 (juni 2023)
    Datum basisorder Rijk    - 12 juni 2023
    Versie schematron        - 0.9.0
    Datum schematron         - 25 augustus 2023
  
  -->
  <ns prefix="cac" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
  <ns prefix="ext" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"/>
  <ns prefix="cbc" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
  <ns prefix="doc" uri="urn:oasis:names:specification:ubl:schema:xsd:Order-2"/>

  <pattern id="cardinality-redefines">
    <rule context="/doc:Order">
      <!-- BR-NL-BOR-22 - BOR-fout-4 - cbc:ID (verplicht) -->
      <assert id="BR-NL-BOR-22" test="string-length(cbc:ID) gt 0" flag="fatal">BR-NL-BOR-22: Het element 'doc:Order/cbc:ID' is verplicht (Basisorder 1.1 Inkoopordernummer).</assert>
      <!-- BR-NL-BOR-23 - BOR-fout-6 - cbc:DocumentCurrencyCode (verplicht) -->
      <assert id="BR-NL-BOR-23" test="string-length(cbc:DocumentCurrencyCode) gt 0" flag="fatal">BR-NL-BOR-23: Het element 'doc:Order/cbc:DocumentCurrencyCode' is verplicht (Basisorder 1.4 Valuta).</assert>
    </rule>
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party">
      <!-- BR-NL-BOR-24 - BOR-fout-8 - cac:PartyIdentification (precies 1 keer) -->
      <assert id="BR-NL-BOR-24" test="count(cac:PartyIdentification) eq 1" flag="fatal">BR-NL-BOR-24: Het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification' dient eenmaal voor te komen.</assert>
    </rule>
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification">
      <!-- BR-NL-BOR-25 - BOR-fout-9 - cbc:ID (verplicht) -->
      <assert id="BR-NL-BOR-25" test="string-length(cbc:ID) gt 0" flag="fatal">BR-NL-BOR-25: Het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID' is verplicht (Basisorder 2.2 OIN).</assert>
    </rule>
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyName">
      <!-- BR-NL-BOR-27 - BOR-fout-12 - cbc:Name (verplicht) -->
      <assert id="BR-NL-BOR-27" test="string-length(cbc:Name) gt 0" flag="fatal">BR-NL-BOR-27: Het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyName/cbc:Name' is verplicht (Basisorder 2.1 Naam klant).</assert>
    </rule>
    <rule context="/doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyIdentification">
      <!-- BR-NL-BOR-28 - BOR-fout-20 - cbc:ID (verplicht) -->
      <assert id="BR-NL-BOR-28" test="string-length(cbc:ID) gt 0" flag="fatal">BR-NL-BOR-28: Het element 'doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyIdentification/cbc:ID' is verplicht (Basisorder 3.2 Leverancier identificatie).</assert>
    </rule>
    <rule context="/doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyName">
      <!-- BR-NL-BOR-30 - BOR-fout-23 - cbc:Name (verplicht) -->
      <assert id="BR-NL-BOR-30" test="string-length(cbc:Name) gt 0" flag="fatal">BR-NL-BOR-30: Het element 'doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyName/cbc:Name' is verplicht (Basisorder 3.1 Naam leverancier).</assert>
    </rule>
    <rule context="/doc:Order/cac:OrderLine/cac:LineItem">
      <!-- BR-NL-BOR-31 - BOR-fout-27 - cbc:ID (verplicht) -->
      <assert id="BR-NL-BOR-31" test="string-length(cbc:ID) gt 0" flag="fatal">BR-NL-BOR-31: Het element 'doc:Order/cac:OrderLine/cac:LineItem/cbc:ID' is verplicht (Basisorder 6.1 Orderregelnummer).</assert>
      <!-- BR-NL-BOR-32 - BOR-fout-30 - cbc:LineExtensionAmount (verplicht) -->
      <assert id="BR-NL-BOR-32" test="string-length(cbc:LineExtensionAmount) gt 0" flag="fatal">BR-NL-BOR-32: Het element 'doc:Order/cac:OrderLine/cac:LineItem/cbc:LineExtensionAmount' is verplicht (Basisorder 6.7 Orderregelbedrag excl. BTW).</assert>
    </rule>
  </pattern>

  <pattern id="type-restrictions">
    <rule context="/doc:Order">
      <!-- BR-NL-BOR-21 - BOR-fout-2 - doc:Order/cbc:CustomizationID (waarde 1.9) -->
      <assert id="BR-NL-BOR-21" test="cbc:CustomizationID eq '1.9'" flag="fatal">BR-NL-BOR-21: Het element 'doc:Order/cbc:CustomizationID' moet altijd de waarde '1.9' hebben (huidige waarde: '<value-of select="cbc:CustomizationID" />').</assert>
    </rule>
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID">
      <!-- BR-NL-BOR-26 - BOR-fout-10 - @schemeAgencyID (waarde NL) EN @schemeAgencyName (waarde OIN) -->
      <assert id="BR-NL-BOR-26" test="@schemeAgencyID = 'NL' and @schemeAgencyName = 'OIN'" flag="fatal">BR-NL-BOR-26: Van het element '/doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyIdentification/cbc:ID' moet het attribuut '@schemeAgencyID' altijd de waarde 'NL' (huidige waarde: '<value-of select="@schemeAgencyID" />') en het attribuut '@schemeAgencyName' altijd de waarde 'OIN' (huidige waarde: '<value-of select="@schemeAgencyName" />') hebben.</assert>
    </rule>
    <rule context="/doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyIdentification/cbc:ID">
      <!-- BR-NL-BOR-29 - BOR-fout-21 - @schemeAgencyID (waarde NL) EN @schemeAgencyName (waarde KvK of Vest of BTW) -->
      <assert id="BR-NL-BOR-29" test="@schemeAgencyID = 'NL' and (@schemeAgencyName = 'KvK' or @schemeAgencyName = 'Vest' or @schemeAgencyName = 'BTW')" flag="fatal">BR-NL-BOR-29: Van het element '/doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyIdentification/cbc:ID' moet het attribuut '@schemeAgencyID' altijd de waarde 'NL' (huidige waarde: '<value-of select="@schemeAgencyID" />') en het attribuut '@schemeAgencyName' altijd één van de waardes 'KvK', 'Vest' of 'BTW' (huidige waarde: '<value-of select="@schemeAgencyName" />') hebben.</assert>
    </rule>
    <rule context="/doc:Order/cac:OrderLine/cac:LineItem">
      <!-- BR-NL-BOR-33 - BOR-fout-31/BOR-fout-34 - LineExtensionAmount/@currencyID en Price/PriceAmount/@currencyID (gelijk aan doc:Order/cbc:DocumentCurrencyCode)-->
      <assert id="BR-NL-BOR-33" test="(cbc:LineExtensionAmount/@currencyID eq //doc:Order/cbc:DocumentCurrencyCode) and (cac:Price/cbc:PriceAmount/@currencyID eq //doc:Order/cbc:DocumentCurrencyCode)" flag="fatal">BR-NL-BOR-33: Het attribuut 'currencyID' van de elementen 'doc:Order/cac:OrderLine/cac:LineItem/cbc:LineExtensionAmount' (huidige waarde: '<value-of select="cbc:LineExtensionAmount/@currencyID" />') en 'doc:Order/cac:OrderLine/cac:LineItem/cac:Price/cbc:PriceAmount' (huidige waarde: '<value-of select="cac:Price/cbc:PriceAmount/@currencyID" />') moeten gelijk zijn aan de waarde van 'doc:Order/cbc:DocumentCurrencyCode' (huidige waarde: '<value-of select="//doc:Order/cbc:DocumentCurrencyCode" />') (Basisorder 1.4 valuta).</assert>
    </rule>
  </pattern>
</schema>